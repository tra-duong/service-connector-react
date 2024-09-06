// components/admin/Header.jsx
export default function Header() {
  return (
    <header className="bg-sky-800 text-white p-4">
      <h1 className="text-2xl font-bold">My Website</h1>
      <div className="flex pull-right">
        <a className="button" href="/login">Đăng nhập</a>
        <a className="button" href="/logout">Đăng xuất</a>
      </div>
    </header>
  );
}
