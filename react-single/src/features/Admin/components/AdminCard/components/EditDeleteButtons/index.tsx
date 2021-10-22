// @flow
import * as React from 'react'
import IconCircle from '../../../../../../components/IconCircle/index'
type Props = {
  focus: Function
  remove: Function
}
const EditDeleteButtons = ({ focus, remove }: Props) => {
  return (
    <>
      <IconCircle
        onClick={() => focus()}
        className="mx-3"
        icon="Edit"
        backgroundColor="#7900DF"
        hasShadow
      />
      <IconCircle
        onClick={() => remove()}
        className="mx-3"
        icon="Delete"
        backgroundColor="#7900DF"
        hasShadow
      />
    </>
  )
}

export default EditDeleteButtons
