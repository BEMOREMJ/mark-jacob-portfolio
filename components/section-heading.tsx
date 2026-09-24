type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionHeading({ index, eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{index}</span><p>{eyebrow}</p></div>
      <div>
        <h2>{title}</h2>
        {body && <p className="section-intro">{body}</p>}
      </div>
    </div>
  );
}
