import styled from 'styled-components'
export const Container = styled.div`
  height: 72px;
  background: #282828;
  padding: 12px;
  display: flex;
  justify-content: space-between;
`
export const Current = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    span {
      font-size: 13px;
      color: #fff;
    }

    small {
      font-size: 11px;
      color: #b3b3b3;
    }
  }
`

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  img {
    margin-right: 10px;
  }
`

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0px;
    cursor: pointer;
    margin: 0 15px;

    &:hover {
      opacity: 0.6;
    }
  }
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  width: 500px;

  span {
    margin: 0 15px;
    color: #b3b3b3;
    font-size: 11px;
  }
`
