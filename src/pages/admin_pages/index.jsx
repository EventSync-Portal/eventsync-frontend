import { Button } from "@/components/ui/button";
import { Calendar, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Class Schedule Viewer</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
          View class schedules for different buildings across campus
        </p>

        <Link to="/schedule">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-lg text-lg flex items-center gap-2 mx-auto"
            size="lg"
          >
            <Calendar className="h-5 w-5" />
            <span>View Schedule</span>
          </Button>
        </Link>

        <div className="mt-12 flex justify-center items-center">
          <div className="flex items-center gap-2 text-blue-600">
            <Building className="h-5 w-5" />
            <span className="font-medium">4 Buildings Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;