import Select from "react-select";

const FormDetails = ({data}) => {

    const handleName =({value}) =>{
        const validatePrice = data.products.find(data => data.id === value);
        const price = validatePrice.price;
        document.getElementById('price').value = price
    }

    return (
        <main className=" w-full flex justify-between gap-10">
            <div className="w-[calc(50%)] flex flex-col">
                <label htmlFor="" className="font-semibold text-grey">Name</label>
                <Select
                    className="w-full"
                    options={data.products.map(data =>({label:data.name, value:data.id}))}
                    onChange={handleName}
                />
                {/* <input type="text" id="name" className="p-2 w-full"/> */}
            </div>

            <div className="w-[calc(10%)] flex flex-col">
                <label htmlFor="" className="font-semibold text-grey">Quantity</label>
                <input type="text" className="p-2 w-full"/>
            </div>

            <div className="w-[calc(15%)] flex flex-col">
                <label htmlFor="price" className="font-semibold text-grey">Price</label>
                <input type="text" id="price" className="p-2 w-full" readOnly/>
            </div>

            <div className="w-[calc(30%)] flex flex-col">
                <label htmlFor="" className="font-semibold text-grey">Subtotal</label>
                <input type="text" className="p-2 w-full" readOnly/>
            </div>
        </main>
    )
}

export default FormDetails
