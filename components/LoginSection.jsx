import Link from "next/link";
import React, { useState } from "react";

const LoginSection = () => {
  const [emailUsername, setEmailUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="py-20">
      <div className="container place-content-center">
        <form
          action=""
          className="p-10 flex flex-col justify-center max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-[20px] font-medium leading-6 tracking-wider mb-10">
            Log In
          </h3>
          <div className="mb-3">
            <label
              htmlFor="email-username"
              className="block text-[13px] font-semibold leading-[13px] text-[#5b5b5b] tracking-wide mb-2"
            >
              Username or Email address
            </label>
            <input
              type="text"
              id="email-username"
              className="w-full border-2 rounded-md p-2 px-3"
              value={emailUsername}
              onChange={(e) => setEmailUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-[13px] font-semibold leading-[13px] text-[#5b5b5b] tracking-wide mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-2 rounded-md p-2 px-3"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-row-reverse">
            <Link
              href="/password-recovery"
              className="text-[12px] font-semibold text-orange hover:text-black"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-orange w-[100px] text-white p-[10px] mt-10 font-semibold mx-auto block px-5 rounded-lg hover:bg-black"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginSection;
