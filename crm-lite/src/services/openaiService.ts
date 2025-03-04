export const generateEmailDraft = async (leadInfo: {
    companyName: string;
    contactName: string;
    interest: string;
  }) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) throw new Error("OpenAI API Key is missing");
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a professional writer in business emails for B2B sales.",
          },
          {
            role: "user",
            content: `Create a polite, engaging sales email for ${leadInfo.contactName} at ${leadInfo.companyName}. 
                      Their interest is ${leadInfo.interest}. Make it concise and persuasive.`,
          },
        ],
        max_tokens: 200,
      }),
    });
  
    const data = await response.json();
    return data.choices[0]?.message?.content || "이메일 생성 실패";
  };
  