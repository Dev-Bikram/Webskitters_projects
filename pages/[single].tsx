import { fetchProducts } from '@/axiosCall/productsAxiosCall';
import { useGetProducts, useGetSingleProducts } from '@/hooks/productsHooks';
import { Button, Card, CardContent, CardMedia } from '@mui/material';
// import { useParams } from 'next/navigation'
import { useRouter } from 'next/router';
import React from 'react'
import { useQuery } from 'react-query';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Link from 'next/link';

const Single = () => {


  const router = useRouter();
  const { single } = router.query;
  console.log(single);

  //      const {data, isLoading, error, isError} = useQuery({
  //         queryKey : ["singleproduct",{single}],
  //         queryFn : fetchProducts
  //     })
  //     return {data, isLoading, error, isError}
  // }
  //     

      const {data, isLoading, error} = useGetSingleProducts(Number(single))
console.log(data);

  return (
    <>
      <div className='container'>
        <Card style={{ padding: "5px", margin: "5px" }} >
          <CardMedia
            sx={{ height: 300}}
            image={data?.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {/* {products.title} */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
          <Link href={'/'} >Back</Link>

          </CardActions>
        </Card>


      </div>




    </>
  )
}

export default Single