/**
 * Standard gaming section heading: a small uppercase "kicker" label above a
 * large display title with a neon-gradient accent word.
 *
 * Pass `title` as a string or JSX. Use <span className="neon-grad"> inside JSX
 * titles to highlight a word.
 */
const SectionHeading = ({
  kicker,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {kicker && (
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-fuchsia-500" />
          <span className="kicker">{kicker}</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-fuchsia-500" />
        </div>
      )}
      <h2 className="gaming-title text-3xl text-white md:text-5xl">{title}</h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg font-medium text-violet-200/70 ${
            align === "left" ? "" : "mx-auto"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
