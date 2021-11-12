// @flow
import * as React from 'react'
import IconCircle from '../../../../../components/IconCircle'

interface Icons {
  action: Function
  name: string
}

type Props = {
  icons: Icons[]
}
export const ActionsIcons = ({ icons }: Props) => {
  const content = icons.map(icon => (
    <IconCircle
      key={icon.name}
      onClick={() => icon.action()}
      className="mx-3"
      icon={icon.name}
      backgroundColor="#7900DF"
      hasShadow
    />
  ))
  return <>{content}</>
}
