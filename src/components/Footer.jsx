function Footer() {
  return (
    <footer id="about" className="border-t border-slate-800 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <h2 className="text-lg font-bold">
          Task<span className="text-cyan-400">Flow</span>
        </h2>
        <p className="text-sm text-slate-200">
          Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;