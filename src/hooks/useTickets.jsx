import { useEffect, useState } from "react";

const useTickets = () => {
    const [tickets, setTickets] = useState([])

 useEffect(()=> {
    fetch("http://localhost:5000/tickets")
    .then(res => res.json())
    .then(data => setTickets(data))
    }, [])
    return {tickets, setTickets}
};

export default useTickets;