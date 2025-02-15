"use client";

import { useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { formSchema } from "@/lib/validation";
import { z } from "zod";

const StartupForm = () => {
  const [error, setError] = useState<Record<string, string>>();
  const [pitch, setPitch] = useState("");
  const handleFormSubmit = async (prevState:any, formData:FormData)=>{
    try {
        const formValues =  {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            category: formData.get("category") as string,
            link: formData.get("link") as string,
            pitch,
        }
        await formSchema.parseAsync(formValues)

        console.log(formValues)
    } catch (error) {
        if(error instanceof z.ZodError){
            const fieldErrors = error.flatten().fieldErrors;
            setError(fieldErrors as unknown as Record<string, string>);
            return {...prevState, error: "Validation failed", status:"Error"}
        }
        return {...prevState, error: "An unexpected error has occured", status:"Error"}

    }

  }
  const [state, formAction, isPending] = useActionState(handleFormSubmit,{error:"",status:"INITIAL"})

  return (
    <form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />
        {error?.title && <p className="startup-form_error">{error?.title}</p>}
      </div>
      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />
        {error?.description && (
          <p className="startup-form_error">{error?.description}</p>
        )}
      </div>
      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category (Tech, Health, Education...)"
        />
        {error?.category && (
          <p className="startup-form_error">{error?.category}</p>
        )}
      </div>
      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />
        {error?.link && <p className="startup-form_error">{error?.link}</p>}
      </div>
      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id='pitch'
          preview="edit"  
          height={300}   
          style={{borderRadius:20, overflow:"hidden",marginTop:"15px"}}  
          textareaProps={{
            placeholder:"Briefly describe your idea and what problem it solves"
          }}
          previewOptions={{
            disallowedElements:["style"]
          }}
           />
        {error?.pitch && <p className="startup-form_error">{error?.pitch}</p>}
      </div>
      <Button type="submit" className="startup-form_btn text-white" disabled={isPending}>
        {isPending? "Submitting" : "Submit Your Pitch"}
         </Button>
    </form>
  );
};

export default StartupForm;
