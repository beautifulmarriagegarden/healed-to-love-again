const app = document.getElementById("app");



/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function pageHero(eyebrow, title, text) {

    return `
        <section class="page-hero">

            <div class="container">

                <p class="eyebrow">
                    ${eyebrow}
                </p>

                <h1>
                    ${title}
                </h1>

                <p>
                    ${text}
                </p>

            </div>

        </section>
    `;

}



function featureCard(icon, title, text) {

    return `
        <article class="feature-card">

            <div class="feature-icon">
                ${icon}
            </div>

            <h3>
                ${title}
            </h3>

            <p>
                ${text}
            </p>

        </article>
    `;

}



function reflectionSection(title, text, questions) {

    return `
        <section class="section-soft">

            <div class="container split-grid">

                <div>

                    <p class="eyebrow">
                        REFLECTION
                    </p>

                    <h2>
                        ${title}
                    </h2>

                    <p>
                        ${text}
                    </p>

                </div>


                <div class="info-card">

                    <ul class="check-list">

                        ${questions
                            .map(
                                question =>
                                `<li>${question}</li>`
                            )
                            .join("")}

                    </ul>

                </div>

            </div>

        </section>
    `;

}



function newsletterSection() {

    return `
        <section
            class="newsletter container"
        >

            <div>

                <p class="eyebrow">
                    FREE WEEKLY ENCOURAGEMENT
                </p>

                <h2>
                    Receive healing truths
                    for your heart.
                </h2>

                <p>
                    Join our community for biblical
                    encouragement, practical relationship
                    wisdom and healing resources.
                </p>

            </div>


            <form
                class="newsletter-form"
                onsubmit="subscribe(event)"
            >

                <input
                    type="email"
                    placeholder="Your email address"
                    required
                >

                <button
                    class="button button-primary"
                    type="submit"
                >
                    Join the Community
                </button>

            </form>

        </section>
    `;

}



/* =========================================================
   HOME PAGE
========================================================= */

