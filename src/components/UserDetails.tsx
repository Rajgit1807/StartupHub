"use client";

import { Suspense, useEffect, useState } from "react";
import { AuthorType } from "@/lib/utils";
import UserStartups from "./UserStartups";

const UserDetails = ({ id }: { id: number }) => {

  const [author, setAuthor] = useState<AuthorType | null>();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`/api/author/${id}`, { method: "GET" });

        if (!response.ok) throw new Error("Failed to fetch startup");

        const data = await response.json();
        setAuthor(data.author);
      } catch (error) {
        console.error("Error:", (error as Error).message);
      }
    };
    getUser();
  }, [id]);

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-[24px] font-bold uppercase text-center line-clamp-1">
              {author?.name}
            </h3>
          </div>
          <img
            src={author?.image}
            alt="profile-image"
            className="profile_image"
            width={220}
            height={220}
          />
          <p className="mt-6 text-center text-white text-[30px] font-extrabold">
            @{author?.username}
          </p>
          <p className="mt-1 text-cenetr text-[14px] text-white">
            {author?.bio}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
          <p className="text-[30px] font-bold">
              Your Startups
          </p>
          <ul className="card_grid-sm">
            <Suspense fallback={<p>Loading....</p>}>
            <UserStartups id={author?._id}/>
            </Suspense>
          </ul>
        </div>
      </section>
    </>
  );
};

export default UserDetails;
