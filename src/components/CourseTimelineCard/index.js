import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {items} = props
  const {courseTitle, description, duration, tagsList} = items
  console.log(tagsList)

  return (
    <>
      <div className="title-c">
        <h1>{courseTitle}</h1>
        <div className="clock-duration-c">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(each => (
          <p key={each.id}>{each.name}</p>
        ))}
      </ul>
    </>
  )
}
export default CourseTimelineCard
