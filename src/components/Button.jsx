const Button = ({ className, href, onClick, children, type }) => {
  const classes = `btn-neon ${className || ""}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
