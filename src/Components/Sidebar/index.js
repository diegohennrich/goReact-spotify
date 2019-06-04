import React from 'react'
import { Container, Nav, PlaylistAction } from './style'
import PlaylistIcon from '../../assets/images/add_playlist.svg'

const Sidebar = () => (
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
        <li>
          <a href="#">Melhores do Rock</a>
        </li>
      </Nav>
    </div>

    <PlaylistAction>
      <img src={PlaylistIcon} alt="Add new Playlist" />
      <span>New Playlist</span>
    </PlaylistAction>
  </Container>
)

export default Sidebar
