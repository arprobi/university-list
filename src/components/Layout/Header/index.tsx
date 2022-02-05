import { Link } from 'react-router-dom'
import { AcademicCapIcon } from '@heroicons/react/solid'

const Header = () => {
  const navigation = [
    { name: 'Home', href: '/' }
  ]

  return (
    <header className="bg-primary px-4">
      <nav className="max-w-6xl mx-auto md:px-12 sm:px-6 lg:px-[64px]" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-secondary lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <AcademicCapIcon className="text-secondary h-12 w-auto" />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link key={link.name} to={link.href} className="text-base font-medium text-secondary hover:text-white">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            {/* <Link
              to="/login"
              className="inline-block bg-secondary py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </Link> */}
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link key={link.name} to={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
