# AI URL Summarizer
A full-stack web application that allows users to input a public URL and receive an AI-generated summary of the webpage content. The frontend is built with Next.js, and the backend uses Express.js with Google's Gemini AI for summarization.

## Features
- Input any public URL
- Fetch and extract text from the webpage
- Generate concise summaries using AI
- Responsive UI with loading states and error handling
- CORS-enabled API for seamless frontend-backend communication

## Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI Service**: Google Gemini API
- **Other**: Axios for HTTP requests, Readability for HTML parsing

## How AI is Used

The application leverages Google's Gemini AI model to summarize webpage content. Here's the process:
1. User submits a URL via the frontend form.
2. The backend fetches the webpage using Axios.
3. Text is extracted from the HTML using Readability in [`extractTextUtil.js`](server/utils/extractTextUtil.js).
4. The extracted text is sent to the Gemini API via [`aiService.js`](server/services/aiService.js) for summarization.
5. The AI-generated summary is returned to the frontend and displayed.

The AI prompt instructs the model to provide a concise summary of the webpage content, focusing on key points and main ideas.

## Setup Instructions
### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- A Google Gemini API key (obtain from [Google AI Studio](https://makersuite.google.com/app/apikey))

### Backend Setup

1. Navigate to the `server` directory:
   bash
   cd server
   

2. Install dependencies:
   bash
   npm install
   

3. Create a `.env` file in the `server` directory (if not present) and add your Gemini API key:
   
   PORT=8080
   GEMINI_API_KEY=your_gemini_api_key_here
   

4. Start the server:
   bash
   npm run server
   
   The server will run on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the `client` directory:
   bash
   cd client
   
2. Install dependencies:
   bash
   npm install
   

3. Start the development server:
   bash
   npm run dev
   
   The frontend will run on `http://localhost:3000`.

### Running the Application

- Ensure the backend server is running on port 8080.
- Open `http://localhost:3000` in your browser.
- Enter a public URL in the form and click submit to generate a summary.

## API Endpoints

- `POST /api/summarize`: Accepts a JSON payload with a `url` field and returns a summary.


