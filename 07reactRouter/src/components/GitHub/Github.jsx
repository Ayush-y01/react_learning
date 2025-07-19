import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect( () => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

    return ( <div>
        GitHub: {data.followers}
        <img src={data.avatar_url} alt="git pic" />
    </div> );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}