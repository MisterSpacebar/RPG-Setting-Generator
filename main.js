function randomGen (upto) {
    var max = upto;
    var result = Math.floor(Math.random() * max);
    console.log(result);

    return result
}

function periodPiece () {
    var period = ["Cold War","Victorian England","Vietnam War","World War","Feudualism","Dark Ages","Enlightenment","Age of Discovery","Colonial Africa","Manifest Destiny","Nomadic Wandering"];

    return "•Historical Aesthetics: This setting is draped in a historical look and feel, much like a period piece. Your period piece is: "+period[randomGen(period.length)]
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
    
    return "•Punk is a subgenre of speculative fiction settings featuring a world built on one particular technology that is extrapolated to a highly sophisticated level, a gritty transreal urban style, or a particular approach to social themes. Your punk derivative is "+punk[randomGen(punk.length)];
}

function landmark () {
    var feature = ["Canyons", "Cave Network", "Massive Crater", "Huge Glaciers", "Towering Mountains","Ocean Reefs","Active Volcano"];

    return "•Landmark: "+feature[randomGen(feature.length)];
}

function faction () {
    var diceRoll = randomGen(100);

    if (diceRoll < 8) { return "Academics: Individuals dedicated to learning and research, who may have banded together."}
    if (diceRoll > 7 && diceRoll < 15) { return "Caste System: Social stratification of a society based on heredity."}
    if (diceRoll > 14 && diceRoll < 22) { return "Clans: Traditionally based on an extended family grouping, but may extend beyond family ties."}
    if (diceRoll > 21 && diceRoll < 30) { return "Corporation: Formal business with executives, board members, officiers, employees, etc."}
    if (diceRoll > 29 && diceRoll < 37) { return "Fans/Fanatics: People that have banded together over a common interest and may struggle against other similar groups that do not share their beliefs."}
    if (diceRoll > 36 && diceRoll < 46) { return "Guild: An organization of people that may have a monopoly on a particular portion of the market, or a loose collective of individuals who just wants to look out for one another when a greater threat looms."}
    if (diceRoll > 45 && diceRoll < 56) { return "Military: A militant group that tend to follow a strict hierarchy, with professional codes of conduct."}
    if (diceRoll > 55 && diceRoll < 65) { return "Pirates: A faction of outlaws that usually has rallied around a singluar charismatic leader."}
    if (diceRoll > 64 && diceRoll < 74) { return "Political Faction: A group of individuals who share common overall political and societal viewpoints."}
    if (diceRoll > 73 && diceRoll < 83) { return "Rebels/Terrorists: Groups working towards a violent overthrowing of an organization or government."}
    if (diceRoll > 82 && diceRoll < 91) { return "Religious Organization: A group of individuals with similar philosophical and/or religious beliefs."}
    if (diceRoll > 90) { return "Union: A group of working-class individuals who have banded together to lobby for better working conditions, pay, or other benefits."}
}

