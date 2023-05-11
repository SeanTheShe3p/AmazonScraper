//Thank you to https://webtips.dev/how-to-make-interactive-bubble-charts-in-d3-js for the incredible tutorial

const data = [
  {
    name: 'Downy Cool Cotton Liquid Fabric Conditioner (Fabri',
    price: 12.9715,
    link: 'www.amazon.com/Downy-Cotton-Liquid-Conditioner-Softener/dp/B0BCCLNLT5/ref=sr_1_1?keywords=coolers&qid=1683819524&sr=8-1'
  },
  {
    name: 'Downy Cool Cotton Liquid Fabric Conditioner (Fabri',
    price: 12.9715,
    link: 'www.amazon.com/Downy-Cotton-Liquid-Conditioner-Softener/dp/B0BCCLNLT5/ref=sr_1_1?keywords=coolers&qid=1683819524&sr=8-1'
  },
  {
    name: 'Cool Coolers by Fit + Fresh, Slim Ice Packs, Reusa',
    price: 16.39,
    link: 'www.amazon.com/Fit-Fresh-Coolers-Jobsite-Camping/dp/B003FO2B5U/ref=sr_1_2?keywords=coolers&qid=1683819524&sr=8-2'
  },
  {
    name: 'Cool Coolers by Fit + Fresh, Reusable & Long-Lasti',
    price: 8.689,
    link: 'www.amazon.com/Fit-Fresh-Cool-Coolers-Adult/dp/B0057PDZJ6/ref=sr_1_3?keywords=coolers&qid=1683819524&sr=8-3'
  },
  {
    name: 'ASNUG Neck Fan, Bladeless Neck Fan, USB Rechargeab',
    price: 31.99,
    link: 'www.amazon.com/ASNUG-Bladeless-Rechargeable-Personal-Adjustable/dp/B0BL7BBS4N/ref=sr_1_4?keywords=coolers&qid=1683819524&sr=8-4'
  },
  {
    name: 'Tiblue Insulated Lunch Bag for Women/Men - Reusabl',
    price: 17.9939,
    link: 'www.amazon.com/Insulated-Lunch-Bag-Women-Men/dp/B07WVWSVL3/ref=sr_1_5?keywords=coolers&qid=1683819524&sr=8-5'
  },
  {
    name: 'Arctic Air Pure Chill 2.0 Evaporative Air Cooler b',
    price: 33.8239,
    link: 'www.amazon.com/Ontel-Evaporative-Lightweight-Oscillating-Hydro-Chill/dp/B09QH3VC1F/ref=sr_1_6?keywords=coolers&qid=1683819524&sr=8-6'
  },
  {
    name: 'Portable Air Conditioners Fan,Wavego 1400ml Evapor',
    price: 69.9979,
    link: 'www.amazon.com/Portable-Conditioners-Evaporative-Conditioner-Humidifier/dp/B0BRN2L1L5/ref=sr_1_7?keywords=coolers&qid=1683819524&sr=8-7'
  },
  {
    name: 'ExtraCharm Insulated Lunch Bag for Women/Men - Reu',
    price: 13.99,
    link: 'www.amazon.com/Insulated-Lunch-Bag-Women-Men/dp/B08DQTTFQB/ref=sr_1_8?keywords=coolers&qid=1683819524&sr=8-8'
  },
  {
    name: 'Frigidaire EFMIS129-RED Mini Portable Compact Pers',
    price: 31.2149,
    link: 'www.amazon.com/Frigidaire-EFMIS129-Portable-Personal-Freon-Free/dp/B07KZLJ7PB/ref=sr_1_9?keywords=coolers&qid=1683819524&sr=8-9'
  },
  {
    name: 'Gaiatop Portable Clip on Fan Battery Operated, Sma',
    price: 13.9924,
    link: 'www.amazon.com/Gaiatop-Portable-Operated-Powerful-Rechargeable/dp/B0BKQ7MY3L/ref=sr_1_10?keywords=coolers&qid=1683819524&sr=8-10'
  },
  {
    name: 'Dreo Tower Fan, Smart Fan for Bedroom with 90° Osc',
    price: 89.99,
    link: 'www.amazon.com/Dreo-Bedroom-Oscillating-Velocity-Standing/dp/B0BRKPCJ7P/ref=sr_1_11?keywords=coolers&qid=1683819524&sr=8-11'
  },
  {
    name: 'Coleman Chiller Series 16qt Insulated Portable Coo',
    price: 22.99,
    link: 'www.amazon.com/Coleman-Cooler-Chiller-Quart-Portable-Cooler/dp/B09HN13FN4/ref=sr_1_12?keywords=coolers&qid=1683819524&sr=8-12'
  },
  {
    name: 'havit HV-F2056 15.6"-17" Laptop Cooler Cooling Pad',
    price: 27.9939,
    link: 'www.amazon.com/HV-F2056-15-6-17-Laptop-Cooler-Cooling/dp/B00NNMB3KS/ref=sr_1_13?keywords=coolers&qid=1683819524&sr=8-13'
  },
  {
    name: 'Teacher Gifts for Women - Teacher Appreciation Gif',
    price: 25.99,
    link: 'www.amazon.com/Teacher-Gifts-Women-Appreciation-Teachers/dp/B0BQJD7SDD/ref=sr_1_14?keywords=coolers&qid=1683819524&sr=8-14'
  },
  {
    name: '54 Cans Backpack Cooler - Everlasting Comfort Beac',
    price: 27.9949,
    link: 'www.amazon.com/Cooler-Backpack-Insulated-Waterproof-Beach/dp/B08V3YJQ15/ref=sr_1_15?keywords=coolers&qid=1683819524&sr=8-15'
  },
  {
    name: 'Cooler Shock Reusable Ice Packs - Long Lasting Col',
    price: 27.5035,
    link: 'www.amazon.com/ice-pack-cooler-reusable-lunch/dp/B0773FVRZY/ref=sr_1_16?keywords=coolers&qid=1683819524&sr=8-16'
  },
  {
    name: 'Coleman Rolling Cooler | 50 Quart Xtreme 5 Day Coo',
    price: 54.4659,
    link: 'www.amazon.com/Coleman-Xtreme-Wheeled-Cooler-Quart/dp/B00AU6G4QS/ref=sr_1_17?keywords=coolers&qid=1683819524&sr=8-17'
  },
  {
    name: 'Portable Air Conditioners with Remote,1400ml Evapo',
    price: 69.99,
    link: 'www.amazon.com/Portable-Conditioners-Evaporative-Personal-Conditioner/dp/B0BRSPYHQ7/ref=sr_1_18?keywords=coolers&qid=1683819524&sr=8-18'
  },
  {
    name: 'SPARTER Backpack Cooler Insulated Leak Proof 33/45',
    price: 28.9939,
    link: 'www.amazon.com/SPARTER-Backpack-Insulated-Lightweight-Soft-Sided/dp/B08VDBW5PW/ref=sr_1_19?keywords=coolers&qid=1683819524&sr=8-19'
  },
  {
    name: 'Carhartt Deluxe Dual Compartment Insulated Lunch C',
    price: 24.99,
    link: 'www.amazon.com/Carhartt-Deluxe-Compartment-Insulated-Cooler/dp/B075LXP47V/ref=sr_1_20?keywords=coolers&qid=1683819524&sr=8-20'
  },
  {
    name: 'Flying Orb Ball, 2023 Upgraded Flying Ball Toy, Ha',
    price: 32.9937,
    link: 'www.amazon.com/Upgraded-Controlled-Boomerang-Spinner-Endless/dp/B0B8MLJBL2/ref=sr_1_21?keywords=coolers&qid=1683819524&sr=8-21'
  },
  {
    name: 'Coleman 316 Series Insulated Portable Cooler with ',
    price: 38.4949,
    link: 'www.amazon.com/Coleman-Insulated-Portable-Leak-Proof-Capacity/dp/B07XMMB6SG/ref=sr_1_22?keywords=coolers&qid=1683819524&sr=8-22'
  },
  {
    name: 'Rechargeable Game Activity Cube - 9 Fun Brain & Me',
    price: 39.99,
    link: 'www.amazon.com/Rechargeable-Game-Activity-Cube-Christmas/dp/B0BGWYD9KC/ref=sr_1_23?keywords=coolers&qid=1683819524&sr=8-23'
  },
  {
    name: 'MSEVC Neck Fan 4 Turbo 6000mAh Portable Neck Fan 3',
    price: 23.99,
    link: 'www.amazon.com/MSEVC-360%C2%B0Cooling-Bladeless-Rechargeable-Adjustment/dp/B0BQW3FM9X/ref=sr_1_24?keywords=coolers&qid=1683819524&sr=8-24'
  },
  {
    name: 'Cooluli Skincare Mini Fridge for Bedroom - Car, Of',
    price: 35.0069,
    link: 'www.amazon.com/Cooluli-Fridge-Electric-Cooler-Warmer/dp/B01G7IL3BS/ref=sr_1_25?keywords=coolers&qid=1683819524&sr=8-25'
  },
  {
    name: 'Arctic Zone Titan Deep Freeze Cooler - 30 Can Zipp',
    price: 61.44,
    link: 'www.amazon.com/Arctic-Zone-Freeze-Zipperless-HardBody/dp/B07H49BT3H/ref=sr_1_26?keywords=coolers&qid=1683819524&sr=8-26'
  },
  {
    name: 'Scented Candles Mom Gift Set - Hot Mama, Sugar Mam',
    price: 19.5,
    link: 'www.amazon.com/Scented-Candles-Mom-Gift-Set/dp/B0BWX4TFRQ/ref=sr_1_27?keywords=coolers&qid=1683819524&sr=8-27'
  },
  {
    name: 'Nail Art Studio for Girls - Nail Polish Kit for Ki',
    price: 19.99,
    link: 'www.amazon.com/Nail-Art-Studio-Girls-Stickers/dp/B0B4BRLFF9/ref=sr_1_28?keywords=coolers&qid=1683819524&sr=8-28'
  },
  {
    name: 'TopTopper Mattress Topper Queen Size, Cooling Matt',
    price: 79.99,
    link: 'www.amazon.com/TopTopper-Mattress-Sleepers-Alternative-Overfilled/dp/B0BXWKC5WZ/ref=sr_1_29?keywords=coolers&qid=1683819524&sr=8-29'
  },
  {
    name: 'AKIRES Portable Evaporative Air Cooler,30" Swamp C',
    price: 129.99,
    link: 'www.amazon.com/AKIRES-Oscillating-Evaporative-Control-Bladeless/dp/B0B72NX3QP/ref=sr_1_30?keywords=coolers&qid=1683819524&sr=8-30'
  },
  {
    name: 'Macadamla Weinas Lunch bag for Women/Men,Insulated',
    price: 10.7912,
    link: 'www.amazon.com/Insulated-Collapsible-Leakproof-Adjustable-Shoulder/dp/B09Y361GYB/ref=sr_1_31?keywords=coolers&qid=1683819524&sr=8-31'
  },
  {
    name: 'MIYCOO Lunch Bag for Women Men Double Deck Lunch B',
    price: 21.5927,
    link: 'www.amazon.com/Insulated-Leakproof-Double-Cooler-MIYCOO/dp/B095YC5M82/ref=sr_1_32?keywords=coolers&qid=1683819524&sr=8-32'
  },
  {
    name: 'Arctic Air Freedom Personal Air Cooler - Portable ',
    price: 22.4729,
    link: 'www.amazon.com/Arctic-Air-Freedom-Personal-Cooler/dp/B08SHJ47JL/ref=sr_1_33?keywords=coolers&qid=1683819524&sr=8-33'
  },
  {
    name: 'Coleman Chiller Series 9qt Insulated Portable Cool',
    price: 19.99,
    link: 'www.amazon.com/Coleman-Chiller-9-Quart-Portable-Cooler/dp/B09HMZT1C5/ref=sr_1_34?keywords=coolers&qid=1683819524&sr=8-34'
  },
  {
    name: 'BEAR Humidifiers for Bedroom, 3L Cool Mist Humidif',
    price: 19.9922,
    link: 'www.amazon.com/Humidifiers-Diffuser-humidifiers-Adjustable-Shut-off/dp/B0BLRKXCXH/ref=sr_1_35?keywords=coolers&qid=1683819524&sr=8-35'
  },
  {
    name: 'AstroAI Mini Fridge 2.0 Gen, 6 Liter/8 Cans Makeup',
    price: 57.99,
    link: 'www.amazon.com/AstroAI-Thermoelectric-Refrigerators-Cosmetics-Detachable/dp/B09TW9SZLP/ref=sr_1_36?keywords=coolers&qid=1683819524&sr=8-36'
  },
  {
    name: 'Fit & Fresh XL Cool Coolers Freezer Slim Ice Pack ',
    price: 5.3927,
    link: 'www.amazon.com/Fit-Fresh-Coolers-Freezer-Multi-Colored/dp/B08QDWMMW5/ref=sr_1_37?keywords=coolers&qid=1683819524&sr=8-37'
  },
  {
    name: 'Glade Air Freshener, Room Spray, Stay Cool Waterme',
    price: 3.984,
    link: 'www.amazon.com/Glade-Freshener-Room-Spray-Watermelon/dp/B0B1F91CXW/ref=sr_1_38?keywords=coolers&qid=1683819524&sr=8-38'
  },
  {
    name: 'Gaiatop Mini Portable Stroller Fan, Battery Operat',
    price: 16.99,
    link: 'www.amazon.com/Gaiatop-Portable-Detachable-Rechargeable-Treadmill/dp/B0BKQCYJMF/ref=sr_1_39?keywords=coolers&qid=1683819524&sr=8-39'
  },
  {
    name: 'Light Up Basketball - Glow in the Dark Basketball ',
    price: 34.99,
    link: 'www.amazon.com/Light-Up-Basketball-Glowing-Activity/dp/B0BVRXQCQX/ref=sr_1_40?keywords=coolers&qid=1683819524&sr=8-40'
  },
  {
    name: 'Spin Art Machine Kit - Paint Spiral Station Center',
    price: 19.9934,
    link: 'www.amazon.com/Spin-Art-Machine-Kit-Workstation/dp/B0BMW3KNHZ/ref=sr_1_41?keywords=coolers&qid=1683819524&sr=8-41'
  },
  {
    name: 'Noctua NH-D15 chromax.Black, Dual-Tower CPU Cooler',
    price: 119.95129,
    link: 'www.amazon.com/Noctua-NH-D15-chromax-Black-Dual-Tower-Cooler/dp/B07Y87YHRH/ref=sr_1_42?keywords=coolers&qid=1683819524&sr=8-42'
  },
  {
    name: 'Coleman 316 Series Insulated Portable Cooler with ',
    price: 109.99115,
    link: 'www.amazon.com/Coleman-Chest-Quart-Wheeled-Cooler/dp/B08LMVJJ9Q/ref=sr_1_43?keywords=coolers&qid=1683819524&sr=8-43'
  },
  {
    name: 'Cozymaker Queen Size 100% Waterproof Mattress Prot',
    price: 27.99,
    link: 'www.amazon.com/Cozymaker-Waterproof-Mattress-Protector%EF%BC%8CPremium-Breathable/dp/B0BBLS91MX/ref=sr_1_44?keywords=coolers&qid=1683819524&sr=8-44'      
  },
  {
    name: 'BREEZOME 6L Humidifiers for Bedroom Large Room & E',
    price: 49.9979,
    link: 'www.amazon.com/BREEZOME-Humidifiers-Essential-Ultrasonic-Humidistat/dp/B0BHL1C969/ref=sr_1_45?keywords=coolers&qid=1683819524&sr=8-45'
  },
  {
    name: 'PBRO Insulated Lunch Bag for Women,Large Reusable ',
    price: 15.8425,
    link: 'www.amazon.com/PBRO-Lunch-Waterproof-Box-Adjustable/dp/B0B1Q15FZ9/ref=sr_1_46?keywords=coolers&qid=1683819524&sr=8-46'
  },
  {
    name: 'Homemate Queen Mattress Topper,1800TC Cooling Matt',
    price: 69.9979,
    link: 'www.amazon.com/Homemate-Mattress-Cooling-Alternative-Overfilled/dp/B0BMKS3HLG/ref=sr_1_47?keywords=coolers&qid=1683819524&sr=8-47'
  },
  {
    name: 'Owala FreeSip Insulated Stainless Steel Water Bott',
    price: 22.5927,
    link: 'www.amazon.com/Owala-FreeSip-Insulated-Stainless-BPA-Free/dp/B0BZYC7N7X/ref=sr_1_48?keywords=coolers&qid=1683819524&sr=8-48'
  }
];

  const width = window.innerWidth;
  const height = window.innerHeight;
  const colors = {
      blue : "#325ca8",
      orange: "#ebd834"
  };

  



  const generateChart = data => {
    const bubble = data => d3.pack().size([width, height]).padding(2)(d3.hierarchy({ children: data }).sum(d => d.price));

    const svg = d3.select('#bubble-chart').style('width', width).style('height', height);
    
    const root = bubble(data);
    const tooltip = d3.select('.tooltip');

    const node = svg.selectAll().data(root.children).enter().append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);
    
    const circle = node.append('circle').style('fill', d => colors.blue).on('mouseover', function (e, d) {
      tooltip.select('a').attr('href', d.data.link).text(d.data.link);
      tooltip.style('visibility', 'visible');
     d3.select(this).style('stroke', '#222');
  })
  .on('mousemove', e => tooltip.style('top', `${e.pageY}px`).style('left', `${e.pageX + 10}px`))
  .on('mouseout', function () {d3.select(this).style('stroke', 'none');
      return tooltip.style('visibility', 'hidden');
  })
  .on('click', (e, d) => window.open(d.data.link));
  
  const label = node.append('text').style('fill', d => colors.orange).attr('dy', 2).text(d => d.data.name.substring(0, d.r / 3));
 

    node.transition().ease(d3.easeExpInOut).duration(1000).attr('transform', d => `translate(${d.x}, ${d.y})`);
     
    circle.transition().ease(d3.easeExpInOut).duration(1000).attr('r', d => d.r);
     
    label.transition().delay(700).ease(d3.easeExpInOut).duration(1000).style('opacity', 1)


};

(async () => {
    generateChart(data);
})();