import Content from "../components/Content";
import MobileImage from "/assets/images/illustration-sign-up-mobile.svg"
import DesktopImage from "/assets/images/illustration-sign-up-desktop.svg"

interface Props {
    email: string,
    setEmail: (email: string) => void;
}

const FeaturedImage = () => {
    return (
        <>
            <img
                src={MobileImage}
                className="md:hidden sm:rounded-2xl w-full"
                alt="Sign Up Illustration"
            />
            <img
                src={DesktopImage}
                className="hidden h-[523px] md:block"
                alt="Sign Up Illustration"
            />
        </>
    )

}

const SignUp = ({ email, setEmail }: Props) => {
    return (
        <div 
            className="
                bg-white w-screen max-w-[450px] min-h-screen
                xs:overflow-hidden 
                xs:rounded-2xl xs:min-h-full
                md:max-w-[800px] md:w-full md:flex md:flex-row-reverse
                md:justify-between md:m-auto md:p-4 md:rounded-3xl
            "
        >
            <FeaturedImage />
            <Content email={email} setEmail={setEmail} />
        </div>
    )
}

export default SignUp
