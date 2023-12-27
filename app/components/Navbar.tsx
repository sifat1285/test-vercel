"use client";

import { signIn, signOut } from "next-auth/react";

const Navbar = ({ user }: {
    user: any
}) => {
  return (
    <div className=" h-fit py-4 px-10">
      <div className=" h-full w-full">
        <div className=" max-w-4xl mx-auto flex items-center justify-center">
            {user ? (
                <button
                  onClick={()=> signOut()}
                >Sign Out</button>
            ): (
                <button
                  className=" px-3 py-1 border border-gray-600 rounded-2xl"
                  onClick={()=> signIn()}
                >Sign In</button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
