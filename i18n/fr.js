// French strings for ModBench.
window.i18n = window.i18n || {};
window.i18n.fr = {
  // Nav
  navBrowse: "Parcourir",
  navCreate: "Créer",
  navModpacks: "Modpacks",
  navFavorites: "Favoris",
  navExport: "Exporter",

  // Header buttons
  helpToggleLabel: "Guide de démarrage",
  themeToggleLabel: "Basculer le mode sombre",
  langToggleLabel: "Changer de langue",

  // Shared: version / loader / category / side / sort labels
  browseMcVersion: "Version de Minecraft",
  browseAnyVersion: "Toute version",
  browseModloader: "Chargeur de mods",
  browseCategory: "Catégorie",
  browseSide: "Côté",
  loaderFabric: "Fabric",
  loaderForge: "Forge",
  loaderQuilt: "Quilt",
  loaderNeoForge: "NeoForge",
  catTechnology: "Technologie",
  catMagic: "Magie",
  catAdventure: "Aventure",
  catDecoration: "Décoration",
  catOptimization: "Optimisation",
  catUtility: "Utilitaire",
  catLibrary: "Bibliothèque",
  sideClient: "Côté client",
  sideServer: "Côté serveur",
  sortRelevance: "Pertinence",
  sortMostDownloads: "Plus téléchargés",
  sortFewestDownloads: "Moins téléchargés",
  sortMostFollowed: "Plus suivis",
  sortNewest: "Plus récents",
  sortOldest: "Plus anciens",
  sortUpdated: "Mis à jour récemment",
  viewGrid: "Vue grille",
  viewList: "Vue liste",

  // Browse tab
  browseContentType: "Type de contenu",
  browseTypeMods: "Mods",
  browseTypeShaders: "Shaders",
  browseTypeResourcePacks: "Packs de textures",
  browseSearchPlaceholder: "Rechercher des mods sur Modrinth…",
  browseSearchLabel: "Rechercher des mods",

  // Favorites tab
  favSearchPlaceholder: "Rechercher dans vos favoris…",
  favSearchLabel: "Rechercher dans les favoris",
  favSortAZ: "Trier A→Z",
  favEmptyText: "Aucun favori pour l'instant. Appuyez sur le cœur d'un mod dans <strong>Parcourir</strong> ou <strong>Modpacks</strong> pour l'enregistrer ici.",

  // Modpacks tab
  modpackSearchPlaceholder: "Rechercher des modpacks sur Modrinth…",
  modpackSearchLabel: "Rechercher des modpacks",

  // Create tab
  createSearchPlaceholder: "Rechercher dans votre pack…",
  createSearchLabel: "Rechercher dans votre pack",
  createAutoFlag: "Signaler auto. les incompatibilités",
  createAutoFlagTitle: "Analyse automatiquement les problèmes de compatibilité pendant que vous modifiez votre pack",
  createSortAZ: "Trier A→Z",
  createCheckCompat: "Vérifier la compatibilité",
  createRemoveAll: "Tout supprimer",
  createEmptyText: "Votre pack est vide. Allez dans <strong>Parcourir</strong> ou <strong>Modpacks</strong> pour ajouter des mods.",
  createEmptyBrowseBtn: "Parcourir les mods",
  createGoToTop: "Retour en haut",

  // Export tab
  exportTitle: "Exporter votre pack",
  exportSubtitle: "Génère un fichier <code>.mrpack</code>, importable directement dans l'appli Modrinth, Prism Launcher ou ATLauncher.",
  exportImportMrpack: "Importer un .mrpack",
  exportImportMrpackDesc: "Charge un fichier de modpack existant. Ses mods sont résolus sur Modrinth et ajoutés à <strong>Créer</strong>.",
  exportChooseFile: "Choisir un fichier",
  exportDropHint: "ou glissez-déposez un fichier .mrpack ici",
  exportImportShareCode: "Importer un code de partage",
  exportImportShareCodeDesc: "Collez un code partagé depuis le pack ModBench de quelqu'un.",
  exportPasteShareCode: "Coller le code de partage",
  exportImportBtn: "Importer",
  exportPackName: "Nom du pack",
  exportPackNamePlaceholder: "Mon Modpack",
  exportPackVersion: "Version du pack",
  exportModpackIcon: "Icône du modpack",
  exportChangeLogo: "Changer le logo",
  exportResetLogo: "Réinitialiser par défaut",
  exportLogoHint: "Image carrée recommandée, 2 Mo max. Intégrée au <code>.mrpack</code> comme icône.",
  exportSelectVersion: "Choisir une version",
  exportSelectLoader: "Choisir un chargeur",
  exportTargetHint: "C'est la cible que votre pack déclare aux launchers, différente du fichier choisi par mod dans Créer. Si vous avez déjà filtré par version/chargeur en parcourant, c'est pré-rempli ici.",
  exportDownloadBtn: "Télécharger le .mrpack",
  exportNoteDefault: "Ajoutez d'abord des mods à votre pack, puis choisissez une version et un chargeur.",
  exportImportTip: "Téléchargé. Si <strong>Modrinth</strong> est installé, double-cliquez simplement sur le fichier <code>.mrpack</code> (ou ouvrez-le depuis vos téléchargements) et il lancera directement la création d'une instance à partir de celui-ci.",
  exportCopyPackCode: "Copier le code du pack",
  exportShareCodeHint: "Copie un code court avec la liste de vos mods. Les autres le collent directement dans <strong>Importer un code de partage</strong> ci-dessus pour obtenir les mêmes mods. <button type=\"button\" id=\"shareLinkBtn\" style=\"background:none; border:none; padding:0; color:var(--accent-dark); text-decoration:underline; cursor:pointer; font:inherit;\">Plutôt un lien ?</button>",

  // Footer
  footerText: "ModBench récupère des données en direct depuis l'API <a href=\"https://modrinth.com\" target=\"_blank\" rel=\"noopener\">Modrinth</a>. Non affilié à Modrinth ou Mojang.<div style=\"margin-top:6px; opacity:0.6;\">ModBench, 2026</div>",

  // Dynamic UI text (modals, toasts, buttons rendered from JS)
  favAdd: "Ajouter aux favoris",
  favRemove: "Retirer des favoris",
  cancel: "Annuler",
  close: "Fermer",
  showFullDesc: "Voir la description complète",
  showLess: "Réduire",
  couldntLoadMod: "Impossible de charger ce mod.",
  remove: "Retirer",
  autoSolveFix: "Laisser AutoSolve corriger les incompatibilités",
  shareLinkLabel: "Lien",
  shareCodeOnlyLabel: "Code seul",
  copy: "Copier",
  introGotIt: "Compris, on y va"
};
