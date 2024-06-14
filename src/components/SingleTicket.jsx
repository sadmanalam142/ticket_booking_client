import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from 'react-hot-toast';

/* eslint-disable react/prop-types */
const SingleTicket = ({ ticket }) => {
  const { _id, name, director, price, image_url } = ticket;
  const { user } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (!user) {
      navigate('/login');
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmBooking = async () => {
    const data = {
         name: name,
         director: director,
         price: price,
         image_url: image_url,
         email: user?.email
         };
    await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        closeModal();
        toast.success("Ticket is added to dashboard")
        // You can add additional actions after booking confirmation here, like showing a success message
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="text-xl font-medium">{director}</h3>
        <h3 className="text-xl font-medium">{price == 0 ? <span className='text-red-600'>free</span> : price} {price == 0 ? "" : "$"}</h3>
        <div className="card-actions justify-end">
          <button onClick={openModal} className="btn bg-lime-500">
            Book
          </button>
          <button className="btn bg-lime-500">
            <Link to={`/tickets/${_id}`}>See details</Link>
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="font-bold text-lg">Confirm Booking</h2>
            <p className="py-4">Are you sure you want to book this ticket?</p>
            <div className="flex justify-end space-x-4">
              <button onClick={closeModal} className="btn bg-gray-500">Cancel</button>
              <button onClick={confirmBooking} className="btn bg-lime-500">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTicket;
