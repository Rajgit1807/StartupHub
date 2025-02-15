import { formatDate, Startup } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link"


const StartUpCard = ({startup}:{startup: Startup}) => {

    const {
        id, 
        views, 
        author: { id: authorId, name: authorName }, 
        _id, 
        description, 
        image, 
        category, 
        title,
        createdAt 
      } = startup;
    
  return (
    <li className="startup-card group">
          <div className="flex-between">
              <p className="startup-card-date">
                {formatDate(createdAt)}
              </p>
              <div className="flex gap-1.5 items-center">
                 <EyeIcon className="size-5 text-red-700"/>
                 <span className="text-16-medium">{views}</span>
              </div>
          </div>
          <div className="flex-between mt-5 gap-5">
                 <div className="flex-1">
                        <Link href={`/user/${authorId}`}>
                        <p className="text-16-medium line-clamp-1">
                          {authorName}
                        </p>
                        </Link>
                        <Link href={`/startup/${id}`}>
                         <h3 className="text-26-semibold line-clamp-1">
                            {title}
                         </h3>
                        </Link>
                 </div>
                 <Link href={`/user/${authorId}`}>
                          <Image className="rounded-full" src="https://placehold.co/48x48" alt="avatar image" width={48} height={48}/>
                        </Link>
          </div> 

          <Link href={`startup/${id}`}>
          <p className="startup-card-desc">
             {description}
          </p>
          <img src={image} alt="Robot Image" className="startup-card-img"/>
          </Link>
          <div className="flex-between gap-3 mt-5">
            <Link href={`/?query=${category.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
            </Link>
            <button className="startup-card-btn">
                    <Link href={`startup/${id}`}>
                    Details
                    </Link>
            </button>
          </div>
    </li>
  )
}

export default StartUpCard