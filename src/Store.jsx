import { useEffect, useState } from "react";
import useLocal from "./scripts/useLocal";
import StoreItem from "./components/StoreItem"
import styles from "./styles/Store.module.css"

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
    if(!catelogue) return <p>Loading...</p>
    return (
        <div className={styles.store}>
        {catelogue.map((product) => {
            return (
            <StoreItem item={product} key={product.id} />
            )})}
        </div>
    )
}

export default Store;