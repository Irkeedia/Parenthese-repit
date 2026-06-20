# Parenthèse Répit

Site vitrine professionnel pour **Parenthèse Répit** — accompagnement bienveillant à domicile entre Narbonne et Béziers (répit parental, accompagnement éducatif, TSA et handicap).

- **Production :** [parenthese-repit.vercel.app](https://parenthese-repit.vercel.app)
- **Dépôt :** [github.com/Irkeedia/Parenthese-repit](https://github.com/Irkeedia/Parenthese-repit)
- **Éditeur technique :** [Irkeedia Labs](https://irkeedia.com) — Mathieu Toffolon

---

## Sommaire

- [Stack technique](#stack-technique)
- [Pages du site](#pages-du-site)
- [Structure du projet](#structure-du-projet)
- [Prérequis](#prérequis)
- [Installation et commandes](#installation-et-commandes)
- [Configuration du contenu](#configuration-du-contenu)
- [Déploiement (Vercel)](#déploiement-vercel)
- [Sécurité](#sécurité)
- [Maintenance](#maintenance)
- [Signaler une vulnérabilité](#signaler-une-vulnérabilité)

---

## Stack technique

| Technologie | Rôle |
|-------------|------|
| [Astro 6](https://astro.build) | Génération de site statique, SEO, performances |
| [Tailwind CSS 4](https://tailwindcss.com) | Styles utilitaires, design responsive |
| [TypeScript](https://www.typescriptlang.org) | Typage strict |
| JavaScript vanilla | Menu mobile et formulaire de contact (compatible CSP stricte) |
| [@fontsource](https://fontsource.org) | Polices auto-hébergées (Dancing Script, Quicksand) |
| [Vercel](https://vercel.com) | Hébergement, HTTPS, en-têtes de sécurité |

Le site est **100 % statique** : pas de base de données, pas de backend, pas de cookies de tracking.

---

## Pages du site

| Route | Fichier | Description |
|-------|---------|-------------|
| `/` | `src/pages/index.astro` | Accueil, aperçu des services, démarche |
| `/a-propos` | `src/pages/a-propos.astro` | Parcours, valeurs, zone d'intervention |
| `/services` | `src/pages/services.astro` | Prestations détaillées |
| `/tarifs` | `src/pages/tarifs.astro` | Tarifs, CESU, modalités |
| `/contact` | `src/pages/contact.astro` | Coordonnées et formulaire |
| `/mentions-legales` | `src/pages/mentions-legales.astro` | Mentions légales et RGPD |

---

## Structure du projet

```text
/
├── public/
│   ├── images/              # Photos locales (hero, services, etc.)
│   ├── js/
│   │   ├── mobile-nav.js    # Menu mobile plein écran
│   │   ├── contact-form.js  # Logique formulaire de contact
│   │   └── form-security.js # Sanitisation et rate limiting
│   ├── .well-known/
│   │   └── security.txt     # Contact sécurité (RFC 9116)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/          # Composants Astro réutilisables
│   ├── data/
│   │   ├── site.ts          # Contenu global (contact, légal, services)
│   │   └── images.ts        # Images et crédits Unsplash
│   ├── layouts/
│   │   ├── Layout.astro     # Shell HTML (meta, polices)
│   │   └── BaseLayout.astro # Nav + footer + slot
│   ├── lib/security/
│   │   ├── form.ts          # Helpers sécurité (référence TypeScript)
│   │   └── headers.ts       # Documentation des en-têtes HTTP
│   ├── pages/               # Routes du site
│   └── styles/global.css    # Tailwind + thème couleurs
├── astro.config.mjs
├── vercel.json              # Config Vercel + en-têtes de sécurité
└── package.json
```

---

## Prérequis

- **Node.js** ≥ 22.12.0 (voir `.node-version`)
- **npm** ≥ 10

---

## Installation et commandes

```bash
# Cloner le dépôt
git clone git@github.com:Irkeedia/Parenthese-repit.git
cd Parenthese-repit

# Installer les dépendances
npm install

# Serveur de développement → http://localhost:4321
npm run dev

# Build de production → ./dist/
npm run build

# Prévisualiser le build localement
npm run preview
```

| Commande | Action |
|----------|--------|
| `npm run dev` | Lance le serveur de dev Astro |
| `npm run build` | Génère le site statique dans `dist/` |
| `npm run preview` | Sert le dossier `dist/` en local |

---

## Configuration du contenu

La plupart des textes et coordonnées sont centralisés dans **`src/data/site.ts`** :

- Nom, tagline, téléphone, email
- Services et descriptions
- Informations légales (éditeur, professionnelle, hébergeur)

Les images sont définies dans **`src/data/images.ts`** et stockées dans **`public/images/`**.

### À compléter avant mise en production définitive

Dans `src/data/site.ts`, section `legal.professional` :

- Adresse postale d'Audrey
- Numéro SIRET

Dans `astro.config.mjs`, mettre à jour `site` si un domaine custom est configuré :

```js
site: 'https://votre-domaine.fr',
```

---

## Déploiement (Vercel)

Le site est configuré pour un déploiement automatique depuis la branche `main`.

### Paramètres Vercel (auto-détectés)

| Paramètre | Valeur |
|-----------|--------|
| Framework | Astro |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js | 22 |

### Domaine custom

1. Vercel → **Project Settings → Domains**
2. Ajouter le domaine souhaité (ex. sous-domaine de `irkeedia.com`)
3. Mettre à jour `site` dans `astro.config.mjs`
4. Mettre à jour l'URL canonique dans `public/.well-known/security.txt`

### Plugin Vercel (Cursor)

Un plugin agent Vercel peut être installé pour faciliter les déploiements depuis Cursor :

```bash
npx plugins add vercel/vercel-plugin --target cursor --scope project -y
```

---

## Sécurité

Le site applique une politique de sécurité **renforcée** par rapport à un site statique standard.

### En-têtes HTTP (production)

Configurés dans `vercel.json` pour toutes les routes :

| En-tête | Valeur | Protection |
|---------|--------|------------|
| `Strict-Transport-Security` | 2 ans, preload | Force HTTPS |
| `Content-Security-Policy` | Politique stricte | Bloque scripts/styles/images non autorisés |
| `X-Frame-Options` | `DENY` | Anti-clickjacking |
| `X-Content-Type-Options` | `nosniff` | Anti-MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limite les fuites de referrer |
| `Permissions-Policy` | Capteurs/API désactivés | Réduit la surface d'attaque |
| `Cross-Origin-Opener-Policy` | `same-origin` | Isolation des fenêtres |
| `Cross-Origin-Resource-Policy` | `same-origin` | Ressources same-origin uniquement |
| `X-DNS-Prefetch-Control` | `off` | Pas de prefetch DNS |
| `X-Permitted-Cross-Domain-Policies` | `none` | Bloque les policies cross-domain |

### Content Security Policy (CSP)

Politique active en production :

```
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data:;
font-src 'self';
connect-src 'self';
form-action 'self' mailto:;
frame-ancestors 'none';
object-src 'none';
upgrade-insecure-requests;
```

**Choix de conception :**

- **Scripts externes uniquement** (`public/js/`) — pas de scripts inline, compatible `script-src 'self'`
- **Polices auto-hébergées** via `@fontsource` — pas de Google Fonts externe
- **Images locales** dans `public/images/` — pas de CDN tiers en runtime
- `'unsafe-inline'` autorisé uniquement pour les styles Tailwind (injection CSS compilée)

> Les scripts React inline d'Astro ont été remplacés par du JavaScript vanilla externe précisément pour respecter cette CSP stricte.

### Formulaire de contact

Le formulaire n'envoie pas de données à un serveur : il ouvre le client mail via `mailto:`.

Protections côté client (`public/js/form-security.js`) :

| Mesure | Description |
|--------|-------------|
| **Honeypot** | Champ caché `company` — si rempli, soumission ignorée |
| **Sanitisation** | Suppression des caractères de contrôle, normalisation des espaces |
| **Limites de longueur** | Nom : 80 car. max — Message : 2 000 car. max |
| **Validation** | Nom ≥ 2 car., message ≥ 10 car. |
| **Rate limiting** | 1 soumission / minute (localStorage) |
| **Anti-injection mailto** | Nettoyage des retours ligne dans le sujet |

### Build durci

- `compressHTML: true` — HTML minifié
- `inlineScripts: 'never'` — pas de scripts inline dans le build
- `sourcemap: false` — pas de source maps en production
- Meta `generator` Astro supprimée — moins d'information exposée

### Fichiers de sécurité

| Fichier | Rôle |
|---------|------|
| `public/.well-known/security.txt` | Contact pour signaler une vulnérabilité (RFC 9116) |
| `public/robots.txt` | Directives pour les crawlers |
| `src/pages/mentions-legales.astro` | Section sécurité + RGPD |

### Vérifier la sécurité après déploiement

1. **En-têtes HTTP** — DevTools → Network → document → Response Headers
2. **[securityheaders.com](https://securityheaders.com)** — scan du domaine de production
3. **Menu mobile** — vérifier que le burger s'ouvre (confirme que les scripts `/js/*.js` chargent)
4. **Formulaire** — tester une soumission et vérifier l'ouverture du client mail

### Limites connues

- Le rate limiting du formulaire est **côté client uniquement** (contournable — acceptable pour un `mailto:` sans backend)
- Pas de WAF applicatif (Vercel Edge offre une protection DDoS de base)
- Les placeholders légaux (SIRET, adresse) doivent être complétés

---

## Maintenance

### Modifier un texte ou une coordonnée

1. Éditer `src/data/site.ts`
2. `npm run build` pour vérifier
3. Commit + push → déploiement Vercel automatique

### Remplacer une image

1. Ajouter le fichier dans `public/images/`
2. Mettre à jour `src/data/images.ts` (src, alt, crédit)
3. Mettre à jour les crédits dans `src/pages/mentions-legales.astro` si nouvelle photo Unsplash

### Modifier les en-têtes de sécurité

1. Éditer `vercel.json` (source de vérité en production)
2. Synchroniser `src/lib/security/headers.ts` (documentation)
3. Tester le menu mobile et le formulaire après tout changement de CSP

---

## Signaler une vulnérabilité

- **Email :** [contact@irkeedia.com](mailto:contact@irkeedia.com)
- **Fichier :** [/.well-known/security.txt](https://parenthese-repit.vercel.app/.well-known/security.txt)

Merci de ne pas divulguer publiquement une vulnérabilité avant correction.

---

## Licence

Site développé par **Irkeedia Labs** pour **Parenthèse Répit**. Tous droits réservés.
