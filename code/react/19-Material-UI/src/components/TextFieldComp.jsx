import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const TextFieldComp = () => {
  const [show, setShow] = useState(false);
  let error1 = false;

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" color="error">
        {" "}
        TEXT-FIELD (input)
      </Typography>

      <Typography>
        <Box sx={{ marginTop: 4 }}>
          {/* inputa tıklandığında defaultta (variant="outlined") label, input outline çizgisinde gelir, variant=filled diyerek label ı input alanında tutabiliriz */}
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            // {/* margin="dense"=  yukaridan az bir margin verir */}
            // margin="dense"

            defaultValue="Email giriniz"
            required
          />

          {/* variant="filled"=required yazısı kutunun border ın içinde */}
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            required
            defaultValue="Hello World"
          />

          <TextField
            sx={{ mt: 4 }}
            fullWidth
            error={error1}
            id="password"
            placeholder="password giriniz"
            helperText={error1 && "yanlis girdiniz"}
            type="password"
          />

          <TextField
            sx={{ mt: 4 }}
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <FormControl sx={{ m: 1, width: "25ch", mt: 4 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              type={show ? "text" : "password"}
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button fullWidth variant="contained" color="error" sx={{ mt: 4 }}>
            SUBMIT
            <Avatar
              sx={{ margin: 4 }}
              alt="Remy Sharp"
              src="https://media.istockphoto.com/id/1278564529/tr/foto%C4%9Fraf/mavi-renk-arka-plan-izole-ye%C5%9Fil-g%C3%B6mlek-giyen-esmer-k%C4%B1sa-sa%C3%A7l%C4%B1-sevimli-g%C3%BCl%C3%BCmseyen-g%C3%BCzel-k%C4%B1z.jpg?s=612x612&w=0&k=20&c=qMtjAb1sXxeqOgUHYjWskspY58UyahQsyeu7ZPVgtUQ="
            />
          </Button>
        </Box>
      </Typography>
    </Container>
  );
};

export default TextFieldComp;
