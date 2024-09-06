// app/admin/layout.tsx
import AdminSidebar from '../../components/admin/Sidebar';
import AdminHeader from '../../components/admin/Header';
import AdminFooter from '../../components/admin/Footer';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar>
        </AdminSidebar>
        <main className="flex-1 p-4 bg-gray-100">
          {children}
        </main>
      </div >
      <AdminFooter />
    </>
  );
}
