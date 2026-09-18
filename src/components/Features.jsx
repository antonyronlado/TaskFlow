const features = [ { title: "Simple", description: "Create and organize tasks without unnecessary complexity.", }, 
    { title: "Focused", description: "Keep your attention on the tasks that matter most.", }, 
    { title: "Flexible", description: "Manage your workflow in a way that works for you.", }, ];

function Features() {
    return (
        <section id="Features" className="p-6">
            <div className="mx-auto max-w-2xl">
                <div className="mb-12 text-center"> 
                    <h2 className = "text-6xl font-italic [text-shadow:0_0_10px_white]">Everything you need</h2>
                    <p className = "mt-3 font-lg font-roboto">A simple foundation for managing your everyday work</p>
                </div>
                <div className="grid gap-6 md:grid-cols-3 ">
                    {features.map((feature) => ( 
                    <div key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-[0_0_15px_rgba(255,255,255,0.35)]" > 
                        <h3 className="text-xl font-semibold"> {feature.title} </h3>
                        <p className="mt-3 leading-7 text-slate-400"> {feature.description} </p> 
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}

export default Features;