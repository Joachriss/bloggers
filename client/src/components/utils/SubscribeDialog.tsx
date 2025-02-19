import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from "@headlessui/react"
import { Link } from "react-router-dom"

export const SubscribeDialog = (prop:any) => {
    const { isSubscribed } = prop;
    return (
        <Dialog open={isSubscribed} onClose={() => {}} className="relative z-50 rounded-lg" >
            <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-lg" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 rounded-lg">
                <DialogPanel className="max-w-lg space-y-4 bg-white rounded-lg dark:bg-[#1f1f1f] p-12">
                    <DialogTitle className="font-bold">Subscribe now</DialogTitle>
                    <Description>Go premium to access exclusive features</Description>
                    <p></p>
                    <div className="flex gap-4 ms-auto justify-end">
                        <Link to={'/'} className='p-2 bg-gray-600 rounded-lg hover:bg-gray-800 text-white'>Home</Link>
                        <Link to={'/subscribe'} className='p-2 bg-green-600 rounded-lg hover:bg-red-800 text-white' >Subscribe</Link>
                    </div>
                </DialogPanel>
            </div>
        </Dialog >
    )
}
