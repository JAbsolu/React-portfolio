import { Typography, Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FlexBetween from "../flexBetween";
import { themeSettings } from "../../theme";
import { useMediaQuery } from "@mui/material";
import { projects } from "../../resources";

const ProjectCards = () => {
  const isMac = useMediaQuery("(min-width: 1400px)");

  const green = themeSettings.palette.primary.green;
  const navy = themeSettings.palette.primary.navy;
  const lightSlate = themeSettings.palette.primary.lightSlate;

  let card = new Array(projects.length); // array with a fixed length of the projects array's length
  let i = 0; //index to increment and add prohects to card array

  for (let project of projects) {
    let name = project.name;
    let frontend = project.frontendView;
    let github = project.github;
    let technologies = project.technology;
    let description = project.description;

    card[i] = (
      <Link href={frontend} underline="none" target="_new">
        <Card
          sx={{
            minWidth: isMac ? "24rem" : "19rem",
            maxWidth: isMac ? "26rem" : "22.5rem",
            minHeight: "19rem",
            background: navy,
            borderRadius: "5px",
            mt: "5px",
          }}
        >
          <CardContent
            sx={{
              p: "2rem",
            }}
          >
            <FlexBetween>
              <Link href={github} target="_new">
                <GitHubIcon
                  sx={{
                    color: lightSlate,
                    fontSize: "1.8rem",
                    "&:hover": {
                      color: green,
                      cursor: "pointer",
                    },
                  }}
                />
              </Link>
              <LaunchIcon
                sx={{
                  color: lightSlate,
                  fontSize: "1.8rem",
                  "&:hover": {
                    color: green,
                    cursor: "pointer",
                  },
                }}
              />
            </FlexBetween>

            <Typography
              variant="h6"
              sx={{
                color: green,
                pt: "2rem",
                pd: "0.5rem",
              }}
            >
              {name}
            </Typography>

            <Typography
              sx={{
                color: lightSlate,
                lineHeight: "1.5",
                fontSize: "0.95rem",
                fontWeight: "100",
                pt: "0.5rem",
                pb: "3rem",
              }}
            >
              {description}
            </Typography>

            <FlexBetween
              sx={{
                pb: "0",
              }}
            >
              {technologies.map((value) => (
                <Typography
                  sx={{
                    color: lightSlate,
                    fontWeight: "200",
                    fontSize: "0.85rem",
                  }}
                >
                  {value}
                </Typography>
              ))}
            </FlexBetween>
          </CardContent>
        </Card>
      </Link>
    );
    i++;
  }

  return card;
};

export default ProjectCards;
