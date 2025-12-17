type HeroProps = {
  heading?: string;
  subheading?: string;
};

export default function Hero({ heading = "", subheading = "" }: HeroProps) {
  return (
    <div className="container h-56 flex justify-center flex-col gap-4 items-center">
      {heading !== "" && (
        <h1 className="text-3xl md:text-6xl text-center font-extrabold text-secondary">
          {heading}
        </h1>
      )}
      {subheading !== "" && (
        <h2 className="text-lg md:text-3xl text-center font-extralight">
          {subheading}
        </h2>
      )}
    </div>
  );
}
