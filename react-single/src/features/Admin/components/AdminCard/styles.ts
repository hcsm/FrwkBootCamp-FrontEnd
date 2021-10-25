import styled from 'styled-components'

export const CardInput = styled.input`
  font-size: 22px;
  line-height: 26px;
  background-color: transparent !important;
  border: 0 !important;
  outline: 0;
  &:focus {
    border-bottom: 1px solid #0af585 !important;
    background-color: transparent !important;
  }
  &[readonly]:focus {
    background-color: transparent !important;
    border: 0 !important;
  }
`
