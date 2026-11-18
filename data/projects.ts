export type ProjectCategory = "Data Science & Machine Learning" | "Data Engineering" | "Software & AI Applications";

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  href?: string;
  caption?: string;
};

export type ProjectMedia = {
  cardPreview?: ProjectImage;
  caseStudy?: ProjectImage;
};

export type ProjectCapability = {
  skill: string;
  evidence: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  status: string;
  ownership: "Solo project" | "Solo academic / portfolio project" | "Solo experimental case study" | "Founder / builder" | "Collaborative project" | "Collaborative feature contribution";
  role: string;
  summary: string;
  challenge: string;
  approach: string[];
  capabilities: ProjectCapability[];
  technology: string[];
  evidence: string;
  result: string;
  limitations: string;
  links: ProjectLink[];
  media?: ProjectMedia;
  featured: boolean;
  accent: "cobalt" | "teal" | "amber";
  visual: {
    kind: "assessment" | "forecast" | "map" | "vision" | "adaptation" | "workflow" | "pose" | "pipeline";
    label: string;
  };
};

export const projects: Project[] = [
  {
    slug: "biasharamind",
    visual: { kind: "assessment", label: "Assessment / diagnosis / roadmap" },
    number: "01",
    title: "BiasharaMind",
    category: "Software & AI Applications",
    status: "Deployed product · Private beta",
    ownership: "Founder / builder",
    role: "Founder and builder",
    summary: "A founder-built SME decision-support platform that turns structured business assessments into clear diagnoses, priorities and practical 90-day roadmaps through deterministic logic and bounded AI.",
    challenge: "SME owners often make important decisions using fragmented operational information and limited access to structured advisory support. The challenge was to transform self-reported business context into useful guidance without allowing generated text to invent facts, control scoring or hide how recommendations were produced.",
    approach: [
      "Translated product and domain research on SME operations, business assessment and digital transformation into structured assessment dimensions, diagnostic logic and roadmap workflows.",
      "Modelled business profiles, assessments, diagnoses, priorities, roadmaps and reports through version-aware PostgreSQL and Supabase data structures.",
      "Kept scoring, prioritization and business-rule boundaries deterministic while using AI for bounded interpretation and writing through structured outputs, evaluation and observability.",
      "Built the Next.js and FastAPI application, controlled-access workflow, durable generation state, retries and recovery needed to support the complete private-beta journey."
    ],
    capabilities: [
      { skill: "Systems thinking", evidence: "Connected business context, assessments, scoring, diagnoses, priorities and roadmaps into a coherent decision-support workflow." },
      { skill: "System architecture", evidence: "Designed the responsibilities and interactions of the Next.js frontend, FastAPI backend, database and AI services." },
      { skill: "Data architecture & domain modelling", evidence: "Modelled business profiles, assessments, diagnoses, priorities and roadmaps through version-aware PostgreSQL and Supabase data structures." },
      { skill: "AI system design & governance", evidence: "Established deterministic scoring and prioritization boundaries, with AI limited to bounded interpretation and writing through structured outputs." },
      { skill: "Workflow orchestration & reliability engineering", evidence: "Implemented durable generation state, retries and recovery across the assessment-to-report journey." },
      { skill: "Evaluation & quality engineering", evidence: "Used automated backend tests, LLM evaluation and observability to examine workflow behavior and deterministic and AI boundaries." },
      { skill: "Product engineering", evidence: "Translated SME research and business requirements into assessment dimensions, diagnostic logic and application workflows." }
    ],
    technology: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Supabase", "Data modelling", "OpenAI", "Opik", "Structured outputs", "LLM evaluation"],
    evidence: "The deployed private beta supports the complete journey from business profile and assessment through diagnosis, priorities, roadmap and report generation. Its deterministic and AI boundaries are supported by an extensive automated backend test suite and documented beta-readiness validation.",
    result: "A deployed product in which approved beta users can complete the full assessment-to-roadmap journey. Its architecture provides a controlled foundation for evaluating whether the guidance is useful, understandable and valuable enough for business owners to return.",
    limitations: "BiasharaMind remains in controlled beta. Repeat use, usefulness, operating cost and real-world business outcomes are still being evaluated, so broad adoption or demonstrated commercial impact is not claimed.",
    links: [{ label: "Live application", url: "https://biasharamind.netlify.app" }],
    featured: true,
    accent: "cobalt"
  },
  {
    slug: "global-water-storage-forecasting",
    visual: { kind: "forecast", label: "Geospatial / multi-horizon forecasting" },
    number: "02",
    title: "Global Water Storage Forecasting",
    category: "Data Science & Machine Learning",
    status: "Completed geospatial ML case study",
    ownership: "Solo project",
    role: "Data scientist",
    summary: "Built a leakage-safe geospatial machine-learning pipeline to forecast global Total Water Storage, using rolling-origin validation, multi-horizon diagnostics, reproducible experimentation and evidence-based model selection.",
    challenge: "Masked current-TWS observations changed an apparent next-month prediction task into a mixed one-to-seven-month forecasting problem. The project needed validation that respected temporal order, spatial repetition and the exact masking pattern without leaking future observations.",
    approach: [
      "Built two target-disjoint rolling-origin folds and transplanted the test masking pattern into historical periods to reproduce effective forecast horizons.",
      "Compared deterministic baselines, LightGBM models, residual formulations, guarded specialists, an ensemble and CatBoost under predefined promotion conditions.",
      "Used Polars, DuckDB and memory-aware processing to make reproducible experimentation practical on constrained local hardware.",
      "Preserved negative results and rejected models when they failed horizon, recent-period or promotion-gate checks, even when an aggregate metric appeared promising."
    ],
    capabilities: [
      { skill: "Experimental design & validation", evidence: "Built target-disjoint rolling-origin folds and reproduced the test masking pattern to evaluate effective forecast horizons without future-data leakage." },
      { skill: "ML pipeline architecture", evidence: "Organized reproducible baselines, residual models, diagnostics and promotion conditions into a consistent forecasting workflow." },
      { skill: "Model selection & error analysis", evidence: "Compared horizon and recent-period behavior, preserved negative results and rejected challengers that failed predefined promotion conditions." },
      { skill: "Resource-aware data processing", evidence: "Used Polars, DuckDB and memory-aware processing to run experiments on constrained local hardware." }
    ],
    technology: ["Python", "Geospatial ML", "Time-series forecasting", "LightGBM", "CatBoost", "Polars", "DuckDB", "scikit-learn", "Reproducible ML"],
    evidence: "The frozen two-fold validation protocol evaluated 551,965 out-of-fold rows. The selected P3-M3B residual LightGBM model achieved a pooled local OOF RMSE of 0.583923 and a public score of 0.766408529. The difference is reported openly, and leaderboard feedback was not used to revise the frozen validation protocol.",
    result: "P3-M3B was retained as the final reference after the guarded ensemble and CatBoost challenger failed predefined promotion conditions. The completed repository preserves the validation design, experiments, diagnostics, rejected alternatives and reproducible implementation.",
    limitations: "Public-leaderboard performance differed materially from local validation, hidden labels prevent complete post-competition diagnosis, and two folds provide limited temporal diversity. The selected model is a competition prototype—not an operational drought-warning or drought-impact system.",
    links: [{ label: "Source repository", url: "https://github.com/BEMOREMJ/forecasting-global-water-storage" }],
    featured: true,
    accent: "teal"
  },
  {
    slug: "majiwatch",
    visual: { kind: "map", label: "Water observations / geospatial context" },
    number: "03",
    title: "MajiWatch",
    category: "Software & AI Applications",
    status: "Deployed V1 proof of concept",
    ownership: "Solo project",
    role: "Geospatial and application engineering",
    summary: "A deployed V1 geospatial proof of concept for making water-related observations easier to explore, contextualize and communicate.",
    challenge: "Environmental observations are often technically dense and disconnected from place. Useful monitoring needs a clear map context, transparent data handling and interfaces that work beyond specialist GIS software.",
    approach: [
      "Combined map-based exploration with concise contextual information for each observation.",
      "Designed data boundaries so collection, transformation and presentation remain traceable.",
      "Used progressive disclosure to keep the primary view understandable while retaining technical detail."
    ],
    capabilities: [
      { skill: "Geospatial application design", evidence: "Connected water-related observations, map context and a public application workflow in a deployed V1 proof of concept." },
      { skill: "Data lineage & traceability", evidence: "Defined boundaries between data collection, transformation and presentation so observations retain inspectable context." },
      { skill: "Information design", evidence: "Used map-based exploration and progressive disclosure to present environmental observations with concise contextual detail." }
    ],
    technology: ["Next.js", "Geospatial web application", "Base Sepolia", "Smart contracts"],
    evidence: "The public V1 application, source repository and Base Sepolia contract provide inspectable implementation evidence. The project won the Remix AI Bootcamp for Real-World Impact.",
    result: "A deployed V1 proof of concept connecting geospatial context with a public, verifiable application workflow.",
    limitations: "Comprehensive transaction testing, established community adoption and production-scale infrastructure have not been demonstrated.",
    links: [
      { label: "Live application", url: "https://majiwatch.vercel.app/" },
      { label: "Source repository", url: "https://github.com/BEMOREMJ/majiwatch" },
      { label: "Base Sepolia contract · 0xFCFb6bDd64D24bcD4870EB154C6d2DdeeBb26876", url: "https://sepolia.basescan.org/address/0xFCFb6bDd64D24bcD4870EB154C6d2DdeeBb26876" }
    ],
    featured: true,
    accent: "teal"
  },
  {
    slug: "pneumonia-detection",
    visual: { kind: "vision", label: "Image classification / model study" },
    number: "04",
    title: "Pneumonia Detection",
    category: "Data Science & Machine Learning",
    status: "Completed",
    ownership: "Solo academic / portfolio project",
    role: "Machine-learning practitioner",
    summary: "A machine-learning and deep-learning image-classification project using chest X-rays to examine model development, validation and responsible boundaries.",
    challenge: "Medical image classification combines class imbalance, dataset bias and serious consequences for false predictions. A technically functional classifier is not the same as a clinically useful system.",
    approach: [
      "Prepared and inspected labeled image data before model training.",
      "Used convolutional modeling and held-out evaluation to study classification behavior.",
      "Treated error analysis and responsible-use boundaries as part of the result, not an afterthought."
    ],
    capabilities: [
      { skill: "Data preparation & quality assessment", evidence: "Prepared and inspected labelled chest X-ray images before model training, with attention to class imbalance and dataset limitations." },
      { skill: "Model development & validation", evidence: "Built a convolutional image-classification workflow and used held-out evaluation to inspect model behavior." },
      { skill: "Error analysis & responsible ML", evidence: "Examined model outputs and documented educational-use boundaries alongside unresolved dataset-shift and clinical-validity questions." }
    ],
    technology: ["Python", "TensorFlow", "Keras", "NumPy", "pandas"],
    evidence: "The public repository documents the train/validation workflow and model-output inspection. No unsupported accuracy figure, clinical validation, regulatory review or deployment claim is made.",
    result: "A practical study of an end-to-end computer-vision workflow and the evaluation questions that accompany it.",
    limitations: "This is an educational prototype, not a diagnostic tool. Dataset shift and clinical validity remain unresolved.",
    links: [{ label: "Source repository", url: "https://github.com/BEMOREMJ/Pneumonia_detection" }],
    featured: false,
    accent: "amber"
  },
  {
    slug: "qwen-fine-tuning",
    visual: { kind: "adaptation", label: "LoRA / bounded model adaptation" },
    number: "05",
    title: "Qwen2.5-7B Fine-Tuning",
    category: "Data Science & Machine Learning",
    status: "Completed experiment",
    ownership: "Solo experimental case study",
    role: "Machine-learning engineer",
    summary: "An experimental, governed SME-advisory fine-tuning case study using LoRA, with the model limited to bounded explanation and writing tasks.",
    challenge: "Model adaptation must balance limited compute and dataset quality while ensuring deterministic controls—not generated text—retain decision authority.",
    approach: [
      "Prepared instruction-style training examples with attention to consistency and leakage.",
      "Applied LoRA-based adaptation to limit the number of trainable parameters.",
      "Compared outputs against the base model using repeatable prompts and review criteria while keeping deterministic controls authoritative."
    ],
    capabilities: [
      { skill: "Training-data design", evidence: "Prepared instruction-style examples with attention to consistency and leakage for bounded SME-advisory explanation and writing tasks." },
      { skill: "Parameter-efficient model adaptation", evidence: "Applied LoRA to Qwen2.5-7B to limit trainable parameters while working within compute constraints." },
      { skill: "Comparative LLM evaluation", evidence: "Compared adapted and base-model outputs using repeatable prompts and review criteria; formal benchmarking remains to be documented." },
      { skill: "AI system design & governance", evidence: "Kept deterministic controls authoritative and treated the adapted model as a separate research experiment from the deployed BiasharaMind application." }
    ],
    technology: ["Python", "PyTorch", "Qwen2.5-7B", "LoRA", "LLM evaluation"],
    evidence: "The experiment supports side-by-side output review. A formal benchmark, safety assessment and cost analysis still need to be documented.",
    result: "A reproducible case study for examining bounded SME-advisory language tasks and the tradeoffs of adaptation on constrained compute.",
    limitations: "Results are dataset- and prompt-dependent. The experiment is not presented as operating in the live BiasharaMind product, and the adapted model should not be treated as generally improved without broader evaluation.",
    links: [],
    featured: false,
    accent: "cobalt"
  },
  {
    slug: "raimon-agent-workflow",
    visual: { kind: "workflow", label: "Agent orchestration / review points" },
    number: "06",
    title: "Raimon Agent Workflow",
    category: "Software & AI Applications",
    status: "Demonstrated workflow",
    ownership: "Collaborative project",
    role: "Collaborative contributor — agent workflow engineering",
    summary: "Collaborative work coordinating specialized AI steps for tasks that benefit from planning, tool use and explicit review points.",
    challenge: "Agent-style systems can become opaque and brittle when responsibilities, state and stopping conditions are not clearly defined.",
    approach: [
      "Split the workflow into narrow roles with explicit inputs and outputs.",
      "Made state transitions and failure paths visible for easier debugging.",
      "Added review points where automated output requires human judgment."
    ],
    capabilities: [
      { skill: "Collaborative agent workflow design", evidence: "Contributed to dividing specialized AI steps into narrow roles with explicit inputs and outputs." },
      { skill: "State & failure-path modelling", evidence: "Contributed to visible state transitions and failure paths that support workflow inspection and debugging." },
      { skill: "Human review integration", evidence: "Contributed review points where automated outputs require human judgment, supported by qualitative inspection of workflow runs." }
    ],
    technology: ["Python", "LangGraph", "CrewAI", "LLM evaluation", "Git"],
    evidence: "Traceable workflow runs provide qualitative evidence about orchestration behavior. Reliability rates and production readiness are not claimed.",
    result: "A demonstrated collaborative workflow for comparing orchestration patterns and identifying where agent systems need stronger controls.",
    limitations: "Behavior depends on model and tool availability. More systematic adversarial and regression evaluation is needed, and production deployment is not claimed.",
    links: [{ label: "Team repository", url: "https://github.com/nataliatalam/Raimon.app" }],
    featured: false,
    accent: "amber"
  },
  {
    slug: "formfit-browser-pose-tracking",
    visual: { kind: "pose", label: "Pose tracking / movement analysis" },
    number: "07",
    title: "FormFit Browser Pose Tracking",
    category: "Software & AI Applications",
    status: "Browser pose-tracking prototype",
    ownership: "Collaborative feature contribution",
    role: "Collaborative feature contributor",
    summary: "A collaborative browser-based MediaPipe pose-tracking feature with deterministic squat analysis and immediate movement feedback.",
    challenge: "Real-time pose interfaces need to balance responsiveness, device constraints and uncertainty in landmark estimates across bodies and environments.",
    approach: [
      "Ran MediaPipe pose tracking in the browser to keep interaction close to the user.",
      "Translated landmarks into deterministic squat-analysis cues with conservative thresholds.",
      "Designed feedback to acknowledge tracking loss instead of presenting uncertain output as fact."
    ],
    capabilities: [
      { skill: "Browser feature engineering", evidence: "Contributed to a browser-based MediaPipe pose-tracking feature with immediate movement feedback." },
      { skill: "Deterministic decision logic", evidence: "Translated pose landmarks into squat-analysis cues using conservative thresholds." },
      { skill: "Uncertainty-aware interaction design", evidence: "Designed feedback that acknowledges tracking loss and the influence of camera angle, lighting and device constraints." }
    ],
    technology: ["TypeScript", "MediaPipe", "Browser APIs", "Deterministic analysis"],
    evidence: "Interactive testing demonstrates the browser workflow across ordinary webcam conditions. No biomechanical or clinical validation is claimed.",
    result: "A collaborative feature prototype for studying real-time, browser-based movement feedback.",
    limitations: "Camera angle, lighting, clothing and device performance can affect tracking. This is not a trained ML coaching model, medical tool or professional coaching tool.",
    links: [{ label: "Feature branch", url: "https://github.com/Modales/aifactory/tree/feature/cv-pose-tracking" }],
    featured: false,
    accent: "teal"
  },
  {
    slug: "kenya-economic-data-platform",
    visual: { kind: "pipeline", label: "Ingest / model / validate / report" },
    number: "08",
    title: "Kenya Economic Data Platform",
    category: "Data Engineering",
    status: "Completed · Public repository and deployed dashboard",
    ownership: "Solo project",
    role: "Solo developer · Personal data engineering project",
    summary: "A Python and SQL data platform that ingests historical Kenyan exchange-rate and weather data, models it in BigQuery with dbt, and publishes validated reporting through reproducible pipelines with quality checks, backfills and recovery controls.",
    challenge: "Exchange-rate and weather sources have different grains, coverage, provenance and publication constraints. The challenge was to build a reproducible historical platform that preserved raw evidence, reconciled each source into trusted reporting models and prevented failed pipeline candidates from replacing accepted outputs.",
    approach: [
      "Assessed source provenance, attribution, units and reuse constraints, then preserved retrieved raw snapshots with timestamps, checksums and ingestion manifests.",
      "Modelled separate exchange-rate and location-level weather facts in BigQuery with dbt staging, dimensions, facts and monthly reporting marts.",
      "Implemented deterministic reruns, bounded retries, targeted historical backfills and critical quality gates that protect trusted reports when candidate data fails validation.",
      "Added immutable-by-application reporting releases, source-to-report reconciliation, pipeline-health reporting, recovery procedures, an operator runbook and offline GitHub Actions validation.",
      "Published a static, interactive Plotly dashboard from the trusted weather release while withholding exchange-rate visualization until CBK redistribution terms are resolved."
    ],
    capabilities: [
      { skill: "Data architecture & dimensional modelling", evidence: "Designed separate exchange-rate and location-level weather facts with dbt staging, dimensions, facts and monthly reporting marts." },
      { skill: "Pipeline orchestration & recovery", evidence: "Implemented deterministic reruns, bounded retries, targeted historical backfills and recovery procedures." },
      { skill: "Data governance & lineage", evidence: "Preserved source snapshots, timestamps, checksums and ingestion manifests, and documented provenance and redistribution constraints." },
      { skill: "Quality engineering & guarded publishing", evidence: "Used quality gates and source-to-report reconciliation to prevent failed candidates from replacing trusted reporting releases." },
      { skill: "Reporting & operational design", evidence: "Connected validated reporting releases to an interactive weather dashboard, pipeline-health reporting and an operator runbook." }
    ],
    technology: ["Python", "SQL", "BigQuery Sandbox", "dbt Core", "SQLite", "Plotly", "GitHub Actions", "GitHub Pages"],
    evidence: "The verified release reconciles 177 CBK exchange-rate observations and 306 NASA POWER weather observations into 19 monthly reporting rows: nine exchange-rate rows and ten weather rows. All nine sprint acceptance gates passed, and the warehouse completed 39 dbt tests successfully.",
    result: "A reproducible historical data platform with preserved source evidence, warehouse models, guarded publication, recovery documentation and an interactive weather dashboard. A Nairobi September backfill added exactly 30 observations without changing baseline records, while an intentionally introduced missing-day defect failed live dbt checks and left trusted reporting unchanged before correction and recovery succeeded.",
    limitations: "This is a historical snapshot rather than a live economic feed. Execution is orchestrated locally, while GitHub Actions validates code and does not schedule warehouse pipelines. Billing remained disabled, BigQuery Sandbox resources expire, and NASA POWER values are gridded estimates at representative points rather than station observations. The platform processes CBK exchange rates, but their public visualization remains withheld while redistribution terms are unresolved.",
    links: [
      { label: "View dashboard", url: "https://bemoremj.github.io/kenya-economic-data-platform/" },
      { label: "View code", url: "https://github.com/BEMOREMJ/kenya-economic-data-platform" }
    ],
    media: {
      cardPreview: {
        src: "/images/projects/kenya-economic-data-platform-overview.png",
        alt: "Kenya Economic Data Platform dashboard overview showing historical weather coverage and monthly charts.",
        href: "https://bemoremj.github.io/kenya-economic-data-platform/"
      },
      caseStudy: {
        src: "/images/projects/kenya-economic-data-platform-weather.png",
        alt: "Detailed Kenya Economic Data Platform weather dashboard with historical monthly temperature and precipitation charts.",
        href: "https://bemoremj.github.io/kenya-economic-data-platform/",
        caption: "Historical weather detail from the verified reporting release. Open the interactive dashboard for Plotly hover values and coverage details."
      }
    },
    featured: true,
    accent: "cobalt"
  }
];

export const projectCategories: ProjectCategory[] = [
  "Data Science & Machine Learning",
  "Data Engineering",
  "Software & AI Applications"
];

export const projectCategoryIds: Record<ProjectCategory, string> = {
  "Data Science & Machine Learning": "data-science",
  "Data Engineering": "data-engineering",
  "Software & AI Applications": "software-ai"
};

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
