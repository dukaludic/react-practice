import { Component } from "react";
import axios from "axios";
// import PlanetItem from "./PlanetItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// const classes = useStyles();

// const planetItem = (item) => {
//     return <div style={{display: 'flex'}}>
//         <div>{item.name}</div>
//         <div>{item.population}</div>
//     </div>

// }

const mySort = (arr, bool) => {
  if (bool) {
    //izbaci unknown na kraj
    let x = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      // console.log(arr.length);
      // let max = arr.length - x;
      if (arr[i].population === "unknown") {
        let tmp = arr[arr.length - x];
        arr[arr.length - x] = arr[i];
        arr[i] = tmp;
        x++;
      }
    }
    //selectionSort
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (parseInt(arr[j].population) < parseInt(arr[min].population)) {
          // console.log("inside", arr[j].population);
          min = j;
        }
      }
      if (min != i) {
        // let tmp = arr[i];
        // arr[i] = arr[min];
        // arr[min] = tmp;

        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  } else {
    //izbaci unknown na kraj
    let x = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      // console.log(arr.length);
      // let max = arr.length - x;
      if (arr[i].population === "unknown") {
        let tmp = arr[arr.length - x];
        arr[arr.length - x] = arr[i];
        arr[i] = tmp;
        x++;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (parseInt(arr[j].population) > parseInt(arr[min].population)) {
          // console.log("inside", arr[j].population);
          min = j;
        }
      }
      if (min != i) {
        // let tmp = arr[i];
        // arr[i] = arr[min];
        // arr[min] = tmp;

        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  }

  return arr;
};

let sortBool = false;
let populationBool = false;
let planetNameBool = false;
// let highlighted = 1;

class Planets extends Component {
  constructor() {
    super();

    this.state = {
      currentArr: [],
      planetsArr: [],
      loading: true,
      hlPlanet: false,
      hlPopulation: false,
      hlOrbitalPeriod: false,
      aridCheckbox: true,
      temperateCheckbox: true,
      tropicalCheckbox: true,
      frozenCheckbox: true,
      murkyCheckbox: true,
    };
  }

  componentDidMount() {
    axios.get("https://swapi.dev/api/planets/").then((res) => {
      this.setState({
        planetsArr: res.data.results,
        currentArr: res.data.results,
        loading: false,
      });
      console.log("res", res.data.results);
    });
  }

  nameSort = () => {
    planetNameBool = !planetNameBool;
    //da sortira ascending ili descending

    if (planetNameBool === true) {
      const tmpArr = this.state.currentArr;
      tmpArr.sort((a, b) => (a.name > b.name ? -1 : 1));
      this.setState({ currentArr: tmpArr });
    } else {
      const tmpArr = this.state.currentArr;
      tmpArr.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.setState({ currentArr: tmpArr });
    }

    this.setState({
      hlPlanet: true,
      hlPopulation: false,
      hlOrbitalPeriod: false,
    });
  };

  populationSort = () => {
    populationBool = !populationBool;
    //da sortira ascending ili descending
    const tmpArr = this.state.currentArr;

    // console.log("AFTER SORT", mySort(tmpArr));
    mySort(tmpArr, populationBool);
    this.setState({ currentArr: tmpArr });

    // console.log(mySort([23, 10, 5, 2, "unknown", 1], true));
    // mora da bude objekat za sort

    // if (populationBool === true) {
    //   //   tmpArr.mySort();
    //   this.setState({ currentArr: tmpArr });
    // } else {
    //   tmpArr.sort((a, b) =>
    //     parseInt(a.population) > parseInt(b.population) ? 1 : -1
    //   );
    //   this.setState({ currentArr: tmpArr });
    // }

    this.setState({
      hlPlanet: false,
      hlPopulation: true,
      hlOrbitalPeriod: false,
    });
  };

