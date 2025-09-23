import { useEffect, useState } from "react";
import { getTypes } from "../services/pokemon";

const useTypes = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getTypes().then(res => {
            setTypes(res.data.results.map(type => type.name))
        })
    }, [])

    return { types }
}

export default useTypes