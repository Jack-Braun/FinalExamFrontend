import React, { useState } from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://finalexambackend-3yei.onrender.com/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                author: author,
                description: description
            })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Data Added successfully');
        window.location = '/';
    } catch (error) {
        console.error('Error:', error.message);
    }
};

  return (
    <div class="CreateBook">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <br />
            <a class="btn btn-info float-left" href="/">
              Show BooK List
            </a>
          </div>
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>
            <form onSubmit={onSubmit} novalidate="">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  class="form-control"
                  value={title}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  class="form-control"
                  value={author}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  class="form-control"
                  value={description}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;