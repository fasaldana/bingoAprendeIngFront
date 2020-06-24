import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
const BINGO_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${BINGO_API_URL}/instructors/${INSTRUCTOR}`

class BingoDataService {

    retrieveAllData(name) {
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }
}

export default new BingoDataService()