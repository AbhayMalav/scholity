import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
const Workflow = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            What are 
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
               {" "} we.</span>
        </h2>
        <div className="flex flex-wrap justify-center">
          
          <div className="mt-20 mb-20 pt-12 w-95 lg:text-xl">
             <p>
             Scholity Technologies is a startup focused on developing innovative solutions to enhance emergency healthcare services. 
             Our company creates advanced technology that enables seamless communication and data sharing between ambulances and hospitals. 
             This technology helps medical professionals access critical patient information in real-time, improving the efficiency and effectiveness of emergency care. 
             Key products include IoT devices for live data transmission and smart hospital management tools.</p>
          </div>
        </div>
    </div>
  );
};

export default Workflow;
