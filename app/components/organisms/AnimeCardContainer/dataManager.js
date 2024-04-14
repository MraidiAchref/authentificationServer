import axios from "../../../api/axios";
const GET_URL = "animes/readAll/";

export default async function dataManager(fromAnimeNumber,toAnimeNumber) {

  const response =  await axios.get(GET_URL+fromAnimeNumber+'/'+toAnimeNumber );
  return  response.data;
}

