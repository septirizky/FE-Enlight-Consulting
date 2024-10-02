import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Blog</h1>
          <Image src="/logo.jpg" alt="Logo" width={500} height={300} />
          <ul className="flex space-x-4">
            <li>
              <Link href="/posts" className="hover:underline">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/posts/create" className="hover:underline">
                Create Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
