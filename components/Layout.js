import BottomNav from './BottomNav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 text-white p-4">
      <div className="container mx-auto backdrop-blur-lg bg-white/10 rounded-lg p-6 min-h-[calc(100vh-2rem)]">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}