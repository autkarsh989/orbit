// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   Paper,
//   CssBaseline,
//   ThemeProvider,
//   createTheme,
//   TextField,
//   IconButton,
// } from "@mui/material";
// import { green, grey } from "@mui/material/colors";
// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import {
//   DesignServices,
//   Construction,
//   Inventory2,
//   ArrowForwardIos,
//   ArrowBackIosNew,
// } from "@mui/icons-material";

// const theme = createTheme({
//   palette: {
//     primary: { main: "#00A86B" },
//     secondary: { main: "#1E1E1E" },
//     background: { default: "#FAFAFA" },
//   },
//   typography: {
//     fontFamily: "Poppins, sans-serif",
//     h4: { fontWeight: 700 },
//     h6: { fontWeight: 600 },
//     body1: { lineHeight: 1.7 },
//   },
// });

// // --- NAVBAR ---
// const Navbar = () => (
//   <AppBar
//     position="fixed"
//     sx={{
//       backgroundColor: "rgba(255,255,255,0.9)",
//       backdropFilter: "blur(10px)",
//       color: "black",
//       boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//     }}
//   >
//     <Toolbar sx={{ justifyContent: "space-between" }}>
//       <Typography variant="h6" sx={{ fontWeight: 700, color: "#00A86B" }}>
//         Orbit Power Engineering
//       </Typography>
//       <Box>
//         {["Home", "Services", "Clients", "Gallery", "Testimonials", "Contact"].map(
//           (item) => (
//             <Button
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               sx={{
//                 mx: 1,
//                 color: "black",
//                 fontWeight: 500,
//                 "&:hover": { color: "#00A86B" },
//               }}
//             >
//               {item}
//             </Button>
//           )
//         )}
//       </Box>
//     </Toolbar>
//   </AppBar>
// );

// // --- HERO ---
// const Hero = () => (
//   <Box
//     id="home"
//     sx={{
//       height: "100vh",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background:
//         "linear-gradient(to right, rgba(0,168,107,0.9), rgba(27,31,59,0.8)), url('https://images.unsplash.com/photo-1568605114967-8130f3a36994') center/cover no-repeat",
//       color: "white",
//       textAlign: "center",
//     }}
//   >
//     <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
//       <Typography variant="h3" gutterBottom>
//         Powering the Future with Engineering Excellence
//       </Typography>
//       <Typography variant="h6" gutterBottom>
//         Design • Construction • Innovation
//       </Typography>
//       <Button
//         variant="contained"
//         size="large"
//         sx={{
//           mt: 3,
//           backgroundColor: "white",
//           color: "#00A86B",
//           fontWeight: 600,
//           "&:hover": { backgroundColor: "#00A86B", color: "white" },
//         }}
//       >
//         Learn More
//       </Button>
//     </motion.div>
//   </Box>
// );

// // --- SERVICES ---
// const Services = () => {
//   const serviceData = [
//     {
//       title: "Design Engineering",
//       desc: "Specialized electrical, mechanical, and civil engineering design for power plants, substations, and industrial complexes.",
//       icon: <DesignServices fontSize="large" color="primary" />,
//     },
//     {
//       title: "Construction & EPC",
//       desc: "Complete turnkey EPC execution with superior quality, safety compliance, and timely delivery.",
//       icon: <Construction fontSize="large" color="primary" />,
//     },
//     {
//       title: "Procurement & Supply",
//       desc: "Trusted sourcing of power equipment, transformers, switchgear, and control systems from global brands.",
//       icon: <Inventory2 fontSize="large" color="primary" />,
//     },
//   ];

//   return (
//     <Container id="services" sx={{ py: 10 }}>
//       <Typography variant="h4" align="center" color="secondary" gutterBottom>
//         Our Core Services
//       </Typography>
//       <Grid container spacing={4} sx={{ mt: 5 }}>
//         {serviceData.map((s, i) => (
//           <Grid item xs={12} md={4} key={i}>
//             <Card
//               component={motion.div}
//               whileHover={{ y: -8 }}
//               transition={{ duration: 0.3 }}
//               sx={{
//                 borderRadius: 4,
//                 p: 3,
//                 textAlign: "center",
//                 boxShadow: "0 6px 30px rgba(0,0,0,0.08)",
//               }}
//             >
//               <Box sx={{ mb: 2 }}>{s.icon}</Box>
//               <Typography variant="h6" color="primary" gutterBottom>
//                 {s.title}
//               </Typography>
//               <Typography color="text.secondary">{s.desc}</Typography>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// // --- CLIENTS ---
// const Clients = () => (
//   <Box id="clients" sx={{ py: 10, bgcolor: grey[100] }}>
//     <Container>
//       <Typography variant="h4" align="center" color="secondary" gutterBottom>
//         Our Clients
//       </Typography>
//       <Grid
//         container
//         spacing={3}
//         justifyContent="center"
//         alignItems="center"
//         sx={{ mt: 4 }}
//       >
//         {[
//           { logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Siemens-logo.svg", name: "Siemens" },
//           { logo: "https://upload.wikimedia.org/wikipedia/en/f/fc/Larsen_%26_Toubro_logo.svg", name: "L&T" },
//           { logo: "https://upload.wikimedia.org/wikipedia/en/4/4b/Adani_Group_Logo.svg", name: "Adani" },
//           { logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/Reliance_Industries_Logo.svg", name: "Reliance" },
//           { logo: "https://upload.wikimedia.org/wikipedia/en/2/24/Tata_logo.svg", name: "Tata Power" },
//         ].map((client, i) => (
//           <Grid item key={i}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 2,
//                 textAlign: "center",
//                 borderRadius: 3,
//                 width: 150,
//                 height: 100,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 style={{ maxWidth: "100%", maxHeight: 60 }}
//               />
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   </Box>
// );

// // --- GALLERY ---
// const Gallery = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
//     "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
//     "https://images.unsplash.com/photo-1505739773434-c0a0f4b7d6ea",
//     "https://images.unsplash.com/photo-1581093588401-22d1f9f2f7a5",
//     "https://images.unsplash.com/photo-1518770660439-4636190af475",
//     "https://images.unsplash.com/photo-1603565816060-2e1e3a122c60",
//   ];

//   const sliderRef = React.useRef(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     speed: 800,
//     autoplaySpeed: 3000,
//     responsive: [
//       { breakpoint: 900, settings: { slidesToShow: 2 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <Box id="gallery" sx={{ py: 10, position: "relative" }}>
//       <Container>
//         <Typography variant="h4" align="center" color="secondary" gutterBottom>
//           Photo Gallery
//         </Typography>
//         <Box sx={{ mt: 5, position: "relative" }}>
//           <Slider ref={sliderRef} {...settings}>
//             {images.map((img, i) => (
//               <Box key={i} sx={{ px: 2 }}>
//                 <Card
//                   sx={{
//                     borderRadius: 3,
//                     overflow: "hidden",
//                     boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
//                   }}
//                 >
//                   <img src={img} alt="gallery" style={{ width: "100%", height: 250, objectFit: "cover" }} />
//                 </Card>
//               </Box>
//             ))}
//           </Slider>

//           {/* navigation buttons */}
//           <IconButton
//             sx={{
//               position: "absolute",
//               left: -10,
//               top: "45%",
//               bgcolor: "white",
//               "&:hover": { bgcolor: "primary.main", color: "white" },
//             }}
//             onClick={() => sliderRef.current.slickPrev()}
//           >
//             <ArrowBackIosNew />
//           </IconButton>
//           <IconButton
//             sx={{
//               position: "absolute",
//               right: -10,
//               top: "45%",
//               bgcolor: "white",
//               "&:hover": { bgcolor: "primary.main", color: "white" },
//             }}
//             onClick={() => sliderRef.current.slickNext()}
//           >
//             <ArrowForwardIos />
//           </IconButton>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// // --- TESTIMONIALS ---
// const Testimonials = () => (
//   <Box id="testimonials" sx={{ py: 10, bgcolor: "#E8F5E9" }}>
//     <Container>
//       <Typography variant="h4" align="center" color="secondary" gutterBottom>
//         Client Testimonials
//       </Typography>
//       <Grid container spacing={4} sx={{ mt: 5 }}>
//         {[
//           {
//             doc: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Adobe_PDF_icon.svg",
//             name: "Adani Group",
//             desc: "Appreciation Letter for Substation Design Project (2023)",
//           },
//           {
//             doc: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Adobe_PDF_icon.svg",
//             name: "Tata Power",
//             desc: "Official Testimonial for EPC Excellence (2024)",
//           },
//         ].map((t, i) => (
//           <Grid item xs={12} md={6} key={i}>
//             <Paper
//               elevation={4}
//               sx={{
//                 p: 4,
//                 borderRadius: 3,
//                 backgroundColor: "white",
//                 textAlign: "center",
//               }}
//             >
//               <img
//                 src={t.doc}
//                 alt={t.name}
//                 style={{ width: 80, marginBottom: 16 }}
//               />
//               <Typography variant="h6" color="primary" gutterBottom>
//                 {t.name}
//               </Typography>
//               <Typography color="text.secondary">{t.desc}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   </Box>
// );

// // --- CONTACT ---
// const Contact = () => (
//   <Container id="contact" sx={{ py: 10 }}>
//     <Typography variant="h4" align="center" color="secondary" gutterBottom>
//       Contact Us
//     </Typography>
//     <Grid container justifyContent="center" sx={{ mt: 5 }}>
//       <Grid item xs={12} md={6}>
//         <Paper
//           elevation={5}
//           sx={{
//             p: 5,
//             borderRadius: 4,
//             backgroundColor: "white",
//             boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             Get in Touch
//           </Typography>
//           <Typography variant="body2" color="text.secondary" mb={3}>
//             Have a project or query? Fill out the form below and our team will
//             get back to you shortly.
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
//             <TextField label="Full Name" fullWidth variant="outlined" />
//             <TextField label="Email Address" fullWidth variant="outlined" />
//             <TextField label="Phone Number" fullWidth variant="outlined" />
//             <TextField
//               label="Message"
//               multiline
//               rows={4}
//               fullWidth
//               variant="outlined"
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               sx={{
//                 borderRadius: 3,
//                 py: 1.3,
//                 fontWeight: 600,
//               }}
//             >
//               Send Message
//             </Button>
//           </Box>
//         </Paper>
//       </Grid>
//     </Grid>
//   </Container>
// );

// // --- FOOTER ---
// const Footer = () => (
//   <Box sx={{ bgcolor: "secondary.main", color: "white", py: 3, textAlign: "center" }}>
//     <Typography variant="body2">
//       © {new Date().getFullYear()} Orbit Power Engineering | All Rights Reserved
//     </Typography>
//   </Box>
// );

// // --- APP ---
// const App = () => (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <Navbar />
//     <Hero />
//     <Services />
//     <Clients />
//     <Gallery />
//     <Testimonials />
//     <Contact />
//     <Footer />
//   </ThemeProvider>
// );

// export default App;


///////////thik thak hai yaha tak 

//oooooooooooooooooooooooooooooooooooooooooooooooooo

import React from "react";
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
  Avatar,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slider from "react-slick";
import { motion } from "framer-motion";
import headerBg from "./headerpagebackground.jpeg";
import { green, grey } from "@mui/material/colors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = createTheme({
  palette: {
    primary: { main: "#009B77" },
    secondary: { main: "#0B1E22" },
    background: { default: "#F5F7F8" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h4: { fontWeight: 700 },
    h6: { fontWeight: 500 },
  },
});

const Navbar = () => (
  <AppBar
    position="fixed"
    sx={{
      backgroundColor: "#ffffffcc",
      backdropFilter: "blur(10px)",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      color: "#0B1E22",
    }}
  >
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
        Orbit Power Engineering
      </Typography>
      <Box>
        {["Home", "Services", "Clients", "Gallery", "Testimonials", "Contact"].map((item) => (
          <Button key={item} href={`#${item.toLowerCase()}`} sx={{ color: "#0B1E22", mx: 1 }}>
            {item}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

const Hero = () => (
  <Box
    id="home"
    sx={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: `linear-gradient(to right, rgba(0,155,119,0.85), rgba(11,30,34,0.85)), url(${headerBg}) center/cover no-repeat`,
      color: "white",
    }}
  >
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Typography variant="h3" gutterBottom>
        Powering the Future with Engineering Excellence
      </Typography>
      <Typography variant="h6">Design • Construction • Innovation</Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
        Learn More
      </Button>
    </motion.div>
  </Box>
);

const Services = () => {
  const services = [
    {
      img: "https://images.unsplash.com/photo-1581091012184-5c50b6b0668c",
      title: "Design Engineering",
      desc: "Comprehensive design solutions for power, civil and mechanical infrastructure.",
    },
    {
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      title: "Construction",
      desc: "Delivering high-quality EPC projects with focus on safety and efficiency.",
    },
    {
      img: "https://images.unsplash.com/photo-1581091870627-3f03d3b5dc13",
      title: "Procurement & Supply",
      desc: "Reliable sourcing and supply of industrial materials and power products.",
    },
    {
      img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
      title: "Commissioning & Maintenance",
      desc: "End-to-end project support and after-sales services.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box id="services" sx={{ py: 10, bgcolor: grey[100] }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom color="secondary">
          Core Services
        </Typography>
        <Slider {...settings}>
          {services.map((srv, i) => (
            <Box key={i} sx={{ px: 2 }}>
              <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
                <CardMedia component="img" height="200" image={srv.img} alt={srv.title} />
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {srv.title}
                  </Typography>
                  <Typography color="text.secondary">{srv.desc}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1581091012184-5c50b6b0668c",
    "https://images.unsplash.com/photo-1505739773434-c0a0f4b7d6ea",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
    "https://images.unsplash.com/photo-1581091870627-3f03d3b5dc13",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box id="gallery" sx={{ py: 10 }}>
      <Container>
        <Typography variant="h4" align="center" color="secondary" gutterBottom>
          Photo Gallery
        </Typography>
        <Slider {...settings}>
          {images.map((img, i) => (
            <Box key={i} sx={{ px: 2 }}>
              <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
                <CardMedia component="img" height="250" image={img} alt={`Gallery ${i}`} />
              </Card>
            </Box>
          ))}
        </Slider>
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

const Contact = () => (
  <Box
    id="contact"
    sx={{
      py: 10,
      background: "linear-gradient(135deg, #00A86B, #0B1E22)",
      color: "white",
    }}
  >
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          mt: 4,
          p: 4,
          borderRadius: 4,
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "#eee" } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "#eee" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "#eee" } }}
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "white",
                color: theme.palette.primary.main,
                fontWeight: 600,
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </Box>
);

const Footer = () => (
  <Box sx={{ bgcolor: "#0B1E22", color: "white", textAlign: "center", py: 3 }}>
    <Typography variant="body2">
      © {new Date().getFullYear()} Orbit Power Engineering | All Rights Reserved
    </Typography>
  </Box>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <Hero />
    <Services />
    <Clients />
    <Gallery />
    <Testimonials />
    <Contact />
    <Footer />
  </ThemeProvider>
);

export default App;
