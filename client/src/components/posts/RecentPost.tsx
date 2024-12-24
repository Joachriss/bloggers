import { Link } from 'react-router-dom'

export const RecentPost = (props:any) => {
  return (
    <Link to={`postcategory/${props.category}`} className='flex flex-row gap-2 items-center'>
        <div className="overflow-hidden">
            <img src={ `http://localhost:5173/uploads/images/${props.image}`} alt="post image" />
        </div>
        <div>
            <div className="text-lg font-bold">{props.tittle}</div>
            <small>{props.date}</small>
        </div>
    </Link>
  )
}
