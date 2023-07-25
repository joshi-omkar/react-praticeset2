const Gadgets = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div style={product.price > 50000 ? { border: "1px solid red" } : {}}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Gadgets;
