import React from 'react'

function Services() {
  const services = [
    {
      title: "Course Management",
      description: "Create, organize, and manage your courses with our intuitive system. Upload content, set assignments, and track student progress effectively.",
      icon: "📚",
      features: ["Content Management", "Assignment Creation", "Progress Tracking", "Course Organization"]
    },
    {
      title: "Assessment Tools",
      description: "Comprehensive assessment tools with automated grading and detailed analytics to measure student performance.",
      icon: "📝",
      features: ["Quiz Creation", "Automated Grading", "Performance Analytics", "Custom Assessments"]
    },
    {
      title: "Video Conferencing",
      description: "Integrated video conferencing for live lectures, virtual office hours, and collaborative learning sessions.",
      icon: "🎥",
      features: ["Live Streaming", "Screen Sharing", "Recording", "Virtual Classrooms"]
    },
    {
      title: "Analytics Dashboard",
      description: "Advanced analytics and reporting tools to track student performance, engagement metrics, and learning outcomes.",
      icon: "📊",
      features: ["Performance Reports", "Engagement Metrics", "Learning Analytics", "Custom Reports"]
    },
    {
      title: "Mobile Learning",
      description: "Access your courses anywhere, anytime with our mobile-responsive platform designed for learning on the go.",
      icon: "📱",
      features: ["Mobile App", "Offline Access", "Push Notifications", "Responsive Design"]
    },
    {
      title: "Integration Support",
      description: "Seamless integration with popular tools and platforms including Google Workspace, Microsoft 365, and more.",
      icon: "🔗",
      features: ["Google Workspace", "Microsoft 365", "API Access", "Third-party Tools"]
    }
  ]

  return (
    <div id="services" className="pt-16 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning management solutions designed to enhance your educational experience
          </p>
        </div>
      </section>

      {/* Services Boxes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Service Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Service Features */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Action Button */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600">
              Flexible pricing options to suit your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-gray-50 rounded-xl p-8 text-center border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$29<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Up to 100 students
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Basic analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Email support
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-blue-600 rounded-xl p-8 text-center text-white transform scale-105 shadow-xl border-2 border-blue-500">
              <div className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="text-4xl font-bold mb-6">$79<span className="text-lg opacity-80">/month</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Up to 500 students
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Priority support
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Video conferencing
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-50 rounded-xl p-8 text-center border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$199<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Unlimited students
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  24/7 support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Dedicated account manager
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 