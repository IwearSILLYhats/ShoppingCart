import { useEffect, useState } from "react";
import useLocal from "./scripts/useLocal"

function Store () {
    const [catelogue, setCatelogue] = useLocal('catelogue', null);
    const [error, setError] = useState(null);
    useEffect(() => {
        if(!catelogue){
            fetch('https://fakestoreapi.com/products')
                    .then(res=> res.json())
                    .then(json=> setCatelogue(json))
                    .catch((error) => setError(error))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if(error) return <p>{error.status}</p>;
    return (
        <>
        <p>A page with store stuff on it.</p>
        </>
    )
}

export default Store;