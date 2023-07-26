import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <h1>Example tRPC</h1>
      <Link
        href={{
          pathname: "/customer/[id]",
          query: { id: 666 },
        }}
        legacyBehavior
      >
        <a>Customer # 666</a>
      </Link>
    </div>
  );
}
