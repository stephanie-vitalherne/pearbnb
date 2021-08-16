import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        layout="fill"
        objectFit="cover"
        src="https://links.papareact.com/0fm"
      />
    </div>
  );
}

export default Banner;
