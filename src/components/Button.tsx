interface Props {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

const Button = ({ text, type = undefined, onClick }: Props) => {
    return (
        <button 
            type={type}
            onClick={onClick}
            className="
                bg-slate-800 text-slate-50 py-3 w-full 
                transition-all duration-200
                xs:mt-4
                rounded-md font-bold md:text-sm
                hover:bg-gradient-to-r hover:from-rose-500 hover:from-10% hover:to-orange-400
                focus:bg-gradient-to-r focus:from-rose-500 focus:from-10% focus:to-orange-400 focus:outline-none
                hover:shadow-xl hover:shadow-rose-400/40
            "
        >
            {text}
        </button>
    )
}

export default Button
