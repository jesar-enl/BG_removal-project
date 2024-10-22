import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Navbar() {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <nav className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full"
        >
          Get Started{" "}
          <img
            src={assets.arrow_icon}
            alt="arrow icon"
            className="w-3 sm:w-4"
          />
        </button>
      )}
    </nav>
  );
}
