var talks = angular.module('talks', []);
talks.controller('TalksController', function($scope) {

  $scope.isUndefined = function (thing) {
    return (typeof thing === "undefined");
  }
  
  $scope.features = [
    {
      id: '24',
      title: 'Building an accessible bingo web app',
      role: 'Author',
      publication: '24 Accessibility',
      date: 'December 2019',
      href: 'https://www.24a11y.com/2019/building-an-accessible-bingo-web-app/'
    },
    {
      id: 'dnd',
      title: '4 Major Patterns for Accessible Drag & Drop',
      role: 'Code samples',
      publication: 'Salesforce UX Tech Blog',
      date: 'November 2017',
      href: 'https://medium.com/salesforce-ux/4-major-patterns-for-accessible-drag-and-drop-1d43f64ebf09',
    },
    {
      id: 'db',
      title: 'Creating a culture of accessibility',
      role: 'Author',
      publication: 'Dropbox Tech Blog',
      date: 'April  2017',
      href: 'https://blogs.dropbox.com/tech/2017/04/creating-a-culture-of-accessibility/',
    },
    {
      id: 'net magazine',
      title: 'Using onclick wisely',
      role: 'Author',
      publication: 'net magazine',
      date: 'March 2016',
      href: 'https://issuu.com/futurepublishing/docs/net279.issuu'
    },
    {
      id: 'sf2',
      title: '7 Things Every Designer Needs to Know about Accessibility',
      role: 'Illustrator',
      date: 'April 2015',
      href: 'https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b',
      publication: 'Salesforce UX Blog'
    },
    {
      id: 'sf1',
      title: 'Projectors Don\'t Lie',
      role: 'Author',
      date: 'December 2014',
      href: 'https://medium.com/salesforce-ux/projectors-dont-lie-b85ef628b04',
      publication: 'Salesforce UX Blog'
    },
    {
      id: 'ran',
      title: 'Alternatives to "Ninja" and "Rockstar"',
      role: 'Author',
      date: 'March 2014',
      href: 'https://medium.com/@cordeliadillon/alternatives-to-ninja-and-rockstar-8cc108a82c0',
    }
  ];

  $scope.interviews = [
    {
      id: 'fin',
      title: 'Webbsidor \u00E4r egentligen serieteckningar',
      publication: 'Finlands Synskadade',
      date: 'April 2017',
      href: 'https://www.fss.fi/sv/finlands-synskadade-nummer-4-2017'
    },
    {
      id: 'she',
      title: 'she++ TechStories()',
      publication: 'she++',
      date: 'March 2014',
      href: 'https://www.youtube.com/watch?v=VAUCavMFswY'
    },
    {
      id: 'ctn',
      title: 'Volunteer Spotlight',
      publication: 'Community Technology Network',
      date: 'August 2013',
      href: 'https://www.communitytechnetwork.org/blog/volunteer-spotlight-cordelia-mcgee-tubb/'
    },
  ];

  $scope.upcomingTalks = [
    {
      id: '042820',
      title: 'AXSChat',
      eventDate: 'April 28th, 2020',
      eventName: 'AXSChat',
      eventHref: 'https://www.axschat.com/upcoming-events/',
      themes: ['Accessibility']
    },
    {
      id: '042920',
      title: 'Panel: Journeys into Digital Accessibility',
      eventDate: 'April 29th, 2020',
      eventName: 'Bay Area Accessibility and Inclusive Design Meetup',
      eventHref: 'https://www.meetup.com/a11ybay/events/270204474/',
      themes: ['Accessibility']
    },

  ];

  $scope.pastTalks = [
     {
       id: '112019',
       title: 'Keyboard Navigation: Where Productivity Meets Accessibility',
       eventDate: 'November 20th, 2019',
       eventName: 'Dreamforce',
       eventHref: 'https://www.salesforce.com/dreamforce/',
       themes: ['Accessibility', 'Productivity', 'Salesforce'],
       links: [{name: 'Abstract', href: 'https://success.salesforce.com/sessions?eventId=a1Q3A000021ea1UUAQ#/session/a2q3A000002BJNgQAO'}]
     },
     {
       id: '102419',
       title: 'Co-hosting with Eric Bailey',
       eventDate: 'October 24-25th, 2019',
       eventName: '#a11yTOConf',
       eventHref: 'https://conf.a11yto.com/',
       themes: ['Accessibility'],
     },
     {
       id: '051419',
       title: 'Panel: How the Giants of Tech are making accessibility a mainstream issue',
       eventDate: 'May 14th, 2019',
       eventName: 'Benchmarking Digital Inclusion to Drive a Better Digital World',
       eventHref: 'https://www.eventbrite.com/e/benchmarking-digital-inclusion-to-drive-a-better-digital-world-registration-58851121288#',
       themes: ['Accessibility', 'Process', 'Salesforce'],
       links: [
         {name: 'Video', href: 'https://embed.vidyard.com/share/8dWsVEZkRTdtYkLELF81FS'}
       ]
     },
     {
      id: '041219',
      title: 'Episode 30 - El Deafo',
      eventDate: 'April 12th, 2019',
      eventName: 'Pop Whiz Bang! Podcast',
      eventHref: 'https://soundcloud.com/pwbpod/popwhizbang-episode-30-el-deafo',
      themes: ['Accessibility', 'Comics'],
      links: [
        {name: 'Audio', href: 'https://soundcloud.com/pwbpod/popwhizbang-episode-30-el-deafo'},
        {name: 'Transcript', href: 'https://cordeliadillon.github.io/transcripts/Pop_Whiz_Bang__Episode-30'}
      ]
     },
     {
      id: '040519',
      title: 'Episode 29 - Accessibility in Comics',
      eventDate: 'April 5th, 2019',
      eventName: 'Pop Whiz Bang! Podcast',
      eventHref: 'https://soundcloud.com/pwbpod/popwhizbang-episode-29-accessbility-in-comics',
      themes: ['Accessibility', 'Comics'],
      links: [
        {name: 'Audio', href: 'https://soundcloud.com/pwbpod/popwhizbang-episode-29-accessbility-in-comics'},
        {name: 'Transcript', href: 'https://cordeliadillon.github.io/transcripts/Pop_Whiz_Bang__Episode-29'}
      ]
     },
     {
      id: '0302',
      title: 'Panel: Rise Up, Reach Back',
      eventDate: 'March 2nd, 2019',
      eventName: 'Women Techmakers 2019',
      eventHref: 'https://www.womentechmakers.com/iwd19/google-mountain-view-19',
      location: 'Mountain View',
      themes: ['Accessibility', 'Mentorship & Sponsorship', 'Women in Tech'],
      links: [
        {name: 'Video', href: 'https://www.youtube.com/watch?v=LFq-a2UAYDc'}
      ]
     },
     {
      id: '0219',
      title: 'Lightning Talk',
      eventDate: 'February 23rd, 2019',
      eventName: 'World IA Day 2019',
      eventHref: 'https://generalassemb.ly/education/world-ia-day-2019-design-for-difference/san-francisco/69704',
      location: 'San Francisco',
      themes: ['Universal Design', 'User Experience'],
     },
     {
      id: '1018',
      title: 'Everything I learned about interaction design I learned in the senior center computer lab',
      eventDate: 'October 2018',
      eventName: '#a11yTOConf',
      eventHref: 'http://conf.a11yto.com/talks#everything-i-learned-about-interaction-design',
      location: 'Toronto',
      themes: ['Universal Design', 'User Experience'],
     },
     {
      id: '092518',
      title: 'Inclusive Design in Practice',
      eventDate: 'September 2018',
      eventName: 'World Interaction Design Day',
      eventHref: 'https://www.eventbrite.com/e/inclusive-design-in-practice-tickets-48506684800',
      location: 'San Francisco',
      themes: ['Inclusive Design', 'Universal Design'],
      links: [
        {name: 'Event', href: 'https://www.eventbrite.com/e/inclusive-design-in-practice-tickets-48506684800'}]
     },
     {
      id: '032318',
      title: 'Major Patterns for Accessible Drag & Drop',
      eventDate: 'March 2018',
      eventName: 'CSUN',
      eventHref: 'http://www.csun.edu/cod/conference/2018/sessions/index.php/',
      location: 'San Diego',
      themes: ['Accessibility', 'Universal Design'],
      links: [
        {name: 'Abstract', href: 'http://www.csun.edu/cod/conference/2018/sessions/index.php/public/presentations/view/167'},
        {name: 'Slideshare', href: 'https://www.slideshare.net/JesseHausler/major-patterns-for-accessible-drag-and-drop'}
      ]
     },
     {
      id: '102117',
      title: 'Panel: Secret sauce of successful accessibility squads',
      eventDate: 'October 2017',
      eventName: 'Accessibility Camp Bay Area',
      eventHref: 'http://www.accessibilitycampbay.org/2017talks.php',
      location: 'San Francisco',
      themes: ['Panel Moderator', 'Accessibility', 'Process']
     },
     {
      id: '092117',
      title: 'Panel: Secret sauce of successful accessibility squads',
      eventDate: 'September 2017',
      eventName: 'Bay Area Accessibility and Inclusive Design Meetup',
      eventHref: 'https://www.meetup.com/a11ybay/events/243136425/',
      location: 'San Francisco',
      themes: ['Panel Moderator', 'Accessibility', 'Process']
     },
     {
      id: '091417',
      title: 'Workshop: Universal Design for the Web',
      eventDate: 'September 2017',
      eventName: 'A11y Camp Sydney',
      eventHref: 'https://www.eventbrite.com.au/e/a11y-camp-2017-workshops-tickets-36529511753',
      location: 'Sydney',
      themes: ['Accessibility', 'Universal Design', 'Web Design']
     },
     {
      id: '091317',
      title: 'The Great Accessibility Bake Off',
      eventDate: 'September 2017',
      eventName: 'A11y Camp Sydney',
      eventHref: 'http://a11ybytes.org/a11y-camp-schedule/',
      location: 'Sydney',
      themes: ['Accessibility', 'Web Development', 'User Experience']
     },
     {
      id: '060917',
      title: 'Accessible Comics!!!',
      eventDate: 'June 2017',
      eventName: 'Inclusive Design 24 (#ID24)',
      eventHref: 'http://www.inclusivedesign24.org/',
      themes: ['Accessibility', 'Comics'],
      links: [
        {name: 'Video', href: 'https://www.youtube.com/watch?v=zsQcOV0dZew&list=PL95LOQw9SLWwqX2xoYidVO2YA7gknhmcx&index=1'},
        {name: 'SlideShare', href: 'https://www.slideshare.net/cordeliadillon/accessible-comics-id24'},
        {name: 'Google Slides', href: 'https://docs.google.com/presentation/d/1bXAK4-T7EnAWxe-kavSk0klJXv1uxKK-_qPa8FSs_ew/pub?start=false&loop=false&delayms=60000'}
      ]
     },
     {
      id: '051617',
      title: 'Designing the Web for Senior Citizens',
      eventDate: 'May 2017',
      eventName: 'Accessibility on the JAMstack',
      eventHref: 'https://www.meetup.com/jamstack-sf/events/239577043/',
      themes: ['Accessibility', 'User Experience', 'Universal Design', 'Senior Citizens'],
      links: [
        {name: 'Video', href: 'https://www.youtube.com/watch?v=Pe-JOADSYY8'},
      ]
    },
    {
      id: '050517',
      title: 'The Great Accessibility Bake Off',
      eventDate: 'May 2017',
      eventName: 'Respond 17',
      eventHref: 'http://www.webdirections.org/respond/schedule.html',
      location: 'Sydney & Melbourne',
      themes: ['Accessibility', 'Web Development', 'User Experience'],
      links: [
        {name: 'Abstract', href: 'http://www.webdirections.org/respond/speakers/cordelia-mcgee-tubbs.html'},
        {name: 'SlideShare', href: 'https://www.slideshare.net/cordeliadillon/the-great-accessibility-bake-off'},
        {name: 'Recap', href: 'http://weblog.200ok.com.au/2017/05/respond17-big-stonking-post.html#corderliamgceetubb'},
        {name: 'Sketch Notes', href: 'https://twitter.com/SketchVideo/status/861726031748579328'}
      ]
    },
    {
      id: '040417',
      title: 'Illustrating the point: How to use images as an effective communication tool',
      eventDate: 'April 2017',
      eventName: 'Funka Accessibility Days',
      eventHref: 'http://www.funka.com/en/we-offer/funka-accessibility-days/program/',
      location: 'Stockholm',
      themes: ['Accessibility', 'Universal Design', 'Comics', 'Illustration'],
      links: [
        {name: 'Slides (PDF)', href: 'https://www.funka.com/contentassets/fb009556bdd7475b957f99cf8600c674/illustrating-the-point-cordelia.pdf'}
      ]
    },

    {
      id: '110516',
      title: 'Panel: Dynamic Comics Readings',
      eventDate: 'November 2016',
      eventName: 'Storytelling Across Media',
      eventHref: 'http://www.comic-con.org/frontpage/sam-program-schedule',
      themes: ['Comics', 'Storytelling']

    },
    {
      id: '100516',
      title: 'Designing the Web for Senior Citizens',
      eventDate: 'October 2016',
      eventName: 'WaffleJS',
      eventHref: 'https://wafflejs.com/?day=2016-10-05',
      themes: ['Accessibility', 'User Experience', 'Universal Design', 'Senior Citizens']

    },
    {
      id: '081016',
      title: 'Designing a Culture of Accessibility',
      eventDate: 'August 2016',
      eventName: 'Design Research Meetup',
      themes: ['Accessibility', 'Process']
    },
    {
      id: '051716',
      title: 'Keyboard Navigation',
      eventDate: 'May 2016',
      eventName: 'AIGA Meetup: Efficiency',
      eventHref: 'https://www.eventbrite.com/e/salesforce-ux-efficiency-tickets-25006961495',
      themes: ['Accessibility', 'Web Development', 'User Experience']
    },
    {
      id: '040116',
      title: 'Baking Accessibility In',
      eventDate: 'April 2016',
      eventName: 'Clarity',
      eventHref: 'http://clarityconf.com/',
      themes: ['Accessibility', 'Design Systems', 'Component Libraries'],
      links: [
        {name: 'Abstract', href: 'http://lanyrd.com/2016/clarityconf/sdxwbc/'},
        {name: 'Recap', href: 'http://bradfrost.com/blog/post/clarity-conf-baking-accessibility-in/'},
        /*{name: 'Tweets', href: 'https://storify.com/cordeliadillon/baking-accessibility-in-clarity-conference'},*/
        {name: 'Video', href: 'https://www.sitepoint.com/premium/courses/clarity-conference-2016-2925'}
      ]
    },
    {
      id: '031115',
      title: 'Accessibility 101 or "Oh gosh, I\'ve been doing this wrong!"',
      eventDate: 'March 2015',
      eventName: 'The Mixin',
      eventHref: 'http://themixin.eventbrite.com',
      themes: ['Accessibility', 'Web Development', 'User Experience'],
      links: [
        {name: 'Slides (PDF)', href: 'http://cordeliadillon.com/talks/TheMixin/accessibility/IveBeenDoingThisWrong.pdf'},
        {name: 'Google Slides', href: 'https://docs.google.com/presentation/d/1_-bZnTdCAhj2TqZRjmBM3ZGSkBunS9Pq6SWZbkmwMck/edit'},
        {name: 'Examples', href: 'http://www.cordeliadillon.com/talks/TheMixin/accessibility'}
      ]
    },
    {
      id: '030515',
      image: 'images/030115.jpg',
      title: 'Accessibility in an Agile World',
      eventDate: 'March 2015',
      eventName: 'CSUN',
      eventHref: 'http://www.csun.edu/cod/conference/',
      themes: ['Accessibility', 'Process'],
      links: [
        {name: 'Abstract', href: 'http://www.csun.edu/cod/conference/2015/sessions/index.php/public/presentations/view/190'},
        {name: 'SlideShare', href: 'http://www.slideshare.net/cordeliadillon/accessibility-inanagileworld-csun2015'},
        {name: 'Slides (PDF)', href: 'http://www.cordeliadillon.com/talks/CSUN2015/AccessibilityInAnAgileWorld-CSUN15.pdf'}
      ]
    },
    {
      id: '021115',
      image: 'images/021115.jpg',
      title: 'Functional Prototyping is Awesome!',
      eventDate: 'February 2015',
      eventName: 'Salesforce Girl Geek Dinner',
      eventHref: 'http://bayareagirlgeekdinners.com/salesforce-girl-geek-dinner-2015/',
      themes: ['Prototyping', 'User Experience'],
      links: [
        {name: 'Recap', href: 'http://bayareagirlgeekdinners.com/all-events/lucy-dotson-salesforce-girl-geek-dinner-2015/'}
      ]
    },
    {
      id: '040914',
      title: 'Lightning Talk',
      eventDate: 'April 2014',
      eventName: 'Salesforce UX Ignite (Internal)',
      themes: ['Senior Citizens', 'User Experience'],
      links: [
        {name: 'Photos', href: 'https://propergems.com/ignite/'}
      ]
    }
  ];

  for (var i = 0; i < $scope.upcomingTalks.length; i++) {
    var talk = $scope.upcomingTalks[i];
    talk.themeString = talk.themes.join(', ');
  }

  for (var i = 0; i < $scope.pastTalks.length; i++) {
    var talk = $scope.pastTalks[i];
    talk.themeString = talk.themes.join(', ');
  }
});
