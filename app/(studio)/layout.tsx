 import "../globals.css";

export const metadata = {
  title: "MD Abir Khan",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body> 
       {children}  
      </body>
    </html>
  );
}
