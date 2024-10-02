import { NextApiRequest, NextApiResponse } from "next";

const posts = [
  { id: 1, title: "First Post", body: "This is the first post." },
  { id: 2, title: "Second Post", body: "This is the second post." },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { title, body } = req.body;
    const newPost = { id: posts.length + 1, title, body };
    posts.push(newPost);
    return res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  }

  if (req.method === "GET") {
    return res.status(200).json(posts);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
