import { CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";

const OurFuture = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Our
        <span className="text-blue-500 bg-clip-text"> Future </span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500 bg-clip-text">Vision</h3>
          <p className="text-lg text-neutral-500 mb-6">
            Our vision is to revolutionize healthcare by integrating advanced technology into everyday medical practices, ensuring that every individual, regardless of location, has access to prompt and effective care.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start text-lg">
              <CheckCircle2 className="text-blue-500 mr-2" />
              <span>Expand our technology to more remote and underserved areas.</span>
            </li>
            <li className="flex items-start text-lg">
              <CheckCircle2 className="text-blue-500 mr-2" />
              <span>Partner with healthcare providers globally to enhance care quality.</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-6  rounded-xl">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500 bg-clip-text">Mission</h3>
          <p className="text-lg text-neutral-500 mb-6">
            Our mission is to bridge the gap in healthcare delivery by developing innovative solutions that facilitate real-time communication and data sharing between medical professionals, improving response times and treatment outcomes.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start text-lg">
              <CheckCircle2 className="text-blue-500 mr-2" />
              <span>Develop cutting-edge tools that enhance emergency medical response.</span>
            </li>
            <li className="flex items-start text-lg">
              <CheckCircle2 className="text-blue-500 mr-2" />
              <span>Ensure seamless integration of our technology into existing healthcare systems.</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default OurFuture;

