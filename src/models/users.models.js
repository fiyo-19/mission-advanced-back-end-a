const connection = require("../db/connection");

const getUsers = async (query) => {
  const result = await connection.query("SELECT * FROM users");
  console.log(result);
  return result;
};

const getUserById = async (query) => {
  const [result] = await connection.query(
    "SELECT * FROM users WHERE id = ? LIMIT 1",
    [query.id]
  );
  return result.length ? result : null;
};

const createUser = async (query) => {
  const { name } = query;
  const [result] = await connection.query(
    "INSERT INTO users (name) VALUES (?)",
    [name]
  );
  return { id: result.insertId, name };
};

const updateUser = async ({
  id,
  fullname,
  username,
  password,
  email,
  phone,
}) => {
  const [result] = await connection.query(
    "UPDATE users SET fullname = ?, username = ?, password = ?, email = ?, phone = ? WHERE id = ?",
    [fullname, username, password, email, phone, id]
  );

  if (result.affectedRows === 0) return null;

  return { id, fullname, username, email, phone };
};

const deleteUser = async (query) => {
  const { id } = query;
  const [result] = await connection.query("DELETE FROM users WHERE id = ?", [
    id,
  ]);
  return result.affectedRows > 0;
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
