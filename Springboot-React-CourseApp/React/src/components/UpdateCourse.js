import React, { useEffect } from 'react'
import CourseService from '../services/CourseService'

function UpdateCourse(props) {
    console.log("pretty")
    let id = React.createRef()
    let courseName = React.createRef()
    let courseDuration = React.createRef()
    let booksAvailable = React.createRef()

    useEffect((event) => {
        console.log("Once???")

    }, [])

    function changeDesc(arr, id2, courseName2, courseDuration2, booksAvailable2) {
        const newArr = Array.from(arr);
        for (var i in arr) {
            console.log("hiii", arr[i].id, id)
            if (arr[i].id == id2) {
                const obj = { "id": id2, "courseName": courseName2, "courseDuration": courseDuration2, "booksAvailable": booksAvailable2 }
                newArr[i] = obj
            } 
        }
        console.log("Atleast updated in func")
        console.log(newArr)
        return newArr
    }

    function update(event) {
        event.preventDefault();
        CourseService.updateCourse({ "id": id.current.value, "courseName": courseName.current.value, "courseDuration": courseDuration.current.value, "booksAvailable": booksAvailable.current.value })
        props.setState(changeDesc(props.getState, id.current.value, courseName.current.value, courseDuration.current.value, booksAvailable.current.value));
        alert("Course updated!")
    }
    return (
        <div>
            <form onSubmit={update}>
                UpdateCourse!<br />
                ID: <input type="text" ref={id} /><br />
                Course name: <input type="text" ref={courseName} /><br />
                Course Duration: <input type="text" ref={courseDuration} /><br />
                Books Available: <input type="text" ref={booksAvailable} /><br />
                <button>Update!</button>
            </form>
        </div>
    )
}

export default UpdateCourse;