
export const CommentForm = () => {
    return (
        <div className="">
            <div className='text-xl font-bold mb-2'>
                #Comment
            </div>
            <textarea name="comment" className='p-2 shadow-lg bg-transparent w-full border-2 border-gray-800' id="" rows={4}></textarea>
            <button type="submit" className="p-2 bg-[#341111] rounded-lg mt-2 mx-auto">Comment</button>
        </div>
    )
}
