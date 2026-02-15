type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300">
      {/* Image placeholder – replace later with real screenshots */}
      <div className="h-40 bg-zinc-800 rounded-xl mb-4" />

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-gray-400 text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-sm text-purple-400">
        {tech.map((item, index) => (
          <span key={index}>#{item}</span>
        ))}
      </div>
    </div>
  );
}
