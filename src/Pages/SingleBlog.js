import React, { useState, useEffect, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../utils/firebase";

export default function SingleBlog() {
  const [singleBlog, setSingleBlog] = useState("");
  let history = useHistory();
  useEffect(async () => {
    let Blog = await db
      .collection("blogs")
      .doc(history.location.pathname.split("/")[2])
      .get();
    setSingleBlog(Blog.data());
  }, []);

  return (
    <div className="mt-5 pt-5 text-light">
      <Suspense fallback={<h1>Loading data...</h1>}>
        <div className="time">
          {" "}
          {new Date(singleBlog.createdAt)
            .toLocaleString("en-GB", { timeZone: "UTC" })
            .toString()}
        </div>
        <div className="title">
          <h1>{singleBlog.title}</h1>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: singleBlog.data }}
        ></div>
        <p>By: {singleBlog.createdBy}</p>
      </Suspense>
    </div>
  );
}
