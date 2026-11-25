# Career content and resume guidance

Mark wants systems thinking, architecture and other demonstrated engineering capabilities reflected in his portfolio, GitHub profile and future job-application resumes.

## Source of truth

- `data/projects.ts`: each project's ownership, status, applied capabilities, supporting evidence and limitations.
- `data/profile.ts`: documented tools and broader capabilities, education and experience.
- The referral CV uses the same 15 skills, four experience entries and project summaries as the website. Run `python scripts/build_cv.py` with Node 24.13.0 and ReportLab after editing the data. The generated PDF goes in `public/` for the static export.

## Tailoring each application

Select capabilities that fit the job description and support each with a concrete design decision or contribution. Include the relevant tools, while giving enough context to explain what Mark designed, built, evaluated or contributed. Avoid reproducing the entire skill inventory in every resume.

Use this evidence map when choosing examples:

| Project | Relevant capabilities | Scope to preserve |
| --- | --- | --- |
| BiasharaMind | Systems thinking; system architecture; data architecture and domain modelling; AI system design and governance; workflow orchestration; reliability engineering; evaluation and quality engineering; product engineering | Founder and builder; deployed private beta; business outcomes remain under evaluation |
| BiasharaMind Qwen2.5-7B fine-tuning | Training-data design, LoRA adaptation and rule-based LLM evaluation | Solo experiment separate from the deployed application. The final adapter averaged 20.8/21 across ten held-out synthetic outputs. Broader validation remains open. |
| Kenya Economic Data Platform | Data architecture and dimensional modelling; pipeline orchestration and recovery; data governance and lineage; quality gates; guarded publishing; reporting and operational design | Solo historical data platform; local orchestration; public weather dashboard |
| Global Water Storage Forecasting | Experimental and validation design; ML pipeline architecture; model selection and error analysis; resource-aware processing | Solo competition case study; local and public scores differ; operational drought-warning performance is not established |
| MajiWatch | Location-based reporting, evidence linkage and issue tracking | Solo deployed V1 proof of concept. Adoption remains unmeasured. |
| Pneumonia Detection | Data preparation and quality assessment; model development and validation; error analysis and responsible ML | Solo educational image-classification prototype; no clinical validation |
| Raimon Agent Workflow | Collaborative agent workflow design; state and failure-path modelling; human review integration | Collaborative contribution; qualitative workflow evidence |
| FormFit Browser Pose Tracking | Browser feature engineering; deterministic decision logic; uncertainty-aware interaction design | Collaborative feature contribution; pose-tracking prototype; no biomechanical or clinical validation |

## Wording rules

- Prefer an action, its purpose and an inspectable implementation detail over an unsupported expertise label.
- Use broader capability names only where the project evidence supports them. System architecture does not imply an architect job title, enterprise scale or production maturity.
- Keep adapted-model experiments distinct from live product functionality.
- Preserve the original ownership labels; describe collaborative work as contributions.
- Use only verified metrics, public links and dates. Keep credentials and private project details out of application materials.
- Treat this as guidance for future resumes; tailor and review each application separately.
