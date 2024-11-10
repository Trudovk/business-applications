import sql from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  const result = await sql`SELECT 1`;
  console.log(result);
  return (
    <div className="">
      <main className=""></main>
      <footer className=""></footer>
    </div>
  );
}
