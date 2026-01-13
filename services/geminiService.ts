
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateProjectInsights(projectName: string, status: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a brief, high-level executive insight report for a systems engineering project named "${projectName}" which is currently "${status}". Focus on efficiency, ROI potential, and next technical steps. Keep it under 100 words. Format with simple bullet points.`,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });
    return response.text || "Unable to generate insights at this time.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The intelligence module is temporarily offline. Please try again later.";
  }
}
