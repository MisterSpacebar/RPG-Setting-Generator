function randomGen (upto) {
    var max = upto;
    var result = Math.floor(Math.random() * max);
    console.log(result);

    return result
}

function periodPiece () {
    var period = ["Cold War","Victorian England","Vietnam War","World War","Feudualism","Dark Ages","Enlightenment","Age of Discovery","Colonial Africa","Manifest Destiny","Nomadic Wandering"];

    return "Historical Aesthetics: This setting is draped in a historical look and feel, much like a period piece. Your period piece is: "+period[randomGen(period.length)]
}

function punkFiction () { 
    var punk = ["Steampunk: A retro-futurism pseudoscience fiction in which advanced technology is replaced with steam-powered equivalents, usually set in a Victorian England equvalent.",
                "Solarpunk: Speculative fiction that focuses on craftsmanship, community, and technology powered by a renewable energy source.",
                "Cyberpunk: Dystopian fiction that focuses on the juxtaposition of low-life characters in a high-tech society, featuring advanced technological and scientific achievements, such as artificial intelligence and cybernetics, juxtaposed with a degree of breakdown or radical change in the social order.",
                "Splatterpunk: Horror fiction distinguished by its graphic, gory depiction of violence and counterculture.",
                "Mythicpunk: Mythic fiction set in folklore and myth that subverts or questions its dominant norms.",
                "Rococopunk: Whimsical fiction set in a world where the late baroque perid never ended.",
                "Clockpunk: A retro-futurism pseudoscience fiction in which advanced technology is replaced with spring-powered equivalents, usually set in a Renaissance Europe equvalent.",
                "Atompunk: A retro-futurism pseudoscience fiction in which advanced technology is replaced with nuclear-powered equivalents, usually set in a post-WW2 United States equvalent.",
                "Diselpunk/Decopunk: A retro-futurism pseudoscience fiction in which advanced technology is replaced with petroleum-powered equivalents, usually set in a late-WW1/early-WW2 equvalent, sometimes splattered with Art Deco.",
                "Stonepunk: A retro-futurism pseudoscience fiction in which modern technology is replaced with stone-'powered' equivalents, usually set in the Stone Age."];
    
    return "Punk is a subgenre of speculative fiction settings featuring a world built on one particular technology that is extrapolated to a highly sophisticated level, a gritty transreal urban style, or a particular approach to social themes. Your punk derivative is "+punk[randomGen(punk.length)];
}

function landmark () {
    var feature = ["Canyons", "Cave Network", "Massive Crater", "Huge Glaciers", "Towering Mountains","Ocean Reefs","Active Volcano"];

    return "Landmark: "+feature[randomGen(feature.length)];
}

