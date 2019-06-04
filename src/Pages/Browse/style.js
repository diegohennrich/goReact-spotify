import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Title = styled.h1`
  font-size: 48px;
  margin-top: 120px;
`

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  width: 250px;
  margin-left: 20px;

  &:first-child {
    margin-left: 0;
  }

  img {
    height: 200px;

    &:hover {
      opacity: 0.5;
    }
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
`
