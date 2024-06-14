import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { name, price } = booking;
    return (
        <div>
            <h3 className="text-3xl">Payment for {name}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;