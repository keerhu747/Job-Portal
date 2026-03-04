function Filter({ icon, label }) {
  return (
    <div className="flex items-center gap-1 border bg-white px-3 py-1.5 rounded-full">
      {icon}
      {label}
    </div>
  );
}
export default Filter;
