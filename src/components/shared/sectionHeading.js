export const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="flex items-center justify-center">
      <h2 className="font-bold text-3xl text-gray-200">
        {heading} <span className="text-orange">{subHeading}</span>
      </h2>
    </div>
  );
};
