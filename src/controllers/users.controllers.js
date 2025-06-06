const db = require("../db/connection");

// Ambil semua User
const getUsers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch users", error: error.message });
  }
};

// Ambil User berdasarkan ID
const getOneUsers = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [rows] = await db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [
      id,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch user", error: error.message });
  }
};

// Tambah user
const createUser = async (req, res) => {
  try {
    const { fullname, username, password, email, phone } = req.body;

    if (!fullname || !username || !password || !email || !phone) {
      return res.status(400).json({ message: "Semua field harus diisi" });
    }

    const [result] = await db.query(
      "INSERT INTO users (fullname, username, password, email, phone) VALUES (?, ?, ?, ?, ?)",
      [fullname, username, password, email, phone]
    );

    const newUser = {
      id: result.insertId,
      fullname,
      username,
      email,
      phone,
    };

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const { id, fullname, username, password, email, phone } = req.body;

    if (!id) {
      return res.status(400).json({ message: "User id is required" });
    }

    const [result] = await db.query(
      `UPDATE users SET fullname = ?, username = ?, password = ?, email = ?, phone = ? WHERE id = ?`,
      [fullname, username, password, email, phone, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: { id, fullname, username, email, phone },
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
};

// Hapus user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete user", error: error.message });
  }
};

module.exports = {
  getUsers,
  getOneUsers,
  createUser,
  updateUser,
  deleteUser,
};
