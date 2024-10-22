import { assets } from "../assets/assets";

export default function Hero() {
  return (
    <section className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* left side */}
      <div>
        <h1 className="text-4xl xl:text-4xl 2xl:text-6xl font-bold text-neutral-700">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="max-md:hidden" />
          images for free
        </h1>
        <p className="my-6 text-[15px] text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br className="max-sm:hidden" />
          Lorem Ipsum has been the industry&#39;s standard dummy text ever.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
          >
            <img
              src={assets.upload_btn_icon}
              alt="upload button icon"
              className="w-5"
            />
            <p className="text-white text-sm">Upload your image</p>
          </label>
        </div>
      </div>
      {/* right side */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="header image" />
      </div>
    </section>
  );
}