function objectives () {
    var diceRoll = randomGen(100);

    if (diceRoll < 7) { return "Assassination (the organization attempts to covertly murder influential individuals who threaten its existance)"}
    if (diceRoll > 6 && diceRoll < 15) { return "Economic Growth (the organization is maximizing its potential for monetary earnings)"}
    if (diceRoll > 14 && diceRoll < 22) { return "Exploration (the organzation wishes to explore specific regions for raw materials, discoveries, isolated societies, glory, etc.)"}
    if (diceRoll > 21 && diceRoll < 30) { return "Illicit Activities (the organization runs criminal rackets such as smuggling, gambling, extortion, or similar measures to make money and/or to control certain areas or types of operations"}
    if (diceRoll > 29 && diceRoll < 36) { return "Investigation (the organization carries out investigations of controversial or criminial activities in order to protect the public or to further their objectives)"}
    if (diceRoll > 35 && diceRoll < 45) { return "Enforcement (the organization enforces the laws of the land)"}
    if (diceRoll > 44 && diceRoll < 54) { return "Military Expansion (the organization expands its power through military means, such as invasions or conquests)"}
    if (diceRoll > 53 && diceRoll < 64) { return "Monopoly (the organization seeks to corner the market for specific goods and services)"}
    if (diceRoll > 63 && diceRoll < 72) { return "Overthrow (the organization seeks to overthrow the head of another organization or government or another powerful entity)"}
    if (diceRoll > 71 && diceRoll < 81) { return "Protection (the organization seeks to protect something or a group or allied organizations)"}
    if (diceRoll > 80 && diceRoll < 88) { return "Research (the organization researches specific subjectives to facilitate developments)"}
    if (diceRoll > 87 && diceRoll < 94) { return "Territory (the organization seeks to expand its territory or influence to protect what it already has)"}
    if (diceRoll > 93) { return "Terrorism (the organization are trained and funded to achieve change through violent attacks against a population)"}
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

    if (diceRoll < 6) { return "•Aliens: Intelligent aliens are threatening the world, come to uplift society in peace, or are secretly living amongst society."};
    if (diceRoll > 5 && diceRoll < 10) { return "•Afterlife: Characters have direct contact with the afterlife, either personally or via conduits such as artifacts or mediums."};
    if (diceRoll > 9 && diceRoll < 12) { return "•Alternate History: 'What-If' real world scenarios with few changes, that, over time, results in mahor divergences from our reality."}
    if (diceRoll > 11 && diceRoll < 13) {return "•Automation: A world dominated by more automated devices such as vehicles and nonsentient robots than human beings."}
    if (diceRoll > 12 && diceRoll < 15) { return "•Betrayal: Betrayal is commonplace in the setting, with backstabbing courtiers, vengeful peoples, and greedy individuals"}
    if (diceRoll > 14 && diceRoll < 17) { return "•Believable Technologies: This setting features technology that is realistic based on our reality. Any unrealistic technologies are generally still logically feasible."}
    if (diceRoll > 16 && diceRoll < 19) { return "•Castles:  Some type of castle or fortress play a central role to the setting or story."}
    if (diceRoll > 18 && diceRoll < 20) { return "•Cyberspace: Cyberspaces and virtual realities are as 'real' as reality in this setting or story."}
    if (diceRoll > 19 && diceRoll < 24) { return "•Dungeons: Caves, dungeons, ruins, and tombs play a central part of the setting or story."}
    if (diceRoll > 23 && diceRoll < 26) { return "•Environmental Disaster: Natural or man-made disaster(s) have drastically altered the world or is currently in the process of doing so."}
    if (diceRoll > 25 && diceRoll < 30) { return "•Gods: A pantheon of deities take an active interest in the world, influencing and interfering with the lives of its inhabitants."}
    if (diceRoll > 29 && diceRoll < 35) { return "•Good vs. Evil: Some factions and/or individuals are objectively 'Good', while others are unambigously 'Evil'. Stories in this setting revolve around the struggle between these factions."}
    if (diceRoll > 34 && diceRoll < 40) { return periodPiece() }
    if (diceRoll > 39 && diceRoll < 45) { return "•Warrior Caste: The setting features a class of individuals who are capable combatants that usually adhere to a code of honor."}
    if (diceRoll > 44 && diceRoll < 47) { return "•Lost: A major element of the setting has been lost for for a long time and a major plot point is the journey to find it."}
    if (diceRoll > 46 && diceRoll < 50) { return "•Magic: Magic and mysticism is a major element in the setting and the goals of many of its character is its acquisition."}
    if (diceRoll > 49 && diceRoll < 53) { return "•Mad Science: The setting features weird pseudoscitific devices and ideas, usually championed by eccentric, reckless individuals."}
    if (diceRoll > 52 && diceRoll < 57) { return "•Monsters: Weird, fantastic, otherworldly, or otherwise dangerous creatures are a major focus and threat of this setting. Cultures have to work to accommodate or protect against these creatures, and those who are proficient at defeating them are touted as heroes."}
    if (diceRoll > 56 && diceRoll < 60) { return "•Monster Army: A horde of monstrers under the command of a powerful leader threatens part or all of the setting."}
    if (diceRoll > 58 && diceRoll < 61) { return "•Movie Realism: Realism takes a back seat to movie-inspired scenes. Heroes survive or fight through debilitating injuries, explosions are bigger than normal, and characters make decisions based on advancing the plot instead of common sense."}
    if (diceRoll > 60 && diceRoll < 64) { return "•Mutants: Genetically modified humans or other creatures are commonplace. They may be advanced versions of normal people, or terrifying creatures resulting fromt radiation or other effects."}
    if (diceRoll > 63 && diceRoll < 69) { return "•New Frontier: The setting takes place at the edge of civilization and beyond, whether in space, the deep ocean, or a new plane of reality."}
    if (diceRoll > 68 && diceRoll < 73) { return "•Post-Apocalyptic: The civilized world has effectived ended, and the survivors are trying to pick up the pieces. Broken leftover technology, abandoned cities, anarchy, and warlords are frequent elements of the setting."}
    if (diceRoll > 72 && diceRoll < 77) { return "•Gritty Realism: The setting has a prevalent theme of gritty realism. Things go wrong for the major characters, villians sometimes win, people act out of self-interest, and decisions can be motivated by misinformation, bias, fear, and irrational hatred."}
    if (diceRoll > 76 && diceRoll < 78) { return "•Robots: Sentient robots or androids are a major factor in everyday life the setting. They may be threatening, benign, or both."}
    if (diceRoll > 77 && diceRoll < 85) { return punkFiction() }
    if (diceRoll > 84 && diceRoll < 89) { return "•Interplanetary Travel: No matter what the setting's technology level is, its primary civilizations have some way to travel to different worlds."}
    if (diceRoll > 88 && diceRoll < 95) { return "•Occult: Supernatural creatures such as demons, devils, and possibly angels are prominent characters, often supported by mortal allies."}
    if (diceRoll > 94 && diceRoll < 99) { return "•Undeath: The setting features creatures that live beyond death, such as vampires, spirits, ghosts, and zombies."}
    if (diceRoll > 98) { return "•Underwater: Significant aspects of the setting occur underwater, whether cultures, civilizations, or entire worlds."}
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

    if (diceRoll == 0) { return "•Fractured Land: This region has been split and fractured by some sort of cataclysm."}
    if (diceRoll == 1) { return "•Wasteland: This region is categorized by its lack of easy access to liquid water, extreme temperatures, and hostility to life."}
    if (diceRoll == 2) { return "•Forest: This region is saturated with trees and other forestlife."}
    if (diceRoll == 3) { return "•Plains: Plains are typically some form of grassland, savanna, scrubland, plateau, or some other expanse of flattened ground."}
    if (diceRoll == 4) { return "•Mountain: Cliffs and steep rockfaces make up much of this environment, punctuated by swift-flowing streams, high altitude meadows, and hardly plant and animal life."}
    if (diceRoll == 5) { return "•Swamp: Swamps are wet, waterlogged environments full of sluggish, stagnant water. They tend to be full of disease and decay, but also teeming with life that has adapted to the environment."}
    if (diceRoll == 6) { return "•River Valley: The region is dominated by a single massive river and the lands that drain into it, or a series or river deltas."}
    if (diceRoll == 7) { return "•Ocean: The region is a vast ocean, or an ocean and the coastal regions alongside it. Most life is squatic, and civilizations may live under water or spend a lot of time on the water."}
    if (diceRoll == 8) { return "•Lake: The region is dominated by a large, freshwater lake that is big enough that crossing it may take days, and local inhabitants either live under the water or spend a lot of the time on the water."}
    if (diceRoll == 9) { return landmark() }
}

