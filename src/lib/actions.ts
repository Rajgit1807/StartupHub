"use server"

import { auth } from "../../auth";
import slugify from "slugify";

export const createPitch = async (
  state: any,
  form: FormData,
  pitch: string
) : Promise<void> => {
  const session = await auth();
  if (!session)
    return JSON.parse(
      JSON.stringify({ error: "Not signed in", status: "ERROR" })
    );

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key != "pitch")
  );

  const slug = slugify(title as string, { lower: true, strict: true });

  try {

    const startup = {
      title,
      description,
      category,
      image: link,
      slug: slug,
      pitch,
      id: 22,
      author: "67a38b0a5ba2d8016963aa56",
    };


    console.log("This is the new console", startup)

    const response = await fetch("/api/startup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(startup),
      });

    console.log("After the api call")

      console.log(response.ok)

      if (!response.ok) throw new Error("Failed to create Startup");
      
      const data = await response.json();


       return  JSON.parse(
        JSON.stringify({ data ,error: "", status: "SUCCESS" })
      );
      
  } catch (error) {
    return JSON.parse(
      JSON.stringify({ error: JSON.stringify(error), status: "ERROR" })
    );
  }
};
