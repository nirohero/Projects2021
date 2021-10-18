const Joi = require('joi');
const { request, response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

const courses =[
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello World!!!'); 
});

app.get('/api/courses', (req,res) =>{
    res.send(courses);
});

app.get('/api/courses/:id', (req,res) =>{
        const course = courses.find(c => c.id === parseInt(req.params.id));
        if(!course) res.status(404).send('The course with the given ID was not found.');
        res.send(course);

});

app.post('api/courses', (req,res) =>{
    const { error } = validateCourse(req.body);//result.error
    if(error)
        return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('ap/courses/:id', (req,res) =>{
    //Look up course 
    //If not existing, return 404

    //Validate
    //if Invalid, return 400 - Bad request
    //Return the updated course
    

    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);//result.error
    if(error)
    return res.status(400).send(error.details[0].message);
      

    //Update course
    course.name = req.body.name;
    response.send(course);
    
    function validateCourse(course){
        const schema ={
            name: Joi.string().min(3).required()
        };
    
        return Joi.validate(course, schema);
    }

    const course = courses.find(c => c.id === parseInt(req.params.id));
        if(!course) res.status(404).send('The course with the given ID was not found.');

});

app.delete('api/courses/:id', (req,res)=>{
    //Look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) 
    return res.status(404).send('The course with the given ID was not found.'); 

    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);

});


// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ${port}...'));
