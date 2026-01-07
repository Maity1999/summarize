import "./globals.css";

export const metadata = {
  title: "Summarize",
  description: "Summarize any public webpage using AI"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
