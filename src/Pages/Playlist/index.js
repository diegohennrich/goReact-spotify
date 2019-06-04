import React from 'react'
import { Container, Album, Songlist } from './style'
import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'
const Playlist = () => (
  <Container>
    <Album>
      <img
        src="http://img6.bdbphotos.com/images/orig/q/c/qc6lvqy9xkiux9iv.jpg?djet1p5k"
        alt="cover"
      />

      <div>
        <span>Playlist</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>
        <button>PLAY</button>
      </div>
    </Album>

    <Songlist cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="time" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="add" />
          </td>
          <td>Amazin</td>
          <td>Aerosmith</td>
          <td>Honkin' On Bobo</td>
          <td>3:36</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="add" />
          </td>
          <td>Amazin</td>
          <td>Aerosmith</td>
          <td>Honkin' On Bobo</td>
          <td>3:36</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="add" />
          </td>
          <td>Amazin</td>
          <td>Aerosmith</td>
          <td>Honkin' On Bobo</td>
          <td>3:36</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="add" />
          </td>
          <td>Amazin</td>
          <td>Aerosmith</td>
          <td>Honkin' On Bobo</td>
          <td>3:36</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="add" />
          </td>
          <td>Amazin</td>
          <td>Aerosmith</td>
          <td>Honkin' On Bobo</td>
          <td>3:36</td>
        </tr>
      </tbody>
    </Songlist>
  </Container>
)

export default Playlist
