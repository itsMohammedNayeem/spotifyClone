/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useReducer, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import { initialState, reducer } from './reducers'
import Topbar from './Topbar'
import Sidebar1 from './Sidebar1'
import Content from './Content'
import Playbar from './Playbar'

const MusicPlayer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const audioRef = useRef()

  // useEffect(() => {
  //   if (state.playing) {
  //     audioRef.current.load()
  //     audioRef.current.play()
  //   } else audioRef.current.pause()
  // }, [state.playing, state.currentSongId])

  // useEffect(() => {
  //   audioRef.current.volume = state.volume
  // }, [state.volume])

  const song = state.media[state.currentSongId]

  return (
    <div css={CSS}>
      {/* <Topbar /> */}
      <Sidebar1 />
      <Content />
      {/* <Playbar /> */}

      {/* <audio
        ref={audioRef}
        src={
          song && song.title ? `./media/${song.title} - ${song.artist}.mp3` : ''
        }
        onLoadedMetadata={() =>
          dispatch({
            type: 'SET_DURATION',
            duration: audioRef.current.duration
          })
        }
        onTimeUpdate={(e) =>
          dispatch({ type: 'SET_CURRENT_TIME', time: e.target.currentTime })
        }
      /> */}
    </div>
  )
}

const CSS = css`
  height: 100%;

  /* position: relative; */
  width: 100%;
  display: flex;

  color: white;
  flex: 1;
  flex-wrap: wrap;
  margin: 0 1vw;

  /* background-color: white;
  padding: 20px;
  padding-bottom: 20px;
  border-radius: 10px; */
`

export default MusicPlayer
