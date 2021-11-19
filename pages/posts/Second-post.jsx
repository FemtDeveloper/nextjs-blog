import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const SecondPost = () => {
  const lineBreak = "\n";
  return (
    <>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>This is my second post</h1>
      <Image src="/images/leon.jpg" height={144} width={144} />
      {lineBreak}
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
};

export default SecondPost;
