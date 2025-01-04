import { useContext, useEffect, useState } from "react";
import { CommentCard } from "./CommentCard"
import axios from "axios";
import { UserContext } from "../../../context/authContext";
import { CommentForm } from "./CommentForm";

export const CommentSection = (props: any) => {
  const postid = props.postid;
  const [postComments, setPostComments] = useState<any>([])
  // const authContext = useContext(UserContext);
  console.log(postComments);

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get(`/getpostcomments/:${postid}`);
      setPostComments(response.data);
    }

    getComments();
  }, []);

  return (
    <div>
      <div className="flex flex-col mt-5 bg-transparent dark:bg-[#212121] p-2 rounded-lg  max-h-[70vh]">
        <div className="flex flex-row gap-x-2 my-3 text-xl font-bold">
          <h1 className="">#Comments</h1>
          <div>{postComments.length}</div>
        </div>
        <div className="flex flex-col overflow-y-scroll border-t-[1px]">
          {
            postComments && postComments.length > 0 ? (
              [...postComments].reverse().map(comments => <CommentCard comment={comments.comments} userId={comments.userId} date={comments.updatedAt} />)
            ) : (
              <div className="text-center col-span-full text-gray-950 mx-auto dark:text-gray-100 my-3 p-8">No comments😒</div>
            )
          }
        </div>
      </div>
      {/* <CommentForm postId={postid} userId={authContext.user.id ? authContext.user.id : ""} /> */}
    </div>
  )
}
