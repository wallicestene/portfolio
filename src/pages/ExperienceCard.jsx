import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SingleExperienceCard from "../components/SingleExperienceCard";
import Autoplay from "embla-carousel-autoplay";
import { UseThemeContext } from "../context/ThemeContext";

const ExperienceCard = () => {
  const { theme } = UseThemeContext();

  const experiences = [
    {
      title: "Freelance Software Engineer",
      company: "Upwork (International)",
      date: "Oct 2025 – Present",
      description:
        "Building advanced web scraping and automation tools for clients like Responsibly (Denmark) and Go10 (UK).",
      content: [
        "Developed scraping pipelines using Playwright, Cheerio, and Crawlee to collect structured data.",
        "Delivered browser automation and API-driven scrapers tailored to client business needs.",
        "Provided full-stack services using Next.js, Node.js, and PostgreSQL.",
        "Ensured reliable deployments and documentation for all delivered solutions.",
      ],
    },
    {
      title: "ICT Intern",
      company: "Kenya Revenue Authority (KRA)",
      date: "June 2025 – Sept 2025",
      description:
        "Collaborated with cross-functional teams to integrate pension management modules.",
      content: [
        "Enhanced platform security by implementing MFA, CAPTCHA, and secure registration.",
        "Supported deployment of pension calculators and contribution filters.",
        "Participated in testing and documentation to ensure smooth rollouts.",
      ],
    },
    {
      title: "IT Intern",
      company: "Unity Homes",
      date: "June 2024 – Aug 2024",
      description:
        "Built responsive React interfaces and integrated Node.js APIs for enterprise web tools.",
      content: [
        "Debugged and optimized backend services, improving reliability and performance.",
        "Automated workflows with scripts, reducing downtime.",
        "Contributed in Agile sprints through code reviews, testing, and deployments.",
      ],
    },
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
          {experiences.map((experience, index) => (
            <SingleExperienceCard
              key={index}
              title={experience.title}
              description={`${experience.company} | ${experience.date}`}
              content={experience.content}
            />
          ))}
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
