export default function Badge({ label }) {
  return (
    <span className="px-4 py-2 rounded-xl shadow bg-white dark:bg-gray-700 text-center">
      {label}
    </span>
  );
}
