import React from 'react'
import { useGetSingleProductQuery } from '../services/Users';

const SingleProduct = () => {
  console.log(useGetSingleProductQuery(),"single product");
  const {data,isLoading,isError}= useGetSingleProductQuery();
  console.log(data,"dataaa");
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct