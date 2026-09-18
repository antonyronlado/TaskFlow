function Navbar() {
    return (
        <nav>
            <div className="mx-auto flex min-w-xl items-center justify-between p-4">
                <h1 className="text-2xl font-bold">Task<span className="text-cyan-500">Flow</span></h1>
                <div className="flex items-center justify-right gap-4 text-lg font-serif text-slate-300">
                    <a href="#features">Features</a>
                    <a href="#about">Tasks</a>
                    <a href="#contact">About</a>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;