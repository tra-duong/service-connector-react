import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../../components/frontend/Header";
import Footer from "../../components/frontend/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kết nối 24 / 7",
  description: "Ứng dụng kết nối dịch vụ 24/7",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
