import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <div className="flex items-center justify-center ">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-8 mt-8 rounded-md">Cards Against Universe</h1>
                    <img
                        src="/images/cards-home.jpg"
                        alt="Cards Against Universe"
                        className="w-full h-auto max-w-md mx-auto mb-8 rounded-[2rem]"
                    />
                    <div className="flex space-x-4 justify-center mt-8 gap-4 md:gap-8">
                        <Link to="register" className="btn btn-neutral md:text-lg">Register</Link>
                        <Link to="login" className="btn btn-outline md:text-lg">Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage