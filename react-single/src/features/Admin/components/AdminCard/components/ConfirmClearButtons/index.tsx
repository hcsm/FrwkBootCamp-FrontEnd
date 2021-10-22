// @flow
import React from 'react'
import IconCircle from '../../../../../../components/IconCircle'
type Props = {
  submit: Function
  clear: Function
}
const ConfirmClearButtons = ({ submit, clear }: Props) => {
  return (
    <>
      <IconCircle
        onClick={() => submit()}
        className="mx-3"
        icon="Check"
        backgroundColor="#7900DF"
        hasShadow
      />
      <IconCircle
        onClick={() => clear()}
        className="mx-3"
        icon="Clear"
        backgroundColor="#7900DF"
        hasShadow
      />
    </>
  )
}
export default ConfirmClearButtons
