import "./globals.css";

export const metadata = {
  title: "Vynox Auto Detailing",
  description: "Car detailing website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-darkblue text-white">
        {children}
      </body>
    </html>
  );
}
