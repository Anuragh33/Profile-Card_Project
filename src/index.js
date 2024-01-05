import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  )
}

function Avatar() {
  return <img className="avatar" src="/img.jpeg" alt="Avatar Image" />
}

function Intro() {
  return (
    <div>
      <h1 className="h1">Anuragh Ragidimilli 👋🏻</h1>
      <p>
        Hello there! 👋 I'm Anuragh, a passionate and motivated individual on a
        journey to become a skilled web developer. My fascination with the
        ever-evolving world of technology led me to dive into the exciting realm
        of web developemnt.
      </p>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  )
}

function Skill(skill, color, level) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" ? "💪" : null}
        {level === "intermediate" ? " 🥸" : null}
        {level === "beginner" ? "🥺" : null}
      </span>
    </div>
  )
}

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
