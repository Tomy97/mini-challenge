import { useState } from "react";

const useFetch = () => {
    const [status, setStatus] = useState([...setStatus]);

    const getApi = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()

            const date = data.res.filter(status => status.id)
            console.log(date);
        }
        catch (err) {
            console.log(err);
        }
    }
    return {
        state: status,
        getApi
    }
}

export default useFetch;
