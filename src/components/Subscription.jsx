import React from 'react';
import '../design/Cards.css';

export default function Subscription() {
    return (
        <section id="subscription" className="subscription" >
            <h2 id="pricing">Choix de l'abonnement</h2>
            <div className="subscription-container">
                <div className="subscription">
                    <h3>ESSENTIEL</h3>
                        <h4>GRATUIT</h4>
                        <h5>Le début de la réussite</h5>
                            <ul>
                                <p>Hébergement de site web standard</p>
                                <p>Support technique par e-mail</p>
                                <p>Bande passante illimitée</p>
                                <p>99,9% de disponibilité garantie</p>
                                <p>5 Go d'espace de stockage</p>
                                <p>Certificat SSL gratuit</p>
                            </ul>
                                    <button class="buttonClass">Souscrire</button>
                </div>
                <div className="subscription">
                    <h3>STANDARD</h3>
                        <h4>1,50€</h4>
                            <h5>L'Excellence au Service de Votre Site</h5>
                                <ul>
                                    <p>Support technique 24/7 par téléphone et e-mail</p>
                                    <p>Bande passante illimitée</p>
                                    <p>99,99% de disponibilité garantie</p>
                                    <p>20 Go d'espace de stockage</p>
                                    <p>Certificat SSL gratuit</p>
                                    <p>Sauvegardes automatiques quotidiennes</p>
                                </ul>
                                        <button class="buttonClass">Souscrire</button>
                </div>
                <div className="subscription">
                    <h3>PREMIUM</h3>
                    <h4>2,50€</h4>
                        <h5>La Puissance pour la Croissance</h5>
                    <ul>
                    <p>Support technique 24/7 par téléphone, e-mail et chat</p>
                    <p>Bande passante illimitée</p>
                    <p>99,99% de disponibilité garantie avec SLA</p>
                    <p>50 Go d'espace de stockage</p>
                    <p>Certificat SSL gratuit</p>
                    <p>Sauvegardes automatiques quotidiennes avec rétention de 30 jours</p>

                    </ul>
                    <button class="buttonClass">Souscrire</button>
                </div>
            </div>
        </section>
    );
}
                    









                               












