import styled from 'styled-components'

interface RotateProps {
  $rotate: boolean
}

export const Container = styled.div`
  display: flex;
  background: #213054;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  color: #fff;
  font-family: Roboto;
  gap: 20px;
`

export const Image = styled.img`
  border-radius: 50%;
  width: 55px;
  height: 55px;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Name = styled.h3`
  font-weight: 500;
  font-size: 20px;
`

export const Title = styled.h3`
  font-weight: 500;
  font-size: 15px;
`

export const Message = styled.p<RotateProps>`
  font-weight: 300;
  font-size: 14px;
  max-height: ${props => (props.$rotate ? '1000px' : '50px')};
  transition: all 0.5s ease-in;

  text-overflow: ellipsis;
  overflow: hidden;
`

export const IconButtonWrapper = styled.div<RotateProps>`
  align-self: end;
  transform: rotate(0deg);
  transition: all 0.3s ease-out;
  transform: ${props => (props.$rotate ? `rotate(180deg)` : '')};
  -ms-transform: ${props => (props.$rotate ? `rotate(180deg)` : '')};
`
