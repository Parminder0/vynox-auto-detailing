import "./globals.css";
import { UserProvider } from "./context/UserContext"; // adjust path if needed

export const metadata = {
  title: "Vynox Auto Detailing",
  description: "Car detailing website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-darkblue text-white">
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
