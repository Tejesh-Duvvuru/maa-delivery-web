const ServiceCard: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-green-500">
    <div className="text-4xl sm:text-5xl mb-4 text-green-700 animate-bounce">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
      {description}
    </p>
  </div>
);
export default ServiceCard;
