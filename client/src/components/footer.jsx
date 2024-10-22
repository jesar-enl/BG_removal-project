import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="px-4 lg:px-24 py-3">
      <div className="flex items-center justify-between">
        <img
          width={150}
          src={assets.logo}
          alt="logo"
        />
        <p className="flex-1 border-l border-gray-400 pl-4 text-sm max-sm:hidden text-gray-500">
          All right reserved. | Copyright @bg.removal
        </p>

        <div className="flex gap-1">
          <img width={40} src={assets.facebook_icon} alt="logo" className="" />
          <img width={40} src={assets.twitter_icon} alt="logo" className="" />
          <img
            width={40}
            src={assets.google_plus_icon}
            alt="logo"
            className=""
          />
        </div>
      </div>
    </footer>
  );
}
