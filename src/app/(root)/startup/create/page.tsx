"use client"; 

import StartupForm from "@/components/StartupForm";
import React from "react";

const StartUp: React.FC = () => {

//     const createStartup = async (): Promise<void> => {
//         try {

//           const response = await fetch("/api/startup", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               id: 2,
//               title: "New Startup",
//               slug: "new-startup",
//               author: "67a38b0a5ba2d8016963aa56", 
//               views: 0, 
//               description: "A startup focused on AI and automation.",
//               category: "Technology",
//               image: "https://www.thebusinessrankers.com/wp-content/uploads/2020/10/startup.jpeg",
//               pitch: "Our startup best with cutting-edge AI solutions.",
//             }),
//           });
      
//           if (!response.ok) throw new Error("Failed to create Startup");
      
//           const data = await response.json();
//           console.log("Startup Created:", data);
//         } catch (error) {
//           console.error("Error:", (error as Error).message);
//         }
//       };
      

//   const showStartup = async (): Promise<void> => {
//     try {
//       const response = await fetch("/api/startup", {
//         method: "GET",
//       });

//       if (!response.ok) throw new Error("Failed to Fetch Startups");

//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error:", (error as Error).message);
//     }
//   };

  return (
    <>
    <section className="red_container !min-h-[230px]">
    <h1 className="heading">
        Submit Your Startup
    </h1>
    </section>
    <StartupForm/>
      {/* <button className="startup-card-btn" onClick={createStartup}>
        Create
      </button>
      <button className="startup-card-btn" onClick={showStartup}>
       Show
      </button> */}
    </>
  );
};

export default StartUp;
