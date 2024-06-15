import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/next.svg";

const NavBar = () => {
  return (
    <nav className=" shadow-xl">
      <div className=" container mx-auto">
        <div className=" flex justify-between items-center p-4">
          <div>
            <Link href={"/"}>
              <Image src={Logo} alt="next-image" width={100} height={100} />
            </Link>
          </div>
          <ul className="flex font-medium">
            <li className="mx-3">
              <Link href={"/login"}>Login</Link>
            </li>
            <li className="mx-3">
              <Link href={"/regester"}>Regester</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
