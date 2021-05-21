const useFetch = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        state: data
    }
}

export default useFetch
