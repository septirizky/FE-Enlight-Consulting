import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="p-4 bg-white rounded shadow">
          <Link href={`/posts/${post.id}`}>
            <a className="text-xl font-semibold">{post.title}</a>
          </Link>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
