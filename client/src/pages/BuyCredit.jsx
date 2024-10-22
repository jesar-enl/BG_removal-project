import { assets, plans } from "../assets/assets";

function BuyCredit() {
  return (
    <section className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 py-2 px-10 rounded-full mb-7">
        Our Plans
      </button>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold sm:mb-10 mb-6 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Choose the plan that&#39;s right for you
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map(({ id, price, credits, desc }) => (
          <div
            className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500"
            key={id}
          >
            <img src={assets.logo_icon} width={40} alt="logo" />
            <p className="mt-4 font-semibold">{id}</p>
            <p className="text-sm">{desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${price}</span> / {credits}{" "}
              credits
            </p>
            <button className="w-full bg-gray-800 text-white text-sm rounded-md mt-7 py-2 5 min-w-52">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BuyCredit;
