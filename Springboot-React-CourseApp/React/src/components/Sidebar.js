import React from 'react'
import ViewCourses from './ViewCourses'
import AddCourse from './AddCourse'
import Home from './Home'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import CourseService from '../services/CourseService'

function Sidebar(props) {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to = "/home">Home</Link></li>
                    <li><Link to = "/viewCourses">View Courses</Link></li>
                    <li><Link to = "/addCourse">Add Course</Link></li>
                </ul>
                <Route path = "/home" render={() => <Home {...props} getState = {props.getState} setState = {props.setState}/> }></Route>
                
                <Route path = "/viewCourses" render={() => <ViewCourses {...props} getState = {props.getState} setState = {props.setState}/> }></Route>
                <Route path = "/addCourse" render={() => <AddCourse {...props} getState = {props.getState} setState = {props.setState}/> }></Route>
            </BrowserRouter>
        </div>
    )
}

export default Sidebar;