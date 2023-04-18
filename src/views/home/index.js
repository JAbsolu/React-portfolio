import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    Divider,
    Button,
    Paper,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
  } from "@mui/material";
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
  
  const Home = () => {
    const green = themeSettings.palette.primary.green;
    const navy = themeSettings.palette.primary.navy;
    const darkNavy = themeSettings.palette.primary.darkNavy;
    const lightNavy = themeSettings.palette.primary.lightNavy;
    const navyShadow = themeSettings.palette.primary.navyShadow;
    const lightestNavy = themeSettings.palette.primary.lightestNavy;
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
        p={isNonMobile ? "8rem 8rem 0" : "1rem 1rem 0"}
        pt={isNonMobile ? "3rem " : "1rem"}
        sx={{
          background: darkNavy,
        }}
      >
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
                width: isNonMobile ? "100%" : null,
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
            variant="h2"
            sx={{
              fontWeight: "bolder",
              fontSize: themeSettings.typography.h2,
              color: white,
            }}
          >
            About me
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
                fontWeight: "300",
                width: isNonMobile ? "85%" : null,
              }}
            >
              My name is Johnson Absolu, I enjoy creating responsive web
              applications. My interest in Frontend Development started in 2018,
              after succesfuylly open an ecommerce website on shopify, I started
              building ecommerce websites on shipify's drag and drop theme
              templates, I got very good at it and eventually started
              freelanching, helping others to develop and launch their own
              ecommerce website. In 2020 I began learning how to ceate basic web
              apps on FreeCode camp, then I started my Associate Degree in
              Computer Science at Housatonic Community College, which I completed
              in May 2023.
            </Typography>
          </Box>
          {/* PROFILE PIC HERE */}
          <Paper
            sx={{
              marginLeft: isNonMobile ? "2rem" : null,
              background: navy,
              border: `solid 5px ${lightSlate}`,
              boxShadow: `-7px 6px 0px 0px ${green}`,
              pb: "0",
              mb: isMobile ? "2rem" : null,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={user.userImage} height="230" />
          </Paper>
        </Box>
        <Box></Box>
        {/* PROJECTS */}

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
  