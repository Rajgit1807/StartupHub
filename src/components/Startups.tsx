"use client";
import { useEffect, useState } from "react";
import StartUpCard from "./StartUpCard";
import { Startup } from "@/lib/utils";

const Startups = ({ query }: { query?: string }) => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>([]);

  useEffect(() => {
    const fetchStartups = async (): Promise<void> => {
      try {
        const response = await fetch("/api/startup", { method: "GET" });
        if (!response.ok) throw new Error("Failed to fetch startups");

        const data = await response.json();
        setStartups(data.startups);
        setFilteredStartups(data.startups); 
      } catch (error) {
        console.error("Error:", (error as Error).message);
      }
    };

    fetchStartups();
  }, []);

  useEffect(() => {
    if (!query) {
      setFilteredStartups(startups);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    const filtered = startups.filter((startup) =>
      startup.title.toLowerCase().includes(lowerCaseQuery) ||
      startup.author.name.toLowerCase().includes(lowerCaseQuery) ||
      startup.category.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredStartups(filtered);
  }, [query, startups]);

  return (
    <ul className="mt-7 card_grid">
      {filteredStartups.length > 0 ? (
        filteredStartups.map((startup) => (
          <StartUpCard key={startup.id} startup={startup} />
        ))
      ) : (
        <p className="no-result">No Startups Found</p>
      )}
    </ul>
  );
};

export default Startups;
