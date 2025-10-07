# 🔋 Energía Confiable - Landing Page de Tarifas Empresariales

## 🌟 Aperçu du Projet

**Energía Confiable** est une landing page professionnelle conçue pour présenter les tarifs énergétiques aux entreprises. Cette page reproduit fidèlement le design et la fonctionnalité d'une page de tarifs d'énergie moderne, optimisée pour la conversion et l'expérience utilisateur.

## 📋 Fonctionnalités Actuellement Implémentées

### ✅ Interface Utilisateur Complète
- **Header responsive** avec navigation mobile
- **Section Hero** avec appel à l'action principal
- **Plans de tarification** (Basique, Professionnel, Entreprise)
- **Section bénéfices** avec icônes et descriptions
- **Formulaire de contact** complet avec validation
- **Footer** avec liens et informations de contact

### ✅ Fonctionnalités Interactives
- **Sélection de plan** interactive
- **Formulaire avec validation** en temps réel
- **Animations CSS** et effets de survol
- **Menu mobile** responsive
- **Défilement fluide** entre sections

### ✅ Points d'Entrée Fonctionnels (URIs)

| Endpoint | Méthode | Description | Paramètres |
|----------|---------|-------------|------------|
| `/` | GET | Page d'accueil principale | - |
| `/static/*` | GET | Fichiers statiques (CSS, JS, images) | `filename` |
| `/api/solicitar-tarifa` | POST | Soumission du formulaire de demande | JSON avec données du formulaire |

### ✅ Tracking et Analytics
- **Google Analytics** ready avec dataLayer
- **Facebook SDK** intégré
- **Événements personnalisés** pour les conversions
- **Suivi des interactions** utilisateur

## 🚀 URLs Publiques

- **Développement**: https://3000-iwmcstlno1sgc6wt32mb0-6532622b.e2b.dev
- **Production**: *À déployer sur Cloudflare Pages*

## 🏗️ Architecture des Données

### 📊 Modèles de Données Principaux

**Formulaire de Demande de Tarif:**
```javascript
{
  empresa: String,           // Nom de l'entreprise
  sector: String,           // Secteur d'activité
  nombre: String,           // Nom du contact
  cargo: String,            // Poste du contact
  email: String,            // Email professionnel
  telefono: String,         // Téléphone
  consumo: String,          // Consommation annuelle estimée
  plan_interes: String,     // Plan d'intérêt sélectionné
  comentarios: String,      // Commentaires additionnels
  acepta_terminos: Boolean, // Acceptation des conditions
  timestamp: Date,          // Horodatage de soumission
  source: String           // Source de la conversion
}
```

### 🗄️ Services de Stockage

- **Backend**: Hono Framework sur Cloudflare Workers
- **Fichiers Statiques**: Cloudflare Pages
- **Future Database**: Cloudflare D1 (pour stocker les demandes)

### 🔄 Flux de Données

1. **Sélection du Plan** → Mise à jour du formulaire
2. **Validation** → Vérification en temps réel des champs
3. **Soumission** → Envoi via API POST vers `/api/solicitar-tarifa`
4. **Tracking** → Push des événements vers dataLayer Analytics

## 👥 Guide d'Utilisation

### Pour les Visiteurs

1. **Consulter les tarifs** : Parcourez les trois plans proposés
2. **Sélectionner un plan** : Cliquez sur "Seleccionar Plan" pour pré-remplir le formulaire
3. **Remplir le formulaire** : Complétez vos informations d'entreprise
4. **Recevoir une proposition** : L'équipe commerciale vous contactera sous 24h

### Pour les Administrateurs

1. **Modifier les tarifs** : Éditez les prix dans `/src/index.tsx`
2. **Personnaliser le design** : Modifiez `/public/static/style.css`
3. **Ajouter des fonctionnalités** : Étendez `/public/static/app.js`
4. **Configurer les analytics** : Modifiez les IDs de tracking dans l'en-tête

## 🚀 Déploiement

### Status Actuel
- **Développement** : ✅ Actif
- **Production** : ⏳ Prêt pour déploiement

### Stack Technologique
- **Framework** : Hono + TypeScript
- **Frontend** : HTML5 + TailwindCSS + JavaScript Vanilla
- **Déploiement** : Cloudflare Pages
- **Polices** : Google Fonts (Source Sans 3, Sora, Nunito, Roboto)
- **Icons** : Font Awesome 6.4.0

### Commandes de Déploiement

```bash
# Développement local
npm run build
pm2 start ecosystem.config.cjs

# Déploiement production (après configuration Cloudflare)
npm run build
wrangler pages deploy dist --project-name energia-confiable

# Maintenance
pm2 logs energia-confiable --nostream
pm2 restart energia-confiable
```

## 🎯 Fonctionnalités Non Implémentées

### 📋 Prochaines Étapes Recommandées

1. **Base de données Cloudflare D1**
   - Stockage persistant des demandes
   - Tableau de bord administrateur
   - Exports des leads

2. **Système d'email**
   - Notifications automatiques
   - Confirmation de réception
   - Templates d'email personnalisés

3. **Analytics avancés**
   - Dashboard des conversions
   - A/B testing des éléments
   - Heatmaps utilisateur

4. **Intégrations CRM**
   - Export vers Salesforce/HubSpot
   - Webhook pour systèmes tiers
   - API pour intégrations personnalisées

5. **Optimisations SEO**
   - Métadonnées Open Graph complètes
   - Schema.org pour entreprises
   - Sitemap XML automatique

6. **Sécurité avancée**
   - Protection CSRF
   - Rate limiting
   - Validation côté serveur renforcée

## 🛠️ Configuration de Développement

### Prérequis
- Node.js 18+
- npm ou yarn
- Wrangler CLI (pour Cloudflare)

### Installation
```bash
git clone <repository-url>
cd webapp
npm install
npm run build
npm run dev:sandbox
```

### Variables d'Environnement

Créez un fichier `.dev.vars` pour le développement local :
```bash
ANALYTICS_ID="GTM-XXXXXXX"
FACEBOOK_APP_ID="your-fb-app-id"
CONTACT_EMAIL="info@energia-confiable.com"
```

---

## 📞 Contact et Support

- **Email de développement** : desarrollo@energia-confiable.com
- **Support technique** : soporte@energia-confiable.com
- **URL de production** : https://energia-confiable.com/tarifas-empresas/

---

*Dernière mise à jour : 7 octobre 2024*