import {useEffect} from 'react';

export default function UserItem(props) {

    // useEffect(() => {
    //     console.log(props.key)

    // }, [])

    return (
        <div onClick={props.onSelect} className={props.classes.root}>
            <h3>{props.name}</h3>
            <div>{props.birthYear}</div>
        </div>
    )
}