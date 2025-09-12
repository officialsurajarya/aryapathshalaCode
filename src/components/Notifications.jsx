import React from 'react';
import './Notifications.css'; // Import the CSS file

const notifications = [
    {
        id: 1,
        category: 'important',
        icon: 'fas fa-exclamation-triangle',
        type: 'महत्वपूर्ण सूचना',
        date: '15 अगस्त 2025',
        title: 'राष्ट्रीय पात्रता परीक्षा (NET) संस्कृत - पञ्जीकरण प्रारम्भ',
        content: 'UGC NET संस्कृत परीक्षा के लिए आवेदन प्रक्रिया शुरू हो गई है। इच्छुक अभ्यर्थी ऑनलाइन आवेदन कर सकते हैं। परीक्षा तिथि: दिसम्बर 2025। विस्तृत जानकारी के लिए...',
        actionText: 'विस्तार से पढ़ें',
        actionIcon: 'fas fa-arrow-right'
    },
    {
        id: 2,
        category: 'course',
        icon: 'fas fa-book',
        type: 'नवीन पाठ्यक्रम',
        date: '12 अगस्त 2025',
        title: 'उपनिषद् अध्ययन: नवीन ऑनलाइन पाठ्यक्रम उपलब्ध',
        content: 'प्रमुख उपनिषदों का गहन अध्ययन अब ऑनलाइन उपलब्ध। ईश, केन, कठ, प्रश्न, मुण्डक, माण्डूक्य, तैत्तिरीय, ऐतरेय, छान्दोग्य और बृहदारण्यक उपनिषदों का व्यापक अध्ययन...',
        actionText: 'पाठ्यक्रम देखें',
        actionIcon: 'fas fa-play-circle'
    },
    {
        id: 3,
        category: 'exam',
        icon: 'fas fa-graduation-cap',
        type: 'परीक्षा सूचना',
        date: '10 अगस्त 2025',
        title: 'शास्त्री परीक्षा 2025 - समय सारिणी प्रकाशित',
        content: 'शास्त्री (स्नातक) परीक्षा की समय सारिणी प्रकाशित कर दी गई है। परीक्षा 15 नवम्बर से प्रारम्भ होगी। सभी विषयों की विस्तृत समय सारिणी और परीक्षा केन्द्रों की जानकारी...',
        actionText: 'समय सारिणी डाउनलोड करें',
        actionIcon: 'fas fa-download'
    },
    {
        id: 4,
        category: 'update',
        icon: 'fas fa-sync-alt',
        type: 'तकनीकी अद्यतन',
        date: '08 अगस्त 2025',
        title: 'वेबसाइट में नवीन सुविधाएँ जोड़ी गईं',
        content: 'हमारे शिक्षण मंच में कई नई सुविधाएँ जोड़ी गई हैं: इंटरैक्टिव व्याकरण अभ्यास, ऑडियो उच्चारण गाइड, डिजिटल श्लोक संग्रह और व्यक्तिगत प्रगति ट्रैकर...',
        actionText: 'नई सुविधाएँ देखें',
        actionIcon: 'fas fa-eye'
    },
    {
        id: 5,
        category: 'important',
        icon: 'fas fa-award',
        type: 'छात्रवृत्ति',
        date: '05 अगस्त 2025',
        title: 'संस्कृत अध्ययन हेतु छात्रवृत्ति योजना',
        content: 'मेधावी छात्रों के लिए संस्कृत अध्ययन छात्रवृत्ति की घोषणा। ₹50,000 तक की वार्षिक सहायता राशि। आवेदन की अन्तिम तिथि: 31 अगस्त 2025...',
        actionText: 'आवेदन करें',
        actionIcon: 'fas fa-file-alt'
    },
    {
        id: 6,
        category: 'course',
        icon: 'fas fa-users',
        type: 'कार्यशाला',
        date: '02 अगस्त 2025',
        title: 'वैदिक गणित कार्यशाला - सितम्बर 2025',
        content: 'प्राचीन भारतीय गणित पद्धतियों पर आधारित 5-दिवसीय कार्यशाला का आयोजन। विशेषज्ञ आचार्यों द्वारा व्यावहारिक प्रशिक्षण। तिथि: 10-14 सितम्बर 2025...',
        actionText: 'पञ्जीकरण करें',
        actionIcon: 'fas fa-user-plus'
    },
];

const Notifications = () => {
    return (
        <section id="notices">
            <div className="container">
                <div className="section-header">
                    <h1 className="section-title">
                        <i className="fas fa-bullhorn me-3"></i>सूचनाएँ
                    </h1>
                    <p className="section-subtitle text-center m-auto">
                        संस्कृत शिक्षा से संबंधित महत्वपूर्ण सूचनाएँ एवं अद्यतन जानकारी
                    </p>
                </div>

                <div className="notifications-container">
                    <div className="notification-grid">
                        {notifications.map(notification => (
                            <div key={notification.id} className={`notification-card`} data-category={notification.category}>
                                <div className={`notification-priority ${notification.category === 'important' ? 'priority-high' :
                                    notification.category === 'course' ? 'priority-medium' :
                                    notification.category === 'exam' ? 'priority-high' : 'priority-low'}`}>
                                </div>

                                <div className="notification-header">
                                    <div className={`notification-icon ${notification.category === 'important' ? 'icon-important' :
                                        notification.category === 'course' ? 'icon-course' :
                                        notification.category === 'exam' ? 'icon-exam' : 'icon-update'}`}>
                                        <i className={notification.icon}></i>
                                    </div>
                                    <div className="notification-meta">
                                        <div className="notification-type">{notification.type}</div>
                                        <div className="notification-date">
                                            <i className="fas fa-calendar me-1"></i>{notification.date}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="notification-title">{notification.title}</h3>
                                <div className="notification-content">{notification.content}</div>
                                <div className="notification-actions">
                                    <button className="read-more-btn">
                                        <i className={notification.actionIcon + " me-1"}></i>{notification.actionText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Notifications;
