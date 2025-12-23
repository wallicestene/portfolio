import { cn } from "@/lib/utils";
import DotPattern from "./magicui/dot-pattern";

const Backgound = () => {
  return (
    // <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
    <DotPattern
    //   width={20}
    //   height={20}
      className={cn(
        "[mask-image:radial-gradient(4500px_circle_at_center,white,transparent)]"
      )}
    />
    // </div>
  );
};

export default Backgound;
