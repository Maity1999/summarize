import React from 'react'
import { useState } from "react"
import { summarizeUrl } from '@/lib/api';
import { ArrowBigRight } from 'lucide-react';


const UrlForm = ({setSummary, setLoading, setError}) => {

  const [url,setUrl]=useState("");
  


  const handleChange=(e)=>{
    setUrl(e.target.value);
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    setError("");
    setSummary("");

    if(!url){
      setError("Please enter a valid URL");
      return;
    }

    try{
      setLoading(true);
      const data=await summarizeUrl(url);
      setSummary(data.summary);
    }catch(error){
      setError("Failed to summarize the URL");
    }finally{
      setLoading(false);
    }
  }

  return (

      <>
        <div className="flex flex-row justify-center mt-10">
          <form onSubmit={handleSubmit} className="relative w-full max-w-3xl">
            <input id="url" type="url" name="url" value={url} onChange={handleChange} placeholder="https://example.com"
              className="block w-full mt-5 bg-white py-1.5 pr-16 pl-4 text-base text-gray-900 h-14 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border rounded-md shadow-sm"/>
            
            
            <button
              type="submit"
              className="absolute right-2 top-[calc(50%+10px)] transform -translate-y-1/2 rounded-md bg-indigo-600 p-2 text-white shadow-xs hover:bg-indigo-500 focus:outline-none flex items-center justify-center">
              <ArrowBigRight size={20} />
            </button>
          </form>
        </div>
      </>
  )
}

export default UrlForm