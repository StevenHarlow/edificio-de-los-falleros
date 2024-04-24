const Navbar = () => {
  return (
    <nav className="fixed z-1000 w-full flex items-center justify-center h-16 gap-20 px-10 bg-black text-white">
      <a href="/">Inicio</a>
      <a href="/vecinos">Vecinos</a>
    </nav>
  );
};

export default Navbar;
