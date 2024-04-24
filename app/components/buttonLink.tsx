const ButtonLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      className="block px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50"
      href={href}
    >
      {text}
    </a>
  );
};

export default ButtonLink;
