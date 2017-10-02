import React, { Component } from 'react';
import GridEntry from './GridEntry.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: [],
      imgs: []
    }
  }

  componentDidMount() {
    this.getImgs();
  }

  getImgs() {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      // just grab the first 50 images from return data
      imgs: [...this.state.imgs, ...data].slice(0, 50),
      clicked: [...this.state.clicked, ...Array(data.length).fill(false)].slice(0, 50)
    }))
    .catch(err => console.error(err));
  }

  handleClick(index) {
    let clicked = [...this.state.clicked];
    clicked[index] = !clicked[index];
    this.setState({ clicked });
  }

  render() {
    return (
      <div className="App">
        <div className='wrapper'>
          { this.state.imgs.map((ele, i) => (
            <GridEntry
              ele={ ele }
              key={ ele.id }
              idx= { i }
              clicked={ this.state.clicked[i] }
              onClick={ this.handleClick.bind(this) }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