function homePage() {

    return `

        <section class="hero">

            <div class="hero-grid">

                <div>

                    <p class="eyebrow">
                        FAITH · HEALING · HOPE · TRANSFORMATION
                    </p>

                    <h1>
                        Your heartbreak doesn't
                        have to

                        <em>
                            define your future.
                        </em>
                    </h1>


                    <p class="hero-lead">

                        Identify the patterns.

                        Heal the wounds.

                        Learn to love again—with wisdom,
                        wholeness and faith.

                    </p>


                    <div class="hero-buttons">

                        <a
                            href="#start-here"
                            class="button button-primary"
                        >
                            Start Your Healing Journey →
                        </a>


                        <a
                            href="#about"
                            class="button button-outline"
                        >
                            Our Story
                        </a>

                    </div>

                </div>


                <aside class="scripture-card">

                    <div class="quote-mark">
                        “
                    </div>

                    <blockquote>

                        He heals the brokenhearted
                        and binds up their wounds.

                    </blockquote>

                    <strong>
                        Psalm 147:3
                    </strong>

                </aside>

            </div>

        </section>


        <section class="trust-bar">

            <div class="trust-item">
                ✝
                Biblically Grounded Truth
            </div>

            <div class="trust-item">
                ♡
                Evidence-Informed Strategies
            </div>

            <div class="trust-item">
                ✦
                Hope & Healing Through Christ
            </div>

            <div class="trust-item">
                ♡
                Compassionate Community
            </div>

            <div class="trust-item">
                🌱
                Personal Growth & Transformation
            </div>

        </section>



        <section class="section">

            <div class="container">

                <div class="section-heading">

                    <p class="eyebrow">
                        START WHERE YOU ARE
                    </p>

                    <h2>
                        Where are you in your healing journey?
                    </h2>

                    <p>
                        Find the support you need,
                        right where you are.
                    </p>

                </div>


                <div class="journey-grid">


                    ${journeyCard(
                        "💔",
                        "My breakup just happened",
                        "Find encouragement and support for the difficult first days.",
                        "heal"
                    )}


                    ${journeyCard(
                        "♡",
                        "I can't let go of my ex",
                        "Understand attachment, longing and how to begin letting go.",
                        "heal"
                    )}


                    ${journeyCard(
                        "↻",
                        "I keep repeating the same patterns",
                        "Identify recurring cycles that continue to hurt your relationships.",
                        "identify"
                    )}


                    ${journeyCard(
                        "✦",
                        "I've lost myself",
                        "Rediscover your identity, confidence, boundaries and worth.",
                        "heal"
                    )}


                    ${journeyCard(
                        "🛡",
                        "I'm healing but afraid to love again",
                        "Rebuild trust while maintaining wisdom and healthy boundaries.",
                        "love-again"
                    )}


                    ${journeyCard(
                        "♡",
                        "I'm ready to date differently",
                        "Prepare for healthy love with emotional clarity and faith.",
                        "love-again"
                    )}


                </div>

            </div>

        </section>



        <section class="section-soft">

            <div class="container">

                <div class="section-heading">

                    <p class="eyebrow">
                        FROM HEARTBREAK TO HEALTHY LOVE
                    </p>

                    <h2>
                        The H.E.A.L.™ Framework
                    </h2>

                </div>


                <div class="heal-grid">


                    ${healItem(
                        "H",
                        "Honor Your Story",
                        "Acknowledge your pain without allowing it to define your future."
                    )}


                    ${healItem(
                        "E",
                        "Examine Your Patterns",
                        "Understand the beliefs, wounds and habits shaping your relationships."
                    )}


                    ${healItem(
                        "A",
                        "Align With Truth",
                        "Renew your mind with biblical wisdom and healthy relationship principles."
                    )}


                    ${healItem(
                        "L",
                        "Love Again Wisely",
                        "Build secure, Christ-centered relationships with wisdom and confidence."
                    )}


                </div>

            </div>

        </section>



        <section class="section">

            <div class="container pathway-grid">

                <a
                    href="#identify"
                    class="pathway-card"
                >

                    <h2>
                        IDENTIFY
                    </h2>

                    <p>
                        Understand what happened
                        and why.
                    </p>

                    <strong>
                        Explore →
                    </strong>

                </a>


                <a
                    href="#heal"
                    class="pathway-card"
                >

                    <h2>
                        HEAL
                    </h2>

                    <p>
                        Don't just move on.
                        Become whole.
                    </p>

                    <strong>
                        Begin Healing →
                    </strong>

                </a>


                <a
                    href="#love-again"
                    class="pathway-card"
                >

                    <h2>
                        LOVE AGAIN
                    </h2>

                    <p>
                        Prepare for healthier love.
                    </p>

                    <strong>
                        Learn More →
                    </strong>

                </a>

            </div>

        </section>



        <section class="section">

            <div class="container">

                <div class="section-heading">

                    <h2>
                        Popular Topics
                    </h2>

                </div>


                <div class="topic-grid">

                    ${topic(
                        "Breakup Recovery",
                        "Heal Your Heart",
                        "heal"
                    )}

                    ${topic(
                        "Relationship Patterns",
                        "Break the Cycle",
                        "identify"
                    )}

                    ${topic(
                        "Self-Worth & Confidence",
                        "Know Your Value",
                        "heal"
                    )}

                    ${topic(
                        "Christian Dating",
                        "Date With Wisdom",
                        "love-again"
                    )}

                    ${topic(
                        "Healthy Relationships",
                        "Love Well",
                        "love-again"
                    )}

                </div>

            </div>

        </section>



        <section class="section">

            <div class="container support-grid">

                <div class="support-card">

                    <div class="feature-icon">
                        ✝
                    </div>

                    <h3>
                        Faith-Based Healing
                    </h3>

                    <p>
                        Biblical wisdom for
                        a whole heart.
                    </p>

                </div>


                <div class="support-card">

                    <div class="feature-icon">
                        ♡
                    </div>

                    <h3>
                        Compassionate Support
                    </h3>

                    <p>
                        You are not alone.
                        We are in this together.
                    </p>

                </div>


                <div class="support-card">

                    <div class="feature-icon">
                        🌱
                    </div>

                    <h3>
                        Transformation
                    </h3>

                    <p>
                        Move from heartbreak
                        toward healthy,
                        lasting love.
                    </p>

                </div>

            </div>

        </section>


        ${newsletterSection()}

    `;

}



/* =========================================================
   START HERE
========================================================= */

function startHerePage() {

    return `

        ${pageHero(

            "START HERE",

            "You don't have to figure out your healing journey alone.",

            `Choose the statement that best describes
             where you are today. We will guide you toward
             a helpful next step.`

        )}


        <section class="section">

            <div class="container feature-grid">


                ${featureCard(

                    "💔",

                    "The breakup just happened",

                    `You need emotional stability,
                     encouragement and guidance for
                     navigating the first difficult days.`

                )}


                ${featureCard(

                    "♡",

                    "You cannot stop thinking about your ex",

                    `Understand why attachment,
                     rumination and longing can remain
                     after the relationship has ended.`

                )}


                ${featureCard(

                    "↻",

                    "You see a repeated pattern",

                    `Explore why similar people,
                     dynamics or relationship outcomes
                     keep appearing in your life.`

                )}


                ${featureCard(

                    "✦",

                    "You lost yourself",

                    `Rebuild your identity,
                     self-worth, boundaries
                     and confidence.`

                )}


                ${featureCard(

                    "🛡",

                    "You are afraid to trust again",

                    `Heal without allowing your
                     past to build permanent walls
                     around your heart.`

                )}


                ${featureCard(

                    "♡",

                    "You are ready to date differently",

                    `Prepare to approach future
                     relationships with wisdom,
                     clarity and faith.`

                )}


            </div>

        </section>


        ${reflectionSection(

            "Begin with truth, not pressure.",

            `Healing does not mean pretending that
             the relationship never mattered.
             It means understanding what happened,
             processing what was lost and rebuilding
             what became wounded.`,

            [

                "What am I really grieving?",

                "What am I still hoping will happen?",

                "What pattern is this breakup revealing?",

                "What part of me needs healing?",

                "What would a healthy next step look like?"

            ]

        )}

    `;

}



/* =========================================================
   IDENTIFY
========================================================= */

function identifyPage() {

    return `

        ${pageHero(

            "IDENTIFY",

            "Understand what happened—and why.",

            `Your breakup may reveal patterns,
             beliefs and emotional wounds that have
             influenced more than one relationship.`

        )}


        <section class="section">

            <div class="container feature-grid">


                ${featureCard(

                    "↻",

                    "Repeated Relationship Cycles",

                    `Recognize recurring relationship
                     dynamics and familiar partner types.`

                )}


                ${featureCard(

                    "🧠",

                    "Attachment Styles",

                    `Understand how anxious,
                     avoidant and secure attachment
                     influence relationships.`

                )}


                ${featureCard(

                    "🚩",

                    "Red Flags & Boundaries",

                    `Recognize unhealthy behaviors
                     while learning to establish
                     wise relational boundaries.`

                )}


                ${featureCard(

                    "💔",

                    "Trauma Bonds",

                    `Understand why emotional intensity
                     may sometimes be mistaken for
                     healthy love.`

                )}


                ${featureCard(

                    "🔎",

                    "Childhood Relationship Patterns",

                    `Explore how early experiences
                     may influence the people
                     you choose today.`

                )}


                ${featureCard(

                    "⚠",

                    "Self-Sabotage",

                    `Identify chasing, withdrawing,
                     overgiving, testing and
                     people-pleasing behaviors.`

                )}


            </div>

        </section>



        ${reflectionSection(

            "Your breakup may reveal more than who left.",

            `The end of a relationship can expose
             what you tolerate, what you fear,
             what you chase and what you believe
             love requires from you.`,

            [

                "What behaviors did I repeatedly excuse?",

                "What was I afraid of losing?",

                "Did I confuse being needed with being loved?",

                "What did I abandon about myself?",

                "What would I choose differently next time?"

            ]

        )}

    `;

}



/* =========================================================
   HEAL
========================================================= */

function healPage() {

    return `

        ${pageHero(

            "HEAL",

            "Don't just move on. Become whole.",

            `Healing is more than waiting for time
             to pass. It includes grieving,
             rebuilding your identity,
             restoring emotional health and
             renewing your mind.`

        )}


        <section class="section">

            <div class="container feature-grid">


                ${featureCard(

                    "💔",

                    "Breakup Recovery",

                    `Process grief, uncertainty,
                     longing, disappointment
                     and emotional pain.`

                )}


                ${featureCard(

                    "♡",

                    "Forgiveness",

                    `Understand forgiveness without
                     minimizing what happened or
                     abandoning healthy boundaries.`

                )}


                ${featureCard(

                    "🛡",

                    "Boundaries",

                    `Create digital, emotional,
                     communication and relationship
                     boundaries that support healing.`

                )}


                ${featureCard(

                    "✦",

                    "Identity & Self-Worth",

                    `Rediscover who you are
                     beyond the person who left
                     or the relationship that ended.`

                )}


                ${featureCard(

                    "✝",

                    "Prayer & Spiritual Healing",

                    `Bring your pain, questions
                     and hope honestly before God.`

                )}


                ${featureCard(

                    "♡",

                    "Counselling & Support",

                    `Recognize when counselling,
                     trusted community or pastoral
                     support may strengthen healing.`

                )}


            </div>

        </section>



        ${reflectionSection(

            "How do you know you are healing?",

            `Healing is rarely perfectly linear.
             Progress often becomes visible in your
             emotional reactions, boundaries,
             choices and growing hope for the future.`,

            [

                "You can remember without becoming overwhelmed every time.",

                "You feel less compelled to check or chase your ex.",

                "You can accept reality even when you wish it were different.",

                "Your identity is becoming bigger than the breakup.",

                "You increasingly make decisions from wisdom instead of loneliness."

            ]

        )}

    `;

}



/* =========================================================
   LOVE AGAIN
========================================================= */

function loveAgainPage() {

    return `

        ${pageHero(

            "LOVE AGAIN",

            "Prepare for healthy love, not just another relationship.",

            `Healing doesn't require closing your
             heart forever. It helps you become
             wiser, clearer and better prepared
             for healthy relationships.`

        )}


        <section class="section">

            <div class="container feature-grid">


                ${featureCard(

                    "♡",

                    "Dating Readiness",

                    `Determine whether you are
                     genuinely ready for another
                     relationship.`

                )}


                ${featureCard(

                    "🛡",

                    "Emotional Safety",

                    `Recognize consistency,
                     empathy, accountability
                     and respect.`

                )}


                ${featureCard(

                    "🚦",

                    "Red Flags vs Green Flags",

                    `Recognize the difference
                     between concerning behavior
                     and healthy relationship signs.`

                )}


                ${featureCard(

                    "💬",

                    "Healthy Communication",

                    `Develop relationships where
                     expectations, conflict and
                     needs can be discussed honestly.`

                )}


                ${featureCard(

                    "⚖",

                    "Choosing Wisely",

                    `Choose partners based on
                     values, character and compatibility
                     rather than chemistry alone.`

                )}


                ${featureCard(

                    "✝",

                    "Christ-Centered Relationships",

                    `Allow faith to shape
                     character, love, commitment
                     and relationship decisions.`

                )}


            </div>

        </section>



        ${reflectionSection(

            "Choose from clarity—not an unhealed wound.",

            `Healthy dating asks more than
             “Do I like this person?”
             It also considers safety,
             character, compatibility,
             shared values and direction.`,

            [

                "Do I feel safe enough to be honest?",

                "Is this person consistent over time?",

                "Can we disagree respectfully?",

                "Do our core values align?",

                "Am I choosing from peace or fear?"

            ]

        )}

    `;

}



/* =========================================================
   RESOURCES
========================================================= */

function resourcesPage() {

    return `

        ${pageHero(

            "RESOURCES",

            "Tools for healing, clarity and healthier love.",

            `Explore resources created to help
             you understand your story,
             heal from heartbreak and
             prepare for better relationships.`

        )}


        <section class="section">

            <div class="container feature-grid">


                ${featureCard(

                    "📖",

                    "Articles & Blog",

                    `In-depth teaching on heartbreak,
                     relationship patterns,
                     faith and healthy love.`

                )}


                ${featureCard(

                    "▶",

                    "Videos",

                    `Watch practical teaching,
                     encouragement and
                     relationship coaching.`

                )}


                ${featureCard(

                    "♡",

                    "Healing Devotionals",

                    `Faith-centered reflections
                     for grief, healing
                     and restoration.`

                )}


                ${featureCard(

                    "🙏",

                    "Prayers for a Broken Heart",

                    `Prayers for peace,
                     forgiveness, healing,
                     hope and wisdom.`

                )}


                ${featureCard(

                    "✓",

                    "Quizzes & Assessments",

                    `Reflection tools designed
                     to help you recognize
                     patterns and healing needs.`

                )}


                ${featureCard(

                    "↓",

                    "Free Healing Guides",

                    `Download journal prompts,
                     healing worksheets,
                     boundary guides and more.`

                )}


            </div>

        </section>


        ${newsletterSection()}

    `;

}



/* =========================================================
   COACHING
========================================================= */

function coachingPage() {

    return `

        ${pageHero(

            "COACHING",

            "Personal support for your healing journey.",

            `Work through your relationship story,
             understand patterns, restore confidence
             and prepare for healthier love.`

        )}


        <section class="section">

            <div class="container coaching-grid">


                <div class="info-card">

                    <p class="eyebrow">
                        HEART RESTORATION COACHING
                    </p>

                    <h2>
                        From heartbreak
                        to healthier love.
                    </h2>


                    <p>

                        Coaching follows the
                        H.E.A.L.™ framework:

                        Honor Your Story,
                        Examine Your Patterns,
                        Align With Truth and
                        Love Again Wisely.

                    </p>


                    <ul class="check-list">

                        <li>
                            Understand what is
                            keeping you emotionally stuck.
                        </li>

                        <li>
                            Identify relationship patterns.
                        </li>

                        <li>
                            Build healthy boundaries.
                        </li>

                        <li>
                            Restore confidence and identity.
                        </li>

                        <li>
                            Prepare for healthy,
                            Christ-centered love.
                        </li>

                    </ul>


                    <a
                        href="mailto:hello@healedtoloveagain.com"
                        class="button button-primary"
                    >
                        Enquire About Coaching
                    </a>

                </div>


                <div class="coaching-steps">


                    ${coachingStep(
                        "1",
                        "Discover",
                        "Understand your story and current healing needs."
                    )}


                    ${coachingStep(
                        "2",
                        "Restore",
                        "Address wounds, beliefs and relationship patterns."
                    )}


                    ${coachingStep(
                        "3",
                        "Rebuild",
                        "Strengthen identity, confidence and boundaries."
                    )}


                    ${coachingStep(
                        "4",
                        "Prepare",
                        "Move toward future relationships with clarity."
                    )}


                </div>

            </div>

        </section>

    `;

}



/* =========================================================
   ABOUT
========================================================= */

function aboutPage() {

    return `

        ${pageHero(

            "ABOUT HEALED TO LOVE AGAIN",

            "Healing hearts. Restoring hope. Preparing people to love again wisely.",

            `Healed to Love Again is a relationship
             healing ministry helping singles recover
             from painful breakups, understand patterns,
             restore confidence and prepare for healthy,
             God-honoring relationships.`

        )}


        <section class="section">

            <div class="container split-grid">


                <div>

                    <p class="eyebrow">
                        OUR MISSION
                    </p>

                    <h2>
                        Heartbreak can become
                        a place of transformation.
                    </h2>


                    <p>

                        A breakup can expose wounds,
                        fears, habits and beliefs
                        that were hidden while
                        the relationship continued.

                    </p>


                    <p>

                        Rather than rushing people
                        into another relationship,
                        Healed to Love Again helps
                        them understand their story,
                        heal deeply and develop
                        healthier foundations for love.

                    </p>


                    <h3>
                        Identify. Heal. Love Again.
                    </h3>

                </div>


                <div class="values-grid">


                    ${valueCard(

                        "✝",

                        "Faith",

                        "Grounded in biblical truth and Christian hope."

                    )}


                    ${valueCard(

                        "📖",

                        "Wisdom",

                        "Practical emotional and relationship education."

                    )}


                    ${valueCard(

                        "♡",

                        "Healing",

                        "Compassionate support for heartbreak and restoration."

                    )}


                    ${valueCard(

                        "👥",

                        "Community",

                        "A place where people do not have to heal alone."

                    )}


                </div>

            </div>

        </section>


        <section class="section-soft">

            <div class="container center">

                <p class="eyebrow">
                    OUR FRAMEWORK
                </p>

                <h2>
                    H.E.A.L.™
                </h2>


                <p style="
                    max-width:760px;
                    margin:auto;
                    color:#656478;
                ">

                    Honor Your Story.

                    Examine Your Patterns.

                    Align With Truth.

                    Love Again Wisely.

                </p>

            </div>

        </section>

    `;

}



/* =========================================================
   SMALL HOME COMPONENTS
========================================================= */

function journeyCard(
    icon,
    title,
    text,
    page
) {

    return `

        <article class="journey-card">

            <div class="icon-circle">
                ${icon}
            </div>

            <h3>
                ${title}
            </h3>

            <p>
                ${text}
            </p>

            <a
                class="card-link"
                href="#${page}"
            >
                Start here →
            </a>

        </article>

    `;

}



function healItem(
    letter,
    title,
    text
) {

    return `

        <article class="heal-item">

            <div class="heal-letter">
                ${letter}
            </div>

            <h3>
                ${title}
            </h3>

            <p>
                ${text}
            </p>

        </article>

    `;

}



function topic(
    title,
    subtitle,
    page
) {

    return `

        <a
            href="#${page}"
            class="topic-card"
        >

            <div>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${subtitle}
                </p>

            </div>

        </a>

    `;

}



function coachingStep(
    number,
    title,
    text
) {

    return `

        <div class="coaching-step">

            <p class="eyebrow">
                STEP ${number}
            </p>

            <h3>
                ${title}
            </h3>

            <p>
                ${text}
            </p>

        </div>

    `;

}



function valueCard(
    icon,
    title,
    text
) {

    return `

        <article class="value-card">

            <div class="feature-icon">
                ${icon}
            </div>

            <h3>
                ${title}
            </h3>

            <p>
                ${text}
            </p>

        </article>

    `;

}



/* =========================================================
   ROUTER
========================================================= */

const routes = {

    home:
        homePage,

    "start-here":
        startHerePage,

    identify:
        identifyPage,

    heal:
        healPage,

    "love-again":
        loveAgainPage,

    resources:
        resourcesPage,

    coaching:
        coachingPage,

    about:
        aboutPage

};



function router() {

    let route =
        window.location.hash
            .replace("#", "");


    if (!route) {

        route = "home";

    }


    const page =
        routes[route]
        || homePage;


    app.innerHTML =
        page();


    document
        .querySelectorAll(".main-nav a")
        .forEach(link => {

            link.classList.remove(
                "active"
            );

        });


    const currentLink =
        document.querySelector(
            `.main-nav a[href="#${route}"]`
        );


    if (currentLink) {

        currentLink.classList.add(
            "active"
        );

    }


    document
        .getElementById("mainNav")
        .classList.remove("open");


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}



/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );


mobileMenuButton.addEventListener(
    "click",
    () => {

        document
            .getElementById("mainNav")
            .classList
            .toggle("open");

    }
);



/* =========================================================
   NEWSLETTER DEMO
========================================================= */

function subscribe(event) {

    event.preventDefault();


    alert(
        "Thank you for joining the Healed to Love Again community!"
    );


    event.target.reset();

}


window.subscribe =
    subscribe;



const footerNewsletter =
    document.getElementById(
        "footerNewsletter"
    );


footerNewsletter.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        alert(
            "Thank you for subscribing!"
        );


        event.target.reset();

    }
);



/* =========================================================
   INITIALIZE
========================================================= */

window.addEventListener(
    "hashchange",
    router
);


window.addEventListener(
    "DOMContentLoaded",
    router
);