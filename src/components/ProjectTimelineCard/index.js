import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {items} = props
  const {imageUrl, duration, description, projectTitle, projectUrl} = items
  return (
    <div>
      <img className="image" src={imageUrl} alt="project" />
      <h1>{projectTitle}</h1>
      <AiFillCalendar />
      <p>{duration}</p>
      <p>{description}</p>

      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
