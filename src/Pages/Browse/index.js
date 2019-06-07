import React, { Component } from 'react'
import { Container, Title, List, Playlist } from './style'
import Loading from '../../Components/Loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistsActions } from '../../store/ducks/playlists'

class Browse extends Component {
  componentDidMount () {
    this.props.getPlaylistsRequest()
  }
  render () {
    return (
      <Container>
        <Title>Navegar {this.props.playlists.loading && <Loading />}</Title>

        <List>
          {this.props.playlists.data.map(i => (
            <Playlist to={`/playlist/${i.id}`} key={i.id}>
              <img src={i.thumbnail} alt="cover" />
              <strong>{i.title}</strong>
              <p>{i.description}</p>
            </Playlist>
          ))}
        </List>
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
)(Browse)
