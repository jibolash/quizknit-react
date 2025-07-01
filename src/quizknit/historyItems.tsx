export type Category = {
  key: string;
  label: string;
  children?: {
    title: string;
    description: string;
  }[];
};

export const categories: Category[] = [
  {
    key: "world-war-ii",
    label: "World War II",
    children: [
      {
        title: "Battle of Stalingrad",
        description: "Turning point on the Eastern Front",
      },
      {
        title: "D‑Day",
        description: "Allied invasion of Normandy, June 6 1944",
      },
      {
        title: "Pearl Harbor",
        description: "Japanese attack leading to US entry into the war",
      },
      {
        title: "Holocaust",
        description: "Systematic genocide of six million Jews",
      },
      {
        title: "Battle of Midway",
        description: "Decisive naval battle in the Pacific",
      },
      {
        title: "Operation Market Garden",
        description: "Allied airborne operation in the Netherlands",
      },
    ],
  },
  {
    key: "world-war-i",
    label: "World War I",
    children: [
      {
        title: "Trench Warfare",
        description: "Static warfare on the Western Front",
      },
      {
        title: "Battle of the Somme",
        description: "One of the bloodiest battles in history",
      },
      {
        title: "Gallipoli Campaign",
        description: "Failed Allied campaign in Ottoman Turkey",
      },
      {
        title: "Zimmermann Telegram",
        description: "German proposal that brought the US into the war",
      },
      {
        title: "Treaty of Versailles",
        description: "Peace treaty that ended the war in 1919",
      },
    ],
  },
  {
    key: "american-revolution",
    label: "American Revolution",
    children: [
      {
        title: "Boston Tea Party",
        description: "Protest against British taxation, 1773",
      },
      {
        title: "Declaration of Independence",
        description: "July 4 1776 document",
      },
      {
        title: "Battle of Saratoga",
        description: "Turning point in the Revolutionary War",
      },
      {
        title: "Valley Forge",
        description: "Winter encampment of Continental Army, 1777–78",
      },
      {
        title: "Treaty of Paris",
        description: "1783 treaty that ended the war",
      },
    ],
  },
  {
    key: "american-civil-war",
    label: "American Civil War",
    children: [
      {
        title: "Battle of Gettysburg",
        description: "Largest battle of the war, July 1863",
      },
      {
        title: "Emancipation Proclamation",
        description: "Lincoln’s 1863 decree freeing the slaves",
      },
      {
        title: "Siege of Vicksburg",
        description: "Union victory splitting the Confederacy",
      },
      {
        title: "Sherman’s March to the Sea",
        description: "Scorched‑earth campaign through Georgia",
      },
      {
        title: "Appomattox Court House",
        description: "Lee’s surrender, April 9 1865",
      },
    ],
  },
  {
    key: "cold-war",
    label: "Cold War",
    children: [
      {
        title: "Berlin Blockade",
        description: "First major crisis of the Cold War, 1948–49",
      },
      {
        title: "Cuban Missile Crisis",
        description: "Closest the superpowers came to nuclear war, 1962",
      },
      {
        title: "Korean War",
        description: "1950–53 conflict on the Korean Peninsula",
      },
      {
        title: "Vietnam War",
        description: "US involvement in Southeast Asia, 1955–75",
      },
      {
        title: "Space Race",
        description: "Competition for supremacy in space exploration",
      },
    ],
  },
  {
    key: "napoleonic-wars",
    label: "Napoleonic Wars",
    children: [
      {
        title: "Battle of Austerlitz",
        description: "Napoleon’s greatest victory, 1805",
      },
      {
        title: "Continental System",
        description: "Economic blockade against the UK",
      },
      {
        title: "Peninsular War",
        description: "Guerrilla war in Spain and Portugal",
      },
      { title: "Invasion of Russia", description: "Disastrous 1812 campaign" },
      {
        title: "Battle of Waterloo",
        description: "Napoleon’s final defeat, 1815",
      },
    ],
  },
  {
    key: "hundred-years-war",
    label: "Hundred Years’ War",
    children: [
      { title: "Battle of Crécy", description: "Major English victory, 1346" },
      {
        title: "Black Death Impact",
        description: "Plague’s effect on the war, 1347–51",
      },
      {
        title: "Battle of Agincourt",
        description: "Decisive English victory, 1415",
      },
      { title: "Joan of Arc", description: "French heroine and martyr, 1429" },
      { title: "Treaty of Castillon", description: "Ended the war in 1453" },
    ],
  },
  {
    key: "french-revolution",
    label: "French Revolution",
    children: [
      {
        title: "Storming of the Bastille",
        description: "July 14 1789 uprising",
      },
      {
        title: "Reign of Terror",
        description: "Period of political purges, 1793–94",
      },
      {
        title: "Directory Period",
        description: "Government of France, 1795–99",
      },
      { title: "Rise of Napoleon", description: "Coup of 18 Brumaire, 1799" },
    ],
  },
  {
    key: "enlightenment",
    label: "The Enlightenment",
    children: [
      {
        title: "Voltaire",
        description: "Advocate of civil liberties and religious tolerance",
      },
      {
        title: "John Locke",
        description: "Father of liberalism and social contract theory",
      },
      { title: "Montesquieu", description: "Theory of separation of powers" },
      { title: "Rousseau", description: "Philosopher of the general will" },
      { title: "Denis Diderot", description: "Editor of the Encyclopédie" },
    ],
  },
  {
    key: "industrial-revolution",
    label: "Industrial Revolution",
    children: [
      { title: "Steam Engine", description: "Powered factories and transport" },
      {
        title: "Textile Industry",
        description: "First industry to industrialize",
      },
      { title: "Urbanization", description: "Mass migration to cities" },
      {
        title: "Child Labor",
        description: "Widespread exploitation in factories",
      },
      { title: "Railroads", description: "Revolutionized land transport" },
    ],
  },
  {
    key: "renaissance",
    label: "Renaissance",
    children: [
      {
        title: "Leonardo da Vinci",
        description: "Polymath: artist, engineer, inventor",
      },
      {
        title: "Michelangelo",
        description:
          "Sculptor of David and painter of the Sistine Chapel ceiling",
      },
      { title: "Humanism", description: "Revival of classical learning" },
      { title: "Florence", description: "Cradle of the Renaissance" },
      { title: "Patronage", description: "Medici family support of the arts" },
    ],
  },
  {
    key: "reformation",
    label: "Reformation",
    children: [
      { title: "Martin Luther", description: "95 Theses and break with Rome" },
      { title: "Protestantism", description: "New branches of Christianity" },
      {
        title: "Counter-Reformation",
        description: "Catholic Church’s response",
      },
      {
        title: "Council of Trent",
        description: "Major Counter-Reformation council",
      },
    ],
  },
  {
    key: "scientific-revolution",
    label: "Scientific Revolution",
    children: [
      {
        title: "Galileo Galilei",
        description: "Astronomical observations support heliocentrism",
      },
      {
        title: "Isaac Newton",
        description: "Laws of motion and universal gravitation",
      },
      {
        title: "Heliocentrism",
        description: "Sun‑centered model of the solar system",
      },
      {
        title: "Roger Bacon",
        description: "Early advocate of the scientific method",
      },
    ],
  },
  {
    key: "ancient-africa",
    label: "Ancient African Civilizations",
    children: [
      { title: "Kingdom of Kush", description: "Located in modern‑day Sudan" },
      { title: "Carthage", description: "Phoenician colony in Tunisia" },
      { title: "Aksum", description: "Trading empire in Ethiopia" },
      { title: "Great Zimbabwe", description: "Stone city in southern Africa" },
    ],
  },
  {
    key: "medieval-africa",
    label: "Medieval African Kingdoms",
    children: [
      {
        title: "Ghana Empire",
        description: "Early West African trading state",
      },
      { title: "Mali Empire", description: "Empire of Mansa Musa" },
      {
        title: "Songhai Empire",
        description: "One of the largest Islamic empires in history",
      },
      { title: "Benin Kingdom", description: "Renowned for its bronzes" },
    ],
  },
  {
    key: "modern-africa",
    label: "Modern African History",
    children: [
      {
        title: "Scramble for Africa",
        description: "Late‑19th‑c. colonization by European powers",
      },
      {
        title: "Independence Movements",
        description: "20th‑c. decolonization",
      },
      {
        title: "Apartheid",
        description:
          "System of institutionalized racial segregation in South Africa",
      },
      {
        title: "Pan‑Africanism",
        description: "Movement for African unity and solidarity",
      },
    ],
  },
  {
    key: "pre-columbian-americas",
    label: "Pre‑Columbian Americas",
    children: [
      {
        title: "Maya Civilization",
        description: "Advanced calendar and writing system",
      },
      {
        title: "Aztec Empire",
        description: "Based in Tenochtitlán (modern Mexico City)",
      },
      { title: "Inca Empire", description: "Stretching along the Andes" },
      {
        title: "Mississippian Culture",
        description: "Built earthen mounds in North America",
      },
    ],
  },
  {
    key: "colonial-latin-america",
    label: "Colonial Latin America",
    children: [
      {
        title: "Spanish Conquest",
        description: "Fall of the Aztec and Inca empires",
      },
      {
        title: "Portuguese Brazil",
        description: "Sugar plantations and colonization",
      },
      {
        title: "Encomienda System",
        description: "Labor system exploiting indigenous peoples",
      },
      {
        title: "Jesuit Missions",
        description: "Religious outposts in South America",
      },
    ],
  },
  {
    key: "latin-american-independence",
    label: "Latin American Independence",
    children: [
      {
        title: "Simón Bolívar",
        description: "Liberator of northern South America",
      },
      {
        title: "Mexican War of Independence",
        description: "1810–21 struggle against Spain",
      },
      {
        title: "Brazilian Independence",
        description: "Declared by Dom Pedro I, 1822",
      },
      {
        title: "Gran Colombia",
        description: "Failed union of northern South American states",
      },
    ],
  },
  {
    key: "westward-expansion",
    label: "American Westward Expansion",
    children: [
      {
        title: "Oregon Trail",
        description: "Pioneering route to the Pacific Northwest",
      },
      {
        title: "Trail of Tears",
        description: "Forced relocation of Native Americans",
      },
      {
        title: "California Gold Rush",
        description: "1848 mass migration to California",
      },
      { title: "Homestead Act", description: "1862 law granting free land" },
    ],
  },
  {
    key: "women-suffrage",
    label: "Suffrage Movements",
    children: [
      {
        title: "Seneca Falls Convention",
        description: "First women’s rights convention, 1848",
      },
      {
        title: "19th Amendment",
        description: "Grants women the vote in the US, 1920",
      },
      {
        title: "Chartism",
        description: "British working‑class movement, 1838–48",
      },
      {
        title: "Women’s Social and Political Union",
        description: "Militant British suffrage group",
      },
    ],
  },
  {
    key: "civil-rights-movement",
    label: "US Civil Rights Movement",
    children: [
      {
        title: "Brown v. Board of Education",
        description: "Desegregated public schools, 1954",
      },
      {
        title: "Montgomery Bus Boycott",
        description: "1955–56 protest against segregated transit",
      },
      {
        title: "March on Washington",
        description: "1963 rally for jobs and freedom",
      },
      {
        title: "Civil Rights Act",
        description: "1964 law outlawing discrimination",
      },
    ],
  },
  {
    key: "proxy-wars",
    label: "Cold War Proxy Wars",
    children: [
      { title: "Korean War", description: "1950–53 conflict, divided Korea" },
      {
        title: "Vietnam War",
        description: "US‑backed South vs. Communist North",
      },
      {
        title: "Soviet–Afghan War",
        description: "1979–89 insurgency against the USSR",
      },
      {
        title: "Angolan Civil War",
        description: "Proxy conflict in post‑colonial Africa",
      },
    ],
  },
  {
    key: "religious-wars",
    label: "Wars of Religion",
    children: [
      {
        title: "Thirty Years’ War",
        description: "1618–48 conflict in Central Europe",
      },
      {
        title: "French Wars of Religion",
        description: "16th‑c. civil wars between Catholics and Huguenots",
      },
      {
        title: "English Civil War",
        description: "Mid‑17th‑c. struggle over monarchy vs. Parliament",
      },
      {
        title: "Reconquista",
        description: "Christian reconquest of Iberia from Muslims",
      },
    ],
  },
  {
    key: "feudal-japan",
    label: "Feudal Japan",
    children: [
      { title: "Samurai", description: "Warrior class with code of bushidō" },
      {
        title: "Shogunate",
        description: "Military government led by a shōgun",
      },
      {
        title: "Sengoku Period",
        description: "Age of Warring States, 15th–16th c.",
      },
      {
        title: "Meiji Restoration",
        description: "1868 modernization and imperial rule restored",
      },
    ],
  },
  {
    key: "chinese-dynasties",
    label: "Chinese Dynasties",
    children: [
      {
        title: "Han Dynasty",
        description: "Golden age of Chinese arts and expansion",
      },
      {
        title: "Tang Dynasty",
        description: "Prosperity and cultural flowering",
      },
      {
        title: "Song Dynasty",
        description: "Technological and economic advances",
      },
      {
        title: "Ming Dynasty",
        description: "Maritime expeditions of Zheng He",
      },
      {
        title: "Qing Dynasty",
        description: "Last imperial dynasty, 1644–1912",
      },
    ],
  },
  {
    key: "mongol-empire",
    label: "Mongol Empire",
    children: [
      { title: "Genghis Khan", description: "Founder and Great Khan" },
      {
        title: "Pax Mongolica",
        description: "Trade and cultural exchange across Eurasia",
      },
      {
        title: "Invasion of Europe",
        description: "Campaigns into Eastern Europe and Russia",
      },
      {
        title: "Kublai Khan",
        description: "Founder of the Yuan Dynasty in China",
      },
    ],
  },
  {
    key: "ottoman-empire",
    label: "Ottoman Empire",
    children: [
      {
        title: "Siege of Constantinople",
        description: "1453 conquest ending Byzantium",
      },
      { title: "Janissaries", description: "Elite Ottoman infantry corps" },
      {
        title: "Suleiman the Magnificent",
        description: "16th‑c. golden age sultan",
      },
      {
        title: "Tanzimat Reforms",
        description: "19th‑c. modernization efforts",
      },
    ],
  },
  {
    key: "islamic-golden-age",
    label: "Islamic Golden Age",
    children: [
      {
        title: "House of Wisdom",
        description: "Center of learning in Baghdad",
      },
      { title: "Al‑Khwarizmi", description: "Father of algebra" },
      { title: "Avicenna", description: "Philosopher and physician" },
      { title: "Averroes", description: "Influential Islamic philosopher" },
    ],
  },
  {
    key: "mughal-empire",
    label: "Mughal Empire",
    children: [
      { title: "Babur", description: "Founder of the empire in 1526" },
      { title: "Akbar", description: "Empire at its zenith under his rule" },
      { title: "Shah Jahan", description: "Builder of the Taj Mahal" },
      { title: "Aurangzeb", description: "Last major Mughal emperor" },
    ],
  },
  {
    key: "russian-tsardom",
    label: "Tsardom of Russia",
    children: [
      {
        title: "Ivan the Terrible",
        description: "First crowned tsar, 1547–84",
      },
      {
        title: "Time of Troubles",
        description: "Succession crisis, 1598–1613",
      },
      { title: "Romanov Dynasty", description: "Ruled Russia 1613–1917" },
    ],
  },
  {
    key: "soviet-era",
    label: "Soviet Era",
    children: [
      {
        title: "Bolshevik Revolution",
        description: "1917 overthrow of the monarchy",
      },
      {
        title: "Stalin’s Five‑Year Plans",
        description: "Rapid industrialization",
      },
      { title: "Great Purge", description: "1936–38 political repression" },
      { title: "Khrushchev Thaw", description: "Post‑Stalin liberalization" },
    ],
  },
  {
    key: "post-soviet-russia",
    label: "Post‑Soviet Russia",
    children: [
      { title: "Fall of the USSR", description: "1991 dissolution" },
      {
        title: "Yeltsin Era",
        description: "1991–99 economic and political reforms",
      },
      {
        title: "Putin’s Russia",
        description: "2000–present consolidation of power",
      },
      { title: "Chechen Wars", description: "1990s conflicts in Chechnya" },
    ],
  },
  {
    key: "science-tech-history",
    label: "History of Science & Technology",
    children: [
      {
        title: "Printing Press",
        description: "Revolutionized knowledge spread",
      },
      {
        title: "Telegraph",
        description: "First instant long‑distance communication",
      },
      { title: "Internet", description: "Global data network, late 20th c." },
      {
        title: "Nuclear Power",
        description: "Energetic breakout of atomic age",
      },
    ],
  },
  {
    key: "maritime-exploration",
    label: "Maritime Exploration",
    children: [
      {
        title: "Age of Discovery",
        description: "15th–17th c. European exploration",
      },
      {
        title: "Christopher Columbus",
        description: "1492 voyage to the Americas",
      },
      { title: "Vasco da Gama", description: "First sea route to India" },
      {
        title: "Ferdinand Magellan",
        description: "First circumnavigation (1519–22)",
      },
    ],
  },
  {
    key: "colonialism-imperialism",
    label: "Colonialism & Imperialism",
    children: [
      {
        title: "British Empire",
        description: "“The empire on which the sun never sets”",
      },
      {
        title: "French Empire",
        description: "Colonial holdings in Africa and Asia",
      },
      {
        title: "Scramble for Africa",
        description: "Berlin Conference, 1884–85",
      },
      {
        title: "Dutch East India Company",
        description: "Early multinational corporation",
      },
    ],
  },
  {
    key: "middle-east-history",
    label: "Middle East History",
    children: [
      { title: "Ottoman Rule", description: "1299–1922 imperial period" },
      {
        title: "Arab–Israeli Conflict",
        description: "Ongoing 20th/21st‑c. disputes",
      },
      {
        title: "Iranian Revolution",
        description: "1979 overthrow of the Shah",
      },
      {
        title: "Gulf Wars",
        description: "1990–91 & 2003 conflicts in the Persian Gulf",
      },
    ],
  },
  {
    key: "south-asian-history",
    label: "South Asian History",
    children: [
      {
        title: "Indus Valley Civilization",
        description: "Bronze‑age civilization, 3300–1300 BCE",
      },
      { title: "Maurya Empire", description: "Chandragupta and Ashoka" },
      { title: "British Raj", description: "Colonial rule, 1858–1947" },
      {
        title: "Partition of India",
        description: "1947 division into India and Pakistan",
      },
    ],
  },
  {
    key: "southeast-asian-history",
    label: "Southeast Asian History",
    children: [
      { title: "Khmer Empire", description: "Builders of Angkor Wat" },
      {
        title: "Colonial Era",
        description: "French Indochina, Dutch East Indies",
      },
      { title: "Vietnam War", description: "Proxy conflict on the peninsula" },
      {
        title: "Indonesian Independence",
        description: "Declared 1945, recognized 1949",
      },
    ],
  },
  {
    key: "agricultural-revolution",
    label: "Agricultural Revolutions",
    children: [
      {
        title: "Neolithic Revolution",
        description: "Transition to farming, c. 10,000 BCE",
      },
      {
        title: "Crop Domestication",
        description: "Wheat, rice, maize, and more",
      },
      {
        title: "Enclosure Movement",
        description: "18th‑c. British land consolidation",
      },
    ],
  },
  {
    key: "prehistoric-eras",
    label: "Prehistoric Eras",
    children: [
      {
        title: "Paleolithic",
        description: "Old Stone Age and hunter‑gatherers",
      },
      {
        title: "Mesolithic",
        description: "Transitional period, microlith tools",
      },
      {
        title: "Neolithic",
        description: "Nature of early agriculture and settlements",
      },
    ],
  },
  {
    key: "cultural-movements",
    label: "Cultural Movements",
    children: [
      {
        title: "Romanticism",
        description: "Late 18th–mid‑19th c. artistic movement",
      },
      {
        title: "Realism",
        description: "Mid‑19th c. reaction against Romanticism",
      },
      {
        title: "Modernism",
        description: "Late 19th–20th c. break with tradition",
      },
      {
        title: "Postmodernism",
        description: "Late 20th c. questioning of grand narratives",
      },
    ],
  },
  {
    key: "art-history",
    label: "History of Art",
    children: [
      { title: "Baroque", description: "17th‑c. drama and grandeur" },
      { title: "Rococo", description: "18th‑c. playful elegance" },
      {
        title: "Impressionism",
        description: "Light and color in late 19th c.",
      },
      { title: "Cubism", description: "Early 20th‑c. geometric abstraction" },
      {
        title: "Abstract Expressionism",
        description: "Post‑WWII American movement",
      },
    ],
  },
  {
    key: "religious-history",
    label: "History of Religion",
    children: [
      {
        title: "Buddhism",
        description: "Founded by Siddhartha Gautama, c. 5th c. BCE",
      },
      {
        title: "Christianity",
        description: "Life and teachings of Jesus of Nazareth",
      },
      {
        title: "Islam",
        description: "Founded by Prophet Muhammad in 7th c. CE",
      },
      {
        title: "Hinduism",
        description: "Ancient Vedic traditions of South Asia",
      },
      {
        title: "Reformation",
        description: "16th‑c. split within Western Christianity",
      },
    ],
  },
  {
    key: "bronze-age",
    label: "Bronze Age",
    children: [
      {
        title: "Emergence of Bronze Metallurgy",
        description: "Development of alloying copper and tin",
      },
      {
        title: "Sumerian City‑States",
        description: "Early urban centres in Mesopotamia",
      },
      {
        title: "Indus Valley Bronze Age",
        description: "Harappan civilization flourishing circa 2600–1900 BCE",
      },
      {
        title: "Minoan Civilization",
        description: "Bronze Age culture on Crete",
      },
      {
        title: "Egyptian Bronze Age",
        description: "Early dynastic and Old Kingdom periods",
      },
    ],
  },
  {
    key: "iron-age",
    label: "Iron Age",
    children: [
      {
        title: "Iron Smelting Techniques",
        description: "Advances in furnace and bloomery design",
      },
      {
        title: "Celtic Societies",
        description: "Iron Age tribes of Western Europe",
      },
      {
        title: "Iron Age China",
        description: "Zhou dynasty ironworking and warfare",
      },
      {
        title: "Nok Culture",
        description: "Early iron‑working in West Africa",
      },
      {
        title: "La Tène Culture",
        description: "Late Iron Age art and artifacts",
      },
    ],
  },
  {
    key: "hellenistic-period",
    label: "Hellenistic Period",
    children: [
      {
        title: "Death of Alexander the Great",
        description: "323 BCE fragmentation of his empire",
      },
      { title: "Ptolemaic Egypt", description: "Greek‑ruled dynasty in Egypt" },
      {
        title: "Seleucid Empire",
        description: "Realm spanning from Anatolia to India",
      },
      {
        title: "Hellenistic Philosophy",
        description: "Schools like Stoicism and Epicureanism",
      },
      {
        title: "Hellenistic Art & Architecture",
        description: "Blend of Greek and local styles",
      },
    ],
  },
  {
    key: "age-of-sail",
    label: "Age of Sail",
    children: [
      {
        title: "Development of the Carrack",
        description: "Large, ocean‑going vessel",
      },
      { title: "Clipper Ships", description: "Fast 19th‑c. merchant vessels" },
      {
        title: "Naval Exploration Tactics",
        description: "Celestial navigation & dead reckoning",
      },
      {
        title: "Piracy & Privateering",
        description: "State‑sanctioned maritime raiding",
      },
      {
        title: "Maritime Trade Networks",
        description: "Global exchange via sailing routes",
      },
    ],
  },
  {
    key: "silk-road",
    label: "Silk Road",
    children: [
      {
        title: "Overland Caravan Routes",
        description: "Connecting East Asia and Europe",
      },
      { title: "City of Samarkand", description: "Key Silk Road trading hub" },
      {
        title: "Spread of Buddhism",
        description: "Monastic networks along the route",
      },
      {
        title: "Silk Production",
        description: "Sericulture’s economic impact",
      },
      {
        title: "Cultural Exchanges",
        description: "Art, religion, and technology transfer",
      },
    ],
  },
  {
    key: "trans-saharan-trade",
    label: "Trans‑Saharan Trade",
    children: [
      { title: "Gold‑Salt Trade", description: "Economy of Sahel and Sahara" },
      { title: "Camel Caravans", description: "The “ships of the desert”" },
      { title: "Trading Cities", description: "Timbuktu, Gao, and Djenne" },
      {
        title: "Spread of Islam",
        description: "Religious conversion along the routes",
      },
      {
        title: "Cultural Synthesis",
        description: "Blend of Berber, Arab, and African cultures",
      },
    ],
  },
  {
    key: "spice-trade",
    label: "Spice Trade",
    children: [
      {
        title: "Maluku “Spice Islands”",
        description: "Origins of cloves and nutmeg",
      },
      {
        title: "Portuguese Monopoly",
        description: "16th‑c. control of spice routes",
      },
      {
        title: "Dutch East India Company",
        description: "VOC’s Asian trading empire",
      },
      { title: "European Demand", description: "Culinary and medicinal uses" },
      {
        title: "Decline & Competition",
        description: "Shift to other colonial powers",
      },
    ],
  },
  {
    key: "transatlantic-slave-trade",
    label: "Transatlantic Slave Trade",
    children: [
      { title: "Middle Passage", description: "Brutal ocean crossing" },
      {
        title: "Triangular Trade",
        description: "Europe‑Africa‑Americas exchange",
      },
      {
        title: "Abolition Movements",
        description: "19th‑c. campaigns for freedom",
      },
      {
        title: "Economic Impact",
        description: "Plantation economies’ reliance",
      },
      { title: "Cultural Legacy", description: "Diaspora and heritage" },
    ],
  },
  {
    key: "gilded-age",
    label: "Gilded Age",
    children: [
      {
        title: "Industrial Tycoons",
        description: "Rockefeller, Carnegie, Vanderbilt",
      },
      { title: "Urbanization", description: "Rapid growth of American cities" },
      { title: "Labor Unions", description: "Knights of Labor, AFL formation" },
      {
        title: "Robber Barons",
        description: "Monopolies and anti‑trust concerns",
      },
      {
        title: "Technological Innovations",
        description: "Telegraph, electricity, steel",
      },
    ],
  },
  {
    key: "reconstruction-era",
    label: "Reconstruction Era",
    children: [
      { title: "13th Amendment", description: "Abolition of slavery, 1865" },
      {
        title: "Radical Reconstruction",
        description: "Congressional control of policy",
      },
      {
        title: "Freedmen’s Bureau",
        description: "Aid to formerly enslaved people",
      },
      {
        title: "Rise of Jim Crow",
        description: "Legalized segregation in the South",
      },
      { title: "Southern Resistance", description: "Violence and the KKK" },
    ],
  },
  {
    key: "progressive-era",
    label: "Progressive Era",
    children: [
      {
        title: "Trust‑Busting",
        description: "Breaking up corporate monopolies",
      },
      { title: "Women’s Suffrage", description: "19th Amendment, 1920" },
      {
        title: "Labor Reforms",
        description: "Child‑labor laws, workplace safety",
      },
      {
        title: "Regulatory Agencies",
        description: "FDA, FTC, and the Federal Reserve",
      },
      {
        title: "Social Gospel Movement",
        description: "Faith‑based social reform",
      },
    ],
  },
  {
    key: "roaring-twenties",
    label: "Roaring Twenties",
    children: [
      { title: "Jazz Age", description: "Harlem Renaissance and music" },
      { title: "Flappers", description: "New woman of the 1920s" },
      { title: "Speakeasies", description: "Underground Prohibition venues" },
      {
        title: "Stock Market Boom",
        description: "Speculation leading to 1929 crash",
      },
      { title: "Consumer Culture", description: "Automobiles, radios, cinema" },
    ],
  },
  {
    key: "great-depression",
    label: "Great Depression",
    children: [
      {
        title: "Stock Market Crash",
        description: "October 1929 financial collapse",
      },
      { title: "Dust Bowl", description: "Severe 1930s drought in the Plains" },
      {
        title: "New Deal Policies",
        description: "Roosevelt’s relief and reform programs",
      },
      { title: "Unemployment Crisis", description: "Peak rates over 25 %" },
      {
        title: "Social Security Act",
        description: "Foundation of US welfare state",
      },
    ],
  },
  {
    key: "prohibition-era",
    label: "Prohibition Era",
    children: [
      { title: "18th Amendment", description: "National ban on alcohol, 1920" },
      {
        title: "Bootlegging",
        description: "Illegal liquor production and smuggling",
      },
      {
        title: "Organized Crime",
        description: "Rise of mob figures like Capone",
      },
      { title: "Speakeasies", description: "Hidden bars evading enforcement" },
      { title: "21st Amendment", description: "Repeal of Prohibition, 1933" },
    ],
  },
  {
    key: "european-revolutions-1848",
    label: "European Revolutions of 1848",
    children: [
      {
        title: "February Revolution (France)",
        description: "Overthrow of Louis‑Philippe",
      },
      {
        title: "Hungarian Revolution",
        description: "Push for independence from Austria",
      },
      { title: "German March Revolt", description: "Calls for national unity" },
      { title: "Italian Uprisings", description: "Risorgimento‑era protests" },
      {
        title: "Aftermath & Failure",
        description: "Conservative restorations",
      },
    ],
  },
  {
    key: "spanish-civil-war",
    label: "Spanish Civil War",
    children: [
      {
        title: "Nationalists vs Republicans",
        description: "Ideological factions",
      },
      { title: "International Brigades", description: "Foreign volunteers" },
      {
        title: "Guernica Bombing",
        description: "Pablo Picasso’s tragic motif",
      },
      {
        title: "Franco’s Rise",
        description: "Authoritarian regime establishment",
      },
      { title: "Post‑War Exile", description: "Republican diaspora" },
    ],
  },
  {
    key: "russian-civil-war",
    label: "Russian Civil War",
    children: [
      {
        title: "Reds vs Whites",
        description: "Bolsheviks against counter‑revolutionaries",
      },
      {
        title: "War Communism",
        description: "Nationalization and requisition",
      },
      {
        title: "Allied Intervention",
        description: "Foreign troops on Russian soil",
      },
      { title: "Famine & Disease", description: "Humanitarian catastrophe" },
      {
        title: "Creation of the USSR",
        description: "Soviet federation formed, 1922",
      },
    ],
  },
  {
    key: "taiping-rebellion",
    label: "Taiping Rebellion",
    children: [
      { title: "Hong Xiuquan", description: "Self‑proclaimed Heavenly King" },
      {
        title: "Heavenly Kingdom of Peace",
        description: "Millenarian theocracy",
      },
      { title: "Military Campaigns", description: "Capture of Nanjing" },
      { title: "Qing Suppression", description: "Imperial counter‑offensive" },
      { title: "Legacy & Casualties", description: "20–30 million lives lost" },
    ],
  },
  {
    key: "boxer-rebellion",
    label: "Boxer Rebellion",
    children: [
      {
        title: "Anti‑Foreigner Uprising",
        description: "Society of Righteous and Harmonious Fists",
      },
      {
        title: "Siege of Beijing",
        description: "Legation quarter under attack",
      },
      {
        title: "Eight‑Nation Alliance",
        description: "International relief force",
      },
      { title: "Boxer Protocol", description: "1901 punitive treaty" },
      { title: "Impact on Qing Dynasty", description: "Accelerated decline" },
    ],
  },
  {
    key: "mexican-revolution",
    label: "Mexican Revolution",
    children: [
      { title: "Francisco Madero", description: "1910 uprising leader" },
      { title: "Emiliano Zapata", description: "Champion of land reform" },
      {
        title: "Constitution of 1917",
        description: "Foundational revolutionary charter",
      },
      { title: "Pancho Villa", description: "Northern guerrilla commander" },
      {
        title: "Post‑Revolution Mexico",
        description: "PRI’s political dominance",
      },
    ],
  },
  {
    key: "indian-independence-movement",
    label: "Indian Independence Movement",
    children: [
      {
        title: "Indian National Congress",
        description: "Founded 1885 political party",
      },
      { title: "Gandhi’s Salt March", description: "1930 nonviolent protest" },
      { title: "Quit India Movement", description: "1942 mass uprising" },
      { title: "Muslim League", description: "Partition‑advocating party" },
      { title: "1947 Independence", description: "End of British rule" },
    ],
  },
  {
    key: "portuguese-empire",
    label: "Portuguese Empire",
    children: [
      {
        title: "Voyage of Vasco da Gama",
        description: "1498 sea route to India",
      },
      { title: "Colonial Brazil", description: "Portugal’s largest territory" },
      { title: "Goa Colony", description: "Long‑held Indian outpost" },
      { title: "African Possessions", description: "Angola and Mozambique" },
      {
        title: "19th‑c. Decline",
        description: "Loss of Brazil and global influence",
      },
    ],
  },
  {
    key: "dutch-empire",
    label: "Dutch Empire",
    children: [
      {
        title: "VOC Foundation",
        description: "1602–1799 Dutch East India Company",
      },
      {
        title: "Spice Islands Control",
        description: "Maluku archipelago trade",
      },
      { title: "Cape Colony", description: "Dutch settlement in South Africa" },
      {
        title: "Dutch West Indies",
        description: "Caribbean plantation islands",
      },
      { title: "Decolonization", description: "Indonesian independence, 1949" },
    ],
  },
  {
    key: "decolonization",
    label: "Decolonization",
    children: [
      { title: "End of Empires", description: "Post‑WWII independence wave" },
      {
        title: "UN Trusteeships",
        description: "Administration of former colonies",
      },
      {
        title: "Bandung Conference",
        description: "1955 Asian-African solidarity",
      },
      { title: "Algerian War", description: "1954–62 struggle against France" },
      {
        title: "Post‑Colonial States",
        description: "Nation‑building challenges",
      },
    ],
  },
  {
    key: "spanish-flu-pandemic",
    label: "Spanish Flu Pandemic",
    children: [
      { title: "1918 Outbreak", description: "Global H1N1 influenza wave" },
      {
        title: "Public Health Responses",
        description: "Quarantines and mask mandates",
      },
      {
        title: "Second & Third Waves",
        description: "Recurring lethality, 1918–19",
      },
      { title: "Mortality Impact", description: "Estimated 50 million deaths" },
      { title: "Legacy on Medicine", description: "Advances in epidemiology" },
    ],
  },
  {
    key: "aids-epidemic",
    label: "AIDS Epidemic",
    children: [
      { title: "Early Outbreak", description: "Recognition in 1981" },
      { title: "Ryan White Case", description: "Public awareness in the US" },
      {
        title: "ACT UP Activism",
        description: "Fight for research and treatment",
      },
      {
        title: "Antiretroviral Therapy",
        description: "Life‑saving drug regimens",
      },
      { title: "Global Impact", description: "Sub-Saharan Africa crisis" },
    ],
  },
  {
    key: "history-of-medicine",
    label: "History of Medicine",
    children: [
      {
        title: "Hippocratic Tradition",
        description: "Ancient Greek clinical practice",
      },
      {
        title: "Galenic Medicine",
        description: "Roman‑era anatomical theories",
      },
      { title: "Germ Theory", description: "Pasteur and Koch breakthroughs" },
      {
        title: "Discovery of Vaccines",
        description: "From smallpox to modern immunology",
      },
      {
        title: "Modern Medical Technologies",
        description: "MRI, antibiotics, robotics",
      },
    ],
  },
  {
    key: "smallpox-in-the-americas",
    label: "Smallpox in the Americas",
    children: [
      { title: "European Introduction", description: "1520s first outbreaks" },
      {
        title: "Indigenous Devastation",
        description: "High mortality among native populations",
      },
      {
        title: "Variolation Practices",
        description: "Early inoculation methods",
      },
      {
        title: "Jenner’s Vaccine",
        description: "1796 development of cowpox vaccine",
      },
      {
        title: "Global Eradication",
        description: "WHO declared eradicated, 1980",
      },
    ],
  },
  {
    key: "chernobyl-disaster",
    label: "Chernobyl Disaster",
    children: [
      { title: "Reactor Explosion", description: "April 26 1986 catastrophe" },
      {
        title: "Radiation Release",
        description: "Massive environmental contamination",
      },
      {
        title: "Evacuation Zone",
        description: "Exclusion of Pripyat and surroundings",
      },
      {
        title: "Health Effects",
        description: "Thyroid cancers and long‑term illness",
      },
      {
        title: "Safety Reforms",
        description: "Global nuclear regulation changes",
      },
    ],
  },
  {
    key: "fukushima-disaster",
    label: "Fukushima Disaster",
    children: [
      {
        title: "2011 Tsunami Trigger",
        description: "Magnitude 9.0 quake and wave",
      },
      { title: "Reactor Meltdowns", description: "Three core failures" },
      {
        title: "Mass Evacuations",
        description: "100,000+ residents displaced",
      },
      { title: "Environmental Impact", description: "Radioactive water leaks" },
      { title: "Policy Changes", description: "Japan’s nuclear energy review" },
    ],
  },
  {
    key: "atomic-age",
    label: "Atomic Age",
    children: [
      { title: "Manhattan Project", description: "US nuclear weapons program" },
      { title: "Hiroshima & Nagasaki", description: "August 1945 bombings" },
      {
        title: "Cold War Arms Race",
        description: "US vs USSR nuclear buildup",
      },
      {
        title: "Nuclear Power Plants",
        description: "Civilian energy applications",
      },
      {
        title: "Disarmament Movements",
        description: "Treaties like START and NPT",
      },
    ],
  },
  {
    key: "apollo-program",
    label: "Apollo Program",
    children: [
      {
        title: "Apollo 11 Moon Landing",
        description: "July 1969 historic achievement",
      },
      { title: "Saturn V Rocket", description: "Most powerful launch vehicle" },
      {
        title: "Apollo 13 Crisis",
        description: "“Houston, we have a problem”",
      },
      { title: "Lunar Science", description: "Rock samples and experiments" },
      {
        title: "Program Cancellation",
        description: "Budget cuts after Apollo 17",
      },
    ],
  },
  {
    key: "history-of-aviation",
    label: "History of Aviation",
    children: [
      {
        title: "Wright Brothers’ Flight",
        description: "1903 first powered airplane",
      },
      {
        title: "Commercial Airlines",
        description: "1920s passenger service beginnings",
      },
      {
        title: "Jet Engine Invention",
        description: "Turbine propulsion advances",
      },
      { title: "WWII Aircraft", description: "Fighter and bomber innovations" },
      {
        title: "Spaceplane Concepts",
        description: "Early reusable-craft designs",
      },
    ],
  },
  {
    key: "jet-age",
    label: "Jet Age",
    children: [
      {
        title: "Boeing 707",
        description: "First successful commercial jetliner",
      },
      { title: "Concorde Supersonic", description: "1969 Franco‑British SST" },
      {
        title: "Deregulation Impact",
        description: "US Airline Deregulation Act, 1978",
      },
      { title: "Wide‑bodied Jets", description: "Boeing 747 and mass travel" },
      { title: "Low‑Cost Carriers", description: "Rise of budget airlines" },
    ],
  },
  {
    key: "history-of-radio",
    label: "History of Radio",
    children: [
      {
        title: "Marconi’s Experiments",
        description: "Early wireless telegraphy",
      },
      { title: "AM vs FM", description: "Amplitude vs frequency modulation" },
      { title: "Radio in Propaganda", description: "WWII broadcasts and news" },
      {
        title: "Golden Age of Radio",
        description: "1930s–40s entertainment era",
      },
      { title: "Transition to TV", description: "Decline of radio drama" },
    ],
  },
  {
    key: "history-of-television",
    label: "History of Television",
    children: [
      {
        title: "Mechanical TV Era",
        description: "1920s–30s experimental systems",
      },
      { title: "Broadcast Networks", description: "Rise of BBC, NBC, CBS" },
      { title: "Color Television", description: "NTSC and PAL standards" },
      { title: "Cable & Satellite", description: "Expanded channel offerings" },
      {
        title: "Digital Streaming",
        description: "21st‑c. on‑demand platforms",
      },
    ],
  },
  {
    key: "history-of-film",
    label: "History of Film",
    children: [
      { title: "Silent Era", description: "1900–1927 no synchronized sound" },
      {
        title: "Golden Age of Hollywood",
        description: "1930s–50s studio system",
      },
      {
        title: "New Wave Movements",
        description: "French, Japanese, and others",
      },
      {
        title: "CGI & Blockbusters",
        description: "Late 20th‑c. visual effects",
      },
      { title: "Independent Cinema", description: "Rise of arthouse films" },
    ],
  },
  {
    key: "history-of-photography",
    label: "History of Photography",
    children: [
      {
        title: "Daguerreotype Process",
        description: "1839 first commercial method",
      },
      {
        title: "Portrait Studios",
        description: "19th‑c. photographic businesses",
      },
      { title: "Kodak Revolution", description: "Snapshots for the masses" },
      { title: "Digital Photography", description: "Sensor‑based imaging era" },
      {
        title: "Smartphone Cameras",
        description: "Democratization of photography",
      },
    ],
  },
  {
    key: "history-of-cartography",
    label: "History of Cartography",
    children: [
      {
        title: "Ptolemy’s Geographia",
        description: "2nd‑c. CE map compendium",
      },
      {
        title: "Mercator Projection",
        description: "1569 navigational map design",
      },
      {
        title: "Age of Discovery Mapping",
        description: "New world charts and atlases",
      },
      {
        title: "Topographic Surveys",
        description: "18th‑19th c. land mapping",
      },
      {
        title: "GIS Technologies",
        description: "Modern digital mapping systems",
      },
    ],
  },
  {
    key: "history-of-banking-and-finance",
    label: "History of Banking & Finance",
    children: [
      { title: "Medici Banking", description: "14th‑c. Florentine dynasty" },
      {
        title: "Gold Standard",
        description: "19th‑20th c. fixed currency system",
      },
      {
        title: "Central Banking",
        description: "Establishment of the Fed and others",
      },
      {
        title: "Stock Exchanges",
        description: "Amsterdam, NYSE, and global markets",
      },
      {
        title: "Financial Crises",
        description: "Panics, crashes, and bailouts",
      },
    ],
  },
];

