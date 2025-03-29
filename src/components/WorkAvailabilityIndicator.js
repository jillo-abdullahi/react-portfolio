export default function WorkAvailabilityIndicator() {
  return (
    <div className="flex justify-center items-center space-x-2 flex-shrink-0">
      <div className="relative inline-flex">
        <div className="w-3 h-3 bg-green-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 left-0 animate-ping" />
        <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 left-0 animate-pulse" />
      </div>
      <span className="text-lg text-white/90">Available for work</span>
    </div>
  );
}
