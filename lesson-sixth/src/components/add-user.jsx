import {useForm} from "react-hook-form"

export const AddUser = () => {
    const {register, handleSubmit, formState : {errors}, reset} = useForm();

    const handleAdd = data => {
        console.log(data);
        reset();    
    }


    return <>
        <form  onSubmit={handleSubmit(handleAdd)}>
            {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
            <input type="text" 
                {...register("name", {required : "please fill your name"})}
            />
            {errors.age && <p style={{color:"red"}}>{errors.age.message}</p>}
            <input type="number" 
                {...register("age", {required : "please fill your age"})}
            />
            {errors.salary && <p style={{color:"red"}}>{errors.salary.message}</p>}
            <input type="number"
                {...register("salary", {required : "please fill your salary"})}
             />
            <button>save</button>
        </form>
    </>
}