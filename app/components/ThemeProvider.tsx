"use client"; // WAJIB! Karena urusan tema (baca local storage browser) itu di Client.

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Kita bungkus provider dari next-themes
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
