export default function Navbar() {
  const whatsappLink = "https://wa.me/919492479080";

  return (
    <nav className="navbar">
      <h1>Prime Media</h1>

      <a href={whatsappLink} target="_blank">
        <button>Contact</button>
      </a>
    </nav>
  );
}