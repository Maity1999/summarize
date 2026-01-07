
'use client'
import Loading from "@/components/Loading";
import SummaryResult from "@/components/SummaryResult";
import UrlForm from "@/components/UrlForm";
import { useState } from "react"


export default function Home() {

  const [summary,setSummary]=useState("");
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  return (

    <div className="container flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-2xl w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-500 mb-4">AI URL Summarizer</h1>
          <p className="text-lg text-gray-600">Enter any public URL and get a short AI-generated summary.</p>
        </div>
        <UrlForm setSummary={setSummary} setLoading={setLoading} setError={setError}/>

        {loading && <Loading/>}
        {error && <p className="text-red-400 text-center mt-4">{error}</p>}
        {summary && <SummaryResult result={summary}/>}
      </div>
    </div>
    
  );
}
