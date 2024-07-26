import Product from "./Product";

const Products = [
  {
    id: 1,
    name: "cup",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1680543345131-d8c941c445d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyNTV8fHxlbnwwfHx8fHw%3D",
    price: "0.01",
  },
  {
    id: 2,
    name: "chair",
    urlImage:
      "https://images.unsplash.com/photo-1718887240077-2a189281ba27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyNDl8fHxlbnwwfHx8fHw%3D",
    price: "0.01",
  },
  {
    id: 3,
    name: "disk",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1719611418530-353ffc0e92ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOTN8fHxlbnwwfHx8fHw%3D",
    price: "10.00",
  },
  {
    id: 4,
    name: "kitchen",
    urlImage:
      "https://images.unsplash.com/photo-1718932441485-749b3f7ce6dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxODJ8fHxlbnwwfHx8fHw%3D",
    price: "15.00",
  },
  {
    id: 5,
    name: "cup",
    urlImage:
      "https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxNjN8fHxlbnwwfHx8fHw%3D",
    price: "8.00",
  },
  {
    id: 6,
    name: "armajo",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1718548383516-853dcdda7e58?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    price: "21.00",
  },
  {
    id: 7,
    name: "fridges",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1718198502177-a9533e9c92d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMTd8fHxlbnwwfHx8fHw%3D",
    price: "110.00",
  },
];

function ProductsF() {
  return (
    <div className="grid">
      {Products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsF;
