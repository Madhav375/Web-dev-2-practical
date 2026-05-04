import { useState, useEffect } from "react";

function App() {
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

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {products.slice(startIndex, startIndex + 4).map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "150px", height: "150px" }}
            />
          </div>
        ))}
      </div>

      <br />

      <button onClick={prevProducts}>Prev</button>
      <br></br>
      <button onClick={nextProducts} >
        Next
      </button>
    </div>
  );
}

export default App;
