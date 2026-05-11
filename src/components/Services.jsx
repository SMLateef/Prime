import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Brand Deals",
      desc: "We connect creators with brands.",
    },
    {
      title: "Campaign Management",
      desc: "We manage collaborations smoothly.",
    },
    {
      title: "Growth Support",
      desc: "Helping creators grow faster online.",
    },
  ];

  return (
    <section className="services">
      <h2>What We Do</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-box"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}