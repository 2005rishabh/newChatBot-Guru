import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing Gemini API key');
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: 'gemini-flash-latest',
  systemInstruction: 'You are a helpful and professional TechParts assistant. Keep your responses concise and well-structured. Use bullet points (•) or numbered lists for recommendations and comparisons. Avoid large tables or complex formatting that might break in a small window.'
});

export const generateChatResponse = async (
  messages: { text: string; isBot: boolean }[]
): Promise<string> => {
  try {
    const chat = model.startChat({
      history: messages
        .slice(0, -1)
        .filter(() => true)
        // actually, let's fix the logic properly.
        .reduce((acc, msg) => {
          if (acc.length === 0 && msg.isBot) return acc;
          acc.push(msg);
          return acc;
        }, [] as { text: string; isBot: boolean }[])
        .map(msg => ({
          role: msg.isBot ? 'model' : 'user',
          parts: [{ text: msg.text }],
        })),
      generationConfig: {
        maxOutputTokens: 1500,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(messages[messages.length - 1].text);
    const response = await result.response.text();

    // ✅ Fix AI formatting issues
    return formatResponse(response);
  } catch (error) {
    console.error('Error generating chat response:', error);
    return "I'm sorry, I encountered an error. Please try again later.";
  }
};

/**
 * Cleans and formats the AI response for better readability.
 */
const formatResponse = (response: string): string => {
  return response.trim();
};
