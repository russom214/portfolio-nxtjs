import React from "react";


async function getData() {
  const res = await fetch("http://bitsbynate.local/wp-json/wp/v2/posts");
  // The return value is *not* serialized

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();

  return (
    <div>
      <article>
        {data.map((post) => (
          <section key={post.id}>
            <h2>{post.title.rendered}</h2>
            <p>{post.content.rendered}</p>
          </section>
        ))}
      </article>
    </div>
  );
}
