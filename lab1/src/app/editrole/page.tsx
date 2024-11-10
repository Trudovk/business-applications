import { Metadata } from "next";
import InputField from "@/components/InputField";

export const metadata: Metadata = {
  title: "Amonic - edit role",
  description: "Etihad Airways",
};

export default function EditRole() {
  return (
    <div className="pt-8">
      <h1 className="text-foreground text-center">EditRole</h1>
      <form className="flex flex-col gap-4 min-w-80 max-w-md m-auto">
        <label className="text-foreground flex justify-between">
          Email address:
          <InputField type="email" />
        </label>
        <label className="text-foreground flex justify-between">
          First name:
          <InputField type="text" />
        </label>
        <label className="text-foreground flex justify-between">
          Last name:
          <InputField type="text" />
        </label>
        <label className="text-foreground flex justify-between">
          Office:
          <select className="rounded-md pl-2 border-2">
            <option value="dubai">Dubai</option>
            <option value="abu dhabi">Abu Dhabi</option>
            <option value="london">London</option>
            <option value="new york">New York</option>
          </select>
        </label>
        <div className="flex gap-4">
          <label className="text-foreground flex justify-between">
            <InputField type="radio" name="role" value="user" />
            User
          </label>
          <label className="text-foreground flex justify-between">
            <InputField type="radio" name="role" value="administrator" />
            Administrator
          </label>
        </div>
        <div className="flex justify-between gap-2">
          <button className="rounded-md pl-2 border-2 w-5/12">Apply</button>
          <button className="rounded-md pl-2 border-2 w-5/12">Cancel</button>
        </div>
      </form>
    </div>
  );
}
