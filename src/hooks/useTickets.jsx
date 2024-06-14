import { useEffect, useState } from "react";

const useTickets = () => {
    const [tickets, setTickets] = useState([])

 useEffect(()=> {
    fetch("https://ticket-booking-server-1yvn.onrender.com/tickets")
    .then(res => res.json())
    .then(data => setTickets(data))
    }, [])
    return {tickets, setTickets}
};

export default useTickets;