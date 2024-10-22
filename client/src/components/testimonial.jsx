import { testimonialsData } from "../assets/assets";

export default function Testimonial() {
  return (
    <section className="mx-2 pb-10 md:py-20">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5">
        Customer Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white drop-shadow-md p-6 rounded-xl m-auto hover:scale-105 transition-all duration-500"
          >
            <p className="text-4xl text-gray-500">”</p>
            <p className="text-sm text-gray-500">{testimonial.text}</p>
            <div className="flex gap-3 items-center mt-6">
              <img
                src={testimonial.image}
                alt=""
                className="rounded-full w-9"
              />
              <div className="flex flex-col gap-0">
                <p className="text-[22px]">{testimonial.author}</p>
                <p className="text-sm text-gray-600 uppercase">{testimonial.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
