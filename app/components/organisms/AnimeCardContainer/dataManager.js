import axios from "../../../api/axios";
const GET_URL = "animes/readAll";

export default async function dataManager() {
  const response = await axios.get(GET_URL );
  const result = response.data;
  const length = response.data.length;  
  return  {result,length};
}
