import React, { Fragment } from 'react'
import Slider from 'rc-slider'
import { Container, Current, Volume, Progress, Controls, Time } from './styles'
import VolumeIcon from '../../assets/images/volume.svg'
import ShuffleIcon from '../../assets/images/shuffle.svg'
import BackwardIcon from '../../assets/images/backward.svg'
import PlayIcon from '../../assets/images/play.svg'
import PauseIcon from '../../assets/images/pause.svg'
import ForwardIcon from '../../assets/images/forward.svg'
import RepeatIcon from '../../assets/images/repeat.svg'
import Sound from 'react-sound'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlayerActions } from '../../store/ducks/Player'

const Player = ({
  player,
  play,
  pause,
  next,
  prev,
  playing,
  position,
  duration,
  handlePosition,
  setPosition,
  positionShown,
  progress
}) => (
  <Container>
    {!!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
        onFinishedPlaying={next}
        onPlaying={playing}
        position={player.position}
      />
    )}

    <Current>
      {!!player.currentSong && (
        <Fragment>
          <img
            src={player.currentSong.thumbnail}
            alt={player.currentSong.author}
          />

          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </Fragment>
      )}
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button onClick={prev}>
          <img src={BackwardIcon} alt="Backward" />
        </button>

        {!!player.status && player.status === Sound.status.PLAYING ? (
          <button onClick={pause}>
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button onClick={play}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}

        <button onClick={next}>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>
      <Time>
        <span>{positionShown || position}</span>
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#1ED760' }}
          handleStyle={{ borderRadius: 10 }}
          max={1000}
          onChange={value => handlePosition(value / 1000)}
          onAfterChange={value => setPosition(value / 1000)}
          value={progress}
        />
        <span>{duration}</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
)

function formatTime (time) {
  if (!time) return null
  let seconds = parseInt((time / 1000) % 60, 10)
  const minutes = parseInt((time / (1000 * 60)) % 60, 10)

  seconds = seconds < 10 ? `0${seconds}` : seconds

  return `${minutes}:${seconds}`
}
const mapStateToProps = state => ({
  player: state.Player,
  position: formatTime(state.Player.position),
  duration: formatTime(state.Player.duration),
  positionShown: formatTime(state.Player.positionShown),
  progress:
    parseInt(
      (state.Player.positionShown || state.Player.position) *
        (1000 / state.Player.duration),
      10
    ) || 0
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
