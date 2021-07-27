import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Topics from "./Components/Topics";
import { makeStyles } from '@material-ui/styles';


function App() {
  const useStyles = makeStyles({
    root: {
      textDecoration: 'none',
      color: 'black',
      padding: '20px 20px',
      '&:hover': {
        backgroundColor: '#d7d7d7',
        color: 'white'
      },
      '&:focus': {
        backgroundColor: "#d7d7d7",
      }
    },
    
    
  })

  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="navlist">
            <li>
              <Link className={classes.root} to="/">Home</Link>
            </li>
            <li>
              <Link className={classes.root} to="/users">Users</Link>
            </li>
            <li>
              <Link className={classes.root} to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
          </Switch>
        </nav>
      </div>
  </Router>
  );
}

export default App;
