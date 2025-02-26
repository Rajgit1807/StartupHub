import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/startuplogo.png";
import { auth, signOut, signIn } from "../../auth";
import { redirect } from "next/dist/server/api-utils";

const Navbar = async () => {

  const session = await auth();
  // console.log(session?.user);
  // console.log(session)


  return (
    <header className="px-5 py-3 bg-black shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image alt="StartupHub Logo" src={logo} width={100} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-white">
          {session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server"
                  await signOut();
                }}
              >
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session?.user.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form

              action={async () => {
                "use server";

                await signIn();
              }}
            >
              <button type="submit">
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
