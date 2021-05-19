import { useState } from "react";

const useFetch = () => {
    const [data, setData] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(data => setData.json())
            .then(json => console.log(json))

        console.log();
    }
    return {
        state: data,
        getData
    }
}


export default useFetch
