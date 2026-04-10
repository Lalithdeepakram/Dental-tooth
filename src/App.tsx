import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);

  const generateQuestions = () => {
    const q = [
      `What is ${topic}?`,
      `Explain how ${topic} works`,
      `Advantages of ${topic}?`,
      `Limitations of ${topic}?`,
      `Applications of ${topic}?`
    ];
    setQuestions(q);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Viva Generator</h1>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic"
      />

      <button onClick={generateQuestions}>
        Generate Questions
      </button>

      <ul>
        {questions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
