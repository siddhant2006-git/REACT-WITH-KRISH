import { SignUp } from "@clerk/clerk-react";


function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md p-6 shadow-2xl">
        <SignUp />
      </div>
    </div>
  );
}

export default Signup;