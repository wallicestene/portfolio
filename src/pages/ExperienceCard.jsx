import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SingleExperienceCard from "../components/SingleExperienceCard";
import Autoplay from "embla-carousel-autoplay";
import { UseThemeContext } from "../context/ThemeContext";
<<<<<<< HEAD
=======

>>>>>>> 0f73686cc53d86f1d7a13cc7adbfdaaa11f1e9e4

const ExperienceCard = () => {
  const { theme } = UseThemeContext();

  const experienceOne = [
    "Assisted in the development of internal web applications, focusing on frontend features using React.",
    "Collaborated with the team to enhance user interfaces and improve overall user experience.",
    "Participated in debugging and testing processes, ensuring high-quality code delivery.",
    "Gained hands-on experience in web development best practices and agile methodologies.",
    "Contributed to team meetings and code reviews, enhancing my understanding of collaborative software development.",
    "Learned to work with version control systems and project management tools.",
  ];
  const experienceTwo = [
    "Collaborated on internal web tools, assisting with frontend development using React and backend debugging in Node.js.",
    "Improved UI responsiveness and resolved frontend bugs, resulting in smoother user experiences.",
    "Supported automation of internal workflows and enhanced documentation of system processes.",
    "Conducted system testing and recommended improvements, contributing to a 10% increase in efficiency.",
  ];
  const experienceThree = [
    "Developed REST APIs using Node.js and Express, ensuring scalability and performance.",
    "Implemented secure user authentication using JWT protocols.Wrote modular and testable backend code integrated with MongoDB, improving maintainability.",
    "Worked in an agile team to ship new features and fix bugs on client-facing products.",
  ];
  const experienceFour = [
    "Strengthen my expertise in front-end and back-end technologies.",
    "Design and build user-friendly interfaces with a focus on accessibility and seamless user experiences.",
    "Implement secure authentication systems, improving data privacy and user protection.",
    "Integrate APIs and manage databases to handle dynamic user-generated content.",
  ];

  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 7000,
          }),
        ]}
        className="w-full max-w-md"
      >
        <CarouselContent className="py-2">
          <SingleExperienceCard
            title={"KRA BSTEM/ICT Intern"}
            description={"Kenya Revenue Authority | June 2025 – September 2025"}
            content={experienceOne}
          />
          <SingleExperienceCard
            title={"Software Developer Intern"}
            description={" Codesoft | February 2024 – April 2024"}
            content={experienceTwo}
          />
          <SingleExperienceCard
            title={"Information Technology Intern"}
            description={
              " Unity Homes - OCF Internship Program | June 2024 – August 2024"
            }
            content={experienceThree}
          />
          <SingleExperienceCard
            title={"Personal Projects"}
            description={
              "In addition to my internships, I've worked on several personal projects that have given me practical experience in full-stack web development. Through these projects, I've:"
            }
            content={experienceFour}
          />
        </CarouselContent>

        <div className="flex justify-end gap-2">
          <CarouselPrevious
            className={`h-8 w-8 rounded-full ${
              theme === "light"
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-secondary text-primary hover:bg-secondary/90"
            }`}
          />
          <CarouselNext
            className={`h-8 w-8 rounded-full ${
              theme === "light"
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-secondary text-primary hover:bg-secondary/90"
            }`}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ExperienceCard;
