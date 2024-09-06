// components/frontend/Footer.jsx
import { APP_NAME } from "@/app/constants";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <p className="text-center">Bản quyền &copy; 2024 thuộc về <strong className="copyright text-rose-600">{APP_NAME}</strong></p>
    </footer>
  );
}
