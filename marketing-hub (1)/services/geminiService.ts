
import { GoogleGenAI } from "@google/genai";

export async function generateMarketingAdvice(prompt: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: "You are an expert digital marketing consultant for 'Local build'. You help local businesses grow across platforms like YouTube, Instagram, Facebook, X, and LinkedIn. Be professional, concise, and offer actionable advice. Always mention how AI can automate growth on these specific social niches.",
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "There was an error connecting to our AI core. Please try again later.";
  }
}

export async function* streamMarketingAdvice(prompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const stream = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: "You are a professional marketing strategist for Local build. Provide short, bulleted actionable steps for social media dominance.",
      }
    });

    for await (const chunk of stream) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini Stream Error:", error);
    yield "Communication error.";
  }
}
