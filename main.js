import {
    GoogleGenAI,
    createUserContent,
    createPartFromUri,
  } from "@google/genai";
  
  const ai = new GoogleGenAI({ apiKey: "AIzaSyBdCANz8kiQgLqqk8x6fWAE1Pw7EIPO5tc" });
  
  async function main() {
    const image = await ai.files.upload({
      file: "3.jpeg",
    });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        createUserContent([
          "Tell me about this image",
          createPartFromUri(image.uri, image.mimeType),
        ]),
      ],
    });
    console.log(response.text);
  }
  
  await main();