
export const CommentForm = () => {
    return (
        <div className="max-w-4xl">
            <div className='text-xl font-bold mb-2'>
                #Comment
            </div>
            <textarea name="comment" className='p-2 shadow-lg rounded-lg bg-transparent w-full border-2 border-gray-800' id="" rows={4}></textarea>
            <button type="submit" className="p-2 bg-gray-800 shadow-lg text-white rounded-lg mt-2 flex ms-auto">Comment</button>
        </div>
    )
}
