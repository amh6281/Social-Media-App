import { db } from "../connect.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  // 이미 계정이 있는지 체크
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("계정이 이미 존재합니다.");

    // 새 계정 생성
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("계정이 생성되었습니다.");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
