import { Form } from 'react-bootstrap'

type Props = { options: String[] }

export function Select(props: Props) {
  const options = props.options.map((option, i) => {
    return <option key={i}>{option}</option>
  })

  return (
    <Form.Select aria-label="Default select example">{options}</Form.Select>
  )
}
