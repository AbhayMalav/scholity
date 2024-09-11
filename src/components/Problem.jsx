import { CheckCircle2 } from "lucide-react";
import { statement } from "../constants";

const Problem = () => {
  return (
    <div className="mt-1 max-w-7xl mx-auto px-6 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Our
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {" "} Thought</span>
      </h2>
      <div className="flex flex-wrap">
        {statement.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/2 p-2 flex">
            <div className="flex-1 p-10 border border-neutral-700 rounded-xl flex flex-col justify-between">
              <p className="text-4xl mb-8">
                {option.title}
              </p>
              <ul className="flex-grow">
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problem;
