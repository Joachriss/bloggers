import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';
import { DefaultSpinner } from '../spinners/DefaultSpinner';

export const AzampayDialog = (props: any) => {
    const { isAzampayOpen, price, provider,loading, setProvider, phoneNumber, setPhoneNumber, setIsAzampayOpen, handleCheckout } = props
    return (
        <Dialog open={isAzampayOpen} onClose={() => setIsAzampayOpen(false)} className="relative z-50 rounded-lg" >
            <DialogBackdrop className="fixed inset-0 bg-black/50 blur-2xl" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 rounded-lg">
                <DialogPanel className="max-w-lg space-y-4 bg-white rounded-lg dark:bg-[#1f1f1f] p-12">
                    <DialogTitle className="font-bold">Pay {price} to Describe</DialogTitle>
                    <Description>All of your changes to the post will be permanently applied.</Description>
                    <div className='flex flex-col gap-1'>
                        <div>Choose provider : {provider}</div>
                        <div className="flex flex-wrap">
                            <div className="p-2 border border-gray-500 cursor-pointer text-bold rounded-lg mx-auto hover:bg-[#1f1f1f] " onClick={() => setProvider('Mpesa')}>Mpesa</div>
                            <div className="p-2 border border-gray-500 cursor-pointer text-bold rounded-lg mx-auto hover:bg-[#1f1f1f] " onClick={() => setProvider('Tigo')}>Tigo</div>
                            <div className="p-2 border border-gray-500 cursor-pointer text-bold rounded-lg mx-auto hover:bg-[#1f1f1f] " onClick={() => setProvider('Airtel')}>Airtel</div>
                            <div className="p-2 border border-gray-500 cursor-pointer text-bold rounded-lg mx-auto hover:bg-[#1f1f1f] " onClick={() => setProvider('Azampesa')}>Azampesa</div>
                            <div className="p-2 border border-gray-500 cursor-pointer text-bold rounded-lg mx-auto hover:bg-[#1f1f1f] " onClick={() => setProvider('Halopesa')}>Halopesa</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input
                            required
                            type="tel"
                            maxLength={10}
                            id="phoneNumber"
                            placeholder='e.g 0712345678'
                            pattern='[0-9]{10}'
                            value={phoneNumber}
                            onChange={(e) => {
                                const onlyNumbers = e.target.value.replace(/\D/g, "");
                                setPhoneNumber(onlyNumbers);
                            }}
                            className="p-2 bg-transparent rounded-md text-sm font-medium border-2 border-gray-400  dark:border-gray-300 text-gray-900 dark:text-white" name="phoneNumber"
                        />
                    </div>
                    <div className="flex gap-4 ms-auto justify-end">
                        <button className='p-2 bg-gray-600 rounded-lg hover:bg-gray-800 text-white' onClick={() => setIsAzampayOpen(false)} disabled={loading}>Cancel</button>
                        <button className='p-2 bg-green-600 rounded-lg hover:bg-green-800 text-white' onClick={handleCheckout} disabled={loading}>{loading ? <DefaultSpinner /> : 'Checkout'}</button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog >
    )
}
