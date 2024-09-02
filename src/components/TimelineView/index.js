import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const cardItem = timelineItemsList.map(each => ({
    title: each.title,
  }))

  const renderCards = items => {
    if (items.categoryId === 'COURSE') {
      return <CourseTimelineCard items={items} />
    }

    return <ProjectTimelineCard items={items} />
  }

  return (
    <div className="bg">
      <h1>
        MY JOURNEY OF <br />
        CCBP 4.0
      </h1>

      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={cardItem}>
          {timelineItemsList.map(eachItem => renderCards(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