// 50 additional leader‑focused categories for QuizKnit
export const historicalFigures: Category[] = [
  // 1
  {
    key: "founding-fathers-united-states",
    label: "U.S. Founding Fathers",
    children: [
      {
        title: "Thomas Jefferson",
        description:
          "Principal author of the Declaration of Independence and 3rd U.S. President",
      },
      {
        title: "John Adams",
        description: "Key advocate for independence and 2nd U.S. President",
      },
      {
        title: "James Madison",
        description: "“Father of the Constitution” and 4th U.S. President",
      },
      {
        title: "Alexander Hamilton",
        description: "First Treasury Secretary who shaped early U.S. finances",
      },
    ],
  },

  // 2
  {
    key: "enlightenment-reformers",
    label: "Enlightenment Reformers",
    children: [
      {
        title: "Voltaire",
        description: "French writer who championed civil liberties",
      },
      {
        title: "John Locke",
        description:
          "English philosopher of natural rights and social contract",
      },
      {
        title: "Baron de Montesquieu",
        description: "Proponent of separation of powers",
      },
      {
        title: "Jean‑Jacques Rousseau",
        description: "Influencer of popular sovereignty and modern democracy",
      },
    ],
  },

  // 3
  {
    key: "civil-rights-icons",
    label: "Civil Rights Icons",
    children: [
      {
        title: "Martin Luther King Jr.",
        description:
          "Leader of the U.S. civil‑rights movement and advocate of non‑violence",
      },
      {
        title: "Rosa Parks",
        description:
          "Sparks Montgomery Bus Boycott by refusing to give up her seat",
      },
      {
        title: "César Chávez",
        description: "Organizer for farm‑workers’ rights in the U.S.",
      },
      {
        title: "Malcolm X",
        description:
          "Prominent spokesman for Black empowerment and Nation of Islam",
      },
    ],
  },

  // 4
  {
    key: "early-female-rulers",
    label: "Early Female Rulers",
    children: [
      {
        title: "Hatshepsut",
        description: "Powerful female pharaoh of Egypt’s 18th Dynasty",
      },
      {
        title: "Empress Wu Zetian",
        description: "Only woman to rule China in her own name",
      },
      {
        title: "Boudica",
        description: "Iceni queen who led revolt against Roman rule in Britain",
      },
      {
        title: "Queen Seondeok",
        description: "First reigning queen of Korea’s Silla Kingdom",
      },
    ],
  },

  // 5
  {
    key: "renaissance-polymaths",
    label: "Renaissance Polymaths",
    children: [
      {
        title: "Leonardo da Vinci",
        description:
          "Artist‑engineer whose curiosity epitomized the Renaissance",
      },
      {
        title: "Michelangelo",
        description: "Sculptor‑painter of the Sistine Chapel and David",
      },
      {
        title: "Niccolò Machiavelli",
        description: "Political theorist author of “The Prince”",
      },
      {
        title: "Galileo Galilei",
        description:
          "Astronomer who advanced modern science and faced Inquisition",
      },
    ],
  },

  // 6
  {
    key: "explorer-conquerors",
    label: "Explorer‑Conquerors",
    children: [
      {
        title: "Christopher Columbus",
        description: "Opened trans‑Atlantic exploration for Europe (1492)",
      },
      { title: "Hernán Cortés", description: "Conqueror of the Aztec Empire" },
      {
        title: "Ferdinand Magellan",
        description: "Led first circumnavigation of Earth",
      },
      {
        title: "Francis Drake",
        description:
          "English privateer who circumnavigated the globe and raided Spanish fleets",
      },
    ],
  },

  // 7
  {
    key: "rashidun-caliphs",
    label: "Rashidun Caliphs",
    children: [
      {
        title: "Abu Bakr",
        description: "First caliph and close companion of Prophet Muhammad",
      },
      {
        title: "Umar ibn al‑Khattab",
        description: "Second caliph who greatly expanded the Islamic empire",
      },
      {
        title: "Uthman ibn Affan",
        description: "Third caliph who standardized the Quran",
      },
      {
        title: "Ali ibn Abi Talib",
        description: "Fourth caliph and cousin/son‑in‑law of Muhammad",
      },
    ],
  },

  // 8
  {
    key: "papal-leaders",
    label: "Influential Popes",
    children: [
      {
        title: "Pope Urban II",
        description: "Initiated the First Crusade in 1095",
      },
      {
        title: "Pope Leo X",
        description: "Pope during the start of the Protestant Reformation",
      },
      {
        title: "Pope Pius IX",
        description:
          "Longest‑reigning elected pope, proclaimed Immaculate Conception",
      },
      {
        title: "Pope John Paul II",
        description:
          "Played key role in ending Communist rule in Eastern Europe",
      },
    ],
  },

  // 9
  {
    key: "african-independence-leaders",
    label: "African Independence Leaders",
    children: [
      {
        title: "Kwame Nkrumah",
        description:
          "Led Ghana to be first sub‑Saharan nation to gain independence (1957)",
      },
      {
        title: "Jomo Kenyatta",
        description: "First President of independent Kenya",
      },
      {
        title: "Patrice Lumumba",
        description: "First democratically elected leader of Congo",
      },
      {
        title: "Haile Selassie",
        description:
          "Ethiopian emperor who resisted Italian invasion and spurred Pan‑Africanism",
      },
    ],
  },

  // 10
  {
    key: "latin-american-revolutionaries",
    label: "Latin American Revolutionaries",
    children: [
      {
        title: "Che Guevara",
        description:
          "Argentinian revolutionary in Cuban and Bolivian movements",
      },
      {
        title: "José de San Martín",
        description: "Liberator of Argentina, Chile, and Peru",
      },
      {
        title: "Miguel Hidalgo",
        description: "Priest who launched Mexico’s war of independence (1810)",
      },
      {
        title: "Francisco I. Madero",
        description: "Sparked the Mexican Revolution against Díaz",
      },
    ],
  },

  // 11
  {
    key: "industrial-age-tycoons",
    label: "Industrial Age Tycoons",
    children: [
      {
        title: "Andrew Carnegie",
        description: "Steel magnate and philanthropist",
      },
      {
        title: "John D. Rockefeller",
        description: "Founder of Standard Oil, world’s first billionaire",
      },
      {
        title: "Cornelius Vanderbilt",
        description: "Railroad and shipping titan",
      },
      {
        title: "J. P. Morgan",
        description:
          "Banker who reorganized industries and bailed out U.S. treasury",
      },
    ],
  },

  // 12
  {
    key: "tech-pioneers",
    label: "Technology Pioneers",
    children: [
      {
        title: "Steve Jobs",
        description: "Co‑founder of Apple and design visionary",
      },
      {
        title: "Bill Gates",
        description: "Co‑founder of Microsoft and philanthropist",
      },
      {
        title: "Tim Berners‑Lee",
        description: "Inventor of the World Wide Web",
      },
      { title: "Ada Lovelace", description: "First computer programmer" },
    ],
  },

  // 13
  {
    key: "nobel-peace-laureates",
    label: "Notable Nobel Peace Laureates",
    children: [
      {
        title: "Mother Teresa",
        description: "Missionary who served the poor in India",
      },
      {
        title: "Malala Yousafzai",
        description: "Youngest laureate, advocate for girls’ education",
      },
      {
        title: "Henry Kissinger",
        description:
          "U.S. diplomat (controversial) honored for Vietnam cease‑fire",
      },
      {
        title: "Aung San Suu Kyi",
        description: "Burmese democracy icon (later tarnished record)",
      },
    ],
  },

  // 14
  {
    key: "environmental-activists",
    label: "Environmental Activists",
    children: [
      {
        title: "Rachel Carson",
        description:
          "Author of “Silent Spring,” sparked environmental movement",
      },
      {
        title: "Greta Thunberg",
        description: "Swedish youth climate activist",
      },
      {
        title: "Wangari Maathai",
        description: "Kenyan founder of Green Belt Movement",
      },
      {
        title: "Al Gore",
        description: "Former U.S. Vice President and climate advocate",
      },
    ],
  },

  // 15
  {
    key: "humanitarian-leaders",
    label: "Humanitarian Leaders",
    children: [
      {
        title: "Florence Nightingale",
        description: "Modern nursing pioneer and medical reformer",
      },
      {
        title: "Clara Barton",
        description: "Founder of the American Red Cross",
      },
      {
        title: "Eleanor Roosevelt",
        description: "Championed Universal Declaration of Human Rights",
      },
      {
        title: "José Andrés",
        description:
          "Chef who founded World Central Kitchen for disaster relief",
      },
    ],
  },

  // 16
  {
    key: "scientific-revolutionaries",
    label: "Scientific Revolutionaries",
    children: [
      {
        title: "Isaac Newton",
        description: "Formulated laws of motion and universal gravitation",
      },
      {
        title: "Johannes Kepler",
        description: "Planetary motion laws that shaped astronomy",
      },
      {
        title: "Francis Bacon",
        description: "Father of the scientific method",
      },
      {
        title: "Robert Boyle",
        description: "Pioneer of modern chemistry (Boyle’s law)",
      },
    ],
  },

  // 17
  {
    key: "philosopher-kings",
    label: "Philosopher‑Kings",
    children: [
      {
        title: "Marcus Aurelius",
        description: "Roman emperor and Stoic philosopher",
      },
      {
        title: "Khosrow I",
        description:
          "Sasanian ruler known for justice and patronage of learning",
      },
      {
        title: "Al‑Mamun",
        description: "Abbasid caliph who founded House of Wisdom",
      },
      {
        title: "Frederick II of Prussia",
        description: "Enlightened absolutist fostering arts and science",
      },
    ],
  },

  // 18
  {
    key: "socialist-theorists",
    label: "Socialist & Marxist Thinkers",
    children: [
      {
        title: "Karl Marx",
        description: "Co‑author of “The Communist Manifesto”",
      },
      {
        title: "Friedrich Engels",
        description: "Collaborator with Marx and social theorist",
      },
      {
        title: "Rosa Luxemburg",
        description: "Revolutionary socialist and anti‑war activist",
      },
      {
        title: "Eduard Bernstein",
        description: "Father of revisionist socialism",
      },
    ],
  },

  // 19
  {
    key: "communist-leaders",
    label: "Communist Leaders",
    children: [
      {
        title: "Vladimir Lenin",
        description: "Led Bolshevik Revolution and founded USSR",
      },
      {
        title: "Joseph Stalin",
        description: "Ruled Soviet Union through WWII and early Cold War",
      },
      {
        title: "Mao Zedong",
        description: "Founding father of the People’s Republic of China",
      },
      {
        title: "Fidel Castro",
        description: "Led Cuban Revolution and governed for five decades",
      },
    ],
  },

  // 20
  {
    key: "fascist-leaders",
    label: "Fascist Era Leaders",
    children: [
      { title: "Benito Mussolini", description: "Founder of Italian Fascism" },
      { title: "Adolf Hitler", description: "Dictator of Nazi Germany" },
      {
        title: "Francisco Franco",
        description: "Spanish nationalist leader post‑civil war",
      },
      {
        title: "Hideki Tojo",
        description: "Japanese Prime Minister during WWII",
      },
    ],
  },

  // 21
  {
    key: "postcolonial-nation-builders",
    label: "Post‑Colonial Nation Builders (Asia)",
    children: [
      {
        title: "Lee Kuan Yew",
        description: "Founding Prime Minister who transformed Singapore",
      },
      {
        title: "Ho Chi Minh",
        description: "Leader of Vietnamese independence and reunification",
      },
      {
        title: "Sukarno",
        description: "Proclaimed Indonesia’s independence and first president",
      },
      {
        title: "Mahathir Mohamad",
        description: "Modernized Malaysia through Vision 2020",
      },
    ],
  },

  // 22
  {
    key: "eu-architects",
    label: "European Union Architects",
    children: [
      {
        title: "Robert Schuman",
        description: "Co‑founder of European Coal and Steel Community",
      },
      {
        title: "Jean Monnet",
        description: "Visionary of European integration",
      },
      {
        title: "Konrad Adenauer",
        description: "West German chancellor who backed European unity",
      },
      {
        title: "Jacques Delors",
        description:
          "President of European Commission (1985‑95) who advanced single market",
      },
    ],
  },

  // 23
  {
    key: "cold-war-leaders",
    label: "Cold War Leaders",
    children: [
      {
        title: "Harry S. Truman",
        description: "U.S. President who adopted containment policy",
      },
      {
        title: "Nikita Khrushchev",
        description: "Soviet Premier during Cuban Missile Crisis",
      },
      {
        title: "John F. Kennedy",
        description: "U.S. President who faced Berlin and Cuba crises",
      },
      {
        title: "Mikhail Gorbachev",
        description: "Initiated perestroika and glasnost, ending Cold War",
      },
    ],
  },

  // 24
  {
    key: "space-race-visionaries",
    label: "Space Race Visionaries",
    children: [
      {
        title: "Sergei Korolev",
        description: "Chief Soviet rocket engineer behind Sputnik",
      },
      {
        title: "Wernher von Braun",
        description: "Led NASA’s Saturn V program",
      },
      { title: "Yuri Gagarin", description: "First human in outer space" },
      {
        title: "Neil Armstrong",
        description: "First person to walk on the Moon",
      },
    ],
  },

  // 25
  {
    key: "education-reformers",
    label: "Education Reformers",
    children: [
      {
        title: "Horace Mann",
        description: "Father of American public schooling",
      },
      {
        title: "Maria Montessori",
        description: "Developed child‑centered Montessori method",
      },
      {
        title: "Booker T. Washington",
        description: "Founded Tuskegee Institute for Black education",
      },
      {
        title: "Paulo Freire",
        description: "Author of “Pedagogy of the Oppressed”",
      },
    ],
  },

  // 26
  {
    key: "medical-pioneers",
    label: "Medical Pioneers",
    children: [
      { title: "Hippocrates", description: "Father of Western medicine" },
      { title: "Edward Jenner", description: "Developed smallpox vaccine" },
      { title: "Louis Pasteur", description: "Germ theory and pasteurization" },
      {
        title: "Jonas Salk",
        description: "Created first effective polio vaccine",
      },
    ],
  },

  // 27
  {
    key: "civil-engineering-innovators",
    label: "Engineering Innovators",
    children: [
      {
        title: "Isambard Kingdom Brunel",
        description: "Victorian era engineer of bridges and steamships",
      },
      {
        title: "Gustave Eiffel",
        description:
          "Designed the Eiffel Tower and Statue of Liberty framework",
      },
      {
        title: "John Roebling",
        description: "Designer of the Brooklyn Bridge",
      },
      {
        title: "Emily Roebling",
        description:
          "Steered Brooklyn Bridge completion after husband’s illness",
      },
    ],
  },

  // 28
  {
    key: "womens-rights-leaders",
    label: "Women's Rights Leaders",
    children: [
      {
        title: "Susan B. Anthony",
        description: "Pioneered U.S. women’s suffrage movement",
      },
      { title: "Emmeline Pankhurst", description: "Led British suffragettes" },
      {
        title: "Betty Friedan",
        description:
          "Author of “The Feminine Mystique,” sparked second‑wave feminism",
      },
      {
        title: "Gloria Steinem",
        description: "Prominent feminist writer and organizer",
      },
    ],
  },

  // 29
  {
    key: "religious-reformers",
    label: "Religious Reformers",
    children: [
      { title: "Martin Luther", description: "Sparked Protestant Reformation" },
      { title: "John Calvin", description: "Developed Calvinist theology" },
      { title: "Guru Nanak", description: "Founded Sikhism" },
      {
        title: "Joseph Smith",
        description: "Founded the Latter‑day Saint movement",
      },
    ],
  },

  // 30
  {
    key: "nonviolent-spiritual-leaders",
    label: "Non‑Violent Spiritual Leaders",
    children: [
      {
        title: "Mahatma Gandhi",
        description: "Led India’s nonviolent independence movement",
      },
      {
        title: "Dalai Lama XIV",
        description: "Tibetan spiritual leader advocating peaceful resistance",
      },
      {
        title: "Thich Nhat Hanh",
        description: "Vietnamese Buddhist monk promoting mindfulness and peace",
      },
      {
        title: "Desmond Tutu",
        description:
          "South African cleric fighting apartheid with moral leadership",
      },
    ],
  },

  // 31
  {
    key: "indigenous-chiefs",
    label: "Indigenous Leaders",
    children: [
      {
        title: "Sitting Bull",
        description: "Hunkpapa Lakota chief who resisted U.S. expansion",
      },
      {
        title: "Tecumseh",
        description: "Shawnee leader who sought pan‑Native confederation",
      },
      {
        title: "Chief Joseph",
        description: "Nez Perce leader famous for 1877 retreat",
      },
      {
        title: "Wilma Mankiller",
        description: "First female Principal Chief of Cherokee Nation",
      },
    ],
  },

  // 32
  {
    key: "pacific-island-statesmen",
    label: "Pacific Island Statesmen",
    children: [
      {
        title: "Sir Apirana Ngata",
        description: "New Zealand Māori leader and reformer",
      },
      {
        title: "José Ramos‑Horta",
        description: "East Timor independence leader and Nobel laureate",
      },
      {
        title: "Ratu Sir Lala Sukuna",
        description: "Fijian statesman and founder of modern Fiji institutions",
      },
      {
        title: "Hilda Heine",
        description: "First female President of Marshall Islands",
      },
    ],
  },

  // 33
  {
    key: "caribbean-independence-figures",
    label: "Caribbean Independence Leaders",
    children: [
      {
        title: "Errol Barrow",
        description: "Father of Barbados’ independence",
      },
      {
        title: "Michael Manley",
        description: "Jamaican prime minister and social reformer",
      },
      {
        title: "Eric Williams",
        description: "Led Trinidad and Tobago to independence",
      },
      {
        title: "Sir Arthur Lewis",
        description:
          "Saint Lucian economist and Nobel laureate, development theory",
      },
    ],
  },

  // 34
  {
    key: "scandinavian-monarchs",
    label: "Scandinavian Monarchs",
    children: [
      { title: "Gustav Vasa", description: "Founder of modern Sweden (1523)" },
      {
        title: "Queen Margrethe II",
        description: "Longest‑serving current head of state in Denmark",
      },
      {
        title: "Haakon VII",
        description: "Led Norway through WWII occupation",
      },
      {
        title: "Charles XII",
        description: "Warrior king of Sweden during Great Northern War",
      },
    ],
  },

  // 35
  {
    key: "balkan-statesmen",
    label: "Balkan Statesmen",
    children: [
      {
        title: "Josip Broz Tito",
        description: "Yugoslav president who kept nation non‑aligned",
      },
      {
        title: "Eleftherios Venizelos",
        description: "Modernized Greece and expanded its territory",
      },
      {
        title: "Alija Izetbegović",
        description: "First President of independent Bosnia",
      },
      {
        title: "Zoran Đinđić",
        description: "Serbian reformist prime minister (assassinated 2003)",
      },
    ],
  },

  // 36
  {
    key: "african-kingdom-rulers",
    label: "African Kingdom Rulers",
    children: [
      {
        title: "Shaka Zulu",
        description: "Transformed Zulu military organization",
      },
      { title: "Queen Nzinga", description: "Resisted Portuguese in Angola" },
      {
        title: "Samori Touré",
        description:
          "Founder of Wassoulou Empire who fought French colonization",
      },
      {
        title: "Menelik II",
        description: "Ethiopian emperor who defeated Italy at Adwa",
      },
    ],
  },

  // 37
  {
    key: "south-asian-prime-ministers",
    label: "South Asian Prime Ministers",
    children: [
      {
        title: "Indira Gandhi",
        description: "First and only female Prime Minister of India (to date)",
      },
      {
        title: "Benazir Bhutto",
        description: "First woman to head a Muslim‑majority nation (Pakistan)",
      },
      {
        title: "Sheikh Hasina",
        description: "Longest‑serving Prime Minister of Bangladesh",
      },
      {
        title: "Sirimavo Bandaranaike",
        description: "World’s first female Prime Minister (Sri Lanka)",
      },
    ],
  },

  // 38
  {
    key: "southeast-asian-presidents",
    label: "Southeast Asian Presidents",
    children: [
      {
        title: "Corazon Aquino",
        description: "Restored democracy in the Philippines after Marcos",
      },
      {
        title: "Susilo Bambang Yudhoyono",
        description: "First directly elected President of Indonesia",
      },
      {
        title: "Lee Hsin‑Loong",
        description: "Prime Minister steering Singapore’s digital era",
      },
      { title: "Aung San", description: "Father of Burmese independence" },
    ],
  },

  // 39
  {
    key: "middle-eastern-monarchs",
    label: "Middle Eastern Monarchs",
    children: [
      {
        title: "King Abdulaziz Al Saud",
        description: "Founded modern Saudi Arabia",
      },
      {
        title: "Shah Mohammad Reza Pahlavi",
        description: "Last Shah of Iran before 1979 revolution",
      },
      {
        title: "King Hussein of Jordan",
        description: "Steered Jordan through regional conflicts (1952–1999)",
      },
      {
        title: "Sultan Qaboos bin Said",
        description: "Modernized Oman and pursued neutral diplomacy",
      },
    ],
  },

  // 40
  {
    key: "roman-republic-consuls",
    label: "Roman Republic Consuls",
    children: [
      {
        title: "Lucius Junius Brutus",
        description: "Led overthrow of last Roman king",
      },
      {
        title: "Gaius Marius",
        description: "Military reforms transformed Roman legions",
      },
      {
        title: "Lucius Cornelius Sulla",
        description: "Dictator who reformed constitution",
      },
      {
        title: "Gnaeus Pompey Magnus",
        description: "Successful general in late Republic",
      },
    ],
  },

  // 41
  {
    key: "absolute-monarchs",
    label: "Absolute Monarchs of the Baroque",
    children: [
      {
        title: "Philip II of Spain",
        description: "Global empire at its height, Spanish Armada",
      },
      {
        title: "Charles II of England",
        description: "Restoration monarch who re‑established the crown",
      },
      {
        title: "Maria Theresa",
        description:
          "Archduchess of Austria who reformed empire’s administration",
      },
      {
        title: "Catherine the Great",
        description: "Expanded and westernized Russia",
      },
    ],
  },

  // 42
  {
    key: "german-italian-unifiers",
    label: "Unification Architects (19th C.)",
    children: [
      {
        title: "Otto von Bismarck",
        description: "Engineered unification of Germany",
      },
      {
        title: "Camillo di Cavour",
        description: "Leading figure in Italian unification",
      },
      {
        title: "Victor Emmanuel II",
        description: "First king of a united Italy",
      },
      {
        title: "Helmut Kohl",
        description: "Oversaw German reunification in 1990",
      },
    ],
  },

  // 43
  {
    key: "anti-colonial-strategists",
    label: "Anti‑Colonial Strategists (19th C.)",
    children: [
      { title: "José Rizal", description: "Philippine nationalist and martyr" },
      {
        title: "Dadabhai Naoroji",
        description: "Grand Old Man of Indian nationalism",
      },
      {
        title: "Jamāl al‑Dīn al‑Afghānī",
        description: "Advocated pan‑Islamic anti‑imperialism",
      },
      {
        title: "Emilio Aguinaldo",
        description: "Leader in Philippine Revolution and first president",
      },
    ],
  },

  // 44
  {
    key: "post-soviet-presidents",
    label: "Post‑Soviet Presidents",
    children: [
      {
        title: "Boris Yeltsin",
        description: "First President of the Russian Federation",
      },
      {
        title: "Nursultan Nazarbayev",
        description: "Led Kazakhstan from independence to 2019",
      },
      {
        title: "Levón Ter‑Petrosyan",
        description: "First President of independent Armenia",
      },
      {
        title: "Lennart Meri",
        description: "Guided Estonia’s Western integration",
      },
    ],
  },

  // 45
  {
    key: "un-secretaries-general",
    label: "UN Secretaries‑General",
    children: [
      {
        title: "Dag Hammarskjöld",
        description: "Enhanced UN peacekeeping before dying in office (1961)",
      },
      {
        title: "Kofi Annan",
        description: "Focused on UN reform and Millennium Goals",
      },
      {
        title: "Ban Ki‑moon",
        description: "Advanced climate diplomacy and SDGs",
      },
      {
        title: "António Guterres",
        description: "Former Portuguese PM now leading UN (2017‑ )",
      },
    ],
  },

  // 46
  {
    key: "feminist-political-pioneers",
    label: "Feminist Political Pioneers",
    children: [
      {
        title: "Jeannette Rankin",
        description: "First woman elected to U.S. Congress (1916)",
      },
      {
        title: "Sirimavo Bandaranaike",
        description: "World’s first female Prime Minister (Sri Lanka)",
      },
      {
        title: "Golda Meir",
        description: "First and only female Prime Minister of Israel",
      },
      {
        title: "Ellen Johnson Sirleaf",
        description: "Africa’s first elected female head of state (Liberia)",
      },
    ],
  },

  // 47
  {
    key: "lgbtq-political-leaders",
    label: "LGBTQ+ Political Leaders",
    children: [
      {
        title: "Harvey Milk",
        description: "One of first openly gay elected officials in U.S.",
      },
      {
        title: "Jóhanna Sigurðardóttir",
        description: "First openly LGBT head of government (Iceland)",
      },
      { title: "Tammy Baldwin", description: "First openly gay U.S. senator" },
      {
        title: "Xavier Bettel",
        description: "Openly gay Prime Minister of Luxembourg",
      },
    ],
  },

  // 48
  {
    key: "youth-movement-leaders",
    label: "Youth Movement Leaders",
    children: [
      {
        title: "Greta Thunberg",
        description: "Catalyzed global youth climate movement",
      },
      {
        title: "Joshua Wong",
        description: "Hong Kong pro‑democracy student leader",
      },
      {
        title: "Emma González",
        description: "U.S. student gun‑control activist",
      },
      {
        title: "Malala Yousafzai",
        description: "Advocate for girls' education after Taliban attack",
      },
    ],
  },

  // 49
  {
    key: "philanthropic-entrepreneurs",
    label: "Philanthropic Entrepreneurs",
    children: [
      {
        title: "Andrew Carnegie",
        description: "Gave away fortune to libraries and education",
      },
      {
        title: "Melinda French Gates",
        description: "Co‑chairs Gates Foundation",
      },
      {
        title: "Azim Premji",
        description: "Indian tech billionaire donating most of wealth",
      },
      {
        title: "MacKenzie Scott",
        description: "Disbursed billions rapidly to charities",
      },
    ],
  },

  // 50
  {
    key: "sports-diplomats",
    label: "Sports Diplomats",
    children: [
      {
        title: "Jesse Owens",
        description: "Defied Nazi ideology at 1936 Olympics",
      },
      {
        title: "Nelson Mandela",
        description: "Used 1995 Rugby World Cup for national reconciliation",
      },
      {
        title: "Ping‑Pong Diplomats",
        description: "U.S.–China thaw initiated by table‑tennis players (1971)",
      },
      {
        title: "Billie Jean King",
        description: "Advocated for gender equality through sports",
      },
    ],
  },
];
