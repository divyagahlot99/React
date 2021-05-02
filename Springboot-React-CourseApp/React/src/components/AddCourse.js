import React from 'react'
import CourseService from '../services/CourseService'

function AddCourse(props) {
    let courseName = React.createRef()
    let courseDuration = React.createRef()
    let booksAvailable = React.createRef()
    console.log("Adding?")
    function add(event) {
        event.preventDefault();
        CourseService.addCourse({"courseName": courseName.current.value, "courseDuration": courseDuration.current.value, "booksAvailable": booksAvailable.current.value})  
        alert("Course Added!")   
    }
    return (
        <div>
            <form onSubmit = {add}>
            AddCourse!<br/>
            Course name: <input type = "text" ref = {courseName}/><br/>
            Course Duration: <input type = "text" ref = {courseDuration}/><br/>
            Books Available: <input type = "text" ref = {booksAvailable}/><br/>
            <button>Add Course!</button>
            </form>
        </div>
    )
}

export default AddCourse;
