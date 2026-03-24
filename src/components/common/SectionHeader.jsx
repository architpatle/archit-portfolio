export default function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="w-[2px] h-6 bg-accent"></div>
      <h2 className="text-2xl md:text-3xl font-heading">
        {title}
      </h2>
    </div>
  );
}