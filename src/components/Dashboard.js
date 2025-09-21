// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

// const Dashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "राम शर्मा",
//     email: "ram@example.com",
//     role: "student", // student, teacher, admin
//     avatar: "🕉️",
//     joinedDate: "2024-01-15",
//     isVerified: true
//   });

//   const [activeTab, setActiveTab] = useState("overview");
//   const [stats, setStats] = useState({
//     totalUsers: 1247,
//     activeUsers: 892,
//     coursesCompleted: 156,
//     certificatesIssued: 89,
//     newRegistrations: 45,
//     verifiedUsers: 1156,
//     studentsCount: 1050,
//     teachersCount: 15,
//     adminsCount: 3
//   });

//   const [courses, setCourses] = useState([
//     {
//       id: 1,
//       title: "वेद परिचय",
//       instructor: "आचार्य विद्यानंद",
//       progress: 75,
//       duration: "8 सप्ताह",
//       students: 234,
//       rating: 4.8,
//       category: "vedas",
//       status: "active",
//       thumbnail: "📚",
//       description: "वेदों का प्रारंभिक परिचय और अध्ययन"
//     },
//     {
//       id: 2,
//       title: "उपनिषद् दर्शन",
//       instructor: "आचार्या सरस्वती",
//       progress: 45,
//       duration: "12 सप्ताह",
//       students: 189,
//       rating: 4.9,
//       category: "upanishads",
//       status: "active",
//       thumbnail: "🔯",
//       description: "उपनिषदों के गूढ़ दर्शन का अध्ययन"
//     },
//     {
//       id: 3,
//       title: "भगवद्गीता सार",
//       instructor: "आचार्य गीतानंद",
//       progress: 100,
//       duration: "6 सप्ताह",
//       students: 456,
//       rating: 4.7,
//       category: "gita",
//       status: "completed",
//       thumbnail: "📖",
//       description: "श्रीमद्भगवद्गीता के मूल सिद्धांत"
//     },
//     {
//       id: 4,
//       title: "संस्कृत व्याकरण",
//       instructor: "पंडित व्याकरणाचार्य",
//       progress: 30,
//       duration: "16 सप्ताह",
//       students: 167,
//       rating: 4.6,
//       category: "sanskrit",
//       status: "active",
//       thumbnail: "✍️",
//       description: "संस्कृत भाषा का व्याकरण और उच्चारण"
//     }
//   ]);

//   const [recentActivity] = useState([
//     { id: 1, action: "पाठ पूर्ण", course: "वेद परिचय", time: "2 घंटे पहले", icon: "✅" },
//     { id: 2, action: "प्रमाणपत्र प्राप्त", course: "भगवद्गीता सार", time: "1 दिन पहले", icon: "🎓" },
//     { id: 3, action: "परीक्षा उत्तीर्ण", course: "उपनिषद् दर्शन", time: "2 दिन पहले", icon: "📝" },
//     { id: 4, action: "नया पाठ शुरू", course: "संस्कृत व्याकरण", time: "3 दिन पहले", icon: "🆕" },
//     { id: 5, action: "चर्चा में भाग लिया", course: "वेद परिचय", time: "1 सप्ताह पहले", icon: "💬" }
//   ]);

//   const [userGrowthData] = useState([
//     { month: 'जन', users: 800, active: 650 },
//     { month: 'फर', users: 950, active: 780 },
//     { month: 'मार', users: 1100, active: 890 },
//     { month: 'अप्र', users: 1200, active: 920 },
//     { month: 'मई', users: 1247, active: 892 }
//   ]);

//   const [courseDistribution] = useState([
//     { name: 'वेद अध्ययन', value: 35, color: '#c73659' },
//     { name: 'उपनिषद्', value: 25, color: '#d4af37' },
//     { name: 'भगवद्गीता', value: 20, color: '#a8c66c' },
//     { name: 'संस्कृत', value: 15, color: '#b22222' },
//     { name: 'अन्य', value: 5, color: '#a89a8c' }
//   ]);

//   const switchRole = (newRole) => {
//     setUser({...user, role: newRole});
//     setActiveTab("overview");
//   };

//   const getProgressColor = (progress) => {
//     if (progress >= 80) return 'bg-green-500';
//     if (progress >= 50) return 'bg-yellow-500';
//     return 'bg-red-500';
//   };

