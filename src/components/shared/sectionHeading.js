export const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="flex items-center justify-center">
      <span className="font-bold text-3xl text-blue">
        {heading} <span className="text-orange">{subHeading}</span>
      </span>
    </div>
  );
};
