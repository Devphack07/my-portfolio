import Section from "../components/Section";
import Badge from "../components/Badge";

export default function Skills() {
  const skills = ["React", "Tailwind", "JavaScript", "Python", "AI Tools", "Git"];

  return (
    <Section id="skills" title="Skills" className="bg-gray-100 dark:bg-gray-800">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {skills.map((s) => (
          <Badge key={s} label={s} />
        ))}
      </div>
    </Section>
  );
}
