import React, { Component } from "react";
import axios from "axios";
import Todo from "./Todo";

class Todos extends Component {
  constructor() {
    super();

    this.state = {
      todoArr: [],
    };
  }

  // za sad nista dok ne izvalim sto je todoArr prazan u GET.then
  filterTodos = (arr) => {
    arr.filter((item) => item.length < 40);
    return arr;
  };

  loadTodos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: 5,
        },
      })
      .then((res) => {
        this.setState({ todoArr: res.data });
        console.log("RES DATA", res.data);
      });
  };

  componentDidMount(prevProps, prevState, snapshot) {
    this.loadTodos();

    // const names = ["john", "bob", "mary", "joe"];

    // const user = { firstname: "John", lastname: "Doe" };

    // for (key in user) console.log(user[key]);

    // for (item of names) {
    //   console.log(item);
    // }

    const users = [
      {
        name: "luka",
        age: 28,
        email: "123test",
        licence: true,
        pet: true,
        km: 2700,
      },
      {
        name: "marko",
        age: 15,
        email: "123test",
        licence: false,
        pet: true,
        km: 0,
      },
      {
        name: "marija",
        age: 25,
        email: "123test",
        licence: true,
        pet: true,
        km: 17200,
      },
      {
        name: "jovan",
        age: 12,
        email: "123test",
        licence: false,
        pet: false,
        km: 0,
      },
      {
        name: "milos",
        age: 28,
        email: "123test",
        licence: true,
        pet: true,
        km: 18000,
      },
    ];

    // Sortiraj na one koji imaju i nemaju maill
    // Sortiraj oba na one koji imaju preko 18 i nemaju preko 18
    // Sortiraj sva 4 ako imaju i nemaju vozacku

    const saVozackom = [];
    const bezVozacke = [];
    const bezEmaila = [];
    const saPetomBezMaila = [];
    const bezPetaIspod18 = [];
    const bez18 = [];

    // bez maila sa ljubimcem i da su ispod 18 sa ljubimcem

    // Vezbaj if else sort

    // Instaliraj material ui i instaliraj sidebar, i neke komponente, chips, izlistam arraye koje napravim
    // Array + filter + material.ui // moze i jsonplaceholder.. swapi. Koristi slike karaktera ili svemirskih brodova

    users.filter((item) => {
      if (item.email.length > 0) {
        console.log("svi sa mailom", item.name);
        if (item.age >= 18) {
          console.log("svi sa 18", item.name);
          if (item.licence) {
            saVozackom.push(item);
          }
        } else {
          bez18.push(item);
          console.log(`${item.name} nema 18godina`);
          if (item.pet) {
            bezPetaIspod18.push(item);
          }
          bezVozacke.push(item);
        }
      } else {
        bezEmaila.push(item);
        if (item.pet) {
          saPetomBezMaila.push(item);
        }
      }
    });

    console.log("BEZ 18", bez18);

    users.filter((item) => {
      if (item.km > 10000) {
        console.log(item.name, "preko 10000");
      } else {
        console.error(item.name, "ispod 10000");
      }
    });

    console.log("sa vozackom", saVozackom);
    console.log("bez vozacke", bezVozacke);
    console.log("bez emaila", bezEmaila);
    console.log("saPetomBezMailaa", saPetomBezMaila);
    console.log("bezPetaIspod18", bezPetaIspod18);
  }

  deleteHandler = (id) => {
    // id = id - 1;
    console.log("DELETE", id);

    const tmp = this.state.todoArr;
    // tmp.splice(id - 1, 1);
    //id pravi problem. Posle prvog brisanja brise sve +1

    console.log(tmp);

    this.setState({ todoArr: tmp });

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  };

  render() {
    return (
      <div>
        {this.state.todoArr.map((item) => (
          <Todo
            onDelete={() => this.deleteHandler(item.id)}
            title={item.title}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    );
  }
}

export default Todos;
