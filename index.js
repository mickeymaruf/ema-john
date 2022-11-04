const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

// middlewares
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@cluster0.ld8a5ol.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try {
        const productCollection = client.db('ema-john').collection('products');

        // products
        app.get('/products', async (req, res) => {
            const page = req.query.page;
            const size = +req.query.size;
            const query = {}
            const cursor = productCollection.find(query);
            const products = await cursor.skip(page * size).limit(size).toArray();
            const productsCount = await productCollection.estimatedDocumentCount();
            res.send({ productsCount, products });
        })

        app.post('/productsByIds', async (req, res) => {
            const ids = req.body;
            const exactIds = ids.map(id => ObjectId(id));
            const query = { _id: { $in: exactIds } };
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        })
    }
    finally {
        // 
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Server is running...');
})

app.listen(port, () => {
    console.log('App is running on port ', port);
})