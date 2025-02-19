import { PaymentCard } from "../components/PaymentCard"

export const Subscription = () => {
  return (
    <div className="w-full">
      <div className="grid max-w-[1280px] mx-auto grid-cols-1 md:grid-cols-2 gap-3 p-3">
        <PaymentCard tittle="Weekly" description="Enjoy weekly access to all features." price="1000" plan="week" />
        <PaymentCard tittle="Monthly" description="Enjoy monthly access to all features." price="2000" plan="month" />
      </div>
    </div>
  )
}
