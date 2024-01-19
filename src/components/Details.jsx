import { useState } from "react";
import FormDetails from "./FormDetails";

const Details = () => {
    const [deleteDetail, setdeleteDetail] = useState(true)

    const deleteDetails = () =>{
        setdeleteDetail(false);
    }

    return (
        <>
            {
                deleteDetail && (
                    <div className="flex pt-5 justify-between gap-10">
                        <FormDetails/>
                        <div className="flex items-end">
                            <button className="p-2 px-4 font-extrabold text-white bg-blueLight" onClick={deleteDetails}>x</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Details;
