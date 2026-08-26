import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

const WELCOME = "Hi! I'm the SIGNAL LABS assistant. Ask me anything about services, pricing, the process, or how to get started.";

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: WELCOME }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const history = messages.slice(1); // exclude welcome — not a real Claude turn
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
      if (!data.reply) throw new Error("Empty response");
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      const isApiMissing = err.message?.includes("404") || err instanceof SyntaxError;
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: isApiMissing
            ? "The chat API isn't reachable — run the site with `vercel dev` locally, or check that ANTHROPIC_API_KEY is set in Vercel."
            : "Something went wrong. Email signallabs42@gmail.com directly and I'll get back to you.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <div className={`chat-window ${open ? "open" : ""}`} role="dialog" aria-label="Chat assistant">
        <div className="chat-header">
          <div className="chat-header-info">
            <span className="brand-dot" />
            <span>SIGNAL LABS Assistant</span>
          </div>
          <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close chat">
            <X size={16} />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.role}`}>
              <p>{m.content}</p>
            </div>
          ))}
          {loading && (
            <div className="chat-msg assistant">
              <p className="chat-typing"><span /><span /><span /></p>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="chat-input-row">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about pricing, services…"
            disabled={loading}
            aria-label="Chat message"
          />
          <button
            className="btn btn-primary chat-send"
            onClick={send}
            disabled={loading || !input.trim()}
            aria-label="Send message"
          >
            <Send size={15} />
          </button>
        </div>
      </div>

      <button
        className={`chat-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat assistant"}
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
      </button>
    </>
  );
}
