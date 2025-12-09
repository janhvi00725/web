import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=918109935050&text=Hello%21+I+would+like+to+know+more+about+your+services&type=phone_number&app_absent=0";

  // Add a subtle bounce animation to the button
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateButton((prev) => !prev);
    }, 2000); // bounce every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "linear-gradient(45deg, #25D366, #128C7E)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          fontSize: "32px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
          transform: `${isOpen ? "rotate(20deg)" : "rotate(0deg)"} ${
            animateButton ? "translateY(-5px)" : "translateY(0)"
          }`,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          zIndex: 1001,
        }}
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </button>

      {/* Animated Chat Popup */}
      <div
        style={{
          position: "fixed",
          bottom: isOpen ? "100px" : "-500px",
          right: "20px",
          width: "320px",
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          padding: "15px",
          zIndex: 1000,
          transition: "bottom 0.5s ease, opacity 0.5s ease",
          opacity: isOpen ? 1 : 0,
          borderTop: "4px solid #25D366",
        }}
      >
        <h4 style={{ marginBottom: "10px", color: "#128C7E" }}>
          💬 Chat with us on WhatsApp!
        </h4>
        <p style={{ marginBottom: "15px", fontSize: "14px", color: "#555" }}>
          We are online and ready to help you. Click below to start chatting.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            backgroundColor: "#25D366",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#128C7E")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "#25D366")
          }
        >
          Start Chat
        </a>
      </div>
    </div>
  );
};

export default WhatsAppChat;
