import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = "AIzaSyBvUhGTBXHNxw4iVuc9xI91381A1v_MNp0";

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function AskAI(Prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-001",
        contents: Prompt,
    });
    console.log(response.text);
    return response.text;
}

export default AskAI;