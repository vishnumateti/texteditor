import styled from 'styled-components'

export const TextArea = styled.textarea`
  background-color: transparent;
  color: #f1f5f9;
  font-style: ${props => props.fontStyle};
  font-weight: ${props => props.fontWeight};
  text-decoration: ${props => props.textDecoration};
  margin: 10px;
  border: 0px none none;
  border-width: 0px;
  border-style: none;
  outline: none;
`

export const BoldButton = styled.button`
  background-color: transparent;
  outline: none;
  border: 0px none none;
  color: ${props => props.color};
`

export const ItallicButton = styled.button`
  background-color: transparent;
  outline: none;
  border: 0px none none;
  color: ${props => props.color};
`

export const UnderlineButton = styled.button`
  background-color: transparent;
  outline: none;
  border: 0px none none;
  color: ${props => props.color};
`

export const IconsContainer = styled.li`
  display: flex;
  border-bottom: 1px solid #334155;
  padding: 10px;
`

export const EditContainer = styled.ul`
  border: 1px solid #334155;
  border-radius: 8px;
`

export const AppContainer = styled.div`
  background-color: #25262c;
  padding: 20px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  height: 80%;
  width: 80%;
  padding: 20px;
  display: flex;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
`

export const Image = styled.img`
  height: 250px;
  width: 200px;
`
