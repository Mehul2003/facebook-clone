import Image from "next/image";

function Login () {
    return(
        <div className="grid grid-cols-2 bg-gray-200 h-screen">
            {/* Left Side */}
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-start w-3/5">
                    <h1 className="font-bold text-[70px] text-blue-500">facebook</h1>
                    <h2 className="text-2xl">Connect with friends and the world around you on Facebook.</h2>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-5 w-3/5 pt-6 pb-6 bg-white items-center rounded-lg shadow-md">
                    <input className="w-11/12 p-3 outline outline-1 outline-gray-300 rounded-md" type="text" placeholder="Email or phone number"/>
                    <input className="w-11/12 p-3 outline outline-1 outline-gray-300 rounded-md" type="text" placeholder="Password"/>

                    <button className="w-11/12 p-3 bg-blue-500 rounded-md text-white text-center font-bold">Login</button>
                    <a className="flex self-center text-sm text-blue-500" href="">Forgot password?</a>

                    <hr className="w-11/12"/>

                    <button className="w-6/12 p-3 bg-lime-600 rounded-md text-white text-center font-bold">Create new account</button>
                </div>
            </div>
        </div>
    );
}

export default Login;