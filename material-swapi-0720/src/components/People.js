import React, { Component } from 'react';
import axios from 'axios';
import Chip from '@material-ui/core/Chip';
import { Button } from '@material-ui/core/';
import Checkbox from '@material-ui/core/Checkbox';



class People extends Component {
    constructor() {
        super();
        this.state = {
            startArr: [],
           peopleArr: [],
           checked: true,
           isCheckedM: true,
           isCheckedF: true,
           isCheckedU: true
        }
    }
    //git checkout

    loadPeople = () => {
        axios.get('https://swapi.dev/api/people/').then((res) => {this.setState({peopleArr: res.data.results, startArr: res.data.results})
        console.log(res.data.results)
    })
    }

    componentDidMount() {
        this.loadPeople();
    }

    deleteHandler = (index) => {
        console.log('DELETE', index)
        
        const tmpArr = this.state.peopleArr;
        // this.state.peopleArr.filter((item) => {
        //     if(item.index !== index) {
        //         tmpArr.push(item)
        //     }
        // })

        // tmpArr.filter((item) => item.url !== url)

        tmpArr.splice(index, 1)

        this.setState({peopleArr: tmpArr})


        // axios.delete(`https://swapi.dev/api/people/${index}`)


        console.log('tmpArr', tmpArr)
    }

    checkboxChangeHandlerM = () => {
        this.setState({isCheckedM: !this.state.isCheckedM})
        console.log('checked',this.state.isCheckedM)

        const tmpArr = [];

        if(this.state.isCheckedM) {
            this.state.peopleArr.filter((item) => 
            {if(item.gender !== 'male') {
                tmpArr.push(item);
                this.setState({peopleArr: tmpArr})
            }})
        } else {
            this.setState({peopleArr: this.state.startArr})
        }
        // console.log('peoplArr',tmpArr)
    }

    checkboxChangeHandlerF = () => {
        this.setState({isCheckedF: !this.state.isCheckedF})
        console.log('checked',this.state.isCheckedF)

        const tmpArr = [];

        if(this.state.isCheckedF) {
            this.state.peopleArr.filter((item) => 
            {if(item.gender !== 'female') {
                tmpArr.push(item);
                this.setState({peopleArr: tmpArr})
            }})
        } else {
            this.setState({peopleArr: this.state.startArr})
        }
        // console.log('peoplArr',tmpArr)
    }

    checkboxChangeHandlerU = () => {
        this.setState({isCheckedU: !this.state.isCheckedU})
        console.log('checked',this.state.isCheckedU)

        const tmpArr = [];

        if(this.state.isCheckedU) {
            this.state.peopleArr.filter((item) => 
            {if(item.gender !== 'n/a') {
                tmpArr.push(item);
                this.setState({peopleArr: tmpArr})
            }})
        } else {
            this.setState({peopleArr: this.state.startArr})
        }
        // console.log('peoplArr',tmpArr)
    }

    // console.log(peopleArr)

    render() {

        console.log(this.state)

        return <div><div className="chipContainer">
            {
                this.state.peopleArr.map((item, index) => 
                (<Chip
                    className="chip"
                    key={index}
                    label={item.name}
                    color={
                        item.gender === 'male' ? 'primary' : (item.gender === 'female' ? 'secondary' : 'default')
                    }
                    clickable
                    onDelete={() => this.deleteHandler(index)}
                />))
            }
            </div>
        <div className="checkboxContainer">
        <Checkbox
            checked={this.state.isCheckedM}
            color='primary'
            onChange={this.checkboxChangeHandlerM}
        />
        <div>Male</div>
        <Checkbox
            checked={this.state.isCheckedF}
            color='secondary'
            onChange={this.checkboxChangeHandlerF}
        />
        <div>Female</div>
        <Checkbox
            checked={this.state.isCheckedU}
            color='default'
            onChange={this.checkboxChangeHandlerU}
        />
        <div>Unknown</div>
    </div>
    </div>
        
    }

    
}

export default People;