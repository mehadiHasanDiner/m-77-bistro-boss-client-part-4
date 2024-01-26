import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

// TODO: provide a publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="w-full">
      <SectionTitle
        subHeading="please process"
        heading="Payment"
      ></SectionTitle>
      <h2 className="text-3xl">Taka taka o taka tumi koyi</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
