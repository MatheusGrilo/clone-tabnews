import database from "../../../../utils/database";

async function status(request, response) {
  const result = await database.query("select now() as time_now;");
  console.log(result.rows[0]);
  response.status(200).json({ status: "Tudo funcionando 👍" });
}

export default status;
