import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './HeaderOption.css'

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser)

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className="headerOption__icon"
          src={user?.photoUrl}
          // src="https://i.pinimg.com/originals/e4/43/6e/e4436e9474484cafc97c168c4e0fd90e.jpg"
        >
          {user?.email[0]}
          {/* t */}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
