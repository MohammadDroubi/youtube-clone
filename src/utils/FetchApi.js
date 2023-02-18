import axios from "axios";

const Base_Url='https://youtube-v31.p.rapidapi.com'
const options = {
   
    params: {
      maxResults: '50',
      
    },
    headers: {
      'X-RapidAPI-Key': '0576de9cb9msh6c617d017dfd014p1a60f7jsn45c463718db7',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const FetchApi=async (url)=>{
let {data}=await axios.get(`${Base_Url}/${url}`,options);

return data
}
