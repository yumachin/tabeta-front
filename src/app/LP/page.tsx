import HeaderAndFooter from "@/components/Home/_templates/HeaderAndFooter";
import Post from "@/components/Home/_templates/Post";

export default function Page() {
  const recommendedPosts = ["1", "2", "3"];

  return (
    <HeaderAndFooter>
      {recommendedPosts.map((post) => (
        <Post key={post} />
      ))}
    </HeaderAndFooter>
  );
};