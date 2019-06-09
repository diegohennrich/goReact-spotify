import styled, { css } from 'styled-components'
import { Spinner } from '../../Components/Loading/style'

export const Container = styled.div`
  margin-top: 30px;

  ${Spinner} {
    height: 40px;
  }
  ${props =>
    props.loading &&
    css`
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`

export const Album = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 220px;
    height: 220px;
  }

  div {
    margin-left: 20px;

    span {
      text-transform: uppercase;
      letter-spacing: 1.11px;
      font-size: 11px;
      font-weight: 300;
    }

    h1 {
      margin-top: 10px;
      font-size: 48px;
    }

    p {
      margin-top: 0;
      text-transform: uppercase;
      letter-spacing: 1.11px;
      color: #b3b3b3;
      font-size: 11px;
    }

    button {
      border: 0;
      background: #1ed760;
      height: 32px;
      border-radius: 16px;
      line-height: 32px;
      font-size: 12px;
      padding: 0px 35px;
      letter-spacing: 1.11px;
      color: #fff;
      margin-top: 10px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`

export const Songlist = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;

  thead th {
    font-size: 11px;
    color: #b3b3b3;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;

    &:last-child {
      text-align: right;
    }
  }

  tbody td {
    border-top: solid 1px #282828;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;

    &:first-child {
      width: 80px;
      text-align: right;
    }

    &:last-child {
      text-align: right;
    }
  }

  tbody tr:hover td {
    background: #282828;
    cursor: pointer;
  }
`
