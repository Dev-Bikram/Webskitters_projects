import Wrapper from '@/Layout/wrapper'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Margin } from '@mui/icons-material';
import { useQuery } from 'react-query';
import { Container } from 'postcss';
import { useGetProducts } from '@/hooks/productsHooks';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
// import { redirect } from 'next/dist/server/api-utils';
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router';
import Link from 'next/link';






const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Index = () => {

    // const queryKey = " todos";

    // const fetchdata = async ()=>{
    //     const response = await fetch('https://fakestoreapi.com/products');
    //     return response.json();
    // }

    // const {data, isLoading,error}=useQuery({
    //     queryKey :['todos'],
    //     queryFn : fetchdata
    // })

    // if (isLoading){
    //     return <div>Loading.....</div>
    // }

    // console.log(data)

    // if (error){
    //     return <div>Error : {error.message}</div>
    // }
    // const router = useRouter()
    // const handleclick =(id:String | Number)=>{
    //     router.push (`/single/${id}`)
    // }
    



    interface Rating {
        rate: number
        count: number
      }

    interface Products {
        id: number
        title: string
        price: number
        description: string
        category: string
        image: string
        rating: Rating
      }

    const {data, isLoading, error} = useGetProducts()

    // if (isLoading){
    //     return <div>
    //         <Stack spacing={1}>
     
    //   <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

     
    //   <Skeleton variant="circular" width={40} height={40} />
    //   <Skeleton variant="rectangular" width={210} height={60} />
    //   <Skeleton variant="rounded" width={210} height={60} />
    // </Stack>
            
    //     </div>
    // }

  return (
    <>
    <Wrapper>

        <h1 style={{textAlign: "center"}}>
            Our Products
        </h1>

        
         

    {/* <div>
        
    <Grid container spacing={3} >   
   
      <ul>
        {data.map(todo =>{
           return <li key={todo.id}>
           <img src={todo.image} alt="Girl in a jacket" width="50" height="60"></img>
           </li>
        })}

      </ul>

      
     </Grid>
     
</div> */}

           
            {/* {data?.data.map(item =>{
                return <li key={item.id}>
                    <img src={item.image} alt="Girl in a jacket" width="50" height="60"></img>
                    
                </li>
            })}
             */}


     

<div >
    {isLoading? <div>
        <Grid container > 
        {/* <Grid item spacing={{md:12}} >  */}
            <Stack spacing={1}>
     
      <Skeleton variant="text" animation="wave"   sx={{ fontSize: '1rem' }} />

     
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>

    
    

    <Stack spacing={1}>
     
      <Skeleton variant="text" animation="wave"  sx={{ fontSize: '1rem' }} />

     
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>

    <Stack spacing={1}>
     
      <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' }} />

     
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>

    <Stack spacing={1}>
     
      <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' }} />

     
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
    {/* </Grid>  */}


    </Grid>     
        </div> :
    <Grid container  >   
   
      {data?.data.map((products,idx)=>(
        // <img key ={products.id} src={products.image} alt={products.title} width={100} />
        <Grid item md={3} key={idx} md={idx === 0 || idx === 1 ? 6 : 4}>
           
        <Card style={{padding:"5px", margin:"5px"}} >
      <CardMedia
        sx={{ height: 100 }}
        image={products.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {products.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href={`/${products?.id}`} >Learn More</Link>
      </CardActions>
    </Card>
   
    </Grid>
      ))}
      

</Grid>
}

    </div>

       
    



    </Wrapper>
    </>
  )
}

export default Index