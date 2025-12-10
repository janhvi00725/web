import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=918109935050&text=Hello%21+I+would+like+to+know+more+about+your+services&type=phone_number&app_absent=0";

  // Button bounce animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateButton((prev) => !prev);
    }, 2000);
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
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          fontSize: "34px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
          transform: `${isOpen ? "rotate(25deg)" : "rotate(0deg)"} ${
            animateButton ? "translateY(-6px)" : "translateY(0)"
          }`,
          transition: "all 0.35s ease",
          zIndex: 1001,
        }}
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </button>

      {/* Popup with smooth bottom animation */}
      <div
        style={{
          position: "fixed",
          bottom: "110px",
          right: "20px",
          width: "330px",
          backgroundColor: "#ffffff",
          borderRadius: "18px",
          padding: "18px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          zIndex: 1000,
          borderTop: "5px solid #25D366",

          // ⭐ ANIMATION HERE ⭐
          transform: isOpen ? "translateY(0)" : "translateY(40px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "transform 0.45s ease, opacity 0.45s ease",
        }}
      >
        <h3
          style={{
            marginBottom: "10px",
            color: "#128C7E",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          💬 Chat with us on WhatsApp!
        </h3>

        <p style={{ marginBottom: "15px", fontSize: "14px", color: "#444" }}>
          Our team is online and ready to help you instantly.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            background: "linear-gradient(135deg, #25D366, #128C7E)",
            color: "white",
            padding: "14px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(135deg, #128C7E, #0e6e63)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(135deg, #25D366, #128C7E)")
          }
        >
          Start Chat
        </a>
      </div>
    </div>
  );
};

export default WhatsAppChat;
