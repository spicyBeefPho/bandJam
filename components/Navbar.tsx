import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img className="h-6" src="/bandjamLogo.svg" alt="" />
      </div>
      <div className="font-medium text-primary-white">
        <Link href="/about">
          <a className="mr-8">Sign Up</a>
        </Link>
        <Link href="/about">
          <a>Log In</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
