import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import './Allform.css'
import { useEffect, useState } from 'react';
 
const Allform = () => {
    const [pass, setpass] = useState();
    const [info, setinfo] = useState([])
    const { state } = useLocation();
    const { product } = state || {};
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();
    const submitform = async (data) => {
        const ok = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(data);
                    setinfo(data);
                    resolve("success");

                }, 2000);
            })
        }
        await ok();
    }

   



    return (
        <div className='form'>
            <form onSubmit={handleSubmit(submitform)}>
                <img src={product.image} alt="" />
                <label >Product Brand : </label>
                <input type="text" value={product.name} {...register("name", { required: { value: true, messsage: "This is Wrong" }, minLength: { value: 3, message: "minimim length is 3" }, maxLength: { value: 50, message: "Maximum length is 30" } })} />
                {errors.name && <p>{errors.name.message}</p>}
                <label>Product Type : </label>
                <input type="text" value={product.des} {...register("des", { required: { value: true, messsage: "This is Wrong" }, minLength: { value: 3, message: "minimim length is 3" }, maxLength: { value: 50, message: "Maximum length is 30" } })} />
                {errors.des && <p>{errors.des.message}</p>}
                <label >Product Price : </label>
                <input
                    type="text"
                    defaultValue={product.price}
                    {...register("price", {
                        required: "Price is required",
                        minLength: { value: 3, message: "Minimum length is 3" },
                        maxLength: { value: 30, message: "Maximum length is 30" },
                        pattern: { value: true, message: "You typed wrong" }
                    })}
                />
                {errors.price && <p>{errors.price.message}</p>}
              

                <select {...register("Payment")}>
                    <option value="#">Choose Payment Methods...</option>
                    <option value="UPI">UPI</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="Debit/Credit Card">Debit/Credit Card</option>
                    <option value="QR Code Payments">QR Code Payments</option>
                    <option value="Cash">Cash</option>
                    <option value="EMI (Equated Monthly Installment)">EMI (Equated Monthly Installment)</option>
                </select>

                <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting..." : "Submit"} />
            </form>
           
        </div>
    );
};

export default Allform;
