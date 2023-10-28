import ReduxProvider from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import ProtectedRouter from "@/components/ProtectRouter/ProtectRouter";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "HawkInvoice",
  description: "Perfect online invoice genarating Tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-primary `}>
        <div>
          <ProtectedRouter>
            <ReduxProvider>{children}</ReduxProvider>
          </ProtectedRouter>
        </div>
      </body>
    </html>
  );
}
