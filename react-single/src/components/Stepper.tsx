import styled from 'styled-components'

type Props = {
  element?: JSX.Element
  step: string
  active?: boolean
}

const Step = styled.section<IStep>`
  width: 50px;
  height: 50px;
  background: ${props => (props.active ? '#7900df' : 'transparent')};
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${props => (props.active ? '#fff' : 'black')};
  border: 1pt solid #7900df;
  margin-bottom: 5vh;
`
export function Stepper(props: Props) {
  return (
    <>
      <Step active={props.active || false}>{props.step}</Step>
      {props?.element}
    </>
  )
}

interface IStep {
  active: boolean
}
