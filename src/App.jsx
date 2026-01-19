import { useState } from "react"
import About from "./components/About"
import Shop from "./components/Shop"
import bgImage from "./assets/bg.jpg"

// Compliment Machine Component - Updated with no title and subtle animation
function ComplimentMachine() {
  const [compliment, setCompliment] = useState("Click for something nice! 🌸")
  const [isSparkling, setIsSparkling] = useState(false)
  const [sparkles, setSparkles] = useState([])

  const compliments = [
    "You're more magical than a unicorn's sparkle trail! 🦄✨",
    "Your smile could power a small city with pure joy! ⚡😊",
    "You're doing amazing, sweetie! 💖",
    "Your brain is full of wonderful, creative glitter! ✨🧠",
    "You're the human equivalent of a warm hug! 🤗",
    "Your presence makes everything 10x cuter! 🎀",
    "You're basically a rainbow in human form! 🌈",
    "Your kindness could melt a popsicle in Antarctica! 🍦❄️",
    "You're cooler than a cucumber wearing sunglasses! 🥒😎",
    "Your energy is like a pocketful of sunshine! ☀️👛",
    "You're the sprinkle on the cupcake of life! 🧁✨",
    "You're more delightful than a puppy with a bow tie! 🐶🎀",
    "Your vibe is immaculate, no notes! 💫",
    "You're making the world softer, one smile at a time! 🌍😊",
    "You're a certified cutie patootie! 📝🍬"
  ]

  const generateSparkles = () => {
    const newSparkles = []
    for (let i = 0; i < 12; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        rotation: Math.random() * 360
      })
    }
    setSparkles(newSparkles)
  }

  const handleCompliment = () => {
    setIsSparkling(true)
    generateSparkles()
    
    const randomIndex = Math.floor(Math.random() * compliments.length)
    setCompliment(compliments[randomIndex])
    
    // Reset sparkle animation
    setTimeout(() => setIsSparkling(false), 1500)
  }

  return (
    <div
      style={{
        backgroundColor: "#FFF0EB",
        borderRadius: "24px",
        padding: "clamp(20px, 4vw, 28px)",
        marginTop: "clamp(24px, 4vw, 36px)",
        width: "100%",
        maxWidth: "540px",
        border: "3px solid #FF6B93",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Patrick Hand', cursive",
        boxShadow: "0 8px 32px rgba(255, 107, 147, 0.15)",
      }}
    >
      {/* Sparkle container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          opacity: isSparkling ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            style={{
              position: "absolute",
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              fontSize: `${sparkle.size}px`,
              transform: `rotate(${sparkle.rotation}deg)`,
              transition: "all 0.5s ease",
              animation: isSparkling ? "sparkle 0.5s ease" : "none",
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Sparkle animation - more subtle wiggle */}
      <style>
        {`
          @keyframes sparkle {
            0% { transform: scale(0) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
            100% { transform: scale(1) rotate(360deg); opacity: 0; }
          }
          @keyframes subtleWiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-1deg); }
            75% { transform: rotate(1deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
          }
          
          /* Mobile-specific styles for compliment machine */
          @media (max-width: 768px) {
            .compliment-text {
              font-size: clamp(16px, 4vw, 18px) !important;
              min-height: 60px !important;
              padding: 8px !important;
            }
            
            .compliment-button {
              padding: 12px 24px !important;
              font-size: 16px !important;
              min-width: 160px !important;
            }
          }
          
          @media (max-width: 480px) {
            .compliment-text {
              font-size: 15px !important;
            }
            
            .compliment-button {
              padding: 10px 20px !important;
              font-size: 15px !important;
              min-width: 140px !important;
            }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(16px, 3vw, 24px)",
        }}
      >
        <div
          className="compliment-text"
          style={{
            fontSize: "clamp(16px, 4vw, 20px)",
            color: "#555",
            textAlign: "center",
            lineHeight: "1.6",
            minHeight: "clamp(60px, 10vw, 80px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(8px, 2vw, 12px)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "16px",
            border: "2px solid #FFE8E1",
            width: "100%",
            transition: "all 0.3s ease",
            animation: isSparkling ? "none" : "subtleWiggle 4s ease-in-out infinite",
            boxShadow: "inset 0 2px 8px rgba(255, 107, 147, 0.1)",
          }}
        >
          {compliment}
        </div>

        <button
          className="compliment-button"
          onClick={handleCompliment}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 107, 147, 0.4)"
            e.currentTarget.style.borderColor = "#FF8AB0"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 107, 147, 0.2)"
            e.currentTarget.style.borderColor = "#FF6B93"
          }}
          style={{
            backgroundColor: "#FF6B93",
            color: "white",
            border: "3px solid #FF6B93",
            padding: "clamp(12px, 3vw, 16px) clamp(24px, 5vw, 32px)",
            borderRadius: "50px",
            fontSize: "clamp(16px, 3vw, 18px)",
            fontWeight: "bold",
            cursor: "pointer",
            fontFamily: "'Comic Neue', cursive",
            transition: "all 0.3s ease",
            boxShadow: "0 6px 20px rgba(255, 107, 147, 0.2)",
            position: "relative",
            overflow: "hidden",
            minWidth: "clamp(160px, 40vw, 200px)",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            Compliment me! 
            <span style={{ 
              animation: "subtleWiggle 2s ease-in-out infinite",
              display: "inline-block"
            }}>
              🎀
            </span>
          </span>
          
          {/* Button shine effect */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
              transform: "translateX(-100%)",
              transition: "transform 0.6s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(100%)"
            }}
          />
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#888",
            fontSize: "clamp(12px, 2vw, 14px)",
            marginTop: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span>Click for unlimited cute!</span>
          <span style={{ fontSize: "clamp(16px, 3vw, 18px)", animation: "float 2s ease-in-out infinite" }}>💝</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [section, setSection] = useState("home")
  const [hovered, setHovered] = useState(null)
  const [aboutMode, setAboutMode] = useState("silly")
  const [isMobile, setIsMobile] = useState(false)

  // Check for mobile on mount and resize
  useState(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleAboutMode = () => {
    setAboutMode(aboutMode === "serious" ? "silly" : "serious")
  }

  const navItems = [
    { id: "home", label: "home", emoji: "🏠" },
    { id: "about", label: "about", emoji: "👾" },
    { id: "apps", label: "apps", emoji: "🦄" },
    { id: "shop", label: "shop", emoji: "🛍️" },
    { id: "weird", label: "weird", emoji: "✨" },
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Comic Neue', 'Patrick Hand', cursive, sans-serif",
        padding: "clamp(10px, 3vw, 20px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Google Fonts import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Patrick+Hand&display=swap');
          
          /* Responsive styles */
          @media (max-width: 768px) {
            .main-container {
              flex-direction: column !important;
              height: auto !important;
              min-height: auto !important;
              max-height: 90vh !important;
            }
            
            .sidebar {
              width: 100% !important;
              min-width: 100% !important;
              flex-direction: row !important;
              padding-top: 16px !important;
              padding-bottom: 16px !important;
              border-right: none !important;
              border-bottom: 2px solid #FFD1DC !important;
              gap: 12px !important;
              height: auto !important;
            }
            
            .nav {
              flex-direction: row !important;
              width: auto !important;
              gap: 20px !important;
            }
            
            .nav-button {
              padding: 8px 12px !important;
            }
            
            .main-content {
              padding: clamp(20px, 4vw, 30px) !important;
              height: auto !important;
              overflow-y: auto !important;
            }
            
            .heart-placeholder {
              position: relative !important;
              top: 0 !important;
              right: 0 !important;
              width: 150px !important;
              height: 150px !important;
              margin: 20px auto !important;
            }
            
            .stats-container {
              flex-direction: column !important;
              align-items: center !important;
            }
            
            .stat-box {
              width: 100% !important;
              max-width: 200px !important;
              margin-bottom: 12px !important;
            }
            
            .vertical-text {
              writing-mode: horizontal-tb !important;
              transform: none !important;
              margin: 0 !important;
              padding: 8px !important;
              font-size: 12px !important;
            }
            
            .fun-fact-title {
              font-size: 12px !important;
              padding: 3px 8px !important;
            }
          }
          
          @media (max-width: 480px) {
            .sidebar {
              padding: 12px !important;
              gap: 8px !important;
            }
            
            .nav {
              gap: 12px !important;
            }
            
            .nav-button {
              padding: 6px 10px !important;
              font-size: 16px !important;
            }
            
            .nav-label {
              font-size: 10px !important;
            }
            
            .main-content {
              padding: 16px !important;
            }
            
            .main-title {
              font-size: 28px !important;
              margin-bottom: 12px !important;
            }
            
            .main-text {
              font-size: 16px !important;
              margin-bottom: 20px !important;
            }
            
            .fun-fact-box {
              padding: 16px !important;
            }
          }
          
          /* Tablet styles */
          @media (min-width: 769px) and (max-width: 1024px) {
            .main-container {
              max-width: 95% !important;
              height: 90vh !important;
            }
            
            .sidebar {
              width: 80px !important;
              min-width: 80px !important;
            }
            
            .main-content {
              padding: 30px !important;
            }
          }
          
          /* Hide scrollbar for Chrome, Safari and Opera */
          .main-content::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar for IE, Edge and Firefox */
          .main-content {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>

      {/* Cute background overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 80%, rgba(255,193,204,0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="main-container"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: isMobile ? "auto" : "85vh",
          minHeight: isMobile ? "auto" : "650px",
          backgroundColor: "#FFF7F4",
          borderRadius: "30px",
          display: "flex",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(255, 150, 150, 0.2)",
          border: "2px solid #FFE8E1",
          position: "relative",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* sidebar */}
        <div
          className="sidebar"
          style={{
            width: "100px",
            minWidth: "80px",
            backgroundColor: "#FFE8E1",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: "center",
            justifyContent: isMobile ? "space-around" : "flex-start",
            paddingTop: isMobile ? "16px" : "32px",
            paddingBottom: isMobile ? "16px" : "0",
            fontSize: "14px",
            color: "#555",
            gap: "20px",
            borderRight: isMobile ? "none" : "2px solid #FFD1DC",
            borderBottom: isMobile ? "2px solid #FFD1DC" : "none",
            position: "relative",
            zIndex: 2,
            height: isMobile ? "auto" : "auto",
          }}
        >
          {!isMobile && (
            <div
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#FF6B93",
                marginBottom: "10px",
                fontFamily: "'Comic Neue', cursive",
                transform: "rotate(-2deg)",
              }}
            >
              hi ✨
            </div>
          )}

          <nav
            className="nav"
            style={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              alignItems: "center",
              gap: "20px",
              width: isMobile ? "auto" : "100%",
              justifyContent: isMobile ? "space-around" : "flex-start",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className="nav-button"
                onClick={() => setSection(item.id)}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                  transition: "all 0.2s ease",
                  transform: hovered === item.id ? "scale(1.1)" : "scale(1)",
                  opacity: section === item.id ? 1 : 0.6,
                  position: "relative",
                  width: isMobile ? "auto" : "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                  padding: "8px 0",
                }}
              >
                <div>{item.emoji}</div>
                <div
                  className="nav-label"
                  style={{
                    fontSize: "12px",
                    color: section === item.id ? "#FF6B93" : "#777",
                    fontWeight: section === item.id ? "bold" : "normal",
                    fontFamily: "'Patrick Hand', cursive",
                  }}
                >
                  {item.label}
                </div>
                {section === item.id && !isMobile && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "4px",
                      height: "60%",
                      backgroundColor: "#FF6B93",
                      borderRadius: "0 4px 4px 0",
                    }}
                  />
                )}
                {section === item.id && isMobile && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-6px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "60%",
                      height: "3px",
                      backgroundColor: "#FF6B93",
                      borderRadius: "3px",
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          {!isMobile && (
            <div
              className="vertical-text"
              style={{
                marginTop: "auto",
                marginBottom: "24px",
                fontSize: "11px",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: "#FF6B93",
                letterSpacing: "1px",
                padding: "10px 0",
                fontFamily: "'Comic Neue', cursive",
                fontWeight: "bold",
              }}
            >
              not a portfolio 💌
            </div>
          )}
          
          {isMobile && (
            <div
              style={{
                fontSize: "12px",
                color: "#FF6B93",
                padding: "8px",
                fontFamily: "'Comic Neue', cursive",
                fontWeight: "bold",
              }}
            >
              not a portfolio 💌
            </div>
          )}
        </div>

        {/* main */}
        <div
          className="main-content"
          style={{
            flex: 1,
            padding: "40px",
            position: "relative",
            overflow: isMobile ? "visible" : "auto",
            display: "flex",
            flexDirection: "column",
            height: isMobile ? "auto" : "auto",
          }}
        >
          <div style={{ position: "relative", zIndex: 1, flex: 1 }}>
            {section === "home" && (
              <>
                {/* Placeholder for heart */}
                <div
                  className="heart-placeholder"
                  style={{
                    position: isMobile ? "relative" : "absolute",
                    top: isMobile ? "0" : "20px",
                    right: isMobile ? "0" : "40px",
                    width: isMobile ? "150px" : "250px",
                    height: isMobile ? "150px" : "250px",
                    background: "radial-gradient(circle, #FFC1CC 0%, #E6B8A2 100%)",
                    borderRadius: "50%",
                    opacity: 0.3,
                    filter: "blur(10px)",
                    zIndex: 0,
                    margin: isMobile ? "20px auto" : "0",
                  }}
                />

                <h1
                  className="main-title"
                  style={{
                    fontSize: "clamp(28px, 5vw, 56px)",
                    marginBottom: "clamp(12px, 2vw, 16px)",
                    color: "#FF6B93",
                    fontFamily: "'Comic Neue', cursive",
                    fontWeight: "700",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  I'm Harshita! 👋
                </h1>

                <div
                  className="main-text"
                  style={{
                    marginBottom: "clamp(20px, 4vw, 28px)",
                    maxWidth: "100%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(16px, 3vw, 18px)",
                      lineHeight: "1.7",
                      color: "#555",
                      marginBottom: "clamp(8px, 2vw, 12px)",
                      fontFamily: "'Patrick Hand', cursive",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "clamp(18px, 3vw, 20px)" }}>🎀</span>
                    <span>
                      I make <strong style={{ color: "#FF6B93" }}>cute & silly</strong> React projects when I'm bored.
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(16px, 3vw, 18px)",
                      lineHeight: "1.7",
                      color: "#555",
                      fontFamily: "'Patrick Hand', cursive",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "clamp(18px, 3vw, 20px)" }}>🎨</span>
                    <span>
                      I love designing websites — still figuring out how to monetize that part.
                    </span>
                  </p>
                </div>

                <div
                  className="fun-fact-box"
                  style={{
                    backgroundColor: "#FFF0EB",
                    padding: "clamp(20px, 4vw, 24px)",
                    borderRadius: "16px",
                    marginTop: "clamp(16px, 3vw, 20px)",
                    maxWidth: "100%",
                    border: "2px solid #FFD1DC",
                    position: "relative",
                  }}
                >
                  <div
                    className="fun-fact-title"
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "20px",
                      backgroundColor: "#FFF7F4",
                      padding: "clamp(3px, 1vw, 4px) clamp(10px, 2vw, 12px)",
                      color: "#FF6B93",
                      fontSize: "clamp(12px, 2vw, 14px)",
                      fontWeight: "bold",
                      fontFamily: "'Comic Neue', cursive",
                      borderRadius: "8px",
                      border: "1px solid #FFD1DC",
                    }}
                  >
                    fun fact 🍰
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(14px, 2.5vw, 16px)",
                      lineHeight: "1.6",
                      color: "#666",
                      fontFamily: "'Patrick Hand', cursive",
                    }}
                  >
                    <p style={{ margin: "0 0 12px 0" }}>
                      I started in engineering and somehow ended up in law.
                    </p>
                    <p style={{ margin: "0 0 16px 0" }}>
                      It's a weird combination. I'm aware.
                    </p>
                    <div
                      style={{
                        fontSize: "clamp(13px, 2vw, 15px)",
                        color: "#FF6B93",
                        fontWeight: "bold",
                        fontFamily: "'Comic Neue', cursive",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span>🎯</span>
                      <span>Currently: Making things sparkle ✨</span>
                    </div>
                  </div>
                </div>

                {/* ADDED COMPLIMENT MACHINE */}
                <ComplimentMachine />

                {/* Cute stats */}
                <div
                  className="stats-container"
                  style={{
                    display: "flex",
                    gap: "clamp(12px, 3vw, 16px)",
                    marginTop: "clamp(24px, 4vw, 36px)",
                    flexWrap: "wrap",
                    maxWidth: "100%",
                    justifyContent: isMobile ? "center" : "flex-start",
                  }}
                >
                  {[
                    { emoji: "💻", label: "React Wizardry", value: "100%" },
                    { emoji: "🎨", label: "Cute Designs", value: "∞" },
                    { emoji: "✨", label: "Sparkle Factor", value: "MAX" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="stat-box"
                      style={{
                        backgroundColor: "#FFE8E1",
                        padding: "clamp(12px, 3vw, 16px) clamp(16px, 3vw, 20px)",
                        borderRadius: "12px",
                        textAlign: "center",
                        minWidth: isMobile ? "120px" : "120px",
                        border: "1px solid #FFD1DC",
                        flex: isMobile ? "0 1 auto" : 1,
                        maxWidth: isMobile ? "200px" : "none",
                      }}
                    >
                      <div style={{ fontSize: "clamp(24px, 4vw, 28px)" }}>{stat.emoji}</div>
                      <div style={{ 
                        fontSize: "clamp(24px, 4vw, 28px)", 
                        fontWeight: "bold", 
                        color: "#FF6B93",
                        margin: "clamp(4px, 1vw, 6px) 0",
                        fontFamily: "'Comic Neue', cursive",
                      }}>
                        {stat.value}
                      </div>
                      <div style={{ 
                        fontSize: "clamp(11px, 2vw, 12px)", 
                        color: "#777",
                        fontFamily: "'Patrick Hand', cursive",
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {section === "apps" && (
              <div>
                <h1 style={{ 
                  fontSize: "clamp(32px, 5vw, 42px)", 
                  color: "#FF6B93", 
                  marginBottom: "24px",
                  fontFamily: "'Comic Neue', cursive",
                  textAlign: isMobile ? "center" : "left",
                }}>
                  silly little apps 🦄
                </h1>
                <p style={{ 
                  color: "#666",
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: "clamp(16px, 3vw, 18px)",
                  textAlign: isMobile ? "center" : "left",
                }}>Coming soon with extra sparkles! ✨</p>
              </div>
            )}

            {section === "about" && (
              <About mode={aboutMode} toggleMode={toggleAboutMode} isMobile={isMobile} />
            )}

            {section === "shop" && (
              <Shop isMobile={isMobile} />
            )}

            {section === "weird" && (
              <div>
                <h1 style={{ 
                  fontSize: "clamp(32px, 5vw, 42px)", 
                  color: "#FF6B93", 
                  marginBottom: "24px",
                  fontFamily: "'Comic Neue', cursive",
                  textAlign: isMobile ? "center" : "left",
                }}>
                  weird stuff ✨
                </h1>
                <p style={{ 
                  color: "#666",
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: "clamp(16px, 3vw, 18px)",
                  textAlign: isMobile ? "center" : "left",
                }}>The weirdest things are loading... ⚡</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: "auto",
              paddingTop: "20px",
              borderTop: "2px dotted #FFD1DC",
              fontSize: "clamp(11px, 2vw, 12px)",
              color: "#999",
              textAlign: "center",
              fontFamily: "'Comic Neue', cursive",
            }}
          >
            made with 💖 and too much pink • {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App