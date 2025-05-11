import React, { useState } from 'react'


const SignUp = () => {
    const [otpsend , setotpsend] = useState(false);
    const [sending , setsending] = useState(false);
    const [email , setemail] = useState('');


    const handleSubmit = async (e)=>{
        try{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        setemail(data.email);
        await fetch('http://localhost:9000/api/v1/otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        setotpsend(true);
        setsending(true);
            
            
        }catch(err){
            console.log(err.message);
        }
        finally{
            setsending(false);
        }
    };
    const handleSubmitOtp = async (e)=>{
        try{
        e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            await fetch('http://localhost:9000/api/v1/verifyotp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {...(JSON.stringify(data)) , email : email },
            })
            alert("OTP verified")
            
        }catch(err){
            console.log(err.message);
        }
    }

return (<>
{
(otpsend) ? (
    <div className='p-6 text-center'> 
            {/* <h1 className=''>OTP sent to your email</h1> */}
            <form action="" onSubmit={handleSubmitOtp} className='flex flex-row gap-4'>
                    <div className='flex flex-row gap-4 items-center'>
                            <label htmlFor="otp" >Enter OTP :</label>
                            <input value=""  className='border p-2 w-lg hover:border-red-400' type="text" name="otp" id="otp" placeholder='6 digit otp .....' />
                    </div>
                    <button className='border p-2 bg-blue-400 hover:bg-amber-600'>verify</button>
            </form>
    </div>
) :
 (
    <div className='p-6 text-center'>
            <form action="" onSubmit={handleSubmit} className='flex flex-row gap-4'>
                    <div className='flex flex-row gap-4 items-center'>
                            <label htmlFor="email">Email :</label>
                            <input className='border p-2 w-lg hover:border-red-400' type="email" name="email" id="email" />
                    </div>
                    {
                        (!sending) ? (
                            <button className='border p-2 bg-blue-400 hover:bg-amber-600'>send otp</button>
                        ):(
                            <button disabled className='border p-2 bg-gray-400 cursor-not-allowed'>sending...</button>
                        )
                    }
                    
            </form>
    </div>
)
}
</>)
    
}

export default SignUp