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
            <label className="input-heading" htmlFor="input">
              Enter the Phrase
            </label>
            <input
              id="input"
              className="input"
              placeholder="Enter the phrase"
              onChange={this.onChangePhrase}
              value={phrase}
            />
          </div>
          <p
            type="button"
            className="button"
            onClick={this.reset}
          >{`No. of letters: ${phrase.length}`}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
