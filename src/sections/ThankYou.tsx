import { useNavigate } from "react-router-dom";
import Icon from "../assets/icon-list.svg"
import Button from "../components/Button";

interface Props {
    email: string;
    setEmail: (email: string) => void;
}

const ThankYou = ({ email, setEmail }: Props) => {

    const navigate = useNavigate();

    const handleDismiss = (): void => {
        setEmail("");
        navigate("/");
    }

    return (
        <div 
            className="
                pt-32 px-8 pb-8 flex flex-col bg-white h-screen max-w-[400px]
                xs:rounded-2xl xs:justify-center xs:items-start
                xs:p-8 xs:h-auto
            "
        >
            <div className="">
                <img className="h-16 xs:h-12" src={Icon} alt="Check mark" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 pt-8 leading-[2.5rem] xs:pt-8">Thanks for subscribing!</h1>
            <p className="pt-8 text-zinc-700 xs:pt-4 xs:text-sm">A confirmation email has been sent to <strong className="text-slate-800">{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
            <Button text="Dismiss message" onClick={handleDismiss} />
        </div>
    )
}

export default ThankYou
