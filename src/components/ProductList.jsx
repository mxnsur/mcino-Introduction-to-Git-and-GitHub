import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const plants = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 25,
    category: 'Tropical Plants',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6',
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 20,
    category: 'Tropical Plants',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e8b0d',
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: 18,
    category: 'Tropical Plants',
    image: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d',
  },
  {
    id: 4,
    name: 'Aloe Vera',
    price: 15,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
  },
  {
    id: 5,
    name: 'Jade Plant',
    price: 17,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115',
  },
  {
    id: 6,
    name: 'Echeveria',
    price: 14,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  },
  {
    id: 7,
    name: 'Orchid',
    price: 30,
    category: 'Flowering Plants',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    id: 8,
    name: 'Rose Plant',
    price: 28,
    category: 'Flowering Plants',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
  },
  {
    id: 9,
    name: 'Lavender',
    price: 22,
    category: 'Flowering Plants',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
  }
];

const ProductList = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const categories = [
    'Tropical Plants',
    'Succulents',
    'Flowering Plants'
  ];

  return (
    <div>
      <div className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart">
            Cart ({cartItems.length})
          </a>
        </div>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h2 style={{ padding: '20px' }}>
            {category}
          </h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const addedToCart = cartItems.find(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      disabled={addedToCart}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
