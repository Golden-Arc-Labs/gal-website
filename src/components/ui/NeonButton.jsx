import { Link } from "react-router-dom";

const ArrowIcon = () => (
  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Neon gaming button. Renders an internal <Link> (to), an external <a> (href),
 * or a <button> (onClick/type). Variants: "primary" (default) | "ghost".
 */
const NeonButton = ({
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  withArrow = true,
  className = "",
  children,
  ...rest
}) => {
  const classes = `group ${variant === "ghost" ? "btn-ghost" : "btn-neon"} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowIcon />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
};

export default NeonButton;
