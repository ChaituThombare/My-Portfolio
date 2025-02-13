"use client";

import * as React from "react";
import { ThemeProvider as Provider } from "@/components/theme-provider";
import { type ThemeProviderProps } from "@/components/theme-provider";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <Provider {...props}>{children}</Provider>;
}