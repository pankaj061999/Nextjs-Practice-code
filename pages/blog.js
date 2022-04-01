import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import * as fs from "fs";

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);


  console.log("$$$$$$$$$$$$$$$", blogs);

  // useEffect(()=>{

  // },[])
  return (
    <div className={styles.main}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className={styles.blogtitle}>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogs1}>{blogitem.Content.substr(0, 400)}...</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile( ("blogdata/" + item), "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

// export async function getStaticProps(context) {

//   console.log(context.params);
//   const {slug} = context.params;

//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let myblog = await data.json();
//   return {
//     props: { myblog}, // will be passed to the page component as props
//   }
// }

export default Blog;
