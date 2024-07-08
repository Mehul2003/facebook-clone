import { useState } from "react";

function SignUp() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    const years = Array.from({ length: 125 }, (_, index) => 2024 - index);

    const [age, setAge] = useState(0);

    const signUp = () => {

    };

    return(
        <div className="flex flex-col justify-center items-center bg-gray-100 h-screen">
            <h1 className="text-[50px] font-bold text-blue-600">facebook</h1>
            <div className="bg-white flex flex-col gap-2 items-center pt-6 pb-6 pr-4 pl-4 rounded-lg shadow-md w-1/3">
                <h1 className="font-bold text-2xl">Create a new account</h1>
                <p className="text-sm text-gray-500">It's quick and easy.</p>
                
                <hr className="w-full"/>

                <div className="flex flex-row gap-2 w-full">
                    <input className="p-2 w-1/2 outline outline-1 outline-gray-400 rounded-md" type="text" placeholder="First name"/>
                    <input className="p-2 w-1/2 outline outline-1 outline-gray-400 rounded-md" type="text" placeholder="Last name"/>
                </div>

                <input className="w-full p-2 outline outline-1 outline-gray-400 rounded-md" type="text" placeholder="Mobile number or email"/>
                <input className="w-full p-2 outline outline-1 outline-gray-400 rounded-md" type="text" placeholder="New password"/>


                <div className="flex flex-col w-full">
                    <label className="justify-start text-[12px] text-gray-500" for="months">Birthday:</label>

                    <div className="flex flex-row gap-2 w-full">
                        <select className="p-2 w-1/3 outline outline-1 outline-gray-400 rounded-md" name="months" id="">
                            {months.map( (month) => (
                                <option value={month}>{month}</option>
                            ))}
                        </select>

                        <select className="p-2 w-1/3 outline outline-1 outline-gray-400 rounded-md" name="days" id="">
                            {days.map( (day) => (
                                <option value={day}>{day}</option>
                            ))}

                        </select>

                        <select className="p-2 w-1/3 outline outline-1 outline-gray-400 rounded-md" name="years" id="">
                            {years.map( (year) => (
                                <option value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
                
                <div className="flex flex-col w-full">
                    <label className="justify-start text-[12px] text-gray-500" for="gender">Gender:</label>

                    <div className="flex flex-row gap-2 w-full">
                        <div className="flex flex-row p-2 w-1/2 outline outline-1 outline-gray-400 rounded-md justify-between">
                            <label for="female">Female</label>
                            <input type="radio" id="female" name="gender" value="female"/>
                        </div>
                        <div className="flex flex-row p-2 w-1/2 outline outline-1 outline-gray-400 rounded-md justify-between">
                            <label className="justify-start" for="male">Male</label>
                            <input type="radio" id="male" name="gender" value="male"/>
                        </div>
                        <div className="flex flex-row p-2 w-1/2 outline outline-1 outline-gray-400 rounded-md justify-between">
                            <label className="justify-start" for="custom">Custom</label>
                            <input type="radio" id="custom" name="gender" value="custom"/>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-[12px] text-gray-500">People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                    <br />
                    <p className="text-[12px] text-gray-500">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. 
                                        You may receive SMS Notifications from us and can opt out any time.</p>
                </div>

                <button className="w-1/2 p-2 bg-lime-600 rounded-md text-white font-bold" onClick={signUp}>Sign Up</button>
                <a className="text-blue-500 text-md" href="">Already have an account?</a>
            </div>
        </div>
    );
}

export default SignUp;