import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
// @mui
import { Container, Stack, Typography,Breadcrumbs } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import { fetchproduct } from 'src/servies';
import axios from 'axios';
import '../Paging.css';
import Pagination from "react-js-pagination";
import StarRatings from 'react-star-ratings';
// ----------------------------------------------------------------------



export default function ProductsPage() {
  const offset = 1;
  const [nutritional,setnutritional]=useState([]);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(false);
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://192.168.1.9:3000/nutritional/information?offset="+page
      );
      console.log(response.data.nutritional)
      setPosts(response.data.nutritional);
      setLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://192.168.1.9:3000/nutritional/information?offset="+page
      );
      console.log(response.data.nutritional)
      setPosts(response.data.nutritional);
      setLoading(false);
    };
    fetchData();
  }, [page]);
  

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  
  if(posts==false){
    return('로딩중')
  }
  return (
    <>
    
      <Helmet>
        <title> IMP: 상품 | Minimal UI </title>
      </Helmet>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        {/* <Breadcrumbs aria-label="breadcrumb">
  <StyledBreadcrumb
    component="a"
    href="#"
    label="Home"
    icon={<HomeIcon fontSize="small" />}
  />
  <StyledBreadcrumb component="a" href="#" label="Catalog" />
  <StyledBreadcrumb
    label="Accessories"
    deleteIcon={<ExpandMoreIcon />}
    onDelete={handleClick}
  />
</Breadcrumbs> */}
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>
    
        <ProductList products={posts} />
        <ProductCartWidget />
        <Pagination
        activePage={page}
        itemsCountPerPage={48}
        totalItemsCount={1000}
        pageRangeDisplayed={7}
        prevPageText={"‹"}
       nextPageText={"›"}
        onChange={handlePageChange}
      />
      </Container>
    </>
  );

}

