import React, { Component } from 'react';
import axios from 'axios';

class Planets extends Component {
    constructor() {
        super()
        this.state = {
            planetsArr: [],
        }
    }

    componentDidMount() {
        axios.get('https://swapi.dev/api/planets/')
        .then((res) => this.setState({planetsArr: res.data.results}))
    }

    render() {
        return <div>
            {this.state.planetsArr.map((item) =>
                <div>{item.name}</div>
            )}
            
        </div>
    }
    
}

export default Planets;