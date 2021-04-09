import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { VscLoading, VscError } from "react-icons/vsc";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLock,
  AiOutlineUser,
} from "react-icons/ai";

import User from "../classes/User";
import api from "../server";

interface LoginProps {
  client_id: string;
}

const Home: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<string>("hidden");
  const [inputType, setInputType] = useState<string>("password");

  const inputUserRef = useRef<HTMLInputElement>();
  const inputPasswordRef = useRef<HTMLInputElement>();

  function handleInputType() {
    if (inputType === "password") setInputType("text");
    else setInputType("password");
  }

  const handleUserLogin = async () => {
    try {
      setIsLoading(true);
      const user = new User(
        inputUserRef.current.value,
        inputPasswordRef.current.value
      );
      const response = await api.post<LoginProps>("/clients", user);
      const responseClient = response.data.client_id;

      router.replace(`/${responseClient}`);
    } catch (err) {
      setIsError("visible error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>LGPD Bank - Login</title>
        <link rel="icon" href="/bank.svg" />
      </Head>
      <img src="/bank.svg" alt="Bank" className="absolute w-20 h-20 m-4" />
      <div className="screen">
        <div className="form">
          <p className={isError}>
            <VscError />
            &nbsp;Login Failed
          </p>
          <h1 className="text-2xl font-bold">Log In</h1>
          <div className="input-div">
            <AiOutlineUser className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              className="input"
              ref={inputUserRef}
            />
          </div>
          <div className="input-div">
            <AiOutlineLock className="input-icon" />
            <input
              type={inputType}
              placeholder="Password"
              className="input"
              ref={inputPasswordRef}
            />
            {inputType === "password" ? (
              <AiOutlineEyeInvisible
                onClick={handleInputType}
                className="eye-icon"
              />
            ) : (
              <AiOutlineEye onClick={handleInputType} className="eye-icon" />
            )}
          </div>
          <button
            onClick={handleUserLogin}
            type="submit"
            className="btn-submit"
          >
            Continue
          </button>
          {isLoading && (
            <VscLoading className="absolute w-8 h-8 text-purple-600 bottom-5 animate-spin" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
