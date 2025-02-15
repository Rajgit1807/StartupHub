
import SearchForm from "../../components/SearchForm";

import Startups from "@/components/Startups";


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query; 

  return (
    <>
      <section className="red_container">
        <h1 className="heading w-full h-fit">
          PITCH YOUR STARTUP,
          <br /> LETS RAISE FUNDS
        </h1>
        <p className="sub-heading">
          Submit Ideas, Vote on Pitches, and Get Noticed.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-2xl font-bold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <Startups query={query}/>
      </section>
    </>
  );
}
