import axios from 'axios'

const USERS_REST_API_URL = "http://localhost:8080/api"

class CourseService {
    viewCourses() {
        return axios.get(USERS_REST_API_URL + "/viewCourses")
        // return "Hi"
    }
    addCourse(data) {
        console.log("cya")
        console.log(data)
        return axios.post((USERS_REST_API_URL + "/addCourse"), data)
    }
    deleteCourse(data) {
        console.log("Deleting!")
        console.log("ID to be deleted is:", data)
        return axios.post((USERS_REST_API_URL + "/deleteCourse"), data)
    }
    updateCourse(data) {
        console.log("Updating!")
        console.log("ID to be updated is:", data)
        return axios.post((USERS_REST_API_URL + "/updateCourse"), data)
    }
}

export default new CourseService;
