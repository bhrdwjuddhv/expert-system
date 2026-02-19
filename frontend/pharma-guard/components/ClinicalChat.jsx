import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function ClinicalChat() {
    const { analysisId } = useParams();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    analysisId,
                    question: input,
                }),
            });

            const data = await res.json();

            const aiMessage = {
                role: "assistant",
                content: data.answer,
            };

            setMessages((prev) => [...prev, aiMessage]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Something went wrong." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">

            {/* HEADER */}
            <div className="p-6 border-b border-cyan-500/20">
                <h1 className="text-2xl font-bold text-cyan-400">
                    Clinical AI Assistant
                </h1>
                <p className="text-gray-400 text-sm">
                    Analysis ID: {analysisId}
                </p>
            </div>

            {/* CHAT AREA */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`max-w-xl p-4 rounded-xl ${
                            msg.role === "user"
                                ? "ml-auto bg-cyan-600"
                                : "bg-slate-800 border border-cyan-500/20"
                        }`}
                    >
                        {msg.content}
                    </div>
                ))}

                {loading && (
                    <div className="bg-slate-800 p-4 rounded-xl border border-cyan-500/20">
                        Thinking...
                    </div>
                )}

                <div ref={chatEndRef} />
            </div>

            {/* INPUT */}
            <div className="p-4 border-t border-cyan-500/20 flex gap-4">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about drug risks, dosing, or variants..."
                    className="flex-1 bg-slate-800 rounded-lg px-4 py-2 outline-none border border-slate-700 focus:border-cyan-400"
                />

                <button
                    onClick={sendMessage}
                    className="px-6 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
