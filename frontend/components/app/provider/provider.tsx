"use client";

import { ThemeProvider } from "@/components/app/provider/theme-provider";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {props.children}
    </ThemeProvider>
  );
}
