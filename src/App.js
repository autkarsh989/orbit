// import React, { useRef } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   CssBaseline,
//   Container,
//   Card,
//   CardMedia,
//   CardContent,
//   Grid,
//   Paper,
//   TextField,
//   IconButton,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import { grey } from "@mui/material/colors";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // const theme = createTheme({
// //   palette: {
// //     primary: { main: "#00A86B" }, // Green brand color
// //     secondary: { main: "#102A43" }, // Deep navy
// //     background: { default: "#F9FAFB" },
// //   },
// //   typography: {
// //     fontFamily: "Poppins, sans-serif",
// //     h4: { fontWeight: 700 },
// //     h6: { fontWeight: 500 },
// //   },
// // });

// const theme = createTheme({
//   palette: {
//     primary: { main: "#00A86B" }, // Corporate Green
//     secondary: { main: "#102A43" }, // Deep Navy
//     background: { default: "#F9FAFB" },
//   },
//   typography: {
//     fontFamily: "'Manrope', 'Inter', 'Poppins', sans-serif",
//     h3: {
//       fontWeight: 700,
//       letterSpacing: "-0.5px",
//       lineHeight: 1.2,
//     },
//     h4: {
//       fontWeight: 700,
//       letterSpacing: "0px",
//       color: "#102A43",
//     },
//     h5: {
//       fontWeight: 600,
//       color: "#00A86B",
//     },
//     h6: {
//       fontWeight: 500,
//       color: "#333",
//     },
//     body1: {
//       fontWeight: 400,
//       lineHeight: 1.7,
//       color: "#4A4A4A",
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//       fontSize: "1rem",
//       letterSpacing: "0.3px",
//     },
//   },
// });


// const Navbar = () => (
//   <AppBar
//     position="fixed"
//     sx={{
//       backgroundColor: "rgba(255,255,255,0.95)",
//       backdropFilter: "blur(12px)",
//       boxShadow: "0 3px 20px rgba(0,0,0,0.1)",
//       color: theme.palette.secondary.main,
//     }}
//   >
//     <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 8 } }}>
//       <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: "-0.3px", color: theme.palette.primary.main }}>

//         Orbit Power Engineering
//       </Typography>
//       <Box>
//         {["Home", "Services", "Clients", "Gallery", "Testimonials", "Contact"].map((item) => (
//           <Button
//             key={item}
//             href={`#${item.toLowerCase()}`}
//              sx={{
//               color: theme.palette.secondary.main,
//               fontWeight: 500,
//               letterSpacing: "0.3px",
//               textTransform: "none",
//                mx: 1,
//               }}
//           >
//             {item}
//           </Button>
//         ))}
//       </Box>
//     </Toolbar>
//   </AppBar>
// );

// const Hero = () => (
//   <Box
//     id="home"
//     sx={{
//       height: "100vh",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       textAlign: "center",
//       background:
//         "linear-gradient(to right, rgba(0,168,107,0.9), rgba(16,42,67,0.85)), url('https://images.unsplash.com/photo-1581090700227-1e37b190418e') center/cover no-repeat",
//       color: "white",
//     }}
//   >
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, letterSpacing: "-0.5px" }}>
//   Powering the Future with Engineering Excellence
// </Typography>
//       <Typography variant="h6" sx={{ fontWeight: 400, letterSpacing: "0.5px" }}>
//   Design • Construction • Innovation
// </Typography>
//       <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
//         Learn More
//       </Button>
//     </motion.div>
//   </Box>
// );

// const Services = () => {
//   const sliderRef = useRef(null);
//   const services = [
//     {
//       img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
//       title: "Design Engineering",
//       desc: "Innovative electrical, civil, and mechanical design services for modern infrastructure.",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
//       title: "Construction",
//       desc: "Safe, efficient, and quality-driven construction for industrial and commercial projects.",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
//       title: "Procurement & Supply",
//       desc: "Reliable sourcing and delivery of global engineering and power products.",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
//       title: "Commissioning & Maintenance",
//       desc: "End-to-end lifecycle support for optimal asset performance.",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       { breakpoint: 960, settings: { slidesToShow: 2 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <Box id="services" sx={{ py: 10, bgcolor: grey[100] }}>
//       <Container>
//         <Typography
//   variant="h4"
//   align="center"
//   gutterBottom
//   sx={{
//     color: theme.palette.secondary.main,
//     fontWeight: 700,
//     letterSpacing: "-0.3px",
//   }}
// >

//           Core Services
//         </Typography>
//         <Box position="relative">
//           <IconButton
//             onClick={() => sliderRef.current.slickPrev()}
//             sx={{
//               position: "absolute",
//               top: "40%",
//               left: "-30px",
//               zIndex: 2,
//               bgcolor: "white",
//               boxShadow: 2,
//               "&:hover": { bgcolor: grey[200] },
//             }}
//           >
//             <ArrowBackIos />
//           </IconButton>
//           <IconButton
//             onClick={() => sliderRef.current.slickNext()}
//             sx={{
//               position: "absolute",
//               top: "40%",
//               right: "-30px",
//               zIndex: 2,
//               bgcolor: "white",
//               boxShadow: 2,
//               "&:hover": { bgcolor: grey[200] },
//             }}
//           >
//             <ArrowForwardIos />
//           </IconButton>

