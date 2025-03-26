import React from "react";
import Navbar from "../components/Navbar";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const plans = [
  {
    name: "Basic",
    priceId: "price_1234567890abcdef",
    price: "$9.99/month",
    features: ["720p Streaming", "1 Device", "No Ads"],
    recommended: false,
  },
  {
    name: "Standard",
    priceId: "price_0987654321fedcba",
    price: "$13.99/month",
    features: ["1080p Streaming", "2 Devices", "No Ads"],
    recommended: true, // Highlight this plan
  },
  {
    name: "Premium",
    priceId: "price_1122334455aabbcc",
    price: "$17.99/month",
    features: ["4K UHD", "4 Devices", "No Ads"],
    recommended: false,
  },
];

const SubscriptionPlans = () => {
  async function handleCheckout(priceId) {
    const stripe = await stripePromise;
    console.log("priceId :", priceId);
    const response = await fetch(
      "http://localhost:5000/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      }
    );

    console.log("response from subscriptionPlansPage :", response);
    const session = await response.json();
    console.log("session in SubscriptionPlansPage : ", session);
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error(result.error.message);
    }
  }
  return (
    <div>
      <div className=" bg-gray-900 text-white">
        <Navbar />
      </div>

      <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-900 to bg-blue-950  text-white p-6">
        <h1 className="text-4xl font-bold mb-8">Choose Your Plan</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="w-[300px] h-[300px] rounded-[10px] shadow-lg overflow-hidden text-center p-5 border border-gray-500 
            bg-gradient-to-br from-[#6C1E41] via-[#251743] to-[#120C1F] transition-transform duration-400 
            ease-in-out hover:shadow-xl hover:scale-105"
            >
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="text-xl font-bold mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg w-full"
                // onClick={() => handleCheckout(plan.priceId)}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