function technologyLevel () {
    var diceRoll = randomGen(101);

    if (diceRoll < 5) { return "Stone Age: This age saw the production of stone tools, with simple arts and ornamentation. It is mainly composed of hunter-gatherer societies living mostly in caves and other natural shelters, but towards the end of the age, some societies started farming." };
    if (diceRoll > 4 && diceRoll < 13) { return "Bronze Age: This age saw the development of copper and bronze, and brought about mining and metallurgical advances. Cities started to form as agriculture started to become common, leading to the development of writing."};
    if (diceRoll > 12 && diceRoll < 20) { return "Iron Age: This age became development of iron implements and weapons. Widespread writing and economic systems enabled more complex governments and societies. Some cultures develop mounted and vehicular combat via methods such as chariot."};
    if (diceRoll > 19 && diceRoll < 26) { return "Classical Antiquity: This age saw the further development of societies as peoples established city-states, professional militaries, new forms of governance, and potentially several empires."};
    if (diceRoll > 25 && diceRoll < 34) { return "Medieval Europe: This age is primarily characterized by multiple countries and city-states using a feudal system, forgoing organized government with bureacracies in favor of singular rulers. Standing armies were replaced with smaller, better-equipped battalions and highly trained individuals who were part of the nobility."};
    if (diceRoll > 33 && diceRoll < 40) { return "Renaissance: This age featured the revival of Classical learnings and brought about significant developments in the arts and sciences. Feudal systems of governance parted way for protomodern governmental organizations."};
    if (diceRoll > 39 && diceRoll < 48) { return "Early Industrial Era: This age marks the transition from an agrarian society to one dominated by industry and machinery. This age sees the start of coal-powered engines, railroads, and factories."};
    if (diceRoll > 47 && diceRoll < 53) { return "Late Industrial Revolution: This age saw the development of petroleum or similar fossil fuels as a source of energy as well as the development of automobiles and aircraft."};
    if (diceRoll > 52 && diceRoll < 58) { return "Atomic Age: This age marks the emergence of atomic weapons and nuclear power plants as well as early jet and rocket technologies."};
    if (diceRoll > 57 && diceRoll < 64) { return "Space Age: This age marks the early days of space exploration, from simple satellites to crewed space flights to nearby natural satellites."};
    if (diceRoll > 63 && diceRoll < 70) { return "Information Age: This age sees the transition to industries based on information technologies. It includes rapid development in computing technologies and culture-shifting technological advancements."};
    if (diceRoll > 69 && diceRoll < 78) { return "Interplanetary Age: This age marks the beginnings of space colonization of a peoples home world to its nearby satellites and eventually to its solar system with basic terraforming technologies. Space travel is difficult and time-consuming, with trips to nearby planets taking weeks to years."}
    if (diceRoll > 77 && diceRoll < 85) { return "Transhuman Age: Cybernetic enchancements and genetic manipulation and augmentation becomes more commonplace and dominates every living."}
    if (diceRoll > 84 && diceRoll < 91) { return "Intragalactic Age: Nigh-lightspeed and faster-than-light travel has allowed society to reach beyond its home system and visit other parts of its galaxy. Society begins engineering of stellar superstructures such as Dyson Swarms. This age marks the beginning of a society's technological ability to transcend its own mortality."}
    if (diceRoll > 90 && diceRoll < 98) { return "Quantum Age: Technology advances to the point where large-scale manipulation of matter on astronomical levels become possible. Stellar megastructures such as Ring Worlds, Dyson Spheres, and Matrishka Brains are constructed as peoples may transcend mortality or even physical existence."}
    if (diceRoll > 97) { return "Psychic Awakening: Sentient beings have developed psionic abilities. The direction of advancement shifts from pursuing technological development to enhancing the powers of an individual's mind as many technologies are replaced by psychic abilities."}
}

