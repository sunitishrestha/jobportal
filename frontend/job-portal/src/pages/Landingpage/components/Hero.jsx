import { motion } from "framer-motion";
import { Search, ArrowRight, Users, Building2, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const isAuthenticated = true;
  const user = { fullName: "Alex", role: "employer" };
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: "Active Users", value: "2.4M+" },
    { icon: Building2, label: "Companies", value: "50K+" },
    { icon: TrendingUp, label: "Jobs Posted", value: "120K+" },
  ];

  return (
    <section className="pt-24 pb-16 bg-white min-h-screen flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Find Your Dream Job or
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-4">
              Perfect Hire
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            Connecting talented professionals with innovative companies.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/find-jobs")}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Find Jobs
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                navigate(
                  isAuthenticated && user.role === "employer"
                    ? "/employer-dashboard"
                    : "/login",
                )
              }
              className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold"
            >
              Post a Job
            </motion.button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
              >
                <stat.icon className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
