import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";

const CardGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  //   console.log(products);

  return (
    <Container>
      <Typography>CARDS & GRİD</Typography>

      {/* spacing={2}=card lar arası boşluk */}
      <Grid container spacing={2}>
        {products.map((a) => {
          return (
            <Grid item xs={6} md={4} key={a.id}>
              <Card sx={{ maxWidth: 400, height: 450 }}>
                <CardMedia
                  sx={{ height: 200, width: 350 }}
                  image={a.images[0]}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {a.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {a.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="small">
                    Share
                  </Button>
                  <Button variant="contained" color="error" size="small">
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardGrid;
