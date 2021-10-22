// @flow
import * as React from 'react'
import * as Icons from '@material-ui/icons/'
type IconType = typeof import('@material-ui/icons/index')

type Props = {
  icon: string
  iconClass?: string
}
const Icon = (props: Props) => {
  const element = React.createElement(Icons[props.icon! as keyof IconType], {
    className: `icon ${props.iconClass ?? ''}`,
  })
  return <>{element}</>
}

export default Icon
