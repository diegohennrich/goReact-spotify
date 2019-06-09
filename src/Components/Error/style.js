import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ff6347;
  padding: 10px;
  border-radius: 5px;
  margin-top: 30px;
`

export const Message = styled.span`
  font-size: 18px;
  color: black;
  font-weight: 400;
`

export const Close = styled.button`
  background: transparent;
  border: 0px;

  &:hover {
    opacity: 0.4;
  }

  img {
    height: 22px;
  }
`
