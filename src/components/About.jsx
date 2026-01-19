// About.jsx
import { useState } from "react"

const About = ({ mode, toggleMode }) => {
  const [activeSection, setActiveSection] = useState(null)
  
  const sections = [
    {
      id: "engineering",
      icon: "🎓",
      title: "Engineering Background",
      color: "#E3F2FD",
      borderColor: "#90CAF9",
      serious: {
        question: "What's your engineering background?",
        answer: "I completed a degree in Mathematics and Engineering, focusing on software development, system architecture and machine learning. It gave me a strong foundation in logical thinking and problem-solving."
      },
      silly: {
        question: "So you can fix printers, right?",
        answer: "I can't fix printers but I can make websites that make you forget about broken printers! 🖨️➡️✨"
      }
    },
    {
      id: "law",
      icon: "⚖️",
      title: "Law Journey",
      color: "#F3E5F5",
      borderColor: "#CE93D8",
      serious: {
        question: "Why transition from engineering to law?",
        answer: "I became fascinated with intellectual property law and how it intersects with technology. Understanding legal frameworks helps create better digital products. Also I am super into Criminal law. No it shouldn't scare you, wink wink."
      },
      silly: {
        question: "Lawyer by day, coder by night?",
        answer: "More like 'argues with CSS by day, writes legal docs by night' while drinking excessive amounts of coffee! ☕⚖️💻"
      }
    },
    {
      id: "design",
      icon: "🎨",
      title: "Design Love",
      color: "#FFEBEE",
      borderColor: "#FF8A80",
      serious: {
        question: "What draws you to design?",
        answer: "I believe good design makes technology accessible and joyful. I focus on creating intuitive, aesthetically pleasing interfaces that enhance user experience."
      },
      silly: {
        question: "How much pink is too much pink?",
        answer: "Trick question! There's no such thing as 'too much pink' in my universe! 🌸💕🎀 The more sparkle, the better!"
      }
    },
    {
      id: "react",
      icon: "💻",
      title: "React Projects",
      color: "#E8F5E9",
      borderColor: "#81C784",
      serious: {
        question: "Why React for your projects?",
        answer: "React's component-based architecture aligns perfectly with how I think about design systems. It allows for reusable, maintainable code and excellent developer experience."
      },
      silly: {
        question: "React or snacks while coding?",
        answer: "Both! Nothing beats coding with one hand and eating gummy bears with the other! 🧸➕⚛️ = 💖"
      }
    },
    {
      id: "process",
      icon: "✨",
      title: "Creative Process",
      color: "#FFF3E0",
      borderColor: "#FFB74D",
      serious: {
        question: "What's your creative process?",
        answer: "I start with rough sketches, move to wireframes, then implement with code. I iterate based on user feedback and constantly refine for better UX."
      },
      silly: {
        question: "Do you have a creative ritual?",
        answer: "1. Stare at blank screen. 2. Drink tea. 3. Add sparkles. 4. Magic happens! ✨ Sometimes steps 1-3 repeat... a lot. 😅"
      }
    },
    {
      id: "hobbies",
      icon: "🌈",
      title: "Hobbies & Interests",
      color: "#FFFDE7",
      borderColor: "#FFF176",
      serious: {
        question: "What are your interests outside work?",
        answer: "I enjoy illustration, reading about UX psychology, experimenting with new CSS techniques, and exploring how technology can be more human-centered."
      },
      silly: {
        question: "Any secret talents?",
        answer: "I can identify 37 shades of pink, make websites dance, and consume alarming amounts of bubble tea! 🧋💃"
      }
    },
    {
      id: "future",
      icon: "🚀",
      title: "Future Goals",
      color: "#E1F5FE",
      borderColor: "#4FC3F7",
      serious: {
        question: "What are your future aspirations?",
        answer: "I aim to bridge the gap between law, technology, and design—creating tools that are not only functional but also ethically sound and delightful to use."
      },
      silly: {
        question: "World domination plans?",
        answer: "Step 1: Make everything cuter. Step 2: Add more sparkles. Step 3: Profit? 🦄✨ Actually just want to make the internet happier!"
      }
    },
    {
      id: "quirks",
      icon: "🦄",
      title: "Fun Quirks",
      color: "#F3E5F5",
      borderColor: "#BA68C8",
      serious: {
        question: "What makes your approach unique?",
        answer: "Combining analytical thinking from engineering with systematic thinking from law allows me to approach design problems from multiple perspectives."
      },
      silly: {
        question: "Weirdest project you've made?",
        answer: "A website that turns legal documents into haiku poetry. It's... surprisingly therapeutic! 📝➡️🌸"
      }
    }
  ]

  return (
    <div style={{ padding: "20px 0" }}>
      {/* Mode Toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            color: mode === "serious" ? "#666" : "#FF6B93",
            fontWeight: mode === "serious" ? "bold" : "normal",
            transition: "all 0.3s ease",
          }}
        >
          Serious Mode
        </div>
        
        <button
          onClick={toggleMode}
          style={{
            width: "60px",
            height: "30px",
            backgroundColor: mode === "serious" ? "#90CAF9" : "#FF6B93",
            border: "none",
            borderRadius: "15px",
            position: "relative",
            cursor: "pointer",
            transition: "all 0.3s ease",
            padding: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "2px",
              left: mode === "serious" ? "4px" : "34px",
              width: "26px",
              height: "26px",
              backgroundColor: "white",
              borderRadius: "50%",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            {mode === "serious" ? "⚖️" : "✨"}
          </div>
        </button>
        
        <div
          style={{
            fontSize: "14px",
            color: mode === "silly" ? "#FF6B93" : "#666",
            fontWeight: mode === "silly" ? "bold" : "normal",
            transition: "all 0.3s ease",
          }}
        >
          Silly Mode
        </div>
      </div>

      {/* Section Navigation */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
          marginBottom: "40px",
          padding: "0 20px",
        }}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              const element = document.getElementById(section.id)
              element?.scrollIntoView({ behavior: "smooth", block: "start" })
              setActiveSection(section.id)
              setTimeout(() => setActiveSection(null), 1000)
            }}
            style={{
              padding: "10px 16px",
              backgroundColor: section.color,
              border: `2px solid ${activeSection === section.id ? "#FF6B93" : section.borderColor}`,
              borderRadius: "25px",
              cursor: "pointer",
              fontSize: "14px",
              fontFamily: "'Comic Neue', cursive",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
              transform: activeSection === section.id ? "scale(1.05)" : "scale(1)",
            }}
          >
            <span>{section.icon}</span>
            <span>{section.title}</span>
          </button>
        ))}
      </div>

      {/* Sections */}
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            style={{
              backgroundColor: section.color,
              borderRadius: "20px",
              padding: "28px",
              marginBottom: "24px",
              border: `3px solid ${section.borderColor}`,
              transition: "all 0.3s ease",
              cursor: "pointer",
              fontFamily: "'Patrick Hand', cursive",
            }}
            onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)"
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  backgroundColor: "white",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `2px solid ${section.borderColor}`,
                }}
              >
                {section.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    color: "#555",
                    margin: 0,
                    fontFamily: "'Comic Neue', cursive",
                  }}
                >
                  {section.title}
                </h3>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#888",
                    marginTop: "4px",
                  }}
                >
                  Click to {activeSection === section.id ? "collapse" : "expand"}
                </div>
              </div>
            </div>

            <div
              style={{
                fontSize: "18px",
                color: "#444",
                lineHeight: "1.6",
                marginBottom: "12px",
                fontFamily: "'Comic Neue', cursive",
                fontWeight: "500",
              }}
            >
              {mode === "serious" ? section.serious.question : section.silly.question}
            </div>

            <div
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.7",
                padding: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.9)",
              }}
            >
              {mode === "serious" ? section.serious.answer : section.silly.answer}
            </div>

            {/* Reaction buttons */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "20px",
                paddingTop: "16px",
                borderTop: "1px dashed rgba(0,0,0,0.1)",
              }}
            >
              {["👍", "❤️", "😂", "😮", "🎯"].map((emoji) => (
                <button
                  key={emoji}
                  style={{
                    fontSize: "20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px",
                    borderRadius: "50%",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.3)"
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.5)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                    e.currentTarget.style.backgroundColor = "transparent"
                  }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Footer */}
      <div
        style={{
          backgroundColor: "#FFF0EB",
          borderRadius: "20px",
          padding: "24px",
          marginTop: "40px",
          border: "2px solid #FFD1DC",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            color: "#FF6B93",
            marginBottom: "16px",
            fontFamily: "'Comic Neue', cursive",
            fontWeight: "bold",
          }}
        >
          Quick Stats in {mode === "serious" ? "Professional" : "Sparkly"} Mode
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: "32px", color: "#FF6B93" }}>
              {mode === "serious" ? "2" : "∞"}
            </div>
            <div style={{ fontSize: "14px", color: "#777" }}>
              {mode === "serious" ? "Degrees" : "Sparkles Added"}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "32px", color: "#FF6B93" }}>
              {mode === "serious" ? "50+" : "1000+"}
            </div>
            <div style={{ fontSize: "14px", color: "#777" }}>
              {mode === "serious" ? "Projects" : "Cups of Tea"}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "32px", color: "#FF6B93" }}>
              {mode === "serious" ? "100%" : "MAX"}
            </div>
            <div style={{ fontSize: "14px", color: "#777" }}>
              {mode === "serious" ? "Dedication" : "Cuteness Level"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About