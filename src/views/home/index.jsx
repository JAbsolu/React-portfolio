import { Box, Typography, useMediaQuery, Divider, Button } from "@mui/material";
import { GitHub, LinkedIn, DownloadOutlined } from "@mui/icons-material";
import FlexBetween from "../../components/flexBetween";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import { WebsiteTexts, user } from "../../resources";
import { themeSettings } from "../../theme";
import { attributes } from "../../pageAttributes";
import illustration from "../../media/MERN.png";
import Projects from "../../components/Projects";

const Home = () => {
  const green = themeSettings.palette.primary.green;
  const navy = themeSettings.palette.primary.navy;
  const darkNavy = themeSettings.palette.primary.darkNavy;
  const lightSlate = themeSettings.palette.primary.lightSlate;
  const slate = themeSettings.palette.primary.slate;
  const white = themeSettings.palette.primary.white;

  const isWideScreen = useMediaQuery("(min-width: 2000px)");
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 700px)");

  const firstName = user.firstName;
  const lastName = user.lastName;
  const fullName = `${firstName} ${lastName}`;
  const resume_link = user.resume_link;
  const resume = user.resume;

  /*
    const technologies = [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next JS",
      "React JS",
      "Material UI",
      "Tailwind CSS",
      "AWS",
      "AI Integration",
      "Mongo DB",
      "Express JS",
      "Node JS",
      "PHP",
      "Python",
      "MySQL",
      "Git"
    ]
  */
  return (
    <Box
      p={isWideScreen ? "0rem 15rem" : isNonMobile ? "0rem 2rem" : "0rem 1rem"}
      sx={{ background: darkNavy }}
    >
      {/* INTRODUCTION */}
      <Box sx={{ pt: isNonMobile ? "7rem" : "3rem" }}>
        <Box>
          {/* FLEXBOX */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: isMobile ? "column-reverse" : "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <Box sx={{ mt: isMobile ? "2rem" : "" }}>
              <Typography
                paddingLeft={isNonMobile ? "5px" : null}
                color={green}
                sx={{ wordSpacing: "2px", mb: "0.5rem" }}
              >
                Hi, my name is
              </Typography>
              <Typography
                variant={isMobile ? "h5" : "h3"}
                color={white}
                sx={{ fontWeight: "bolder" }}
              >
                {`${fullName}.`}
                <Typography
                  variant={isMobile ? "h6" : "h4"}
                  sx={{ fontWeight: "bolder", color: slate }}
                >
                  {/* WEBSITE TITLE TEXT */}
                  {WebsiteTexts.title}
                </Typography>
              </Typography>

              <Typography
                sx={{
                  p: isMobile ? "1rem 0" : "1rem 0",
                  mb: "1rem",
                  color: slate,
                  fontWeight: "200",
                  maxWidth: "33rem",
                }}
              >
                {/* WEBSITE SUBTITLE TEXT */}
                {WebsiteTexts.subtitle}
              </Typography>
              {/* CALL TO ACTION BUTTONS */}
              <FlexBetween
                sx={{ gap: "1rem", maxWidth: isNonMobile ? "25rem" : "20rem" }}
              >
                <Button
                  variant="outlined"
                  href={user.linkedIn}
                  target="_blank"
                  sx={{
                    color: lightSlate,
                    textTransform: "none",
                    "&:hover": { color: green },
                  }}
                >
                  <LinkedIn
                    sx={{
                      color: lightSlate,
                      p: "4px",
                      "&:hover": { color: green },
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
                    "&:hover": { color: green },
                  }}
                >
                  <GitHub
                    sx={{
                      color: lightSlate,
                      p: "4px",
                      "&:hover": { color: green },
                    }}
                  />
                  Github
                </Button>

                <Button
                  variant="outlined"
                  href={isNonMobile ? resume_link : resume}
                  target="_blank"
                  sx={{
                    color: lightSlate,
                    textTransform: "none",
                    "&:hover": { color: green },
                  }}
                >
                  <DownloadOutlined
                    sx={{
                      color: lightSlate,
                      p: "4px",
                      "&:hover": { color: green },
                    }}
                  />
                  Resume
                </Button>
              </FlexBetween>
            </Box>
            {/* FLEX RIGHT, APPEARS FIRST ON MOBILE VIEWING */}
            <Box sx={{ m: isMobile ? "0 auto 2rem" : "0 11rem 0 0" }}>
              <img src={illustration} width={isMobile ? "350" : "450"} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ABOUT ME DIVIDER & TITLE */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          paddingTop: "3rem",
          gap: "1rem",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{ fontWeight: "600", color: "white" }}
        >
          About Me
        </Typography>
      </Box>

      {/* ABOUT ME TEXT */}
      <Box
        id={attributes.about}
        sx={{
          width: isNonMobile ? "90%" : null,
          display: isMobile ? "block" : "flex",
        }}
      >
        <Box>
          <Typography
            sx={{
              p: "1rem 0",
              lineHeight: "1.8",
              fontWeight: "200",
              fontSize: "0.9rem",
            }}
          >
            {/* WEBSITTE ABOUT ME TEXT */}
            {WebsiteTexts.about}
          </Typography>
        </Box>
      </Box>

      {/* TECHONOLOGIES */}
      {/* <Box sx={{ pt: "3rem", width: isNonMobile ? "90%" : null,}}>
              <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: "600", color: "white", mb: "1rem", }} >
                Technical Skills
              </Typography>
                <Box sx={{ mb: "0.5rem", display: "flex", justifyContent: "flex-start", flexWrap: "wrap", gap: "1rem", }}>
                  {technologies.map((tech, index) => (
                    <Card  key={index} sx={{ background: navy, borderRadius: "5px", width: "8em" }}>
                      <CardContent key={index}>
                        <Typography key={index} variant="h7" sx={{ color: green }}>
                          {tech}
                        </Typography>
                      </CardContent>
                    </Card>                    
                  ))}
                </Box>
            </Box> */}

      {/* PROJECTS */}
      <Projects />
      {/* CONTACT */}
      <Contact />
      <Divider sx={{ background: navy, mt: "2rem", padding: "5px" }} />
      <Footer />
    </Box>
  );
};

export default Home;
