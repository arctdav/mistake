import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mistake</h1>
        <h6>This Chrome Extension allow users to log their mistakes and map it a specific topic. When they search for the same topic, their mistakes matching the topic searching will popup and remind the users.</h6>
        {/* <Link to="https://github.com/arctdav/mistake">GitHub</Link> */}
        <a href="https://github.com/arctdav/mistake">GitHub</a>

        <form id="form">
          <label for="topic">Topic:</label>
          <input type="text" id="topic" name="topic"/><br></br>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"/><br></br>
          <label for="description">Descriprtion:</label>
          <br></br>
          <textarea id="description" name="description" rows="4" cols="28">
          </textarea>
          <br></br>
          <button id="save" type="submit">Save</button>
        </form>
        
      </header>
    </div>
  );
}

export default App;
