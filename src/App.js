import logo from './logo.svg';
import './App.css';
import Game from './game/game';

function Ga (props) {
  return (
    <div className="inlineBox" >{props.name}</div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ga name="React" />
        <img src={logo} className="App-logo" alt="logo" />
        <Game name="组件传参" left = {
            <Ga name="left" />
          } >
          <div>没错我就是 slot</div>
        </Game>
      </header>
    </div>
  );
}

export default App;
