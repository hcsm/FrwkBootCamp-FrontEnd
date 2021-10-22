import styled from 'styled-components'

export const StyledAddButton = styled.button`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #0af585;
  background-color: transparent;
  padding: 0.5em 1em;
  border: 1px solid #0af585;
  border-radius: 10px;
  &:hover {
    background-color: #0af585;
    color: #fff;
  }
  &:hover > .icon {
    background-color: #0af585;
    color: #fff;
    border-color: white;
  }
  .icon {
    border: 1px solid #0af585;
    border-radius: 50%;
    background-color: transparent;
    color: #0af585;
  }
`
