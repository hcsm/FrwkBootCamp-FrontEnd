import styled from 'styled-components'

export const ListWrapper = styled.div`
  width:98%;
  height: 58%;
  .list::-webkit-scrollbar {
    width: 10px;
  }

  .list::-webkit-scrollbar-track {
    background: #0b0c22;
    border-radius: 10px;
    padding: 1px;
  }

  .list::-webkit-scrollbar-thumb {
    background: #213054;
    border-radius: 10px;
  }
`