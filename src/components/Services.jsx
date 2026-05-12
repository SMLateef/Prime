import { motion } from "framer-motion";

export default function Services() {

  const creatorServices = [
    "Brand Sponsorships",
    "Paid Collaborations",
    "Growth Strategy",
    "Campaign Management",
  ];

  const brandServices = [
    "Influencer Marketing",
    "Creator Discovery",
    "Campaign Execution",
    "UGC Content",
  ];

  return (
    <section className="services" id="services">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Our Services
      </motion.h2>

      <div className="services-wrapper">

        {/* Creator Side */}
        <motion.div
          className="service-column"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>For Creators</h3>

          {creatorServices.map((service, index) => (
            <div className="service-item" key={index}>
              {service}
            </div>
          ))}
        </motion.div>

        {/* Brand Side */}
        <motion.div
          className="service-column"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>For Brands</h3>

          {brandServices.map((service, index) => (
            <div className="service-item" key={index}>
              {service}
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}