import { useState } from "react";

const useFilters = () => {
    const [filters, setFilters] = useState({
        region: "kanto",
        type: "",
        sortBy: "id",
        search: ""
    });

    return { filters, setFilters };
};

export default useFilters;