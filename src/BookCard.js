const BookCard = ({ book }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://finalexambackend-3yei.onrender.com/api/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("network response was not ok");
      }
      window.location.reload();
    } catch (error) {
      console.error("Error: ", error.message);
    }
  };

  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt={book.title}
        height="200"
      />
      <div className="desc">
        <h2>
          <a href={`/show-book/${book._id}`}>{book.title}</a>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
      <div className="button-container">
        <button onClick={() => handleDelete(book._id)}>X</button>
      </div>
    </div>
  );
};
export default BookCard;
