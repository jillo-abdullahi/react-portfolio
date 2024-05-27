export const StackCard = ({ title, icon, skills }) => {
  return (
    <div className="h-auto my-5 p-8 text-center rounded-lg border border-gray-900 bg-[#272f3790] hover:-translate-y-2 transition-all duration-300 text-base">
      <div className="flex items-center justify-start space-x-2 mb-6">
        {icon}
        <span className="text-gray-200 uppercase font-bold text-base">
          {title}
        </span>
      </div>

      <div className="flex flex-col space-y-3">
        {skills.map(({ name, level }) => (
          <div className="flex flex-col items-start space-y-1" key={name}>
            <div className="text-gray-200 w-full flex items-center justify-between">
              <span className="text-base">{name}</span>
            </div>
            <div className="w-full h-1 bg-gray-300">
              <div
                className="bg-orange/90 h-full"
                style={{ width: `${level}` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
