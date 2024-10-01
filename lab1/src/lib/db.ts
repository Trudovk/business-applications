// db.js
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_CONNECTION ?? "");

export default sql;
