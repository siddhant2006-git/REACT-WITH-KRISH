import React from "react";
import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center  from-black via-gray-900 to-purple-950 px-4">
      <div className="w-full max-w-md flex justify-center">
        <SignUp
          appearance={{
            elements: {
              card: "shadow-2xl rounded-2xl",
              formButtonPrimary:
                "bg-purple-600 hover:bg-purple-700 text-white",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Signup;