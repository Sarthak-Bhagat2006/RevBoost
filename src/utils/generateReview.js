import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
});

export async function generateReview(
    rating,
    selectedTags
) {

    const prompt = `
    Generate a short restaurant review.

    Rating: ${rating} stars

    Tags:
    ${selectedTags.join(", ")}

    Keep it of one para short 6 lines for vegeterian indian, natural, and human, always positive in any situation.
  `;

    const chatCompletion =
        await groq.chat.completions.create({

            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],

            model: "llama-3.1-8b-instant",
        });

    return chatCompletion.choices[0]
        .message.content;
}