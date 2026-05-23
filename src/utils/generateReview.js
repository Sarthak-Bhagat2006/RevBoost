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

   Write a very short Google review for Hotel Vedas at Sangamner.

Rules:

- Use simple English

- No fancy words

- Sound like a normal customer

- Keep it positive

- Only 4 to 5 short sentences

- Mention food or service naturally

- Keep it human and casual

`;;

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