import { useState } from "react";
import SingleTicket from "../components/SingleTicket";
import useTickets from "../hooks/useTickets";

const AvailableTickets = () => {
  const { tickets } = useTickets();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = tickets.filter(
    (ticket) =>
      ticket.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.director.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="my-8 text-3xl font-bold text-center">Available Tickets</h1>

      <div className="my-8 w-48 mx-4 search_box">
        <input
          type="text"
          placeholder="Search tickets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input p-2 mb-8 text-lg border border-black rounded"
        />
      </div>

      <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
        {
          // eslint-disable-next-line react/prop-types
          filteredProducts.map((ticket) => (
            <SingleTicket key={ticket._id} ticket={ticket} />
          ))
        }
      </div>
    </div>
  );
};

export default AvailableTickets;