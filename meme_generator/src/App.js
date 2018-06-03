import React, { Component } from 'react';
import './App.css'
import AUX from './hoc/AUX';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            topText: '',
            bottomText: '',
            memeImageNames: [
              "Young-And-Reckless",
              "Baron-Creater",
              "Mad-Moxxi",
              "2nd-Term-Obama",
              "Unicorn-MAN",
              "See-Nobody-Cares",
              "Net-Noob",
              "Jackie-Chan-WTF",
              "Jersey-Santa",
              "wallpaper",
              "You-The-Real-MVP",
              "Pepperidge-Farm-Remembers",
              "Chocolate-Spongebob",
              "Sarcastic-Anthony",
              "Evil-Cows",
              "Shouter",
              "Drunk-Baby"
          ],
          finalMemeSelection: ''
        }
        this.topTextHandleChange = this.topTextHandleChange.bind(this);
        this.bottomTextHandleChange = this.bottomTextHandleChange.bind(this);
        this.buttonSubmit = this.buttonSubmit.bind(this);
        // this.memeNameHandleChange = this.memeNameHandleChange.bind(this);
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

    memeNameHandleChange = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        this.setState({
            finalMemeSelection: event.target.value
        })
    }

  render() {
     let memeNames = this.state.memeImageNames.map(memeName => {
         return (
             <option value={memeName}>{memeName}</option>
         )
     })
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
                        value={this.state.topText} />
                </div>
            </div>
            <br />
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">Pick Image</label>
                </div>
                <select
                    className="custom-select"
                    id="inputGroupSelect01"
                    onChange={this.memeNameHandleChange}>

                    <option selected>Choose...</option>
                        {memeNames}

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
                    onClick={this.buttonSubmit}
                    className="btn btn-secondary btn-lg btn-block">Genorate Your Meme!!</button>
            </div>
        </AUX>
    );
  }
}

export default App;
