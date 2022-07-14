import Image from "next/image";
import Nav from "./Nav";
import { useRouter } from "next/router";
import logo from "../../../assets/images/logo.svg";
import { signIn, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <header className="sticky bg-slate-900 top-0 z-[1000] flex h-[72px] items-center px-10 md:px-12 justify-between flex-col md:flex-row mb-5 py-1">
      <Image
        src={logo}
        width="80"
        height="80"
        alt="Disney+"
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      {session && <Nav />}

      {!session ? (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded-md font-medium tracking-wide hover:bg-white hover:text-slate-900 transition duration-200"
          onClick={() => signIn()}
        >
          login
        </button>
      ) : (
        <div className="ml-auto cursor-pointer py-1">
          <Image
            src={session.user?.image || ""}
            alt={session.user?.name || ""}
            width={48}
            height={48}
            className="rounded-full"
            onClick={() => signOut()}
            objectFit="cover"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
function signOut(): void {
  throw new Error("Function not implemented.");
}
