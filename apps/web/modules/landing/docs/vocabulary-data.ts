export type VocabularyItem = {
  word: string;
  translation: string;
  phonetic: string;
  example: string;
};

export type VocabularySubCategory = {
  name: string;
  emoji: string;
  items: VocabularyItem[];
};

export type VocabularyCategory = {
  id: string;
  title: string;
  description: string;
  icon: string;
  subCategories: VocabularySubCategory[];
};

export const vocabularyCategories: VocabularyCategory[] = [
  {
    id: "home",
    title: "Vocabulario en Casa",
    description:
      "Aprende las palabras esenciales para describir todo lo que hay en tu hogar, desde la cocina hasta el jardín.",
    icon: "🏠",
    subCategories: [
      {
        name: "Sala de Estar",
        emoji: "🛋️",
        items: [
          {
            word: "Sofa",
            translation: "Sofá",
            phonetic: "/ˈsoʊ.fə/",
            example: "We bought a new sofa for the living room.",
          },
          {
            word: "Cushion",
            translation: "Cojín",
            phonetic: "/ˈkʊʃ.ən/",
            example: "She placed a cushion behind her back.",
          },
          {
            word: "Curtain",
            translation: "Cortina",
            phonetic: "/ˈkɜːr.tən/",
            example: "Please close the curtains, it's too bright.",
          },
          {
            word: "Lamp",
            translation: "Lámpara",
            phonetic: "/læmp/",
            example: "Turn on the lamp, it's getting dark.",
          },
          {
            word: "Bookshelf",
            translation: "Estantería",
            phonetic: "/ˈbʊk.ʃelf/",
            example: "The bookshelf is full of novels.",
          },
          {
            word: "Rug",
            translation: "Alfombra",
            phonetic: "/rʌɡ/",
            example: "We have a rug in the center of the room.",
          },
          {
            word: "Television",
            translation: "Televisión",
            phonetic: "/ˈtel.ɪ.vɪʒ.ən/",
            example: "The television is on the wall.",
          },
          {
            word: "Remote control",
            translation: "Control remoto",
            phonetic: "/rɪˈmoʊt kənˈtroʊl/",
            example: "Where is the remote control?",
          },
          {
            word: "Coffee table",
            translation: "Mesa de centro",
            phonetic: "/ˈkɒf.i ˈteɪ.bəl/",
            example: "Put your cup on the coffee table.",
          },
          {
            word: "Armchair",
            translation: "Sillón",
            phonetic: "/ˈɑːrm.tʃer/",
            example: "Grandpa loves his armchair.",
          },
          {
            word: "Fireplace",
            translation: "Chimenea",
            phonetic: "/ˈfaɪr.pleɪs/",
            example: "We sat by the fireplace in winter.",
          },
          {
            word: "Picture frame",
            translation: "Marco de fotos",
            phonetic: "/ˈpɪk.tʃər freɪm/",
            example: "There's a picture frame on the shelf.",
          },
        ],
      },
      {
        name: "Cocina",
        emoji: "🍳",
        items: [
          {
            word: "Stove",
            translation: "Estufa",
            phonetic: "/stoʊv/",
            example: "Be careful, the stove is hot.",
          },
          {
            word: "Oven",
            translation: "Horno",
            phonetic: "/ˈʌv.ən/",
            example: "Preheat the oven to 180 degrees.",
          },
          {
            word: "Refrigerator",
            translation: "Refrigerador",
            phonetic: "/rɪˈfrɪdʒ.ə.reɪ.tər/",
            example: "Put the milk in the refrigerator.",
          },
          {
            word: "Sink",
            translation: "Fregadero",
            phonetic: "/sɪŋk/",
            example: "Wash the dishes in the sink.",
          },
          {
            word: "Microwave",
            translation: "Microondas",
            phonetic: "/ˈmaɪ.kroʊ.weɪv/",
            example: "Heat it in the microwave for two minutes.",
          },
          {
            word: "Blender",
            translation: "Licuadora",
            phonetic: "/ˈblen.dər/",
            example: "Use the blender to make a smoothie.",
          },
          {
            word: "Spatula",
            translation: "Espátula",
            phonetic: "/ˈspæt.jə.lə/",
            example: "Flip the pancake with a spatula.",
          },
          {
            word: "Pot",
            translation: "Olla",
            phonetic: "/pɑːt/",
            example: "Boil the water in a pot.",
          },
          {
            word: "Pan",
            translation: "Sartén",
            phonetic: "/pæn/",
            example: "Fry the eggs in a pan.",
          },
          {
            word: "Knife",
            translation: "Cuchillo",
            phonetic: "/naɪf/",
            example: "Use a knife to cut the bread.",
          },
          {
            word: "Cutting board",
            translation: "Tabla de cortar",
            phonetic: "/ˈkʌt.ɪŋ bɔːrd/",
            example: "Chop the vegetables on the cutting board.",
          },
          {
            word: "Toaster",
            translation: "Tostadora",
            phonetic: "/ˈtoʊ.stər/",
            example: "Put the bread in the toaster.",
          },
          {
            word: "Dishwasher",
            translation: "Lavavajillas",
            phonetic: "/ˈdɪʃ.wɒʃ.ər/",
            example: "Load the dishwasher after dinner.",
          },
          {
            word: "Cupboard",
            translation: "Alacena",
            phonetic: "/ˈkʌb.ərd/",
            example: "The cups are in the cupboard.",
          },
        ],
      },
      {
        name: "Dormitorio",
        emoji: "🛏️",
        items: [
          {
            word: "Bed",
            translation: "Cama",
            phonetic: "/bed/",
            example: "I go to bed at 10 PM.",
          },
          {
            word: "Pillow",
            translation: "Almohada",
            phonetic: "/ˈpɪl.oʊ/",
            example: "I need a soft pillow to sleep.",
          },
          {
            word: "Blanket",
            translation: "Cobija / Manta",
            phonetic: "/ˈblæŋ.kɪt/",
            example: "It's cold, get another blanket.",
          },
          {
            word: "Sheet",
            translation: "Sábana",
            phonetic: "/ʃiːt/",
            example: "Change the sheets every week.",
          },
          {
            word: "Wardrobe",
            translation: "Ropero / Armario",
            phonetic: "/ˈwɔːr.droʊb/",
            example: "My clothes are in the wardrobe.",
          },
          {
            word: "Nightstand",
            translation: "Mesita de noche",
            phonetic: "/ˈnaɪt.stænd/",
            example: "Put your phone on the nightstand.",
          },
          {
            word: "Alarm clock",
            translation: "Despertador",
            phonetic: "/əˈlɑːrm klɑːk/",
            example: "Set the alarm clock for 7 AM.",
          },
          {
            word: "Mirror",
            translation: "Espejo",
            phonetic: "/ˈmɪr.ər/",
            example: "Look at yourself in the mirror.",
          },
          {
            word: "Drawer",
            translation: "Cajón",
            phonetic: "/drɔːr/",
            example: "Your socks are in the drawer.",
          },
          {
            word: "Hanger",
            translation: "Gancho / Percha",
            phonetic: "/ˈhæŋ.ər/",
            example: "Hang your jacket on a hanger.",
          },
          {
            word: "Mattress",
            translation: "Colchón",
            phonetic: "/ˈmæt.rəs/",
            example: "We need a new mattress.",
          },
          {
            word: "Duvet",
            translation: "Edredón",
            phonetic: "/duːˈveɪ/",
            example: "The duvet keeps me warm at night.",
          },
        ],
      },
      {
        name: "Baño",
        emoji: "🚿",
        items: [
          {
            word: "Shower",
            translation: "Regadera / Ducha",
            phonetic: "/ˈʃaʊ.ər/",
            example: "I take a shower every morning.",
          },
          {
            word: "Toilet",
            translation: "Inodoro",
            phonetic: "/ˈtɔɪ.lət/",
            example: "Flush the toilet after using it.",
          },
          {
            word: "Sink",
            translation: "Lavabo",
            phonetic: "/sɪŋk/",
            example: "Wash your hands in the sink.",
          },
          {
            word: "Towel",
            translation: "Toalla",
            phonetic: "/ˈtaʊ.əl/",
            example: "Grab a towel to dry your hands.",
          },
          {
            word: "Soap",
            translation: "Jabón",
            phonetic: "/soʊp/",
            example: "Use soap to wash your hands.",
          },
          {
            word: "Shampoo",
            translation: "Champú",
            phonetic: "/ʃæmˈpuː/",
            example: "I ran out of shampoo.",
          },
          {
            word: "Toothbrush",
            translation: "Cepillo de dientes",
            phonetic: "/ˈtuːθ.brʌʃ/",
            example: "Replace your toothbrush every three months.",
          },
          {
            word: "Toothpaste",
            translation: "Pasta de dientes",
            phonetic: "/ˈtuːθ.peɪst/",
            example: "Squeeze some toothpaste on the brush.",
          },
          {
            word: "Bathtub",
            translation: "Bañera / Tina",
            phonetic: "/ˈbæθ.tʌb/",
            example: "Fill the bathtub with warm water.",
          },
          {
            word: "Drain",
            translation: "Drenaje / Desagüe",
            phonetic: "/dreɪn/",
            example: "The drain is clogged.",
          },
          {
            word: "Toilet paper",
            translation: "Papel higiénico",
            phonetic: "/ˈtɔɪ.lət ˈpeɪ.pər/",
            example: "We need more toilet paper.",
          },
          {
            word: "Bath mat",
            translation: "Tapete de baño",
            phonetic: "/bæθ mæt/",
            example: "Step on the bath mat when you get out.",
          },
        ],
      },
      {
        name: "Limpieza",
        emoji: "🧹",
        items: [
          {
            word: "Broom",
            translation: "Escoba",
            phonetic: "/bruːm/",
            example: "Sweep the floor with a broom.",
          },
          {
            word: "Mop",
            translation: "Trapeador",
            phonetic: "/mɑːp/",
            example: "Mop the kitchen floor.",
          },
          {
            word: "Bucket",
            translation: "Cubeta",
            phonetic: "/ˈbʌk.ɪt/",
            example: "Fill the bucket with water.",
          },
          {
            word: "Vacuum cleaner",
            translation: "Aspiradora",
            phonetic: "/ˈvæk.juːm ˈkliː.nər/",
            example: "Use the vacuum cleaner on the carpet.",
          },
          {
            word: "Sponge",
            translation: "Esponja",
            phonetic: "/spʌndʒ/",
            example: "Clean the counter with a sponge.",
          },
          {
            word: "Detergent",
            translation: "Detergente",
            phonetic: "/dɪˈtɜːr.dʒənt/",
            example: "Add detergent to the washing machine.",
          },
          {
            word: "Dustpan",
            translation: "Recogedor",
            phonetic: "/ˈdʌst.pæn/",
            example: "Use the dustpan to pick up the dust.",
          },
          {
            word: "Bleach",
            translation: "Cloro / Blanqueador",
            phonetic: "/bliːtʃ/",
            example: "Be careful with bleach, it's strong.",
          },
          {
            word: "Trash can",
            translation: "Bote de basura",
            phonetic: "/træʃ kæn/",
            example: "Throw it in the trash can.",
          },
          {
            word: "Cloth",
            translation: "Trapo",
            phonetic: "/klɒθ/",
            example: "Wipe the table with a cloth.",
          },
          {
            word: "Duster",
            translation: "Plumero",
            phonetic: "/ˈdʌs.tər/",
            example: "Use a duster for the shelves.",
          },
          {
            word: "Gloves",
            translation: "Guantes",
            phonetic: "/ɡlʌvz/",
            example: "Wear gloves when cleaning.",
          },
        ],
      },
      {
        name: "Jardín y Exterior",
        emoji: "🏡",
        items: [
          {
            word: "Lawn",
            translation: "Césped",
            phonetic: "/lɔːn/",
            example: "Mow the lawn every weekend.",
          },
          {
            word: "Fence",
            translation: "Cerca / Valla",
            phonetic: "/fens/",
            example: "We painted the fence white.",
          },
          {
            word: "Hose",
            translation: "Manguera",
            phonetic: "/hoʊz/",
            example: "Water the garden with the hose.",
          },
          {
            word: "Plant pot",
            translation: "Maceta",
            phonetic: "/plænt pɑːt/",
            example: "Put the flowers in a plant pot.",
          },
          {
            word: "Shovel",
            translation: "Pala",
            phonetic: "/ˈʃʌv.əl/",
            example: "Dig a hole with the shovel.",
          },
          {
            word: "Hedge",
            translation: "Seto",
            phonetic: "/hedʒ/",
            example: "Trim the hedge in spring.",
          },
          {
            word: "Gate",
            translation: "Portón / Puerta",
            phonetic: "/ɡeɪt/",
            example: "Close the gate when you leave.",
          },
          {
            word: "Mailbox",
            translation: "Buzón",
            phonetic: "/ˈmeɪl.bɑːks/",
            example: "Check the mailbox for letters.",
          },
          {
            word: "Driveway",
            translation: "Entrada para autos",
            phonetic: "/ˈdraɪv.weɪ/",
            example: "Park the car in the driveway.",
          },
          {
            word: "Porch",
            translation: "Porche",
            phonetic: "/pɔːrtʃ/",
            example: "We sat on the porch and watched the sunset.",
          },
          {
            word: "Sprinkler",
            translation: "Aspersor",
            phonetic: "/ˈsprɪŋ.klər/",
            example: "Turn on the sprinkler for the lawn.",
          },
          {
            word: "Wheelbarrow",
            translation: "Carretilla",
            phonetic: "/ˈwiːl.bær.oʊ/",
            example: "Use the wheelbarrow to carry soil.",
          },
        ],
      },
      {
        name: "Herramientas",
        emoji: "🔧",
        items: [
          {
            word: "Hammer",
            translation: "Martillo",
            phonetic: "/ˈhæm.ər/",
            example: "Hit the nail with a hammer.",
          },
          {
            word: "Screwdriver",
            translation: "Desarmador",
            phonetic: "/ˈskruː.draɪ.vər/",
            example: "I need a screwdriver to fix this.",
          },
          {
            word: "Wrench",
            translation: "Llave (herramienta)",
            phonetic: "/rentʃ/",
            example: "Tighten the bolt with a wrench.",
          },
          {
            word: "Drill",
            translation: "Taladro",
            phonetic: "/drɪl/",
            example: "Use a drill to make a hole in the wall.",
          },
          {
            word: "Tape measure",
            translation: "Cinta métrica",
            phonetic: "/teɪp ˈmeʒ.ər/",
            example: "Measure the shelf with a tape measure.",
          },
          {
            word: "Pliers",
            translation: "Pinzas / Alicates",
            phonetic: "/ˈplaɪ.ərz/",
            example: "Use pliers to pull out the nail.",
          },
          {
            word: "Nail",
            translation: "Clavo",
            phonetic: "/neɪl/",
            example: "Hang the painting with a nail.",
          },
          {
            word: "Screw",
            translation: "Tornillo",
            phonetic: "/skruː/",
            example: "Tighten the screw with a screwdriver.",
          },
          {
            word: "Saw",
            translation: "Sierra",
            phonetic: "/sɔː/",
            example: "Cut the wood with a saw.",
          },
          {
            word: "Level",
            translation: "Nivel",
            phonetic: "/ˈlev.əl/",
            example: "Use a level to hang the picture straight.",
          },
        ],
      },
      {
        name: "Estructura de la Casa",
        emoji: "🏠",
        items: [
          {
            word: "Roof",
            translation: "Techo / Tejado",
            phonetic: "/ruːf/",
            example: "The roof needs to be repaired.",
          },
          {
            word: "Wall",
            translation: "Pared",
            phonetic: "/wɔːl/",
            example: "We painted the wall blue.",
          },
          {
            word: "Floor",
            translation: "Piso / Suelo",
            phonetic: "/flɔːr/",
            example: "The floor is made of wood.",
          },
          {
            word: "Ceiling",
            translation: "Techo (interior)",
            phonetic: "/ˈsiː.lɪŋ/",
            example: "The ceiling is very high.",
          },
          {
            word: "Door",
            translation: "Puerta",
            phonetic: "/dɔːr/",
            example: "Close the door, please.",
          },
          {
            word: "Window",
            translation: "Ventana",
            phonetic: "/ˈwɪn.doʊ/",
            example: "Open the window for fresh air.",
          },
          {
            word: "Staircase",
            translation: "Escalera",
            phonetic: "/ˈster.keɪs/",
            example: "Be careful on the staircase.",
          },
          {
            word: "Hallway",
            translation: "Pasillo",
            phonetic: "/ˈhɔːl.weɪ/",
            example: "The hallway leads to the bedrooms.",
          },
          {
            word: "Chimney",
            translation: "Chimenea (exterior)",
            phonetic: "/ˈtʃɪm.ni/",
            example: "Smoke comes out of the chimney.",
          },
          {
            word: "Garage",
            translation: "Garaje / Cochera",
            phonetic: "/ɡəˈrɑːʒ/",
            example: "Park the car in the garage.",
          },
          {
            word: "Basement",
            translation: "Sótano",
            phonetic: "/ˈbeɪs.mənt/",
            example: "The basement is used for storage.",
          },
          {
            word: "Attic",
            translation: "Ático / Desván",
            phonetic: "/ˈæt.ɪk/",
            example: "Old toys are stored in the attic.",
          },
        ],
      },
      {
        name: "Lavandería",
        emoji: "👕",
        items: [
          {
            word: "Washing machine",
            translation: "Lavadora",
            phonetic: "/ˈwɒʃ.ɪŋ məˈʃiːn/",
            example: "Put the clothes in the washing machine.",
          },
          {
            word: "Dryer",
            translation: "Secadora",
            phonetic: "/ˈdraɪ.ər/",
            example: "The dryer takes about an hour.",
          },
          {
            word: "Iron",
            translation: "Plancha",
            phonetic: "/ˈaɪ.ərn/",
            example: "Iron your shirt before the meeting.",
          },
          {
            word: "Ironing board",
            translation: "Tabla de planchar",
            phonetic: "/ˈaɪ.ər.nɪŋ bɔːrd/",
            example: "Set up the ironing board.",
          },
          {
            word: "Clothesline",
            translation: "Tendedero",
            phonetic: "/ˈkloʊðz.laɪn/",
            example: "Hang the clothes on the clothesline.",
          },
          {
            word: "Laundry basket",
            translation: "Cesto de ropa",
            phonetic: "/ˈlɔːn.dri ˈbæs.kɪt/",
            example: "Put your dirty clothes in the laundry basket.",
          },
          {
            word: "Stain",
            translation: "Mancha",
            phonetic: "/steɪn/",
            example: "There's a stain on my shirt.",
          },
          {
            word: "Fold",
            translation: "Doblar",
            phonetic: "/foʊld/",
            example: "Fold the towels neatly.",
          },
          {
            word: "Fabric softener",
            translation: "Suavizante",
            phonetic: "/ˈfæb.rɪk ˈsɒf.ən.ər/",
            example: "Add fabric softener for a nice smell.",
          },
          {
            word: "Lint roller",
            translation: "Rodillo quitapelusas",
            phonetic: "/lɪnt ˈroʊ.lər/",
            example: "Use the lint roller on your jacket.",
          },
        ],
      },
      {
        name: "Comedor",
        emoji: "🍽️",
        items: [
          {
            word: "Dining table",
            translation: "Mesa de comedor",
            phonetic: "/ˈdaɪ.nɪŋ ˈteɪ.bəl/",
            example: "Set the dining table for dinner.",
          },
          {
            word: "Chair",
            translation: "Silla",
            phonetic: "/tʃer/",
            example: "Pull up a chair and sit down.",
          },
          {
            word: "Plate",
            translation: "Plato",
            phonetic: "/pleɪt/",
            example: "Put the food on the plate.",
          },
          {
            word: "Glass",
            translation: "Vaso",
            phonetic: "/ɡlæs/",
            example: "Pour water into the glass.",
          },
          {
            word: "Fork",
            translation: "Tenedor",
            phonetic: "/fɔːrk/",
            example: "Use a fork to eat the salad.",
          },
          {
            word: "Knife",
            translation: "Cuchillo",
            phonetic: "/naɪf/",
            example: "Cut the meat with a knife.",
          },
          {
            word: "Spoon",
            translation: "Cuchara",
            phonetic: "/spuːn/",
            example: "Stir your coffee with a spoon.",
          },
          {
            word: "Napkin",
            translation: "Servilleta",
            phonetic: "/ˈnæp.kɪn/",
            example: "Put the napkin on your lap.",
          },
          {
            word: "Tablecloth",
            translation: "Mantel",
            phonetic: "/ˈteɪ.bəl.klɒθ/",
            example: "We use a white tablecloth for special occasions.",
          },
          {
            word: "Centerpiece",
            translation: "Centro de mesa",
            phonetic: "/ˈsen.tər.piːs/",
            example: "The centerpiece has fresh flowers.",
          },
          {
            word: "Bowl",
            translation: "Tazón",
            phonetic: "/boʊl/",
            example: "Serve the soup in a bowl.",
          },
          {
            word: "Cup",
            translation: "Taza",
            phonetic: "/kʌp/",
            example: "I drink coffee from a cup every morning.",
          },
        ],
      },
    ],
  },
];
