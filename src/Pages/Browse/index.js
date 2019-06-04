import React from 'react'
import { Container, Title, List, Playlist } from './style'
const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlist/1">
        <img
          src="http://img6.bdbphotos.com/images/orig/q/c/qc6lvqy9xkiux9iv.jpg?djet1p5k"
          alt="cover"
        />
        <strong>Aerosmith</strong>
        <p>
          Ouça as melhores do Aerosmith enquanto você programa pra ficar bem
          doidão. #pas
        </p>
      </Playlist>

      <Playlist to="/playlist/1">
        <img
          src="https://cps-static.rovicorp.com/3/JPG_500/MI0002/092/MI0002092395.jpg?partner=allrovi.com"
          alt="cover"
        />
        <strong>Red Hot Chili Peppers</strong>
        <p>
          Ouça as melhores do Red Hot Chili Peppers enquanto você programa pra
          ficar bem doidão. #pas
        </p>
      </Playlist>

      <Playlist to="/playlist/1">
        <img
          src="https://townsquare.media/site/443/files/2015/09/Offspring-Americana1.jpg"
          alt="cover"
        />
        <strong>The Offspring</strong>
        <p>
          Ouça as melhores do The Offspring enquanto você programa pra ficar bem
          doidão. #pas
        </p>
      </Playlist>

      <Playlist to="/playlist/1">
        <img
          src="https://www.musicrecordshop.com/media/catalog/product/0/9/093624986959_1.jpg"
          alt="cover"
        />
        <strong>Green Day</strong>
        <p>
          Ouça as melhores do Green Day enquanto você programa pra ficar bem
          doidão. #pas
        </p>
      </Playlist>
    </List>
  </Container>
)

export default Browse
