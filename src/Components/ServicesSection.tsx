import ServiceCard from "./ServiceCard";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "🍽️",
      title: "Food Delivery",
      description:
        "Deliver fresh home-cooked meals, tiffins, or groceries anywhere. Safe and quick delivery from kitchen to doorstep.",
    },
    {
      icon: "📦",
      title: "Express Parcel (Personal Courier)",
      description:
        "Send your personal parcels, gifts, or important items fast and safely – door-to-door within cities or across India.",
    },
    {
      icon: "🏢",
      title: "Business Logistics (B2B)",
      description:
        "We support businesses with reliable transport for goods, raw materials, or bulk deliveries. Seamless and on time.",
    },
    {
      icon: "🚚",
      title: "Truck or Cargo Booking",
      description:
        "Need a full truck or just some space? Book what you need – for shifting homes, big orders, or commercial use.",
    },
  ];

  return (
    <div className="w-full lg:w-1/2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};
export default ServicesSection;
