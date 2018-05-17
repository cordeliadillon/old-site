var talks = angular.module('talks', []);
talks.controller('TalksController', function($scope) {

  $scope.isUndefined = function (thing) {
    return (typeof thing === "undefined");
  }
  
  $scope.features = [
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
      id: '1018',
      title: 'TBD',
      eventDate: 'October 2018',
      eventName: '#a11yTO',
      eventHref: 'http://conf.a11yto.com/',
      location: 'Toronto',
      themes: ['Stay tuned!'],
      links: []
    }
  ];

  $scope.pastTalks = [
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
      themes: ['Accessibility', 'Universal Design', 'Comics', 'Illustration']
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
        {name: 'Tweets', href: 'https://storify.com/cordeliadillon/baking-accessibility-in-clarity-conference'},
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
        {name: 'Slides PDF', href: 'http://cordeliadillon.com/talks/TheMixin/accessibility/IveBeenDoingThisWrong.pdf'},
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
        {name: 'Slides PDF', href: 'http://www.cordeliadillon.com/talks/CSUN2015/AccessibilityInAnAgileWorld-CSUN15.pdf'}
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
      title: 'UX Ignite',
      eventDate: 'April 2014',
      eventName: 'Salesforce UX Internal',
      themes: ['Senior Citizens', 'User Experience'],
      links: [
        {name: 'Photos', href: 'http://propergems.com/ignite'}
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