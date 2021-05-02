import React, { useEffect } from 'react'
import Course from './Course'
import CourseService from '../services/CourseService'
import UpdateCourse from './UpdateCourse'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function CourseList(props) {
    console.log("oops")
    useEffect(() => {
        console.log("Once???")
        CourseService.viewCourses().then(
            (response) => {
                props.setState(response.data)
            }
            ).catch(err => { 
                console.log(err) 
            });
    }, [])

    function del(id, courseName, courseDuration, booksAvailable) {
        console.log("yayyy")
        console.log(id, courseName, courseDuration, booksAvailable)
        CourseService.deleteCourse({"id": id, "courseName": courseName, "courseDuration": courseDuration}) 
        props.setState(props.getState.filter(item => (item.id !== id)));  
    }

    return (
        <div>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <td> Id </td>
                        <td> Course name </td>
                        <td> Course duration </td>
                        <td> Books Available </td>
                        <td> Delete </td>
                        <td> Update </td>
                    </tr>
                </thead>
                <tbody>
                    {props.getState.map(
                        user =>
                        <tr>
                            <td> {user.id} </td>
                            <td> {user.courseName}</td>
                            <td> {user.courseDuration} </td>
                            <td> {user.booksAvailable} </td>
                            <td> <button onClick = {() => del(user.id, user.courseName, user.courseDuration, user.booksAvailable)} >Delete</button> </td>
                            {/* <td> <button onClick = {<UpdateCourse id = {user.id} courseName = {user.courseName} courseDuration = {user.courseDuration} booksAvailable = {user.booksAvailable}/>}>Edit</button> </td> */}
                            <td> <button> <Link to = "/viewCourses/updateCourse">Edit</Link></button></td>
                        </tr>
                        
                    )}
                    <Route path = "/viewCourses/updateCourse" render={() => <UpdateCourse {...props} getState = {props.getState} setState = {props.setState} id2 = {props.id} courseName = {props.courseName} courseDuration = {props.courseDuration} booksAvailable = {props.booksAvailable}/> }></Route>

                </tbody>
            </table>
            
        </div>
    )
}

export default CourseList;