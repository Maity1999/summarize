import axios from "axios";

export const fetchPageHtml=async(url)=>{

    const response=await axios.get(url,{
        timeout: 10000,
        headers: {
        "User-Agent": "Mozilla/5.0"
        }
    });
    return response.data;
}