import { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard"
import axios from "axios";

export const Comments = (props: any) => {
  const postid = props.postid;
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {

    const getComments = async () => {
      const response = await axios.get(`/getpostomments/${postid}`);
      setComments(response.data);
    }

    getComments();

  }, []);

  return (
    <div className="flex flex-col mt-5 bg-transparent dark:bg-[#212121] p-2 rounded-lg  max-h-[50vh]">
      <div className="flex flex-row gap-x-2 my-3 text-xl font-bold">
        <h1 className="">#Comments</h1>
        <div>20</div>
      </div>
      <div className="flex flex-col overflow-y-scroll border-t-[1px]">
        {
          comments && comments.length > 0 ? (
            [...comments].reverse().map((comment) => <CommentCard comment={comment.comments} />)
          ) : (
            <div className="text-center col-span-full text-gray-950 mx-auto dark:text-gray-100 my-3 p-8">Comment now</div>

          )
        }
      </div>

    </div>
  )
}
