// write players array

// write initial players array   here

const Header= (props) => {
  console.log(props)
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
    
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>
    
     <Counter />
    </div>
  );
  
}
    
 class Counter extends React.Component {
   state = {
       score: 0
     }; 
   incrementScore = () => {
      this.setState( prevState => ({
          score: prevState.score + 1
        }));    
   }

   decrementScore = () => {
    this.setState( prevState => ({
        score: prevState.score - 1
     }));
 }
   render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={ this.decrementScore} > - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={ this.incrementScore} > + </button>
       </div>
    );
  }
}

// const App = (props) =>, changing from a function to class to setup code for removal

class App extends React.Component {

    state = {
      players: [
        {
          name: "Guil",
          id: 1
        },
        {
          name: "Treasure",
          id: 2
        },
        {
          name: "Ashley",
          id: 3
        },
        {
          name: "James",
          id: 4
        }
      ]
    };
        
   

    render() {
      return (
        <div className="scoreboard">
          <Header 
            title="Scoreboard" 
            totalPlayers={props.initialPlayers.length}  

            />
      
      {/* players list */}
        {props.initialPlayers.map( player =>
          <Player
            name={player.name}
            key={player.id.toString()}
          />
        )}
        
      </div>
        );
      }
  }
   

      



ReactDOM.render(
  <App  />, 
  document.getElementById('root')
);