const tasks = [
  {
    id: 1,
    text: "Get your shit together",
    other: "no-show",
    day: "monday",
    reminder: true,
  },
  {
    text: "Smile at your reflection",
    day: "Wednesday",
    reminder: false,
    id: 3,
  },
  {
    text: "Touch Grass",
    day: "Thursday",
    reminder: true,
    id: 4,
  },
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
