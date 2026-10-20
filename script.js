document.documentElement.classList.add("js");

const translations = {
  en: {
    nav: { why: "Why Kerno", compare: "Compare", how: "How it works", models: "Model shelf", faq: "FAQ", contact: "Contact", cta: "Get early access" },
    hero: { eyebrow: "PRIVATE INTELLIGENCE / PERMANENTLY OFFLINE CORE", title: "Private AI.<br><em>Offline by default.</em>", lede: "Run capable LLMs and your own RAG on device. Build separate assistants for study, life, and work; keep every file and conversation local, then update models when you choose.", primary: "Join early access <span>↗</span>", secondary: "See the local architecture <span>↓</span>", trustOne: "Offline LLM", trustTwo: "Own RAG", trustThree: "Memory by choice", trustFour: "Updates you choose" },
    visual: { live: "LOCAL CORE / ACTIVE", label: "Illustrative local setup", assistant: "Study assistant", private: "Private", modelLlmName: "Local LLM", modelLlm: "Runs on device", modelRagName: "Personal RAG", modelRag: "Retrieval on device", ready: "READY", question: "“What changed in the launch plan?”", answer: "The target moved to <strong>14 September</strong>, with the beta review two weeks earlier.", source: "Launch plan.pdf · p. 04", boundary: "Offline mode: on device", memory: "MEMORY OPT-IN", caption: "Answers that show their work." },
    proof: { one: "Runs without a network.", two: "Each assistant keeps its own context.", three: "Every conversation can be remembered.", four: "Updates are yours to choose." },
    why: { eyebrow: "THE KERNO DIFFERENCE", title: "An AI that gets<br><em>more useful</em> over time.", lede: "Kerno does not need your whole life in a cloud to be helpful. Create separate assistants for study, life, and work; each one grows from its own sources and can remember every conversation you choose to keep." },
    features: { local: { title: "Offline by design", body: "Core inference, retrieval, and your conversations stay on the device. No cloud data path, no external retention. No signal, no problem." }, rag: { title: "Your own RAG, your rules", body: "Drop in PDFs, notes, decks, and images. Kerno builds a private knowledge base you can shape, search, and trust." }, assistants: { title: "Many assistants, separate worlds", body: "Create one assistant for study, one for life, and one for work. Each keeps its own sources, memory, and conversations on your device." }, updates: { title: "A living model shelf", body: "Opt in to new LLM and RAG releases as they arrive. Update the tools underneath your knowledge without moving your knowledge anywhere." }, link: "See the architecture <span>↗</span>", linkSpaces: "See assistant spaces <span>↗</span>", linkModels: "Browse the shelf <span>↗</span>" },
    memory: { eyebrow: "LOCAL MEMORY / YOUR CHOICE", title: "Every line can stay with you.", body: "Turn on memory for an assistant and each conversation becomes persistent local memory in that assistant’s knowledge base. Your history stays searchable and available beyond the session.", status: "MEMORY ON" },
    how: { eyebrow: "YOUR KNOWLEDGE, ASSEMBLED", title: "From a folder<br><em>to a point of view.</em>", lede: "Kerno turns the files you already have into a private, living context for better answers." },
    flow: { one: { title: "Bring your sources", body: "PDFs, slides, notes, scans, and more." }, two: { title: "Kerno maps the meaning", body: "Local parsing, embeddings, and hybrid retrieval." }, three: { title: "Ask with receipts", body: "Answers stay grounded in the sources you chose." }, four: { title: "Choose what stays", body: "Write every conversation back to this assistant only when you want to." }, receipt: "Source-backed answer", memory: "MEMORY ON / LOCAL" },
    compare: { eyebrow: "WHY KERNO / IN ONE VIEW", title: "The parts already exist.<br><em>Kerno connects them.</em>", lede: "Local model tools run the engine. Cloud notebooks ground answers in sources. Kerno brings the engine, your knowledge, your assistants, and your memory into one private space on your device.", capability: "Capability", kerno: "Kerno", local: "Local model tools", cloud: "Cloud notebooks", rowOffline: "Fully offline inference", rowAssistants: "Separate assistant spaces", rowRag: "Custom local RAG", rowMemory: "Opt-in persistent conversation memory", rowUpdates: "LLM + RAG update shelf", varies: "Varies", service: "Service dependent", cloudHosted: "Cloud hosted", modelFocused: "Model focused", boundaryEyebrow: "THE DATA BOUNDARY", boundaryTitle: "The core stays still. Updates cross only when you say so.", boundaryChat: "Core chat", boundaryChatBody: "Inference and retrieval stay on device.", boundaryUpdates: "Model updates", boundaryUpdatesBody: "Downloaded only when you choose.", note: "Positioning view across product categories; capabilities vary by product and plan." },
    models: { eyebrow: "THE MODEL SHELF", title: "Keep the core.<br><em>Change the engine.</em>", lede: "The best local models keep evolving. Kerno gives you a clear, opt-in path to bring the latest LLMs and retrieval models into your private setup.", note: "Updates are reviewed, signed, and yours to choose.", tabs: { all: "All models", llm: "LLM", rag: "RAG" }, ready: "READY", review: "IN REVIEW", lumen: "Fast multilingual reasoning for everyday work.", e5: "Cross-language embeddings for a more connected library.", nova: "A larger reasoning model, ready when you are.", footer: "Versioned, signed, opt-in", cta: "Ask for the roadmap <span>↗</span>", disclaimer: "Preview lineup — names and availability may change by device." },
    use: { eyebrow: "A PRIVATE PLACE FOR THE WORK THAT MATTERS", title: "One core.<br><em>Many worlds.</em>", tagOne: "LEARN", tagTwo: "WORK", tagThree: "LIFE", one: { title: "Turn a reading list into a conversation.", body: "Ask, compare, and revisit the material you are already studying." }, two: { title: "Find the line that matters.", body: "Keep contracts, briefs, and decisions searchable without sending them away." }, three: { title: "Make your personal archive useful.", body: "Bring order to the files and notes that only make sense to you." } },
    cta: { eyebrow: "THE NEXT LAYER OF PRIVATE AI", title: "Build a smarter<br><em>offline life.</em>", lede: "Tell us what you want to keep at the core. We will send the first Kerno updates to your inbox.", button: "Email the Kerno team <span>↗</span>" },
    faq: { eyebrow: "THE QUESTIONS THAT MATTER", title: "Private by default<br><em>should be easy to explain.</em>", one: { q: "Can Kerno work without internet?", a: "Yes. Once the models are on your device, chat, retrieval, and saved memory run locally. Network access is only needed for optional downloads and updates." }, two: { q: "Where do my files and memories live?", a: "They live in Kerno’s local app storage. Offline core chat has no cloud data path; you stay in control of what is added, kept, or removed." }, three: { q: "Are model updates forced?", a: "No. Updates are reviewed, signed, and opt in. Your current LLM or RAG model stays in place until you choose a new package." }, four: { q: "Can I keep learning, life, and work separate?", a: "Yes. Each assistant has its own sources, conversations, and optional memory, so one space never has to know about another." }, five: { q: "Can I delete or export remembered conversations?", a: "Memory controls are designed to stay visible: choose what is written, review it in the assistant knowledge base, then delete or export it when you need to." } },
    footer: { tagline: "Private intelligence, at the core.", back: "Back to top ↑" }
  },
  de: {
    nav: { why: "Warum Kerno", compare: "Vergleich", how: "So funktioniert es", models: "Modellregal", faq: "FAQ", contact: "Kontakt", cta: "Early Access" },
    hero: { eyebrow: "PRIVATE INTELLIGENZ / DAUERHAFT OFFLINE", title: "Deine private KI.<br><em>Standardmäßig offline.</em>", lede: "Leistungsfähige LLMs und dein eigenes RAG direkt auf deinem Gerät. Erstelle getrennte Assistenten für Lernen, Leben und Arbeit; Dateien und Gespräche bleiben lokal, Modelle aktualisierst du, wenn du möchtest.", primary: "Early Access anfragen <span>↗</span>", secondary: "Lokale Architektur ansehen <span>↓</span>", trustOne: "Offline-LLM", trustTwo: "Eigenes RAG", trustThree: "Erinnern nach Wahl", trustFour: "Updates nach Wahl" },
    visual: { live: "LOKALER KERN / AKTIV", label: "Beispiel für eine lokale Einrichtung", assistant: "Lernassistent", private: "Privat", modelLlmName: "Lokales LLM", modelLlm: "Läuft auf dem Gerät", modelRagName: "Persönliches RAG", modelRag: "Suche auf dem Gerät", ready: "BEREIT", question: "„Was hat sich im Launchplan geändert?“", answer: "Der Termin wurde auf den <strong>14. September</strong> verschoben, die Beta-Prüfung liegt zwei Wochen davor.", source: "Launchplan.pdf · S. 04", boundary: "Offline-Modus: auf dem Gerät", memory: "GEDÄCHTNIS NACH WAHL", caption: "Antworten mit nachvollziehbaren Quellen." },
    proof: { one: "Funktioniert ohne Netzwerk.", two: "Jeder Assistent behält seinen Kontext.", three: "Jedes Gespräch kann behalten werden.", four: "Updates wählst du selbst." },
    why: { eyebrow: "DER KERNO-UNTERSCHIED", title: "Eine KI, die mit der Zeit<br><em>nützlicher wird.</em>", lede: "Kerno muss nicht dein ganzes Leben in einer Cloud speichern. Erstelle getrennte Assistenten für Lernen, Leben und Arbeit. Jeder wächst aus eigenen Quellen und kann deine gewählten Gespräche behalten." },
    features: { local: { title: "Offline gedacht", body: "Inferenz, Suche und deine Gespräche bleiben auf dem Gerät. Kein Cloud-Datenweg, keine externe Speicherung. Kein Netz? Kein Problem." }, rag: { title: "Dein eigenes RAG", body: "Füge PDFs, Notizen, Präsentationen und Bilder hinzu. Kerno baut eine private Wissensbasis, die du gestalten, durchsuchen und prüfen kannst." }, assistants: { title: "Viele Assistenten, getrennte Welten", body: "Erstelle einen Assistenten fürs Lernen, einen fürs Leben und einen für die Arbeit. Jeder behält eigene Quellen, Erinnerungen und Gespräche auf deinem Gerät." }, updates: { title: "Ein lebendiges Modellregal", body: "Neue LLM- und RAG-Versionen kannst du bewusst aktivieren. Aktualisiere die Werkzeuge unter deinem Wissen, ohne dein Wissen zu verschieben." }, link: "Architektur ansehen <span>↗</span>", linkSpaces: "Assistentenräume ansehen <span>↗</span>", linkModels: "Regal öffnen <span>↗</span>" },
    memory: { eyebrow: "LOKALES GEDÄCHTNIS / DEINE WAHL", title: "Jede Zeile kann bei dir bleiben.", body: "Aktiviere das Gedächtnis für einen Assistenten, damit jedes Gespräch als dauerhaftes lokales Gedächtnis in seine Wissensbasis übernommen wird. Deine Historie bleibt über die Sitzung hinaus durchsuchbar.", status: "GEDÄCHTNIS AN" },
    how: { eyebrow: "DEIN WISSEN, ZUSAMMENGESETZT", title: "Vom Ordner<br><em>zur eigenen Sicht.</em>", lede: "Kerno macht aus deinen vorhandenen Dateien einen privaten, lebendigen Kontext für bessere Antworten." },
    flow: { one: { title: "Quellen einbringen", body: "PDFs, Folien, Notizen, Scans und mehr." }, two: { title: "Kerno verbindet Bedeutungen", body: "Lokales Parsing, Embeddings und hybride Suche." }, three: { title: "Mit Belegen fragen", body: "Antworten bleiben an deine Quellen gebunden." }, four: { title: "Du entscheidest, was bleibt", body: "Schreibe Gespräche nur dann in diesen Assistenten zurück, wenn du es willst." }, receipt: "Quellenbasierte Antwort", memory: "GEDÄCHTNIS AN / LOKAL" },
    compare: { eyebrow: "WARUM KERNO / AUF EINEN BLICK", title: "Die Bausteine gibt es schon.<br><em>Kerno verbindet sie.</em>", lede: "Lokale Modelltools führen das Modell aus. Cloud-Notizbücher verankern Antworten in Quellen. Kerno verbindet Modell, Wissen, Assistenten und Gedächtnis in einem privaten Bereich auf deinem Gerät.", capability: "Fähigkeit", kerno: "Kerno", local: "Lokale Modelltools", cloud: "Cloud-Notizbücher", rowOffline: "Vollständig offline ausführen", rowAssistants: "Getrennte Assistentenbereiche", rowRag: "Eigenes lokales RAG", rowMemory: "Dauerhaftes Gesprächsgedächtnis nach Wahl", rowUpdates: "LLM- und RAG-Update-Regal", varies: "Variiert", service: "Vom Dienst abhängig", cloudHosted: "In der Cloud", modelFocused: "Modellfokus", boundaryEyebrow: "DIE DATENGRENZE", boundaryTitle: "Der Kern bleibt lokal. Updates kommen nur auf deine Entscheidung.", boundaryChat: "Kern-Chat", boundaryChatBody: "Inferenz und Suche bleiben auf dem Gerät.", boundaryUpdates: "Modell-Updates", boundaryUpdatesBody: "Werden nur geladen, wenn du es wählst.", note: "Positionierung über Produktkategorien; Funktionen variieren je nach Produkt und Tarif." },
    models: { eyebrow: "DAS MODELLREGAL", title: "Behalte den Kern.<br><em>Wechsle den Motor.</em>", lede: "Die besten lokalen Modelle entwickeln sich weiter. Kerno bietet dir einen klaren, freiwilligen Weg für die neuesten LLM- und Retrieval-Modelle.", note: "Updates werden geprüft, signiert und von dir gewählt.", tabs: { all: "Alle Modelle", llm: "LLM", rag: "RAG" }, ready: "BEREIT", review: "IN PRÜFUNG", lumen: "Schnelles mehrsprachiges Denken für den Alltag.", e5: "Sprachübergreifende Embeddings für eine verbundene Bibliothek.", nova: "Ein größeres Denkmodell, bereit wenn du es bist.", footer: "Versioniert, signiert, freiwillig", cta: "Roadmap anfragen <span>↗</span>", disclaimer: "Vorschau — Namen und Verfügbarkeit können je nach Gerät variieren." },
    use: { eyebrow: "EIN PRIVATER ORT FÜR WICHTIGE ARBEIT", title: "Ein Kern.<br><em>Viele Welten.</em>", tagOne: "LERNEN", tagTwo: "ARBEIT", tagThree: "LEBEN", one: { title: "Mach aus deiner Leseliste ein Gespräch.", body: "Frage, vergleiche und wiederhole das Material, das du bereits lernst." }, two: { title: "Finde die entscheidende Zeile.", body: "Verträge, Briefings und Entscheidungen bleiben durchsuchbar, ohne das Gerät zu verlassen." }, three: { title: "Mach dein Archiv nützlich.", body: "Bringe Ordnung in Dateien und Notizen, die nur für dich Sinn ergeben." } },
    cta: { eyebrow: "DIE NÄCHSTE SCHICHT PRIVATER KI", title: "Baue dir ein klügeres<br><em>Offline-Leben.</em>", lede: "Sag uns, was du im Kern behalten willst. Wir schicken dir die ersten Kerno-Updates per E-Mail.", button: "Kerno-Team schreiben <span>↗</span>" },
    faq: { eyebrow: "DIE WICHTIGEN FRAGEN", title: "Privat als Standard<br><em>sollte leicht erklärbar sein.</em>", one: { q: "Funktioniert Kerno ohne Internet?", a: "Ja. Sobald die Modelle auf deinem Gerät sind, laufen Chat, Suche und gespeichertes Gedächtnis lokal. Netzwerkzugriff ist nur für optionale Downloads und Updates nötig." }, two: { q: "Wo liegen meine Dateien und Erinnerungen?", a: "Im lokalen Speicher der Kerno-App. Der Offline-Kern-Chat hat keinen Cloud-Datenweg; du bestimmst, was hinzugefügt, behalten oder entfernt wird." }, three: { q: "Sind Modell-Updates verpflichtend?", a: "Nein. Updates werden geprüft, signiert und von dir aktiviert. Dein aktuelles LLM oder RAG bleibt bestehen, bis du ein neues Paket wählst." }, four: { q: "Kann ich Lernen, Leben und Arbeit trennen?", a: "Ja. Jeder Assistent hat eigene Quellen, Gespräche und ein optionales Gedächtnis, sodass ein Bereich nichts über die anderen wissen muss." }, five: { q: "Kann ich gespeicherte Gespräche löschen oder exportieren?", a: "Die Gedächtnissteuerung bleibt sichtbar: Wähle, was geschrieben wird, prüfe es in der Wissensbasis und lösche oder exportiere es bei Bedarf." } },
    footer: { tagline: "Private Intelligenz, im Kern.", back: "Nach oben ↑" }
  },
  fr: {
    nav: { why: "Pourquoi Kerno", compare: "Comparer", how: "Comment ça marche", models: "Étagère de modèles", faq: "FAQ", contact: "Contact", cta: "Accès anticipé" },
    hero: { eyebrow: "INTELLIGENCE PRIVÉE / CŒUR TOUJOURS HORS LIGNE", title: "Votre IA privée.<br><em>Hors ligne par défaut.</em>", lede: "Exécutez des LLM et votre propre RAG sur votre appareil. Créez des assistants séparés pour apprendre, vivre et travailler ; gardez fichiers et conversations en local, puis mettez à jour les modèles quand vous le décidez.", primary: "Demander l’accès anticipé <span>↗</span>", secondary: "Voir l’architecture locale <span>↓</span>", trustOne: "LLM hors ligne", trustTwo: "Votre RAG", trustThree: "Mémoire à votre choix", trustFour: "Mises à jour à votre choix" },
    visual: { live: "CŒUR LOCAL / ACTIF", label: "Configuration locale illustrative", assistant: "Assistant d’étude", private: "Privé", modelLlmName: "LLM local", modelLlm: "Exécuté sur l’appareil", modelRagName: "RAG personnel", modelRag: "Recherche sur l’appareil", ready: "PRÊT", question: "« Qu’est-ce qui a changé dans le plan de lancement ? »", answer: "La date passe au <strong>14 septembre</strong>, avec la revue bêta deux semaines plus tôt.", source: "plan-lancement.pdf · p. 04", boundary: "Mode hors ligne : sur l’appareil", memory: "MÉMOIRE À LA DEMANDE", caption: "Des réponses qui montrent leurs sources." },
    proof: { one: "Fonctionne sans réseau.", two: "Chaque assistant garde son contexte.", three: "Chaque conversation peut être mémorisée.", four: "Vous choisissez les mises à jour." },
    why: { eyebrow: "LA DIFFÉRENCE KERNO", title: "Une IA qui devient<br><em>plus utile</em> avec le temps.", lede: "Kerno n’a pas besoin de toute votre vie dans un cloud pour être utile. Créez des assistants séparés pour apprendre, vivre et travailler ; chacun grandit avec ses propres sources et peut retenir les conversations que vous choisissez." },
    features: { local: { title: "Hors ligne par nature", body: "L’inférence, la recherche et vos conversations restent sur l’appareil. Aucun chemin de données cloud, aucune conservation externe. Pas de réseau ? Aucun souci." }, rag: { title: "Votre RAG, vos règles", body: "Ajoutez PDF, notes, présentations et images. Kerno crée une base de connaissances privée que vous pouvez organiser et vérifier." }, assistants: { title: "Plusieurs assistants, des mondes séparés", body: "Créez un assistant pour apprendre, un pour votre vie et un pour votre travail. Chacun garde ses sources, sa mémoire et ses conversations sur votre appareil." }, updates: { title: "Une étagère vivante", body: "Activez les nouvelles versions LLM et RAG quand elles arrivent. Mettez à jour les outils sans déplacer vos connaissances." }, link: "Voir l’architecture <span>↗</span>", linkSpaces: "Voir les espaces assistants <span>↗</span>", linkModels: "Parcourir l’étagère <span>↗</span>" },
    memory: { eyebrow: "MÉMOIRE LOCALE / VOTRE CHOIX", title: "Chaque ligne peut rester avec vous.", body: "Activez la mémoire pour un assistant afin que chaque conversation devienne une mémoire locale persistante dans sa base de connaissances. Votre historique reste consultable au-delà de la session.", status: "MÉMOIRE ACTIVE" },
    how: { eyebrow: "VOS CONNAISSANCES, ASSEMBLÉES", title: "Du dossier<br><em>à votre point de vue.</em>", lede: "Kerno transforme les fichiers que vous avez déjà en un contexte privé et vivant pour de meilleures réponses." },
    flow: { one: { title: "Ajoutez vos sources", body: "PDF, diapositives, notes, scans et plus." }, two: { title: "Kerno relie les sens", body: "Parsing local, embeddings et recherche hybride." }, three: { title: "Posez vos questions avec preuves", body: "Les réponses restent ancrées dans vos sources." }, four: { title: "Choisissez ce qui reste", body: "Réécrivez chaque conversation dans cet assistant uniquement si vous le souhaitez." }, receipt: "Réponse issue des sources", memory: "MÉMOIRE ACTIVE / LOCALE" },
    compare: { eyebrow: "POURQUOI KERNO / EN UN COUP D’ŒIL", title: "Les briques existent déjà.<br><em>Kerno les relie.</em>", lede: "Les outils de modèles locaux exécutent le moteur. Les carnets cloud ancrent les réponses dans des sources. Kerno réunit moteur, connaissances, assistants et mémoire dans un espace privé sur votre appareil.", capability: "Capacité", kerno: "Kerno", local: "Outils de modèles locaux", cloud: "Carnets cloud", rowOffline: "Inférence entièrement hors ligne", rowAssistants: "Espaces assistants séparés", rowRag: "RAG local personnalisé", rowMemory: "Mémoire persistante à la demande", rowUpdates: "Étagère de mises à jour LLM + RAG", varies: "Variable", service: "Selon le service", cloudHosted: "Hébergé dans le cloud", modelFocused: "Centré sur le modèle", boundaryEyebrow: "LA FRONTIÈRE DES DONNÉES", boundaryTitle: "Le cœur reste local. Les mises à jour passent seulement quand vous le décidez.", boundaryChat: "Chat central", boundaryChatBody: "Inférence et recherche restent sur l’appareil.", boundaryUpdates: "Mises à jour des modèles", boundaryUpdatesBody: "Téléchargées uniquement sur votre choix.", note: "Vue de positionnement par catégorie ; les capacités varient selon le produit et le forfait." },
    models: { eyebrow: "L’ÉTAGÈRE DE MODÈLES", title: "Gardez le cœur.<br><em>Changez le moteur.</em>", lede: "Les meilleurs modèles locaux évoluent. Kerno offre un chemin clair et volontaire pour accueillir les derniers modèles LLM et de recherche.", note: "Les mises à jour sont vérifiées, signées et choisies par vous.", tabs: { all: "Tous les modèles", llm: "LLM", rag: "RAG" }, ready: "PRÊT", review: "EN EXAMEN", lumen: "Raisonnement multilingue rapide pour le quotidien.", e5: "Embeddings multilingues pour une bibliothèque plus connectée.", nova: "Un modèle de raisonnement plus grand, prêt quand vous l’êtes.", footer: "Versionné, signé, à votre choix", cta: "Demander la feuille de route <span>↗</span>", disclaimer: "Aperçu — les noms et la disponibilité peuvent varier selon l’appareil." },
    use: { eyebrow: "UN ESPACE PRIVÉ POUR CE QUI COMPTE", title: "Un cœur.<br><em>Mille mondes.</em>", tagOne: "APPRENDRE", tagTwo: "TRAVAIL", tagThree: "VIE", one: { title: "Transformez une liste de lecture en conversation.", body: "Questionnez, comparez et revisitez ce que vous étudiez déjà." }, two: { title: "Trouvez la ligne qui compte.", body: "Gardez contrats, briefs et décisions consultables sans les envoyer ailleurs." }, three: { title: "Rendez votre archive personnelle utile.", body: "Mettez de l’ordre dans les fichiers et notes qui n’ont de sens que pour vous." } },
    cta: { eyebrow: "LA PROCHAINE COUCHE DE L’IA PRIVÉE", title: "Construisez une vie<br><em>hors ligne plus claire.</em>", lede: "Dites-nous ce que vous voulez garder au cœur. Nous vous enverrons les premières nouvelles de Kerno.", button: "Écrire à l’équipe Kerno <span>↗</span>" },
    faq: { eyebrow: "LES QUESTIONS QUI COMPTENT", title: "Privé par défaut<br><em>devrait être simple à expliquer.</em>", one: { q: "Kerno fonctionne-t-il sans Internet ?", a: "Oui. Une fois les modèles présents sur votre appareil, le chat, la recherche et la mémoire enregistrée fonctionnent en local. Le réseau sert uniquement aux téléchargements et mises à jour optionnels." }, two: { q: "Où vivent mes fichiers et mes souvenirs ?", a: "Dans le stockage local de l’app Kerno. Le chat du cœur hors ligne n’a aucun chemin de données cloud ; vous contrôlez ce qui est ajouté, gardé ou supprimé." }, three: { q: "Les mises à jour des modèles sont-elles imposées ?", a: "Non. Les mises à jour sont vérifiées, signées et activées à votre choix. Votre LLM ou RAG actuel reste en place jusqu’à ce que vous choisissiez un nouveau paquet." }, four: { q: "Puis-je séparer apprentissage, vie et travail ?", a: "Oui. Chaque assistant possède ses propres sources, conversations et mémoire optionnelle, afin qu’un espace n’ait jamais à connaître les autres." }, five: { q: "Puis-je supprimer ou exporter les conversations mémorisées ?", a: "Les contrôles de mémoire restent visibles : choisissez ce qui est écrit, vérifiez-le dans la base de connaissances de l’assistant, puis supprimez ou exportez si nécessaire." } },
    footer: { tagline: "L’intelligence privée, au cœur.", back: "Retour en haut ↑" }
  }
};

