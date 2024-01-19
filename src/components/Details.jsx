
const Details = () => {
    return (
        <div className="flex py-5 justify-between gap-10">
            <div className="w-[calc(50%)] flex flex-col">
                <label htmlFor="" className="font-semibold text-grey">Name</label>
                <input type="text" className="p-2 w-full"/>
            </div>

            <div className="w-[calc(10%)] flex flex-col">
                <label htmlFor="" className="font-semibold text-grey">Quantity</label>
                <input type="text" className="p-2 w-full"/>
            </div>

            <div className="w-[calc(15%)] flex flex-col">
                <label htmlFor="" className="font-semibold text-grey">Price</label>
                <input type="text" className="p-2 w-full"/>
            </div>

            <div className="w-[calc(30%)] flex flex-col">
                <label htmlFor="" className="font-semibold text-grey">Subtotal</label>
                <input type="text" className="p-2 w-full"/>
            </div>

            <div className="flex items-end">
                <button className="p-2 px-4 font-extrabold text-white bg-blueLight">x</button>
            </div>
        </div>
    )
}

export default Details;
