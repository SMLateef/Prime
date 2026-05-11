import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        About Prime Media
      </motion.h2>

      <motion.div
        className="blog-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p>
          I’m the founder of Prime Media, a creator hub focused on
          connecting high-potential creators with brands. We specialize
          in securing paid collaborations and long-term partnerships so
          creators can focus entirely on creating content.
        </p>

        <br />

        <p>
          Prime Media acts as your professional buffer and growth engine.
          We handle the business side — from influencer outreach and
          campaign management to growth strategy — ensuring creators get
          fair market value for every collaboration.
        </p>
      </motion.div>
    </section>
  );
}