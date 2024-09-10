import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SingleExperienceCard from "../components/SingleExperienceCard";

const ExperienceCard = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-md "
    >
      <CarouselContent >
        <SingleExperienceCard />
        <SingleExperienceCard />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ExperienceCard;
