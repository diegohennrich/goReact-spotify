import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Nav, PlaylistAction } from './style'

import { bindActionCreators } from 'redux'
import { Creators as PlaylistsActions } from '../../store/ducks/playlists'
import PlaylistIcon from '../../assets/images/add_playlist.svg'

class Sidebar extends Component {
  componentDidMount () {
    this.props.getPlaylistsRequest()
  }
  render () {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <a href="#">Navegar</a>
            </li>
            <li>
              <a href="#">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Sua biblioteca</span>
            </li>
            <li>
              <a href="#">Seu Daily Mix</a>
            </li>
            <li>
              <a href="#">Tocados recentemente</a>
            </li>
            <li>
              <a href="#">Músicas</a>
            </li>
            <li>
              <a href="#">Álbuns</a>
            </li>
            <li>
              <a href="#">Artistas</a>
            </li>
            <li>
              <a href="#">Estações</a>
            </li>
            <li>
              <a href="#">Arquivos locais</a>
            </li>

            <li>
              <a href="#">Poscast</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Playlists</span>
            </li>
            {this.props.playlists.data.map(i => (
              <li key={i.id}>
                <a href="#">{i.title}</a>
              </li>
            ))}
          </Nav>
        </div>

        <PlaylistAction>
          <img src={PlaylistIcon} alt="Add new Playlist" />
          <span>New Playlist</span>
        </PlaylistAction>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch)

const mapStateToProps = state => ({
  playlists: state.Playlists
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
