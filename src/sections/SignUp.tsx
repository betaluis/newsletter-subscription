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
                className="md:hidden sm:rounded-2xl"
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
                bg-white max-w-[370px]
                xs:rounded-xl xs:overflow-hidden sm:p-4
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
