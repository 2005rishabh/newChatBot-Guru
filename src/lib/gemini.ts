import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing Gemini API key');
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export const generateChatResponse = async (
  messages: { text: string; isBot: boolean }[]
): Promise<string> => {
  try {
    const chat = model.startChat({
      history: messages.map(msg => ({
        role: msg.isBot ? 'model' : 'user',
        parts: msg.text,
      })),
      generationConfig: {
        maxOutputTokens: 300,
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
  return response
    .replace(/\n{2,}/g, '\n') // Remove excessive blank lines
    .replace(/\n•/g, '\n\n-') // Convert bullet points properly with spacing
    .replace(/\n\*/g, '\n\n-') // Handle alternative bullet styles
    .replace(/\*\*\s?/g, '') // Remove misplaced bold markers
    .replace(/-\s+/g, '- ') // Fix bullet spacing issues
    .replace(/(\*)/g, '-\n\n*') // Ensure proper spacing before categories
    .trim(); // Remove leading/trailing whitespace
};