//   const getCategoryIcon = (category) => {
//     const icons = {
//       vedas: '📚',
//       upanishads: '🔯',
//       gita: '📖',
//       sanskrit: '✍️'
//     };
//     return icons[category] || '📚';
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('hi-IN', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
//       {/* Top Navigation */}
//       <nav className="bg-white shadow-lg border-b-4 border-gradient-to-r from-red-600 via-yellow-500 to-green-500">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
//                 🕉️
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
//                   आर्य पाठशाला
//                 </h1>
//                 <p className="text-sm text-gray-600">शास्त्र ज्ञान एवं आध्यात्म का केंद्र</p>
//               </div>
//             </div>

//             {/* Role Switcher (for demo) */}
//             <div className="flex items-center space-x-4">
//               <div className="flex bg-gray-100 rounded-lg p-1">
//                 <button
//                   onClick={() => switchRole('student')}
//                   className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
//                     user.role === 'student'
//                       ? 'bg-red-600 text-white'
//                       : 'text-gray-600 hover:text-red-600'
//                   }`}
//                 >
//                   छात्र
//                 </button>
//                 <button
//                   onClick={() => switchRole('teacher')}
//                   className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
//                     user.role === 'teacher'
//                       ? 'bg-red-600 text-white'
//                       : 'text-gray-600 hover:text-red-600'
//                   }`}
//                 >
//                   आचार्य
//                 </button>
//                 <button
//                   onClick={() => switchRole('admin')}
//                   className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
//                     user.role === 'admin'
//                       ? 'bg-red-600 text-white'
//                       : 'text-gray-600 hover:text-red-600'
//                   }`}
//                 >
//                   व्यवस्थापक
//                 </button>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
//                   {user.avatar}
//                 </div>
//                 <div className="hidden md:block">
//                   <p className="text-sm font-medium text-gray-900">{user.name}</p>
//                   <p className="text-xs text-gray-600 capitalize">{user.role}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

//           {/* Sidebar Navigation */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
//               <div className="text-center mb-6">
//                 <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-3xl mb-3 mx-auto">
//                   {user.avatar}
//                 </div>
//                 <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
//                 <p className="text-sm text-gray-600 mb-2">{user.email}</p>
//                 <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
//                   user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
//                   user.role === 'teacher' ? 'bg-blue-100 text-blue-800' :
//                   'bg-green-100 text-green-800'
//                 }`}>
//                   {user.role === 'admin' ? 'व्यवस्थापक' :
//                    user.role === 'teacher' ? 'आचार्य' : 'छात्र'}
//                 </span>
//               </div>

//               <nav className="space-y-2">
//                 <button
//                   onClick={() => setActiveTab('overview')}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
//                     activeTab === 'overview'
//                       ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
//                       : 'text-gray-700 hover:bg-gray-50'
//                   }`}
//                 >
//                   <span className="text-xl">📊</span>
//                   <span className="font-medium">अवलोकन</span>
//                 </button>

//                 {user.role === 'student' && (
//                   <>
//                     <button
//                       onClick={() => setActiveTab('courses')}
//                       className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
//                         activeTab === 'courses'
//                           ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
//                           : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       <span className="text-xl">📚</span>
//                       <span className="font-medium">मेरे पाठ्यक्रम</span>
//                     </button>
//                     <button
//                       onClick={() => setActiveTab('progress')}
//                       className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
//                         activeTab === 'progress'
//                           ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
//                           : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       <span className="text-xl">📈</span>
//                       <span className="font-medium">प्रगति</span>
//                     </button>
//                   </>
//                 )}

//                 {user.role === 'teacher' && (
//                   <>
//                     <button
//                       onClick={() => setActiveTab('mycourses')}
//                       className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
//                         activeTab === 'mycourses'
//                           ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
//                           : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       <span className="text-xl">📖</span>
//                       <span className="font-medium">मेरे पाठ्यक्रम</span>
//                     </button>
//                     <button
//                       onClick={() => setActiveTab('students')}
//                       className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
//                         activeTab === 'students'
//                           ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
//                           : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       <span className="text-xl">👥</span>
//                       <span className="font-medium">छात्र</span>
//                     </button>
//                   </>
//                 )}

//                 {user.role === 'admin' && (
//                   <>
//                     <button
//                       onClick={() => setActiveTab('users')}
//                       className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
//                         activeTab === 'users'
//                           ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
//                           : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       <span className="text-xl">👤</span>
//                       <span className="font-medium">उपयोगकर्ता</span>
//                     </button>
//                     <button
//                       onClick={() => setActiveTab('analytics')}
//                       className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
//                         activeTab === 'analytics'
//                           ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
//                           : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       <span className="text-xl">📈</span>
//                       <span className="font-medium">विश्लेषण</span>
//                     </button>
//                   </>
//                 )}

//                 <button
//                   onClick={() => setActiveTab('settings')}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
//                     activeTab === 'settings'
//                       ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
//                       : 'text-gray-700 hover:bg-gray-50'
//                   }`}
//                 >
//                   <span className="text-xl">⚙️</span>
//                   <span className="font-medium">सेटिंग्स</span>
//                 </button>
//               </nav>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3 space-y-8">

//             {/* Overview Tab */}
//             {activeTab === 'overview' && (
//               <div className="space-y-8">
//                 {/* Welcome Banner */}
//                 <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-2xl p-8 text-white">
//                   <h1 className="text-3xl font-bold mb-2">
//                     नमस्ते, {user.name}!
//                   </h1>
//                   <p className="text-xl opacity-90 mb-4">
//                     आज भी ज्ञान की यात्रा जारी रखें
//                   </p>
//                   <div className="flex items-center space-x-4 text-sm">
//                     <span>सदस्य बने: {formatDate(user.joinedDate)}</span>
//                     <span>•</span>
//                     <span className="flex items-center">
//                       <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
//                       सत्यापित खाता
//                     </span>
//                   </div>
//                 </div>

//                 {/* Quick Stats */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {user.role === 'student' ? (
//                     <>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">सक्रिय पाठ्यक्रम</p>
//                             <p className="text-3xl font-bold text-gray-900">3</p>
//                           </div>
//                           <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">📚</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">पूर्ण पाठ्यक्रम</p>
//                             <p className="text-3xl font-bold text-gray-900">1</p>
//                           </div>
//                           <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">✅</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">प्रमाणपत्र</p>
//                             <p className="text-3xl font-bold text-gray-900">1</p>
//                           </div>
//                           <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">🎓</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">अध्ययन घंटे</p>
//                             <p className="text-3xl font-bold text-gray-900">47</p>
//                           </div>
//                           <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">⏰</span>
//                           </div>
//                         </div>
//                       </div>
//                     </>
//                   ) : user.role === 'admin' ? (
//                     <>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">कुल उपयोगकर्ता</p>
//                             <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
//                           </div>
//                           <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">👥</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">सक्रिय उपयोगकर्ता</p>
//                             <p className="text-3xl font-bold text-gray-900">{stats.activeUsers}</p>
//                           </div>
//                           <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">✅</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">प्रमाणपत्र जारी</p>
//                             <p className="text-3xl font-bold text-gray-900">{stats.certificatesIssued}</p>
//                           </div>
//                           <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">🎓</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">नए पंजीकरण</p>
//                             <p className="text-3xl font-bold text-gray-900">{stats.newRegistrations}</p>
//                           </div>
//                           <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">🆕</span>
//                           </div>
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     // Teacher stats
//                     <>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">मेरे पाठ्यक्रम</p>
//                             <p className="text-3xl font-bold text-gray-900">4</p>
//                           </div>
//                           <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">📖</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">कुल छात्र</p>
//                             <p className="text-3xl font-bold text-gray-900">1046</p>
//                           </div>
//                           <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">👥</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">औसत रेटिंग</p>
//                             <p className="text-3xl font-bold text-gray-900">4.8</p>
//                           </div>
//                           <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">⭐</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm text-gray-600 mb-1">पूर्णता दर</p>
//                             <p className="text-3xl font-bold text-gray-900">87%</p>
//                           </div>
//                           <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                             <span className="text-2xl">📊</span>
//                           </div>
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* Recent Activity */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   <div className="bg-white rounded-2xl p-6 shadow-lg">
//                     <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                       <span className="text-2xl mr-2">📈</span>
//                       हाल की गतिविधि
//                     </h3>
//                     <div className="space-y-4">
//                       {recentActivity.map(activity => (
//                         <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
//                           <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
//                             <span>{activity.icon}</span>
//                           </div>
//                           <div className="flex-1">
//                             <p className="font-medium text-gray-900">{activity.action}</p>
//                             <p className="text-sm text-gray-600">{activity.course}</p>
//                           </div>
//                           <span className="text-sm text-gray-500">{activity.time}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {user.role === 'admin' && (
//                     <div className="bg-white rounded-2xl p-6 shadow-lg">
//                       <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                         <span className="text-2xl mr-2">📊</span>
//                         पाठ्यक्रम वितरण
//                       </h3>
//                       <ResponsiveContainer width="100%" height={300}>
//                         <PieChart>
//                           <Pie
//                             data={courseDistribution}
//                             cx="50%"
//                             cy="50%"
//                             outerRadius={80}
//                             fill="#8884d8"
//                             dataKey="value"
//                           >
//                             {courseDistribution.map((entry, index) => (
//                               <Cell key={`cell-${index}`} fill={entry.color} />
//                             ))}
//                           </Pie>
//                           <Tooltip />
//                         </PieChart>
//                       </ResponsiveContainer>
//                       <div className="mt-4 grid grid-cols-2 gap-2">
//                         {courseDistribution.map((item, index) => (
//                           <div key={index} className="flex items-center space-x-2">
//                             <div
//                               className="w-3 h-3 rounded-full"
//                               style={{ backgroundColor: item.color }}
//                             ></div>
//                             <span className="text-sm text-gray-600">{item.name}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {user.role === 'student' && (
//                     <div className="bg-white rounded-2xl p-6 shadow-lg">
//                       <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                         <span className="text-2xl mr-2">🎯</span>
//                         अगले लक्ष्य
//                       </h3>
//                       <div className="space-y-4">
//                         <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
//                           <h4 className="font-medium text-blue-900 mb-2">वेद परिचय पाठ 6 पूरा करें</h4
