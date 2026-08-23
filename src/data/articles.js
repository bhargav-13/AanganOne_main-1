// Resources / blog content.
// NOTE: article copy is a first draft written for review by the AanganOne team.
// It deliberately contains no customer names, statistics or claims that cannot
// be substantiated — only practical guidance grounded in the product.

export const ARTICLES = [
  {
    slug: 'smarter-community-management',
    tag: 'Management',
    title: 'Smarter community management starts at the gate',
    excerpt:
      'Most committees try to fix communication first. The gate is the better starting point — and it changes everything downstream.',
    readMins: 6,
    date: '2026-07-14',
    tint: 'bg-indigo-600',
    text: 'text-paper',
    intro:
      'Every committee that decides to digitise its society faces the same question: where do you actually start? The instinct is usually communication, because that is where the noise is loudest. In practice, the gate is the better place to begin.',
    sections: [
      {
        h: 'Why the gate comes first',
        p: [
          'The gate is the only point in a society where something is written down every single day without fail. A visitor arrives, a name goes in a register, an entry is made. It is the one process that already has discipline attached to it — which makes it the easiest to move onto a system.',
          'It is also the process where the cost of getting it wrong is highest. A misplaced register is a security question, not an administrative one. Committees feel that difference, and so do residents.',
        ],
      },
      {
        h: 'What changes downstream',
        p: [
          'Once entries are logged digitally, several other problems quietly solve themselves. Disputes about who came and when stop being arguments and start being lookups. Residents stop calling the guard to ask whether a delivery arrived. The guard stops calling flats to confirm expected guests, because approval already happened in the app.',
        ],
        list: [
          'Entry records become searchable by flat, date or visitor',
          'Approvals move to the resident, before the visitor arrives',
          'The guard spends less time on the phone and more at the gate',
          'Committee gets visibility without having to ask anyone',
        ],
      },
      {
        h: 'Then, and only then, communication',
        p: [
          'Once the gate is running, residents already have the app open. That is the moment to move notices onto it — not before. A notice system nobody has installed is just a noticeboard with extra steps.',
          'This sequencing matters more than most committees expect. Adoption is not a feature problem; it is an ordering problem. Give people a reason to open the app daily, and the rest follows.',
        ],
      },
    ],
  },

  {
    slug: 'simplify-maintenance-tracking',
    tag: 'Maintenance',
    title: 'Five ways to simplify society maintenance tracking',
    excerpt:
      'Maintenance collection eats more committee hours than anything else. Most of that time goes to work that should never have been manual.',
    readMins: 7,
    date: '2026-06-28',
    tint: 'bg-terracotta-500',
    text: 'text-paper',
    intro:
      'Ask any society treasurer where their time goes and the answer is rarely "deciding things". It goes to raising bills, sending reminders, matching payments against flats, and answering the same question about dues from a dozen different residents.',
    sections: [
      {
        h: '1. Stop raising bills by hand',
        p: [
          'A maintenance cycle is, by definition, repetitive. The same units, the same heads, the same dates. Anything that repeats on a schedule should be generated on a schedule. Manual invoice creation is where most of the errors enter the system, and every error costs a conversation later.',
        ],
      },
      {
        h: '2. Put the bill where the payment happens',
        p: [
          'When a bill arrives as an image in a chat group and payment happens in a banking app, someone has to bridge the gap manually. That someone is usually the treasurer, matching screenshots against a spreadsheet. Keeping the bill and the payment in one place removes an entire category of reconciliation work.',
        ],
      },
      {
        h: '3. Make status visible to the resident',
        p: [
          'A surprising share of committee time is spent answering "have I paid?" and "what is pending?". These are lookups, not decisions. If a resident can see their own unit\'s status, they stop asking — and the committee stops answering.',
        ],
      },
      {
        h: '4. Separate the reminder from the relationship',
        p: [
          'Chasing dues personally strains relationships between neighbours who also have to sit in the same AGM. An automated, neutral reminder does the same job without anyone having to be the person who asked.',
        ],
      },
      {
        h: '5. Keep the record longer than the committee',
        p: [
          'Committees change. Institutional memory walks out with them, and the next set spends months reconstructing what happened. A system that holds the history means a handover is a login, not an archaeology project.',
        ],
      },
    ],
  },

  {
    slug: 'better-community-communication',
    tag: 'Community',
    title: 'Building stronger communities through better communication',
    excerpt:
      'The society WhatsApp group is not a communication system. It is a place where communication goes to get buried.',
    readMins: 5,
    date: '2026-06-10',
    tint: 'bg-sand-300',
    text: 'text-ink-900',
    intro:
      'Almost every residential society in India runs on a group chat. It is free, everyone already has it, and it works — right up until the moment something actually matters.',
    sections: [
      {
        h: 'Why group chats fail as noticeboards',
        p: [
          'A group chat is ordered by recency, not importance. An official notice about a water shutdown sits in the same stream as a forwarded joke and a lost-keys message, and within an hour it has scrolled away. There is no distinction between what the committee published and what a resident opined.',
          'The second failure is accountability. Nobody can tell who has seen a notice. When a resident says they were not informed, there is no way to establish otherwise — so the committee ends up repeating itself across multiple groups.',
        ],
      },
      {
        h: 'What an official channel changes',
        p: [
          'Separating official communication from social chatter does two things at once. It gives notices a permanent, findable home, and it gives the social group back its actual purpose. Both improve.',
        ],
        list: [
          'Notices stay in one place instead of scrolling out of view',
          'Residents know what is official and what is opinion',
          'Emergencies reach everyone without depending on forwards',
          'The committee stops repeating itself across several groups',
        ],
      },
      {
        h: 'Keep the chat — just not for everything',
        p: [
          'None of this means abandoning the group. Communities need informal space, and a society without one feels colder for it. The point is simply that a noticeboard and a living room are different rooms, and trying to use one as the other is why both feel broken.',
        ],
      },
    ],
  },

  {
    slug: 'smart-security-for-societies',
    tag: 'Security',
    title: 'Why smart security systems matter for modern societies',
    excerpt:
      'A register at the gate creates a record nobody can search, verify, or rely on when it is actually needed.',
    readMins: 6,
    date: '2026-05-22',
    tint: 'bg-terracotta-500',
    text: 'text-paper',
    intro:
      'The paper register at the gate is one of the most trusted objects in a residential society, and one of the least reliable. It is trusted because it has always been there. It is unreliable for reasons that only become obvious when you need it.',
    sections: [
      {
        h: 'The problem with a register',
        p: [
          'A register records what someone chose to write, in handwriting that may or may not be legible, at a moment when the guard was also opening a gate and answering a phone. It cannot be searched. It cannot be verified after the fact. And it holds every resident\'s visitor history in a book that sits on a desk anyone can reach.',
        ],
      },
      {
        h: 'What verification actually means',
        p: [
          'Digital entry is not simply the register retyped. The meaningful change is that approval moves before arrival. The resident decides who is expected; the guard confirms rather than interprets. That single reordering removes the guesswork from the person least equipped to carry it.',
        ],
        list: [
          'Pre-approval means the guard verifies instead of deciding',
          'A scan is faster than a written entry, so queues shrink',
          'Every entry carries a timestamp that can be checked later',
          'Emergency alerts reach residents without a phone tree',
        ],
      },
      {
        h: 'Security that residents actually feel',
        p: [
          'The measure of a security system is not how much it records. It is whether a resident feels comfortable letting a delivery through while they are at work, and whether the committee can answer a question about last Tuesday without opening a cupboard. Those are the outcomes worth designing for.',
        ],
      },
    ],
  },

  {
    slug: 'technology-transforming-society-management',
    tag: 'Technology',
    title: 'How technology is transforming society management in India',
    excerpt:
      'Indian residential societies have specific operational realities. Software built elsewhere tends to miss most of them.',
    readMins: 6,
    date: '2026-05-05',
    tint: 'bg-ink-900',
    text: 'text-paper',
    intro:
      'Residential community software is not a new category globally. What is relatively new is software designed around how Indian societies actually operate — with daily help, multiple guards per gate, cash-adjacent payment habits and committees that turn over every year or two.',
    sections: [
      {
        h: 'The details that do not travel',
        p: [
          'A platform designed for a Western apartment block tends to assume a professional property manager, low visitor volume and a single payment method. An Indian society often has none of those. It has high daily footfall from help and deliveries, an elected committee doing this alongside full-time jobs, and residents who expect UPI.',
          'These are not cosmetic differences. They change what the software has to be good at.',
        ],
      },
      {
        h: 'What India-first actually requires',
        list: [
          'A gate flow fast enough for genuine daily volume',
          'UPI as a first-class payment method, not an afterthought',
          'Interfaces simple enough for staff with varied literacy',
          'Structures that map to towers, wings and multi-block layouts',
          'Handover that survives an annual change of committee',
        ],
      },
      {
        h: 'Adoption is the real constraint',
        p: [
          'The hardest part of digitising a society is not the software. It is getting a few hundred people, with very different comfort levels, to change a habit at the same time. That makes onboarding, training and interface simplicity more important than feature count — a lesson that shows up repeatedly in this category.',
        ],
      },
    ],
  },

  {
    slug: 'efficient-society-administration',
    tag: 'Administration',
    title: 'Practical tips for efficient society administration',
    excerpt:
      'Committee members are volunteers with day jobs. Efficient administration is mostly about removing work, not organising it better.',
    readMins: 5,
    date: '2026-04-18',
    tint: 'bg-indigo-600',
    text: 'text-paper',
    intro:
      'Almost every guide to running a society better suggests more process — more meetings, more registers, more checklists. For a committee of volunteers, that advice is close to useless. The useful question is which work can stop existing.',
    sections: [
      {
        h: 'Distinguish decisions from lookups',
        p: [
          'Most of what reaches a committee member\'s phone is not a decision. It is a lookup: what is my due, has the plumber come, when is the tank cleaning. Lookups should never require a human. Every lookup you make self-serve is a permanent reduction in workload.',
        ],
      },
      {
        h: 'Give every complaint an owner',
        p: [
          'An issue raised in a group belongs to everyone and therefore to no one. An issue with a named owner and a visible status gets closed. This is the single highest-leverage change most committees can make, and it costs nothing but structure.',
        ],
      },
      {
        h: 'Write down what only you know',
        p: [
          'Vendor contacts, meter locations, the quirk with the second lift, which bank the corpus sits in. Institutional knowledge held in one person\'s head becomes a crisis the moment that person moves out. A shared record is not bureaucracy — it is insurance.',
        ],
      },
      {
        h: 'Plan the handover from day one',
        p: [
          'Committees change annually in many societies. If your successors need a fortnight of meetings to understand the current state, the system is the problem, not them. Aim for a handover that is a transfer of access rather than a transfer of memory.',
        ],
      },
    ],
  },
]

export const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug)
