
export const Footer = () => {
  return (
    <div className='w-full border-t-2  shadow pt-9'>
        <div className='mx-auto px-3 md:px-0 sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 justify-between text-center sm:text-start">
                <div className="flex flex-col gap-y-1">
                    <div className="text-xl font-bold">Categories</div>
                    <div className="text-md">World</div>
                    <div className="text-md">Sport</div>
                    <div className="text-md">Politics</div>
                    <div className="text-md">Technology</div>
                    <div className="text-md">Health</div>
                    <div className="text-md">Travel</div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <div className="text-xl font-bold">Our blog</div>
                    <div className="text-md">Home</div>
                    <div className="text-md">About us</div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <div className="text-xl font-bold">Documents</div>
                    <div className="text-md">Privacy</div>
                    <div className="text-md">Terms and conditions</div>
                    <div className="text-md">Help & Support</div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <div className="text-xl font-bold">Contacts</div>
                    <div className="text-md">Home</div>
                    <div className="text-md">About us</div>
                </div>
                <div className="col-span-full mt-2 flex flex-col justify-center items-center py-6 border-t-2 border-gray-900">
                    <small>Copyright&copy;<span className="font-bold">DESCRIBE</span></small>
                    <small>{Date().toLocaleLowerCase()}</small>
                </div>
            </div>
        </div>
    </div>
  )
}
