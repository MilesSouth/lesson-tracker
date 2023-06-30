import LessonCard from "./LessonCard"
import { data } from "../assets/data"
import "../sass/main.scss"
const Lesson = () => {
  return (
    <div className="all-lessons">
      {data.map((item) => (
        <LessonCard
          image={item.image}
          name={item.name}
          hour={item.hour}
          className="lesson"
        />
      ))}
    </div>
  )
}

export default Lesson
