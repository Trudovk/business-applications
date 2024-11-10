import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amonic - No logout detected",
  description: "Etihad Airways",
};

export default function NoLogoutPage() {
  const lastLogin = new Date();
  return (
    <div className="pt-8">
      <h1 className=" text-center">{`No logout detected for your las login on ${lastLogin.getUTCDay()}/${lastLogin.getMonth()}/${lastLogin.getFullYear()} at ${lastLogin.getUTCHours()}:${lastLogin.getUTCMinutes()}`}</h1>
      <form className="flex flex-col max-w-xs mx-auto my-0 gap-4">
        <label htmlFor="reason">Reason:</label>
        <textarea
          id="reason"
          className="rounded-md pl-2 border-2"
          placeholder="Reason for no logout"
        ></textarea>

        <div>
          <input type="radio" id="SoftwareCrash" name="CrashType" />
          <label htmlFor="SoftwareCrash">Software Crash</label>
        </div>
        <div>
          <input type="radio" id="SystemCrash" name="CrashType" />
          <label htmlFor="SystemCrash">System Crash</label>
        </div>
        <button type="submit" className="border-2 rounded-md">
          Confirm
        </button>
      </form>
    </div>
  );
}
