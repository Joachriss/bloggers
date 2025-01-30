import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const EditPostDialog = (props: any) => {
    const { isEditOpen, setIsEditOpen,postId } = props
    const handleEdit = async () => {
        try {
            const { data } = await axios.delete(`/deletepost/${postId}`);
            console.log(data);
            toast.success(data.message);
            setIsEditOpen(false)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Dialog open={isEditOpen} onClose={() => setIsEditOpen(false)} className="relative z-50 rounded-lg" >
            <DialogBackdrop className="fixed inset-0 bg-black/50 blur-2xl" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 rounded-lg">
                <DialogPanel className="max-w-lg space-y-4 bg-white rounded-lg dark:bg-[#1f1f1f] p-12">
                    <DialogTitle className="font-bold">Edit the post?</DialogTitle>
                    <Description>This will permanently edit your post</Description>
                    <p>Are you sure you want to edit your post? All of your changes to the post will be permanently applied.</p>
                    <div className="flex gap-4 ms-auto justify-end">
                        <button className='p-2 bg-gray-600 rounded-lg hover:bg-gray-800 text-white' onClick={() => setIsEditOpen(false)}>Cancel</button>
                        <button className='p-2 bg-green-600 rounded-lg hover:bg-green-800 text-white' onClick={handleEdit}>Edit</button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog >
    )
}
