import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

// TODO: provide a publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-full">
      <SectionTitle
        subHeading="please process"
        heading="Payment"
      ></SectionTitle>
      <h2 className="text-3xl">Taka taka o taka tumi koyi</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
