
const Testimonial = () => {
  return (
    <section className=" text-slate-200 text-sm">

    <div className="p-6">
        <div className="w-full grid grid-cols-3 grid-rows-[auto_1fr_auto_auto] gap-6">

            <div className="p-6 bg-slate-700 shadow-xl rounded-lg grid grid-rows-subgrid row-span-full ">
                <img
                        className="size-16 object-cover rounded-full"
                        src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                <p className="text-slate-300 leading-relaxed">
                    This service revolutionized our project management process. Highly efficient and user-friendly.
                </p>
                <p className="font-semibold text-sm">Emily Johnson</p>
                <span className="text-slate-400 text-sm">Product Manager</span>
            </div>

            <div className="p-6 bg-slate-700 shadow-xl rounded-lg grid grid-rows-subgrid row-span-full">
                <img
                        className="size-16 object-cover rounded-full"
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                <p className="text-slate-300 leading-relaxed">
                    This product has significantly boosted our team's productivity.
                </p>
                <p className="font-semibold text-sm">James Miller</p>
                <span className="text-slate-400 text-sm ">CEO, ABC Company</span>
            </div>

            <div className="p-6 bg-slate-700 shadow-xl rounded-lg grid grid-rows-subgrid row-span-full ">
                <img
                        className="size-16 object-cover rounded-full"
                        src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                <p className="text-slate-300 leading-relaxed">
                    A fantastic tool that has streamlined our marketing efforts and saved us countless hours. Truly a game-changer!
                </p>
                <p className="font-semibold text-sm">Sarah Thompson</p>
                <span className="text-slate-400 text-sm ">Marketing Director</span>
            </div>
        </div>
    </div>
</section>

  )
}

export default Testimonial