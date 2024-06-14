import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyBookings = () => {
    const token = localStorage.getItem('token');
    const { user } = useAuth();
    const [bookings, setBookings] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${user?.email}`, {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              authorization: `Bearer ${token}`,
            },
          })
          .then((res) => res.json())
          .then((data) => setBookings(data));
      }, [user]);

      const handleRemove = async (id) => {
        await fetch(`http://localhost:5000/booking/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then(() => {
            toast.success('Product Removed');
            setBookings(bookings.filter((booking) => booking._id !== id));
          });
      };
    return (
        <div>
        <h3 className="text-3xl mb-5 text-center my-12">My Bookings</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-base">Name</th>
                        <th className="text-base">Director</th>
                        <th className="text-base">price</th>
                        <th className="text-base">payment</th>
                        <th className="text-base">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings &&
                        bookings?.map((booking, i) => <tr key={booking._id}>
                            <th>{i + 1}</th>
                            <td>{booking.name}</td>
                            <td>{booking.director}</td>
                            <td>$ {booking.price}</td>
                            {
                                booking.price >= 0 && <td>
                                {
                                    booking.price && !booking.paid && <Link
                                        to={`/dashboard/payment/${booking._id}`}
                                    >
                                        <button
                                            className='btn btn-primary btn-sm'
                                        >Pay</button>
                                    </Link>
                                }
                                {
                                    booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                }
                                
                            </td>
                            }
                            {
                                !booking.paid && <td><button onClick={() => handleRemove(booking._id)} className="btn btn-xs bg-red-600 text-white">Remove</button></td>
                            }
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyBookings;