// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║  DONNÉES DE LA FORMATION — Éditez uniquement cette section                  ║
// ║  Chaque module est un objet JSON. Remplacez les "[...]" par votre contenu.   ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

const FORMATION = {

  title: "Apprendre par curiosité",
  subtitle: "Une autoformation pour comprendre et favoriser la curiosité en classe",

  // ── PAGE D'ACCUEIL ────────────────────────────────────────────────────────
  // Éditez les textes ci-dessous. "cta" = texte du bouton commencer.
  accueil: {
    title: "Apprendre à apprendre par curiosité",
    subtitle: "Une autoformation pour comprendre et favoriser la curiosité en classe",
    description: "Dans cette formation on va parler de ce qu'est la curiosité, en particulier dans le contexte de la salle de classe. Nous allons essayer de comprendre ses mécanismes sous-jacents. Nous allons aussi voir comment la curiosité s'exprime dans les salles de classes et comment l'encourager chez les élèves.",
    details: "En <strong>~5h</strong>, nous allons voir ces éléments sous le prisme des théories issues de données de recherche, des cas concrets d'illustration en contexte de classe et des activités et gestes pédagogiques à mettre en place, issues d'études empiriques de terrain.",
    audience: "Cette formation est particulièrement destinée à un public d'<strong>enseignants</strong>, mais reste pertinente pour d'autres professionnels de l'éducation, parents, formateurs, ou simplement pour un enrichissement personnel.",
    cta: "COMMENCER"
  },

  // ── LISTE DES MODULES ─────────────────────────────────────────────────────
  // Ajoutez ou retirez des modules ici (id, label, couleur)
  modules: [
    { id: 0, label: "Introduction",  color: "#534AB7", bg: "#EEEDFE" },
    { id: 1, label: "Module 1",      color: "#854F0B", bg: "#FAEEDA" },
    { id: 2, label: "Module 2",      color: "#0F6E56", bg: "#E1F5EE" },
    { id: 3, label: "Module 3",      color: "#993C1D", bg: "#FAECE7" },
    { id: 4, label: "Synthèse",      color: "#185FA5", bg: "#E6F1FB" }
  ],

  // ── MODULE 0 : Introduction ───────────────────────────────────────────────
  module_0: {
    id: 0,
    title: "Introduction",
    duration: "~10 minutes",
    end_message: "[Message de fin du module 0]",
    slides: [

      {
        id: "m0_s1", tag: "intro",
        title: "Avant de commencer",
        next_label: "C'EST PARTI",
        blocks: [
          { type: "text", content: "Bienvenue dans cette formation sur l'apprentissage par curiosité en contexte scolaire. Cette formation a pour objectif d'expliquer ce qu'est la curiosité, en quoi elle est bénéfique pour l'apprentissage et comment l'encourager en classe." },
          { type: "key_points", title: "Dans ce module introductif, nous allons :", items: [
            "Essayer de cerner ce que vous pensez déjà de la curiosité",
            "Présenter une définition de la curiosité",
            "Identifier pourquoi la curiosité est un enjeu pédagogique"
          ]}
        ]
      },

      {
        id: "m0_s2", tag: "activite",
        title: "Ce que VOUS pensez de la curiosité",
        blocks: [
          { type: "text", content: "La curiosité est un terme familier, mais plus complexe qu'il n'y paraît... Avant d'entrer dans les contenus, prenez quelques minutes pour identifier ce que vous pensez déjà de la curiosité : qu'est-ce que c'est ? qu'est-ce qu'on exprime quand on est curieux ? comment se sent-on ? Il n'y a pas de bonne réponse ici : l'objectif est simplement de décrire ce que vous pensez." },
          { type: "reflection", id: "r_init_1",
            question: "1. Selon vous, qu'est-ce que la curiosité exactement ? À quoi cela vous fait-il penser ?",
            hint: "Les réponses ne sont pas évaluées. Elles vous serviront de point de comparaison au cours de la formation.",
            placeholder: "Votre réponse..." },
          { type: "reflection", id: "r_init_2",
            question: "2. Quand vous pensez à un élève curieux, qu'est-ce que vous observez concrètement ? À quoi ressemble-t-il en classe ?",
            placeholder: "Votre réponse..." }
        ]
      },

      {
        id: "m0_s3", tag: "contenu",
        title: "La curiosité : un moteur pour l'apprentissage",
        next_label: "SUITE",
        blocks: [
          { type: "text", content: "La curiosité est une forme de motivation qui pousse à chercher de nouvelles connaissances ou explications — à résoudre une incertitude, à combler une lacune. Finalement, c'est une motivation pour apprendre de nouvelles choses !\nC'est une compétence essentielle à l'apprentissage, importante à encourager chez les élèves." },
          { type: "text", content: "Ressentir de la curiosité peut entraîner une variété de comportements : elle peut pousser à" },
          { type: "key_points", title: "", items: [
            "se poser des questions",
            "être plus attentif à son environnement",
            "interagir avec son environnement : manipuler, expérimenter, investiguer...",
            "réfléchir plus intensément pour essayer de trouver une explication avec les connaissances qu'on a déjà...",
            "etc."
          ]}
        ]
      },

      {
        id: "m0_s4", tag: "contenu",
        title: "Pourquoi c'est important pour l'apprentissage",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Mais ce n'est pas tout ! Quand un élève apprend par curiosité, il prend en charge son propre apprentissage :" },
          { type: "key_points", title: "", items: [
            "c'est lui qui choisit ce qu'il veut explorer,",
            "qui ajuste la difficulté selon ses besoins,",
            "et qui persévère pour progresser. Il a plus d'autonomie dans son parcours d'apprentissage."
          ]},
          { type: "text", content: "Nous allons voir qu'en classe apprendre par curiosité est possible. Il peut être encouragé par divers moyens, par exemple en donnant plus d'autonomie aux élèves dans le choix d'exercices, en les guidant pour évaluer eux-mêmes leurs propres compétences pour progresser dans la bonne direction.\nUn apprentissage par curiosité est aussi un apprentissage plus gratifiant. L'effort est mieux accepté car l'élève est motivé par des objectifs d'apprentissage qui ont du sens pour lui, et non par une contrainte externe uniquement. C'est un peu comme dans la pratique sportive : l'effort des entraînements devient plus gratifiant quand on poursuit un objectif qu'on s'est fixé soi-même !\nUn apprentissage qui procure plus d'autonomie et qui est plus gratifiant participe au bien-être des élèves." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "research_box",
            content: "Étude corrélationnelle sur curiosité et bien-être",
            reference: "[Référence à compléter]",
            title: "La curiosité est associée au bien-être à l'école" },
          { type: "text", content: "La curiosité présente aussi d'autres points positifs, notamment parce qu'elle est corrélée à des compétences cognitives importantes comme la mémoire - et ce, dès un très jeune âge." },
          { type: "research_box",
            content: "Un rapport de l'OCDE (2021) montre que dès 5 ans, la curiosité était associée à un certain nombre de compétences cognitives telles que la flexibilité mentale, la mémoire, la littératie et la numératie.",
            reference: "OECD Directorate for Education and Skills, Rowena Phair (2021, 14 juin). Is curiosity a key to better early learning? OECD Education And Skills Today. https://oecdedutoday.com/curiosity-key-better-early-learning/",
            title: "Curiosité et compétences cognitives associées" },
          { type: "image", id: "img_ocde",
          src: "images/OCDE.png",
          alt: "résultats de l'ocde de 2021, curiosité et compétences associées"}
        ]
      },

      {
        id: "m0_s5", tag: "contenu",
        title: "La curiosité en déclin à l'école ?",
        next_label: "SUITE",
        blocks: [
          { type: "text", content: "Malgré ses avantages, la curiosité reste peu présente dans les classes. Des études montrent que les comportements de curiosité des élèves (poser des questions, explorer par eux-mêmes, exprimer leurs incertitudes et réfléchir à des hypothèses...) diminuent au fil de la scolarité." },
          { type: "research_box",
            title: "Les comportements de curiosité diminuent au fil de la scolarité",
            content: "Étude démontrant le déclin des comportements de curiosité",
            reference: "[Référence à compléter]" },
          { type: "key_points", title: "Plusieurs facteurs contribuent à ce phénomène :", items: [
            "Avec les contraintes du programme scolaire, le temps limité et les habitudes pédagogiques, il est parfois difficile de concilier objectifs pédagogiques et curiosité des élèves.",
            "Le mode d'évaluation à l'école a tendance à valoriser la performance et le fait de savoir, et moins le fait de se questionner ou d'admettre une incertitude.",
            "Au fil des années, les élèves intériorisent progressivement que l'expression de la curiosité n'est pas vraiment attendue dans la salle de classe."
          ]},
          { type: "research_box",
            title: "Les élèves ont plutôt une perception négative de la curiosité",
            content: "Dans une étude, des chercheurs (Post & Walma van der Molen) ont mené des entretiens individuels avec 92 élèves de primaire pour comprendre comment ils définissent la curiosité, ce qu'ils en pensent, et ce qu'ils vivent à l'école. La grande majorité des élèves associe la curiosité à quelque chose de social et d'un peu intrusif : être curieux, pour eux, c'est surtout vouloir savoir des secrets sur les autres, des rumeurs etc. Très peu font spontanément le lien entre curiosité et envie d'apprendre.",
            reference: "Post, T., & Walma van der Molen, J. H. (2018). Do children express curiosity at school? Exploring children's experiences of curiosity inside and outside the school context. Learning, Culture and Social Interaction, 18, 60‑71. https://doi.org/10.1016/j.lcsi.2018.03.005" },
          { type: "reveal_trigger", label: "SUITE" },
          { type: "text", content: "Pourtant, la curiosité peut être encouragée, notamment à travers le climat de classe : Les interactions quotidiennes entre l'élève, ses pairs et son enseignant ou son enseignante; la manière dont les questions sont accueillies; la place donnée à l'erreur ...Tous ces éléments créent un environnement qui favorise ou freine l'expression de la curiosité. Autrement dit : quand le climat de classe valorise l'exploration et les questions, les élèves osent davantage exprimer leur curiosité.\nL'objectif de cette formation est de proposer des pistes pour tenter de concilier le contraintes scolaires et la curiosité des élèves." }
        ]
      },

      {
        id: "m0_s6", tag: "synthese",
        title: "Avant d'aller plus loin",
        next_label: "CONTINUER VERS LE MODULE 1",
        blocks: [
          { type: "recall", recall_id: "r_init_1", label: "Au début de cette formation, on a essayé de définir ce que vous pensiez de la curiosité. Ce que vous pensiez jusque là :" },
          { type: "recall", recall_id: "r_init_2", label: "" },
          { type: "reflection", id: "r_bilan_0",
            question: "Est-ce que votre idée de la curiosité a évolué ? S'est affinée ?",
            placeholder: "Votre réflexion..." },
          { type: "reveal_trigger", label: "VALIDER" },
          { type: "text", content: "Maintenant qu'on a survolé les enjeux autour du fait de favoriser la curiosité en salle de classe, nous pouvons entrer dans le vif du sujet, et voir plus en détail comme fonctionnent cette curiosité et comment l'encourager." },
          { type: "table",
            headers: ["Module", "Thème", "Durée"],
            rows: [
              ["1", "La curiosité, c'est quoi exactement ?", "~20 min"],
              ["2", "Les moteurs cognitifs de la curiosité", "~20 min"],
              ["3", "Créer les conditions favorables pour la curiosité", "~30 min"]
            ]},
          { type: "key_points", title: "Les activités :", items: [
            "Au cours de chaque module, vous allez réaliser un certain nombre d'activités qui prendront différentes formes. Il s'agit d'exercices ou de questions servant à illustrer et/ou renforcer certains concepts vus dans le module. Ce ne sont pas des évaluations.",
            "À la fin de chaque module, il vous sera demandé de répondre à quelques questions. Il s'agit d'une évaluation formative, qui vous servira à vous auto-évaluer !"
          ]}
        ]
      }

    ]
  },

  // ── MODULE 1 ──────────────────────────────────────────────────────────────
  module_1: {
    id: 1,
    title: "La curiosité, c'est quoi exactement ?",
    duration: "~20 minutes",
    end_message: "[Message de fin du module 1]",
    slides: [

      {
        id: "m1_s1", tag: "intro",
        title: "La curiosité, c'est quoi exactement ?",
        next_label: "C'EST PARTI",
        blocks: [
          { type: "key_points", title: "Dans ce premier module, nous allons :", items: [
            "Comprendre ce qu'est le processus d'apprentissage par curiosité",
            "Introduire ses mécanismes sous-jacents"
          ]}
        ]
      },

      {
        id: "m1_s2", tag: "contenu",
        title: "Le processus d'apprentissage par curiosité",
        next_label: "CONTINUER AVEC L'ÉTAPE 2",
        blocks: [
          { type: "recap_box", content: "On a vu que la curiosité peut être définie comme une motivation à apprendre de nouvelles choses. Elle entraîne des comportements d'exploration, comme le questionnement, la réflexion, une attention plus accrue..." },
          { type: "text", content: "Dans l'apprentissage par curiosité, on retrouve plusieurs étapes :" },
          { type: "text", content: "1. Un sentiment de motivation\n\nDans la curiosité, le sentiment de motivation à apprendre de nouvelles choses est une motivation personnelle (on l'appelle une motivation intrinsèque — car elle provient de l'intérieur). La curiosité s'oppose donc au fait d'apprendre quelque chose de nouveau pour une raison externe — par exemple vouloir obtenir une bonne note ou faire plaisir à ses parents..." },
          { type: "text", content: "Comment s'éveille cette curiosité ?\n\nPour se sentir intrinsèquement motivé pour apprendre quelque chose de nouveau, c'est-à-dire être curieux, il faut se rendre compte d'une lacune de connaissance, ou d'une incertitude. Cette incertitude peut alors éveiller la curiosité qui va nous pousser à explorer notre environnement dans le but de résoudre cette incertitude." },
          { type: "qcm_multi", id: "q_eveil",
            question: "Parmi les propositions suivantes, lesquelles illustrent un éveil de la curiosité ?",
            options: [
              { id: "A", text: "Un élève lit un passage d'un livre sur les écosystèmes marins, il tombe sur l'image d'un animal aquatique qu'il ne connaissait pas. Il lève la main pour demander au maître le nom de cet animal.", correct: true,
                feedback: "Oui, c'est bien un éveil de la curiosité ! L'élève rencontre une lacune de connaissance en lisant le livre, ce qui lui éveille une motivation personnelle à poser une question sur cette lacune." },
              { id: "B", text: "Une élève fait un devoir-maison sur le Moyen-Âge, à la fin de son exercice elle lit un passage sur les cathédrales gothiques. Elle tourne la page pour en lire plus sur le sujet.", correct: true,
                feedback: "C'est aussi un éveil de la curiosité ! Même si le devoir-maison est imposé, l'élève y rencontre des informations nouvelles qu'elle veut approfondir par motivation intrinsèque." },
              { id: "C", text: "Une élève pratique une de ses activités favorites : le dessin. Comme à son habitude, elle dessine un personnage de son dessin-animé préféré. Elle pourrait faire ce dessin les yeux fermés !", correct: false,
                feedback: "Non, ce n'est pas un éveil de curiosité, même si c'est une activité favorite de l'élève. Elle est bien motivée intrinsèquement à dessiner, mais elle n'est pas motivée pour apprendre quelque chose de nouveau ou progresser. Même si c'est une activité gratifiante pour elle, ce n'est pas de la curiosité." },
              { id: "D", text: "Un élève suit attentivement la leçon exposée au tableau, il s'empresse de la recopier proprement dans son cahier.", correct: false,
                feedback: "Ce n'est pas de la curiosité. Même si l'élève est attentif et appliqué, il suit simplement la leçon." }
            ]
          },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "text", content: "Pour se rendre compte des lacunes de connaissances susceptibles d'éveiller la curiosité, il faut pouvoir faire preuve d'auto-évaluation : réfléchir sur ses propres connaissances, être attentif aux connaissances nouvelles ou surprenantes dans l'environnement." }
        ]
      },

      {
        id: "m1_s3", tag: "contenu",
        title: "2. Se fixer un but d'apprentissage en autonomie",
        next_label: "CONTINUER AVEC L'ÉTAPE 3",
        blocks: [
          { type: "text", content: "Les lacunes de connaissances et incertitudes qui éveillent la curiosité peuvent devenir des buts d'apprentissage, que l'on choisit de poursuivre pour combler cette lacune et apprendre quelque chose de nouveau." },
          { type: "illustration", label: "[Lacune de connaissance rencontrée] → [But d'apprentissage par curiosité]" },
          { type: "text", content: "Comme on a vu avec les lacunes de connaissances, les buts d'apprentissage peuvent être divers et variés : en apprendre plus sur les cathédrales gothiques, progresser en dessin, connaître le nom des nouveaux animaux marins, mieux réussir un exercice par satisfaction personnelle..." },
          { type: "text", content: "(Bien) choisir son but d'apprentissage\n\nChoisir ses buts d'apprentissage par soi-même donne un sentiment de contrôle et d'autonomie sur l'apprentissage, renforçant alors le bien-être des élèves, ce qui peut aussi les aider à mieux apprendre.\n\nSe fixer des buts d'apprentissage implique aussi de choisir le niveau de difficulté qui correspond à notre niveau de compétence, c'est-à-dire un objectif atteignable, sans quoi le niveau de difficulté inadapté peut être source de frustration et démotiver l'élève." },
          { type: "example_box", content: "Un élève qui veut se mettre à lire des livres en anglais. Si l'élève pense avoir un niveau plus élevé qu'il ne l'a, il risque de choisir un livre trop compliqué pour lui. La lecture sera alors difficile et risque de le démotiver." },
          { type: "text", content: "Choisir le bon niveau de difficulté, dans la mesure de ce qu'on est capable de faire, fait écho à ce qu'on appelle la zone proximale de développement (ZPD). C'est un concept qui désigne l'espace entre ce qu'un élève peut faire seul et ce qu'il peut faire avec de l'aide. C'est la zone d'apprentissage optimal (là où l'on fait le plus de progrès), où ce qu'on y apprend n'est ni trop facile (donc pas d'ennui), ni trop difficile (donc pas de frustration)." },
          { type: "image", id: "img_zpd", src: "images/ZPD.png", alt: "zone proximale de développement"}
        ]
      },

      {
        id: "m1_s4", tag: "contenu",
        title: "3. Adopter des comportements d'exploration",
        next_label: "CONTINUER AVEC L'ÉTAPE 4",
        blocks: [
          { type: "text", content: "Lorsque la curiosité est éveillée, elle pousse à s'engager dans des comportements d'exploration, qui vont permettre de résoudre les lacunes de connaissance identifiées — remplir le but d'apprentissage qu'on s'est fixé.\nCes comportements d'exploration peuvent prendre de nombreuses formes..." },
          { type: "hotspot_image", id: "scene_classe",
            src: "images/scene_class.png",
            alt: "Scène de classe illustrée",
            instruction: "Cliquez sur les élèves pour découvrir leurs comportements d'exploration.",
            hotspots: [
              { id: "a", x: 69, y: 72,
                label: "L'élève qui pose une question",
                color: "#3DAE8A",
                content: "Poser une question est la forme la plus classique des comportements de curiosité en classe." },
              { id: "b", x: 12, y: 78,
                label: "L'élève qui lit",
                color: "#185FA5",
                content: "Explorer différentes ressources en autonomie peut être un comportement dirigé par la curiosité." },
              { id: "c", x: 32, y: 74,
                label: "L'élève qui réfléchit",
                color: "#D4A017",
                content: "L'exploration ne se limite pas à des actions observables. Réfléchir plus intensément ou plus longtemps à des concepts pour trouver une information manquante (ou en faire des hypothèses) est une forme d'exploration curieuse !" },
              { id: "d", x: 50, y: 65,
                label: "L'élève attentive",
                color: "#8A82D4",
                content: "Si on se sent motivé à en apprendre plus pendant la leçon, alors être attentif peut aussi être un comportement de curiosité." }
            ]
          },
          { type: "reveal_trigger", label: "SUITE" },
          { type: "text", content: "Poser des questions\n\nQuestionner est un des comportements les plus probants de la curiosité, surtout chez les enfants. C'est un moyen efficace d'obtenir une information qui les rend curieux." },
          { type: "key_points", title: "", items: [
            "Le questionnement, quand il est issu de la curiosité, peut être considéré à la fois comme un comportement d'exploration : le moyen par lequel on obtient la nouvelle connaissance qui nous rendait curieux,",
            "Mais aussi comme la formulation d'un but d'apprentissage : en formulant une question on verbalise ce qui nous rend curieux et ce qu'on veut apprendre."
          ]},
          { type: "text", content: "Nous allons voir dans les prochains modules la place que peut avoir le questionnement dans les classes, et comment il peut encourager la curiosité des élèves." }
        ]
      },

      {
        id: "m1_s5", tag: "contenu",
        title: "4. Reconnaître que l'on a fait des progrès",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Pour apprendre en suivant sa curiosité, il est aussi important de reconnaître que l'on a fait des progrès, c'est-à-dire qu'on a appris quelque chose de nouveau." },
          { type: "recap_box", content: "On a vu que les nouvelles informations qu'on obtient quand on a exploré en suivant sa curiosité agissent comme une récompense." },
          { type: "text", content: "Il est important de se rendre compte qu'on progresse et qu'on apprend car le sentiment de récompense que l'on ressent peut renforcer notre envie d'en apprendre plus. Se rendre compte qu'on fait des progrès nous aide donc à rester motivé et renforce notre curiosité, comme dans un cercle vertueux :" },
          { type: "illustration", label: "[Schéma du cercle vertueux — curiosité → exploration → progrès → curiosité]" },
          { type: "research_box",
            content: "Cette idée provient de l'hypothèse du Progrès d'Apprentissage, qui suggère que chaque progrès d'apprentissage fait par l'apprenant renforce les états de curiosité.",
            reference: "[Référence à compléter]" },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "text", content: "Mais pas seulement ! Réfléchir sur ses progrès lorsque l'on apprend permet aussi de mettre à jour ses propres connaissances — analyser et réajuster ses nouvelles compétences. Cela permet de continuer à sélectionner des buts d'apprentissage qui sont toujours adaptés à ses compétences." },
          { type: "class_box", content: "Il y a plusieurs façons d'encourager l'évaluation des progrès avec les élèves. D'abord, s'auto-évaluer demande de la pratique — pousser les élèves à se questionner sur ce qu'ils ont appris ou non et sur leurs progrès est un bon exercice !\n\nMais surtout, il faut les encourager à être plus à l'aise avec l'erreur. Faire des erreurs signifie que l'apprentissage est toujours en cours. L'erreur devrait donc être un indicateur de la marge de progrès à faire, et non synonyme d'échec. Concrètement, valoriser les efforts et le processus d'apprentissage (ex. la progression, le temps passé à travailler, etc.) plutôt qu'une performance (ex. une bonne note) est une bonne façon de donner de l'importance au processus d'apprentissage." }
        ]
      },

      {
        id: "m1_s6", tag: "synthese",
        title: "En résumé",
        next_label: "SUITE",
        blocks: [
          { type: "recap_box", content: "La curiosité est une motivation intrinsèque (c'est-à-dire gratifiante pour des raisons personnelles) à apprendre de nouvelles choses." },
          { type: "text", content: "Apprendre par curiosité implique 4 grandes étapes :" },
          { type: "key_points", title: "", items: [
            "L'éveil de la curiosité, en identifiant une lacune de connaissance",
            "Se fixer un but d'apprentissage, adapté à ses besoins",
            "Chercher à résoudre la lacune de connaissance, remplir le but d'apprentissage qu'on s'est fixé — en adoptant des comportements d'exploration",
            "Évaluer si on a bien fait le progrès d'apprentissage souhaité"
          ]}
        ]
      },

      {
        id: "m1_s7", tag: "contenu",
        title: "Une motivation intrinsèque",
        next_label: "CONTINUER",
        blocks: [
          { type: "recap_box", content: "On a vu que la curiosité peut être définie comme une motivation intrinsèque à apprendre de nouvelles choses. La curiosité est donc un type spécifique de motivation." },
          { type: "text", content: "La motivation est ce qui nous pousse à agir. Elle influence notamment nos apprentissages et notre capacité à travailler de manière continue et active, sans se lasser. En d'autres termes, elle permet d'être engagé dans ce qu'on entreprend.\n\nÊtre motivé facilite l'apprentissage en orientant notre attention et notre énergie vers un objectif précis. Cela nous aide à persévérer face aux difficultés et à rester concentrés sur notre tâche — en ayant un but clair, il nous est plus facile de nous engager activement dans l'apprentissage qui va permettre de poursuivre et d'atteindre notre objectif." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "text", content: "Quand on s'engage dans un apprentissage, on peut être motivé à différents degrés, mais on peut aussi distinguer différents types de motivations, dont la curiosité fait partie.\n\nComprendre ces différentes formes de motivation permet de mieux soutenir l'apprentissage des élèves et de créer des conditions favorables à leur réussite !" }
        ]
      },

      {
        id: "m1_s8", tag: "contenu",
        title: "Les types de motivations",
        next_label: "CONTINUER",
        blocks: [
          { type: "spectrum", id: "spec_motiv",
            steps: [
              {
                label: "Motivation extrinsèque",
                color: "#993C1D", bg: "#FAECE7",
                content: "Une forme de motivation générée par des causes extérieures à la personne qui apprend. Elle est donc indépendante de nous et nous avons peu de contrôle sur elle."
              },
              {
                label: "Intériorisation des buts",
                color: "#854F0B", bg: "#FAEEDA",
                content: "Les buts qui nous motivent de façon intrinsèque peuvent provenir de différentes sources. Par exemple, on peut intérioriser l'importance d'une compétence parce que notre cercle social la valorise — on finit par développer un intérêt personnel pour ce domaine et on peut se retrouver motivé à en apprendre plus sur ce sujet à titre personnel. Donc la plupart du temps, nos motivations intrinsèques et intérêts sont eux-mêmes forgés par notre environnement."
              },
              {
                label: "Motivation intrinsèque",
                color: "#0F6E56", bg: "#E1F5EE",
                content: "Une forme de motivation que nous générons nous-mêmes. Dans ce cas, c'est nous qui créons cette motivation selon nos propres intérêts et nos buts d'apprentissage."
              }
            ]
          }
        ]
      },

      {
        id: "m1_s9", tag: "activite",
        title: "Exercice — types de motivations",
        next_label: "CONTINUER",
        blocks: [
          { type: "sort", id: "sort_motiv",
            instruction: "Glissez et déposez les illustrations de motivations qui correspondent au type intrinsèque et extrinsèque :",
            items: [
              { id: "a", text: "L'élève révise son devoir pour avoir une bonne note à son évaluation",
                feedback: "Extrinsèque — causalité externe (+). La motivation vient d'une récompense extérieure positive (la bonne note)." },
              { id: "b", text: "L'élève a travaillé pour résoudre ses problèmes de maths car il éprouve de la fierté et de la satisfaction lorsqu'il y arrive",
                feedback: "Intrinsèque. La motivation vient d'un sentiment personnel de fierté et de satisfaction — une récompense interne." },
              { id: "c", text: "L'élève révise son devoir pour éviter une punition en cas de mauvaise note",
                feedback: "Extrinsèque — causalité externe (−). La motivation vient d'une contrainte externe négative (éviter une punition)." },
              { id: "d", text: "L'élève apprend sa poésie parce qu'il veut être aussi bon que ses camarades dans cet exercice",
                feedback: "Extrinsèque — causalité interne (+). La motivation est intériorisée (comparaison sociale), mais reste liée au regard des autres." },
              { id: "e", text: "L'élève apprend sa poésie pour ne pas décevoir ses parents",
                feedback: "Extrinsèque — causalité interne (−). La motivation vient d'une pression intériorisée (ne pas décevoir), pas d'un intérêt personnel." }
            ],
            categories: ["Motivation intrinsèque", "Motivation extrinsèque"],
            answers: { a: 1, b: 0, c: 1, d: 1, e: 1 }
          }
        ]
      },

      {
        id: "m1_s10", tag: "contenu",
        title: "Motivation intrinsèque vs extrinsèque",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Même si les deux types de motivation nous permettent de nous engager dans des activités d'apprentissage, la motivation intrinsèque — celle que nous créons seuls — est plus intéressante à cultiver car elle est plus gratifiante pour l'apprenant et aussi plus bénéfique pour les apprentissages." },
          { type: "research_box",
            title: "Bénéfices de la motivation intrinsèque",
            content: "Dans une étude longitudinale (4 ans) sur 200 élèves de primaire, les auteurs ont trouvé une corrélation entre la motivation intrinsèque et le succès académique, contrairement à la motivation extrinsèque : les élèves avec un haut score de motivation intrinsèque étaient ceux avec les meilleures notes scolaires.",
            reference: "Lemos, M. S., & Veríssimo, L. (2014). The Relationships between Intrinsic Motivation, Extrinsic Motivation, and Achievement, Along Elementary School. Procedia - Social and Behavioral Sciences, 112, 930‑938." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "text", content: "De plus, puisque la motivation intrinsèque ne dépend pas de facteurs externes, nous avons plus de contrôle sur cette forme de motivation.\n\nDans le cas des récompenses externes, nous avons peu de contrôle sur leur obtention." },
          { type: "illustration", label: "Reprenons l'exemple de l'élève qui souhaite obtenir une bonne note à un contrôle. L'élève fournit les efforts nécessaires pour obtenir une bonne note, mais il n'obtient pas la note espérée. La « récompense », la satisfaction de l'élève, n'est finalement pas obtenue, ce qui peut générer de la frustration, et le conduire à se démotiver." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "text", content: "Pour autant, être motivé pour des raisons externes n'est pas toujours une mauvaise chose — les deux types de motivation sont importants pour soutenir l'engagement dans des tâches complexes d'apprentissage.\n\nEn fait, les deux types de motivation sont parfois complémentaires pour réussir des apprentissages complexes qui demandent des efforts longs et répétés." },
          { type: "illustration", label: "Un élève est très curieux d'en savoir plus et ressent une motivation personnelle à développer ses compétences en histoire-géo, mais pour mettre en place un planning de révision pour réussir son évaluation il s'aide de motivations externes telles que l'envie de recevoir une bonne note, la fierté de ses parents et de ses camarades." }
        ]
      },

      {
        id: "m1_s11", tag: "contenu",
        title: "Importance dans l'apprentissage",
        next_label: "CONTINUER",
        blocks: [
          { type: "key_points", title: "Une meilleure mémorisation", items: [] },
          { type: "research_box",
            content: "Dans une étude, des chercheurs (Fandakova & Gruber) ont présenté à 60 enfants et adolescents (10-14 ans) des questions de culture générale associées à des niveaux de curiosité élevé ou faible, puis testé leur mémorisation des réponses. Les résultats montrent que les élèves mémorisaient mieux les réponses aux questions qui les rendaient curieux. Cet effet se retrouvait aussi bien chez les enfants que chez les adolescents. Et chez les adolescents, l'intérêt ressenti pour la réponse renforçait encore davantage la mémorisation.",
            reference: "Fandakova, Y., & Gruber, M. (2021). States of curiosity and interest enhance memory differently in adolescents and in children. Developmental Science, 24(1), Article 1. https://doi.org/10.1111/desc.13005" },
          { type: "key_points", title: "Un effort amoindri, plus d'engagement", items: [] },
          { type: "key_points", title: "Un sentiment d'autonomie et de compétence", items: [
            "Choisir des buts qui comptent et qui ont du sens + choisir la bonne difficulté dans sa ZPD pour faire des progrès = sentiment de compétence"
          ]},
          { type: "key_points", title: "Plus de bien-être", items: [
            "Information gratifiante"
          ]}
        ]
      },

      {
        id: "m1_s12", tag: "synthese",
        title: "En résumé",
        next_label: "SUITE",
        blocks: [
          { type: "key_points", title: "On peut différencier 2 grands types de motivations :", items: [
            "Intrinsèque = motivation personnelle, pour des raisons propres à soi",
            "Extrinsèque = motivation pour des raisons externes"
          ]},
          { type: "text", content: "La curiosité est une forme particulière de motivation intrinsèque car c'est une motivation intrinsèque à apprendre de nouvelles choses, faire du progrès." },
          { type: "key_points", title: "La curiosité présente de nombreux avantages pour l'apprentissage :", items: [
            "Une meilleure mémorisation",
            "Un sentiment d'autonomie et de compétence",
            "Plus de bien-être"
          ]}
        ]
      },

      {
        id: "m1_s13", tag: "evaluation",
        title: "Ce que vous avez retenu — évaluation",
        next_label: "CONTINUER VERS LE MODULE 2",
        blocks: [
          { type: "text", content: "Vous avez terminé le premier module. Pour évaluer votre compréhension des différents concepts qui ont été présentés, nous allons passer à une courte évaluation sous forme de QCM." },
          { type: "qcm", id: "eval_q1",
            question: "[Question QCM 1 — à compléter]",
            options: ["[A]", "[B]", "[C]", "[D]"], correct: 0,
            feedback_correct: "[Feedback]", feedback_incorrect: "[Feedback]" },
          { type: "qcm", id: "eval_q2",
            question: "[Question QCM 2 — à compléter]",
            options: ["[A]", "[B]", "[C]", "[D]"], correct: 0,
            feedback_correct: "[Feedback]", feedback_incorrect: "[Feedback]" },
          { type: "qcm", id: "eval_q3",
            question: "[Question QCM 3 — à compléter]",
            options: ["[A]", "[B]", "[C]", "[D]"], correct: 0,
            feedback_correct: "[Feedback]", feedback_incorrect: "[Feedback]" }
        ]
      }

    ]
  },

  // ── MODULE 2 ──────────────────────────────────────────────────────────────
  module_2: {
    id: 2,
    title: "La curiosité et la métacognition",
    duration: "~20 minutes",
    end_message: "[Message de fin du module 2]",
    slides: [

      {
        id: "m2_s1", tag: "intro",
        title: "La curiosité et la métacognition",
        next_label: "C'EST PARTI",
        blocks: [
          { type: "text", content: "Maintenant que nous avons vu ce qu'est la curiosité, ainsi que certains des mécanismes qui la sous-tendent, nous pouvons passer à la suite." },
          { type: "text", content: "Notamment en introduisant le concept de métacognition. La métacognition est un terme qui englobe de nombreux processus, mais une définition générale serait que c'est la capacité à évaluer et auto-réguler ses propres processus cognitifs. Savoir ce qu'on sait et ce qu'on ne sait pas, contrôler son attention, remarquer ses erreurs et les corriger, etc. Elle joue un rôle essentiel dans l'apprentissage par curiosité." },
          { type: "key_points", title: "Dans ce deuxième module, nous allons :", items: [
            "Voir plus en détail ce qu'est la métacognition",
            "Identifier les éléments clés de la métacognition qui sont importants pour un apprentissage par curiosité"
          ]}
        ]
      },

      {
        id: "m2_s2", tag: "activite",
        title: "La métacognition",
        blocks: [
          { type: "scenario", content: "Imaginez que vous êtes en train de lire un livre. Vous lisez un paragraphe et arrivé en bas de page vous réalisez que vous n'avez pas compris ce que vous avez lu. Vous décidez alors de relire le paragraphe une seconde fois, cette fois en vous forçant à vous concentrer sur le sens de chacune des phrases, et en vérifiant que vous connaissez bien la signification de tous les mots. Arrivé en bas de la page, vous vous demandez encore une fois si vous avez bien intégré ce que vous avez lu. Cette fois oui ! On peut passer à la page suivante." },
          { type: "reveal_trigger", label: "OK" },
          { type: "qcm_annotated", id: "q_metacog",
            question: "D'après vous, quelle(s) action(s) faisaient appel à la métacognition ?",
            options: [
              { id: "A", text: "Lire le livre",
                correct: false,
                feedback: "L'action de lire peut se faire sans contrôle métacognitif — ça ne demande pas d'évaluation et de régulation en soi." },
              { id: "B", text: "Réaliser que vous n'avez pas compris",
                correct: true,
                feedback: "Il s'agit d'une évaluation métacognitive : avoir conscience qu'on n'a pas intégré les informations pertinentes." },
              { id: "C", text: "Relire le paragraphe",
                correct: true,
                feedback: "La décision de relire est bien une régulation métacognitive — faire le choix de relire quand on n'a pas compris montre qu'on exerce un contrôle sur la tâche." },
              { id: "D", text: "Se concentrer sur chacune des phrases",
                correct: true,
                feedback: "Il s'agit aussi d'une action métacognitive, car elle demande de contrôler consciemment son attention." },
              { id: "E", text: "Se demander si tout est compris",
                correct: true,
                feedback: "C'est une évaluation métacognitive, qui répond à la question : est-ce que j'ai bien rempli le but que je me suis fixé ?" }
            ]
          }
        ]
      },

      {
        id: "m2_s3", tag: "contenu",
        title: "La métacognition",
        blocks: [
          { type: "text", content: "La métacognition est cette capacité à auto-évaluer ses propres connaissances et processus de pensée, mais aussi être en capacité de les auto-réguler." },
          { type: "text", content: "On peut diviser la métacognition en 2 grandes étapes :" },
          { type: "reveal_trigger", label: "CONTINUER" },

          { type: "text", content: "1. L'auto-évaluation\n\nC'est la capacité à connaître ses propres connaissances et processus de pensée : savoir quand on sait quelque chose et quand on ne sait pas.\n\nCette auto-évaluation peut être plus ou moins explicite : par exemple, on est capable de dire avec précision ce qu'on ne sait pas, et par moment c'est plutôt une impression de doute." },
          { type: "reveal_trigger", label: "CONTINUER" },

          { type: "text", content: "L'auto-évaluation sert aussi à juger après coup si on a bien réalisé un exercice, si on a bien appris, ou si on a bien atteint un objectif qu'on s'est fixé." },
          { type: "recall", recall_id: "m2_s2_q_metacog", label: "Comme lorsqu'on a évalué qu'on n'avait pas compris ce qu'on avait lu.", hide_label: true },
          { type: "reveal_trigger", label: "CONTINUER" },

          { type: "text", content: "Mais ça ne se limite pas à ça. En fait, ce type de supervision peut servir à faire des « pronostics » sur une tâche qu'on essaie de réaliser. Par exemple, avant de m'engager dans un exercice : est-ce que je pense être en capacité de le réaliser ? Avec plus ou moins de difficulté ? Avec l'aide de quelqu'un de plus expert ?\n\nC'est un peu être capable de connaître son propre niveau d'expertise dans un domaine.\n\nÉvidemment, il est possible de se tromper dans ce type de jugements métacognitifs. Comme à peu près tout, la métacognition est aussi une compétence qui peut s'entraîner !" },
          { type: "research_box",
            title: "S'entraîner à s'auto-évaluer",
            content: "[Contenu de l'étude Proust et Goupil — à compléter]",
            reference: "[Référence Proust & Goupil — à compléter]" }
        ]
      },

      {
        id: "m2_s4", tag: "contenu",
        title: "L'auto-régulation",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "2. L'auto-régulation\n\nC'est l'autre versant de la métacognition : la capacité à pouvoir adapter et modifier ses propres comportements et processus cognitifs." },
          { type: "text", content: "On peut retrouver dans cette catégorie des processus qui se rapportent à du contrôle attentionnel : diriger volontairement son attention pour se concentrer sur un exercice qu'on a entrepris —" },
          { type: "recall", recall_id: "m2_s2_q_metacog", label: "Comme lorsqu'on a fait l'effort de se concentrer sur chacun des mots pour les comprendre.", hide_label: true },
          { type: "text", content: "— ou alors à de la planification : comme dans le fait de sélectionner une stratégie d'apprentissage appropriée à l'exercice d'apprentissage." },
          { type: "recall", recall_id: "m2_s2_q_metacog", label: "Comme lorsqu'on a pris la décision de relire le paragraphe.", hide_label: true },
          { type: "text", content: "Ce sont ici des aptitudes mises en place sur un court et moyen terme." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "text", content: "Mais on peut aussi retrouver des compétences métacognitives mobilisées sur du plus long terme : comme la planification d'un apprentissage sur plusieurs semaines voire plusieurs mois par exemple.\n\nQuand on entreprend un apprentissage complexe — comme c'est typiquement le cas à l'école — on mobilise à la fois de l'auto-évaluation et de l'auto-régulation : bien évaluer son apprentissage et ses progrès permet d'informer les processus de régulation." },
          { type: "sort", id: "sort_metacog",
            instruction: "[Exercice de tri — auto-régulation vs auto-évaluation en situation de classe — contenu à compléter]",
            items: [
              { id: "a", text: "[Situation A — à compléter]", feedback: "[Feedback A]" },
              { id: "b", text: "[Situation B — à compléter]", feedback: "[Feedback B]" },
              { id: "c", text: "[Situation C — à compléter]", feedback: "[Feedback C]" },
              { id: "d", text: "[Situation D — à compléter]", feedback: "[Feedback D]" }
            ],
            categories: ["Auto-évaluation", "Auto-régulation"],
            answers: { a: 0, b: 1, c: 0, d: 1 } },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "text", content: "On parle d'apprentissage auto-régulé quand on met bien en place tous les éléments pour apprendre de façon autonome en suivant son propre progrès et ses propres aptitudes.\n\nL'apprentissage par curiosité peut être considéré comme une forme particulière d'apprentissage auto-régulé. C'est ce qu'on va voir dans la prochaine partie." }
        ]
      },

      {
        id: "m2_s5", tag: "contenu",
        title: "Les briques métacognitives de la curiosité",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Quand on apprend en suivant sa curiosité, il faut aussi être capable de se fixer ses propres buts (adaptés à ses capacités), mettre en place une stratégie d'apprentissage (planifier) et s'assurer qu'on suit bien le plan qu'on s'est fixé, réajuster au besoin — en fonction de nos progrès et performances... Finalement, utiliser sa métacognition !" },
          { type: "text", content: "On va voir plus en détail toutes ces briques essentielles pour apprendre en suivant sa curiosité." }
        ]
      },

      {
        id: "m2_s6", tag: "contenu",
        title: "1. S'auto-évaluer pour identifier des lacunes de connaissances",
        next_label: "CONTINUER",
        blocks: [
          { type: "recap_box", content: "On a vu que la curiosité nécessite entre autre d'identifier des lacunes de connaissances, des incertitudes pour éveiller cet état de motivation intrinsèque, qui nous pousse à aller résoudre ces lacunes." },
          { type: "text", content: "Identifier une lacune de connaissance ou une incertitude, c'est le point de départ de la curiosité.\n\nCela nécessite de bien évaluer ses propres connaissances : bien identifier quand on ne sait pas quelque chose, se questionner sur ses incertitudes.\n\nEn somme, utiliser sa compétence d'auto-évaluation." },
          { type: "reveal_trigger", label: "SUITE" },
          { type: "text", content: "La curiosité ressentie suite à une auto-évaluation est ce qu'on peut appeler un sentiment métacognitif. C'est le sentiment produit par un traitement métacognitif :" },
          { type: "process_flow", id: "flow_metacog",
            steps: [
              { behavior: "Je me demande si je connais cette information",
                label: "Auto-évaluation", tag: "Métacognition", color: "#534AB7", bg: "#EEEDFE" },
              { behavior: "Non, je ne la connais pas",
                label: "Feedback", tag: "Réponse à mon auto-évaluation", color: "#854F0B", bg: "#FAEEDA" },
              { behavior: "Je me sens curieux et souhaite en savoir plus",
                label: "Sentiment métacognitif", tag: "Curiosité", color: "#0F6E56", bg: "#E1F5EE" }
            ]
          }
        ]
      },

      {
        id: "m2_s7", tag: "contenu",
        title: "2. Faire des hypothèses sur les informations qui nous rendent curieux",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Une autre activité métacognitive utile à l'apprentissage par curiosité est la formulation d'hypothèses. Faire des hypothèses sur les connaissances manquantes et qu'on souhaite poursuivre est très utile, car cela permet de planifier la façon dont on peut trouver ces informations. Ça va aider à guider notre attention et nos actions vers des éléments utiles pour résoudre les lacunes de connaissances." },
          { type: "example_box", content: "On cherche à comprendre un mot qu'on ne connaît pas pendant la lecture d'un livre. Le contexte peut nous aider à faire des hypothèses sur sa signification. On peut alors utiliser ces hypothèses pour cibler la façon dont on va chercher la définition du mot." },
          { type: "reveal_trigger", label: "SUITE" },
          { type: "text", content: "En plus de guider notre exploration curieuse, faire des hypothèses sur les connaissances manquantes permet de favoriser la curiosité ressentie pour ces informations." },
          { type: "research_box",
            content: "Une étude de Brod et Breitwieser a testé l'effet de la formulation d'hypothèses sur la curiosité. Dans une tâche de mémorisation, les participants devaient retenir des faits numériques, soit en formulant une prédiction sur la réponse avant de la découvrir, soit en donnant un exemple. Les résultats montrent que formuler des prédictions augmentait la curiosité ressentie pour la réponse, et que cette curiosité plus élevée était associée à une meilleure mémorisation.",
            reference: "Brod, G., & Breitwieser, J. (2019). Lighting the wick in the candle of learning : Generating a prediction stimulates curiosity. Npj Science of Learning, 4(1), 1‑7. https://doi.org/10.1038/s41539-019-0056-y" },
          { type: "text", content: "Une des explications proposées est qu'anticiper une réponse (même si elle est incorrecte) rend la lacune de connaissance plus saillante, ce qui maintient l'état de curiosité jusqu'à l'obtention de la réponse. Autrement dit, formuler une hypothèse est aussi un moteur qui entretient activement la curiosité pendant l'apprentissage." }
        ]
      },

      {
        id: "m2_s8", tag: "contenu",
        title: "3. Auto-évaluer ses progrès d'apprentissage, évaluer les nouvelles informations",
        next_label: "CONTINUER",
        blocks: [
          { type: "recap_box", content: "On a vu que pour apprendre en suivant sa curiosité, il est aussi important de reconnaître que l'on a fait des progrès, c'est-à-dire qu'on a appris quelque chose de nouveau." },
          { type: "text", content: "Se rendre compte qu'on progresse est important car les nouvelles connaissances acquises par curiosité procurent un sentiment de récompense qui renforce notre envie d'en apprendre plus.\n\nRemarquer que l'on a fait des progrès nécessite de faire preuve d'auto-évaluation : juger après coup si on a bien rempli l'objectif d'apprentissage qu'on s'est fixé." },
          { type: "key_points", title: null, items: [
            "Si la réponse est oui, on ressent bien ce sentiment de récompense qui renforce notre curiosité.",
            "Si la réponse est non, on peut faire preuve d'auto-régulation pour continuer de chercher l'information qui nous manque."
          ]},
          { type: "reveal_trigger", label: "SUITE" },
          { type: "text", content: "Évaluer son progrès ne sert pas seulement à rester motivé : c'est aussi l'occasion de mettre à jour sa représentation de ce qu'on sait et de ce qu'on ne sait pas encore. En intégrant les nouvelles connaissances acquises, on affine sa capacité à s'auto-évaluer avec justesse, ce qui rend les prochains buts d'apprentissage mieux calibrés." }
        ]
      },

      {
        id: "m2_s9", tag: "contenu",
        title: "4. Connaissances métacognitives sur la curiosité et l'apprentissage",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Les connaissances métacognitives, c'est le fait de savoir comment on apprend : connaître ses propres stratégies, ses points forts et ses limites dans une tâche d'apprentissage.\n\nMieux se connaître en tant qu'apprenant permet de mieux prendre en charge son apprentissage : on choisit des stratégies plus adaptées, on anticipe mieux les difficultés." },
          { type: "text", content: "Dans le cas de la curiosité, ces connaissances métacognitives jouent un rôle particulier : savoir ce qu'est la curiosité, comprendre comment elle fonctionne et reconnaître quand on la ressent, c'est déjà une façon de mieux l'utiliser." },
          { type: "example_box", content: "Savoir qu'on ressent de la curiosité plus facilement quand on fait des hypothèses est une connaissance métacognitive qu'on peut mobiliser, par exemple en choisissant délibérément de faire une prédiction avant d'explorer." },
          { type: "text", content: "De la même façon, un élève qui comprend que l'incertitude est le point de départ de la curiosité (et non quelque chose à éviter) sera plus enclin à s'en servir comme levier d'apprentissage." }
        ]
      },

      {
        id: "m2_s10", tag: "synthese",
        title: "En résumé",
        next_label: "SUITE",
        blocks: [
          { type: "text", content: "La métacognition, c'est la capacité à évaluer et réguler ses propres processus cognitifs. Elle se divise en deux grandes dimensions :" },
          { type: "key_points", title: null, items: [
            "L'auto-évaluation = savoir ce qu'on sait et ce qu'on ne sait pas, avant, pendant et après une tâche.",
            "L'auto-régulation = adapter ses comportements et stratégies en fonction de cette évaluation."
          ]},
          { type: "text", content: "L'apprentissage par curiosité est une forme d'apprentissage auto-régulé. Il mobilise 4 briques métacognitives essentielles :" },
          { type: "key_points", title: null, items: [
            "S'auto-évaluer pour identifier une lacune de connaissance → point de départ de la curiosité.",
            "Formuler des hypothèses sur cette lacune → guide l'exploration et entretient la curiosité.",
            "Évaluer ses progrès → renforce la motivation et affine les prochains buts d'apprentissage.",
            "Connaître son propre fonctionnement curieux → permet de mieux mobiliser sa curiosité."
          ]}
        ]
      },

      {
        id: "m2_s11", tag: "evaluation",
        title: "Ce que vous avez retenu — évaluation",
        next_label: "CONTINUER VERS LE MODULE 3",
        blocks: [
          { type: "text", content: "Vous avez terminé le deuxième module. Pour évaluer votre compréhension des différents concepts qui ont été présentés, nous allons passer à une courte évaluation sous forme de QCM." },
          { type: "qcm", id: "eval_q1",
            question: "[Question QCM 1 — à compléter]",
            options: ["[A]", "[B]", "[C]", "[D]"], correct: 0,
            feedback_correct: "[Feedback]", feedback_incorrect: "[Feedback]" },
          { type: "qcm", id: "eval_q2",
            question: "[Question QCM 2 — à compléter]",
            options: ["[A]", "[B]", "[C]", "[D]"], correct: 0,
            feedback_correct: "[Feedback]", feedback_incorrect: "[Feedback]" },
          { type: "qcm", id: "eval_q3",
            question: "[Question QCM 3 — à compléter]",
            options: ["[A]", "[B]", "[C]", "[D]"], correct: 0,
            feedback_correct: "[Feedback]", feedback_incorrect: "[Feedback]" }
        ]
      }

    ]
  },

  // ── MODULE 3 ──────────────────────────────────────────────────────────────
  module_3: {
    id: 3,
    title: "Créer un environnement favorable à la curiosité en classe",
    duration: "~30 minutes",
    end_message: "[Message de fin du module 3]",
    slides: [

      {
        id: "m3_s1", tag: "intro",
        title: "Créer un environnement favorable à la curiosité en classe",
        next_label: "C'EST PARTI",
        blocks: [
          { type: "text", content: "Maintenant que nous avons vu ce qu'est la métacognition, ainsi que son rôle essentiel dans l'apprentissage par curiosité, nous pouvons passer à la suite." },
          { type: "text", content: "Dans ce troisième module, nous allons voir comment favoriser concrètement la curiosité en classe. Notamment, à travers les études empiriques menées dans les salles de classe, nous allons :" },
          { type: "key_points", title: null, items: [
            "Identifier les conditions qui déclenchent la curiosité chez les élèves",
            "Identifier les compétences entraînables qui servent à l'apprentissage par curiosité",
            "Identifier le climat de classe qui favorise l'expression de la curiosité",
            "Comprendre les différences interindividuelles dans la curiosité"
          ]}
        ]
      },

      {
        id: "m3_s2", tag: "contenu",
        title: "Conditions qui favorisent l'éveil de la curiosité",
        next_label: "CONTINUER",
        blocks: [
          { type: "recap_box", content: "On a vu que la curiosité s'éveille lorsqu'on se rend compte d'une lacune de connaissance ou d'une incertitude, quelque chose qu'on ne sait pas encore, mais qu'on voudrait savoir." },
          { type: "text", content: "Dans la classe, un certain nombre de conditions peuvent favoriser l'émergence de la curiosité." }
        ]
      },

      {
        id: "m3_s3", tag: "contenu",
        title: "La surprise et la contradiction",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Lorsqu'on rencontre une information qui contredit ce qu'on croyait savoir, ou qui nous surprend, on réalise que nos connaissances étaient incomplètes ou inexactes. Autrement dit, la surprise ou la contradiction rendent les lacunes de connaissance plus saillantes — ce qui peut éveiller un état de curiosité." },
          { type: "example_box", content: "Un élève pense que les baleines sont des poissons. En classe, il apprend que ce sont des mammifères. Cette contradiction avec ce qu'il croyait l'amène à se poser des questions : « Mais alors, pourquoi elles vivent dans l'eau ? Comment elles respirent ? » La surprise lui a permis d'identifier de nouvelles lacunes, et donc de nouvelles opportunités d'apprentissage." },
          { type: "text", content: "Pour que la surprise fonctionne comme déclencheur, il faut que l'élève ait formé une attente au préalable : une hypothèse, même approximative, de ce à quoi il s'attend. Si on n'a pas d'idée préalable sur ce qu'on va apprendre, il n'y a rien à contredire, et donc pas de surprise." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "research_box",
            content: "Une étude a montré que la curiosité, la surprise et la confusion apparaissent souvent ensemble — notamment lorsqu'on se trompe alors qu'on était sûr d'avoir raison. C'est ce décalage entre ce qu'on croyait savoir et la réalité qui crée un état de curiosité.",
            reference: "Vogl, E., Pekrun, R., Murayama, K., & Loderer, K. (2020). Surprised–Curious–Confused: Epistemic emotions and knowledge exploration. Emotion, 20(4), 625–641." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "class_box", content: "Avant d'introduire un nouveau contenu, inviter les élèves à formuler ce qu'ils pensent déjà du sujet : une hypothèse, une prédiction, même approximative. « D'après vous, pourquoi est-ce que... ? », « Qu'est-ce qui se passe selon vous si... ? ». Ce temps de réflexion préalable crée des attentes qui rendront la surprise ou la contradiction d'autant plus saillantes (et donc la curiosité d'autant plus vive !) au moment de découvrir le contenu réel." }
        ]
      },

      {
        id: "m3_s4", tag: "contenu",
        title: "L'incertitude",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Placer les élèves dans une situation où ils n'ont pas toutes les informations pour résoudre un problème peut s'avérer être un déclencheur efficace de la curiosité. En somme, créer de l'incertitude dans une leçon peut générer de la curiosité chez les élèves." },
          { type: "warning_box", content: "L'incertitude peut aussi générer de la frustration si les élèves ont l'impression d'être livrés à eux-mêmes sans filet. Un geste simple permet de contourner cela." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "research_box",
            content: "Une étude de Lamnina et Chase (2021) a comparé deux façons d'enseigner des notions de physique à des collégiens. Dans une condition d'incertitude, les élèves devaient essayer de résoudre un problème sans avoir reçu les informations nécessaires (ex. une loi physique ou équation permettant de résoudre l'exercice) — ils devaient donc chercher et inventer les solutions par eux-mêmes. Dans une autre condition, toutes les informations leur étaient données d'emblée.\n\nLes élèves placés dans la situation d'incertitude étaient significativement plus curieux. De plus, même si tous les groupes retenaient les contenus de façon équivalente, les élèves en situation d'incertitude étaient meilleurs pour transférer ce qu'ils avaient appris à de nouveaux problèmes (ce qui est pourtant un objectif d'apprentissage difficile à atteindre !)\n\nUn résultat pratique important : prévenir les élèves à l'avance qu'ils allaient se sentir incertains réduisait leur affect négatif, sans diminuer leur curiosité ni leurs apprentissages.",
            reference: "Lamnina, M., & Chase, C. C. (2021). Developing a thirst for knowledge. Contemporary Educational Psychology, 65." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "class_box", content: "Avant une activité de découverte ou de résolution de problème, proposer aux élèves de chercher par eux-mêmes avant d'avoir toutes les clés — quitte à ne pas trouver. Et les prévenir explicitement : « Vous allez peut-être vous sentir un peu perdus au début, c'est normal et c'est fait exprès. » Ce simple avertissement suffit à réduire le stress lié à l'incertitude, tout en préservant l'effet bénéfique sur la curiosité et le transfert des apprentissages." }
        ]
      },

      {
        id: "m3_s5", tag: "contenu",
        title: "Le choix et l'autonomie",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Laisser les élèves choisir ce qu'ils vont explorer, même de façon limitée, renforce leur sentiment d'autonomie et stimule leur curiosité pour le sujet choisi." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "research_box",
            content: "Une étude a examiné le lien entre sentiment d'autonomie et curiosité. Les participants qui avaient le choix du sujet d'une vidéo à regarder montraient plus de curiosité pour ce sujet que ceux à qui il avait été imposé. Cet effet était particulièrement marqué chez les participants qui avaient généralement peu de sentiment d'autonomie dans leur quotidien. Autrement dit, ceux qui en ont le moins bénéficient le plus du fait qu'on leur en offre.",
            reference: "Schutte, N. S., & Malouff, J. M. (2019). The impact of signature character strengths interventions: A meta-analysis. Journal of Happiness Studies." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "class_box", content: "Laisser aux élèves un choix, même limité, sur ce qu'ils vont explorer peut suffire à stimuler leur curiosité. Choisir le thème d'une lecture, l'angle d'un exposé, ou la question à laquelle ils veulent répondre dans un exercice. Ces petites marges d'autonomie font une différence réelle, en particulier pour les élèves qui en ont peu l'habitude." }
        ]
      },

      {
        id: "m3_s6", tag: "contenu",
        title: "Les compétences qui soutiennent la curiosité",
        next_label: "CONTINUER",
        blocks: [
          { type: "recap_box", content: "On a vu que l'apprentissage par curiosité mobilise un ensemble de compétences cognitives : l'auto-évaluation pour identifier ses lacunes, la formulation d'hypothèses, l'auto-régulation pour guider son exploration, ou encore le questionnement." },
          { type: "text", content: "Une autre façon d'encourager la curiosité en classe est d'entraîner directement les compétences mobilisées lors d'apprentissages par curiosité. Si la curiosité s'appuie sur des processus métacognitifs, alors les développer chez les élèves devrait les rendre plus capables d'apprendre par curiosité." },
          { type: "text", content: "Ces entraînements peuvent prendre deux formes selon les compétences visées : certains sont disciplinaires, c'est-à-dire liés à une matière ou un contenu spécifique ; d'autres sont transversaux, et s'appliquent à n'importe quel contexte d'apprentissage." }
        ]
      },

      {
        id: "m3_s7", tag: "contenu",
        title: "Poser des questions",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Poser des questions est une compétence importante pour l'apprentissage par la curiosité : elles permettent de trouver efficacement des informations pour lesquelles on est curieux.\n\nElles permettent aussi de formuler des objectifs d'apprentissage pour l'élève curieux — définir explicitement les informations qu'on va faire l'effort d'aller trouver." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "research_box",
            content: "Une étude de Abdelghani et al. (2022) montre qu'on peut entraîner cette compétence avec une méthode simple. L'idée est d'apprendre aux élèves à formuler des questions curieuses.\n\nDans cette étude, on testait cette intervention (sous forme d'une application sur tablette) sur une cinquantaine d'élèves d'écoles primaires françaises. Les résultats montrent que les élèves entraînés avec cette méthode ont formulé plus de questions, de meilleure qualité, et ont maintenu cette compétence même sans aide par la suite. Ils ont aussi exploré les ressources plus longtemps de façon autonome, et ont mieux retenu les connaissances acquises pendant l'exploration.",
            reference: "Abdelghani et al. (2022)" },
          { type: "reveal_trigger", label: "COMMENT ONT-ILS FAIT ?" },
          { type: "intervention_box",
            content: "Après avoir lu ou écouté un texte court (sur tablette individuelle), on demande à l'élève de formuler une question qui les rend curieux. Pour l'aider, on peut lui fournir deux types d'indices progressifs :",
            items: [
              "Un mot interrogatif pour amorcer la question (ex. « Quelle différence... »)",
              "Un élément de réponse pour orienter sa réflexion (ex. « Le vaccin prévient la maladie, le médicament la traite » → l'élève doit retrouver la question correspondante)"
            ],
            footer: "L'élève reste libre d'utiliser ces indices ou de formuler sa propre question — l'important est qu'elle aille au-delà de ce qui est dit dans le texte." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "class_box", content: "Après une lecture, ou après la présentation d'un contenu pédagogique, demander aux élèves d'écrire une question qui les rend curieux. Si besoin, donnez-leur un mot interrogatif pour démarrer, ou une piste de réflexion. Cette habitude, pratiquée régulièrement, aide les élèves à mieux identifier ce qu'ils ne savent pas encore (ce qui est le point de départ de la curiosité !)" }
        ]
      },

      {
        id: "m3_s8", tag: "contenu",
        title: "Entraîner la métacognition",
        next_label: "CONTINUER",
        blocks: [
          { type: "recap_box", content: "La métacognition, c'est la capacité à s'auto-évaluer et s'auto-réguler. C'est un ensemble de compétences essentiel pour bien apprendre par curiosité. Ces compétences métacognitives, comme la curiosité, sont aussi entraînables." },
          { type: "text", content: "La métacognition est une compétence clé pour l'apprentissage par curiosité : elle permet à l'élève d'identifier ce qu'il ne sait pas encore, de planifier comment aller chercher cette information, et d'évaluer s'il a bien atteint son objectif d'apprentissage." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "research_box",
            content: "Une étude de Abdelghani et al. (2024) a cherché à construire et évaluer une intervention pédagogique multimédia visant à entraîner 4 compétences métacognitives essentielles à l'apprentissage par curiosité : identifier une lacune dans ses connaissances, formuler une hypothèse sur cette incertitude, poser une question correspondant à cette hypothèse, et évaluer si une réponse proposée résout bien sa question.\n\nLes résultats, testés sur une centaine d'élèves d'écoles primaires françaises, montrent qu'après l'entraînement, les élèves posaient de meilleures questions curieuses et avaient aussi une meilleure perception de la curiosité. Ce qui est un très bon point de départ pour être plus curieux !",
            reference: "Abdelghani et al. (2024)" },
          { type: "reveal_trigger", label: "COMMENT ONT-ILS FAIT ?" },
          { type: "intervention_box",
            content: "Dans 4 séances introductives, on présente aux élèves des vidéos qui introduisent les concepts clés de l'apprentissage par curiosité : la motivation, la métacognition, l'importance de l'apprentissage par curiosité. Suite à quoi, les élèves utilisaient une application numérique sur tablette, guidés par 4 personnages :",
            items: [
              "Un contrôleur — aide à évaluer les choses utiles à apprendre qui sont adaptées à notre niveau de compétences. Il aide à identifier une lacune dans ses connaissances.",
              "Un détective — utilise nos connaissances pour se questionner et faire des suppositions. Il aide à formuler une hypothèse sur l'incertitude.",
              "Un explorateur — utilise nos hypothèses pour aller chercher les informations manquantes et faire de nouvelles découvertes. Il aide à poser une question correspondant à notre hypothèse.",
              "Le contrôleur revient en fin de cycle pour évaluer si la réponse proposée résout bien la question."
            ],
            footer: "" },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "class_box", content: "Après une lecture, ou après la présentation d'un contenu pédagogique, demander aux élèves d'incarner chacun des personnages selon les besoins. Si le but est de s'auto-évaluer sur une leçon, on est le contrôleur. Si le but est de se poser des questions et faire des hypothèses, on est le détective. Et ainsi de suite..." }
        ]
      },

      {
        id: "m3_s9", tag: "contenu",
        title: "S'entraîner à s'auto-évaluer",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Parmi les compétences métacognitives, il est aussi possible de s'entraîner à auto-évaluer ses propres connaissances. Cette compétence permet d'identifier les lacunes qui vont éveiller la curiosité.\n\nDans une étude de 2025, chez des élèves de CE2 à la Terminale, Proust et al. montrent qu'on peut entraîner simplement l'auto-évaluation, en classe." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "research_box",
            content: "Les chercheurs ont développé un outil appelé Mon Outil Confiance : un carnet dans lequel les élèves s'auto-évaluent à trois moments autour de chaque activité scolaire. Après plusieurs semaines d'utilisation régulière, les élèves ont appris à mieux anticiper leurs performances, c'est-à-dire à évaluer de façon plus réaliste ce qu'ils savent faire avant de commencer une tâche. Cet effet a été particulièrement marqué chez les élèves en difficulté, qui avaient au départ tendance à surestimer leurs capacités et à ne pas ajuster leurs efforts en conséquence. L'outil semble donc particulièrement utile pour les élèves qui en ont le plus besoin.",
            reference: "Proust et al. (2025)" },
          { type: "reveal_trigger", label: "COMMENT ONT-ILS FAIT ?" },
          { type: "intervention_box",
            content: "Pour chaque activité notée faite en classe, les élèves remplissent leur carnet Mon Outil Confiance en trois temps :",
            items: [
              "Avant de commencer — ils indiquent à quel point ils pensent réussir (« Je pense que je vais très bien y arriver » / « Je ne pense pas pouvoir le faire »)",
              "Après avoir terminé, avant la correction — ils évaluent comment ils pensent s'en être sortis (« Je pense avoir bien réussi » / « Je pense ne pas avoir réussi »)",
              "Après la correction — ils comparent leur ressenti à leur résultat réel (« J'ai fait mieux que prévu » / « J'ai fait comme prévu » / « J'ai fait moins bien que prévu »)"
            ],
            footer: "" },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "class_box", content: "Avant une activité évaluée, demander aux élèves d'écrire en une phrase ce qu'ils pensent réussir ou pas. Après la correction, les inviter à comparer. Répéter régulièrement au cours de l'année." }
        ]
      },

      {
        id: "m3_s10", tag: "contenu",
        title: "L'apprentissage par investigation",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Un certain nombre d'études cherchent à enseigner aux élèves comment se construisent les connaissances. Qu'en science par exemple, on construit des connaissances en faisant des hypothèses et en les testant, parfois en se trompant — donc par essai-erreur. C'est ce qu'on appelle l'apprentissage par investigation.\n\nC'est un processus très lié à la curiosité, puisqu'il nécessite de se questionner, de s'auto-évaluer, de faire des hypothèses... Ce type d'intervention soulève aussi l'idée qu'il faut être à l'aise avec l'incertitude pour mieux apprendre." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "research_box",
            content: "Schiefer et al. (2020) ont testé une intervention qui visait à enseigner la démarche d'investigation en science à des élèves de cycle 2 et 3, et à leur transmettre pourquoi cette méthode est essentielle à la construction de connaissances scientifiques. On présentait aux élèves une question de recherche (ex. « Est-ce que le poids d'un objet influence sa vitesse ?»), puis on fournissait du matériel pour qu'ils puissent mettre en place de quoi tester leurs hypothèses. Suite à cette intervention, les élèves ont rapporté se sentir plus curieux et motivés à apprendre.",
            reference: "Schiefer et al. (2020)" },
          { type: "reveal_trigger", label: "COMMENT ONT-ILS FAIT ?" },
          { type: "intervention_box",
            content: "Sur plusieurs semaines, l'intervention présentait aux élèves :",
            items: [
              "L'utilisation des sens comme outils pour expérimenter",
              "L'approche scientifique : Questionner → Faire des hypothèses → Vérifier en expérimentant",
              "Des ateliers d'expérimentation pratique (la flottaison d'objets, etc.)"
            ],
            footer: "Les chercheurs mettent en avant 3 composantes essentielles : communiquer ses idées avec les autres et mettre en commun, réfléchir sur le processus, comprendre l'importance de la méthode pour la construction de connaissances." }
        ]
      },

      {
        id: "m3_s11", tag: "synthese",
        title: "En résumé",
        next_label: "SUITE",
        blocks: [
          { type: "text", content: "Certaines conditions favorisent l'émergence de la curiosité en classe :" },
          { type: "key_points", title: null, items: [
            "La surprise et la contradiction → rendent les lacunes de connaissance saillantes, à condition que l'élève ait formé une attente au préalable.",
            "L'incertitude → stimule la curiosité et favorise le transfert des apprentissages — prévenir les élèves qu'elle est intentionnelle suffit à en réduire l'effet négatif.",
            "Le choix et l'autonomie → renforce la motivation intrinsèque, particulièrement chez les élèves qui en ont peu l'habitude."
          ]},
          { type: "text", content: "Les compétences qui soutiennent la curiosité sont aussi entraînables :" },
          { type: "key_points", title: null, items: [
            "Poser des questions curieuses → s'entraîne régulièrement, améliore la qualité du questionnement et l'exploration autonome.",
            "Les compétences métacognitives → identifier ses lacunes, formuler des hypothèses, poser une question, évaluer la réponse.",
            "L'auto-évaluation → s'affine avec la pratique, particulièrement bénéfique pour les élèves en difficulté.",
            "L'apprentissage par investigation → enseigner la démarche scientifique développe la curiosité et le confort avec l'incertitude."
          ]}
        ]
      },

      {
        id: "m3_s12", tag: "activite",
        title: "Climat de la classe",
        next_label: "C'EST PARTI",
        blocks: [
          { type: "text", content: "Le climat général de la salle de classe joue un rôle clé dans l'expression de la curiosité des élèves." },
          { type: "text", content: "Le rôle de l'enseignant·e\n\nL'enseignant joue un rôle essentiel dans le climat de la classe, et un certain nombre de recommandations et de gestes pédagogiques susceptibles d'encourager la curiosité en classe ont été élaborés dans différentes recherches sur le sujet." },
          { type: "activity_intro",
            title: "Une journée pour la curiosité dans la classe",
            content: "Pour illustrer et comprendre ces recommandations et gestes pédagogiques, nous vous proposons un exercice immersif : selon différentes situations de classe, vous allez choisir un geste parmi les propositions qui favoriserait la curiosité de vos élèves.\n\nVous êtes enseignant·e, et aujourd'hui, vous avez décidé d'essayer de favoriser la curiosité de vos élèves. À chaque étape, choisissez comment vous réagissez. Il y a toujours au moins une bonne réponse — choisissez l'action qui vous ressemble et que vous seriez susceptible de mettre en pratique dans la vraie vie." }
        ]
      },

      {
        id: "m3_s13", tag: "activite",
        title: "1. Lancer la leçon",
        next_label: "SUIVANT",
        blocks: [
          { type: "scenario", content: "Vous commencez une leçon sur les déserts, et les animaux qui y vivent. Avant d'expliquer quoi que ce soit, vous voulez éveiller la curiosité de vos élèves." },
          { type: "qcm_annotated", id: "scene_q1", single: true,
            question: "Que faites-vous ?",
            options: [
              { id: "A", correct: true,
                text: "Vous demandez aux élèves : « D'après vous, pourquoi il ne pleut presque jamais dans les déserts ? » Vous notez toutes les hypothèses au tableau sans les corriger, puis vous commencez la leçon.",
                feedback: "<strong>Rendre la surprise et la contradiction saillantes, et encourager les élèves à formuler des prédictions avant le contenu.</strong><br><br><span class='fb-recall'>💡 Rappel</span> On a vu que la surprise et la contradiction sont des conditions qui favorisent l'émergence de la curiosité : lorsqu'une information contredit ce qu'on croyait savoir, les lacunes de connaissance deviennent saillantes — ce qui éveille l'envie de les résoudre.<br><br>De même, inviter les élèves à formuler des prédictions avant de découvrir le contenu renforce la curiosité ressentie pour la réponse. En anticipant, même incorrectement, l'élève rend la lacune plus consciente — et donc plus motivante à combler." },
              { id: "B", correct: false,
                text: "Vous annoncez le titre de la leçon, distribuez le document de travail et demandez aux élèves de lire la première partie en silence.",
                feedback: "<strong>Démarrer directement par le contenu ne laisse pas les élèves se questionner.</strong><br><br>Distribuer le document et démarrer la lecture est une pratique pédagogique courante et tout à fait valide. Mais elle ne crée pas les conditions pour que la curiosité émerge : les élèves n'ont pas eu l'occasion de se demander ce qu'ils savent déjà, ni de former des attentes sur ce qu'ils vont apprendre. Sans attente préalable, il n'y a rien à confirmer ou contredire — et donc peu de curiosité à éveiller au moment où le contenu arrive." },
              { id: "C", correct: true,
                text: "Vous dites aux élèves : « Avant qu'on commence, je vais vous poser une question — prenez 2 minutes pour y réfléchir seul. » Puis : « Selon vous, est-ce qu'on pourrait vivre dans un désert ? Pourquoi ? »",
                feedback: "<strong>Laisser un temps de réflexion individuelle — favorise l'auto-évaluation.</strong><br><br><span class='fb-recall'>💡 Rappel</span> On a vu que l'auto-évaluation — savoir ce qu'on sait et ce qu'on ne sait pas encore — est l'une des briques métacognitives essentielles à la curiosité. C'est ce processus qui permet à l'élève d'identifier ses propres lacunes de connaissance, point de départ de la curiosité.<br><br>Laisser un temps de réflexion individuelle avant de répondre à voix haute donne à chaque élève l'occasion de faire cet exercice : « Qu'est-ce que je sais déjà sur ce sujet ? Qu'est-ce que je ne sais pas encore ? » Sans ce temps, les élèves les plus rapides à lever la main monopolisent l'échange — et les autres n'ont pas eu l'occasion de se questionner." },
              { id: "D", correct: true,
                text: "Vous dites à toute la classe : « Avant qu'on commence, je vais vous poser une question — selon vous, est-ce qu'on pourrait vivre dans un désert ? Pourquoi ? »",
                feedback: "<strong>Poser la question directement à la classe — favorise la contagion de la curiosité entre pairs.</strong><br><br>Poser la question directement à la classe permet aux élèves d'entendre les hypothèses de leurs camarades en temps réel, ce qui peut éveiller leur propre curiosité. On sait que l'environnement social joue un rôle majeur dans l'expression de la curiosité des élèves.<br><br><span class='fb-research'>🔬 Données de la recherche</span> Sinha et al. (2017) ont analysé des élèves engagés dans des activités de curiosité et observé un effet de contagion : lorsqu'un élève exprimait une incertitude dans un groupe, cela était souvent suivi d'un autre élève qui exprimait à son tour une incertitude. D'autres études confirment que des apprenants dont le pair exprime de la curiosité en expriment davantage par la suite (Gordon et al., 2015 ; Ceha et al., 2019), et que les gens sont plus curieux au sujet de choses qui rendent les autres curieux (Dubey et al., 2021).<br><br>La curiosité, c'est contagieux. Favoriser les échanges où les élèves partagent leurs questions et hypothèses, c'est créer les conditions pour qu'elle se propage dans la classe." }
            ]
          }
        ]
      },

      {
        id: "m3_s14", tag: "activite",
        title: "2. Un exercice de recherche",
        next_label: "SUIVANT",
        blocks: [
          { type: "scenario", content: "Vous proposez à vos élèves un exercice de recherche sur les animaux du désert. Vous devez décider comment l'organiser." },
          { type: "qcm_annotated", id: "scene_q2", single: true,
            question: "Que faites-vous ?",
            options: [
              { id: "A", correct: false,
                text: "Vous distribuez une fiche avec les étapes à suivre, les sources à consulter et les questions auxquelles répondre. Les élèves n'ont qu'à suivre les instructions.",
                feedback: "<strong>Un guidage trop complet laisse peu de place à la curiosité.</strong><br><br>Fournir une fiche détaillée avec toutes les étapes, les sources et les questions est une pratique pédagogique structurée et rassurante. Mais elle ne laisse pas aux élèves l'occasion de se demander ce qu'ils cherchent, ni comment le trouver. En résolvant à l'avance toutes les incertitudes, les conditions qui permettent à la curiosité d'émerger ne sont pas rassemblées." },
              { id: "B", correct: true,
                text: "Vous précisez l'objectif de la recherche, donnez quelques informations sur les animaux et les conditions de vie dans le désert, mais laissez certaines informations incomplètes. Vous expliquez aux élèves : « Je ne vous donne pas toutes les informations, vous allez peut-être vous sentir un peu incertains, mais c'est normal. »",
                feedback: "<strong>Créer une incertitude intentionnelle en prévenant les élèves.</strong><br><br><span class='fb-recall'>💡 Rappel</span> Créer de l'incertitude en classe ne signifie pas laisser les élèves sans repères. Donner un cadre clair, un objectif, quelques informations de départ, tout en laissant des zones d'ombre à explorer, crée une incertitude qui peut déclencher la curiosité." },
              { id: "C", correct: true,
                text: "Vous proposez une liste de six animaux et chaque élève choisit celui qui l'intéresse. Vous précisez l'objectif — comprendre comment l'animal s'adapte à la chaleur — mais laissez les élèves décider comment ils vont chercher.",
                feedback: "<strong>Donner du choix, même limité — et un cadre clair.</strong><br><br>Laisser les élèves choisir leur animal active leur sentiment d'autonomie — l'un des déclencheurs de la curiosité les plus simples à mettre en place. En précisant l'objectif tout en laissant les élèves décider comment chercher, vous structurez sans imposer.<br><br><span class='fb-recall'>💡 Rappel</span> On a vu que le choix, même restreint, suffit à stimuler la curiosité — particulièrement chez les élèves qui ont peu l'habitude d'avoir de l'autonomie dans leurs apprentissages. L'étude de Schutte &amp; Malouff (2019) montrait que cet effet est d'autant plus marqué chez ceux qui en ont le moins." },
              { id: "D", correct: false,
                text: "Vous dites aux élèves qu'ils peuvent chercher ce qu'ils veulent sur les déserts, comme ils veulent, avec les ressources qu'ils trouvent.",
                feedback: "<strong>Une liberté totale sans cadre peut nuire à la curiosité.</strong><br><br>Laisser les élèves explorer librement, sans objectif ni contrainte, n'est pas forcément positif pour la curiosité — ça peut générer de la dispersion, voire du désengagement." }
            ]
          }
        ]
      },

      {
        id: "m3_s15", tag: "activite",
        title: "3. Une question inattendue",
        next_label: "SUIVANT",
        blocks: [
          { type: "scenario", content: "Pendant la recherche, Lucas lève la main et demande : « Maître, est-ce que les chameaux peuvent vraiment survivre sans eau pendant des mois ? » Ce n'est pas exactement ce que vous avez demandé de chercher." },
          { type: "qcm_annotated", id: "scene_q3", single: true,
            question: "Que faites-vous ?",
            options: [
              { id: "A", correct: false,
                text: "Vous lui dites que c'est une bonne question mais qu'il faut rester concentré sur l'exercice, et vous l'invitez à reprendre sa fiche.",
                feedback: "<strong>Renvoyer l'élève à sa fiche décourage l'expression de la curiosité.</strong><br><br>Dire à Lucas que sa question est bonne mais qu'on n'a pas le temps est une réaction compréhensible — les contraintes de programme sont réelles. Mais répété régulièrement, ce type de réponse envoie un message implicite aux élèves : leurs questions spontanées ne sont pas les bienvenues en classe. Au fil des années, les élèves intériorisent progressivement l'idée que poser des questions qui dévient du programme n'est pas un comportement attendu.<br><br><span class='fb-research'>🔬 Données de la recherche</span> Des études observationnelles montrent que les questions à visée réellement curieuse sont extrêmement rares en classe, et que les enseignant·es n'encouragent presque jamais ce type de questionnement de façon explicite (Goupil et al., en préparation). Post &amp; Walma van der Molen (2018) ont montré que la grande majorité des élèves associe la curiosité à quelque chose de social et d'intrusif — pas à une envie d'apprendre, suggérant que les élèves ont progressivement intériorisé que la curiosité n'est pas attendue à l'école." },
              { id: "B", correct: true,
                text: "Vous dites : « Bonne question — moi-même je ne suis pas sûr. Qu'est-ce que vous en pensez, les autres ? » Vous notez la question au tableau et générez des hypothèses avec la classe.",
                feedback: "<strong>Accueillir la question et modéliser sa propre curiosité.</strong><br><br>En disant « moi-même je ne suis pas sûr », vous montrez que l'incertitude est normale, y compris pour un adulte expert. C'est ce qu'on appelle modéliser la curiosité — exprimer à voix haute sa propre incertitude ou envie de savoir.<br><br><span class='fb-research'>🔬 Données de la recherche</span> Post &amp; van der Molen (2021) ont évalué une intervention sur deux ans auprès de 530 élèves de cycle 3. Parmi les pratiques les plus efficaces identifiées : modéliser la curiosité — s'interroger à voix haute sur des idées alternatives. Les résultats montrent une amélioration significative des perceptions qu'ont les élèves de la curiosité. (Post, T., &amp; Walma van der Molen, J. H. (2021). Learning and Instruction.)<br><br>En notant la question au tableau et en invitant la classe à formuler des hypothèses, vous activez aussi la contagion de la curiosité entre pairs.<br><br><span class='fb-recall'>À retenir</span> Exprimer sa propre incertitude devant les élèves n'est pas un aveu de faiblesse — c'est un geste pédagogique." },
              { id: "C", correct: "neutral",
                text: "Vous répondez directement : « Oui, les chameaux peuvent tenir plusieurs jours sans eau grâce à leur bosse. »",
                feedback: "<strong>Répondre directement — une bonne réaction, mais une occasion partiellement manquée.</strong><br><br>Répondre à la question de Lucas est déjà une réaction positive : vous montrez que sa curiosité est légitime et mérite une réponse. Mais en donnant la réponse directement, vous clôturez la curiosité de Lucas plutôt que de l'entretenir. La satisfaction de trouver une réponse qu'on a cherchée soi-même est plus gratifiante — et plus bénéfique pour l'apprentissage — que de la recevoir toute faite.<br><br>Cela dit, quand le temps manque, répondre brièvement et passer à la suite reste une réaction tout à fait valable. L'essentiel est que la question ait été accueillie positivement." }
            ]
          }
        ]
      },

      {
        id: "m3_s16", tag: "activite",
        title: "4. Préparer la mise en commun",
        next_label: "SUIVANT",
        blocks: [
          { type: "scenario", content: "Pendant que les élèves finalisent leurs recherches, Noah vous approche : « Maître, j'ai pas trouvé grand chose sur le scorpion — j'ai cherché mais les sites étaient compliqués. Je sais pas quoi présenter. »" },
          { type: "qcm_annotated", id: "scene_q4", single: true,
            question: "Que faites-vous ?",
            options: [
              { id: "A", correct: true,
                text: "Vous lui suggérez de présenter quand même : « Dis-nous ce que tu as cherché, ce que tu as compris, et ce que tu n'as pas réussi à trouver mais ce que tu t'attendais à trouver. Ce sera très intéressant !»",
                feedback: "<strong>Valoriser la démarche et l'effort plutôt que le résultat.</strong><br><br>En encourageant Noah à présenter son processus de recherche — ce qu'il a cherché, ce qu'il a compris, ce qu'il n'a pas trouvé — vous lui montrez que l'effort et la démarche ont de la valeur en eux-mêmes, indépendamment du résultat obtenu.<br><br>C'est un geste important pour la curiosité : si les élèves pensent que seule la réponse correcte compte, ils éviteront les questions difficiles et les explorations incertaines. C'est d'ailleurs une des raisons pour lesquelles la curiosité est peu présente à l'école : on a tendance à valoriser la performance. À l'inverse, valoriser les efforts fournis et les opportunités d'apprentissage saisies permet de redonner de la place au processus d'apprentissage." },
              { id: "B", correct: false,
                text: "Vous lui donnez rapidement les informations essentielles sur le scorpion pour qu'il puisse présenter quelque chose de complet.",
                feedback: "<strong>Donner la solution résout le problème immédiat, mais court-circuite l'apprentissage.</strong><br><br>Fournir les informations à Noah pour qu'il puisse présenter quelque chose de complet est une réaction bienveillante — et pédagogiquement compréhensible. Mais elle prive Noah de l'occasion de réfléchir à sa propre démarche, et envoie implicitement le message que ce qui compte c'est d'avoir une présentation complète, pas d'avoir cherché." },
              { id: "C", correct: true,
                text: "Vous lui demandez : « Qu'est-ce que tu sais déjà sur le scorpion ? Et qu'est-ce qui t'a semblé trop compliqué ? »",
                feedback: "<strong>Inviter Noah à s'auto-évaluer.</strong><br><br>En posant ces deux questions à Noah, vous l'invitez à faire un exercice d'auto-évaluation : identifier ce qu'il sait, et comprendre où sa stratégie de recherche a atteint ses limites.<br><br><span class='fb-recall'>💡 Rappel</span> On a vu que l'auto-évaluation — savoir ce qu'on sait et ce qu'on ne sait pas encore — est une compétence métacognitive essentielle à la curiosité. Elle permet non seulement d'identifier ses lacunes, mais aussi d'ajuster ses stratégies d'apprentissage pour les prochaines fois. En aidant Noah à réfléchir sur ce qui était difficile, vous l'aidez à affiner sa représentation de ses propres compétences." }
            ]
          }
        ]
      },

      {
        id: "m3_s17", tag: "activite",
        title: "5. La mise en commun",
        next_label: "SUIVANT",
        blocks: [
          { type: "scenario", content: "Les élèves présentent leurs recherches à tour de rôle. Emma présente l'alpaga. Elle dit que l'alpaga stocke de l'eau dans sa bosse — ce qui est faux, c'est le chameau." },
          { type: "qcm_annotated", id: "scene_q5", single: true,
            question: "Que faites-vous ?",
            options: [
              { id: "A", correct: "neutral",
                text: "Vous corrigez immédiatement : « Ce n'est pas tout à fait ça Emma — c'est le chameau qui stocke des réserves dans sa bosse, pas l'alpaga. »",
                feedback: "<strong>Corriger immédiatement — acceptable, mais une occasion manquée.</strong><br><br>Corriger Emma directement est une réaction naturelle et pédagogiquement valide — la bonne information est transmise rapidement. Mais cette approche ne laisse pas Emma expliquer son raisonnement, ni la classe s'interroger sur la question. L'erreur est traitée comme un problème à résoudre plutôt que comme une opportunité d'apprentissage.<br><br>Répété régulièrement, ce type de correction immédiate peut renforcer chez les élèves l'idée que se tromper est risqué — ce qui les décourage de prendre des risques intellectuels et d'exprimer leurs hypothèses incertaines." },
              { id: "B", correct: true,
                text: "Vous dites : « Intéressant ! Qu'est-ce qui t'a amené à penser ça ? » Vous laissez Emma expliquer son raisonnement en l'encourageant, puis vous donnez la vraie réponse en expliquant pourquoi son hypothèse n'était pas la bonne.",
                feedback: "<strong>Explorer le raisonnement derrière l'erreur.</strong><br><br>En demandant à Emma ce qui l'a amenée à penser ça, vous valorisez sa démarche avant de corriger le résultat. Ce geste est important : il montre que le raisonnement compte autant que la réponse, et que se tromper fait partie du processus d'apprentissage." },
              { id: "C", correct: true,
                text: "Vous notez l'idée d'Emma et son raisonnement au tableau puis demandez à la classe : « Est-ce que tout le monde est d'accord ? Comment on pourrait vérifier ? »",
                feedback: "<strong>Traiter l'erreur comme une hypothèse à soumettre à la classe.</strong><br><br>En notant l'idée d'Emma au tableau et en interrogeant la classe, vous transformez l'erreur en point de départ pour une exploration collective. Les élèves ne reçoivent pas la correction — ils participent à la construire.<br><br>Ce geste active plusieurs mécanismes favorables à la curiosité : il crée une incertitude collective, et comme on l'a vu plus tôt, peut créer un effet de contagion de la curiosité." }
            ]
          }
        ]
      },

      {
        id: "m3_s18", tag: "activite",
        title: "6. Fin de séance",
        next_label: "SUITE",
        blocks: [
          { type: "scenario", content: "La séance touche à sa fin. Il vous reste 5 minutes avant la récréation." },
          { type: "qcm_annotated", id: "scene_q6", single: true,
            question: "Que faites-vous ?",
            options: [
              { id: "A", correct: "neutral",
                text: "Vous faites un rapide résumé de ce que les élèves ont appris sur les animaux du désert et annoncez la prochaine séance.",
                feedback: "<strong>Un résumé efficace, mais sans auto-évaluation.</strong><br><br>Faire un résumé en fin de séance est une pratique courante et utile pour consolider les apprentissages. Mais c'est vous qui identifiez ce qui a été appris — pas les élèves. Ils reçoivent passivement une synthèse, sans avoir eu l'occasion de réfléchir à ce qu'ils ont retenu personnellement, ni à ce qu'ils ne savent pas encore.<br><br><span class='fb-recall'>💡 Rappel</span> On a vu que l'auto-évaluation de ses progrès est une brique métacognitive essentielle à la curiosité : reconnaître qu'on a appris quelque chose de nouveau procure un sentiment de satisfaction qui renforce l'envie d'en apprendre plus." },
              { id: "B", correct: true,
                text: "Vous demandez à chaque élève d'écrire sur un post-it : « Une chose que j'ai apprise » et « Une question que j'ai encore ». Vous affichez les post-its au tableau.",
                feedback: "<strong>Auto-évaluation des progrès et ouverture sur de nouvelles lacunes.</strong><br><br>Ce rituel simple active deux briques métacognitives en quelques minutes : reconnaître ce qu'on a appris et identifier ce qu'on ne sait pas encore. Ce qui renforce la motivation et ouvre de nouvelles opportunités de curiosité.<br><br><span class='fb-recall'>💡 Rappel</span> On a vu que reconnaître son progrès ne sert pas seulement à rester motivé : c'est aussi l'occasion de mettre à jour sa représentation de ce qu'on sait et de ce qu'on ne sait pas encore. En intégrant les nouvelles connaissances acquises, on affine sa capacité à s'auto-évaluer avec justesse — ce qui rend les prochains buts d'apprentissage mieux calibrés." },
              { id: "C", correct: true,
                text: "Vous demandez à toute la classe : « Est-ce que vous avez appris quelque chose de nouveau aujourd'hui ? Quelque chose qui vous a surpris ? »",
                feedback: "<strong>Retour collectif sur les apprentissages — et contagion de la curiosité.</strong><br><br>En posant cette question à toute la classe, les élèves peuvent partager leurs découvertes et leurs surprises collectivement. Entendre ce qui a rendu un camarade curieux peut éveiller sa propre curiosité — c'est à nouveau la contagion de la curiosité entre pairs qui est à l'œuvre." }
            ]
          }
        ]
      },

      {
        id: "m3_s19", tag: "synthese",
        title: "En résumé",
        next_label: "SUITE",
        blocks: [
          { type: "text", content: "À travers cette journée, on a vu comment des gestes simples, à différents moments d'une séance, peuvent créer les conditions favorables à la curiosité de vos élèves.\n\nCes gestes s'organisent autour de quatre grandes idées :" },
          { type: "key_points", title: "Créer les bonnes conditions", items: [
            "Générer des prédictions et des hypothèses avant d'apporter le contenu",
            "Laisser des zones d'incertitude intentionnelles — et le dire aux élèves",
            "Donner du choix, même limité, sur ce qu'ils explorent ou comment ils cherchent"
          ]},
          { type: "key_points", title: "Laisser du temps et de l'espace", items: [
            "Ménager un temps de réflexion individuelle avant les réponses collectives",
            "Inviter les élèves à s'auto-évaluer : ce qu'ils savent, ce qu'ils ne savent pas encore",
            "Valoriser la démarche de recherche autant que le résultat"
          ]},
          { type: "key_points", title: "Réagir favorablement à la curiosité", items: [
            "Accueillir les questions inattendues plutôt que de les reporter",
            "Explorer le raisonnement derrière une erreur avant de corriger",
            "Modéliser sa propre incertitude et sa propre curiosité"
          ]},
          { type: "key_points", title: "S'appuyer sur les pairs", items: [
            "Encourager le partage de questions et d'hypothèses entre élèves",
            "Laisser la curiosité d'un élève en éveiller d'autres"
          ]},
          { type: "research_box",
            content: "Jirout, J. J. (2020). Supporting Early Scientific Thinking Through Curiosity. Frontiers in Psychology, 11. https://doi.org/10.3389/fpsyg.2020.01717\n\nPost, T., & van der Molen, J. H. W. (2021). Effects of an inquiry-focused school improvement program on the development of pupils' attitudes towards curiosity, their implicit ability and effort beliefs, and goal orientations. Motivation and Emotion, 45(1), 13‑38. https://doi.org/10.1007/s11031-020-09851-5",
            reference: "" }
        ]
      },

      {
        id: "m3_s20", tag: "contenu",
        title: "Les différences interindividuelles",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "On a vu que certaines conditions favorisent l'émergence de la curiosité — la surprise, l'incertitude, le choix... Mais ces conditions ne produisent pas les mêmes effets chez tous les élèves. La curiosité est un état qui est sujet à la subjectivité de chaque élève : ce qui éveille la curiosité d'un élève ne l'éveille pas nécessairement chez un autre." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "text", content: "Les intérêts personnels varient selon l'histoire de chaque élève\n\nCe qui rend un élève curieux dépend de ses centres d'intérêt et de ce qu'il sait déjà — et ce qu'il sait déjà dépend de ses expériences passées, à l'école, mais aussi en dehors." },
          { type: "example_box", content: "Un élève passionné de football sera immédiatement curieux d'une question sur les statistiques sportives. Un élève qui n'a jamais été exposé à ce domaine n'y verra rien de particulier. Ce n'est pas une question de niveau ou d'intelligence — c'est une question d'exposition et d'expérience." },
          { type: "text", content: "Les intérêts des élèves se construisent progressivement, au contact de leur environnement familial, social et culturel. Un domaine valorisé à la maison, un sujet régulièrement discuté entre pairs, une activité extrascolaire — tout cela contribue à façonner ce qui rend un élève curieux." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "text", content: "La curiosité dépend aussi de l'environnement social et familial\n\nCe n'est pas seulement le contenu des intérêts qui varie — c'est aussi la façon d'exprimer la curiosité." },
          { type: "research_box",
            content: "Dans une étude menée dans des classes de maternelle et de primaire de l'académie de Grenoble, les chercheuses ont observé que la manière dont les enfants apprennent à poser des questions varie fortement selon le milieu social et familial — à qui poser des questions, quand, et comment. Or, certaines de ces façons de faire seront plus valorisées à l'école que d'autres.",
            reference: "Goupil et al. (en préparation)" }
        ]
      },

      {
        id: "m3_s21", tag: "evaluation",
        title: "Ce que vous avez retenu — évaluation formative",
        next_label: "Passer à la synthèse →",
        blocks: [
          { type: "text", content: "[Introduction à l'évaluation formative — à compléter]" },
          { type: "qcm", id: "eval_q1",
            question: "[Question évaluative 1 — à compléter]",
            options: ["[A]", "[B]", "[C]", "[D]"], correct: 0,
            feedback_correct: "[Feedback]", feedback_incorrect: "[Feedback]" }
        ]
      }

    ]
  },

  // ── MODULE 4 : Synthèse ───────────────────────────────────────────────────
  module_4: {
    id: 4,
    title: "Synthèse & Évaluation",
    duration: "~20 min",
    end_message: "Vous avez terminé la formation. Merci de votre participation !",
    slides: [

      {
        id: "m4_s1", tag: "synthese",
        title: "Synthèse",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Voici les grandes idées que vous avez traversées au fil des modules." },
          { type: "key_points", title: "Module 0 — Introduction", items: [
            "La curiosité est peu présente dans les classes — non pas parce que les élèves ne sont pas curieux, mais parce que les conditions scolaires freinent son expression.",
            "Ce déclin est en partie réversible."
          ]},
          { type: "key_points", title: "Module 1 — La curiosité, c'est quoi exactement ?", items: [
            "La curiosité est une motivation intrinsèque à apprendre de nouvelles choses.",
            "Elle suit un processus en 4 étapes : ressentir une motivation → se fixer un but → explorer → reconnaître son progrès.",
            "Elle produit des effets documentés sur la mémorisation, l'autonomie et le bien-être."
          ]},
          { type: "key_points", title: "Module 2 — Les moteurs cognitifs", items: [
            "L'apprentissage par curiosité est une forme d'apprentissage auto-régulé.",
            "Il mobilise 4 briques métacognitives : s'auto-évaluer pour identifier une lacune → formuler des hypothèses → évaluer ses progrès → connaître son propre fonctionnement curieux.",
            "Ces compétences s'entraînent."
          ]},
          { type: "key_points", title: "Module 3 — Créer les conditions favorables", items: [
            "Certaines conditions favorisent l'émergence de la curiosité : la surprise, l'incertitude, le choix, le questionnement.",
            "Des compétences spécifiques peuvent aussi être entraînées — de façon transversale ou disciplinaire.",
            "Le climat de classe joue un rôle central : la façon dont l'enseignant·e accueille les questions, traite les erreurs et modélise sa propre curiosité influence directement l'expression de la curiosité des élèves.",
            "La curiosité ne s'exprime pas de la même façon chez tous les élèves — elle dépend de leurs intérêts, de leur histoire, et de leur environnement."
          ]}
        ]
      },

      {
        id: "m4_s2", tag: "synthese",
        title: "Avant de terminer",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Au début de cette formation, on vous a posé deux questions." },
          { type: "recall", recall_id: "m0_s2_r_init_1", label: "1. Selon vous, qu'est-ce que la curiosité exactement ? À quoi cela vous fait-il penser ?" },
          { type: "recall", recall_id: "m0_s2_r_init_2", label: "2. Quand vous pensez à un élève curieux, qu'est-ce que vous observez concrètement ? À quoi ressemble-t-il en classe ?" },
          { type: "text", content: "Prenez un moment pour les relire." },
          { type: "reveal_trigger", label: "CONTINUER" },
          { type: "reflection", id: "r_evolution",
            question: "Est-ce que votre façon de voir la curiosité a évolué au cours de cette formation ? Qu'est-ce qui a changé, ou au contraire, qu'est-ce qui a été confirmé ?",
            placeholder: "Votre réflexion..." }
        ]
      },

      {
        id: "m4_s3", tag: "synthese",
        title: "Et après ?",
        next_label: "CONTINUER",
        blocks: [
          { type: "text", content: "Cette formation vous a donné des clés pour comprendre la curiosité et des pistes pour l'encourager.\n\nPrenez quelques minutes pour réfléchir aux questions suivantes. Il n'y a pas de bonne réponse, l'idée est simplement de passer de la théorie à quelque chose de concret et de réaliste pour vous." },
          { type: "reflection", id: "r_apres_1",
            question: "1. Qu'est-ce qui vous a le plus marqué dans cette formation ? Un concept, une étude, une idée que vous n'aviez pas avant, ou qui a changé quelque chose dans votre façon de voir les choses.",
            placeholder: "Votre réponse..." },
          { type: "reflection", id: "r_apres_2",
            question: "2. Qu'est-ce que vous vous voyez concrètement mettre en place dans votre classe d'ici la semaine prochaine ? Pensez à quelque chose de simple, de réaliste, qui correspond à votre façon d'enseigner. Ça peut être un geste ponctuel, un rituel, une façon différente de réagir à une situation habituelle.",
            placeholder: "Votre réponse..." }
        ]
      },

      {
        id: "m4_s4", tag: "synthese",
        title: "Merci",
        next_label: "FIN",
        blocks: [
          { type: "text", content: "Vous avez terminé la formation.\n\n[Remerciements de l'équipe — à compléter]" }
        ]
      }

    ]
  }

};
