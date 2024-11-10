import Link from "next/link";
import logo from "@/images/DS2017_TP09_color.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex bg-neutral-100 items-center justify-start">
      <Image src={logo} alt="" className="mx-[60px] mt-[66px] mb-[40px]" />
      <nav className="flex gap-8 mx-8">
        <Link href="/">Home</Link>
        <Link href="/login">login</Link>
        <Link href="/nologout">nologout</Link>
        <Link href="/editrole">edit</Link>
        <Link href="/admin">admin</Link>
      </nav>
    </header>
  );
}
