import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    phrase: '',
  }

  onChangePhrase = event => {
    this.setState({
      phrase: event.target.value,
    })
  }

  reset = () => {
    this.setState({
      phrase: '',
    })
  }

  render() {
    const {phrase} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <p className="input-heading">Enter the Phrase</p>
            <input
              className="input"
              placeholder="Enter the Phrase"
              onChange={this.onChangePhrase}
              value={phrase}
            />
          </div>
          <button
            type="button"
            className="button"
            onClick={this.reset}
          >{`No. of letters: ${phrase.length}`}</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
