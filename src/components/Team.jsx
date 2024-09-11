import { team } from "../constants";
import { User, Code, Crown } from "lucide-react"; // Import icons

// Map designations to icons
const designationIcons = {
  Founder: <Crown className="text-blue-500 mr-4 text-3xl sm:text-4xl" />,
  Developer: <Code className="text-blue-500 mr-4 text-3xl sm:text-4xl" />,
  // Add more designations and corresponding icons as needed
};

const Team = () => {
  return (
    <div className="mt-8 sm:mt-12 lg:mt-20 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-6 sm:my-8 lg:my-12 tracking-wider">
        Meet our
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {" "} team
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Flex container for boxes */}
        {team.map((member, index) => (
          <div key={index} className="w-full sm:w-1/3 lg:w-1/3 p-4">
            <div className="p-6 sm:p-8 lg:p-10 border border-neutral-800 rounded-xl bg-neutral-900 max-w-xs mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                {/* Icon and designation */}
                {designationIcons[member.title] || <User className="text-blue-500 mr-0 sm:mr-4 text-3xl sm:text-4xl" />}
                <div className="text-center sm:text-left mt-4 sm:mt-0">
                  <p className="text-xl sm:text-5xl lg:text-3xl font-bold">
                    {member.title}
                  </p>
                  <p className="text-md sm:text-5xl lg:text-xl text-neutral-500">
                    {member.designation}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside">
                {member.features.map((feature, index) => (
                  <li key={index} className="text-md sm:text-sm lg:text-xl mb-2 flex items-center">
                    <span className="ml-0">{feature}</span>
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

export default Team;
