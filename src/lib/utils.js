import { clsx } from "clsx";
import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const linkIsActive = (link) => {
  const { pathname } = useLocation();
  return link.sublinks.some((link) => link.path.includes(pathname));
};
