import { motion } from "framer-motion";

export default function Hero() {
  const whatsappLink = "https://wa.me/919492479080";

  return (
    <section className="hero">

      <motion.img
        src="public/logo.png"
        alt="Prime Media Logo"
        className="hero-logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Prime Media
        <br />
        Connects Creators With Brands
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Helping creators get sponsorships and helping brands
        find the right influencers.
      </motion.p>

      <motion.a
        href={whatsappLink}
        target="_blank"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <button>Get Started</button>
      </motion.a>

    </section>
  );
}