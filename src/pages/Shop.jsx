import React, {useState} from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';  
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  
  const handleFilter = e => {
    const filterValue = e.target.value;
    if(filterValue === 'jackets'){
      const filteredProducts = products.filter(item => item.category === 'jackets')
      setProductsData(filteredProducts);
    }
    if(filterValue === 'dresses'){
      const filteredProducts = products.filter(item => item.category === 'dresses')
      setProductsData(filteredProducts);
    }
    if(filterValue === 'sweater'){
      const filteredProducts = products.filter(item => item.category === 'sweater')
      setProductsData(filteredProducts);
    }
    if(filterValue === 'shoes'){
      const filteredProducts = products.filter(item => item.category === 'shoes')
      setProductsData(filteredProducts);
    }
    if(filterValue === 'skirt'){
      const filteredProducts = products.filter(item => item.category === 'skirt')
      setProductsData(filteredProducts);
    }
  }
  const handleSearch = e => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item=> item.productName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    setProductsData(searchedProducts);
  }
  return (
    <Helmet title='shop'>
      <CommonSection title='Products'>
          <section>
            <Container>
              <Row>
                <Col lg="3" md="6">
                  <div className="filter__widget">
                    <select onChange={handleFilter}>
                      <option>Filter by category</option>
                      <option value="jackets">Jackets</option>
                      <option value="sweater">Sweater</option>
                      <option value="dresses">Dresses</option>
                      <option value="skirt">Skirt</option>
                      <option value="shoes">shoes</option>
                    </select>
                  </div>
                </Col>
                <Col lg="3" md="6" className='text-end'>
                <div className="filter__widget">
                    <select>
                      <option>Sort By</option>
                      <option value="Ascending">Ascending</option>
                      <option value="descending">Descending</option>
                    </select>
                  </div>
                </Col>
                <Col lg="3" md="12">
                  <div className="search__box">
                    <input type="text" placeholder='Search ...' onChange={handleSearch}/>
                    <span><i className="ri-search-line"></i></span>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className='pt-0'>
            <Container>
              <Row>
                {
                  productsData.length === 0 
                  ? <h1 className='text-center fs-4'>Products are not found!</h1>
                  : <ProductsList data={productsData}/> 
                }
              </Row>
            </Container>
          </section>
      </CommonSection>
    </Helmet>
  )
}

export default Shop