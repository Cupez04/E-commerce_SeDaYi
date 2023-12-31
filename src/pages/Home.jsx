import React, {useState, useEffect} from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/bannershop.png"
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import counterImg from "../assets/images/oferta.png"
import Clock from "../components/UI/Clock";
import { useSelector} from 'react-redux';
// import Notiflix from "notiflix";


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSlesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobilePorducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popular, setPopular] = useState([]);
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  const year = new Date().getFullYear();

  useEffect(() => {


  const filterProductsByCategory = (products, category) => {
    const rta = cartItems.map((item) => item.id);
    console.log(rta);
    return products.filter((item) => item.category === category && !rta.includes(item.id));
  };
  

  const filterProducto = filterProductsByCategory(products, "dresses");
  const filteredBestSales = filterProductsByCategory(products, "jackets");
  const filteredMobile = filterProductsByCategory(products, "sweater");
  const filteredWireless = filterProductsByCategory(products, "shoes");
  const filteredPopular = filterProductsByCategory(products, "skirt");

  setTrendingProducts(filterProducto);
  setBestSalesProducts(filteredBestSales);
  setMobilePorducts(filteredMobile);
  setWirelessProducts(filteredWireless);
  setPopular(filteredPopular);
  },[cartItems]);


  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Transform Your Style with Elegance</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas dignissimos autem consequatur quia esse iste ratione maxime impedit tenetur officiis.</p>
                <motion.button whileTap={{scale:1.2}}  className="buy__btn"><Link to="/shop">Shop Now</Link></motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
                <div className="hero__img">
                    <img src={heroImg} alt="" />
                </div>
            </Col>
          </Row>
        </Container>
      </section>
      { <Services/> }
        <section className="trending__products">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title">Trending Products</h2>
              </Col>
              <ProductsList data={trendingProducts}/>
            </Row>
          </Container>

        </section>
          <section className="best__sales">
            <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title">Best Sales</h2>
              </Col>
              <ProductsList data={bestSlesProducts} /> 
            </Row>
            </Container>
          </section>
          <section className="timer__count">
            <Container>
              <Row>
                <Col lg="6" md="12">
                  <div className="clock__top-content count-down">
                    <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                    <h3 className="text-white fs-5 mb-3">Big Surprise Soon!</h3>
                  </div>
                  <Clock/>
                  <motion.button whileTap={{scale: 1.2}} className="buy__btn store__btn">
                    <Link to='/shop'>Visit Store</Link>
                  </motion.button>
                </Col>
                
                <Col lg="6" md="12" className="text-end counter__end">
                  <img src={counterImg} alt="" />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="new__arrivals">
            <Container>
              <Row>
                <Col lg='12' className="text-center mb-5">
                  <h2 className="section__title">New Arrivals</h2>
                </Col>
                <ProductsList data={mobileProducts}/> 
                <ProductsList data={wirelessProducts}/> 
              </Row>
            </Container>
          </section>

          <section className="popular__category">
          <Container>
              <Row>
                <Col lg='12' className="text-center mb-5">
                  <h2 className="section__title">Popular in Category</h2>
                </Col>
                <ProductsList data={popular}/> 
              </Row>
            </Container>
          </section>
    </Helmet>
  );
};

export default Home;
