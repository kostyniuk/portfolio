import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type RequireAtLeastOne<T, Keys extends keyof T> = Omit<T, Keys> &
  { [K in Keys]: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>> }[Keys];

export type { RequireAtLeastOne };
