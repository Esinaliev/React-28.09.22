import React from 'react';
import {useState, useEffect} from "react";
import Comments from './Comments';
import Pagination from "./Pagination";

const CommentsList = (page) => {
    const [comments, setComments] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(10);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(data => {
                setComments(data);
                setLoaded(true);
            })
    }, []);
    
  const indexOfLastComments = currentPage * commentsPerPage;
  const indexOfFirstComments = indexOfLastComments - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComments, indexOfLastComments);
  const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
            <div>
                {
                    !loaded ? <h3>Loading</h3> :
                        <div className='container mt-5'>
                        <h1 className='text-primary mb-3'>Comments</h1>
                        <Comments comments={currentComments} loaded={loaded} />
                        <Pagination
                          commentsPerPage={commentsPerPage}
                          totalComments={comments.length}
                          paginate={paginate}
                        />
                      </div>
                }
            </div>
    );
};

export default CommentsList;