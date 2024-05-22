export default function WorkAvailabilityIndicator() {
  return (
    <div class="flex justify-center items-center space-x-2 flex-shrink-0">
      <div class="relative inline-flex">
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
      <span className="text-sm">Available for work</span>
    </div>
  );
}