  orbitalPeriodSort = () => {
    sortBool = !sortBool;
    //da sortira ascending ili descending

    if (sortBool === true) {
      const tmpArr = this.state.currentArr;
      tmpArr.sort((a, b) =>
        parseInt(a.orbital_period) > parseInt(b.orbital_period) ? -1 : 1
      );
      this.setState({ currentArr: tmpArr });
    } else {
      const tmpArr = this.state.currentArr;
      tmpArr.sort((a, b) =>
        parseInt(a.orbital_period) > parseInt(b.orbital_period) ? 1 : -1
      );
      this.setState({ currentArr: tmpArr });
    }

    this.setState({
      hlPlanet: false,
      hlPopulation: false,
      hlOrbitalPeriod: true,
    });
  };

  //FILTERS
  aridChangeHandler = (climate) => {
    const tmpArr = [];
    console.log(climate);
    // const checkbox = true;

    // switch (climate) {
    //   case "arid":
    //     checkbox = this.state.aridCheckbox;
    //     break;
    //   case "temperate":
    //     checkbox = this.state.temperateCheckbox;
    //     break;
    //   case "tropical":
    //     checkbox = this.state.tropicalCheckbox;
    //     break;
    //   case "frozen":
    //     checkbox = this.state.frozenCheckbox;
    //     break;
    //   case "murky":
    //     checkbox = this.state.murkyCheckbox;
    //     break;
    //   default:
    // }

    // console.log(eval(`${climate}Checkbox`));

    // kako da setujem state na aridCheckbox dinamicki?

    if (this.state.aridCheckbox) {
      this.setState({ aridCheckbox: false }, () =>
        console.log(this.state.aridCheckbox)
      );

      this.state.currentArr.filter((item) => {
        if (item.climate !== climate) {
          tmpArr.push(item);
        }
        this.setState({ currentArr: tmpArr });
      });
    } else {
      this.setState({ aridCheckbox: true }, () =>
        console.log(this.state.aridCheckbox)
      );

      this.state.planetsArr.filter((item) => {
        if (item.climate === climate) {
          tmpArr.push(item);
        }
        this.setState({ currentArr: [...this.state.currentArr, ...tmpArr] });
      });
    }
  };

  temperateChangeHandler = () => {
    const tmpArr = [];

    if (this.state.temperateCheckbox) {
      this.setState({ temperateCheckbox: false }, () =>
        console.log(this.state.temperateCheckbox)
      );

      this.state.currentArr.filter((item) => {
        if (item.climate !== "temperate") {
          tmpArr.push(item);
        }
        this.setState({ currentArr: tmpArr });
      });
    } else {
      this.setState({ temperateCheckbox: true }, () =>
        console.log(this.state.temperateCheckbox)
      );

      this.state.planetsArr.filter((item) => {
        if (item.climate === "temperate") {
          tmpArr.push(item);
        }
        this.setState({ currentArr: [...this.state.currentArr, ...tmpArr] });
      });
    }
  };

  tropicalChangeHandler = () => {
    const tmpArr = [];

    if (this.state.tropicalCheckbox) {
      this.setState({ tropicalCheckbox: false }, () =>
        console.log(this.state.tropicalCheckbox)
      );

      this.state.currentArr.filter((item) => {
        if (!item.climate.includes("tropical")) {
          tmpArr.push(item);
        }
        this.setState({ currentArr: tmpArr });
      });
    } else {
      this.setState({ tropicalCheckbox: true }, () =>
        console.log(this.state.tropicalCheckbox)
      );

      this.state.planetsArr.filter((item) => {
        if (item.climate.includes("tropical")) {
          tmpArr.push(item);
        }
        this.setState({ currentArr: [...this.state.currentArr, ...tmpArr] });
      });
    }
  };

