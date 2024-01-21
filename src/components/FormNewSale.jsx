'use client';
import { useEffect, useState } from "react";
import Details from "./Details";
import Title from "./Title";
import { norteDigital } from "@/api/api";
import Select from "react-select";
import { useRecoilValue } from "recoil";
import { totalAll } from '@/atoms/index';

const FormNewSale = () => {
    const [arrayBranch, setArrayBranch] = useState([]);
    const [arrayDetails, setArrayDetails] = useState([]);
    const [totalData, setTotalData] = useState([]);
    let [counter, setCounter] = useState(0);
    const [total, setTotal] = useState(0);
    const allTotal = useRecoilValue(totalAll);
    
    const addDetails = () =>{
        setCounter(counter+1);
        if(arrayBranch.length > 0 ) setArrayDetails([...arrayDetails, <Details data={totalData} counter={counter}/>]);
        
    }
    
    const handleSelectClient = ({value}) =>{
        const customer = norteDigital.costomers.find(data => data.id === value);
        if(customer) setArrayBranch(customer.branches);
    }
    
    const handleSelectBranch = ({value}) =>{
        const dataCurrency = arrayBranch.find(data=> (data.id === value));
        if(dataCurrency) setTotalData(dataCurrency);
        const currency = dataCurrency.currency;
        document.getElementById('currency').value = currency;
    }

    useEffect(() => {
        setTotal(allTotal ? allTotal : 0);
    }, [allTotal]);


    return (
        <main className="flex flex-col pt-10">
            <Title name={'Document'} sizeText = {'text-2xl'} font={'font-semibold'}/>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex py-5 justify-between gap-10">
                    <div className="w-[calc(40%)] flex flex-col">
                        <label htmlFor="" className="font-semibold text-grey">Client</label>
                        <div className="flex gap-4">
                            <Select 
                                className="w-full"
                                options={norteDigital.costomers.map(data => ({label: data.name, value: data.id}))}
                                onChange={handleSelectClient}
                            />
                            {/* <input type="text" className="w-full"/> */}
                            <button className="p-2 px-4 font-extrabold text-white bg-blueLight">+</button>
                        </div>
                    </div>
                    
                    <div className="w-[calc(50%)] flex flex-col">
                        <label htmlFor="" className="font-semibold text-grey">Branch Office</label>
                        <Select
                            className="w-full"
                            options={arrayBranch.map(data => ({label: data.nameBranch, value: data.id}))}
                            onChange={handleSelectBranch}
                        />
                    </div>

                    <div className="w-[calc(10%)] flex flex-col">
                        <label htmlFor="" className="font-semibold text-grey">Currency</label>
                        <input type="text" name="currency" id="currency" className="p-2 w-full" readOnly/>
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
                        <input type="text" value={total} className="p-2 w-full" readOnly/>
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
