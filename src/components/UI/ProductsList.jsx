import React from 'react';
import ProductsCard from './ProductsCard';

const ProductsList = ({data}) => {
  return (
    <>
    {
      data?.map((item, index) => (
        <ProductsCard item={item} key={index}/>
      ))
    }
    </>
  )
}

export default ProductsList;

//  {/* Mostrar el botón "Agregar al carrito" solo si el producto no ha sido agregado */
//  !item.addedToCart && (
//   <button onClick={() => onAddToCart(item.id)}>
//     Agregar al carrito
//   </button>
// )}