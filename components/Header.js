import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items=center h-10 cursor-pointer">
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          src="https://links.papareact.com/qd3"
        />
      </div>

      {/* Middle */}
      <div className=""></div>

      {/* Right */}
      <div className=""></div>
    </header>
  );
}

export default Header;
