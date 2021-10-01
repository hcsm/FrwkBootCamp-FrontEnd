import styled from 'styled-components'

type Props = {
  element: JSX.Element
  step: string
}

export function Stepper(props: Props) {
  const Wrapper = styled.section`
    position: relative;
    z-index: 1;
    background: #ffffff;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const Step = styled.section`
    width: 50px;
    height: 50px;
    background: #7900df;
    border-radius: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #fff;
    margin-bottom: 5vh;
  `

  return (
    <Wrapper>
      <Step>{props.step}</Step>
      {props.element}
    </Wrapper>
  )
}
