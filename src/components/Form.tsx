import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";

interface Props {
    email: string,
    setEmail: (email: string) => void;
}

export default function Form({ email, setEmail }: Props) {

    const [ error, setError ] = useState<string | null>(null)

    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errorStyles = "outline-none bg-red-100 text-red-500 ring-1 ring-inset ring-red-500 focus:text-red-500 focus:ring-2 focus:bg-red-100 focus:ring-red-500 placeholder:text-red-300";

    const validateEmail = (email: string) => {
      return emailRegex.test(email);
    }

    const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        if (e.key === "Enter" && e.target instanceof HTMLInputElement && e.target.type !== "textarea") {
            e.preventDefault();
            handleSubmit(e)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setError(null)
        setEmail(e.target.value)
    }

    const handleSubmit = (e: FormEvent):void => {
        e.preventDefault();
        
        const isValid = validateEmail(email);

        if (!isValid) {
            setError("Valid email required")
            return;
        }

        emailjs.send("service_8hcyfq9", "template_7yio7ym", { to_email: email }, "pGAlzR1yvpcNbzAsq")
            .then(() => {
                navigate("/thankyou")
            }, (err) => {
                console.log(err)
            })
        
   }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <div className="flex justify-between">
                    <span className="block text-sm font-bold text-slate-800 md:text-xs">Email address</span>
                    <span 
                        className={`
                            block text-sm font-bold text-red-500 md:text-xs
                            hide
                            ${error ? "appear" : ""}
                        `}
                    >
                        {error}
                    </span>
                </div>
                <div className="mt-2">
                    <input 
                        value={email}
                        onChange={handleChange}
                        onKeyDown={handleKeydown}
                        placeholder="email@company.com"
                        className={`
                            w-full py-3 px-3 rounded-md 
                            placeholder:text-gray-400 ring-1
                            focus:ring-inset focus:ring-2 focus:outline-none
                            md:text-sm
                            ${error ? errorStyles : "ring-inset ring-gray-300 focus:ring-slate-800" }
                        `}
                    />
                </div>
            </label>
            <div className="mt-4 md:mt-0">
                <Button text="Subscribe to monthly newsletter" type="submit" />
            </div>
        </form>
    )
}
