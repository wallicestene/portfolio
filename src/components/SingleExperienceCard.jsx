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

const SingleExperienceCard = () => {
  const { theme } = UseThemeContext();
  return (
    <CarouselItem>
      <div
        className={`overflow-hidden font-SpaceGrotesk delay-100 duration-500 transition ${
           theme === "light"
            ? " text-neutral-600 bg-white"
            : " text-neutral-400 bg-neutral-950"
        }`}
      >
        
        <Card>
          <CardHeader>
            <CardTitle>Information Technology Intern</CardTitle>
            <CardDescription>
              Unity Homes - OCF Internship Program | June 2024 – August 2024
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul
              className={`${
                theme === "light"
                  ? "list-image-checkmark"
                  : " list-image-checkmarkSecodary"
              } `}
            >
              <li className="">
                Provided support by troubleshooting hardware and software
                issues, achieving a 95% resolution rate.
              </li>
              <li>
                Maintained IT systems with 99% uptime, ensuring smooth and
                uninterrupted operations.
              </li>
              <li>
                Collaborated with external software developers to streamline
                issue resolution processes, reducing response times by 25%.
              </li>
              <li>
                Participated in professional development workshops, expanding
                knowledge in IT systems management.
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default SingleExperienceCard;
