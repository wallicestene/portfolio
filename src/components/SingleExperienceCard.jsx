import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarouselItem } from "./ui/carousel";
import { UseThemeContext } from "../context/ThemeContext";

// eslint-disable-next-line react/prop-types
const SingleExperienceCard = ({ title, description, content }) => {
  const { theme } = UseThemeContext();
  return (
    <CarouselItem>
      <div
        className={` h-full overflow-hidden font-SpaceGrotesk delay-100 duration-500 transition ${
          theme === "light"
            ? " text-neutral-600 bg-white"
            : " text-neutral-400 bg-neutral-950"
        }`}
      >
        <Card className="h-full border-none">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent> 
            <ul
              className={`${
                theme === "light"
                  ? "list-image-checkmark"
                  : " list-image-checkmarkSecodary"
              } `}
            >
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default SingleExperienceCard;
