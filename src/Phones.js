const Phones = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <>
          {product.name === "mobile" ? (
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ) : (
            <></>
          )}
        </>
      ))}
    </div>
  );
};

export default Phones;
