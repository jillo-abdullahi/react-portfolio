export const StackCard = ({ title, icon, skills }) => {
  return (
    <div className="stack-box">
      <div className="flex items-center justify-start space-x-2 mb-6">
        {icon}
        <span className="text-gray-200 uppercase font-bold">{title}</span>
      </div>

      <div className="flex flex-col space-y-3">
        {skills.map(({ name, level }) => (
          <div className="flex flex-col items-start space-y-1" key={name}>
            <div className="text-gray-200 w-full flex items-center justify-between">
              <span>{name}</span>
              <span>{level}</span>
            </div>
            <div className="w-full h-1 bg-gray-300">
              <div
                className="bg-orange/70 h-full"
                style={{ width: `${level}` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
