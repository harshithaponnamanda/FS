// Reusable card component – receives data and a function through props
function FoodCard({ item, addToCart }) {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p className="category">{item.category}</p>
      <p className="price">₹{item.price}</p>
      <button className="btn" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;
