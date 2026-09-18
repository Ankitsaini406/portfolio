import { timelines } from "@/lib/data/timelines";
import { Laptop, Layers, Server, Smartphone } from "lucide-react";

const getRoleIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("mobile") || t.includes("flutter")) return <Smartphone />;
  if (t.includes("backend") || t.includes("node")) return <Server />;
  if (t.includes("lead") || t.includes("senior")) return <Layers />;
  return <Laptop />;
};

function getSkillsForJob(jobtitle: string): string[] {
  const t = jobtitle.toLowerCase();
  if (t.includes('senior') || t.includes('lead')) return ['Architecture', 'Leadership', 'Scalability'];
  if (t.includes('flutter')) return ['Flutter', 'Dart', 'iOS', 'Android'];
  if (t.includes('full stack')) return ['React', 'Next.js', 'Node.js', 'DB'];
  return ['Development', 'UI/UX', 'API'];
}

export default function TimelineSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden" id="timeline">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="font-mono text-sm tracking-widest text-secondary uppercase">Professional Journey</span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 text-foreground">Experience.</h2>
        </div>

        {/* Timeline Grid */}
        <div className="relative">

          {/* The Active Line (Absolute Positioned in Center) */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 z-0">
            <div className="w-full h-full bg-linear-to-b from-secondary via-foreground to-secondary opacity-30" />
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-16 md:gap-24">
            {timelines.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`timeline-row relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >

                  {/* 1. Date Side */}
                  <div className={`w-full md:w-1/2 pl-12 md:px-12 flex flex-col ${isEven ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}>
                    <div className="timeline-date-desktop hidden md:block">
                      <span className="font-mono text-xs uppercase tracking-widest text-secondary opacity-80">
                        {item.joinDate} — {item.endDate}
                      </span>
                      <div className="text-6xl font-black text-muted/40 mt-2">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* 2. The Dot (Center Anchor) */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-10 h-10 flex items-center justify-center z-20">
                    <span className="animate-ping absolute inline-flex h-3.5 w-3.5 rounded-full bg-foreground/30 opacity-75" />
                    <div className="relative timeline-dot w-4 h-4 rounded-full bg-background border-2 border-foreground shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-150 cursor-pointer" />
                  </div>

                  {/* 3. Content Side */}
                  <div className="w-full md:w-1/2 pl-12 md:px-12 mt-2 md:mt-0">

                    {/* Mobile Date */}
                    <div className="timeline-date-mobile md:hidden mb-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-secondary">
                        {item.joinDate} — {item.endDate}
                      </span>
                    </div>

                    {/* The Card */}
                    <div className="timeline-card bg-primary-bg/80 border border-border hover:border-l-4 hover:border-l-foreground p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-foreground">
                          {getRoleIcon(item.jobtitle)}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">{item.jobtitle}</h3>
                          <p className="text-sm font-medium text-secondary">@ {item.name}</p>
                        </div>
                      </div>

                      <p className="text-secondary leading-relaxed mb-6 text-sm md:text-base">
                        {item.work}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {(item.skills || getSkillsForJob(item.jobtitle)).map((tech, i) => (
                          <span key={i} className="px-3 py-1 text-[10px] font-mono border border-border rounded-md text-secondary bg-secondary/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}