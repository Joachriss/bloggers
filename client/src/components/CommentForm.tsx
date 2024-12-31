import { all } from 'axios'
import React from 'react'

export const CommentForm = () => {
    return (
        <div>
            <div className='text-xl font-bold'>
                #Comment
            </div>
            <textarea name="comment" className='shadow-lg border-2 border-gray-800' id="" rows={4}></textarea>
        </div>
    )
}
