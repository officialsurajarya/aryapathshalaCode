import { useState, useEffect } from 'react';
import './AuthPage.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faUserPlus,
  faBookOpen,
  faUsers,
  faCertificate,
  faClock,
  faMobileAlt,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faPaperPlane,
  faCheckCircle,
  faExclamationCircle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [forgotEmail, setForgotEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState({
    login: false,
    signup: false,
    signupConfirm: false,
  });

  // Switch tabs
  const showTab = (tab) => {
    setActiveTab(tab);
    clearMessage();
  };

  // Clear messages
  const clearMessage = () => setMessage(null);

  // Toggle password visibility
  const togglePassword = (field) => {
    setPasswordVisible((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();
    clearMessage();
    setMessage({ text: 'लॉग इन हो रहा है...', type: 'info' });

    setTimeout(() => {
      setMessage({ text: 'सफलतापूर्वक लॉग इन हो गए!', type: 'success' });
      console.log('Login data:', loginData);
    }, 2000);
  };

  // Handle signup submission
  const handleSignup = (e) => {
    e.preventDefault();
    clearMessage();

    if (signupData.password !== signupData.confirmPassword) {
      setMessage({ text: 'पासवर्ड मेल नहीं खाते।', type: 'error' });
      return;
    }
    if (signupData.password.length < 6) {
      setMessage({ text: 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।', type: 'error' });
      return;
    }

    setMessage({ text: 'पंजीकरण हो रहा है...', type: 'info' });

    setTimeout(() => {
      setMessage({ text: 'पंजीकरण सफल! कृपया अपने ई-मेल की जाँच करें।', type: 'success' });
      console.log('Signup data:', signupData);
    }, 2000);
  };

  // Handle forgot password
  const handleForgotPassword = (e) => {
    e.preventDefault();
    clearMessage();
    setMessage({ text: 'रीसेट लिंक भेजा जा रहा है...', type: 'info' });

    setTimeout(() => {
      setMessage({ text: 'रीसेट लिंक आपके ई-मेल पर भेज दिया गया है।', type: 'success' });
      console.log('Forgot password email:', forgotEmail);
    }, 2000);
  };

  // Icon helper
  const getMessageIcon = (type) => {
    if (type === 'success') return faCheckCircle;
    if (type === 'error') return faExclamationCircle;
    return faInfoCircle;
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-content">
          {/* Left Side */}
          <div className="auth-left">
            <div className="welcome-section">
              <div className="logo-section">
                <img src="/images/Logo.png" className="logo" alt="Arya Pathshala Logo" />
              </div>
              <h1 className="welcome-title">आर्य पाठशाला</h1>
              <p className="welcome-subtitle">शास्त्र ज्ञान एवं आध्यात्म का केंद्र</p>
              <p className="welcome-description">
                आर्यावर्त की गौरवशाली शास्त्र परंपरा से सुसज्जित, आर्य पाठशाला एक ऐसा ऑनलाइन शिक्षण संस्थान है जहाँ पाठकों को शास्त्र ज्ञान के साथ नैतिकता और जीवन मूल्यों की शिक्षा दी जाती है।
              </p>
              <ul className="features-list">
                <li><FontAwesomeIcon icon={faBookOpen} /> वेद, उपनिषद् और दर्शनशास्त्र का गहन अध्ययन</li>
                <li><FontAwesomeIcon icon={faUsers} /> अनुभवी आचार्यों से प्रत्यक्ष शिक्षा</li>
                <li><FontAwesomeIcon icon={faCertificate} /> प्रमाणित पाठ्यक्रम एवं परीक्षा तैयारी</li>
                <li><FontAwesomeIcon icon={faClock} /> अपनी सुविधानुसार समय में अध्ययन</li>
                <li><FontAwesomeIcon icon={faMobileAlt} /> मोबाइल एवं कंप्यूटर पर उपलब्ध</li>
              </ul>
              <div className="welcome-stats">
                <div className="welcome-stat">
                  <span className="welcome-stat-number">500+</span>
                  <span className="welcome-stat-label">छात्र</span>
                </div>
                <div className="welcome-stat">
                  <span className="welcome-stat-number">50+</span>
                  <span className="welcome-stat-label">पाठ्यक्रम</span>
                </div>
                <div className="welcome-stat">
                  <span className="welcome-stat-number">10+</span>
                  <span className="welcome-stat-label">वर्ष अनुभव</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="auth-right">
            <div className="tab-navigation">
              <button className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`} onClick={() => showTab('login')}>
                <FontAwesomeIcon icon={faSignInAlt} /> प्रवेश
              </button>
              <button className={`tab-btn ${activeTab === 'signup' ? 'active' : ''}`} onClick={() => showTab('signup')}>
                <FontAwesomeIcon icon={faUserPlus} /> पञ्जीकरण
              </button>
            </div>

            {/* Login Form */}
            {activeTab === 'login' && (
              <div className="form-section active">
                <div className="auth-header">
                  <h2 className="page-title">प्रवेश करें</h2>
                  <p className="page-subtitle">अपने खाते में लॉग इन करें</p>
                </div>
                <form className="auth-form" onSubmit={handleLogin}>
                  {message && (
                    <div className={`message ${message.type}`}>
                      <FontAwesomeIcon icon={getMessageIcon(message.type)} /> {message.text}
                    </div>
                  )}
                  <div className="form-group">
                    <label className="form-label">ई-मेल पता</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="आपका ई-मेल पता दर्ज करें"
                      required
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">पासवर्ड</label>
                    <input
                      type={passwordVisible.login ? 'text' : 'password'}
                      className="form-input"
                      placeholder="आपका पासवर्ड दर्ज करें"
                      required
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <FontAwesomeIcon
                      icon={passwordVisible.login ? faEyeSlash : faEye}
                      className="password-toggle"
                      onClick={() => togglePassword('login')}
                    />
                  </div>
                  <div className="form-check">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">मुझे याद रखें</label>
                  </div>
                  <div className="forgot-password">
                    <button type="button" className="auth-link" onClick={() => showTab('forgot')}>
                      पासवर्ड भूल गए?
                    </button>
                  </div>
                  <button type="submit" className="btn-primary">
                    <FontAwesomeIcon icon={faSignInAlt} /> प्रवेश करें
                  </button>
                </form>
                <div className="divider"><span>या</span></div>
                <div className="social-buttons">
                  <button className="btn-social google" onClick={() => setMessage({ text: 'Google लॉग इन जल्द उपलब्ध होगा।', type: 'error' })}>
                    <FontAwesomeIcon icon={faGoogle} /> Google
                  </button>
                  <button className="btn-social facebook" onClick={() => setMessage({ text: 'Facebook लॉग इन जल्द उपलब्ध होगा।', type: 'error' })}>
                    <FontAwesomeIcon icon={faFacebookF} /> Facebook
                  </button>
                </div>
                <div className="auth-footer">
                  <p>
                    कोई खाता नहीं है?{' '}
                    <button className="auth-link" onClick={() => showTab('signup')}>
                      यहाँ पंजीकरण करें
                    </button>
                  </p>
                </div>
              </div>
            )}

            {/* Signup Form */}
            {activeTab === 'signup' && (
              <div className="form-section active">
                <div className="auth-header">
                  <h2 className="page-title">पञ्जीकरण करें</h2>
                  <p className="page-subtitle">नया खाता बनाएं</p>
                </div>
                <form className="auth-form" onSubmit={handleSignup}>
                  {message && (
                    <div className={`message ${message.type}`}>
                      <FontAwesomeIcon icon={getMessageIcon(message.type)} /> {message.text}
                    </div>
                  )}
                  <div className="form-group">
                    <label className="form-label">पूरा नाम</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="आपका पूरा नाम दर्ज करें"
                      required
                      value={signupData.name}
                      onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    />
                    <FontAwesomeIcon icon={faUserPlus} className="input-icon" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">ई-मेल पता</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="आपका ई-मेल पता दर्ज करें"
                      required
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    />
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">मोबाइल नंबर</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="आपका मोबाइल नंबर दर्ज करें"
                      required
                      value={signupData.phone}
                      onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                    />
                    <FontAwesomeIcon icon={faMobileAlt} className="input-icon" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">पासवर्ड</label>
                    <input
                      type={passwordVisible.signup ? 'text' : 'password'}
                      className="form-input"
                      placeholder="एक मजबूत पासवर्ड बनाएं"
                      required
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    />
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <FontAwesomeIcon
                      icon={passwordVisible.signup ? faEyeSlash : faEye}
                      className="password-toggle"
                      onClick={() => togglePassword('signup')}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">पासवर्ड की पुष्टि करें</label>
                    <input
                      type={passwordVisible.signupConfirm ? 'text' : 'password'}
                      className="form-input"
                      placeholder="पासवर्ड की पुष्टि करें"
                      required
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    />
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <FontAwesomeIcon
                      icon={passwordVisible.signupConfirm ? faEyeSlash : faEye}
                      className="password-toggle"
                      onClick={() => togglePassword('signupConfirm')}
                    />
                  </div>
                  <div className="form-check">
                    <input type="checkbox" id="terms-agree" required />
                    <label htmlFor="terms-agree">
                      मैं <a href="#" className="auth-link">नियम और शर्तों</a> से सहमत हूँ
                    </label>
                  </div>
                  <button type="submit" className="btn-primary">
                    <FontAwesomeIcon icon={faUserPlus} /> पञ्जीकरण करें
                  </button>
                </form>
                <div className="divider"><span>या</span></div>
                <div className="social-buttons">
                  <button className="btn-social google" onClick={() => setMessage({ text: 'Google लॉग इन जल्द उपलब्ध होगा।', type: 'error' })}>
                    <FontAwesomeIcon icon={faGoogle} /> Google
                  </button>
                  <button className="btn-social facebook" onClick={() => setMessage({ text: 'Facebook लॉग इन जल्द उपलब्ध होगा।', type: 'error' })}>
                    <FontAwesomeIcon icon={faFacebookF} /> Facebook
                  </button>
                </div>
                <div className="auth-footer">
                  <p>
                    पहले से खाता है?{' '}
                    <button className="auth-link" onClick={() => showTab('login')}>
                      यहाँ लॉग इन करें
                    </button>
                  </p>
                </div>
              </div>
            )}

            {/* Forgot Password Form */}
            {activeTab === 'forgot' && (
              <div className="form-section active">
                <div className="auth-header">
                  <h2 className="page-title">पासवर्ड रीसेट करें</h2>
                  <p className="page-subtitle">अपना ई-मेल पता दर्ज करें, हम आपको रीसेट लिंक भेजेंगे</p>
                </div>
                <form className="auth-form" onSubmit={handleForgotPassword}>
                  {message && (
                    <div className={`message ${message.type}`}>
                      <FontAwesomeIcon icon={getMessageIcon(message.type)} /> {message.text}
                    </div>
                  )}
                  <div className="form-group">
                    <label className="form-label">ई-मेल पता</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="आपका पंजीकृत ई-मेल पता दर्ज करें"
                      required
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                    />
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  </div>
                  <button type="submit" className="btn-primary">
                    <FontAwesomeIcon icon={faPaperPlane} /> रीसेट लिंक भेजें
                  </button>
                </form>
                <div className="auth-footer">
                  <p>
                    पासवर्ड याद आ गया?{' '}
                    <button className="auth-link" onClick={() => showTab('login')}>
                      लॉग इन करें
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