const getValue = (object, path) => path.split(".").reduce((value, key) => value?.[key], object);
const pageMeta = {
  en: { title: "Kerno — Private AI, offline by default.", description: "Kerno is private AI, offline by default: local LLMs, custom RAG knowledge spaces, separate assistants, and memory you choose to keep.", locale: "en_US" },
  de: { title: "Kerno — Private KI, standardmäßig offline.", description: "Kerno ist private KI, standardmäßig offline: lokale LLMs, eigene RAG-Wissensräume, getrennte Assistenten und Gedächtnis nach deiner Wahl.", locale: "de_DE" },
  fr: { title: "Kerno — IA privée, hors ligne par défaut.", description: "Kerno est une IA privée, hors ligne par défaut : LLM locaux, espaces RAG personnalisés, assistants séparés et mémoire à votre choix.", locale: "fr_FR" }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  const selectedLanguage = translations[language] ? language : "en";
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18n);
    if (typeof value === "string") element.innerHTML = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const meta = pageMeta[selectedLanguage];
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", meta.locale);
  try { localStorage.setItem("kerno-language", language); } catch { /* private browsing */ }
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const mobileToggle = document.querySelector(".mobile-menu-toggle");
const siteNav = document.querySelector(".site-nav");
mobileToggle?.addEventListener("click", () => {
  const open = siteNav.classList.toggle("is-open");
  mobileToggle.setAttribute("aria-expanded", String(open));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteNav?.classList.contains("is-open")) {
    siteNav.classList.remove("is-open");
    mobileToggle?.setAttribute("aria-expanded", "false");
    mobileToggle?.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!siteNav?.classList.contains("is-open")) return;
  if (siteNav.contains(event.target) || mobileToggle?.contains(event.target)) return;
  siteNav.classList.remove("is-open");
  mobileToggle?.setAttribute("aria-expanded", "false");
});
siteNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  siteNav.classList.remove("is-open");
  mobileToggle?.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll(".shelf-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;
    document.querySelectorAll(".shelf-tab").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".shelf-card").forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.modelType !== filter);
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

let savedLanguage = "en";
try { savedLanguage = localStorage.getItem("kerno-language") || "en"; } catch { /* private browsing */ }
setLanguage(savedLanguage);
