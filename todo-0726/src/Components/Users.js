import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import UserItem from './UserItem';


export default function Users() {
    const [ users, setUsers ] = useState([])
    const [ selected, setSelected ] = useState([])
    const selectedTmp = []

    const useStyles = makeStyles({
        root: {
            width: '350px',
            margin: '10px 10px 10px 50px',
            padding: '10px',
            boxShadow: '0 0 10px 1px #d7d7d7',
            '&:hover': {
                boxShadow: '0 0 10px 3px #d7d7d7'
            }
        },
        box: {
            marginTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
        }
      })
    
      const classes = useStyles()

    useEffect(() => {
        axios.get("https://swapi.dev/api/people").then((res) => {
            setUsers(res.data.results)
            console.log(res.data.results)
        }).catch((err)=>console.error(err))

        //kako da console.log ovo ispod da ide odma posle setState?
        console.log(selected)
    }, [])

    const onSelectHandler = (id) => {
        // console.log('users.js',id)


        selectedTmp.push(users.find(item => item.name === id))


        console.log(selectedTmp)
        
    }

    return (
        <div>
            <div className={classes.box}>
                {users.map((item, index) => 
                    <UserItem
                        key={index}
                        name={item.name}
                        birthYear={item.birth_year}
                        classes={classes}
                        onSelect={() => onSelectHandler(item.name)}
                    >
                    </UserItem>
                )}
            </div>
        </div>
    )
}