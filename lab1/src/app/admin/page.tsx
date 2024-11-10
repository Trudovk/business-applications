import Link from "next/link";

export default function Admin() {
  return (
    <div className="flex gap-4 flex-col">
      <nav className="flex gap-8">
        <Link href="/">Add user</Link>
        <Link href="/">Exit</Link>
      </nav>
      <div className="flex gap-4">
        <p>Office:</p>
        <select className="rounded-md pl-2 border-2" title="office">
          <option value="dubai">Dubai</option>
          <option value="abu dhabi">Abu Dhabi</option>
          <option value="london">London</option>
          <option value="new york">New York</option>
        </select>
      </div>
      <table className="border-2 border-collapse border-black">
        <thead>
          <tr>
            <th className="border-2 border-collapse border-black">Name</th>
            <th className="border-2 border-collapse border-black">Last Name</th>
            <th className="border-2 border-collapse border-black">Age</th>
            <th className="border-2 border-collapse border-black">User Role</th>
            <th className="border-2 border-collapse border-black">
              Email Address
            </th>
            <th className="border-2 border-collapse border-black">Office</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-collapse border-black">John</td>
            <td className="border-2 border-collapse border-black">Doe</td>
            <td className="border-2 border-collapse border-black">30</td>
            <td className="border-2 border-collapse border-black">User</td>
            <td className="border-2 border-collapse border-black">
              <a href="mailto:john.doe@et">john.doe@et</a>
            </td>
            <td className="border-2 border-collapse border-black">Dubai</td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-4">
        <Link href="/editrole" className="border-2 rounded-md">
          Change Role
        </Link>
        <button className="border-2 rounded-md">Enable/Disable</button>
      </div>
    </div>
  );
}
