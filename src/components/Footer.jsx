const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-4 bg-black text-white text-center">
      <p>© {currentYear} Carlos Landaeta. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
