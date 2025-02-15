import Ping from "./Ping"

const View = ({id,views}:{id:number; views:number}) => {
  return (
    <div className="view-container">
        <div className="absolute -top-2 -right-2">
        <Ping/>
        </div>
        <div className="view-text">
            <span className="font-black">{views} {views > 9? "views":"view"}</span>
        </div>
    </div>
  )
}

export default View