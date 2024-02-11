function fetchData () {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch((error) => console.log(error))
}

export default fetchData