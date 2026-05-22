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

   Generate a short 6-line restaurant review in one paragraph.

Restaurant Name: Hotel Vedas

Location: Pune-Nashik Highway, Sangamner

The restaurant serves vegetarian Indian food.

The review should:

- sound natural and human

- always be positive

- mention taste, ambience, or service naturally

- feel genuine, not robotic

- be concise and mobile-friendly

- avoid exaggeration
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