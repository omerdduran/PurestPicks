const products = [
  {
    brand: '',
    category: 'Books',
    productName: 'Bauhaus',
    image: 'assets/bauhaus.webp',
    additionalImages: [],
    description: 'Bauhaus has established itself with designers and architects as a standard work and the most comprehensive collection of documents and visual material ever published on this famous school of design. Now this definitive work on Bauhaus is available again in a boxed hardcover edition.',
    designer: 'Hans M. Wingler',
    materials: ['Hardcover'],
    link: 'https://www.amazon.com/Bauhaus-Weimar-Dessau-Berlin-Chicago/dp/026223033X/ref=as_li_ss_tl?keywords=bauhaus+book&qid=1561325073&s=gateway&sr=8-1&linkCode=sl1&tag=mediumrare07-20&linkId=3723962b7a9a50760eafde2fd079cbf4&language=en_US',
  },
  {
    brand: 'LG',
    category: 'Electronics',
    productName: ' XBOOM 360 XO2',
    image: 'assets/XBOOM.webp',
    description: 'The LG XBOOM 360 XO2 is a portable Bluetooth speaker that fills the room with both sound and light: its innovative 360-degree audio technology ensures that the sound spreads evenly in all directions. ',
    designStory: 'Inspired by Scandinavian design principles, combining functionality with minimalist aesthetics.',
    materials: ['Silk Dome', 'Fiberglass'],
    awards: [
      'Red Dot Design Award 2024'
    ],
    madeIn: 'South Korea',
    link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.lg.com/uk/speakers/xboom-360/xo2tbk/%3Fsrsltid%3DAfmBOooTXDFofZds7Rl_YrnnodU0PKOzFZyjGSH0Ldod2-ZEmvdvz0xC&ved=2ahUKEwjgy92v-c2JAxUDxAIHHVKwF5EQFnoECBsQAQ&usg=AOvVaw3-crcdFLTccBkX0ZXpHwUu',
  },
  {
    brand: 'Apple, Inc.',
    category: 'Electronics',
    productName: 'AirPods Max',
    image: 'assets/AirPods Max (Optimized).webp',
    description: 'High-fidelity audio combined with industry-leading Active Noise Cancellation for an unmatched listening experience.',
    materials: ['Aluminum', 'Stainless Steel', 'Memory Foam'],
    awards: [
      'iF Design Award 2021',
      'Red Dot Design Award 2021'
    ],
    sustainability: "100% recycled tin in the solder of multiple printed circuit boards \n 100% recycled gold in the plating of multiple printed circuit boards\n100% recycled copper plating salts on multiple printed circuit boards\nMore than 90% post-consumer recycled polyester in the canopy yarn and ear cushion yarn\n100% fiber-based packaging12\n40% recycled content in fiber packaging",
    madeIn: 'USA',
    link: 'https://www.apple.com/shop/buy-airpods/airpods-max',
  },
  {
    brand: 'EXIT 112 s. r. o.',
    category: 'Furniture',
    productName: 'Phoenix',
    image: 'assets/Phoenix.webp',
    description: 'Phoenix chair is a remarkable piece of furniture. The whole chair is made from just three parts – seat, backrest, and metal base. – and you need only eight screws to assembly it. The low backrest and no armrests allow your body to move and sit in different positions. High-quality foams and plywood frame ensure durability.',
    awards: ['iF Design Award 2018'],
    madeIn: 'Czechia',
  },
  {
    brand: 'The Light Phone',
    category: 'Electronics',
    productName: 'Light Phone III',
    image: 'assets/Light Phone III  (Optimized).webp',
    description: 'A minimalist phone designed to be used as little as possible, promoting digital wellbeing and mindful technology use.',
    designStory: 'Born from the idea that technology should serve us, not enslave us. Each feature is thoughtfully considered.',
    materials: ['E-ink Display', 'Aluminum Body'],
    sustainability: 'Designed for longevity and reduced screen time',
    madeIn: 'USA',
    link: 'https://www.thelightphone.com',
  },
  {
    brand: 'Punkt.',
    category: 'Electronics',
    productName: 'MP02',
    image: 'assets/product.webp',
    description: 'A minimalist mobile phone that focuses on essential communication, designed for digital wellbeing.',
    materials: ['Glass Fiber Reinforced Body'],
    madeIn: 'Switzerland',
    link: 'https://www.punkt.ch/en/products/mp02-4g-mobile-phone/',
  },
  {
    brand: 'Veark',
    category: 'Kitchen',
    productName: 'Chef\'s Knife',
    image: 'assets/Chef\'s Knife (Optimized).webp',
    description: 'The idea for the collection was drawn from the belief that the knife is a tool - maybe even the most essential tool in the kitchen. We took visual cues from the world of traditional metal tools to create a unique signature that is both visually appealing and highly functional. ',
    materials: ['Solid Stainless Steel '],
    madeIn: 'Germany',
    link: 'https://veark.com/products/veark-tripple-drop-forge-deal-sk15-ck16-ck20?_pos=8&_sid=ecfb59ac6&_ss=r',
  },
  {
    brand: 'Lamy',
    category: 'Accessories',
    productName: 'Imporium',
    image: 'assets/imporium .webp',
    description: 'The writing instruments of the LAMY imporium premium range are characterised by their stylish design as lifestyle accessories. They offer an outstanding writing experience combined with perfect balance. The contrast between the streamlined body and the rigorous styling of the cylindrical cap is very striking. The collection, consisting of fountain pen, rollerball pen, ballpoint pen and mechanical pencil, is of an all-metal construction and is enhanced with different types of PVD coating and electroplating.\n',
    madeIn: 'Germany',
    awards: [
      'iF Design Award 2016',
      'Red Dot Design Award 2016'
    ],
    link: 'https://shop.lamy.com/de_de/fuellhalter-lamy-imporium.html#nib_grade=7334',
  },

];

export default products;