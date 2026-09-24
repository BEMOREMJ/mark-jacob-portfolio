export type ProjectCategory = "Data Science & Machine Learning" | "Software & AI Applications";

export type ProjectLink = {
  label: string;
  url: string;
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
  technology: string[];
  evidence: string;
  result: string;
  limitations: string;
  links: ProjectLink[];
  featured: boolean;
  accent: "cobalt" | "teal" | "amber";
};

export const projects: Project[] = [
  {
    slug: "biasharamind",
    number: "01",
    title: "BiasharaMind",
    category: "Software & AI Applications",
    status: "Private beta",
    ownership: "Founder / builder",
    role: "Founder and builder",
    summary: "An AI-assisted business workspace exploring how small teams can turn fragmented operational information into clearer, reviewable decisions.",
    challenge: "Small businesses often hold useful context across conversations, documents and informal workflows. The challenge is to make AI assistance useful without hiding uncertainty or removing people from important decisions.",
    approach: [
      "Structured the product around bounded business tasks instead of an open-ended chatbot.",
      "Designed orchestration patterns that keep source context, intermediate steps and human review visible.",
      "Separated interface, application logic and AI workflow concerns so each layer can evolve independently."
    ],
    technology: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "LangGraph", "LLM evaluation"],
    evidence: "The project is represented by a working application architecture and iterative evaluation of task flows. Public benchmark results and production usage figures are not claimed.",
    result: "A coherent product direction and technical foundation for testing reliable AI-assisted business workflows.",
    limitations: "This is an evolving product. Real-world utility, reliability and operating cost still require broader user testing and documented evaluation.",
    links: [{ label: "Live application", url: "https://biasharamind.netlify.app" }],
    featured: true,
    accent: "cobalt"
  },
  {
    slug: "global-water-storage-forecasting",
    number: "02",
    title: "Global Water Storage Forecasting",
    category: "Data Science & Machine Learning",
    status: "Ongoing portfolio case study",
    ownership: "Solo project",
    role: "Data scientist",
    summary: "A forecasting workflow for investigating changes in terrestrial water storage from time-series and geospatial signals.",
    challenge: "Water storage varies across both space and time, while missing observations, scale differences and regional patterns complicate straightforward forecasting.",
    approach: [
      "Prepared temporal and spatial inputs with explicit attention to missingness and consistent units.",
      "Compared baseline and machine-learning forecasting approaches rather than relying on a single model.",
      "Organized validation around held-out time periods to reduce leakage from future observations."
    ],
    technology: ["Python", "pandas", "NumPy", "scikit-learn", "LightGBM", "Google Earth Engine"],
    evidence: "Validation is framed around reproducible temporal splits and comparison with simple baselines. No public competition score or local validation metric is presented without supporting project evidence.",
    result: "A competition-modelling workflow for studying water-storage forecasts and their geographic variation, documented here as an ongoing portfolio case study.",
    limitations: "Forecast skill is sensitive to geography, data coverage and the chosen horizon. The work should not be interpreted as an operational drought-warning system.",
    links: [],
    featured: true,
    accent: "teal"
  },
  {
    slug: "majiwatch",
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
    technology: ["Python", "TensorFlow", "Keras", "NumPy", "pandas"],
    evidence: "The public repository documents the train/validation workflow and model-output inspection. No unsupported accuracy figure, clinical validation, regulatory review or deployment claim is made.",
    result: "A practical study of an end-to-end computer-vision workflow and the evaluation questions that accompany it.",
    limitations: "This is an educational prototype, not a diagnostic tool. Dataset shift and clinical validity remain unresolved.",
    links: [{ label: "Source repository", url: "https://github.com/BEMOREMJ/Pneumonia_detection" }],
    featured: true,
    accent: "amber"
  },
  {
    slug: "qwen-fine-tuning",
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
    technology: ["TypeScript", "MediaPipe", "Browser APIs", "Deterministic analysis"],
    evidence: "Interactive testing demonstrates the browser workflow across ordinary webcam conditions. No biomechanical or clinical validation is claimed.",
    result: "A collaborative feature prototype for studying real-time, browser-based movement feedback.",
    limitations: "Camera angle, lighting, clothing and device performance can affect tracking. This is not a trained ML coaching model, medical tool or professional coaching tool.",
    links: [{ label: "Feature branch", url: "https://github.com/Modales/aifactory/tree/feature/cv-pose-tracking" }],
    featured: false,
    accent: "teal"
  }
];

export const projectCategories: ProjectCategory[] = [
  "Data Science & Machine Learning",
  "Software & AI Applications"
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
