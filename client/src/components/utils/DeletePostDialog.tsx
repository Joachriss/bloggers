import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const DeletePostDialog = (props: any) => {
    const { isDeleteOpen, setIsDeleteOpen,postId } = props
    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`/deletepost/${postId}`);
            console.log(data);
            toast.success(data.message);
            setIsDeleteOpen(false)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Dialog open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} className="relative z-50 rounded-lg" >
            <DialogBackdrop className="fixed inset-0 bg-black/50 blur-2xl" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 rounded-lg">
                <DialogPanel className="max-w-lg space-y-4 bg-white rounded-lg dark:bg-[#1f1f1f] p-12">
                    <DialogTitle className="font-bold">Delete the post?</DialogTitle>
                    <Description>This will permanently delete your post</Description>
                    <p>Are you sure you want to delete your post? All of your post data will be permanently removed.</p>
                    <div className="flex gap-4 ms-auto justify-end">
                        <button className='p-2 bg-gray-600 rounded-lg hover:bg-gray-800 text-white' onClick={() => setIsDeleteOpen(false)}>Cancel</button>
                        <button className='p-2 bg-red-600 rounded-lg hover:bg-red-800 text-white' onClick={handleDelete}>Delete</button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog >
    )
}
