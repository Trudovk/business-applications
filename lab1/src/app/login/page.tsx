import logo from "@/images/DS2017_TP09_color.png";
import Image from "next/image";
import type { Metadata } from "next";
import InputField from "@/components/InputField";

export const metadata: Metadata = {
  title: "Amonic - login",
  description: "Etihad Airways",
};

export default function LoginPage() {
  return (
    <div>
      <Image src={logo} alt="" className=" mt-[66px] mb-[40px] mx-auto" />
      <form className="flex flex-col max-w-xs mx-auto my-0 gap-4">
        <InputField type="text" placeholder="username" />
        <InputField type="password" placeholder="password" />
        <button type="submit" className="border-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}
