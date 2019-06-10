import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #f55a55;
  height: 42px;
  line-height: 42px;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 0 20px;
`

export const Message = styled.span`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
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
