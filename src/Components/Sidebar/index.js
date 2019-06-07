import React, { Component } from 'react'

import { Container, Nav, PlaylistAction } from './style'
import Loading from '../Loading'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
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
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="#">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Sua biblioteca</span>
            </li>
            {/* <li>
              <a href="#">Seu Daily Mix</a>
            </li> */}
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
            {/* <li>
              <a href="#">Estações</a>
            </li>
            <li>
              <a href="#">Arquivos locais</a>
            </li> */}

            <li>
              <a href="#">Poscast</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Playlists</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(i => (
              <li key={i.id}>
                <Link to={`/playlist/${i.id}`}>{i.title}</Link>
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
