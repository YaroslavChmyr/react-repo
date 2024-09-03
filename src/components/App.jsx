import Product from "./Product/Product.jsx";
import BookList from "./BookList/BookList.jsx";
import UserMenu from "./HiUser/HiUser.jsx";

const favoriteBooks = [
  { id: 1, title: "The Last Kingdom" },
  { id: 2, title: "Beside Still Waters" },
  { id: 3, title: "The Dream of a Ridiculous Man" },
];
export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <UserMenu name="John Doe" />

      <Product
        name="Tacos With Lime"
        // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <h1>Favorites</h1>
      <BookList books={favoriteBooks} />
    </div>
  );
}
