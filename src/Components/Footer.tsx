const Footer: React.FC = () => (
  <footer className="bg-gradient-to-r from-green-900 to-green-600 text-white py-6 mt-8">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-sm sm:text-base">
        &copy; 2025 MAA Delivery. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="#privacy"
          className="text-yellow-200 hover:text-yellow-300 text-sm"
        >
          Privacy Policy
        </a>
        <a
          href="#terms"
          className="text-yellow-200 hover:text-yellow-300 text-sm"
        >
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
