import { useState } from "react";
import useLocal from "./useLocal";

export default async function fetchCatelogue () {
    const [catelogue, setCatelogue] = useLocal('catelogue', null);
    if(!catelogue){
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=> setCatelogue(JSON.parse(json)))
                .catch((error) => console.log(error))
    }

    return catelogue;
}