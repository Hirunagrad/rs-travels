export type Attraction = string | { name: string; wikiUrl?: string };

export interface Destination {
  id: string;
  region: string;
  description: string;
  image: string;
  attractions: Attraction[];
}

export const destinations: Destination[] = [
  {
    id: "anuradhapura",
    region: "Anuradhapura",
    description: "Explore the ancient and sacred city of Anuradhapura with its vast ruins and colossal stupas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Ruwanweli_Maha_Saaya.jpg/1280px-Ruwanweli_Maha_Saaya.jpg",
    attractions: [
      { name: "Sacred City of Anuradhapura (UNESCO site)", wikiUrl: "https://en.wikipedia.org/wiki/Anuradhapura" },
      { name: "Vast ruins", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Anuradhapura+ruins" },
      { name: "Colossal stupas", wikiUrl: "https://en.wikipedia.org/wiki/Stupa#Sri_Lanka" },
      { name: "Advanced irrigation systems", wikiUrl: "https://en.wikipedia.org/wiki/Irrigation_works_in_ancient_Sri_Lanka" }
    ]
  },
  {
    id: "polonnaruwa",
    region: "Polonnaruwa",
    description: "Discover the well-preserved ruins of the second ancient kingdom of Sri Lanka.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Polonnaruwa_01.jpg/1280px-Polonnaruwa_01.jpg",
    attractions: [
      { name: "Second ancient kingdom of Sri Lanka", wikiUrl: "https://en.wikipedia.org/wiki/Polonnaruwa" }
    ]
  },
  {
    id: "trincomalee",
    region: "Trincomalee",
    description: "Experience vibrant coral reefs, ancient Hindu temples, and beautiful coastal beaches.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Bay_of_Trincomalee.jpg/1280px-Bay_of_Trincomalee.jpg",
    attractions: [
      { name: "Thirukoneswaram Kovil", wikiUrl: "https://en.wikipedia.org/wiki/Koneswaram_Temple" },
      { name: "Fort Fredrick", wikiUrl: "https://en.wikipedia.org/wiki/Fort_Fredrick" },
      { name: "Shri Badrakali amman Hindu Kovil", wikiUrl: "https://en.wikipedia.org/wiki/Pathirakali_Amman_Temple" },
      { name: "Nilaweli/Uppuweli Beach (Explore vibrant coral reefs)", wikiUrl: "https://en.wikipedia.org/wiki/Nilaveli" },
      { name: "Hot water wells", wikiUrl: "https://en.wikipedia.org/wiki/Kanniya_Hot_water_spring" }
    ]
  },
  {
    id: "arugambay",
    region: "Arugambay",
    description: "Catch a wave at one of the world's most famous surfing destinations.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Beach_of_Arugam_Bay.jpg/1280px-Beach_of_Arugam_Bay.jpg",
    attractions: [
      { name: "Surfing beaches", wikiUrl: "https://en.wikipedia.org/wiki/Arugam_Bay" }
    ]
  },
  {
    id: "dambulla",
    region: "Dambulla",
    description: "Marvel at the ancient rock cave temple and the stunning Golden Temple.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dambulla-buddhastupa.jpg/1280px-Dambulla-buddhastupa.jpg",
    attractions: [
      { name: "Cave Temple", wikiUrl: "https://en.wikipedia.org/wiki/Dambulla_cave_temple" },
      { name: "Golden Temple", wikiUrl: "https://en.wikipedia.org/wiki/Dambulla_cave_temple" }
    ]
  },
  {
    id: "sigiriya",
    region: "Sigiriya",
    description: "Climb the iconic Lion Rock and go on a wild safari in the nearby eco-parks.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sigiriya_%28141688197%29.jpeg/1280px-Sigiriya_%28141688197%29.jpeg",
    attractions: [
      { name: "Explore the iconic Sigiriya Lion Rock (UNESCO site)", wikiUrl: "https://en.wikipedia.org/wiki/Sigiriya" },
      { name: "Hiking Pidurangala Rock", wikiUrl: "https://en.wikipedia.org/wiki/Pidurangala_Vihara" },
      { name: "Traditional Village safari", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Sigiriya+Village+Tour" },
      { name: "Wild safari (Eco park, Minneriya, Kaudulla)", wikiUrl: "https://en.wikipedia.org/wiki/Minneriya_National_Park" }
    ]
  },
  {
    id: "en-route-sigiriya-to-kandy",
    region: "En Route (Sigiriya to Kandy)",
    description: "Enjoy cultural stops including wood carving, spice gardens, and ancient Hindu temples.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/City_of_Matale.jpg",
    attractions: [
      { name: "Wood carving (art demonstration)", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Wood_carving_in_Sri_Lanka" },
      { name: "Spice and herbal garden", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Matale+Spice+Gardens" },
      { name: "Nalanda gedige (center of Sri Lanka)", wikiUrl: "https://en.wikipedia.org/wiki/Nalanda_Gedige" },
      { name: "Hindu Temple Matale", wikiUrl: "https://en.wikipedia.org/wiki/Muthumariamman_Temple,_Matale" }
    ]
  },
  {
    id: "kandy",
    region: "Kandy",
    description: "Visit the sacred Temple of the Tooth and explore the rich cultural heritage of the central hills.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/SL_Kandy_asv2020-01_img04_Queens_Hotel.jpg/1280px-SL_Kandy_asv2020-01_img04_Queens_Hotel.jpg",
    attractions: [
      { name: "Temple of the sacred tooth relic & museum", wikiUrl: "https://en.wikipedia.org/wiki/Temple_of_the_Tooth" },
      { name: "Kandy lake walk", wikiUrl: "https://en.wikipedia.org/wiki/Kandy_Lake" },
      { name: "Kandy view point", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Kandy+View+Point" },
      { name: "Cultural dance show", wikiUrl: "https://en.wikipedia.org/wiki/Kandyan_dance" },
      { name: "Gem museum", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Kandy+Gem+Museum" },
      { name: "Botanical garden Peradeniya", wikiUrl: "https://en.wikipedia.org/wiki/Royal_Botanical_Gardens,_Peradeniya" },
      { name: "Ambuluwawa White tower", wikiUrl: "https://en.wikipedia.org/wiki/Ambuluwawa_Tower" }
    ]
  },
  {
    id: "en-route-kandy-to-nuwara-eliya",
    region: "En Route (Kandy to Nuwara Eliya)",
    description: "Take in the scenic waterfalls and lush tea plantations along the drive to Nuwara Eliya.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/SL_NuwaraEDistrict_asv2020-01_img08_Lower_Ramboda_Falls.jpg/1280px-SL_NuwaraEDistrict_asv2020-01_img08_Lower_Ramboda_Falls.jpg",
    attractions: [
      { name: "Hanuman temple", wikiUrl: "https://en.wikipedia.org/wiki/Shri_Bhakta_Hanuman_Temple,_Ramboda" },
      { name: "Ramboda waterfall", wikiUrl: "https://en.wikipedia.org/wiki/Ramboda_Falls" },
      { name: "Ramboda view point", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Ramboda" },
      { name: "Tea factory and tea garden tour", wikiUrl: "https://en.wikipedia.org/wiki/Ceylon_tea" }
    ]
  },
  {
    id: "nuwara-eliya",
    region: "Nuwara Eliya",
    description: "Enjoy the cool climate and colonial charm of Little England.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/NuwaraEliya_from_top.jpg/1280px-NuwaraEliya_from_top.jpg",
    attractions: [
      { name: "Colonial post office", wikiUrl: "https://en.wikipedia.org/wiki/Nuwara_Eliya_Post_Office" },
      { name: "Gregory lake", wikiUrl: "https://en.wikipedia.org/wiki/Lake_Gregory_(Nuwara_Eliya)" },
      { name: "Victoria park", wikiUrl: "https://en.wikipedia.org/wiki/Victoria_Park,_Nuwara_Eliya" },
      { name: "Sitha amman temple (Ashok watika)", wikiUrl: "https://en.wikipedia.org/wiki/Seetha_Amman_Temple" },
      { name: "Haggala Botanical garden", wikiUrl: "https://en.wikipedia.org/wiki/Hakgala_Botanical_Garden" },
      { name: "Scenic train ride (Nanu Oya to Ella)", wikiUrl: "https://en.wikipedia.org/wiki/Main_Line_(Sri_Lanka)" }
    ]
  },
  {
    id: "ella",
    region: "Ella",
    description: "Embrace adventure with stunning hikes, waterfalls, and the famous Nine Arch Bridge.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ella_railway_station.jpg/1280px-Ella_railway_station.jpg",
    attractions: [
      { name: "Nine arch bridge", wikiUrl: "https://en.wikipedia.org/wiki/Nine_Arches_Bridge,_Demodara" },
      { name: "Zip lining adventure", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Flying_Ravana_Zipline" },
      { name: "Little Adams peak", wikiUrl: "https://en.wikipedia.org/wiki/Little_Adam%27s_Peak" },
      { name: "Rawana waterfall", wikiUrl: "https://en.wikipedia.org/wiki/Ravana_Falls" }
    ]
  },
  {
    id: "yala",
    region: "Yala",
    description: "Embark on a thrilling wildlife safari in Sri Lanka's most famous national park.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Yala_Beach.jpg/1280px-Yala_Beach.jpg",
    attractions: [
      { name: "Yala national park", wikiUrl: "https://en.wikipedia.org/wiki/Yala_National_Park" }
    ]
  },
  {
    id: "south-coast",
    region: "South Coast (Mirissa / Weligama / Galle)",
    description: "Relax on pristine beaches, go whale watching, and explore the historic Galle Fort.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Galle_Fort.jpg/1280px-Galle_Fort.jpg",
    attractions: [
      { name: "Whale watching tour", wikiUrl: "https://en.wikipedia.org/wiki/Mirissa#Whale_watching" },
      { name: "Parrot rock", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Parrot_Rock_Mirissa" },
      { name: "Coconut tree hill", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Coconut_Tree_Hill_Mirissa" },
      { name: "Secret beach", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Secret_Beach_Mirissa" },
      { name: "Surfing beaches", wikiUrl: "https://en.wikipedia.org/wiki/Weligama" },
      { name: "Night beach party area", wikiUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Mirissa_Beach_Parties" },
      { name: "Galle Fort (historical, archaeological heritage)", wikiUrl: "https://en.wikipedia.org/wiki/Galle_Fort" },
      { name: "Fort Light house", wikiUrl: "https://en.wikipedia.org/wiki/Galle_Lighthouse" }
    ]
  },
  {
    id: "colombo",
    region: "Colombo",
    description: "Experience the vibrant mix of modern city life and cultural landmarks in the capital.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Colombo_city_skyline_at_night.png/1280px-Colombo_city_skyline_at_night.png",
    attractions: [
      { name: "Colombo city tour", wikiUrl: "https://en.wikipedia.org/wiki/Colombo" },
      { name: "Gangaramaya temple", wikiUrl: "https://en.wikipedia.org/wiki/Gangaramaya_Temple" },
      { name: "Port city", wikiUrl: "https://en.wikipedia.org/wiki/Port_City_Colombo" },
      { name: "Lotus tower", wikiUrl: "https://en.wikipedia.org/wiki/Lotus_Tower" },
      { name: "Shopping mall visit", wikiUrl: "https://en.wikipedia.org/wiki/One_Galle_Face" }
    ]
  }
];
