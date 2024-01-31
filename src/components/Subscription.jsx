import React from 'react';
import '../design/Subscription.css';

export default function Subscription() {
  return (
    <section id="subscription" className="subscription">
            <h2>Choix de l'abonnement</h2>
            <div className="subscription-container">
                <div className="subscription">
                    <h3>L'ESSENTIEL</h3>
                    {/* <p>Garantie de disponibilité maximale pour votre site.</p> */}
                </div>
                <div className="subscription">
                    <h3>STANDARD</h3>
                    {/* <p>Notre équipe est là pour vous aider à tout moment.</p> */}
                </div>
                <div className="subscription">
                    <h3>PREMIUM</h3>
                    {/* <p>Protégez votre site contre les attaques avec nos solutions de sécurité avancées.</p> */}
                </div>
            </div>
        </section>
  );
}
