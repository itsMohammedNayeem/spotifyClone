import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AlbumIcon from '@material-ui/icons/Album'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import HistoryIcon from '@material-ui/icons/History'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import './SongCard.css'
import AddCommentIcon from '@material-ui/icons/AddComment'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { IconButton } from '@material-ui/core'
import api from './api/songs'

const SongCard = (props) => {
  const { id, title, movie, duration, artist, count } = props.song
  const user = useSelector(selectUser)
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      )
    return () => {
      setPosts([])
    }
  }, [])

  const updateSongHandler = async (songs) => {
    await api.put(`/songs/${songs.id}`, songs)
    props.retrieveSongs()
    // const { id, title, movie, duration, artist, count } = response.data;
    // setSongs(
    //   songs.map((song) => {
    //     return song.id === id ? { ...response.data } : song;
    //   })
    // );
  }

  // const sendPost = (e) => {
  //   e.preventDefault()

  //   db.collection('posts').add({
  //     name: user.displayName,
  //     description: user.email,
  //     message: input,
  //     photoUrl: user.photoUrl || '',
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
  //   })

  //   setInput('')
  // }

  return (
    <>
      <div className="songcard">
        <div className="songcard_detail">
          {props.clickTitle ? (
            <MusicNoteIcon style={{ color: 'E99497' }} />
          ) : null}
          <Link
            to={{
              pathname: `/song/${id}`,
              state: { title, movie, duration, artist, count }
            }}
            style={{ textDecoration: 'none' }}
            onClick={() =>
              updateSongHandler({
                id,
                title,
                movie,
                duration,
                artist,
                count: count + 1
              })
            }
          >
            {title}
          </Link>
          {props.clickMovie ? <AlbumIcon style={{ color: 'F3C583' }} /> : null}
          {props.clickMovie ? movie : null}

          {props.clickDuration ? (
            <HistoryIcon style={{ color: 'E8E46E' }} />
          ) : null}
          {props.clickDuration ? duration : null}

          {props.clickArtist ? (
            <RecordVoiceOverIcon style={{ color: 'B3E283' }} />
          ) : null}
          {props.clickArtist ? artist : null}
        </div>
        <div className="songcard_buttons">
          <Link
            to={{
              pathname: `/edit`,
              state: { id, title, movie, duration, artist, count }
            }}
            style={{ textDecoration: 'none' }}
          >
            <IconButton>
              <EditIcon style={{ color: '89CFF0' }} />
            </IconButton>
          </Link>
          {/* <div className="songcard__comment">
            <AddCommentIcon style={{ color: "gray" }} />
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Comment"
              />
              <button onClick={sendPost} type="submit"></button>
            </form>
          </div> */}
          <IconButton
            onClick={() => {
              if (window.confirm('Remove from the playlist?')) {
                props.clickTitleHandler(id)
              }
            }}
          >
            <DeleteIcon style={{ color: 'FF7779' }} />
          </IconButton>
        </div>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </div>
    </>
  )
}

export default withRouter(SongCard)
