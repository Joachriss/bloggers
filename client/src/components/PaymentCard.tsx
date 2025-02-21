import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../context/UserContext";
import { AzampayDialog } from "./utils/AzampayDialog";

export const PaymentCard = (props: any) => {
    const { tittle, description, price, plan } = props;
    const userContext = useContext(UserContext);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [provider, setProvider] = useState('__');
    const [isAzampayOpen, setIsAzampayOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState('Processing...');
    const [errors,setErrors] = useState('');

    const handleCheckout = async () => {
        if (!phoneNumber) {
            return toast.error('Phone number is required');
        }
        if(provider == '__') {
            return toast.error('Provider is required');
        }
        setLoading(true);
        try {
            // Payment checkout process
            const transactionRequest = {
                "amount": price,
                "plan": plan,
                "userId": userContext?.user?.id,
                "account": phoneNumber,
                "provider": provider
            }
            const checkoutResponse = await axios.post(`/azampay/checkout`, transactionRequest);
            if (checkoutResponse.data.success === false) {
                setLoading(false);
                return toast.error(checkoutResponse.data.message);
            }
            setFeedback(checkoutResponse.data.message);
            toast.success(checkoutResponse.data.message);
            setTimeout(() => {
                toast.success('Payment successful');
                setLoading(false);
                setIsAzampayOpen(false);
            }, 1000);
            // Redirect to success page
            // coming soon

            
        } catch (err: any) {
            setLoading(false);
            console.log(err);
            setErrors(err.message);
            toast.error(err.message);
        }
    };
    return (
        <div className="rounded-3xl w-full p-8 ring-1 mx-auto xl:p-10 bg-gray-900 ring-gray-900">
            <h3 id="tier-startup" className="text-xl font-semibold leading-8 text-gray-200">{tittle}</h3>
            <p className="mt-4 text-sm leading-6 text-cyan-500">{description}</p>
            <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-yellow-500">{price} TZS</span>
                <span className="text-sm font-semibold leading-6 text-teal-600">/ {plan}</span>
            </p>
            <button type="button" onClick={() => setIsAzampayOpen(true)} aria-describedby="tier-startup" className="mt-6 block w-full rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white shadow-sm hover:bg-green-800 focus-visible:outline-red-600">Buy plan</button>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-pink-600">
                <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-purple-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Access all features and contents
                </li>
                <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-yellow-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Full {plan} access
                </li>
            </ul>
            <AzampayDialog isAzampayOpen={isAzampayOpen} errors={errors} setErrors={setErrors} plan={plan} feedback={feedback} loading={loading} setIsAzampayOpen={setIsAzampayOpen} handleCheckout={handleCheckout} price={price} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} provider={provider} setProvider={setProvider} />
        </div>
    )
}
