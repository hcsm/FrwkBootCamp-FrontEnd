import { Component } from 'react'

type Props = {
  test: boolean
}

class If extends Component<Props> {
  render() {
    if (this.props.test) {
      return this.props.children
    } else {
      return false
    }
  }
}

export default If
