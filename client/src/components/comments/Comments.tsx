import { CommentCard } from "./CommentCard"

export const Comments = () => {
  return (
    <div className="flex flex-col mt-5 bg-[#212121] p-2 rounded-lg  max-h-[40vh]">
      <div className="flex flex-row gap-x-2 my-3 text-xl font-bold">
        <h1 className="">#Comments</h1>
        <div>20</div>
      </div>
      <div className="flex flex-col overflow-y-scroll">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>

    </div>
  )
}
