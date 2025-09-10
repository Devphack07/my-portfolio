export default function Section({ id, title, children, className }) {
  return (
    <section
      id={id}
      className={`py-20 px-6 max-w-6xl mx-auto ${className || ""}`}
    >
      {title && (
        <h3 className="text-3xl font-bold mb-6 text-center">{title}</h3>
      )}
      {children}
    </section>
  );
}
