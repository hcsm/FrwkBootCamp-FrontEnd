// @flow
import * as React from 'react'
import IconCircle from '../../../../components/IconCircle/index'
import { StyledAddButton } from './styles'
import Icon from '../../../../components/Icon/index'
type Props = {
  onClick: Function
}
const AddButton = ({ onClick }: Props) => {
  return (
    <StyledAddButton onClick={() => onClick()}>
      <Icon icon="Add" iconClass="icon me-3" /> Adicionar
    </StyledAddButton>
  )
}

export default AddButton
