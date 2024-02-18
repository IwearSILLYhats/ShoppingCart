import { useState, useEffect } from "react";

export default function useLocal (key, defaultVal) {

    const local = JSON.parse(localStorage.getItem(key));
    const [storage, setStorage] = useState(
        local || defaultVal
        )
    

    useEffect( ()=> {
        localStorage.setItem(key, JSON.stringify(storage))
    }, [key, storage])

    return [storage, setStorage]
}