//           <Slider ref={sliderRef} {...settings}>
//             {services.map((srv, i) => (
//               <Box key={i} sx={{ px: 2 }}>
//                 <Card
//                   sx={{
//                     borderRadius: 3,
//                     overflow: "hidden",
//                     boxShadow: 4,
//                     "&:hover": { transform: "translateY(-5px)", transition: "0.3s" },
//                   }}
//                 >
//                   <CardMedia component="img" height="220" image={srv.img} alt={srv.title} />
//                   <CardContent>
//                     <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>

//                       {srv.title}
//                     </Typography>
//                     <Typography color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.6 }}>
// {srv.desc}</Typography>
//                   </CardContent>
//                 </Card>
//               </Box>
//             ))}
//           </Slider>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// const Gallery = () => {
//   const sliderRef = useRef(null);
//   const images = [
//     "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
//     "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
//     "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
//     "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
//     "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       { breakpoint: 960, settings: { slidesToShow: 2 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <Box id="gallery" sx={{ py: 10 }}>
//       <Container>
//         <Typography
//   variant="h4"
//   align="center"
//   gutterBottom
//   sx={{
//     color: theme.palette.secondary.main,
//     fontWeight: 700,
//     letterSpacing: "-0.3px",
//   }}
// >

//           Photo Gallery
//         </Typography>
//         <Box position="relative">
//           <IconButton
//             onClick={() => sliderRef.current.slickPrev()}
//             sx={{
//               position: "absolute",
//               top: "40%",
//               left: "-30px",
//               zIndex: 2,
//               bgcolor: "white",
//               boxShadow: 2,
//               "&:hover": { bgcolor: grey[200] },
//             }}
//           >
//             <ArrowBackIos />
//           </IconButton>
//           <IconButton
//             onClick={() => sliderRef.current.slickNext()}
//             sx={{
//               position: "absolute",
//               top: "40%",
//               right: "-30px",
//               zIndex: 2,
//               bgcolor: "white",
//               boxShadow: 2,
//               "&:hover": { bgcolor: grey[200] },
//             }}
//           >
//             <ArrowForwardIos />
//           </IconButton>

//           <Slider ref={sliderRef} {...settings}>
//             {images.map((img, i) => (
//               <Box key={i} sx={{ px: 2 }}>
//                 <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
//                   <CardMedia component="img" height="250" image={img} alt={`Gallery ${i}`} />
//                 </Card>
//               </Box>
//             ))}
//           </Slider>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// // const Contact = () => (
// //   <Box
// //     id="contact"
// //     sx={{
// //       py: 10,
// //       background: "linear-gradient(135deg, #E8F5E9, #F5F5F5)",
// //     }}
// //   >
// //     <Container>
// //       <Typography variant="h4" align="center" color="secondary" gutterBottom>
// //         Contact Us
// //       </Typography>
// //       <Typography align="center" sx={{ mb: 4, color: grey[700] }}>
// //         We'd love to hear from you! Send us a message and our team will get back shortly.
// //       </Typography>

// //       <Paper
// //         elevation={4}
// //         sx={{
// //           p: 5,
// //           borderRadius: 4,
// //           maxWidth: 700,
// //           mx: "auto",
// //           background: "white",
// //           boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
// //         }}
// //       >
// //         <Grid container spacing={3}>
// //           <Grid item xs={12} sm={6}>
// //             <TextField label="Name" variant="outlined" fullWidth />
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <TextField label="Email" variant="outlined" fullWidth />
// //           </Grid>
// //           <Grid item xs={12}>
// //             <TextField label="Subject" variant="outlined" fullWidth />
// //           </Grid>
// //           <Grid item xs={12}>
// //             <TextField label="Message" multiline rows={4} variant="outlined" fullWidth />
// //           </Grid>
// //           <Grid item xs={12} textAlign="center">
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               size="large"
// //               sx={{
// //                 borderRadius: 3,
// //                 px: 5,
// //                 py: 1.5,
// //                 textTransform: "none",
// //                 fontSize: "1rem",
// //                 fontWeight: 600,
// //               }}
// //             >
// //               Send Message
// //             </Button>
// //           </Grid>
// //         </Grid>
// //       </Paper>
// //     </Container>
// //   </Box>
// // );


// const Contact = () => {
//   return (
//     <Container sx={{ py: 10 }}>
//       <Paper
//         elevation={6}
//         sx={{
//           p: 6,
//           borderRadius: 4,
//           background: "linear-gradient(135deg, #E8F5E9 0%, #F1F8E9 100%)",
//           boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Typography  variant="h4"   textAlign="center" gutterBottom  
//          sx={{ fontWeight: 700, color: "#1B5E20", letterSpacing: "-0.3px" }}
//         >

