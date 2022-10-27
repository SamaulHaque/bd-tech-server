const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('bd tech server is running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
        const course = courses.filter(n => n.category_id === id)
        res.send(course)
})


app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(course => course._id === id);
    res.send(selectCourse);
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(crs => crs._id === id )
    res.send(course);
})

app.listen(port, ()=> {
    console.log(`bd tech server running on, ${port}`)
})