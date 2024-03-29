import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      locations: [
        {name: "Bali", votes:0},
        {name: "Maldives", votes:0},
        {name: "Bandipur", votes:0},
        {name: "Dubai", votes:0},
        {name: "Australia", votes:0},
      ],
  };
}

vote(i) {
  let newLocations = [...this.state.locations];
  newLocations[i].votes++;

  this.setState({locations:newLocations});
}

render() {
  return(
    <>
      <h2>Vote for your Destination</h2>
      <div className="locations">
        {this.state.locations.map((loc, i) => (
          <div key={i} className="location">
          <div className="voteCount">{loc.votes}</div>
          <div className="locationName">{loc.name}</div>

          <button onClick={this.vote.bind(this,i)}>Vote</button>

          </div>
        ))}
      </div>
    </>
  )
}

}

export default App;