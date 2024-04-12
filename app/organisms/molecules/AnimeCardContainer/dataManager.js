import axios from "../../../api/axios";
const GET_URL = 'animes/readAll/'

export default async function dataManager(input) {
    const response = await axios.get(GET_URL+input);
    console.log("test")
    console.log(response.data) ;
    return response.data ;
}

