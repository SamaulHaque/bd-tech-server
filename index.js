const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('bd tech server is running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(crs => crs.id == id )
    res.send(course);
})

app.listen(port, ()=> {
    console.log(`bd tech server running on, ${port}`)
})