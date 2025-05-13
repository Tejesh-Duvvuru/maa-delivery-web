const TrackOrderSection: React.FC = () => (
  <div className="w-full lg:w-1/2">
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
        Track Your Order
      </h2>
      <p className="mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
        Enter your order ID to track your order status.
      </p>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <input
          type="text"
          placeholder="Order ID"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 bg-gray-50 hover:bg-white"
        />
        <button className="bg-gradient-to-r from-green-800 to-green-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:from-green-600 hover:to-green-400 transition-all duration-300 font-medium transform hover:scale-105">
          Track Order
        </button>
      </div>
    </div>
  </div>
);
export default TrackOrderSection;
