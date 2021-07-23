import { Component } from "react";
import axios from "axios";
import PlanetItem from "./PlanetItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// const planetItem = (item) => {
//     return <div style={{display: 'flex'}}>
//         <div>{item.name}</div>
//         <div>{item.population}</div>
//     </div>

// }

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

    if (populationBool === true) {
      const tmpArr = this.state.currentArr;
      tmpArr.sort((a, b) =>
        parseInt(a.population) > parseInt(b.population) ? -1 : 1
      );
      this.setState({ currentArr: tmpArr });
    } else {
      const tmpArr = this.state.currentArr;
      tmpArr.sort((a, b) =>
        parseInt(a.population) > parseInt(b.population) ? 1 : -1
      );
      this.setState({ currentArr: tmpArr });
    }

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

    // console.log(eval(`${climate}Checkbox`));

    if (this.state.aridCheckbox) {
      this.setState({ aridCheckbox: false }, () =>
        console.log(this.state.aridCheckbox)
      );

      this.state.currentArr.filter((item) => {
        if (item.climate !== "arid") {
          tmpArr.push(item);
        }
        this.setState({ currentArr: tmpArr });
      });
    } else {
      this.setState({ aridCheckbox: true }, () =>
        console.log(this.state.aridCheckbox)
      );

      this.state.planetsArr.filter((item) => {
        if (item.climate === "arid") {
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
          {!this.state.loading && (
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
          ))}
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
