import { assets } from "../assets/assets";

function Result() {
  return (
    <div className="min-h-[75vh] mx-4 my-3 lg:mx-24 mt-12">
      <div className="bg-white rounded-lg px-6 py-4 drop-shadow-sm">
        {/* ---------- IMAGE CONTAINER ---------- */}
        <div className="flex flex-col sm:grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold mb-4 text-gray-600">Original</p>
            <img className="rounded-md border" src={assets.image_w_bg} alt="" />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold mb-4 text-gray-600">
              Background removed
            </p>
            <div className="rounded-md border border-gray-200 overflow-hidden bg-layer h-full relative">
              {/* <img src={assets.image_wo_bg} alt="" /> */}
              <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="border-4 border-violet-600 rounded-full h-16 w-16 border-t-transparent animate-spin"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- BUTTONS ---------- */}
        <div className="flex justify-center sm:justify-end gap-4 mt-8 lg:mt-16 items-center flex-wrap">
          <button className="px-8 py-2.5 rounded-full hover:scale-105 transition-all duration-700 text-sm border border-violet-600 text-violet-600">
            Try another image
          </button>
          <a
            className="px-8 py-2.5 rounded-full hover:scale-105 transition-all duration-700 text-sm text-white bg-gradient-to-r from-violet-600 to-fuchsia-600"
            href=""
          >
            Download image
          </a>
        </div>
      </div>
    </div>
  );
}

export default Result;
