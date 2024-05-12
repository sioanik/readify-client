
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const ModalBody = () => {

    const [startDate, setStartDate] = useState(new Date());


    return (
        <div className="border flex items-start rounded-xl bg-teal-100 min-h-80">
            <div className="px-10">
                <form className="flex gap-9 justify-center items-center">
                    <div className="flex justify-center gap-6">
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="text-lg label-text">Return Before</span>
                                </div>
                                {/* <input type="date" name="return_date" placeholder="" className="input input-bordered w-full max-w-xs" /> */}
                                <DatePicker className="py-2" selected={startDate} onChange={(date) => setStartDate(date)} />
                                

                            </label>

                        </div>

                    </div>

                    <div className="flex justify-center">
                        <input className="btn  btn-accent mt-8" type="submit" value="Borrow" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalBody;