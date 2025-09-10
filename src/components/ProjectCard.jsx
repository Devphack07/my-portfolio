export default function ProjectCard({ title, description, image, live, code }) {
  return (
    <div className="rounded-2xl shadow p-4 bg-white dark:bg-gray-700">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover rounded-xl mb-4"
      />
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm mb-3">{description}</p>
      <div className="flex gap-2">
        {live && (
          <a
            href={live}
            className="text-blue-500 hover:underline text-sm"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        )}
        {code && (
          <a
            href={code}
            className="text-blue-500 hover:underline text-sm"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}
    