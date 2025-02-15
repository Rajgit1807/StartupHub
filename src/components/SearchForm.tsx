import Form from "next/form"
import SearchFormReset from "./SearchFormReset"
import { Search } from "lucide-react"

const SearchForm = ({query}:{query?:string}) => {

   
  return (
    <Form action="/" scroll={false} className="search-form">
       <input 
       name="query"
       defaultValue=""
       className="search-input"
       placeholder="Search Startups"
       />
       <div className="flex gap-2">
             {query && (
               <SearchFormReset/>
             )}
             <button type="submit" className="text-white search-btn right-4 pb-[1px] ps-[9px]">
                 <Search className="size-4"/>
             </button>
       </div>
    </Form>
  )
}

export default SearchForm