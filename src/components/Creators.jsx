import { motion } from "framer-motion";

export default function Creators() {
  const creators = [
    // {
    //   name: "Aman Verma",
    //   niche: "Tech Creator • 120K Followers",
    // },
    // {
    //   name: "Sara Khan",
    //   niche: "Fashion Creator • 80K Followers",
    // },
    // {
    //   name: "Rahul Sharma",
    //   niche: "Fitness Creator • 200K Followers",
    // },
  ];

  return (
    <section className="creators">
      {/* <h2>Featured Creators</h2> */}

      <div className="creator-grid">
        {creators.map((creator, index) => (
          <motion.div
            className="creator-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{creator.name}</h3>
            <p>{creator.niche}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}