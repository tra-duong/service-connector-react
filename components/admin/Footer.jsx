// components/admin/Footer.jsx
import { APP_NAME } from '../../app/constants'
export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 border-t-1">
      <p className="text-center">Bản quyền &copy; 2024 - {year} thuộc về <strong>{APP_NAME}</strong></p>
    </footer>
  );
}
