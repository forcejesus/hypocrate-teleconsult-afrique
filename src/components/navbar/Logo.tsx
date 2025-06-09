
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
        Hypocrate
      </span>
    </Link>
  );
};

export default Logo;
