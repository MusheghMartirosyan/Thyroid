import './App.css';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import ThyroidCarousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import ProductCategory from './components/ProductCategory/ProductCategory';

function App() {
  return (
    <div className="App">
      <Header />
      <ThyroidCarousel />
      <ProductCategory />
      <Banner />
      <ProductCategory />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
