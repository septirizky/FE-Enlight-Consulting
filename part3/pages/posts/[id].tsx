import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostDetailProps {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const paths = posts.slice(0, 10).map((post: Post) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: post } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  return {
    props: { post },
  };
};

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
