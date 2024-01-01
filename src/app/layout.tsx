import ReduxProvider from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import ToastProvider from "@/components/ToastProvider/toastProvider";

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
      <ToastProvider>
        <div>
          <ReduxProvider>{children}</ReduxProvider>
        </div>
        </ToastProvider>
      </body>
    </html>
  );
}