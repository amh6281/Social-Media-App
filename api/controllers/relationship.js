import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {
  const q = "SELECT followerUserId FROM relationships WHERE followedUserId = ?";

  db.query(q, [req.query.followedUserId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json(data.map((relationship) => relationship.followerUserId));
  });
};

export const addRelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("로그인이 필요합니다.");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("토큰이 유효하지 않습니다.");

    const q = "INSERT INTO likes (`userId`,postId) VALUES (?)";

    const values = [userInfo.id, req.body.postId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("게시물에 좋아요를 표시합니다. ");
    });
  });
};

export const deleteRelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("로그인이 필요합니다.");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("토큰이 유효하지 않습니다.");

    const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";

    db.query(q, [userInfo.id, req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("게시물에 좋아요를 취소합니다.");
    });
  });
};
