import { useRouter } from "next/router";
import * as React from "react";

function Page() {
  const router = useRouter();
  console.log("Page", router.query);

  return <div>Next.js 404 Query Params Bug</div>;
}

export default Page;

export async function getStaticProps(context) {
  return { notFound: true };
}

export async function getStaticPaths() {
  return {
    fallback: "blocking",
    paths: [],
  };
}
