import type { Project } from "@/data/projects";

// Conceptual diagrams with no simulated metrics or product screenshots.
function ProjectDiagram({ kind }: { kind: Project["visual"]["kind"] }) {
  switch (kind) {
    case "assessment":
      return <>
        <path className="diagram-wire" d="M144 110H188M252 110H296" />
        <rect className="diagram-panel" x="56" y="49" width="88" height="122" rx="8" />
        {[77, 101, 125].map((y) => <g key={y}><rect className="diagram-accent" x="72" y={y} width="10" height="10" rx="2" /><path className="diagram-wire" d={`M94 ${y + 5}h31`} /></g>)}
        <path className="diagram-core" d="m220 73 37 37-37 37-37-37Z" />
        <path className="diagram-light" d="m207 110 9 9 18-20" />
        <rect className="diagram-panel" x="296" y="49" width="88" height="122" rx="8" />
        <path className="diagram-wire" d="M315 75h49M315 92h30M316 146v-24h16v-15h17v-14h16" />
        <circle className="diagram-accent" cx="365" cy="93" r="5" />
      </>;
    case "forecast":
      return <>
        <circle className="diagram-panel" cx="147" cy="110" r="74" />
        <ellipse className="diagram-wire" cx="147" cy="110" rx="35" ry="74" />
        <path className="diagram-wire" d="M73 110h148M87 67q60 35 120 0M87 153q60-35 120 0" />
        <path className="diagram-accent-fill" d="m103 82 23-10 12 24-17 18 9 22-15 16-18-34Z" />
        <path className="diagram-wire" d="M240 55v112h144M302 55v112" />
        <path className="diagram-band" d="m302 103 23-26 22 6 28-35v75l-28-12-22 10-23-8Z" />
        <path className="diagram-trace" d="m244 145 19-28 20 9 19-22 23-7 22-3 28-10" />
        <circle className="diagram-accent" cx="302" cy="104" r="5" />
      </>;
    case "map":
      return <>
        <path className="diagram-panel" d="m63 55 101-19 111 24 102-19v124l-102 20-111-24-101 19Z" />
        <path className="diagram-wire" d="M164 36v125M275 60v125M64 108l99-18 112 28 102-25" />
        <path className="diagram-river" d="M214 48c-45 27 33 40-10 69s-8 42-27 57" />
        {[[126, 87], [293, 104], [238, 151]].map(([x, y]) => <g key={x}><circle className="diagram-band" cx={x} cy={y} r="22" /><circle className="diagram-core" cx={x} cy={y} r="10" /><circle className="diagram-light-fill" cx={x} cy={y} r="3" /></g>)}
      </>;
    case "vision":
      return <>
        <rect className="diagram-panel" x="96" y="28" width="248" height="164" rx="9" />
        <path className="diagram-wire" d="M112 59V44h22M306 44h22v15M112 160v15h22M306 175h22v-15M220 60v92" />
        <path className="diagram-band" d="M207 65c-24-22-60 27-60 66 0 30 42 24 60 1ZM233 65c24-22 60 27 60 66 0 30-42 24-60 1Z" />
        <path className="diagram-wire" d="m220 76-31 27-16 27M220 76l31 27 16 27M189 103l8 30M251 103l-8 30" />
        <path className="diagram-trace" d="M124 117h192" />
        <rect className="diagram-accent-outline" x="248" y="107" width="39" height="38" rx="4" />
      </>;
    case "adaptation":
      return <>
        <path className="diagram-wire" d="M106 72 188 50l64 60-64 60-82-22M106 72l82 98M106 148l82-98M188 50v120M252 110h62" />
        {[72, 110, 148].map((y) => <circle className="diagram-panel" key={y} cx="106" cy={y} r="14" />)}
        {[50, 110, 170].map((y) => <circle className="diagram-core" key={y} cx="188" cy={y} r="14" />)}
        <circle className="diagram-panel" cx="252" cy="110" r="14" />
        <rect className="diagram-panel" x="314" y="73" width="62" height="74" rx="8" />
        <path className="diagram-trace" d="M330 97h30M345 82v30M330 128h30" />
        <path className="diagram-accent-outline" d="M188 34V18h157v55" />
      </>;
    case "workflow":
      return <>
        <path className="diagram-wire" d="M93 110h61V58h64M154 110v52h64M250 58h58v52h38M250 162h58v-52" />
        <rect className="diagram-panel" x="57" y="88" width="44" height="44" rx="9" />
        <rect className="diagram-panel" x="211" y="36" width="44" height="44" rx="9" />
        <rect className="diagram-panel" x="211" y="140" width="44" height="44" rx="9" />
        <path className="diagram-core" d="m346 83 27 27-27 27-27-27Z" />
        <path className="diagram-light" d="m336 110 7 7 13-15" />
        <circle className="diagram-accent" cx="79" cy="110" r="5" />
        <path className="diagram-trace" d="M224 52h18M224 64h12M224 156h18M224 168h12" />
      </>;
    case "pose":
      return <>
        <rect className="diagram-panel" x="103" y="24" width="234" height="172" rx="10" />
        <path className="diagram-wire" d="M121 58V42h19M300 42h19v16M121 161v16h19M300 177h19v-16M137 177h164" />
        <path className="diagram-pose-ghost" d="m220 63-19 22 2 45-14 40m31-107 22 24-4 43 17 40M201 85l-29 30M242 87l29 28M203 130h35" />
        <circle className="diagram-core" cx="220" cy="56" r="12" />
        <path className="diagram-trace" d="m220 74-25 24 22 32-35 23 29 24M220 74l29 24-12 32 30 23-16 24M195 98l-38-8M249 98l33-8M217 130h20" />
        {[[195, 98], [249, 98], [217, 130], [237, 130], [182, 153], [267, 153]].map(([x, y]) => <circle className="diagram-core" key={`${x}-${y}`} cx={x} cy={y} r="4" />)}
      </>;
    case "pipeline":
      return <>
        <path className="diagram-wire" d="M104 110h48M192 110h52M284 110h48" />
        <rect className="diagram-panel" x="56" y="74" width="48" height="72" rx="7" />
        <path className="diagram-trace" d="M69 92h22M69 108h22M69 124h15" />
        <path className="diagram-core" d="m172 85 25 25-25 25-25-25Z" />
        <rect className="diagram-panel" x="244" y="74" width="40" height="72" rx="7" />
        <path className="diagram-trace" d="m252 110 8 8 16-18" />
        <rect className="diagram-panel" x="332" y="64" width="58" height="92" rx="7" />
        <path className="diagram-trace" d="M344 137v-23h9V97h10V85h14" />
      </>;
  }
}

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${project.accent} ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <div className="visual-topline"><span>PROJECT / {project.number}</span><span>Concept illustration</span></div>
      <svg className="project-diagram" viewBox="0 0 440 220" fill="none" strokeLinecap="round" strokeLinejoin="round" focusable="false">
        <ProjectDiagram kind={project.visual.kind} />
      </svg>
      <span className="visual-label">{project.visual.label}</span>
    </div>
  );
}
