import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Button = ({
  link,
  className,
  disabled,
  isSubmitting,
  hoverClass,
  children,
  ...props
}) => {
  // Default button classes
  const btnClasses = cn(
    `group relative z-[1] mx-auto block w-full max-w-[16.31rem] overflow-hidden rounded-3xl border border-orenda-purple px-4 py-[0.62rem] font-open-sans font-bold text-orenda-purple transition-colors hover:text-white sm:mx-0`,
    "italic" && isSubmitting,
  );

  // default hover classes
  const spanClasses =
    "absolute -left-[2px] -top-[1px] z-[-1] inline-block h-[calc(100%+2px)] w-0 rounded-3xl border bg-orenda-purple transition-all duration-500 group-hover:w-[calc(100%+4px)] hover:border-orenda-purple";

  return link ? (
    // Return link if its a link type
    <Link className={cn(btnClasses, className)} {...props}>
      <span className={cn(spanClasses, hoverClass)} />
      {children}
    </Link>
  ) : (
    <button
      disabled={disabled || isSubmitting}
      className={cn(btnClasses, className)}
      {...props}
    >
      <span className={cn(spanClasses, hoverClass)} />
      {children}
    </button>
  );
};
export default Button;
