import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SongCard from './SongCard'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import './SongList.css'
import AlbumIcon from '@material-ui/icons/Album'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import HistoryIcon from '@material-ui/icons/History'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import Checkbox from '@material-ui/core/Checkbox'

const SongList = (props) => {
  const [clickTitle, setClickTitle] = useState(true)
  const [clickMovie, setClickMovie] = useState(true)
  const [clickDuration, setClickDuration] = useState(true)
  const [clickArtist, setClickArtist] = useState(true)
  const inputEl = useRef('')
  const retrieveSongs = props.retrieveSongs

  const handleClickTitle = () => setClickTitle(!clickTitle)
  const handleClickMovie = () => setClickMovie(!clickMovie)
  const handleClickDuration = () => setClickDuration(!clickDuration)
  const handleClickArtist = () => setClickArtist(!clickArtist)

  const deleteSongHandler = (id) => {
    props.getSongId(id)
  }

  const renderSongList = props.songs.map((song) => {
    return (
      <SongCard
        song={song}
        retrieveSongs={retrieveSongs}
        clickTitleHandler={deleteSongHandler}
        key={song.id}
        clickTitle={clickTitle}
        clickMovie={clickMovie}
        clickDuration={clickDuration}
        clickArtist={clickArtist}
      />
    )
  })

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)
  }

  return (
    <div className="songlist">
      <div className="songlist__stats">
        <div className="songlist__stat">
          <h2>Your Library</h2>
          <div className="songlist__search">
            <SearchIcon />
            <input
              id="search"
              ref={inputEl}
              type="text"
              placeholder="Artists, songs, or album"
              value={props.term}
              onChange={getSearchTerm}
            />
            <Link to="/add" style={{ textDecoration: 'none' }}>
              <AddIcon style={{ color: 'gray' }} />
            </Link>
          </div>
        </div>
      </div>
      <div className="songlist__hide">
        <h4
          style={{
            paddingLeft: '20px',
            paddingTop: '10px',
            paddingBottom: '10px'
          }}
        >
          Hide options
        </h4>
        <div className="songlist__hidebuttons">
          {/* <MusicNoteIcon style={{ color: 'E99497' }} />
          <Checkbox
            onClick={handleClickTitle}
            defaultChecked
            size="small"
            color="primary"
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          /> */}
          <AlbumIcon style={{ color: 'F3C583' }} />
          <Checkbox
            defaultChecked
            onClick={handleClickMovie}
            size="small"
            color="primary"
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
          <HistoryIcon style={{ color: 'E8E46E' }} />
          <Checkbox
            defaultChecked
            onClick={handleClickDuration}
            size="small"
            color="primary"
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
          <RecordVoiceOverIcon style={{ color: 'B3E283' }} />
          <Checkbox
            onClick={handleClickArtist}
            defaultChecked
            size="small"
            color="primary"
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        </div>
      </div>
      {renderSongList.length > 0 ? (
        renderSongList
      ) : (
        <>
          <h4
            style={{ color: '#FF7779', padding: '10px' }}
          >{`Couldn't find "${props.term}"`}</h4>
          <p style={{ color: 'gray', paddingLeft: '10px', fontSize: '12px' }}>
            Try the right term.
          </p>
        </>
      )}
    </div>
  )
}

export default SongList
