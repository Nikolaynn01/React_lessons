import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Types from 'prop-types'; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
.object()
.shape({
    name : yup.string().matches(/^[a-zA-Z]+$/).required(),
    surname : yup.string().matches(/^[a-zA-Z]+$/).required(),
    login : yup.string().email().required(),
    age : yup.number().integer().min(18).required(),
    password : yup.string().min(8, "incorrect format").required(),
})

export const AddUser = ({onAdd}) => {

    const {register, handleSubmit, formState:{ errors }, reset } = useForm({
        resolver: yupResolver(schema)
      });

    const handleAdd = data => {
        console.log(data);
        onAdd(data);
        reset();
    }

    const handleAddUser = () => {
        toast.success("user succesfully was added")
    }



    return <div className='form-container'>
        <form onSubmit={handleSubmit(handleAdd)} className='login-form'>
            {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
            <input type="text"
                 {...register("name", {required : true})}
            placeholder='name' 
            />
            {errors.surname && <p style={{color:"red"}}>{errors.surname.message}</p>}
            <input type="text"
                 {...register("surname", {required : true})}
            placeholder='surname' 
            />
            {errors.login && <p style={{color:"red"}}>{errors.login.message}</p>}
            <input type="text"
                 {...register("login", {required : true})}
            placeholder='email: example@gmail.com' 
            />
            {errors.age && <p style={{color:"red"}}>{errors.age.message}</p>}
            <input type="number"
                {...register("age", {required : true})}
            placeholder='age' 
            />
            {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
            <input type="password" 
                {...register("password", {required : true})}
            placeholder='password'
            />
            <button className='submit-button' onClick={handleAddUser}>submit</button>
            <ToastContainer/>
        </form>
    </div>
}

AddUser.propTypes = {
    onAdd : Types.func
}

