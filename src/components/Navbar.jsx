export default function Navbar() {
  const whatsappLink = "https://wa.me/919492479080";

  return (
    <nav className="navbar">
      <h1>Prime Media</h1>

      <div className="nav-links">

        <a href="#services">
          Services
        </a>

        <a href="#blog">
          Blog
        </a>

        <a href={whatsappLink} target="_blank">
          <button>Contact</button>
        </a>

      </div>
    </nav>
  );
}