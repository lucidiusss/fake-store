import { RiHome2Line } from "react-icons/ri";

function Header() {
  return (
    <div className="text-white px-20 pt-5 w-full mx-auto flex flex-row items-center justify-between">
      <a href="/">
        <div className="flex flex-row items-center gap-2 border border-[#6c6767] font-bold w-fit rounded-lg p-3 hover:bg-black">
          <RiHome2Line />
          <h1>Shop4Goodies</h1>
        </div>
      </a>
      <nav>
        <ul className="flex flex-row gap-4">
          <li className="hover:text-[#6c6767] transition">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-[#6c6767] transition">
            <a href="/shop">Shop</a>
          </li>
          <li className="hover:text-[#6c6767] transition">
            <a href="/help">Help</a>
          </li>
          <li className="hover:text-[#6c6767] transition">
            <a href="profile">Profile</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
