import Image from "next/image";

function Header() {
  return (
    <header>
      <h1>Banana</h1>
      {/* Left */}
      <div className="">
        <Image src="https://links.papareact.com/qd3" layout="fill" />
      </div>

      {/* Middle */}
      <div className=""></div>

      {/* Right */}
      <div className=""></div>
    </header>
  );
}

export default Header;
