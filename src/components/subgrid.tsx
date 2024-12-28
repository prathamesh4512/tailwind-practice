
const subgrid = () => {
  return (
    <section className="text-slate-100">
    <div className="rounded-md bg-slate-800 p-8 grid grid-cols-[auto_1fr_auto_auto_auto] gap-6">
        <div className="grid col-span-full grid-cols-subgrid">
            <p className="col-span-2">Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p className="text-right">Total</p>
        </div>

        <div className="grid col-span-full grid-cols-subgrid">
            <img
                className="size-20 object-cover"
                src="https://tinyurl.com/3r25tr36"
                alt=""
            />
            <div>
                <h3 className="text-xl font-medium">
                    Stylish Tote Bag
                </h3>
                <p className="text-sm text-slate-400">
                    Women's Tote Bag Brown
                </p>
                <span className="text-sm text-slate-500">
                    #368798
                </span>
            </div>
            <p className="text-slate-400">
                $99.00
            </p>
            <label>
                <input
                    className="border border-slate-600 bg-transparent px-2 py-1 text-sm text-slate-400"
                    type="text"
                    value="1"
                />
            </label>
            <p className="font-medium text-right">
                $99.00
            </p>
        </div>

        <div className="grid col-span-full grid-cols-subgrid">
            <img
                className="size-20 object-cover"
                src="https://tinyurl.com/3pj5teex"
                alt=""
            />
            <div>
                <h3 className="text-xl font-medium">
                    Sunglasses
                </h3>
                <p className="text-sm text-slate-400">
                    Wooden Frame
                </p>
                <span className="text-sm text-slate-500">
                    #756328
                </span>
            </div>
            <p className="text-slate-400">
                $102.00
            </p>
            <label>
                <input
                    className="border border-slate-600 bg-transparent px-2 py-1 text-sm text-slate-400"
                    type="text"
                    value="10"
                     />
            </label>
            <p className="font-medium text-right">
                $1020.00
            </p>
        </div>
    </div>
</section>
  )
}

export default subgrid