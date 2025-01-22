import { NumberFormatter } from "../NumberFormatter";
import { CommentCard } from "./CommentCard"
import { CommentForm } from "./CommentForm";

export const CommentSection = (props: any) => {
  const comments = props.comments;
  const postid = props.postid;

  return (
    <div>
      <div className="flex shadow-lg bg-white flex-col mt-5 bg-transparent dark:bg-[#212121] p-2 rounded-lg  max-h-[70vh]">
        <div className="flex flex-row gap-x-2 my-3 text-xl font-bold">
          <h1 className="">#Comments</h1>
          <div><NumberFormatter value={comments.length}/></div>
        </div>
        <div className="flex flex-col overflow-y-scroll border-t-[1px]">
          {
            comments && comments.length > 0 ? (
              [...comments].reverse().map(comment => <CommentCard key={comment._id} comment={comment.userComment} userName={comment.userId.name} date={comment.updatedAt} />)
            ) : (
              <div className="text-center col-span-full text-gray-950 mx-auto dark:text-gray-100 my-3 p-8">No comments😒</div>
            )
          }
        </div>
      </div>
      <CommentForm postId={postid}/>
    </div>
  )
}
