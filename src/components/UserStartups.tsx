"use client"
import { Startup } from "@/lib/utils";

import React, { useEffect, useState } from "react";
import StartUpCard from "./StartUpCard";

const UserStartups = ({ id }: { id: any}) => {

  const [startups, setStartups] = useState<Startup[]>([]);
  
    useEffect(() => {

      const fetchStartups = async (): Promise<void> => {
        try {
          const response = await fetch(`/api/userstartup/${id}`, { method: "GET" });
          if (!response.ok) throw new Error("Failed to fetch startups");
  
          const data = await response.json();

          setStartups(data.startups);

        } catch (error) {
          console.error("Error:", (error as Error).message);
        }
      };
  
      fetchStartups();

    }, [id]);


  return(
  <>
  {startups.length > 0 ? startups.map((startup:Startup,index)=>(
<StartUpCard key={startup.id} startup={startup}/>
)):(<p className="no-results" >No Posts Yet...</p>)}
  </>);
};

export default UserStartups;
