import axios from "axios";

export default {
    getTodos: async()=>{
        return await axios.get('http://127.0.0.1:8000/api/v1/todo');
    }
}