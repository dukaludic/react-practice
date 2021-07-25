import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import People from './People';
import Planets from './Planets';

// import { FormControlLabel } from "@material-ui/core";

// const CheckboxFn = () => {
//     const [checked, setChecked] = useState(true)

//     console.log(checked)

//     return <div className="checkboxContainer">
//         <Checkbox
//             checked={checked}
//             color='primary'
//             onChange={()=>setChecked(!checked)}
//             label="asd"
//         />
//         <div>Male</div>
//     </div>
// }

const Navbar = () => {
    // const [checked, setChecked] = useState(true)

    return <Router>
        <div className="navbarContainer">
        <nav className="navbar">
        <ul className="uList">
            <li>
                <div className="linkContainer">
                <Link className="link" to="/people">People</Link>
                </div>
            </li>
            <li>
                <div className="linkContainer">
                <Link className="link" to="/planets">Planets</Link>
                </div>
            </li>
        </ul>
        
        </nav>
        <Switch>
            <Route path="/people">
                <People />
            </Route>
            <Route path="/planets">
                <Planets/>
            </Route>
        </Switch>
        </div>
    </Router>

    
}

export default Navbar;