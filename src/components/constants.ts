export const mainNavigation = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/about-us'
  },
  {
    name: 'Solutions',
    link: '/solutions',
    subMenu: [
      {
        name: 'Core',
        items: [
          { name: 'Analytics', link: '/solutions/analytics' },
          { name: 'Artificial Intelligence', link: '/solutions/artificial-intelligence' },
          { name: 'Digital Transormation', link: '/solutions/digital-transformation' },
          { name: 'Expert System', link: '/solutions/expert-system' },
          { name: 'Product Development', link: '/solutions/product-development' },
          { name: 'Technical Consulting', link: '/solutions/technical-consulting' },
          { name: 'Business Intelligence', link: '/solutions/business-intelligence' },
          { name: 'IoT', link: '/solutions/internet-of-things' }
        ]
      },
      {
        name: 'Industry',
        items: [
          { name: 'E-Commerce', link: '/solutions/e-commerce' },
          { name: 'Engineering', link: '/solutions/engineering' },
          { name: 'Social Media', link: '/solutions/social-media' },
          { name: 'Healthcare', link: '/solutions/healthcare' },
          { name: 'Tourism', link: '/solutions/tourism' },
          { name: 'Education', link: '/solutions/education' }
        ]
      }
    ]
  },
  {
    name: 'Case Study',
    link: '/case-study',
    subMenu: [
      {
        name: 'Read studies for',
        items: [
          { name: 'Siemens', link: '/case-study/siemens' },
          { name: 'Sapna Online', link: '/case-study/sapna-online' },
          { name: 'LetsShave', link: '/case-study/letsshave' },
          { name: 'Grofers', link: '/case-study/grofers' },
          { name: 'Dainik Bhaskar', link: '/case-study/dainik-bhaskar' },
          { name: 'Cosmetize', link: '/case-study/cosmetize' }
        ]
      }
    ]
  },
  {
    name: 'Insights',
    link: '/insights'
  },
  {
    name: 'Careers',
    link: '/careers'
  }
];

export const mainSlider = [
  { src: '/images/banner-1.jpg', text: 'We are Building Solutions for Tomorrow' },
  { src: '/images/banner-2.jpg', text: 'We are Building Solutions for Tomorrow 2' },
  { src: '/images/banner-1.jpg', text: 'We are Building Solutions for Tomorrow 3' }
];

export const InquiryOptions = [
  { value: 'project-inquiry', label: 'Project inquiry for' },
  { value: 'service-request', label: 'Service request' },
  { value: 'maintainance', label: 'Maintainance' }
];

export const caseStudyArray = [
  {
    name: 'Divya Bhaskar',
    mainImage: '/images/case-study/image-1.jpg',
    logo: '/images/clients/divya-bhaskar.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  },
  {
    name: 'Grofers',
    mainImage: '/images/case-study/image-2.jpg',
    logo: '/images/clients/grofers.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  },
  {
    name: 'Hue',
    mainImage: '/images/case-study/image-1.jpg',
    logo: '/images/clients/hue.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  },
  {
    name: 'Siemens',
    mainImage: '/images/case-study/image-2.jpg',
    logo: '/images/clients/siemens.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  },
  {
    name: 'Vasu Healthcare',
    mainImage: '/images/case-study/image-1.jpg',
    logo: '/images/clients/vasu.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  }
];

export const solutionsArray = [
  { name: 'Digitalization', image: '/images/solutions/digitalization.svg' },
  { name: 'Cloud Computing', image: '/images/solutions/cloud-computing.svg' },
  { name: 'Artificial Intelligence', image: '/images/solutions/artificial-intelligence.svg' },
  { name: 'Analytics', image: '/images/solutions/analytics.svg' },
  { name: 'Product Development', image: '/images/solutions/product-development.svg' },
  { name: 'Technical Consulting', image: '/images/solutions/technical-consulting.svg' }
];

export const insightsList = [
  {
    name: 'Healthcare',
    image: '/images/insights/image-1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. Et ac integer dignissim nec. Eget vitae pulvinar neque eu cras. Velit turpis justo, tellus, in. Egestas phasellus etiam sed.....',
    link: '/insights/healthcare'
  },
  {
    name: 'Business Development',
    image: '/images/insights/image-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. Et ac integer dignissim nec. Eget vitae pulvinar neque eu cras. Velit turpis justo, tellus, in. Egestas phasellus etiam sed.....',
    link: '/insights/business-development'
  }
];

export const testimonialsList = [
  {
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. Et ac integer dignissim nec. Eget vitae pulvinar neque eu cras.',
    name: 'Mr. Kashyap',
    designation: 'MD, Vasu Health care'
  },
  {
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. Et ac integer dignissim nec. Eget vitae pulvinar neque eu cras. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est.',
    name: 'Mr. XXX',
    designation: 'MD, Vasu Health care'
  }
];

export const teamList = [
  {
    name: 'John Doe',
    designation: 'Senior Developer',
    jobDescrption:
      'Codes at lightening speed, is a happy crisp soul, and enlights intern with ideas and execution solutions!',
    image: '/images/user-2.jpg'
  },
  {
    name: 'John Doe',
    designation: 'Senior Developer',
    jobDescrption:
      'Codes at lightening speed, is a happy crisp soul, and enlights intern with ideas and execution solutions!',
    image: '/images/user-3.jpg'
  },
  {
    name: 'John Doe',
    designation: 'Senior Developer',
    jobDescrption:
      'Codes at lightening speed, is a happy crisp soul, and enlights intern with ideas and execution solutions!',
    image: '/images/user-1.jpg'
  },
  {
    name: 'John Doe',
    designation: 'Senior Developer',
    jobDescrption:
      'Codes at lightening speed, is a happy crisp soul, and enlights intern with ideas and execution solutions!',
    image: '/images/user-3.jpg'
  },
  {
    name: 'John Doe',
    designation: 'Senior Developer',
    jobDescrption:
      'Codes at lightening speed, is a happy crisp soul, and enlights intern with ideas and execution solutions!',
    image: '/images/user-2.jpg'
  },
  {
    name: 'John Doe',
    designation: 'Senior Developer',
    jobDescrption:
      'Codes at lightening speed, is a happy crisp soul, and enlights intern with ideas and execution solutions!',
    image: '/images/user-1.jpg'
  }
];

export const cultureArray = [
  {
    name: 'Lunch hours',
    mainImage: '/images/careers/lunch-hours-img.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  },
  {
    name: 'Grofers',
    mainImage: '/images/careers/career-other-img.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  }
];

export const openingList = [
  {
    id: 'sr-dev',
    name: 'Senior Developer',
    openings: 2,
    experience: '2 yrs+',
    criteria:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  },
  {
    id: 'bk-dev',
    name: 'Backend Developer',
    openings: 2,
    experience: '2 yrs+',
    criteria:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  },
  {
    id: 'jr-dev',
    name: 'Junior Developer',
    openings: 1,
    experience: '1 yrs+',
    criteria:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  },
  {
    id: 'pr-manager',
    name: 'Project Manager',
    openings: 1,
    experience: '5 yrs+',
    criteria:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  },
  {
    id: 'qa',
    name: 'Quality Analyst',
    openings: 2,
    experience: '2 yrs+',
    criteria:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  },
  {
    id: 'ux-dev',
    name: 'User Experience Designer',
    openings: 2,
    experience: '2 yrs+',
    criteria:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. '
  }
];

export const placeholder = '/images/placeholder.jpg';

export const placeholderBig = '/images/big-placeholder.jpg';
