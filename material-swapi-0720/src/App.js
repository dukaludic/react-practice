import "./App.css";
import Button from '@material-ui/core/Button';
import Navbar from "./components/Navbar";
import Menu from '@material-ui/core/Menu';

function App() {
  return <div className="App">
    <Menu/>
    <Navbar/>
    {/* <Button variant="contained">Default</Button> */}
  </div>;
}

export default App;