//           Get in Touch
//         </Typography>

//         <Grid container spacing={3} sx={{ mt: 2 }}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Full Name"
//               fullWidth
//               variant="outlined"
//               sx={{ background: "white", borderRadius: 2 }}
//             />
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Email Address"
//               fullWidth
//               variant="outlined"
//               sx={{ background: "white", borderRadius: 2 }}
//             />
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Phone Number"
//               fullWidth
//               variant="outlined"
//               sx={{ background: "white", borderRadius: 2 }}
//             />
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Company Name"
//               fullWidth
//               variant="outlined"
//               sx={{ background: "white", borderRadius: 2 }}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               label="Message"
//               multiline
//               rows={4}
//               fullWidth
//               variant="outlined"
//               sx={{ background: "white", borderRadius: 2 }}
//             />
//           </Grid>

//           <Grid item xs={12} textAlign="center">
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 px: 6,
//                 py: 1.5,
//                 backgroundColor: "#1B5E20",
//                 "&:hover": { backgroundColor: "#2E7D32" },
//                 borderRadius: 3,
//               }}
//             >
//               Submit Message
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// const Footer = () => (
//   <Box sx={{ bgcolor: "#102A43", color: "white", textAlign: "center", py: 3 }}>
//     <Typography variant="body2">
//       © {new Date().getFullYear()} Orbit Power Engineering | All Rights Reserved
//     </Typography>
//   </Box>
// );

// const App = () => (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <Navbar />
//     <Hero />
//     <Services />
//     <Gallery />
//     <Contact />
//     <Footer />
//   </ThemeProvider>
// );

// export default App;






//final
import React, { useRef } from "react";
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
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { grey } from "@mui/material/colors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
const Navbar = () => (
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
      <Box>
        {["Home", "Services", "Clients", "Gallery", "Testimonials", "Contact"].map((item) => (
          <Button
            key={item}
            href={`#${item.toLowerCase()}`}
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
    </Toolbar>
  </AppBar>
);

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
      img: "https://images.unsplash.com/photo-1581091215367-59ab6b31f6b2",
      title: "Design Engineering",
      desc: "Innovative electrical, civil, and mechanical design solutions for the future.",
    },
    {
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      title: "Construction",
      desc: "Safe, efficient, and quality-driven construction for industries and infrastructure.",
    },
    {
      img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
      title: "Procurement & Supply",
      desc: "Global sourcing and logistics solutions for critical engineering materials.",
    },
    {
      img: "https://images.unsplash.com/photo-1567789884554-0b844b597180",
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
    "https://images.unsplash.com/photo-1603791452906-b6b5d8e3d37a",
    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
    "https://images.unsplash.com/photo-1567789884554-0b844b597180",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
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
          "/logos/adani.png",
          "/logos/tata.png",
          "/logos/siemens.png",
          "/logos/lt.png",
          "/logos/reliance.png",
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

const Testimonials = () => (
  <Box id="testimonials" sx={{ py: 10, bgcolor: grey[100] }}>
    <Container>
      <Typography variant="h4" align="center" gutterBottom color="secondary">
        Client Testimonials
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {["certificate1.png", "certificate2.png"].map((doc, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Paper sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
              <img src={`/docs/${doc}`} alt="testimonial" width="100%" />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

// -------------------- CONTACT --------------------
const Contact = () => (
  <Box id="contact" sx={{ py: 10, backgroundColor: "#F8FFF9" }}>
    <Container>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Get in Touch
        </Typography>
        <Typography align="center" sx={{ mb: 6, color: grey[700] }}>
          We’d love to hear from you. Let’s power up your next project together.
        </Typography>
      </motion.div>

      <Paper
        elevation={8}
        sx={{
          p: 6,
          borderRadius: 4,
          background: "white",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Grid container spacing={3}>
          {[
            { label: "Full Name" },
            { label: "Email Address" },
            { label: "Phone Number" },
            { label: "Company Name" },
          ].map((field, i) => (
            <Grid key={i} item xs={12} md={6}>
              <TextField
                label={field.label}
                fullWidth
                variant="outlined"
                sx={{ background: "#F9FAFB", borderRadius: 2 }}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              sx={{ background: "#F9FAFB", borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                backgroundColor: "#00A86B",
                "&:hover": { backgroundColor: "#02935F" },
                borderRadius: 3,
                mt: 2,
              }}
            >
              Submit Message
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  </Box>
);

// -------------------- FOOTER --------------------
const Footer = () => (
  <Box sx={{ bgcolor: "#102A43", color: "white", textAlign: "center", py: 3 }}>
    <Typography variant="body2">
      © {new Date().getFullYear()} Orbit Power Engineering | All Rights Reserved
    </Typography>
  </Box>
);

// -------------------- APP --------------------
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <Hero />
    <Services />
    <Gallery />
    <Clients/>
    <Testimonials/>
    <Contact />
    <Footer />
  </ThemeProvider>
);

export default App;
