'use client';
import { useState } from "react";
import Details from "./Details";
import Title from "./Title";

const FormNewSale = () => {
    const [arrayDetails, setArrayDetails] = useState([<Details/>]);
    // const [arrayDetails, setArrayDetails] = useState([<Details key={0} />]);

    const addDetails = () =>{
        setArrayDetails([...arrayDetails, <Details/>]);
        // setArrayDetails(prevDetails => [...prevDetails, <Details key={prevDetails.length} />]);
    }

    return (
        <main className="flex flex-col pt-10">
            <Title name={'Document'} sizeText = {'text-2xl'} font={'font-semibold'}/>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex py-5 justify-between gap-10">
                    <div className="w-[calc(40%)] flex flex-col">
                        <label htmlFor="" className="font-semibold text-grey">Client</label>
                        <div className="flex gap-4">
                            <input type="text" className="w-full"/>
                            <button className="p-2 px-4 font-extrabold text-white bg-blueLight">+</button>
                        </div>
                    </div>
                    
                    <div className="w-[calc(50%)] flex flex-col">
                        <label htmlFor="" className="font-semibold text-grey">Branch Office</label>
                        <input type="text" className="p-2 w-full"/>
                    </div>

                    <div className="w-[calc(10%)] flex flex-col">
                        <label htmlFor="" className="font-semibold text-grey">Currency</label>
                        <input type="text" className="p-2 w-full"/>
                    </div>
                </div>

                <Title name={'Details'} sizeText = {'text-2xl'} font={'font-semibold'}/>

                <div className="flex flex-col">
                    {
                        arrayDetails.map((detail, index)=>(
                            <div key={index} className="flex flex-col"> { detail } </div>
                        ))
                    }
                    <div className="pt-5">
                        <button className="p-2 px-10 font-semibold text-white bg-blueLight" onClick={addDetails}>Add</button>
                    </div>
                </div>

                <div className="flex flex-col justify-end pt-5 gap-y-5 divide-y divide-grey">
                    <div className="w-[calc(28%)] flex gap-4 items-center ml-auto mr-20">
                        <label htmlFor="" className="font-semibold  text-grey">Total</label>
                        <input type="text" className="p-2 w-full"/>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="p-2 px-10 mt-5 font-semibold text-white bg-blueLight">Save</button>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default FormNewSale
