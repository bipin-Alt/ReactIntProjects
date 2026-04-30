import { useState } from "react";
import { Checkoutcontrols } from "../../formData";
import CommonForm from "../CommonForm/CommonForm";
import useCart from "../../store/useCart";

function Checkout() {
  const [checkoutFormData, setCheckoutFormData] = useState({
    "full-name": "",
    email: "",
    "phone-number": "",
    district: "",
    city: "",
    "street-address": "",
    "house-apartment": "",
  });
  const { Cartproducts } = useCart((state) => state);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Order has been Placed in the address", checkoutFormData);
    console.log("The Ordered Items are :", Cartproducts);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/40">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Place Your Order
            </h1>
            <p className="text-slate-200 text-sm mt-1">
              Fill up the form to get your order infront of your door.
            </p>
          </div>

          <CommonForm
            formControls={Checkoutcontrols}
            formData={checkoutFormData}
            setFormData={setCheckoutFormData}
            buttonText="Place Order"
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
