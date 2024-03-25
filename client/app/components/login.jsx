import Image from "next/image";

function Login () {
    return(
        <div className="grid gap-4 place-content-center">
            <div className="flex">
                {/* Left Side */}
                <div className="">
                    <h1 className="font-semibold">facebook</h1>
                    <h2>Connect with friends and the world around you on Facebook.</h2>
                </div>


                {/* Right Side */}
                <div className="grid place-items-center bg-gray-100 p-5">
                    <input className="flex ml-2 items-center bg-transparent p-2" type="text" placeholder="Email or phone number"/>
                    <input className="flex ml-2 items-center bg-transparent p-2" type="text" placeholder="Password"/>

                    <h1 className="p-1 bg-blue-500
                                text-white text-center cursor-pointer">
                            Login
                    </h1>
                    <a href="">Forgot password?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;