import React, { Component } from 'react';
import './App.css'
import AUX from './hoc/AUX';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            topText: '',
            bottomText: ''
        }
        this.topTextHandleChange = this.topTextHandleChange.bind(this);
        this.bottomTextHandleChange = this.bottomTextHandleChange.bind(this);
    }

    topTextHandleChange = (event) => {
        // console.log("In top text");
        // console.log(this.state.topText);
        this.setState({
            topText: event.target.value
        })
    };

    bottomTextHandleChange = (event) => {
        // console.log("In bottom text");
        // console.log(this.state.bottomText);
        this.setState({
            bottomText: event.target.value
        })
    };

  render() {
    return (
        <AUX>
            <h1>Genorate your own meme!</h1>
            <h5>How it works:</h5>
            <ol>
              <li>Type something for the top of the meme</li>
              <li>Pick an image from the drop down menu</li>
              <li>Type something for the bottom of the meme</li>
            </ol>
            <div>
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Top Text</span>
                    </div>
                    <input
                        type="text"
                        onChange={this.topTextHandleChange}
                        className="form-control"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        value={this.state.topText}/>
                </div>
            </div>
            <br />
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">Pick Image</label>
                </div>
                <select
                    className="custom-select"
                    id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">one</option>
                    <option value="2">two</option>
                </select>
            </div>
            <div>
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Bottom Text</span>
                    </div>
                    <input
                        type="text"
                        onChange={this.bottomTextHandleChange}
                        className="form-control"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        value={this.state.bottomText}/>
                </div>
                <br />
                <button
                    type="button"
                    className="btn btn-secondary btn-lg btn-block">Genorate Your Meme!!</button>
            </div>
        </AUX>
    );
  }
}

export default App;
