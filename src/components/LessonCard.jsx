const LessonCard = ({ image, name, hour, className }) => {
  return (
    <div className={className}>
      <p>
        <img src={image} alt="class" />
        <span>Lesson Name: {name}</span>
        <br />
        <span>Lesson Hour: {hour}</span>
      </p>
    </div>
  )
}

export default LessonCard
