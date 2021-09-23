import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'

export default function AllBlogs({ blog, editBlog, deleteBlog }) {
  const [blogs, setBlogs] = useState([]);
  const [id, setID] = useState();
  useEffect(async () => {
    let allBlogs = await db.collection("blogs").get();
    let oldblogs = [];
    allBlogs.docs.forEach((item) => {
      let data = { ...item.data() };
      data.id = item.id;
      oldblogs.push(data);
      oldblogs.sort((a, b) => a.createdAt - b.createdAt);
      setBlogs([...oldblogs]);
    });
  }, [blog]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className='all_projects'>
      <div className='section__title text-white'>
        <h1>Blogs</h1>
      </div>
      <div className='projects_wrapper' style={{ paddingLeft:"100px"}}>
              {blogs.map((item, index) => (
                <div className='project_card' key={index + item.title} style={{ height: "auto", display: "grid"}}>
                  <Link to={`/blog/${item.id}`} className="ml-md-2">
                     <div className='project_card_img'>
                      <img src="http://placekitten.com/150/150" alt='' />
                    </div>
                  </Link>
                  <div className='project_description'>
                   <Link to={`/blog/${item.id}`} className="ml-md-2">
                    <h3> {item.title} </h3>
                    <p>Posting Time: 
                      {new Date(item.createdAt).toLocaleString("en-GB", { timeZone: "UTC" }).toString()}
                    </p>
                    <p>By: {item.createdBy}</p>
                    </Link>
                  </div>
                  <div style={{ margin: "inherit"}}>
                  <div style={{background:"white"}} className="btn btn-sm rounded-circle" onClick={() => { handleShow(); setID(item.id); }} >
                    <BsTrash></BsTrash>
                  </div>
                  <div style={{background:"white", marginLeft:"10px"}} className="btn btn-sm rounded-circle" onClick={() => { editBlog(blogs.filter((i) => i.id === item.id)[0]); }} >
                    <MdEdit></MdEdit>
                  </div>
                  </div>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Deleting BLog Document</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Are you sure to <strong>Delete</strong> this record from
                      Database?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="danger"
                        onClick={() => {
                          deleteBlog(id);
                        }}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              ))}
            </div>
    </section>
  );
}
