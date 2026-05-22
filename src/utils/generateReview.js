import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GEMINI_API_KEY
);

export async function generateReview(
    rating,
    selectedTags
) {

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    const prompt = `
    Generate a short restaurant review.

    Rating: ${rating} stars

    Tags:
    ${selectedTags.join(", ")}

    Tone:
    Human, natural, short.
  `;

    const result = await model.generateContent(prompt);

    return result.response.text();
}