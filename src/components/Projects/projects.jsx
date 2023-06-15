import { Typography, Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FlexBetween from "../flexBetween";
import { themeSettings } from "../../theme";

const projects = [
  {
    name: "React Todo List Application",
    frontendView: "https://todo-blond-theta.vercel.app/",
    github: "https://github.com/JAbsolu/Todo-app",
    technology: ["Javascript", "React Js", "CSS"],
    description:
      "A single page application that allows users to add tasks to a list to be completed.",
  },
  {
    name: "Emergency Response App",
    frontendView: "https://emergency-response-app.vercel.app/",
    github: "https://github.com/JAbsolu/Emergency-response-app",
    technology: ["Javascript", "React Js", "Sass", "CSS", "Bootstrap"],
    description:
      "A 4 page web application that allows users to login and request emergency assistance.",
  },
  {
    name: "Ecommerce Website",
    frontendView: "https://jabsolu.github.io/sneaker-web-app/",
    github: "https://github.com/JAbsolu/sneaker-web-app",
    technology: ["HTML", "CSS", "Javascript"],
    description:
      "A multi-page ecommerce website that allows users to view a product and add to cart.",
  },
  {
    name: "Social Media App",
    frontendView: null,
    github: "https://github.com/JAbsolu/FullStack-Social-app",
    technology: ["React", "Redux", "Node JS", "MongoDb"],
    description:
      "A Fullstack social media website, allows users to signup/signin and add friends.",
  },
  {
    name: "Lease Payment Calculator",
    frontendView: null,
    github: "https://github.com/JAbsolu/lease-payment-calculator",
    technology: ["PHP", "HTML", "Bootstrap", "CSS"],
    description: "A one page web app that helps calculate car lease payment",
  },
  {
    name: "Javascript calculator",
    frontendView: "https://jscalculator-ruby.vercel.app/",
    github: "https://github.com/JAbsolu/Javascript-calculator",
    technology: ["HTML", "CSS", "Javascript"],
    description: "A javascript calculator that allows users to calculate",
  },
  {
    name: "Full-Stack Dealership Website",
    frontendView: "https://csc269-01.hcc-computerscience.com/php-project/",
    github: "https://github.com/JAbsolu/Serverside-programing-Final-Project",
    technology: ["PHP", "MySQL", "Bootstrap", "Hack"],
    description: "A Full-stack dealership website with a MySQL database",
  },
  {
    name: "A List of My Leetcode Solutions",
    frontendView: "https://github.com/JAbsolu/Leetcode-Solutions",
    github: "https://github.com/JAbsolu/Leetcode-Solutions",
    technology: ["Javascript", "Python"],
    description: "A list of my leetcode solutions. I add new solutions daily",
  },
];

const ProjectCards = () => {
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
            minWidth: "22rem",
            maxWidth: "24rem",
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
