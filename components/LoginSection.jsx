import React from "react";

const LoginSection = () => {
  return (
    <section className="py-20">
      <div className="container place-content-center">
        <form action="" className="p-10 flex flex-col justify-center max-w-lg mx-auto">
          <h3 className="text-[20px] font-medium leading-6 tracking-wider mb-10">Log In</h3>
          <div className="mb-3">
            <label htmlFor="email-username" className="block text-[13px] font-semibold leading-[13px] text-[#5b5b5b] tracking-wide mb-2">Username or Email address</label>
            <input type="text" id="email-username" className="w-full border-2 rounded-md p-2 px-3"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block text-[13px] font-semibold leading-[13px] text-[#5b5b5b] tracking-wide mb-2">Password</label>
            <input type="text" id="password" className="w-full border-2 rounded-md p-2 px-3" />
          </div>
          <div className="flex flex-row-reverse">
            <span className="text-[12px] font-semibold text-orange hover:text-black">Forgot password?</span>
          </div>
          <button type="submit" className="bg-orange w-[100px] text-white p-[10px] mt-10 font-semibold mx-auto block px-5 rounded-lg hover:bg-black">Log In</button>
        </form>
      </div>
    </section>
  );
};

export default LoginSection;
