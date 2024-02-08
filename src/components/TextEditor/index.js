import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  TextEditorContainer,
  Heading,
  Image,
  EditContainer,
  IconsContainer,
  BoldButton,
  ItallicButton,
  UnderlineButton,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, itallic: false, underline: false}

  boldButton = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  itallicButton = () => {
    this.setState(prevState => ({itallic: !prevState.itallic}))
  }

  underlineButton = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, itallic, underline} = this.state

    const boldText = bold ? '#faff00' : '#f1f5f9'
    const itallicText = itallic ? '#faff00' : '#f1f5f9'
    const underlineText = underline ? '#faff00' : '#f1f5f9'

    const fontWeight = bold ? 'bold' : 'normal'

    const fontStyle = itallic ? 'italic' : 'normal'

    const textUnderline = underline ? 'underline' : 'normal'

    return (
      <AppContainer>
        <TextEditorContainer>
          <div>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <EditContainer>
            <IconsContainer>
              <li>
                <BoldButton
                  type="button"
                  data-testid="bold"
                  onClick={this.boldButton}
                  color={boldText}
                >
                  <VscBold size={25} />
                </BoldButton>
              </li>
              <li>
                <ItallicButton
                  type="button"
                  data-testid="italic"
                  onClick={this.itallicButton}
                  color={itallicText}
                >
                  <GoItalic size={25} />
                </ItallicButton>
              </li>
              <li>
                <UnderlineButton
                  type="button"
                  data-testid="underline"
                  onClick={this.underlineButton}
                  color={underlineText}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </IconsContainer>
            <TextArea
              columns={10}
              rows={10}
              fontStyle={fontStyle}
              fontWeight={fontWeight}
              textDecoration={textUnderline}
            />
          </EditContainer>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
