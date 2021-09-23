import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MyUploadAdapter from "../config/myUploadAdapter";
import { db } from "../utils/firebase";
import AllBLogs from "./AllBlogs";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [updated, setUpdate] = useState("");
  const [lgShow, setLgShow] = useState(false);
  const [editorData, setEditorData] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const fetchBlogs = async () => {
    let allBlogs = await db.collection("blogs").get();
    let oldblogs = [];
    allBlogs.docs.forEach((item) => {
      oldblogs.push(item.data());
      setBlogs([...oldblogs]);
    });
  };
  useEffect(async () => {
    await fetchBlogs();
  }, []);
  const saveBlog = (e) => {
    e.preventDefault();
    !updated
      ? db
          .collection("blogs")
          .add({
            title: blogTitle,
            data: editorData,
            createdAt: new Date(),
            createdBy: "Admin",
          })
          .then((resp) => {
            console.log(resp);
            setBlogTitle("");
            setEditorData("");
            setLgShow(false);
            fetchBlogs();
          })
      : db
          .collection("blogs")
          .doc(updated)
          .update({
            title: blogTitle,
            data: editorData,
            updatedAt: new Date(),
          })
          .then(() => {
            setBlogTitle("");
            setEditorData("");
            setLgShow(false);
            fetchBlogs();
          });
  };
  const editBlog = (id) => {
    setEditorData(id.data);
    setBlogTitle(id.title);
    setLgShow(true);
    setUpdate(id.id);
  };
  const deleteBlog = (id) => {
    db.collection("blogs")
      .doc(id)
      .delete()
      .then(() => {
        fetchBlogs();
      });
  };
  return (
    <div className="mt-5 pt-5 text-light">
      <div className="d-flex justify-content-between mb-3">
        <AllBLogs blog={blogs} editBlog={editBlog} deleteBlog={deleteBlog} />
        <div className="newblog mx-3">
          <button
            style={{ width: "140px" }}
            onClick={() => setLgShow(true)}
            className="resume__btn mt-0"
          >
            New Blog
          </button>
        </div>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        fullscreen="md-down"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                type="email"
                size="sm"
                placeholder="blog title"
                onChange={(e) => {
                  setBlogTitle(e.target.value);
                }}
                value={blogTitle}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Blog Content</Form.Label>
              <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEditorData(data);
                }}
                onReady={(editor) => {
                  editor.plugins.get("FileRepository").createUploadAdapter = (
                    loader
                  ) => {
                    return new MyUploadAdapter(loader);
                  };
                }}
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button
                variant="success"
                className="resume__btn mt-0"
                onClick={saveBlog}
              >
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
