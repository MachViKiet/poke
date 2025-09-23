import { useState, useEffect } from "react";
import { getRegions } from "../services/pokemon";

const useRegions = () => {

    const [regions, setRegions] = useState([]);

    useEffect(() => {
        getRegions().then(res => {
            setRegions(res.data.results.map(region => region.name));
        });
    }, []);

    return { regions };
};

export default useRegions;