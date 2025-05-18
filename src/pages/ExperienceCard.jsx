import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SingleExperienceCard from "../components/SingleExperienceCard";
import Autoplay from "embla-carousel-autoplay";

const ExperienceCard = () => {
  const experienceOne = [
    " Collaborated on internal web tools, assisting with frontend development using React and backend debugging in Node.js.",
    "Improved UI responsiveness and resolved frontend bugs, resulting in smoother user experiences.",
    "Supported automation of internal workflows and enhanced documentation of system processes.",
    "Conducted system testing and recommended improvements, contributing to a 10% increase in efficiency",
  ];
  const experienceTwo = [
    "Developed REST APIs using Node.js and Express, ensuring scalability and performance.",
    " Implemented secure user authentication using JWT protocols.",
    "Wrote modular and testable backend code integrated with MongoDB, improving maintainability.",
    "Worked in an agile team to ship new features and fix bugs on client-facing",
  ];
  const experienceThree = [
    "Strengthen my expertise in front-end and back-end technologies.",
    "Design and build user-friendly interfaces with a focus on accessibility and seamless user experiences.",
    "Implement secure authentication systems, improving data privacy and user protection.",
    "Integrate APIs and manage databases to handle dynamic user-generated content.",
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
      className="w-full max-w-md "
    >
      <CarouselContent>
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
          content={experienceOne}
        />
        <SingleExperienceCard
          title={"Personal Projects"}
          description={
            "In addition to my internships, I’ve worked on several personal projects that have given me practical experience in full-stack web development. Through these projects, I’ve:"
          }
          content={experienceThree}
        />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ExperienceCard;
