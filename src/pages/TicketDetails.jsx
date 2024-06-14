import { useLoaderData } from "react-router-dom";

const TicketDetails = () => {
  const tickets = useLoaderData();

  const { director, description, image_url, price, name } = tickets;

  return (
    <div className="flex align-middle justify-center my-11 ticket_details">
      <div className="w-[500px] product_details">
        <h1 className="text-5xl text-center font-bold">{name}</h1>

        <img className="h-[500px] my-3" src={image_url} alt="product image" />

        <h3 className="text-xl font-medium">{price == 0 ? <span className='text-red-600'>free</span> : price} {price == 0 ? "" : "$"}</h3>
        <h3 className="text-xl font-semibold my-2">{director}</h3>
        <p className="text-lg font-light">{description}</p>
      </div>
    </div>
  );
};

export default TicketDetails;