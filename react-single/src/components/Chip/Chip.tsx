import './Chip.css'

type Props = {
  title: String
}

export function Chip(props: Props) {
  return (
    <div className="chip">
      {' '}
      <span>{props.title}</span>{' '}
    </div>
  )
}
