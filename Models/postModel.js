import mongoose, { mongo } from "mongoose";

const postSchema = mongoose.Model(
  {
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Posts", postSchema)
export default PostModel