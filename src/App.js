import React, { useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  CssBaseline,
  Container,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Paper,
  TextField,
  Snackbar,
  Alert,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,

} from "@mui/material";

import { useTheme, useMediaQuery } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import Slider from "react-slick";
import { motion } from "framer-motion";
import { grey } from "@mui/material/colors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//contact
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";


//footer
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";


// -------------------- THEME --------------------
const theme = createTheme({
  palette: {
    primary: { main: "#00A86B" }, // Corporate Green
    secondary: { main: "#102A43" }, // Deep Navy
    background: { default: "#F9FAFB" },
  },
  typography: {
    fontFamily: "'Manrope', 'Inter', 'Poppins', sans-serif",
    h3: { fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1.2 },
    h4: { fontWeight: 700, color: "#102A43" },
    h6: { fontWeight: 500, color: "#333" },
    body1: { fontWeight: 400, lineHeight: 1.7, color: "#4A4A4A" },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "1rem",
      letterSpacing: "0.3px",
    },
  },
});

// -------------------- NAVBAR --------------------
const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const links = ["Home", "Services", "Clients", "Gallery", "Testimonials", "Contact"];
  const links = ["Home", "Services", "Clients", "Gallery", "Contact"];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) {
      window.location.hash = id;
      return;
    }

    // Compute offset so the section isn't hidden behind the fixed AppBar.
    // Use an estimated AppBar height (can be adjusted) or measure the toolbar if present.
    const toolbar = document.querySelector('.MuiToolbar-root');
    const appBarHeight = toolbar ? toolbar.offsetHeight : 72; // fallback to 72px

    const top = window.pageYOffset + el.getBoundingClientRect().top - appBarHeight - 8; // small extra gap

    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 3px 20px rgba(0,0,0,0.08)",
          color: theme.palette.secondary.main,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 8 } }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, letterSpacing: "-0.3px", color: theme.palette.primary.main }}
          >
            Orbit Power Engineering
          </Typography>

          {/* Desktop links */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {links.map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.toLowerCase());
                }}
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 500,
                  mx: 1.5,
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon sx={{ color: theme.palette.secondary.main }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation" onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
          <List>
            <ListItemButton onClick={() => { scrollToId('home'); setOpen(false); }}>
              <ListItemText primary="Orbit Power Engineering" />
            </ListItemButton>
          </List>
          <Divider />
          <List>
            {links.map((item) => (
              <ListItemButton key={item} onClick={() => { scrollToId(item.toLowerCase()); setOpen(false); }}>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

// -------------------- HERO --------------------
const Hero = () => (
  <Box
    id="home"
    sx={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background:
        "linear-gradient(to right, rgba(0,168,107,0.9), rgba(16,42,67,0.85)), url('https://images.unsplash.com/photo-1581090700227-1e37b190418e') center/cover no-repeat",
      color: "white",
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h3" gutterBottom>
        Powering the Future with Engineering Excellence
      </Typography>
      <Typography variant="h6" sx={{ opacity: 0.9 }}>
        Design • Construction • Innovation
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 4, px: 6, py: 1.5, borderRadius: 3 }}
        onClick={() => {
          const el = document.getElementById("contact");
          if (el && el.scrollIntoView) el.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Learn more — scroll to contact"
      >
        Learn More
      </Button>
    </motion.div>
  </Box>
);

// -------------------- SERVICES --------------------
const Services = () => {
  const sliderRef = useRef(null);
  const services = [
    {
      img: "/images/design_engineering.jpg",
      title: "Design Engineering",
      desc: "Innovative electrical, civil, and mechanical design solutions for the future.",
    },
    {
      img: "/images/construction.webp",
      title: "Construction",
      desc: "Safe, efficient, and quality-driven construction.",
    },
    {
      img: "/images/procurement.webp",
      title: "Procurement & Supply",
      desc: "Global sourcing and logistics solutions for critical engineering materials.",
    },
    {
      img: "/images/commissioning.webp",
      title: "Commissioning & Maintenance",
      desc: "Comprehensive lifecycle support for high-performance systems.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box id="services" sx={{ py: 10, bgcolor: grey[100] }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Core Services
        </Typography>
        <Box position="relative">
          <IconButton
            onClick={() => sliderRef.current.slickPrev()}
            sx={navBtnStyle("left")}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={() => sliderRef.current.slickNext()}
            sx={navBtnStyle("right")}
          >
            <ArrowForwardIos />
          </IconButton>

          <Slider ref={sliderRef} {...settings}>
            {services.map((srv, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Box sx={{ px: 2 }}>
                  <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
                    <CardMedia component="img" height="220" image={srv.img} alt={srv.title} />
                    <CardContent>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {srv.title}
                      </Typography>
                      <Typography variant="body1">{srv.desc}</Typography>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

// Helper for nav buttons
const navBtnStyle = (side) => ({
  position: "absolute",
  top: "40%",
  [side]: "-30px",
  zIndex: 2,
  bgcolor: "white",
  boxShadow: 2,
  "&:hover": { bgcolor: grey[200] },
});

// -------------------- GALLERY --------------------
const Gallery = () => {
  const sliderRef = useRef(null);
  const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.webp",
    "/images/gallery/6.avif",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box id="gallery" sx={{ py: 10 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Photo Gallery
        </Typography>
        <Box position="relative">
          <IconButton onClick={() => sliderRef.current.slickPrev()} sx={navBtnStyle("left")}>
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={() => sliderRef.current.slickNext()} sx={navBtnStyle("right")}>
            <ArrowForwardIos />
          </IconButton>

          <Slider ref={sliderRef} {...settings}>
            {images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Box sx={{ px: 2 }}>
                  <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
                    <CardMedia component="img" height="250" image={img} alt={`Gallery ${i}`} />
                  </Card>
                </Box>
              </motion.div>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

const Clients = () => (
  <Box id="clients" sx={{ py: 10, bgcolor: "#E8F5E9" }}>
    <Container>
      <Typography variant="h4" align="center" color="secondary" gutterBottom>
        Our Clients
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
        {[
          "/images/logo/l1.webp",
          "/images/logo/l2.svg",
          "/images/logo/l3.jpg",
          "/images/logo/l4.jpg",
          "/images/logo/l5.png",
          "/images/logo/l6.webp",
          "/images/logo/l7.png",
        ].map((logo, i) => (
          <Grid item key={i}>
            <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
              <img src={logo} alt="client logo" width={120} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

// const Testimonials = () => (
//   <Box id="testimonials" sx={{ py: 10, bgcolor: grey[100] }}>
//     <Container>
//       <Typography variant="h4" align="center" gutterBottom color="secondary">
//         Client Testimonials
//       </Typography>
//       <Grid container spacing={4} sx={{ mt: 3 }}>
//         {["certificate1.png", "certificate2.png"].map((doc, i) => (
//           <Grid item xs={12} md={6} key={i}>
//             <Paper sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
//               <img src="logo512.png" alt="testimonial" width="100%" />
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   </Box>
// );

// -------------------- CONTACT --------------------




const Contact = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const [submitted, setSubmitted] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could send the form data to an API
    setSubmitted(true);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (_, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <>
    <Box id="contact"
      sx={{
        backgroundColor: "background.default",
        py: 8,
        px: { xs: 2, md: 6 },
        display: "flex",
        flexDirection: isSmall ? "column" : "row",
        justifyContent: "center",
        alignItems: "stretch",
        gap: 4,
      }}
    >
      {/* 1️⃣ LEFT — Get in Touch Section */}
      <Box sx={{ flex: 1, minWidth: 300 }}>
        <Typography
          variant="overline"
          color="primary"
          fontWeight={700}
          letterSpacing={1}
        >
          CONTACT US
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mt: 1,
            mb: 2,
            fontWeight: 700,
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          Get in Touch With Us
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          We’d love to hear from you! Whether you have a question about our
          services, need help, or just want to say hello — our team is ready to
          assist you.
        </Typography>

        {/* Contact Info */}
        <Box display="flex" alignItems="center" mb={3}>
          <IconButton
            sx={{
              mr: 2,
              bgcolor: "primary.main",
              color: "#fff",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            <LocationOnIcon />
          </IconButton>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Our Location
            </Typography>
            <Typography variant="body2" color="text.secondary">
              gomtinagar, lucknow, uttarpradesh, india
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" mb={3}>
          <IconButton
            sx={{
              mr: 2,
              bgcolor: "primary.main",
              color: "#fff",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            <PhoneIcon />
          </IconButton>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Phone Number
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +91 8115108051
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton
            sx={{
              mr: 2,
              bgcolor: "primary.main",
              color: "#fff",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            <EmailIcon />
          </IconButton>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Email Address
            </Typography>
            <Typography variant="body2" color="text.secondary">
              orbitenginer@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 2️⃣ MIDDLE — Contact Form */}
      <Paper
        elevation={5}
        sx={{
          flex: 1,
          minWidth: 320,
          borderRadius: 3,
          p: { xs: 3, sm: 4 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          color="primary"
          fontWeight={700}
          sx={{ mb: 3 }}
        >
          Send us a message
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Your Email"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Your Phone"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Your Message"
            fullWidth
            multiline
            rows={5}
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.4,
              fontWeight: 600,
            }}
          >
            Send Message
          </Button>
          {submitted && (
            <Typography variant="body2" color="primary" sx={{ mt: 2 }}>
              Thanks — we'll contact you shortly.
            </Typography>
          )}
        </form>
      </Paper>

      {/* 3️⃣ RIGHT — Google Map */}
      {/* <Paper
        elevation={4}
        sx={{
          flex: 1,
          minWidth: 300,
          borderRadius: 3,
          overflow: "hidden",
          height: isSmall ? 300 : "auto",
        }}
      >
        <iframe
          title="Google Map - Gomtinagar, Lucknow"
          src="https://maps.google.com/maps?q=Gomtinagar%20Lucknow%20Uttar%20Pradesh%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Paper> */}
    </Box>
    <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
        Thanks — we'll contact you shortly.
      </Alert>
    </Snackbar>
    </>
  );
};
// -------------------- FOOTER --------------------

//final footer

const Footer = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #0b0c2a 0%, #06061a 100%)",
        color: "#fff",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        mt: 8,
      }}
    >
      {/* Main Footer */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: { xs: 4, md: 5 } }}>
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-between"
          direction={isSmall ? "column" : "row"}
        >
          {/* LEFT SECTION: Company Info */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{
                mb: 1,
                color: "primary.main",
                letterSpacing: 0.5,
              }}
            >
              Orbit Engineering
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.75)",
                mb: 2,
                lineHeight: 1.7,
                maxWidth: 360,
              }}
            >
              Empowering innovation through technology. We build scalable,
              secure, and future-ready digital solutions that transform
              businesses and accelerate growth.
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map(
                (Icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      "&:hover": {
                        bgcolor: "primary.main",
                        transform: "translateY(-2px)",
                        transition: "all 0.3s ease",
                      },
                      width: 38,
                      height: 38,
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                )
              )}
            </Box>
          </Grid>

          {/* RIGHT SECTION: Contact Info + Map Side by Side */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: isSmall ? "column" : "row",
                alignItems: "stretch",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              {/* Contact Info */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1.5,
                    fontWeight: 600,
                    color: "primary.main",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  Contact Us
                </Typography>

                <Box display="flex" alignItems="center" mb={1.2}>
                  <LocationOnIcon sx={{ mr: 1, color: "primary.main" }} />
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    Gomtinagar, Lucknow, Uttar Pradesh, India
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" mb={1.2}>
                  <PhoneIcon sx={{ mr: 1, color: "primary.main" }} />
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    +91 8115108051
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center">
                  <EmailIcon sx={{ mr: 1, color: "primary.main" }} />
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    orbitenginer@gmail.com
                  </Typography>
                </Box>
              </Box>

              {/* Map Box */}
              <Box
                sx={{
                  flex: 1.2,
                  borderRadius: 3,
                  overflow: "hidden",
                  height: isSmall ? 200 : 160,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 6px 16px rgba(0,0,0,0.6)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <iframe
                  title="Company Map - Gomtinagar, Lucknow"
                  src="https://maps.google.com/maps?q=Gomtinagar%20Lucknow%20Uttar%20Pradesh%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Divider */}
      <Divider sx={{ bgcolor: "rgba(255,255,255,0.15)" }} />

      {/* Bottom Bar */}
      <Box
        sx={{
          textAlign: "center",
          py: 2,
          backgroundColor: "#06061a",
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.85rem",
          letterSpacing: 0.3,
        }}
      >
        © 2025 | Orbit Engineering | All rights reserved.
      </Box>
    </Box>
  );
};
// -------------------- APP --------------------
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <Hero />
    <Services />
    <Gallery />
    <Clients/>
    {/* <Testimonials/> */}
    <Contact />
    <Footer />
  </ThemeProvider>
);

export default App;