function population (l) {
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
    var diceRoll = randomGen(100);

    if (diceRoll < 6) { return "•Warlike Wanderers: The region is plagued by wandering groups of warlike nomads. It is difficult to treat with these groups or negotiate with them."}
    if (diceRoll > 5 && diceRoll < 11) { return "•Sky Islands: Mountain-sized chunks of rock float above this region. They are so large that there are entire ecosystems and potential communities inhabit them."}
    if (diceRoll > 10 && diceRoll < 19) { return "•Megafauna: The region has populations of extreme large animals. At minimum, they are the size of larger dinosaurs from Earth's prehistory, but could be bigger."}
    if (diceRoll > 18 && diceRoll < 26) { return "•Spectacular Natural Beauty: The region is extreme beautiful. Local populations treasure the resplendence they live among, and other may journey to this region to bask in its splendor."}
    if (diceRoll > 25 && diceRoll < 34) { return "•Megaflora: Plant life in the region grows to be extreme large. It could include trees kilometers tall, fungi the size of houses, and other plantlife that is large enough to carve residences in."}
    if (diceRoll > 33 && diceRoll < 36) { return "•The Pit: A bottomless pit sits in a prominent location in this region. Nobody knows how this came to be, or whether it is artificial or natural."}
    if (diceRoll > 35 && diceRoll < 47) { return "•Valuable Resource: An extremely valuable resource exists in the region. It may make the locals rich, or it may also cause outsiders to venture into the region to exploit them."}
    if (diceRoll > 46 && diceRoll < 50) { return "•Incomprehensible Intelligences: The local population share the region with some sort of other life that, while seemingly intellegent, is so different that interacting with it is impossible."}
    if (diceRoll > 49 && diceRoll < 59) { return "•Ruins of a Elder Race: The region is dominated by the ruins from an older species or previous culture. Their technology is likely more advanced than that of current civilization, or at least their constructions remain marvels of engineering that dominate the landscape."}
    if (diceRoll > 58 && diceRoll < 64) { return "•Gestalt Life Form: Nearly all local life in the region is linked psychically or biologically, so that it is all part of one vast organism. This does not necessarily apply to the local inhabitants of the society the players may interact with."}
    if (diceRoll > 63 && diceRoll < 69) { return "•Elaborate Cave System: Underneath ths region is an extensive and extremely elaborate cave system with its own complex ecosystem."}
    if (diceRoll > 68 && diceRoll < 71) { return "•Localized Anomalies: For some reason, physics dont quite behave correctly in some parts of this region. Gravity may be stronger or weaker than normal, time may pass differently, or even stranger things may occur."}
    if (diceRoll > 70 && diceRoll < 76) { return "•Secret Base: An organization that has no local ties to the region has set up some sort of facility in it. Whatever it is, its members actively discourage others from being involved with its business. Your Secret Society is: "+faction(randomGen(100))+" They have the objective of "+objectives(randomGen(100))+"."}
    if (diceRoll > 75 && diceRoll < 79) { return "•Dragons: The region is home to a population of massive and intellegent reptilians that can fly and breathe fire or another primal element. They may have their own culture and society, and may regard the other local inhabitants with some mixture of annoyance, disdain, or active dislike."}
    if (diceRoll > 78 && diceRoll < 85) { return "•Constant Storms: The region is plagued by consitant storm systems that may be powerful and violent."}
    if (diceRoll > 84 && diceRoll < 89) { return "•Site of a Great Historical Event: Long ago, something incredibly important happened in a location in the region. Whatever it was, a monument has been erected to memorialize it."}
    if (diceRoll > 88 && diceRoll < 93) { return "•War Zone: This region is plagued by constant (if potentially intermittent) war between two or more factions. Locals work to try and survive the battles and skirmishes going on around them."}
    if (diceRoll > 92 && diceRoll < 98) { return "•Monastery: An organization has set up a monastery or retreat in the region. The organization's members are welcoming and open about their presence and work hard to be good neighbors with the inhabitants. Your Organization is: "+faction(randomGen(100))+" They have the objective of "+objectives(randomGen(100))+"."}
    if (diceRoll > 97) { return "•Hunter: Something lives in the region that hunts its inhabitants for some reason. The Hunter may be a creature, person, or something stranger. Whatever it is, the local communities has been unable to eliminate it and is forced to live around it instead."}
}

