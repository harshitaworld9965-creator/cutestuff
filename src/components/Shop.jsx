// components/Shop.jsx
import { useState } from "react"

const Shop = ({ isMobile = false }) => {
  const [showNotification, setShowNotification] = useState(false)

  const handleNotifyMe = () => {
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  return (
    <div style={{ padding: isMobile ? "20px 0" : "40px 0" }}>
      {/* Responsive styles */}
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          .notification {
            animation: floatUp 0.5s ease-out;
          }
          
          @media (max-width: 768px) {
            .shop-title {
              font-size: 32px !important;
              margin-bottom: 20px !important;
            }
            
            .shop-subtitle {
              font-size: 18px !important;
              margin-bottom: 30px !important;
            }
            
            .construction-box {
              padding: 20px !important;
              margin-bottom: 24px !important;
            }
            
            .tool-card {
              padding: 20px !important;
              margin-bottom: 16px !important;
            }
          }
        `}
      </style>

      <h1 
        className="shop-title"
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          color: "#FF6B93",
          textAlign: "center",
          marginBottom: "32px",
          fontFamily: "'Comic Neue', cursive",
          fontWeight: "700",
        }}
      >
        🛍️ Cute Digital Wellness Shop
      </h1>

      <p 
        className="shop-subtitle"
        style={{
          fontSize: "clamp(18px, 3vw, 22px)",
          color: "#666",
          textAlign: "center",
          marginBottom: "40px",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily: "'Patrick Hand', cursive",
          lineHeight: "1.6",
        }}
      >
        Coming soon! A collection of adorable digital tools for mental wellness, 
        mindful productivity, and creative self-care. Everything cute & supportive! ✨
      </p>

      {/* Construction Zone */}
      <div 
        className="construction-box"
        style={{
          backgroundColor: "#FFF0EB",
          borderRadius: "24px",
          padding: "32px",
          marginBottom: "32px",
          border: "3px dashed #FF6B93",
          textAlign: "center",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "16px", animation: "bounce 2s infinite" }}>
          🚧
        </div>
        <h3 style={{
          fontSize: "24px",
          color: "#FF6B93",
          marginBottom: "12px",
          fontFamily: "'Comic Neue', cursive",
        }}>
          Under Construction!
        </h3>
        <p style={{
          fontSize: "16px",
          color: "#666",
          marginBottom: "24px",
          fontFamily: "'Patrick Hand', cursive",
        }}>
          Currently building the cutest digital wellness shop!
          <br />
          Launching soon with self-care tools and mindful surprises! ✨
        </p>
        
        {/* Notification Form */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "16px",
          padding: "20px",
          border: "2px solid #FFE8E1",
        }}>
          <p style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "16px",
            fontFamily: "'Comic Neue', cursive",
          }}>
            Want to know when we launch?
          </p>
          
          <button
            onClick={handleNotifyMe}
            style={{
              backgroundColor: "#FF6B93",
              color: "white",
              border: "none",
              padding: "14px 32px",
              borderRadius: "50px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              fontFamily: "'Comic Neue', cursive",
              transition: "all 0.3s ease",
              boxShadow: "0 6px 20px rgba(255, 107, 147, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 107, 147, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 107, 147, 0.2)"
            }}
          >
            🎯 Notify Me When Ready!
          </button>
          
          {showNotification && (
            <div 
              className="notification"
              style={{
                marginTop: "16px",
                padding: "12px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #81C784",
                borderRadius: "12px",
                color: "#2E7D32",
                fontSize: "14px",
                fontFamily: "'Patrick Hand', cursive",
              }}
            >
              ✅ You'll be the first to know! Thanks for your interest! 🎀
            </div>
          )}
        </div>
      </div>

      {/* Coming Soon Preview */}
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h3 style={{
          fontSize: "24px",
          color: "#FF6B93",
          textAlign: "center",
          marginBottom: "24px",
          fontFamily: "'Comic Neue', cursive",
        }}>
          What's Coming? 🌟
        </h3>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: "20px",
          marginBottom: "40px",
        }}>
          {/* Tool Card 1 - Mental Health */}
          <div 
            className="tool-card"
            style={{
              backgroundColor: "#E3F2FD",
              borderRadius: "20px",
              padding: "24px",
              border: "2px solid #90CAF9",
              opacity: 0.7,
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>💖</div>
            <h4 style={{
              fontSize: "18px",
              color: "#1976D2",
              marginBottom: "8px",
              fontFamily: "'Comic Neue', cursive",
            }}>
              Mental Health Digital Tools
            </h4>
            <p style={{
              fontSize: "14px",
              color: "#555",
              fontFamily: "'Patrick Hand', cursive",
            }}>
              Mood trackers, anxiety relief exercises, and self-care planners!
            </p>
          </div>
          
          {/* Tool Card 2 - Mindful Productivity */}
          <div 
            className="tool-card"
            style={{
              backgroundColor: "#FFF3E0",
              borderRadius: "20px",
              padding: "24px",
              border: "2px solid #FFB74D",
              opacity: 0.7,
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>🎯</div>
            <h4 style={{
              fontSize: "18px",
              color: "#F57C00",
              marginBottom: "8px",
              fontFamily: "'Comic Neue', cursive",
            }}>
              Mindful Productivity Apps
            </h4>
            <p style={{
              fontSize: "14px",
              color: "#555",
              fontFamily: "'Patrick Hand', cursive",
            }}>
              Focus timers, goal setters, and burnout prevention tools!
            </p>
          </div>
          
          {/* Tool Card 3 - Creative Self-Care */}
          <div 
            className="tool-card"
            style={{
              backgroundColor: "#E8F5E9",
              borderRadius: "20px",
              padding: "24px",
              border: "2px solid #81C784",
              opacity: 0.7,
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>🎨</div>
            <h4 style={{
              fontSize: "18px",
              color: "#388E3C",
              marginBottom: "8px",
              fontFamily: "'Comic Neue', cursive",
            }}>
              Creative Self-Care Kits
            </h4>
            <p style={{
              fontSize: "14px",
              color: "#555",
              fontFamily: "'Patrick Hand', cursive",
            }}>
              Digital journals, gratitude trackers, and art therapy exercises!
            </p>
          </div>
          
          {/* Tool Card 4 - Wellness Guides */}
          <div 
            className="tool-card"
            style={{
              backgroundColor: "#F3E5F5",
              borderRadius: "20px",
              padding: "24px",
              border: "2px solid #BA68C8",
              opacity: 0.7,
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>📚</div>
            <h4 style={{
              fontSize: "18px",
              color: "#7B1FA2",
              marginBottom: "8px",
              fontFamily: "'Comic Neue', cursive",
            }}>
              Wellness Guides & Courses
            </h4>
            <p style={{
              fontSize: "14px",
              color: "#555",
              fontFamily: "'Patrick Hand', cursive",
            }}>
              Learn mindful habits and build emotional resilience! 🌱
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{
        backgroundColor: "#FFF0EB",
        borderRadius: "20px",
        padding: "32px",
        marginTop: "40px",
        border: "2px solid #FFD1DC",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <h3 style={{
          fontSize: "22px",
          color: "#FF6B93",
          marginBottom: "20px",
          textAlign: "center",
          fontFamily: "'Comic Neue', cursive",
        }}>
          ❓ Frequently Asked Questions
        </h3>
        
        <div style={{ textAlign: "left" }}>
          <div style={{ marginBottom: "20px" }}>
            <div style={{
              fontSize: "16px",
              color: "#555",
              fontWeight: "bold",
              marginBottom: "8px",
              fontFamily: "'Comic Neue', cursive",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span>🛒</span>
              <span>What kind of products will you sell?</span>
            </div>
            <p style={{
              fontSize: "14px",
              color: "#666",
              fontFamily: "'Patrick Hand', cursive",
              paddingLeft: "32px",
            }}>
              Digital tools for mental wellness and mindful productivity! Mood trackers, 
              self-care planners, focus apps, and emotional resilience guides.
            </p>
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <div style={{
              fontSize: "16px",
              color: "#555",
              fontWeight: "bold",
              marginBottom: "8px",
              fontFamily: "'Comic Neue', cursive",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span>💰</span>
              <span>How will payments work?</span>
            </div>
            <p style={{
              fontSize: "14px",
              color: "#666",
              fontFamily: "'Patrick Hand', cursive",
              paddingLeft: "32px",
            }}>
              Secure payments via Gumroad or Stripe. Instant digital delivery after purchase!
            </p>
          </div>
          
          <div>
            <div style={{
              fontSize: "16px",
              color: "#555",
              fontWeight: "bold",
              marginBottom: "8px",
              fontFamily: "'Comic Neue', cursive",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span>🎯</span>
              <span>When will the shop launch?</span>
            </div>
            <p style={{
              fontSize: "14px",
              color: "#666",
              fontFamily: "'Patrick Hand', cursive",
              paddingLeft: "32px",
            }}>
              Working on it! Sign up for notifications to be the first to know. ✨
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer Note */}
      <div style={{
        textAlign: "center",
        marginTop: "40px",
        color: "#999",
        fontSize: "14px",
        fontFamily: "'Comic Neue', cursive",
      }}>
        Made with 💖 and too many sparkles • Launching soon! 🚀
      </div>
    </div>
  )
}

export default Shop