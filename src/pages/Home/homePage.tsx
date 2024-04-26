import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./homePage.css";
import picture1 from "../../assets/images/home/picture1.jpg";
import picture2 from "../../assets/images/home/picture2.jpg";
import picture3 from "../../assets/images/home/picture3.jpg";
import room from "../../assets/images/home/roomLarge.jpg";
import food from "../../assets/images/home/food.jpg";
import havuz from "../../assets/images/home/havuz.jpg";
import Box from "@mui/material/Box";

import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

interface Item {
  description: string;
  label: string;
}

const steps: Item[] = [
  {
    description: picture1,
    label: "Resim 1",
  },
  {
    description: picture2,
    label: "Resim 2",
  },
  {
    description: picture3,
    label: "Resim 3",
  },
];

export default function homePage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: any) => prevActiveStep - 1);
  };
  useEffect(() => {
    const element = document.getElementById("myElement");
    if (element) {
      element.style.width = "600px";
      element.style.height = "200px";
      element.style.position = "center";
    }
  }, []);
  return (
    <>
      <Box sx={{ maxWidth: 2000, flexGrow: 1 }} className="cont">
        <Box sx={{ maxWidth: 2000, flexGrow: 1 }} className="container">
          <Box sx={{ maxWidth: 400, flexGrow: 1 }} className="content">
            <img
              id="myElement"
              alt="Description"
              src={steps[activeStep].description}
              className="image"
            />
          </Box>
        </Box>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              variant="outlined"
              color="warning"
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Sonraki
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              variant="outlined"
              color="warning"
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Önceki
            </Button>
          }
        />
      </Box>
      <Box className="container">
        <Box
          className="content"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography mt={2} mb={2} variant="h5" gutterBottom>
            REZERVASYON
          </Typography>
          <TextField
            required
            id="standard-required"
            label="Giriş Tarihi"
            variant="standard"
          />
          <TextField
            required
            id="standard-required"
            label="Çıkış Tarihi"
            variant="standard"
          />
        </Box>
      </Box>

      <Box className="container">
        <Box
          className="content"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="standard-required"
            label="Yetişkin Sayısı"
            variant="standard"
          />
          <TextField
            required
            id="standard-required"
            label="Çocuk Sayısı"
            variant="standard"
          />
        </Box>
      </Box>
      <Box className="container">
        <Box className="content">
          <Button variant="contained" color="warning">
            Odaları LİSTELE
          </Button>
        </Box>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={3} style={{ marginLeft: "3px" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={room} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="warning">
                Share
              </Button>
              <Button size="small" color="warning">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={food} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="warning">
                Share
              </Button>
              <Button size="small" color="warning">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={havuz}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="warning">
                Share
              </Button>
              <Button size="small" color="warning">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