function commonTropes () {
    var diceRoll = randomGen(101);

    if (diceRoll < 6) { return "Aliens: Intelligent aliens are threatening the world, come to uplift society in peace, or are secretly living amongst society."};
    if (diceRoll > 5 && diceRoll < 10) { return "Afterlife: Characters have direct contact with the afterlife, either personally or via conduits such as artifacts or mediums."};
    if (diceRoll > 9 && diceRoll < 12) { return "Alternate History: 'What-If' real world scenarios with few changes, that, over time, results in mahor divergences from our reality."}
    if (diceRoll > 11 && diceRoll < 13) {return "Automation: A world dominated by more automated devices such as vehicles and nonsentient robots than human beings."}
    if (diceRoll > 12 && diceRoll < 15) { return "Betrayal: Betrayal is commonplace in the setting, with backstabbing courtiers, vengeful peoples, and greedy individuals"}
    if (diceRoll > 14 && diceRoll < 17) { return "Believable Technologies: This setting features technology that is realistic based on our reality. Any unrealistic technologies are generally still logically feasible."}
    if (diceRoll > 16 && diceRoll < 19) { return "Castles:  Some type of castle or fortress play a central role to the setting or story."}
    if (diceRoll > 18 && diceRoll < 20) { return "Cyberspace: Cyberspaces and virtual realities are as 'real' as reality in this setting or story."}
    if (diceRoll > 19 && diceRoll < 24) { return "Dungeons: Caves, dungeons, ruins, and tombs play a central part of the setting or story."}
    if (diceRoll > 23 && diceRoll < 26) { return "Environmental Disaster: Natural or man-made disaster(s) have drastically altered the world or is currently in the process of doing so."}
    if (diceRoll > 25 && diceRoll < 30) { return "Gods: A pantheon of deities take an active interest in the world, influencing and interfering with the lives of its inhabitants."}
    if (diceRoll > 29 && diceRoll < 35) { return "Good vs. Evil: Some factions and/or individuals are objectively 'Good', while others are unambigously 'Evil'. Stories in this setting revolve around the struggle between these factions."}
    if (diceRoll > 34 && diceRoll < 40) { return periodPiece() }
    if (diceRoll > 39 && diceRoll < 45) { return "Warrior Caste: The setting features a class of individuals who are capable combatants that usually adhere to a code of honor."}
    if (diceRoll > 44 && diceRoll < 47) { return "Lost: A major element of the setting has been lost for for a long time and a major plot point is the journey to find it."}
    if (diceRoll > 46 && diceRoll < 50) { return "Magic: Magic and mysticism is a major element in the setting and the goals of many of its character is its acquisition."}
    if (diceRoll > 49 && diceRoll < 53) { return "Mad Science: The setting features weird pseudoscitific devices and ideas, usually championed by eccentric, reckless individuals."}
    if (diceRoll > 52 && diceRoll < 57) { return "Monsters: Weird, fantastic, otherworldly, or otherwise dangerous creatures are a major focus and threat of this setting. Cultures have to work to accommodate or protect against these creatures, and those who are proficient at defeating them are touted as heroes."}
    if (diceRoll > 56 && diceRoll < 60) { return "Monster Army: A horde of monstrers under the command of a powerful leader threatens part or all of the setting."}
    if (diceRoll > 58 && diceRoll < 61) { return "Movie Realism: Realism takes a back seat to movie-inspired scenes. Heroes survive or fight through debilitating injuries, explosions are bigger than normal, and characters make decisions based on advancing the plot instead of common sense."}
    if (diceRoll > 60 && diceRoll < 64) { return "Mutants: Genetically modified humans or other creatures are commonplace. They may be advanced versions of normal people, or terrifying creatures resulting fromt radiation or other effects."}
    if (diceRoll > 63 && diceRoll < 69) { return "New Frontier: The setting takes place at the edge of civilization and beyond, whether in space, the deep ocean, or a new plane of reality."}
    if (diceRoll > 68 && diceRoll < 73) { return "Post-Apocalyptic: The civilized world has effectived ended, and the survivors are trying to pick up the pieces. Broken leftover technology, abandoned cities, anarchy, and warlords are frequent elements of the setting."}
    if (diceRoll > 72 && diceRoll < 77) { return "Gritty Realism: The setting has a prevalent theme of gritty realism. Things go wrong for the major characters, villians sometimes win, people act out of self-interest, and decisions can be motivated by misinformation, bias, fear, and irrational hatred."}
    if (diceRoll > 76 && diceRoll < 78) { return "Robots: Sentient robots or androids are a major factor in everyday life the setting. They may be threatening, benign, or both."}
    if (diceRoll > 77 && diceRoll < 85) { return punkFiction() }
    if (diceRoll > 84 && diceRoll < 89) { return "Interplanetary Travel: No matter what the setting's technology level is, its primary civilizations have some way to travel to different worlds."}
    if (diceRoll > 88 && diceRoll < 95) { return "Occult: Supernatural creatures such as demons, devils, and possibly angels are prominent characters, often supported by mortal allies."}
    if (diceRoll > 94 && diceRoll < 99) { return "Undeath: The setting features creatures that live beyond death, such as vampires, spirits, ghosts, and zombies."}
    if (diceRoll > 98) { return "Underwater: Significant aspects of the setting occur underwater, whether cultures, civilizations, or entire worlds."}
}

function worldStructure () {
    var diceRoll = randomGen(10);

    if (diceRoll == 0) { return "Mere Moon: The setting is small enough to be a satellite of a larger world that may dominate its skies."}
    if (diceRoll == 1) { return "Small World: This setting is small enough that gravity is less than normal, similar to Mere Moon, leading to larger-than-usual plants and animals, as well as soaring geological formations."}
    if (diceRoll > 1 && diceRoll < 5) { return "Earthlike World: The setting is set in a world similar to Earth, and may have one or more moons that influence tides."}
    if (diceRoll > 4 && diceRoll < 7) { return "Large World: The planet is very large and has a great deal of mass. Things may be squat and incredibly strong to resist the pull of extreme gravity."}
    if (diceRoll == 7) { return "Rings: The planet has a prominent ring system. If the prominent civilization is sufficiently advanced enough, the ring may interfere with space travel."}
    if (diceRoll == 8) { return "Tidally Locked World: The planet is gravitationally locked with its star."}
    if (diceRoll == 9) { return "Artifical Construction: The setting is actually some sort of artifical structure."}
}

