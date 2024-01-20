'use cliente';
import { useEffect, useState } from "react";
import Select from "react-select";

const FormDetails = ({data, counter}) => {
    
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    const handleName = ({ value }) => {
        const validatePrice = data.products.find((data) => data.id === value);
        const newPrice = validatePrice.price;
        document.getElementById(`price${counter}`).value = newPrice;
        setPrice(newPrice);  
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10));
    };
    
    const handleQuantityBlur = () => {
        setSubtotal(quantity * price);
    };
    
    useEffect(() => {
        document.getElementById(`quanty${counter}`).value = quantity;
    }, [quantity, counter]);
    
    useEffect(() => {
        document.getElementById(`subtotal${counter}`).value = subtotal;
    }, [subtotal, counter]);

    return (
        <main className=" w-full flex justify-between gap-10">
            <div className="w-[calc(50%)] flex flex-col">
                <label htmlFor="" className="font-semibold text-grey">Name</label>
                <Select
                    className="w-full"
                    options={data.products.map(data =>({label:data.name, value:data.id}))}
                    onChange={handleName}
                />
            </div>

            <div className="w-[calc(10%)] flex flex-col">
                <label htmlFor="" className="font-semibold text-grey">Quantity</label>
                {/* defaultValue={0} */}
                <input 
                    type="number" 
                    id={`quanty${counter}`} 
                    className="p-2 w-full"
                    onChange={handleQuantityChange}
                    onBlur={handleQuantityBlur}
                />
            </div>

            <div className="w-[calc(15%)] flex flex-col">
                <label htmlFor="price" className="font-semibold text-grey">Price</label>
                <input type="text" id={`price${counter}`} className="p-2 w-full" readOnly/>
            </div>

            <div className="w-[calc(30%)] flex flex-col">
                <label htmlFor="" className="font-semibold text-grey">Subtotal</label>
                <input type="text" id={`subtotal${counter}`} className="p-2 w-full" readOnly/>
            </div>
        </main>
    )
}

export default FormDetails
