import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import People from "./components/People";
import Planets from "./components/Planets";
import TextField from "@material-ui/core/TextField";
import { InputBase } from "@material-ui/core";
import axios from "axios";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import "./App.css";

//odakle dobija prop??
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <div>{value === index && <Box p={5}>{children}</Box>}</div>; //box je kao div
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// root: {
//   '& > *': {
//     margin: theme.spacing(1),
//     width: '300px',
//     color: 'white'
//   },
//   '& >*:focused': {
//     width: '1000px'
//   }
// },

//odakle dobija theme??
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),
      width: "300px",
      height: "20px",
      color: "black",
    },

    "&:focus": {
      borderBottom: "none",
    },

    //ne znam kako da namestim na :focus
  },

  // textField: {
  //   color: "#C6CBE9",
  //   borderBottom: "1px solid #C6CBE9",
  // },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [enteredSearch, setEnteredSearch] = useState("");
  const [peopleArr, setPeopleArr] = useState([]);
  const [planetArr, setPlanetArr] = useState([]);
  const [allArr, setAllArr] = useState([]);
  const [searchArr, setSearchArr] = useState([]);

  useEffect(() => {
    //https://swapi.dev/api/ vraca undefined
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setPeopleArr(res.data.results);
      })
      .then(
        axios
          .get("https://swapi.dev/api/planets")
          .then((res) => {
            setPlanetArr(res.data.results);
          })
          .then(setAllArr([...peopleArr, ...planetArr]))
          .then(console.log("allArr", allArr))
      );
  }, []);

  // promena taba
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const searchChangeHandler = (e) => {
    setEnteredSearch(e.target.value);
    //iz nekog razloga deselektuje tab sa navbara

    // console.log("allArr", allArr);
    const tmpArr = [];

    // if(e.target.value === '') {
    //   setSearchArr(peopleArr)
    // }

    //allArr radi samo kad stavim jedan pa drugi iz nekog razloga
    peopleArr.filter((item) => {
      if (item.name.toLowerCase().includes(enteredSearch.toLowerCase())) {
        tmpArr.push(item);
      }
      setSearchArr(tmpArr);
      // console.log(searchArr);
    });
  };

  return (
    <div>
      <AppBar position="sticky">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="People" />
          <Tab label="Planets" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <People />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Planets />
      </TabPanel>
      <div className="searchContainer">
        <form className={classes.root}>
          {/* zbog InputBase cvrci nesto */}
          <TextField
            style={{
              margin: "15px 0 0 50px",
            }}
            placeholder="Search"
            variant="standard"
            value={enteredSearch}
            onChange={searchChangeHandler}
            // opaljuje vise nego sto treba a na => ne radi
            className={classes.textField}
          />
        </form>
        <div className="list">
          <List component="nav">
            {searchArr.map((item) => (
              <ListItem button>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      {/* <form className={classes.root}>
            <TextField className="searchBar" id="standard-basic" variant="filled" inputProps={{className: classes.textField}
            } />
          </form> */}
    </div>
  );
}
