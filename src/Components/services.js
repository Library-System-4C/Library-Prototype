import "./service.css"
import React, { useState } from 'react';
const Service = () => {

    

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Here, you can add your logic to handle book submission.
      // For demonstration purposes, let's just display the entered data.
  
      alert(`New Book Added:\nTitle: ${title}\nAuthor: ${author}\nGenre: ${genre}`);
    };
  
    return ( 
        <>
        <body>
            
    <div class="container-fluid">
        <div class="row">
            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="/Images/add_book.jpeg" width="auto" height="250px"></img>                
                    <div class="card-body">
                        <h5 class="card-title">Add Book</h5>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add
</button>
                    </div>
                </div>
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AvilXfiUxEloFQC7jH20VyGTq85SFYTzhI0-m__ru39dvbAIa0P5hpxby55IHyH2Asc&usqp=CAU" width="auto" height="250px"></img>
                    <div class="card-body">
                        <h5 class="card-title">Borrow Book</h5>
                        <a href="#" class="btn btn-primary">Borrow</a>
                    </div>
                </div>
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AvilXfiUxEloFQC7jH20VyGTq85SFYTzhI0-m__ru39dvbAIa0P5hpxby55IHyH2Asc&usqp=CAU" width="auto" height="250px"></img>
                    <div class="card-body">
                        <h5 class="card-title">Update Book</h5>
                        <a href="#" class="btn btn-primary">Update</a>
                    </div>
                </div>
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="public\images\deletebook.jpg"width="auto" height="250px"></img>
                    <div class="card-body">
                        <h5 class="card-title">Delete Book</h5>
                        <a href="#" class="btn btn-primary">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add a Book to the Library</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
    
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author:</label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre:</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            placeholder="Enter book genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        
      </form>
   
</div> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Add Book</button>
      </div>
    </div>
  </div>
</div>
   

    {/* <div class="modal-dialog modal-dialog-centered" id="addmodel">
   
      <h2>Add a Book to the Library</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author:</label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre:</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            placeholder="Enter book genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Book</button>
      </form>
   
</div> */}

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


<div>
<footer class="bg-light pb-5">
      <div class="container text-center">
        <div>
          <div>Contact US</div>
          <div>Phone:+91 7025047555</div>
          <div>E-Mail:edu@gmail.com</div>
        </div>
        <p class="font-italic text-muted mb-0">
          &copy; Copyrights education.com All rights reserved.
        </p>
      </div>
    </footer>
      </div>
</body>
        </>
     );
}

export default Service;