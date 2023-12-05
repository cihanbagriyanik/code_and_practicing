import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const TypoButton = () => {
  return (
    <div>
      <Container>
        {/* maxWidth="md" width en fazla md büyüklükte olsun.  gutterBottom={true}
      alttan margin. component attribute ü  sadece console da etkilidir , görüntü yine variant neyse odur*/}
        <Typography
          variant="h1"
          component="h3"
          align="center"
          gutterBottom
          color="error"
          sx={{ background: "#eee", mt: 4, border: "1px solid red" }}
        >
          Typography Container Box Button
        </Typography>
        <Typography variant="button">Lorem ipsum dolor sit amet.</Typography>
        <br /> <br />
        {/* body1: p etiketidir,body1=16px daha büyük fs ,body2=14px daha küçük font lu.  button=span etiketidir+büyük harf */}
        {/* body1=16px */}
        <Typography variant="body1">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum et expedita, eveniet dolor voluptatibus
          corrupti autem quam iure nesciunt totam. Temporibus veritatis
          accusantium dignissimos ad id sapiente quae dolorem possimus?{" "}
        </Typography>
        <br />
        {/* body2=14px */}
        <Typography variant="body2">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum et expedita, eveniet dolor voluptatibus
          corrupti autem quam iure nesciunt totam. Temporibus veritatis
          accusantium dignissimos ad id sapiente quae dolorem possimus?{" "}
        </Typography>
      </Container>

      <Box
        sx={{ display: "flex", flexDirection: "column", marginTop: 4, gap: 2 }}
      >
        <Button variant="contained" color="error" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button
          variant="outlined"
          color="success"
          sx={{ textTransform: "lowercase" }}
          endIcon={<DeleteIcon />}
        >
          delete
        </Button>
      </Box>
    </div>
  );
};

export default TypoButton;
