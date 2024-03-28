"use client";
import { fetchCars } from "@utils";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
import { useContext, useEffect, useState } from "react";
import { ParamsContext } from "@context/ParamsContext";

function Home({ searchParams }: HomeProps) {
  const [allCars, setAllCars] = useState([]);
  const ctx = useContext(ParamsContext);
  console.log(ctx);

  useEffect(() => {
    async function fetchData() {
      const cars = await fetchCars({
        manufacturer: ctx.manufacturer || "",
        year: ctx.year || 2022,
        fuel: ctx.fuel || "",
        limit: ctx.limit || 10,
        model: ctx.model || "",
      });
      setAllCars(cars);
    }

    fetchData();
  }, [ctx]);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {allCars?.length ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, idx) => (
                <CarCard car={car} key={idx} />
              ))}
            </div>

            <ShowMore
              pageNumber={(ctx.limit || 10) / 10}
              isNext={(ctx.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
