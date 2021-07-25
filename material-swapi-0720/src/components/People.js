import React, { Component } from 'react';
import axios from 'axios';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';


let isCheckedM = true;
let isCheckedF = true;
let isCheckedU = true;

class People extends Component {
    constructor() {
        super();
        this.state = {
            startArr: [],
           peopleArr: [],
           loading: true,
        }
    }
    //git checkout

    loadPeople = () => {
        axios.get('https://swapi.dev/api/people/').then((res) => {this.setState({peopleArr: res.data.results, startArr: res.data.results, loading: false})
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
        isCheckedM = !isCheckedM
        console.log('checked',isCheckedM)

        const tmpArr = [];

        if(!isCheckedM) {
            this.state.peopleArr.filter((item) => 
            {if(item.gender !== 'male') {
                tmpArr.push(item);
                this.setState({peopleArr: tmpArr})
            }})
        } else {
            this.setState({peopleArr: this.state.startArr})
        }
        
        this.setState({peopleArr: tmpArr})
        // // console.log('peoplArr',tmpArr)
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

        return <div>
            <div className="chipContainer">
             {this.state.loading && <CircularProgress />}
             {
                this.state.peopleArr.map((item, index) => 
                (<Chip
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
            checked={isCheckedM}
            color='primary'
            onChange={this.checkboxChangeHandlerM}
        />
        <div>Male</div>
        <Checkbox
            checked={isCheckedF}
            color='secondary'
            onChange={this.checkboxChangeHandlerF}
        />
        <div>Female</div>
        <Checkbox
            checked={isCheckedU}
            color='default'
            onChange={this.checkboxChangeHandlerU}
        />
        <div>Unknown</div>
        
    </div>
    </div>
        
    }

    
}

export default People;