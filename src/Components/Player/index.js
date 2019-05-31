import React from 'react'
import Slider from 'rc-slider'
import { Container, Current, Volume, Progress, Controls, Time } from './styles'
import VolumeIcon from '../../assets/images/volume.svg'
import ShuffleIcon from '../../assets/images/shuffle.svg'
import BackwardIcon from '../../assets/images/backward.svg'
import PlayIcon from '../../assets/images/play.svg'
import PauseIcon from '../../assets/images/pause.svg'
import ForwardIcon from '../../assets/images/forward.svg'
import RepeatIcon from '../../assets/images/repeat.svg'
const Player = () => (
  <Container>
    <Current>
      <img
        src="http://img6.bdbphotos.com/images/orig/q/c/qc6lvqy9xkiux9iv.jpg?djet1p5k"
        alt="Aerosmith Cover"
      />

      <div>
        <span>Amazing</span>
        <small>Aerosmith</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button>
          <img src={PlayIcon} alt="Play" />
        </button>
        {/* <button>
          <img src={PauseIcon} alt="Pause" />
        </button> */}
        <button>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>
      <Time>
        <span>00:00</span>
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#1ED760' }}
          handleStyle={{ borderRadius: 10 }}
        />
        <span>3:56</span>
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

export default Player