function pantheon () {
    var diceRoll = randomGen(10);

    if (diceRoll == 0) { return "composed entirely of good deities."}
    if (diceRoll > 0 && diceRoll < 5) { return "composed of a mix of good and evil deities."}
    if (diceRoll > 4 && diceRoll < 9) { return "composed of amoral deities, neither good nor evil."}
    if (diceRoll == 9) { return "composed entirely of evil deities."}
}

function monotheist () {
    var diceRoll = randomGen(10);

    if (diceRoll < 4) { return "entirely good."}
    if (diceRoll > 3 && diceRoll < 8) { return "amoral, neither good nor evil."}
    if (diceRoll > 7) { return "entirely evil."}
}

function cosmology () {
    var diceRoll = randomGen(10);

    if (diceRoll < 2) { return "No Divine Spark: Religion is absent from this setting. There are no gods or belief in the divine."}
    if (diceRoll > 1 && diceRoll < 5) { return "Polytheistic Pantheon: The setting features a pantheon of powerful beings, each of which has a different portfolio of responsibilities. Your pantheon is "+pantheon()}
    if (diceRoll == 5) { return "World Spirit: The setting believes that all of the souls or spiritual energies of all living things on a world combine into a single gestalt 'World Spirit'."}
    if (diceRoll == 6) { return "Many Spirits: The setting believes that most natural things have a spirit that is a discrete and indentifiable entity."}
    if (diceRoll > 6) { return "Monotheistic Religion: The setting features a singular all-powerful being. The deity may be visualized as an ideal form of the principal species that worships it, or it may be more of a concept or idea. Your deity is "+monotheist()}
}

