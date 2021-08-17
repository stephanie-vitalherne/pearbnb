import { format } from "date-fns";
import { Header, Footer, InfoCard } from "../components";
import { useRouter } from "next/dist/client/router";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, guests, startDate, endDate } = router.query;
  const formattedStartDate = format(new Date(startDate), "MMMM dd, yyy");
  const formattedEndDate = format(new Date(endDate), "MMMM dd, yyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - ({range}) - for {guests} guests
          </p>
          <h1 className="text-3xl mt-2 mb-6">Stays in {location}</h1>

          {/* Buttons */}
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  star={star}
                  price={price}
                  total={total}
                  title={title}
                  location={location}
                  description={description}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
