import { useState } from "react";
import { generateEmailDraft } from "../services/openaiService";

interface Props {
  companyName: string;
  contactName: string;
  interest: string;
}

const EmailGenerator = ({ companyName, contactName, interest }: Props) => {
  const [emailContent, setEmailContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateEmail = async () => {
    setLoading(true);
    const email = await generateEmailDraft({ companyName, contactName, interest });
    setEmailContent(email);
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded-lg mt-4">
      <h3 className="text-lg font-semibold">맞춤형 이메일 생성</h3>
      <button
        onClick={handleGenerateEmail}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        disabled={loading}
      >
        {loading ? "생성 중..." : "이메일 초안 생성"}
      </button>
      {emailContent && (
        <div className="mt-4">
          <textarea
            className="w-full border p-2 h-32"
            value={emailContent}
            readOnly
          />
          <button
            onClick={() => navigator.clipboard.writeText(emailContent)}
            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          >
            복사하기
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailGenerator;