function government () {
    var diceRoll = randomGen(10);

    if (diceRoll == 0) { return "Anarchy: There is no organized political structure; everyone looks out for themelves and immediate acquantances."}
    if (diceRoll > 0 && diceRoll < 3) { return "Local Rulers: Governance exists on a smaller and local scale, with groups of peoples electing their own rulers, or being ruled by hereditary rulers, or following the banner of warlords."}
    if (diceRoll > 2 && diceRoll < 5) { return "City-State: Each major hub is effectively its own state and controls the territory around them, trades with their neighbors, make war on their enemies, and generally perform all the tasks of a government on a smaller scale."}
    if (diceRoll > 4 && diceRoll < 8) { return "Nation-State: Governance exists on a large scale and often controls many cities and other population centers within its borders."}
    if (diceRoll > 7) { return "World Government: The world is unified under a singular government. Society likely has multiple cultures and ethnicities coexisting side by side, though not necessarily harmoniously."}
}

$("#remake").on("click", function(event){
    event.preventDefault();

    $("#technology").empty();
    $("#size").empty();
    $("#population").empty();
    $("#government").empty();
    $("#religion").empty();
    $("#climate").empty();

    $("#trope1").empty();
    $("#trope2").empty();
    $("#trope3").empty();

    $("#environment1").empty();
    $("#environment2").empty();

    $("#inhabitants1").empty();
    $("#inhabitants2").empty();
    $("#inhabitants3").empty();

    $("#technology").text(technologyLevel());
    $("#size").text(worldStructure());
    $("#population").text(population());
    $("#government").text(government());
    $("#religion").text(cosmology());
    $("#climate").text(climate());

    $("#trope1").text(commonTropes());
    $("#trope2").text(commonTropes());
    $("#trope3").text(commonTropes());

    $("#environment1").text(environment());
    $("#environment2").text(environment());

    $("#inhabitants1").text(oddities());
    $("#inhabitants2").text(oddities());
    $("#inhabitants3").text(oddities());
});