import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SchoolView – Parent Dashboard for Student Progress",
  description: "Connect to Canvas, Google Classroom, and PowerSchool. Get a clean, simple view of your child's grades, assignments, and progress for just $6/mo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="58981a14-fd5f-4be2-9714-209bba4f3150"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
