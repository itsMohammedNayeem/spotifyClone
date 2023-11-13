import React, { useCallback, useContext, useState } from 'react'
import { StoreContext } from './App'

import './Header.css'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import { useDispatch } from 'react-redux'
import { logout } from './features/userSlice'
import { auth } from './firebase'
import { withRouter, Link, useHistory } from 'react-router-dom'

function Header() {
  const history = useHistory()
  const { state, dispatch } = useContext(StoreContext)

  const dispatch1 = useDispatch()

  const logoutOfApp = () => {
    dispatch1(logout())
    history.push('/')
    auth.signOut()
  }

  // const logoutOfApp = () => {
  //   dispatch({ type: 'LOGOUT' })
  //   auth.signOut()
  // }

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img
            className="header__icon"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__right">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={HomeIcon} title="Home" />
        </Link>
        <Link to="/info" style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={InfoIcon} title="Info" />
        </Link>
        <Link to="/list" style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={LibraryMusicIcon} title="Songs" />
        </Link>
        <Link to="/playlist" style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={MusicNoteIcon} title="Playlist" />
        </Link>
        <Link to="/trend" style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={TrendingUpIcon} title="Trend" />
        </Link>
        <HeaderOption avatar={true} title="logout" onClick={logoutOfApp} />
      </div>
    </div>
  )
}

export default withRouter(Header)
