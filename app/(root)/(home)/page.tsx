import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-12 text-white">
      {/* Welcome Header */}
      <div className="text-center space-y-3 sm:space-y-4 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          Welcome Back
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2">
          Ready to connect? Start or join a meeting, schedule for later, or view your recordings.
        </p>
      </div>

      {/* Hero Section with Enhanced Design */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full rounded-xl sm:rounded-2xl lg:rounded-[2rem] overflow-hidden bg-gradient-to-br from-red-900/80 via-purple-900/80 to-pink-900/80 border border-red-500/30 shadow-2xl shadow-red-500/20 mx-2 sm:mx-0">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ff0066%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 animate-pulse" />

        {/* Multiple Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-purple-600/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />

        <div className="relative flex h-full flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-16">
          {/* Center - Time and Date Display */}
          <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6 py-2 sm:py-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-black bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl leading-none">
              {time}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white/95 drop-shadow-lg">
              {date}
            </p>
            {/* Additional info with better visibility */}
            <p className="text-sm sm:text-base lg:text-lg text-white/80 font-medium bg-gray-900/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 inline-block">
              Ready to connect with your team
            </p>
          </div>


        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 size-4 sm:size-5 lg:size-6 bg-gradient-to-r from-red-400 to-purple-400 rounded-full opacity-60 animate-pulse shadow-lg shadow-red-400/50" />
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 size-3 sm:size-3.5 lg:size-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 animate-bounce" />
        <div className="absolute top-1/2 left-4 sm:left-6 lg:left-8 size-1.5 sm:size-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-30 animate-ping" />
        <div className="absolute bottom-1/3 right-8 sm:right-12 lg:right-16 size-2 sm:size-2.5 lg:size-3 bg-gradient-to-r from-red-400 to-purple-400 rounded-full opacity-50 animate-pulse delay-500" />
      </div>

      {/* Meeting Actions Section with Better Layout */}
      <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent">
            What would you like to do?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Choose from our powerful meeting tools to connect with your team
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Enhanced Meeting Cards */}
        <div className="relative">
          <MeetingTypeList />
        </div>
      </div>
    </div>
  );
};

export default Home;
