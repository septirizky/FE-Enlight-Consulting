import axios from "axios";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface HomeProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: posts } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return {
    props: {
      posts: posts.slice(0, 10),
    },
  };
};

export default function Home({ posts }: HomeProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-white rounded shadow">
            <Link href={`/posts/${post.id}`} className="text-xl font-semibold">
              {post.title}
            </Link>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
