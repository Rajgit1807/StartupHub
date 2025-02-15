"use client"; // Needed for Next.js App Router

import React from "react";

const Author: React.FC = () => {
  const createAuthor = async (): Promise<void> => {
    try {
      const response = await fetch("/api/author", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 6,
          name: "Rudra raj",
          username: "Rudra",
          email: "rudra@example.com",
          image: "https://example.com/jane.jpg",
          bio: "Startup founder and writer",
        }),
      });

      if (!response.ok) throw new Error("Failed to create author");

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", (error as Error).message);
    }
  };

  const showAuthor = async (): Promise<void> => {
    try {
      const response = await fetch("/api/author", {
        method: "GET",
      });

      if (!response.ok) throw new Error("Failed to Fetch Authors");

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", (error as Error).message);
    }
  };

  return (
    <div>
      <button className="startup-card-btn" onClick={createAuthor}>
        Create
      </button>
      <button className="startup-card-btn" onClick={showAuthor}>
       Show
      </button>
    </div>
  );
};

export default Author;
