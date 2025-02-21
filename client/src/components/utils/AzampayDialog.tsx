import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';
import { DefaultSpinner } from '../spinners/DefaultSpinner';
import mpesa from '../../assets/thumbnails/voda.png';
import halopesa from '../../assets/thumbnails/halopesa.png';
import mixx from '../../assets/thumbnails/yas.png';
import azam from '../../assets/thumbnails/azam.jpg';
import airtel from '../../assets/thumbnails/airtel.png';
import { MdClose } from 'react-icons/md';

export const AzampayDialog = (props: any) => {
    const { isAzampayOpen, price, provider, loading,feedback,errors, setErrors, setProvider, phoneNumber, setPhoneNumber, setIsAzampayOpen, handleCheckout, plan } = props
    return (
        <Dialog open={isAzampayOpen} onClose={() => setIsAzampayOpen(false)} className="relative z-50 rounded-lg" >
            <DialogBackdrop className="fixed inset-0 bg-black/50 blur-2xl" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-2 rounded-lg">
                <DialogPanel className="max-w-lg space-y-4 bg-white rounded-lg dark:bg-[#1f1f1f] p-8">
                    <DialogTitle className="font-bold text-2xl text-center">Pay {price} to Describe?</DialogTitle>
                    <Description className='text-lg'>You are paying <span className='font-bold'>{price}</span> for a <span className='font-bold'>{plan}</span> plan. Proceed to checkout below</Description>
                    <div className='flex flex-col gap-1'>
                        <div>Choose provider : <span className='font-bold'>{provider}</span></div>
                        <div className="flex flex-wrap my-2">
                            <div className="flex items-center justify-center h-fit w-fit hover:scale-105 duration-100 border-gray-500 cursor-pointer text-bold rounded-lg mx-auto hover:bg-[#1f1f1f] " onClick={() => {setProvider('Mpesa') }}><img src={mpesa} alt="Mpesa" className={`w-14 hover:border rounded-lg`} /></div>
                            <div className="flex items-center justify-center h-fit w-fit hover:scale-105 duration-100 border-gray-500 cursor-pointer text-bold rounded-lg mx-auto hover:bg-[#1f1f1f] " onClick={() => {setProvider('Tigo') }}><img src={mixx} alt="mixx" className={`w-14 hover:border rounded-lg`} /></div>
                            <div className="flex items-center justify-center h-fit w-fit hover:scale-105 duration-100 border-gray-500 cursor-pointer text-bold rounded-lg mx-auto hover:bg-[#1f1f1f] " onClick={() => {setProvider('Airtel') }}><img src={airtel} alt="airtel" className={`w-14 hover:border rounded-lg`} /></div>
                            <div className="flex items-center justify-center h-fit w-fit hover:scale-105 duration-100 border-gray-500 cursor-pointer text-bold rounded-lg mx-auto hover:bg-[#1f1f1f] " onClick={() => {setProvider('Azampesa') }}><img src={azam} alt="azampay" className={`w-14 hover:border rounded-lg`} /></div>
                            <div className="flex items-center justify-center h-fit w-fit hover:scale-105 duration-100 border-gray-500 cursor-pointer text-bold rounded-lg mx-auto hover:bg-[#1f1f1f] " onClick={() => {setProvider('Halopesa') }}><img src={halopesa} alt="halopesa" className={`w-14 hover:border rounded-lg`} /></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number :</label>
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

                    <div className="text-center text-green-700 w-full">{loading? feedback : ''}</div>
                    {
                        errors !== '' ? <div className="text-center text-red-600 my-1 w-full flex flex-row font-bold justify-between items-center"><div>{errors}</div><MdClose size={22} onClick={() => {setErrors('')}} /></div> : '' 
                    }

                    <div className="flex flex-col gap-4 ms-auto justify-center">
                        <button className='p-2 bg-green-600 text-xl font-bold rounded-lg hover:bg-green-800 text-white' onClick={handleCheckout} disabled={loading}>{loading ? <DefaultSpinner /> : 'Checkout'}</button>
                        <button className='text-sm' onClick={() => setIsAzampayOpen(false)} disabled={loading}>Cancel</button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog >
    )
}