function climate () {
    var diceRoll = randomGen(10);

    if (diceRoll == 0) { return "Searing Termperatures: The world's median temperatures are too hot to comfortably survive, except to hardly life that has specifically evolved to deal with the heat."}
    if (diceRoll == 1 || diceRoll == 2) { return "Hot World: Most of the world tends towards hotter-than-average climates, though some regions may be temperate or cool."}
    if (diceRoll > 2 && diceRoll < 7) { return "Temperate World: This world sees a wide range of temperatures across its surface"}
    if (diceRoll > 6 && diceRoll < 8) { return "Cold World: The world tends towards cooler-than-average cliamtes. While a few regions or microclimates may be temperate or hot, most of the planet is cool or cold."}
    if (diceRoll == 9) { return "Frozen World: The world is so cold, it can barely support life. Only rare regions have liquid water, and the life that thats evolved on this world has specific ways of dealing with the cold."}
}

function environment () {
    var diceRoll = randomGen(10);

    if (diceRoll == 0) { return "Fractured Land: This region has been split and fractured by some sort of cataclysm."}
    if (diceRoll == 1) { return "Wasteland: This region is categorized by its lack of easy access to liquid water, extreme temperatures, and hostility to life."}
    if (diceRoll == 2) { return "Forest: This region is saturated with trees and other forestlife."}
    if (diceRoll == 3) { return "Plains: Plains are typically some form of grassland, savanna, scrubland, plateau, or some other expanse of flattened ground."}
    if (diceRoll == 4) { return "Mountain: Cliffs and steep rockfaces make up much of this environment, punctuated by swift-flowing streams, high altitude meadows, and hardly plant and animal life."}
    if (diceRoll == 5) { return "Swamp: Swamps are wet, waterlogged environments full of sluggish, stagnant water. They tend to be full of disease and decay, but also teeming with life that has adapted to the environment."}
    if (diceRoll == 6) { return "River Valley: The region is dominated by a single massive river and the lands that drain into it, or a series or river deltas."}
    if (diceRoll == 7) { return "Ocean: The region is a vast ocean, or an ocean and the coastal regions alongside it. Most life is squatic, and civilizations may live under water or spend a lot of time on the water."}
    if (diceRoll == 8) { return "Lake: The region is dominated by a large, freshwater lake that is big enough that crossing it may take days, and local inhabitants either live under the water or spend a lot of the time on the water."}
    if (diceRoll == 9) { return landmark() }
}

function population () {
    var diceRoll = randomGen(10);

    if (diceRoll == 0 || diceRoll == 1) { return "Uninhabited: There are no peoples living in this region"}
    if (diceRoll == 2) { return "Isolated Low-Tech Groups: The region is mostly uninhabited, but a few small tribes, families, or bands of people live here, but off from the rest of the world."}
    if (diceRoll == 3) { return "Scattered Individuals: The region has a few individuals living on isolated farmsteads, hunting lodges, or simply in homes far removed from any major population centers."}
    if (diceRoll == 4 || diceRoll == 5) { return "Small Communities: The region has some small towns or hamlets, with scattered homes or farms in between."}
    if (diceRoll == 6) { return "Midsized Towns: The region has some moderated sized towns with smaller towns or hamlets on their outskirts."}
    if (diceRoll == 7) { return "City: The region is dominated by a major city with a large population, with several smaller or mid-sized towns scattered throughout the region."}
    if (diceRoll == 8) { return "Cities: The region has several cities with a sizable population and may be heavily urbanized and developed."}
    if (diceRoll == 9) { return "Megalopolis: The region is heavily urbanized into a single, massive city with a large population. Little may remain of the natural elements of the region, unless preserved."}
}

function oddities () {

}