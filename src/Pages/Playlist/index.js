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
    console.log('entrou no didMount')
    console.log(this.props.match.params)
    this.loadSongs()
  }

  componentDidUpdate(prevProps) {
    console.log('entrou no update')
    console.log(prevProps.match.params)
    console.log(this.props.match.params)
    if (prevProps.match.params.id !== this.props.match.params.id) {
      // chama novamente o carregamento da interna

      this.loadSongs()
    }
  }

  loadSongs = () => {
    const { id } = this.props.match.params
    this.props.getPlaylistDetailsRequest(id)
  }
  renderSongs = () => {
    const playlist = this.props.playlistDetails.data
    console.log('playlist.songs: ', playlist.songs)
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
            <tr>
              <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th>
                <img src={ClockIcon} alt="time" />
              </th>
            </tr>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música encontrada</td>
              </tr>
            ) : (
              playlist.songs.map(s => (
                <tr key={s.id}>
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
      <Container loading>
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
