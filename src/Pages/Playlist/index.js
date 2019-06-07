import React, { Component } from 'react'
import { Container, Album, Songlist } from './style'
import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

import Loading from '../../Components/Loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails'

class Playlist extends Component {
  componentDidMount() {
    this.loadSongs()
  }

  loadSongs = () => {
    const { id } = this.props.match.params
    this.props.getPlaylistDetailsRequest(id)
  }
  renderSongs = () => {
    const playlist = this.props.playlistDetails.data
    console.log('meu i: ', playlist)
    return (
      <Container>
        <Album>
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>Playlist</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}

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
            {!playlist.songs ? (
              <tr>
                <td colspan={5}>Nenhuma música encontrada</td>
              </tr>
            ) : (
              playlist.songs.map(s => (
                <tr>
                  <td>
                    <img src={PlusIcon} alt="add" />
                  </td>
                  <td>{s.title}</td>
                  <td>{s.author}</td>
                  <td>{s.album}</td>
                  <td>3:36</td>
                </tr>
              ))
            )}
          </tbody>
        </Songlist>
      </Container>
    )
  }
  render() {
    return this.props.playlistDetails.loading ? (
      <Container>
        <Loading />
      </Container>
    ) : (
      this.renderSongs()
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistDetailsActions, dispatch)

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)
