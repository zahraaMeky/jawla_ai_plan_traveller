import React from "react";
import { FaPlane, FaHotel, FaIdCard, FaShip } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "رحلات سياحية",
    description: "نقدم مجموعة متنوعة من الرحلات السياحية داخل وخارج البلاد لتلبية جميع اهتماماتك.",
    icon: <FaPlane className="h-6 w-6 text-white" />,
  },
  {
    title: "حجز الفنادق",
    description: "نساعدك في حجز الفنادق الفاخرة أو المناسبة لميزانيتك في وجهاتك المفضلة.",
    icon: <FaHotel className="h-6 w-6 text-white" />,
  },
  {
    title: "تأشيرات السفر",
    description: "نساعدك في الحصول على تأشيرات السفر بسهولة للعديد من الوجهات الدولية.",
    icon: <FaIdCard className="h-6 w-6 text-white" />,
  },
  {
    title: "الرحلات البحرية",
    description: "استمتع برحلات بحرية فاخرة إلى الوجهات الساحلية حول العالم.",
    icon: <FaShip className="h-6 w-6 text-white" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Cards start off-screen and transparent
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }, // Stagger animations
};

const Services = () => {
  return (
    <motion.div
     id="services"
      className="my-5 p-8 text-white"
     
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="rounded-xl bg-orange-50 p-6 text-center shadow-xl hover:shadow-2xl transition-all"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }} // Slightly scales on hover
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#DF6951] shadow-lg shadow-orange-400/40">
              {service.icon}
            </div>
            <h2 className="mt-6 text-xl font-medium text-gray-800">{service.title}</h2>
            <p className="mt-2 text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
