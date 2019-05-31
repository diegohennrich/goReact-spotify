import styled from 'styled-components'

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 25px;
  }
`

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;
  

  &:first-child {
    margin-top: 0;
  }

  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight:${props => (props.main ? 'bold' : 'normal')}

      &:hover {
        color: #fff;
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
  }
`

export const PlaylistAction = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  border-top: solid 1px #282828;
  color: #b3b3b3;
  padding: 15px 25px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  font-size: 13px;

  img {
    margin-right: 10px;
  }
`
