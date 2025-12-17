import { Fragment } from "react";
import {
  FaGlobe,
  FaMedal,
  FaPeopleGroup,
  FaCheckDouble,
} from "react-icons/fa6";

export default function WhyChooseUs() {
  const data: Array<{
    icon: React.ReactNode;
    title: string;
    body: string;
  }> = [
    {
      icon: <FaMedal size={92} />,
      title: "Uncompromising Quality",
      body: "We ensure the highest standards of quality in every tool we produce, from the initial design to the final product.",
    },
    {
      icon: <FaGlobe size={92} />,
      title: "Global Expertise",
      body: "With a foxus on 100% exports, our tools are trusted by professionals around the world.",
    },
    {
      icon: <FaPeopleGroup size={92} />,
      title: "Customer-Centric Approach",
      body: "We prioritize our customers’ needs, offering exceptional service and support to build lasting relationships.",
    },
    {
      icon: <FaCheckDouble size={92} />,
      title: "Reliability and Trust",
      body: "We stand by the reliability of our tools, ensuring they perform consistently in all conditions.",
    },
  ];

  return (
    <Fragment>
      <h2 className="text-4xl mt-8 font-bold text-secondary text-center">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 transition ease-in mt-4">
        {data.map((d, i) => (
          <div
            key={i}
            className="bg-white shadow-md hover:shadow-xl rounded p-8 flex flex-col items-center gap-4 text-secondary"
          >
            {d.icon}
            <h2 className="font-bold">{d.title}</h2>
            <p className="text-lg">{d.body}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
