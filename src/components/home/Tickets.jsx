import useTickets from "../../hooks/useTickets";
import SingleTicket from "../SingleTicket";
import { Link } from "react-router-dom";

const Tickets = () => {
  const { tickets } = useTickets();
  return (
    <div className="mb-24">
      <h1 className="my-8 text-3xl font-bold text-center">Popular Tickets</h1>
      <div className="flex justify-end">
      <Link to="/all-tickets"><button className="text-lime-500 text-xl mr-24 mb-4 all_ticket_nav">see all tickets</button></Link>
      </div>

      <div className="flex gap-2 flex-wrap px-6 justify-center items-center home_products">
        {
          // eslint-disable-next-line react/prop-types
          tickets.slice(0, 3).map((ticket) => (
            <SingleTicket key={ticket._id} ticket={ticket} />
          ))
        }
      </div>
    </div>
  );
};

export default Tickets;