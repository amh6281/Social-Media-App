import Express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";

const app = Express();

app.use("/api/users", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/users", postRoutes);
app.use("/api/users", commentRoutes);
app.use("/api/users", likeRoutes);

app.listen(8800, () => {
  console.log("API working!!");
});
