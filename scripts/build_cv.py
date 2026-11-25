"""Build the referral CV from the portfolio data with Node 24 and ReportLab."""

import json
import subprocess
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
SITE = "https://markjacob.netlify.app"
SELECTION = (
    "global-water-storage-forecasting",
    "biasharamind",
    "qwen-fine-tuning",
    "kenya-economic-data-platform",
)
INK = "#192F40"
TEAL = "#136362"


def load_content():
    source = """
        import * as profile from './data/profile.ts';
        import { projects } from './data/projects.ts';
        console.log(JSON.stringify({ ...profile, projects }));
    """
    return json.loads(subprocess.check_output(
        ["node", "--input-type=module", "-e", source], cwd=ROOT, encoding="utf-8"
    ))


def build():
    data = load_content()
    profile, career = data["profile"], data["career"]
    target = ROOT / "public" / career["cvPath"].lstrip("/")
    width, height = A4
    margin = 42
    y = height - 40
    pdf = Canvas(str(target), pagesize=A4, invariant=True)
    pdf.setTitle(f'{profile["name"]} | {career["title"]}')
    pdf.setAuthor(profile["name"])
    pdf.setSubject("Referral CV")

    def line(markup, size=10.5, leading=14.2, after=4, font="Helvetica", color=INK):
        nonlocal y
        style = ParagraphStyle("cv", fontName=font, fontSize=size, leading=leading,
                               alignment=TA_LEFT, textColor=HexColor(color))
        paragraph = Paragraph(markup, style)
        _, used = paragraph.wrap(width - 2 * margin, height)
        y -= used
        paragraph.drawOn(pdf, margin, y)
        y -= after

    def section(label):
        nonlocal y
        y -= 5
        pdf.setStrokeColor(HexColor("#CAD9D9"))
        pdf.line(margin, y, width - margin, y)
        y -= 6
        line(label, size=12, leading=14, after=4, font="Helvetica-Bold", color=TEAL)

    def link(label, href):
        return f'<a href="{escape(href)}" color="{TEAL}"><u>{escape(label)}</u></a>'

    line(escape(profile["name"]), 26, 29, 2, "Helvetica-Bold")
    line(escape(career["title"]), 14, 17, 5, color=TEAL)
    contact = [profile["location"], link(profile["email"], "mailto:" + profile["email"]),
               link("markjacob.netlify.app", SITE), link("GitHub", profile["github"])]
    line(" &nbsp;|&nbsp; ".join(contact), after=6)
    line(escape(career["summary"]), after=5)

    section("Professional experience")
    for item in data["experience"]:
        role = escape(item["role"])
        org = escape(item["organization"])
        dates = item["dates"].replace("–", "-")
        line(f"<b>{role}</b> | {org} | {dates}", after=1)
        line(escape(item["detail"]), after=5)

    section("Selected projects")
    projects = {p["slug"]: p for p in data["projects"]}
    for slug in SELECTION:
        project = projects[slug]
        title = link(project["title"], f"{SITE}/projects/{slug}/")
        line(f'<b>{title}</b> | {escape(project["ownership"])}', after=1)
        line(escape(project["summary"]), after=5)

    section("Technical skills")
    for group in data["skillGroups"]:
        line(f'<b>{escape(group["title"])}</b> | ' +
             ", ".join(escape(skill) for skill in group["skills"]), after=2)

    section("Education")
    for item in data["education"]:
        detail = item["detail"].replace(" · ", ", ")
        line(f'<b>{escape(item["credential"])}</b> | {escape(item["school"])} | {detail}', after=2)

    section("Additional experience")
    for item in data["additionalExperience"]:
        dates = item["dates"].replace("–", "-")
        line(f'{escape(item["role"])} | {escape(item["organization"])} | {dates}', after=2)

    if y < 27:
        raise ValueError(f"CV exceeds the one-page layout (bottom margin {y:.1f} pt)")
    pdf.save()
    print(f"Wrote {target} (bottom margin {y:.1f} pt)")


if __name__ == "__main__":
    build()
