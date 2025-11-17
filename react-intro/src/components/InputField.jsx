import { Component } from "react"

class InputField extends Component {
  render() {
    return <input placeholder={this.props.pholder} />
    //il metodo render é OBBLIGATORIO!
  }
}

export default InputField
