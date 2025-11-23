export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 border-t border-gray-800 text-center">
      <div className="flex justify-center gap-6 mb-4">

        <a
          href="https://github.com/akash4426"
          target="_blank"
          className="hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kakashreddy"
          target="_blank"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:akashkarri2006@gmail.com"
          className="hover:text-white transition"
        >
          Gmail
        </a>

      </div>

      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Akash Karri — All Rights Reserved.
      </p>
    </footer>
  );
}
