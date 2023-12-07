import loadingGif from "../assets/loading.gif";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, getData } from "../features/haberSlice";

const News = () => {
  const dispatch = useDispatch();
  const { loading, haberler } = useSelector((state) => state.haberSlice);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={loadingGif} alt="" height="800px" />
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          flexWrap="wrap"
        >
          {haberler.map((a, index) => (
            <Card sx={{ maxWidth: 345, maxHeight: 600, m: 5 }} key={index}>
              <CardMedia component="img" image={a.urlToImage} height="250" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {a.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {a.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => dispatch(clear())}>
                  clear
                </Button>
                <Button size="small" href={a.url} target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
