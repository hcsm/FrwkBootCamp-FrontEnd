import { FloatingLabel, Form } from 'react-bootstrap'

type Props = {
  placeholder: string
  type: string
  label: string
}
export function Input(props: Props) {
  return (
    <FloatingLabel label={props.label}>
      <Form.Control type={props.type} placeholder={props.placeholder} />
    </FloatingLabel>
  )
}
