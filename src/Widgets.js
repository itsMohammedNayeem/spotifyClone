import React from 'react'
import './Widgets.css'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <>
      <div className="widgets">
        <div className="widgets__header">
          <h2>Announcements</h2>
          <AnnouncementIcon />
          {newsArticle(
            'Changes of Agreements',
            'Occasionally we may make changes to the Agreements.'
          )}
          {newsArticle(
            'Service Options',
            'You can find a description of our Service Options on our website.'
          )}
          {newsArticle(
            'Trials',
            'From time to time, we or others on our behalf may offer trials of Paid Subscriptions for a specified period without payment.'
          )}
        </div>
        {/* <div className="widget__bottom">
          <Trend songs={props.songs} />
        </div> */}
      </div>
    </>
  )
}

export default Widgets
