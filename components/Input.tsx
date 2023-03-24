
interface Input {
    name: string;
    type: string;
    placeholder: string;
    message: any;
    register: any;
    required?: boolean;
    error?: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ name, type, placeholder, message, error, register }: Input) => {

    return (
        <>
            <input
                name={name}
                className={`w-full h-[50px] max-w-[342px] rounded-[50px] pl-[15px] border-2 ${error ? "border-red-600" : "border-default"}  focus:border-primary  focus:outline-none`}
                type={type}
                placeholder={placeholder}
                {...register(name)}
            />
            <span className={`mt-[-1rem] w-[90%]  ${error ? "text-red-600" : "text-green-600"}`}> {message} </span>
        </>
    );
};

export default Input;
