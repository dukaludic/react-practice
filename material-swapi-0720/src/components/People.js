import React, { Component } from "react";
import axios from "axios";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";

let isCheckedM = true;
let isCheckedF = true;
let isCheckedU = true;

class People extends Component {
  constructor() {
    super();
    this.state = {
      currentArr: [],
      peopleArr: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get("https://swapi.dev/api/people/").then((res) => {
      this.setState({
        peopleArr: res.data.results,
        currentArr: res.data.results,
        loading: false,
      });
      console.log(res.data.results);
    });
  }

  deleteHandler = (index) => {
    console.log("DELETE", index);

    const tmpArr = this.state.currentArr;
    // this.state.peopleArr.filter((item) => {
    //     if(item.index !== index) {
    //         tmpArr.push(item)
    //     }
    // })

    // tmpArr.filter((item) => item.url !== url)

    tmpArr.splice(index, 1);

    this.setState({ peopleArr: tmpArr });

    console.log("tmpArr", tmpArr);
  };

  checkboxChangeHandlerM = () => {
    const tmpArr = [];

    if (isCheckedM) {
      isCheckedM = false;
      this.state.peopleArr.filter((item) => {
        if (item.gender !== "male") {
          tmpArr.push(item);
          console.log("REMOVE", tmpArr);
        }
        this.setState({ currentArr: tmpArr });
      });
    } else {
      isCheckedM = true;
      this.state.peopleArr.filter((item) => {
        if (item.gender === "male") {
          tmpArr.push(item);
          console.log("ADD", tmpArr);
        }

        this.setState({ currentArr: [...this.state.currentArr, ...tmpArr] });
      });
    }
  };

  checkboxChangeHandlerF = () => {
    const tmpArr = [];

    if (isCheckedF) {
      isCheckedF = false;
      this.state.peopleArr.filter((item) => {
        if (item.gender !== "female") {
          tmpArr.push(item);
          console.log("REMOVE", tmpArr);
        }
        this.setState({ currentArr: tmpArr });
      });
    } else {
      isCheckedF = true;
      this.state.peopleArr.filter((item) => {
        if (item.gender === "female") {
          tmpArr.push(item);
          console.log("ADD", tmpArr);
        }

        this.setState({ currentArr: [...this.state.currentArr, ...tmpArr] });
      });
    }
  };

  checkboxChangeHandlerU = () => {
    const tmpArr = [];

    if (isCheckedU) {
      isCheckedU = false;
      this.state.peopleArr.filter((item) => {
        if (item.gender !== "n/a") {
          tmpArr.push(item);
          console.log("REMOVE", tmpArr);
        }
        this.setState({ currentArr: tmpArr });
      });
    } else {
      isCheckedU = true;
      this.state.peopleArr.filter((item) => {
        if (item.gender === "n/a") {
          tmpArr.push(item);
          console.log("ADD", tmpArr);
        }

        this.setState({ currentArr: [...this.state.currentArr, ...tmpArr] });
      });
    }
  };

  // console.log(peopleArr)

  render() {
    console.log(this.state);

    return (
      <div>
        <div className="chipContainer">
          {this.state.loading && <CircularProgress />}
          {this.state.currentArr.map((item, index) => (
            <Chip
              key={index}
              label={item.name}
              color={
                item.gender === "male"
                  ? "primary"
                  : item.gender === "female"
                  ? "secondary"
                  : "default"
              }
              clickable
              onDelete={() => this.deleteHandler(index)}
            />
          ))}
        </div>
        <div className="checkboxContainer">
          <Checkbox
            checked={isCheckedM}
            color="primary"
            onChange={this.checkboxChangeHandlerM}
          />
          <div>Male</div>
          <Checkbox
            checked={isCheckedF}
            color="secondary"
            onChange={this.checkboxChangeHandlerF}
          />
          <div>Female</div>
          <Checkbox
            checked={isCheckedU}
            color="default"
            onChange={this.checkboxChangeHandlerU}
          />
          <div>Unknown</div>
        </div>
      </div>
    );
  }
}

export default People;
