import {
    Box,
    Typography,
    useMediaQuery,
    Divider,
    Button,
  } from "@mui/material";
  import FolderOpenIcon from '@mui/icons-material/FolderOpen';
  import LaunchIcon from '@mui/icons-material/Launch';
  import HtmlIcon from "@mui/icons-material/Html";
  import CssIcon from "@mui/icons-material/Css";
  import JavascriptIcon from "@mui/icons-material/Javascript";
  import PhpIcon from "@mui/icons-material/Php";
  import JoinLeftIcon from "@mui/icons-material/JoinLeft";
  import TerminalIcon from "@mui/icons-material/Terminal";
  import { GitHub, LinkedIn, DownloadOutlined } from "@mui/icons-material";
  import FlexBetween from "../../components/flexBetween";
  import Contact from "../../components/contact";
  import Footer from "../../components/footer";
  import { user } from "../../user";
  import { projects } from "../../user";
  import { themeSettings } from "../../theme";
  import { attributes } from "../../pageAttributes";
  import Nav from "../../components/nav";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Projects from "../../components/Projects";


  const Home = () => {
    const green = themeSettings.palette.primary.green;
    const navy = themeSettings.palette.primary.navy;
    const darkNavy = themeSettings.palette.primary.darkNavy;
    const lightSlate = themeSettings.palette.primary.lightSlate;
    const slate = themeSettings.palette.primary.slate;
    const white = themeSettings.palette.primary.white;
  
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const isMobile = useMediaQuery("(max-width: 700px)");
  
    const firstName = user.firstName;
    const lastName = user.lastName;
    const fullName = `${firstName} ${lastName}`;
  
    return (
      <Box
        p={isNonMobile ? "0rem 8rem" : "0rem 1rem"}
        sx={{
          background: darkNavy,
        }}
      >
        {/* NAV */}
        <Nav />
        {/* INTRODUCTION */}
        <Box
          sx={{
            pt: isNonMobile ? "7rem" : "3rem",
          }}
        >
          <Box>
            <Typography
              // variant=""
              paddingLeft={isNonMobile ? "5px" : null}
              color={green}
              sx={{
                wordSpacing: "2px",
                mb: "1rem",
              }}
            >
              Hi, my name is
            </Typography>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              color={white}
              sx={{
                fontWeight: "bolder",
              }}
            >
              {`${fullName}.`}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bolder",
                  color: slate,
                }}
              >
                I'm a Developer focusing on the Frontend.
              </Typography>
            </Typography>
  
            <Typography
              sx={{
                p: "2rem 0",
                mb: "1rem",
                color: slate,
                fontWeight:"200"
              }}
            >
              Based in Connecticut, I'm a Front-end developer passionate about
              building accessible web apps that users love.
            </Typography>
  
            {/* CALL TO ACTION BUTTONS */}
            <FlexBetween
              sx={{
                gap: "1rem",
                maxWidth: isNonMobile ? "25rem" : "20rem",
              }}
            >
              <Button
                variant="outlined"
                href={user.linkedIn}
                target="_blank"
                sx={{
                  color: lightSlate,
                  textTransform: "none",
                  "&:hover": {
                    color: green,
                  },
                }}
              >
                <LinkedIn
                  sx={{
                    color: lightSlate,
                    p: "4px",
                    "&:hover": {
                      color: green,
                    },
                  }}
                />
                Linkedin
              </Button>
  
              <Button
                variant="outlined"
                href={user.gitHub}
                target="_blank"
                sx={{
                  color: lightSlate,
                  textTransform: "none",
                  "&:hover": {
                    color: green,
                  },
                }}
              >
                <GitHub
                  sx={{
                    color: lightSlate,
                    p: "4px",
                    "&:hover": {
                      color: green,
                    },
                  }}
                />
                Github
              </Button>
  
              <Button
                variant="outlined"
                href={user.resume}
                target="_blank"
                sx={{
                  color: lightSlate,
                  textTransform: "none",
                  "&:hover": {
                    color: green,
                  },
                }}
              >
                <DownloadOutlined
                  sx={{
                    color: lightSlate,
                    p: "4px",
                    "&:hover": {
                      color: green,
                    },
                  }}
                />
                Resume
              </Button>
            </FlexBetween>
  
            {/* TECHONOLOGIES */}
            <Box
              sx={{
                pt: "3rem",
                width: isNonMobile ? "90%" : null,
              }}
            >
              <FlexBetween>
                <HtmlIcon
                  sx={{
                    fontSize: "3rem",
                    color: lightSlate,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  SASS
                </Typography>
                <CssIcon
                  sx={{
                    fontSize: "3rem",
                    color: lightSlate,
                  }}
                />
                <JavascriptIcon
                  sx={{
                    fontSize: "3rem",
                    color: lightSlate,
                  }}
                />
                <PhpIcon
                  sx={{
                    fontSize: "3rem",
                    color: lightSlate,
                  }}
                />
              </FlexBetween>
              <FlexBetween>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                  }}
                >
                  REACT
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                  }}
                >
                  JQUERY
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: lightSlate,
                    fontWeight: "bolder",
                  }}
                >
                  <JoinLeftIcon
                    sx={{
                      fontSize: "2rem",
                      color: lightSlate,
                    }}
                  />
                  SQL
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                  }}
                >
                  NODE JS
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bolder",
                  }}
                >
                  <TerminalIcon sx={{ marginRight: "2px" }} />
                  LINUX
                </Typography>
              </FlexBetween>
            </Box>
          </Box>
        </Box>
  
        {/* ABOUT ME DIVIDER & TITLE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            paddingTop: "5rem",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bolder",
              color: lightSlate,
            }}
          >
            About Me
          </Typography>
  
          <Divider
            sx={{
              background: lightSlate,
              width: "40%",
            }}
          />
        </Box>
  
        {/* ABOUT ME TEXT */}
        <Box
          sx={{
            width: isNonMobile ? "90%" : null,
            display: isMobile ? "block" : "flex",
          }}
        >
          <Box id={attributes.about}>
            <Typography
              sx={{
                p: "1rem 0",
                lineHeight: "1.7",
                fontWeight: "200",
              }}
            >
              My name is Johnson Absolu, I enjoy creating responsive web
              applications. My interest in Frontend Development started in 2018,
              after succesfully open an ecommerce website on shopify, I started
              building ecommerce websites on shipify's drag and drop theme
              templates, I got very good at it and eventually started
              freelanching, helping others to develop and launch their own
              ecommerce website. In 2020 I began learning how to ceate basic web
              apps on FreeCode camp, then I started my Associate Degree in
              Computer Science at Housatonic Community College, which I completed
              in May 2023.
            </Typography>
          </Box>         
        </Box>
        {/* PROJECTS */}
        <Projects />
        {/* CONTACT */}
        <Contact />
        <Divider
            sx={{
              background: navy,
              mt: "3rem",
              padding: "5px"
            }}
          />
        <Footer />
      </Box>
    );
  };
  
  export default Home;
  