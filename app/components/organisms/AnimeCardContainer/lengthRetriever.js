import axios from "../../../api/axios";
const GET_URL = "animes/countAnimes";

export default  function lengthRetriever() {
  return   axios.get(GET_URL );
}

