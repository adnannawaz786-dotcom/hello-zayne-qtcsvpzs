import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts } from 'react-icons/ai';

export default function BottomNav() {
  const router = useRouter();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm md:hidden">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-4">
        <Link href="/" className={`flex flex-col items-center space-y-1 ${router.pathname === '/' ? 'text-blue-400' : 'text-gray-400'}`}>
          <AiOutlineHome className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>
        
        <Link href="/about" className={`flex flex-col items-center space-y-1 ${router.pathname === '/about' ? 'text-blue-400' : 'text-gray-400'}`}>
          <AiOutlineInfoCircle className="w-6 h-6" />
          <span className="text-xs">About</span>
        </Link>
        
        <Link href="/contact" className={`flex flex-col items-center space-y-1 ${router.pathname === '/contact' ? 'text-blue-400' : 'text-gray-400'}`}>
          <AiOutlineContacts className="w-6 h-6" />
          <span className="text-xs">Contact</span>
        </Link>
      </div>
    </nav>
  );
}