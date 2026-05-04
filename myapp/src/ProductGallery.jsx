import { useState, useEffect } from "react";

function ProductGallery() {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

 
  const nextProducts = () => {
    if (startIndex + 4 < products.length) {
      setStartIndex(startIndex + 4);
    }
  };

  const prevProducts = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex(startIndex - 4);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Product Gallery</h2>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {products.slice(startIndex, startIndex + 4).map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "150px", height: "150px" }}
            />
            <p style={{ width: "150px" }}>{item.title}</p>
          </div>
        ))}
      </div>

      <br />

      <button onClick={prevProducts}>Prev</button>
      <button onClick={nextProducts} style={{ marginLeft: "10px" }}>
        Next
      </button>
    </div>
  );
}

export default ProductGallery;