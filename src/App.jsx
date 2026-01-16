import { useState, useEffect } from "react"
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
        padding: "28px",
        marginTop: "36px",
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
        `}
      </style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            color: "#555",
            textAlign: "center",
            lineHeight: "1.6",
            minHeight: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "16px",
            border: "2px solid #FFE8E1",
            width: "100%",
            transition: "all 0.3s ease",
            animation: isSparkling ? "none" : "subtleWiggle 4s ease-in-out infinite", // Changed to more subtle
            boxShadow: "inset 0 2px 8px rgba(255, 107, 147, 0.1)",
          }}
        >
          {compliment}
        </div>

        <button
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
            padding: "16px 32px",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            fontFamily: "'Comic Neue', cursive",
            transition: "all 0.3s ease",
            boxShadow: "0 6px 20px rgba(255, 107, 147, 0.2)",
            position: "relative",
            overflow: "hidden",
            minWidth: "200px",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            Compliment me! 
            <span style={{ 
              animation: "subtleWiggle 2s ease-in-out infinite", // More subtle
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
            fontSize: "14px",
            marginTop: "8px",
          }}
        >
          <span>Click for unlimited cute!</span>
          <span style={{ fontSize: "18px", animation: "float 2s ease-in-out infinite" }}>💝</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [section, setSection] = useState("home")
  const [hovered, setHovered] = useState(null)

  const navItems = [
    { id: "home", label: "home", emoji: "🏠" },
    { id: "about", label: "about", emoji: "👾" },
    { id: "apps", label: "apps", emoji: "🦄" },
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
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Google Fonts import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Patrick+Hand&display=swap');
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
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "85vh",
          minHeight: "650px",
          backgroundColor: "#FFF7F4",
          borderRadius: "30px",
          display: "flex",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(255, 150, 150, 0.2)",
          border: "2px solid #FFE8E1",
          position: "relative",
        }}
      >
        {/* sidebar */}
        <div
          style={{
            width: "100px",
            minWidth: "80px",
            backgroundColor: "#FFE8E1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "32px",
            fontSize: "14px",
            color: "#555",
            gap: "20px",
            borderRight: "2px solid #FFD1DC",
            position: "relative",
            zIndex: 2,
          }}
        >
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

          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              width: "100%",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
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
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                  padding: "8px 0",
                }}
              >
                <div>{item.emoji}</div>
                <div
                  style={{
                    fontSize: "12px",
                    color: section === item.id ? "#FF6B93" : "#777",
                    fontWeight: section === item.id ? "bold" : "normal",
                    fontFamily: "'Patrick Hand', cursive",
                  }}
                >
                  {item.label}
                </div>
                {section === item.id && (
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
              </button>
            ))}
          </nav>

          <div
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
        </div>

        {/* main */}
        <div
          style={{
            flex: 1,
            padding: "40px",
            position: "relative",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ position: "relative", zIndex: 1, flex: 1 }}>
            {section === "home" && (
              <>
                {/* Placeholder for heart */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "40px",
                    width: "250px",
                    height: "250px",
                    background: "radial-gradient(circle, #FFC1CC 0%, #E6B8A2 100%)",
                    borderRadius: "50%",
                    opacity: 0.3,
                    filter: "blur(10px)",
                    zIndex: 0,
                  }}
                />

                <h1
                  style={{
                    fontSize: "clamp(38px, 5vw, 56px)",
                    marginBottom: "16px",
                    color: "#FF6B93",
                    fontFamily: "'Comic Neue', cursive",
                    fontWeight: "700",
                  }}
                >
                  I'm Harshita! 👋
                </h1>

                <div
                  style={{
                    marginBottom: "28px",
                    maxWidth: "540px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.7",
                      color: "#555",
                      marginBottom: "12px",
                      fontFamily: "'Patrick Hand', cursive",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>🎀</span>
                    <span>
                      I make <strong style={{ color: "#FF6B93" }}>cute & silly</strong> React projects when I'm bored.
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.7",
                      color: "#555",
                      fontFamily: "'Patrick Hand', cursive",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>🎨</span>
                    <span>
                      I love designing websites — still figuring out how to monetize that part.
                    </span>
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: "#FFF0EB",
                    padding: "24px",
                    borderRadius: "16px",
                    marginTop: "20px",
                    maxWidth: "540px",
                    border: "2px solid #FFD1DC",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "20px",
                      backgroundColor: "#FFF7F4",
                      padding: "4px 12px",
                      color: "#FF6B93",
                      fontSize: "14px",
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
                      fontSize: "16px",
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
                        fontSize: "15px",
                        color: "#FF6B93",
                        fontWeight: "bold",
                        fontFamily: "'Comic Neue', cursive",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
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
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginTop: "36px",
                    flexWrap: "wrap",
                    maxWidth: "540px",
                  }}
                >
                  {[
                    { emoji: "💻", label: "React Wizardry", value: "100%" },
                    { emoji: "🎨", label: "Cute Designs", value: "∞" },
                    { emoji: "✨", label: "Sparkle Factor", value: "MAX" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: "#FFE8E1",
                        padding: "16px 20px",
                        borderRadius: "12px",
                        textAlign: "center",
                        minWidth: "120px",
                        border: "1px solid #FFD1DC",
                        flex: 1,
                        minWidth: "140px",
                      }}
                    >
                      <div style={{ fontSize: "28px" }}>{stat.emoji}</div>
                      <div style={{ 
                        fontSize: "28px", 
                        fontWeight: "bold", 
                        color: "#FF6B93",
                        margin: "6px 0",
                        fontFamily: "'Comic Neue', cursive",
                      }}>
                        {stat.value}
                      </div>
                      <div style={{ 
                        fontSize: "12px", 
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
                  fontSize: "42px", 
                  color: "#FF6B93", 
                  marginBottom: "24px",
                  fontFamily: "'Comic Neue', cursive",
                }}>
                  silly little apps 🦄
                </h1>
                <p style={{ 
                  color: "#666",
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: "18px",
                }}>Coming soon with extra sparkles! ✨</p>
              </div>
            )}
            {section === "about" && (
              <div>
                <h1 style={{ 
                  fontSize: "42px", 
                  color: "#FF6B93", 
                  marginBottom: "24px",
                  fontFamily: "'Comic Neue', cursive",
                }}>
                  about me 👾
                </h1>
                <p style={{ 
                  color: "#666",
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: "18px",
                }}>Working on something cute here too! 🎀</p>
              </div>
            )}
            {section === "weird" && (
              <div>
                <h1 style={{ 
                  fontSize: "42px", 
                  color: "#FF6B93", 
                  marginBottom: "24px",
                  fontFamily: "'Comic Neue', cursive",
                }}>
                  weird stuff ✨
                </h1>
                <p style={{ 
                  color: "#666",
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: "18px",
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
              fontSize: "12px",
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