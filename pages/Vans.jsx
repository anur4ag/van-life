import React, {useState, useEffect} from 'react';


export default function Vans(){
    const [vansData, setVansData] = useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    console.log(vansData);

    return (
        <h1>Vans goes here</h1>
    )
};