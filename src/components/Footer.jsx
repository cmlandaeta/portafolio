const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-4 bg-black text-gray-500 text-center animate-fade-left animate-once animate-duration-700">
      <p>© {currentYear} Carlos Landaeta. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
