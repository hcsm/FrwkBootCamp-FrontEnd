// @flow
import * as React from 'react'
import { CircularProgress } from '@material-ui/core'
type Props = {}
const Loader = (props: Props) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <CircularProgress color="secondary" />
    </div>
  )
}
export default Loader
