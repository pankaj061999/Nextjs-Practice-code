import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";
import * as fs from 'fs'


const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  console.log("###################", blog);
  return (
    <div>
      <main>
        <h1>{blog && blog.title}</h1>
        <br />
        <div>{blog && blog.Content}</div>
      </main>
    </div>
  );
};


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-javascript"} },
      { params: { slug: "how-to-learn-next"} },
      { params: { slug: "how-to-learn-react"} },
    ],
    fallback: true // false or "blocking"
  };
}


export async function getStaticProps(context) { 
  console.log(context);
  const { slug } = context.params;
  
 let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');

 console.log("&&&&&&&&&&&&&", myBlog);
  return {
    props: { myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}

// export async function getServerSideProps(context) {
//   console.log(context);
//   const { slug } = context.query;
//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let myblog = await data.json();
//   return {
//     props: { myblog }, // will be passed to the page component as props
//   };
// }

export default Slug;
