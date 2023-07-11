import { updates } from "../data/updates";
import CheckedList from "./CheckedList";
import Form from "./Form";

interface Props {
    email: string;
    setEmail: (email: string) => void;
}

const Content = ({ email, setEmail }: Props) => {
    return (
        <main className="p-4 md:p-12">
            <h1 className="text-4xl text-slate-800 font-bold pt-4 xs:pt-6 md:text-5xl">Stay Updated!</h1>
            <p className="mt-5 text-slate-800 md:text-sm">Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="py-6 text-slate-800 md:text-sm">
                <CheckedList list={updates} />
            </div>
            <div className="pt-4 md:pt-2">
                <Form email={email} setEmail={setEmail} />
            </div>
        </main>
    )
}

export default Content
