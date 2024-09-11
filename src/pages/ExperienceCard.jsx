import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SingleExperienceCard from "../components/SingleExperienceCard";
import Autoplay from 'embla-carousel-autoplay'

const ExperienceCard = () => {
  const experienceOne = [
    " Provided support by troubleshooting hardware and software issues, achieving a 95% resolution rate.",
    " Maintained IT systems with 99% uptime, ensuring smooth and uninterrupted operations.",
    "Collaborated with external software developers to streamline issue resolution processes, reducing response times by 25%.",
    "Participated in professional development workshops, expanding knowledge in IT systems management.",
  ];
  const experienceTwo = [
    "Enhanced user engagement by improving UI/UX designs and developing new features for a booking application.",
    "Implemented advanced search functionalities, increasing user activity and platform efficiency.",
    "Strengthened platform security by introducing authentication and authorization measures, reducing security incidents.",
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
          description={" Codesoft | March 2024 – April 2024"}
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
