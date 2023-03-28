import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <p>Hello</p>

      <Link href="./news">See the news!</Link>
    </div>
  );
}

export default HomePage;