  frozenChangeHandler = () => {
    const tmpArr = [];

    if (this.state.frozenCheckbox) {
      this.setState({ frozenCheckbox: false }, () =>
        console.log(this.state.frozenCheckbox)
      );

      this.state.currentArr.filter((item) => {
        if (item.climate !== "frozen") {
          tmpArr.push(item);
        }
        this.setState({ currentArr: tmpArr });
      });
    } else {
      this.setState({ frozenCheckbox: true }, () =>
        console.log(this.state.frozenCheckbox)
      );

      this.state.planetsArr.filter((item) => {
        if (item.climate === "frozen") {
          tmpArr.push(item);
        }
        this.setState({ currentArr: [...this.state.currentArr, ...tmpArr] });
      });
    }
  };

  murkyChangeHandler = () => {
    const tmpArr = [];

    if (this.state.murkyCheckbox) {
      this.setState({ murkyCheckbox: false }, () =>
        console.log(this.state.murkyCheckbox)
      );

      this.state.currentArr.filter((item) => {
        if (item.climate !== "murky") {
          tmpArr.push(item);
        }
        this.setState({ currentArr: tmpArr });
      });
    } else {
      this.setState({ murkyCheckbox: true }, () =>
        console.log(this.state.murkyCheckbox)
      );

      this.state.planetsArr.filter((item) => {
        if (item.climate === "murky") {
          tmpArr.push(item);
        }
        this.setState({ currentArr: [...this.state.currentArr, ...tmpArr] });
      });
    }
  };

  render() {
    let planetHl = this.state.hlPlanet ? "#F50057" : "black";
    let populationHl = this.state.hlPopulation ? "#F50057" : "black";
    let orbitalPeriodHl = this.state.hlOrbitalPeriod ? "#F50057" : "black";

    return (
      <div>
        <div className="planetTable">
          {/* {!this.state.loading && (
            <div className="planetItemTitle">
              <div
                onClick={this.nameSort}
                style={{ color: planetHl }}
                className="tableTitle"
              >
                Planet
              </div>
              <div
                onClick={this.populationSort}
                style={{ color: populationHl }}
                className="tableTitle"
              >
                Population
              </div>
              <div
                onClick={this.orbitalPeriodSort}
                style={{ color: orbitalPeriodHl }}
                className="tableTitle"
              >
                Orbital Period
              </div>
            </div>
          )}
          {this.state.loading && <CircularProgress />}
          {this.state.currentArr.map((item, index) => (
            <PlanetItem
              key={index}
              name={item.name}
              population={item.population}
              orbital_period={item.orbital_period}
            />
          ))} */}

          <TableContainer style={{ display: "block" }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    onClick={this.nameSort}
                    style={{
                      fontWeight: "700",
                      cursor: "pointer",
                      color: planetHl,
                    }}
                  >
                    Planet
                  </TableCell>
                  <TableCell
                    onClick={this.populationSort}
                    style={{
                      fontWeight: "700",
                      cursor: "pointer",
                      color: populationHl,
                    }}
                    align="right"
                  >
                    Population
                  </TableCell>
                  <TableCell
                    onClick={this.orbitalPeriodSort}
                    style={{
                      fontWeight: "700",
                      cursor: "pointer",
                      color: orbitalPeriodHl,
                    }}
                    align="right"
                  >
                    Orbital Period
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.currentArr.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">{item.population}</TableCell>
                    <TableCell align="right">{item.orbital_period}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {this.state.loading && <CircularProgress />}
        </div>
        <div className="planetFilters">
          <h3>Filters</h3>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => this.aridChangeHandler("arid")}
                color="default"
                checked={this.state.aridCheckbox}
              />
            }
            label="Arid"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={this.temperateChangeHandler}
                color="default"
                checked={this.state.temperateCheckbox}
              />
            }
            label="Temperate"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={this.tropicalChangeHandler}
                color="default"
                checked={this.state.tropicalCheckbox}
              />
            }
            label="Tropical"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={this.frozenChangeHandler}
                color="default"
                checked={this.state.frozenCheckbox}
              />
            }
            label="Frozen"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={this.murkyChangeHandler}
                color="default"
                checked={this.state.murkyCheckbox}
              />
            }
            label="Murky"
          />
        </div>
      </div>
    );
  }
}

export default Planets;
