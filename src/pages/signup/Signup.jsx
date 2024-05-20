import { useState } from "react";
import Layout from "../../components/layout/Layout";
import { auth } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    if (name == "" || email == "" || password == "") {
      alert("fill all the Detail to register .. ");
      return;
    } else {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User created successfully");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-200 ">
        <form
          action=""
          className="w-1/4 bg-gray-100 shadow-2xl rounded-lg p-6 "
          onSubmit={submitHandler}
        >
          <div className="w-full text-2xl text-center font-sans font-bold text-blue-900">
            <h1>Register </h1>
          </div>
          <div>
            <div className="flex flex-col h-24  ">
              <label htmlFor="name" className="text-xl mb-3  ml-1">
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="text-lg bg-gray-300 p-3 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col h-24 mt-3 ">
              <label htmlFor="email" className="text-xl mb-3  ml-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="text-lg bg-gray-300 p-3 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col h-24 mt-3 ">
              <label htmlFor="password" className="text-xl mb-3  ml-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="text-lg bg-gray-300 p-3 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 mt-3 p-3 rounded-lg hover:bg-green-900 text-xl text-gray-200"
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default Signup;
