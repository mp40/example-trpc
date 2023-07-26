import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <h1>Example tRPC</h1>
      <Link
        href={{
          pathname: "/customer/list",
        }}
        legacyBehavior
      >
        <a>Customer List</a>
      </Link>
      <br />
      <br />
      <br />
      <Link
        href={{
          pathname: "/customer/[id]",
          query: { id: 1 },
        }}
        legacyBehavior
      >
        <a>Customer # 1</a>
      </Link>
      <br />
      <br />
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
