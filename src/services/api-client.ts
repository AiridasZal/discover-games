import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b7c571451b8b4d38b891784d9f3d122c'
    }
})