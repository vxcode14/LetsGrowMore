import {useForm} from "react-hook-form";
import {Users} from "./Users";

export default function Form(){
    const {register,handleSubmit,watch,formState: {errors}} = useForm()

    const onSubmit =data =>{
        Users.push(data);
        console.log(Users)
    }

    return(
        <section>
            <div className="register">
                <div className="col-1">
                    <h2>Sign in</h2>
                    <span>register and enjoy the service</span>
                    <form id="form" className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text"{...register("username")} placeholder='username'/>
                        <input type="text"{...register("password")} placeholder='password'/>
                        <input type="text"{...register("confirmPassword")} placeholder='confirm password'/>
                        <input type="text"{...register("mobile",{required: true, maxLength: 9})} placeholder='mobile number'/>
                        {errors.mobile?.type==='required' && "Mobile Number is required"}
                        {errors.mobile?.type==='maxLength' && "Max Length exceed"}
                        <button className='btn'>Sign in</button>
                    </form>
                </div>

            </div>
        </section>
    )
}