import React from 'react';
import './HeroVisual.css'; // Assuming you're using a separate CSS file

const HeroVisual = () => {
    return (
        <div className="col-lg-6 col-md-12 order-lg-2 order-1">
            <div className="hero-visual">
                <div className="visual-container">
                    <div className="floating-element elem-1">
                        <img src="/images/RigVeda.png" alt="RigVeda" width="50px" />
                    </div>
                    <div className="floating-element elem-2">
                        <img src="/images/SamVeda.png" alt="SamVeda" width="50px" />
                    </div>
                    <div className="floating-element elem-3">
                        <img src="/images/YajurVeda.png" alt="YajurVeda" width="50px" />
                    </div>
                    <div className="floating-element elem-4">
                        <img src="/images/AtharvVeda.png" alt="AtharvVeda" width="50px" />
                    </div>

                    <div className="main-visual">
                        <div className="visual-backdrop"></div>
                        <div className="sanskrit-symbol">वेद</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroVisual;
