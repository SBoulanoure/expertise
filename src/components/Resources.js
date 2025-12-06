import React from 'react';
import { useTranslation } from 'react-i18next';
import './Resources.css';

function Resources() {
  const { t } = useTranslation();

  const resources = [
    {
      id: 1,
      title: 'Guide de l\'expertise judiciaire',
      description: 'Un guide complet pour comprendre le processus d\'expertise judiciaire au Maroc',
      icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png'
    },
    {
      id: 2,
      title: 'Normes de construction marocaines',
      description: 'Documentation complète sur les normes et réglementations en vigueur',
      icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821700.png'
    },
    {
      id: 3,
      title: 'Procédures juridiques',
      description: 'Comprendre vos droits et les démarches à suivre en cas de litige',
      icon: 'https://cdn-icons-png.flaticon.com/512/3308/3308395.png'
    },
    {
      id: 4,
      title: 'FAQ Expertise Bâtiment',
      description: 'Réponses aux questions fréquentes sur l\'expertise en construction',
      icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
    }
  ];

  return (
    <section className="resources" id="resources">
      <div className="container">
        <h2 className="resources-title">Ressources & Documentation</h2>
        <p className="resources-subtitle">
          Accédez à notre bibliothèque de ressources pour mieux comprendre vos droits et les procédures d'expertise
        </p>
        <div className="resources-grid">
          {resources.map((resource) => (
            <div key={resource.id} className="resource-card">
              <div className="resource-icon">
                <img src={resource.icon} alt={resource.title} />
              </div>
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-description">{resource.description}</p>
              <button className="resource-button">En savoir plus</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;
