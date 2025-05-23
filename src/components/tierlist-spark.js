import SyncPairIcon from './syncpair-icon';
import $ from 'jquery';
import Select from 'react-select';

const TierListSpark = () => {
    //#region Type Filtering
    let selectedTypes = {};

    let typeOptions = [
        {value: 'normal', label: 'Normal', img: `${process.env.PUBLIC_URL}/images/type/normal.png`},
        {value: 'fire', label: 'Fire', img: `${process.env.PUBLIC_URL}/images/type/fire.png`},
        {value: 'water', label: 'Water', img: `${process.env.PUBLIC_URL}/images/type/water.png`},
        {value: 'electric', label: 'Electric', img: `${process.env.PUBLIC_URL}/images/type/electric.png`},
        {value: 'grass', label: 'Grass', img: `${process.env.PUBLIC_URL}/images/type/grass.png`},
        {value: 'ice', label: 'Ice', img: `${process.env.PUBLIC_URL}/images/type/ice.png`},
        {value: 'fighting', label: 'Fighting', img: `${process.env.PUBLIC_URL}/images/type/fighting.png`},
        {value: 'poison', label: 'Poison', img: `${process.env.PUBLIC_URL}/images/type/poison.png`},
        {value: 'ground', label: 'Ground', img: `${process.env.PUBLIC_URL}/images/type/ground.png`},
        {value: 'flying', label: 'Flying', img: `${process.env.PUBLIC_URL}/images/type/flying.png`},
        {value: 'psychic', label: 'Psychic', img: `${process.env.PUBLIC_URL}/images/type/psychic.png`},
        {value: 'bug', label: 'Bug', img: `${process.env.PUBLIC_URL}/images/type/bug.png`},
        {value: 'rock', label: 'Rock', img: `${process.env.PUBLIC_URL}/images/type/rock.png`},
        {value: 'ghost', label: 'Ghost', img: `${process.env.PUBLIC_URL}/images/type/ghost.png`},
        {value: 'dragon', label: 'Dragon', img: `${process.env.PUBLIC_URL}/images/type/dragon.png`},
        {value: 'dark', label: 'Dark', img: `${process.env.PUBLIC_URL}/images/type/dark.png`},
        {value: 'steel', label: 'Steel', img: `${process.env.PUBLIC_URL}/images/type/steel.png`},
        {value: 'fairy', label: 'Fairy', img: `${process.env.PUBLIC_URL}/images/type/fairy.png`}
    ];

    function changeSelectedTypes(types) {
        selectedTypes = {};
        types.forEach((type) => selectedTypes[type.value] = 1);
    }
    //#endregion

    //#region Trainer Filtering
    let selectedTrainers = {};
    
    // Each line is a letter of the alphabet. If a new trainer is added, just find where they would fit alphabetically and add them.
    let trainerOptions = [
        {value: 'aaron-trainer', label: 'Aaron'},{value: 'acerola-trainer', label: 'Acerola'},{value: 'adaman-trainer', label: 'Adaman'},{value: 'agatha-trainer', label: 'Agatha'},{value: 'akari-trainer', label: 'Akari'},{value: 'alder-trainer', label: 'Alder'},{value: 'allister-trainer', label: 'Allister'},{value: 'anabel-trainer', label: 'Anabel'},{value: 'archer-trainer', label: 'Archer'},{value: 'archie-trainer', label: 'Archie'},{value: 'argenta-trainer', label: 'Argenta'},{value: 'ariana-trainer', label: 'Ariana'},{value: 'arven-trainer', label: 'Arven'},{value: 'ash-trainer', label: 'Ash'},{value: 'atticus-trainer', label: 'Atticus'},{value: 'avery-trainer', label: 'Avery'},
        {value: 'ball-guy-trainer', label: 'Ball Guy'},{value: 'barry-trainer', label: 'Barry'},{value: 'bea-trainer', label: 'Bea'},{value: 'bede-trainer', label: 'Bede'},{value: 'benga-trainer', label: 'Benga'},{value: 'bertha-trainer', label: 'Bertha'},{value: 'bianca-trainer', label: 'Bianca'},{value: 'blaine-trainer', label: 'Blaine'},{value: 'blossom-trainer', label: 'Blossom'},{value: 'blue-trainer', label: 'Blue'},{value: 'brawly-trainer', label: 'Brawly'},{value: 'brendan-trainer', label: 'Brendan'},{value: 'brock-trainer', label: 'Brock'},{value: 'bruno-trainer', label: 'Bruno'},{value: 'brycen-trainer', label: 'Brycen'},{value: 'bugsy-trainer', label: 'Bugsy'},{value: 'burgh-trainer', label: 'Burgh'},
        {value: 'caitlin-trainer', label: 'Caitlin'},{value: 'calem-trainer', label: 'Calem'},{value: 'candice-trainer', label: 'Candice'},{value: 'chase-trainer', label: 'Chase'},{value: 'cheren-trainer', label: 'Cheren'},{value: 'cheryl-trainer', label: 'Cheryl'},{value: 'chuck-trainer', label: 'Chuck'},{value: 'clair-trainer', label: 'Clair'},{value: 'clavell-trainer', label: 'Clavell'},{value: 'clay-trainer', label: 'Clay'},{value: 'clemont-trainer', label: 'Clemont'},{value: 'colress-trainer', label: 'Colress'},{value: 'courtney-trainer', label: 'Courtney'},{value: 'crasher-wake-trainer', label: 'Crasher-Wake'},{value: 'cynthia-trainer', label: 'Cynthia'},{value: 'cyrus-trainer', label: 'Cyrus'},
        {value: 'dahlia-trainer', label: 'Dahlia'},{value: 'dana-trainer', label: 'Dana'},{value: 'darach-trainer', label: 'Darach'},{value: 'dawn-trainer', label: 'Dawn'},{value: 'dexio-trainer', label: 'Dexio'},{value: 'diantha-trainer', label: 'Diantha'},{value: 'drake-trainer', label: 'Drake'},{value: 'drasna-trainer', label: 'Drasna'},
        {value: 'elaine-trainer', label: 'Elaine'},{value: 'elesa-trainer', label: 'Elesa'},{value: 'elio-trainer', label: 'Elio'},{value: 'emma-trainer', label: 'Emma'},{value: 'emmet-trainer', label: 'Emmet'},{value: 'eri-trainer', label: 'Eri'},{value: 'erika-trainer', label: 'Erika'},{value: 'ethan-trainer', label: 'Ethan'},{value: 'eusine-trainer', label: 'Eusine'},{value: 'eve-trainer', label: 'Eve'},{value: 'evelyn-trainer', label: 'Evelyn'},
        {value: 'falkner-trainer', label: 'Falkner'},{value: 'fantina-trainer', label: 'Fantina'},{value: 'flannery-trainer', label: 'Flannery'},{value: 'flint-trainer', label: 'Flint'},{value: 'florian-trainer', label: 'Florian'},
        {value: 'gardenia-trainer', label: 'Gardenia'},{value: 'geeta-trainer', label: 'Geeta'},{value: 'ghetsis-trainer', label: 'Ghetsis'},{value: 'giacomo-trainer', label: 'Giacomo'},{value: 'giovanni-trainer', label: 'Giovanni'},{value: 'glacia-trainer', label: 'Glacia'},{value: 'gladion-trainer', label: 'Gladion'},{value: 'gloria-trainer', label: 'Gloria'},{value: 'gordie-trainer', label: 'Gordie'},{value: 'grant-trainer', label: 'Grant'},{value: 'greta-trainer', label: 'Greta'},{value: 'grimsley-trainer', label: 'Grimsley'},{value: 'grusha-trainer', label: 'Grusha'},{value: 'guzma-trainer', label: 'Guzma'},
        {value: 'hala-trainer', label: 'Hala'},{value: 'hapu-trainer', label: 'Hapu'},{value: 'hau-trainer', label: 'Hau'},{value: 'helena-trainer', label: 'Helena'},{value: 'hilbert-trainer', label: 'Hilbert'},{value: 'hilda-trainer', label: 'Hilda'},{value: 'hop-trainer', label: 'Hop'},{value: 'hugh-trainer', label: 'Hugh'},
        {value: 'ilima-trainer', label: 'Ilima'},{value: 'ingo-trainer', label: 'Ingo'},{value: 'iono-trainer', label: 'Iono'},{value: 'irida-trainer', label: 'Irida'},{value: 'iris-trainer', label: 'Iris'},
        {value: 'jacq-trainer', label: 'Jacq'},{value: 'james-trainer', label: 'James'},{value: 'janine-trainer', label: 'Janine'},{value: 'jasmine-trainer', label: 'Jasmine'},{value: 'jessie-trainer', label: 'Jessie'},{value: 'juliana-trainer', label: 'Juliana'},
        {value: 'kabu-trainer', label: 'Kabu'},{value: 'kahili-trainer', label: 'Kahili'},{value: 'kali-trainer', label: 'Kali'},{value: 'karen-trainer', label: 'Karen'},{value: 'katherine-trainer', label: 'Katherine'},{value: 'kiawe-trainer', label: 'Kiawe'},{value: 'klara-trainer', label: 'Klara'},{value: 'koga-trainer', label: 'Koga'},{value: 'korrina-trainer', label: 'Korrina'},{value: 'kris-trainer', label: 'Kris'},{value: 'kukui-trainer', label: 'Professor Kukui'},
        {value: 'lacey-trainer', label: 'Lacey'},{value: 'lana-trainer', label: 'Lana'},{value: 'lance-trainer', label: 'Lance'},{value: 'larry-trainer', label: 'Larry'},{value: 'leaf-trainer', label: 'Leaf'},{value: 'lear-trainer', label: 'Lear'},{value: 'lenora-trainer', label: 'Lenora'},{value: 'leon-trainer', label: 'Leon'},{value: 'lillie-trainer', label: 'Lillie'},{value: 'lisia-trainer', label: 'Lisia'},{value: 'liza-trainer', label: 'Liza'},{value: 'looker-trainer', label: 'Looker'},{value: 'lorelei-trainer', label: 'Lorelei'},{value: 'ltsurge-trainer', label: 'Lt. Surge'},{value: 'lucas-trainer', label: 'Lucas'},{value: 'lucian-trainer', label: 'Lucian'},{value: 'lucy-trainer', label: 'Lucy'},{value: 'lusamine-trainer', label: 'Lusamine'},{value: 'lyra-trainer', label: 'Lyra'},{value: 'lysandre-trainer', label: 'Lysandre'},
        {value: 'mallow-trainer', label: 'Mallow'},{value: 'malva-trainer', label: 'Malva'},{value: 'marley-trainer', label: 'Marley'},{value: 'marlon-trainer', label: 'Marlon'},{value: 'marnie-trainer', label: 'Marnie'},{value: 'marshal-trainer', label: 'Marshal'},{value: 'maxie-trainer', label: 'Maxie'},{value: 'may-trainer', label: 'May'},{value: 'maylene-trainer', label: 'Maylene'},{value: 'mela-trainer', label: 'Mela'},{value: 'melony-trainer', label: 'Melony'},{value: 'milo-trainer', label: 'Milo'},{value: 'mina-trainer', label: 'Mina'},{value: 'misty-trainer', label: 'Misty'},{value: 'molayne-trainer', label: 'Molayne'},{value: 'morgan-trainer', label: 'Morgan'},{value: 'morty-trainer', label: 'Morty'},
        {value: 'n-trainer', label: 'N'},{value: 'nanu-trainer', label: 'Nanu'},{value: 'naomi-trainer', label: 'Naomi'},{value: 'nate-trainer', label: 'Nate'},{value: 'nemona-trainer', label: 'Nemona'},{value: 'nessa-trainer', label: 'Nessa'},{value: 'nita-trainer', label: 'Nita'},{value: 'noland-trainer', label: 'Noland'},{value: 'norman-trainer', label: 'Norman'},
        {value: 'oak-trainer', label: 'Professor Oak'},{value: 'oleana-trainer', label: 'Oleana'},{value: 'olivia-trainer', label: 'Olivia'},{value: 'olympia-trainer', label: 'Olympia'},{value: 'ortega-trainer', label: 'Ortega'},
        {value: 'palmer-trainer', label: 'Palmer'},{value: 'paulo-trainer', label: 'Paulo'},{value: 'penny-trainer', label: 'Penny'},{value: 'petey-trainer', label: 'Petey'},{value: 'petrel-trainer', label: 'Petrel'},{value: 'phoebe-trainer', label: 'Phoebe'},{value: 'piers-trainer', label: 'Piers'},{value: 'player-trainer', label: 'Player'},{value: 'plumeria-trainer', label: 'Plumeria'},{value: 'poppy-trainer', label: 'Poppy'},{value: 'proton-trainer', label: 'Proton'},{value: 'pryce-trainer', label: 'Pryce'},
        
        {value: 'rachel-trainer', label: 'Rachel'},{value: 'raihan-trainer', label: 'Raihan'},{value: 'ramos-trainer', label: 'Ramos'},{value: 'red-trainer', label: 'Red'},{value: 'rei-trainer', label: 'Rei'},{value: 'rika-trainer', label: 'Rika'},{value: 'riley-trainer', label: 'Riley'},{value: 'roark-trainer', label: 'Roark'},{value: 'rosa-trainer', label: 'Rosa'},{value: 'rose-trainer', label: 'Rose'},{value: 'roxanne-trainer', label: 'Roxanne'},{value: 'roxie-trainer', label: 'Roxie'},{value: 'ryuki-trainer', label: 'Ryuki'},
        {value: 'sabrina-trainer', label: 'Sabrina'},{value: 'sawyer-trainer', label: 'Sawyer'},{value: 'selene-trainer', label: 'Selene'},{value: 'serena-trainer', label: 'Serena'},{value: 'shauna-trainer', label: 'Shauna'},{value: 'shauntal-trainer', label: 'Shauntal'},{value: 'sidney-trainer', label: 'Sidney'},{value: 'siebold-trainer', label: 'Siebold'},{value: 'silver-trainer', label: 'Silver'},{value: 'sina-trainer', label: 'Sina'},{value: 'skyla-trainer', label: 'Skyla'},{value: 'sonia-trainer', label: 'Sonia'},{value: 'sophocles-trainer', label: 'Sophocles'},{value: 'steven-trainer', label: 'Steven'},{value: 'sycamore-trainer', label: 'Professor Sycamore'},
        {value: 'tate-trainer', label: 'Tate'},{value: 'teddy-trainer', label: 'Teddy'},{value: 'thorton-trainer', label: 'Thorton'},{value: 'tierno-trainer', label: 'Tierno'},{value: 'tina-trainer', label: 'Tina'},{value: 'trevor-trainer', label: 'Trevor'},
        
        {value: 'valerie-trainer', label: 'Valerie'},{value: 'victor-trainer', label: 'Victor'},{value: 'viola-trainer', label: 'Viola'},{value: 'volkner-trainer', label: 'Volkner'},{value: 'volo-trainer', label: 'Volo'},
        {value: 'wallace-trainer', label: 'Wallace'},{value: 'wally-trainer', label: 'Wally'},{value: 'whitney-trainer', label: 'Whitney'},{value: 'wikstrom-trainer', label: 'Wikstrom'},{value: 'will-trainer', label: 'Will'},{value: 'winona-trainer', label: 'Winona'},{value: 'wulfric-trainer', label: 'Wulfric'},
        
        
        {value: 'zinnia-trainer', label: 'Zinnia'},
    ]

    function changeSelectedTrainers(trainers) {
        selectedTrainers = {};
        trainers.forEach((trainer) => selectedTrainers[trainer.value] = 1);
    }
    //#endregion
    
    //#region Theme Skill Filtering
    let selectedRegions = {};

    let regionOptions = [
        {value: 'kanto', label: 'Kanto'},{value: 'johto', label: 'Johto'},
        {value: 'hoenn', label: 'Hoenn'},{value: 'sinnoh', label: 'Sinnoh (includes Hisui)'},{value: 'hisui', label: 'Hisui'},
        {value: 'unova', label: 'Unova'},{value: 'kalos', label: 'Kalos'},
        {value: 'alola', label: 'Alola'},{value: 'galar', label: 'Galar'},
        {value: 'paldea', label: 'Paldea'},{value: 'pasio', label: 'Pasio'},
    ];

    function changeSelectedRegions(regions) {
        selectedRegions = {};
        regions.forEach((region) => selectedRegions[region.value] = 1);
    }

    let selectedThemes = {};
    
    let themeOptions = [
        {value: 'gym-leader', label: 'Gym Leader'},{value: 'elite-four', label: 'Elite Four'},{value: 'champion', label: 'Champion'},{value: 'main-character', label: 'Main Character'},
        {value: 'rival', label: 'Rival'},{value: 'villain', label: 'Villain'},{value: 'trial-giver', label: 'Trial Giver'},{value: 'battle-facility-foe', label: 'Battle Facility Foe'},
        
        {value: 'arc-suit', label: 'Arc Suit'},{value: 'cape', label: 'Cape'},{value: 'glasses', label: 'Glasses'},{value: 'masked', label: 'Masked'},{value: 'pigtails', label: 'Pigtails'},{value: 'scarf', label: 'Scarf'},
        {value: 'seasonal-outfit', label: 'Seasonal Outfit'},{value: 'special-costume', label: 'Special Costume'},{value: 'Sunglasses', label: 'Sunglasses'},{value: 'sygna-suit', label: 'Sygna Suit'},
        
        {value: 'alola-adventurer', label: 'Alola Adventurer'},{value: 'artistic', label: 'Artistic'},{value: 'battle-partner', label: 'Battle Partner'},{value: 'battleground-foe', label: 'Battleground Foe'},{value: 'body-builder', label: 'Body Builder'},
        {value: 'complicated-family', label: 'Complicated Family'},{value: 'contest-lover', label: 'Contest Lover'},{value: 'cook', label: 'Cook'},{value: 'dragon-cousin', label: 'Dragon Cousin'},{value: 'fancy-lady', label: 'Fancy Lady'},
        {value: 'free-spirit', label: 'Free Spirit'},{value: 'gadgeteer', label: 'Gadgeteer'},{value: 'galar-adventurer', label: 'Galar Adventurer'},{value: 'grown-woman', label: 'Grown Woman'},{value: 'hoenn-family', label: 'Hoenn Family'},
        {value: 'kalos-neighbors', label: 'Kalos Neighbors'},{value: 'knowledgeable', label: 'Knowledgeable'},{value: 'melemele-family', label: 'Melemele Family'},{value: 'nature-lover', label: 'Nature Lover'},{value: 'ninja-family', label: 'Ninja Family'},
        {value: 'observatory-cousin', label: 'Observatory Cousin'},{value: 'old-colleagues', label: 'Old Colleagues'},{value: 'old-timer', label: 'Old-Timer'},{value: 'pallet-town', label: 'Pallet Town'},{value: 'passionate-spirit', label: 'Passionate Spirit'},
        {value: 'pokeathlete', label: 'Pokeathlete'},{value: 'researcher', label: 'Researcher'},{value: 'rock-lover', label: 'Rock Lover'},{value: 'sinnoh-bros', label: 'Sinnoh Bros'},{value: 'shiny', label: 'Shiny'},{value: 'space-cadet', label: 'Space Cadet'},
        {value: 'supernatural', label: 'Supernatural'},{value: 'sweet-tooth', label: 'Sweet Tooth'},{value: 'team-rocket-forever', label: 'Team Rocket Forever'},{value: 'team-star', label: 'Team Star'},{value: 'undella-town', label: 'Undella Town'},{value: 'unova-adventurer', label: 'Unova Adventurer'},
        {value: 'unova-gym-besties', label: 'Unova Gym Besties'},{value: 'veteran-trainer', label: 'Veteran Trainer'},
    ];

    function changeSelectedThemes(themes) {
        selectedThemes = {};
        themes.forEach((theme) => selectedThemes[theme.value] = 1);
    }
    //#endregion
    
    //#region Acquisition Filtering
    let selectedAcquisitionMethods = {};

    function toggleAcquisitions(method) {
        if (method in selectedAcquisitionMethods) {
            delete selectedAcquisitionMethods[method]
        }
        else {
            selectedAcquisitionMethods[method] = 1;
        }
    }

    //#endregion
    
    //#region Role/EXR Filtering
    let selectedRoles = {};
    let selectedEXRs = {};

    let roleOptions = [
        {value: 'strike', label: 'Strike'},{value: 'tech', label: 'Tech'},{value: 'support', label: 'Support'},{value: 'sprint', label: 'Sprint'},{value: 'field', label: 'Field'},{value: 'multi', label: 'Multi'}
    ];

    let exrOptions = [
        {value: 'exr-strike', label: 'Strike'},{value: 'exr-tech', label: 'Tech'},{value: 'exr-support', label: 'Support'},{value: 'exr-sprint', label: 'Sprint'},{value: 'exr-field', label: 'Field'},{value: 'exr-none', label: 'Has no EX Role'}
    ];

    function changeRoles(roles) {
        selectedRoles = {};
        roles.forEach((role) => selectedRoles[role.value] = 1);
    }

    function changeEXRs(exrs) {
        selectedEXRs = {};
        exrs.forEach((exr) => selectedEXRs[exr.value] = 1);
    }

    //#endregion

    function filterSearch() {
        $('.not-found').removeClass('not-found');

        let foundAnyPairs = false;
        const iterableLists = [selectedTypes, selectedTrainers, selectedRegions, selectedThemes, selectedAcquisitionMethods, selectedRoles, selectedEXRs];
        iterableLists.forEach(filterList => {
            for (const key in filterList) {
                $(`.sync-pair.${key}`).addClass('query-found');
            }
            if (Object.keys(filterList).length > 0) {
                foundAnyPairs = foundAnyPairs || $('.query-found').length > 0;
                if (foundAnyPairs) {
                    $('.sync-pair:not(.query-found)').addClass('not-found');
                    $('.query-found').removeClass('query-found');
                }
            }
        });
    }

    function clearSearch() {
        $('.not-found').removeClass('not-found');
        window.location.reload();
    }
    
    //#region Page HTML
    // Add sync pairs not in the tierlist yet to not-included-row with the `filter-excluded` tag.
    return (
        <div className="tierlist-page">
            <div className="banner tierlist-banner">
                <img src={`${process.env.PUBLIC_URL}/images/app-bg.png`} className="banner-img" alt="" />
                <h1 className="banner-title">Tier List Companion</h1>
            </div>
            <div className="tierlist-header">
                <h2>About the Tier List Companion</h2>
                <p>This companion is based on Spark's tier list, currently maintained by Ropalme, Rion, and Darkshark. 
                    I am not involved with the placement of sync pairs on the tier list, but I am maintaining this resource as a way to look for specific sync pairs.
                </p>
                <div className="not-ranked">
                    <h3>The following sync pairs are not ranked on the tierlist at the moment, since they were added in the most recent update:</h3>
                    <div className="tierlist-row not-included-row">
                    </div>
                </div>
            </div>
            <div className="sync-pair-filters">
                <div className="theme-filters">
                    <h3 className="section-header">Trainer & Theme Skills</h3>
                    <div className="type-trainer-filters">
                        <div className="type-filters">
                            <h4 className="section-header">
                                <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/skillbracelet.png`} alt="Bracelet Skill Gear" />
                                Type Theme Skills
                                <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/skillbandanna.png`} alt="Bandanna Skill Gear" />
                            </h4>
                            <Select placeholder="You may select types to filter by." closeMenuOnSelect={false} isMulti options={typeOptions} onChange={changeSelectedTypes}
                            formatOptionLabel={type => (
                                <div className="type-option">
                                    <img className="dropdown-img" src={type.img} alt={type.label} />
                                    <span>{type.label}</span>
                                </div>
                            )} />
                        </div>
                        <div className="trainer-filters">
                            <h4 className="section-header">
                                <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/ticket.png`} alt="Scout Ticket" />
                                Trainer
                                <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/ticket.png`} alt="Scout Ticket" />
                            </h4>
                            <Select placeholder="You may select Trainers to filter by." closeMenuOnSelect={false} isMulti options={trainerOptions} onChange={changeSelectedTrainers}
                            formatOptionLabel={trainer => (
                                <div className="trainer-option">
                                    <img className="dropdown-img" src={`${process.env.PUBLIC_URL}/images/trainers/${trainer.value.replace('-trainer', '').replace('-', '')}.png`} alt={trainer.label} />
                                    <span>{trainer.label}</span>
                                </div>
                            )} />
                        </div>
                    </div>
                    <div className="misc-theme-filters">
                        <div className="region-filter">
                            <h4 className="section-header">
                                <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/pokedex.png`} alt="Pokédex" />
                                Region
                                <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/pokedex.png`} alt="Pokédex" />
                            </h4>
                            <Select placeholder="Select regions" closeMenuOnSelect={false} isMulti options={regionOptions} onChange={changeSelectedRegions} />
                        </div>
                        <div className="theme-filter">
                            <h4 className="section-header">
                                <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/skillsphere.png`} alt="Skill Sphere" />
                                Other Theme Skills
                                <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/skillsphere.png`} alt="Skill Sphere" />
                            </h4>
                            <Select placeholder="Select other theme skills" closeMenuOnSelect={false} isMulti options={themeOptions} onChange={changeSelectedThemes} />
                        </div>
                    </div>
                </div>
                
                <div className="role-acquisition-filters">
                    <div className="role-filters">
                        <h3 className="section-header">
                            <img className="header-img" src={`${process.env.PUBLIC_URL}/images/roles/strike.png`} alt="Strike" />
                            <img className="header-img" src={`${process.env.PUBLIC_URL}/images/roles/tech.png`} alt="Tech" />
                            <img className="header-img" src={`${process.env.PUBLIC_URL}/images/roles/support.png`} alt="Support" />
                            Role & EX Role
                            <img className="header-img" src={`${process.env.PUBLIC_URL}/images/roles/sprint.png`} alt="Sprint" />
                            <img className="header-img" src={`${process.env.PUBLIC_URL}/images/roles/field.png`} alt="Field" />
                            <img className="header-img" src={`${process.env.PUBLIC_URL}/images/roles/multi.png`} alt="Multi" />
                        </h3>
                        <div className="role-sections">
                            <div className="role-filter">
                                <div className="role-filter-body">
                                    <Select placeholder="Select base roles" closeMenuOnSelect={false} isMulti options={roleOptions} onChange={changeRoles}
                                    formatOptionLabel={role => (
                                        <div className="role-option">
                                            <img className="dropdown-img" src={`${process.env.PUBLIC_URL}/images/roles/${role.value}.png`} alt={role.label} />
                                            <span>{role.label}</span>
                                        </div>
                                    )} />
                                </div>
                            </div>
                            <div className="exr-filter">
                                <div className="role-filter-body">
                                    <Select placeholder="Select EX roles" closeMenuOnSelect={false} isMulti options={exrOptions} onChange={changeEXRs}
                                    formatOptionLabel={role => (
                                        <div className="role-option">
                                            <img className="dropdown-img" src={`${process.env.PUBLIC_URL}/images/roles/${role.value.replace('exr-', '')}.png`} alt={role.label} />
                                            <span>{role.label}</span>
                                        </div>
                                    )} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="acquisition-filters">
                        <h3 className="section-header">
                            <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/gems.png`} alt="Gems" />
                            Acquisition
                            <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/gems.png`} alt="Gems" />
                        </h3>
                        <div className="acquisition-sections">
                            <div className="f2p-section">
                                <h4 className="section-header">Free-to-Play</h4>
                                <div className="filter-option">
                                    <input type="checkbox" id="story-acquisition" onChange={() => toggleAcquisitions("story")}/>
                                    <label htmlFor="story-acquisition">Story</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="la-acquisition" onChange={() => toggleAcquisitions("legendary-adventure")}/>
                                    <label htmlFor="la-acquisition">Legendary Adventure</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="event-acquisition" onChange={() => toggleAcquisitions("event")}/>
                                    <label htmlFor="event-acquisition">Event</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="ticket-acquisition" onChange={() => toggleAcquisitions("ticket")}/>
                                    <label htmlFor="ticket-acquisition">General Pool, in Ticket Scout</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="genpool-acquisition" onChange={() => toggleAcquisitions("genpool")}/>
                                    <label htmlFor="genpool-acquisition">Summonable 3 and 4 Stars</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="bp-acquisition" onChange={() => toggleAcquisitions("battle-point")}/>
                                    <label htmlFor="bp-acquisition">BP Vouchers</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="dc-acquisition" onChange={() => toggleAcquisitions("training-ticket")}/>
                                    <label htmlFor="dc-acquisition">Training Ticket Pairs</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="f2plodge-acquisition" onChange={() => toggleAcquisitions("lodge-free")}/>
                                    <label htmlFor="f2plodge-acquisition">F2P Lodge Pairs</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="gymscout-acquistion" onChange={() => toggleAcquisitions("gym-scout")} />
                                    <label htmlFor="gymscout-acquisition">Gym Scout</label>
                                </div>
                            </div>
                            <div className="limited-section">
                                <h4 className="section-header">Limited</h4>
                                <div className="filter-option">
                                    <input type="checkbox" id="pf-acquisition" onChange={() => toggleAcquisitions("pokefair")}/>
                                    <label htmlFor="pf-acquisition">Poké Fair</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="mf-acquisition" onChange={() => toggleAcquisitions("master-fair")}/>
                                    <label htmlFor="mf-acquisition">Master Fair</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="af-acquisition" onChange={() => toggleAcquisitions("arc-fair")}/>
                                    <label htmlFor="af-acquisition">Arc Suit Fair</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="variety-acquisition" onChange={() => toggleAcquisitions("variety")}/>
                                    <label htmlFor="variety-acquisition">Variety Scout</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="sc-acquisition" onChange={() => toggleAcquisitions("special-costume")}/>
                                    <label htmlFor="sc-acquisition">Special Costume Pairs</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="seasonal-acquisition" onChange={() => toggleAcquisitions("seasonal-scout")}/>
                                    <label htmlFor="seasonal-acquisition">Seasonal Pairs</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="mix-acquisition" onChange={() => toggleAcquisitions("mix-scout")}/>
                                    <label htmlFor="mix-acquisition">Mix Scout Exclusive</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="noticket-acquisition" onChange={() => toggleAcquisitions("no-ticket")}/>
                                    <label htmlFor="noticket-acquisition">General Pool, non-Ticket Scout</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="limlodge-acquisition" onChange={() => toggleAcquisitions("lodge-gacha")}/>
                                    <label htmlFor="limlodge-acquisition">Limited Lodge Pairs</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="submit-btn">
                <button type="button" onClick={() => filterSearch()}>Search</button>
                <button type="button" onClick={() => clearSearch()}>Clear</button>
            </div>
            <div className="tierlists">
                <div className="damage-dealer">
                    <div className="header-row">
                        <h3>Damage Dealer</h3>
                    </div>
                    <div className="damage-dealer-grid">
                        <div className="uber-row tierlist-row">
                            <div className="tier-title">U</div>
                            {SyncPairIcon("May_NC", "red")}
                            {SyncPairIcon("Florian", "orange")}
                            {SyncPairIcon("Leon_Arc", "orange")}
                            {SyncPairIcon("Alder_Arc", "orange")}
                            {SyncPairIcon("Red_NC", "yellow")}
                            {SyncPairIcon("Cheren_NC", "yellow")}
                            {SyncPairIcon("Erika_Pal", "green")}
                            {SyncPairIcon("Lance_Arc", "green")}
                            {SyncPairIcon("Giacomo", "green")}
                            {SyncPairIcon("Marnie_NC", "green")}
                            {SyncPairIcon("Ash", "green")}
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            {SyncPairIcon("Gladion_SS", "red")}
                            {SyncPairIcon("Hop_Var2", "red")}
                            {SyncPairIcon("Juliana", "orange")}
                            {SyncPairIcon("Bede_SS", "orange")}
                            {SyncPairIcon("Mela", "orange")}
                            {SyncPairIcon("Hilda_SS", "orange")}
                            {SyncPairIcon("Lysandre_SS", "orange")}
                            {SyncPairIcon("Steven_SS_Att", "yellow")}
                            {SyncPairIcon("Lear", "yellow")}
                            {SyncPairIcon("Klara", "yellow")}
                            {SyncPairIcon("Serena_SS", "green")}
                            {SyncPairIcon("Irida_SC", "green")}
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            {SyncPairIcon("Selene_Alt", "red")}
                            {SyncPairIcon("Dexio", "red")}
                            {SyncPairIcon("Jacq", "red")}
                            {SyncPairIcon("Piers_SS", "orange")}
                            {SyncPairIcon("Poppy", "orange")}
                            {SyncPairIcon("Rose", "orange")}
                            {SyncPairIcon("Barry_SC", "yellow")}
                            {SyncPairIcon("Adaman_SC", "yellow")}
                            {SyncPairIcon("Cynthia", "yellow")}
                            {SyncPairIcon("Gloria_Alt", "green")}
                            {SyncPairIcon("Hilbert_SS", "green")}
                            {SyncPairIcon("Palmer", "green")}
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            {SyncPairIcon("Emma", "red")}
                            {SyncPairIcon("Sina", "red")}
                            {SyncPairIcon("Eusine", "red")}
                            {SyncPairIcon("Red_SS", "red")}
                            {SyncPairIcon("Lucas", "orange")}
                            {SyncPairIcon("Lusamine_SS", "orange")}
                            {SyncPairIcon("Alder", "yellow")}
                            {SyncPairIcon("Rei_Aca", "yellow")}
                            {SyncPairIcon("Lance", "green")}
                            {SyncPairIcon("Archie", "green")}
                            {SyncPairIcon("Gladion", "green")}
                            {SyncPairIcon("Candice_Pal", "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Giovanni_Var", "red")}
                            {SyncPairIcon("Maxie", "red")}
                            {SyncPairIcon("Cynthia_SS", "red")}
                            {SyncPairIcon("Blue_Cl", "orange")}
                            {SyncPairIcon("Emmet", "orange")}
                            {SyncPairIcon("Olympia", "yellow")}
                            {SyncPairIcon("Diantha_SC", "yellow")}
                            {SyncPairIcon("Korrina_SS", "yellow")}
                            {SyncPairIcon("Gloria", "yellow")}
                            {SyncPairIcon("Iono_F", "green")}
                            {SyncPairIcon("Liza_S", "green")}
                            {SyncPairIcon("Lillie_A", "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Leon", "red")}
                            {SyncPairIcon("Steven_A", "red")}
                            {SyncPairIcon("Giovanni_SS", "red")}
                            {SyncPairIcon("Lisia_NY", "orange")}
                            {SyncPairIcon("Victor", "orange")}
                            {SyncPairIcon("N", "orange")}
                            {SyncPairIcon("Diantha", "orange")}
                            {SyncPairIcon("Ethan_SS", "yellow")}
                            {SyncPairIcon("Raihan", "yellow")}
                            {SyncPairIcon("Leon_SS", "yellow")}
                            {SyncPairIcon("Sonia_SC", "green")}
                            {SyncPairIcon("N_S", "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("Emmet_SC", "red")}
                            {SyncPairIcon("Hugh", "red")}
                            {SyncPairIcon("Erika_SS", "orange")}
                            {SyncPairIcon("Silver", "orange")}
                            {SyncPairIcon("Riley", "yellow")}
                            {SyncPairIcon("Hilda", "yellow")}
                            {SyncPairIcon("Grimsley_SS", "yellow")}
                            {SyncPairIcon("Kris", "yellow")}
                            {SyncPairIcon("Elesa", "green")}
                            {SyncPairIcon("Blue", "green")}
                            {SyncPairIcon("Hilda_SC", "green")}
                            {SyncPairIcon("Iris_F", "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            {SyncPairIcon("May", "red")}
                            {SyncPairIcon("Leon_H", "red")}
                            {SyncPairIcon("Volkner_NY", "orange")}
                            {SyncPairIcon("PlayerM_Solgaleo", "orange")}
                            {SyncPairIcon("Chuck", "orange")}
                            {SyncPairIcon("Bea", "yellow")}
                            {SyncPairIcon("Hala", "yellow")}
                            {SyncPairIcon("Ryuki", "green")}
                            {SyncPairIcon("Cyrus", "green")}
                            {SyncPairIcon("Caitlin", "green")}
                            {SyncPairIcon("Giovanni", "green")}
                            {SyncPairIcon("Brendan", "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            {SyncPairIcon("Wally", "red")}
                            {SyncPairIcon("Allister", "orange")}
                            {SyncPairIcon("Clavell_Ev", "orange")}
                            {SyncPairIcon("Lear_TL", "orange")}
                            {SyncPairIcon("Nessa", "orange")}
                            {SyncPairIcon("Sidney", "orange")}
                            {SyncPairIcon("Guzma", "yellow")}
                            {SyncPairIcon("Skyla_TL", "yellow")}
                            {SyncPairIcon("Burgh", "yellow")}
                            {SyncPairIcon("Hilbert_F", "green")}
                            {SyncPairIcon("Guzma_SC", "green")}
                            {SyncPairIcon("Fantina", "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            {SyncPairIcon("Zinnia", "red")}
                            {SyncPairIcon("Lusamine_BP", "red")}
                            {SyncPairIcon("Morty", "orange")}
                            {SyncPairIcon("Mallow", "orange")}
                            {SyncPairIcon("Olivia", "yellow")}
                            {SyncPairIcon("Valerie_BP", "yellow")}
                            {SyncPairIcon("Lusamine", "yellow")}
                            {SyncPairIcon("Selene", "green")}
                            {SyncPairIcon("Iono_Ev", "green")}
                            {SyncPairIcon("Roark", "green")}
                            {SyncPairIcon("Diantha_TL", "green")}
                            {SyncPairIcon("Shauntal", "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("Drasna", "red")}
                            {SyncPairIcon("Barry", "red")}
                            {SyncPairIcon("Noland", "red")}
                            {SyncPairIcon("Lance_NY", "orange")}
                            {SyncPairIcon("Blue_Ev", "orange")}
                            {SyncPairIcon("Zinnia_BP", "orange")}
                            {SyncPairIcon("Ethan", "orange")}
                            {SyncPairIcon("Volo_TL", "yellow")}
                            {SyncPairIcon("Steven_S", "yellow")}
                            {SyncPairIcon("Hau_DC", "yellow")}
                            {SyncPairIcon("Candice_BP", "yellow")}
                            {SyncPairIcon("Koga", "green")}
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Elesa_Pal", "red")}
                            {SyncPairIcon("Kahili", "red")}
                            {SyncPairIcon("Sophocles_BP", "orange")}
                            {SyncPairIcon("Gloria_S", "orange")}
                            {SyncPairIcon("Siebold", "orange")}
                            {SyncPairIcon("Bugsy", "orange")}
                            {SyncPairIcon("Nate", "orange")}
                            {SyncPairIcon("Roxie", "yellow")}
                            {SyncPairIcon("Looker", "yellow")}
                            {SyncPairIcon("Gloria_TL", "green")}
                            {SyncPairIcon("Bruno", "green")}
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            {SyncPairIcon("Lyra_S", "red")}
                            {SyncPairIcon("Hau", "orange")}
                            {SyncPairIcon("Calem_TL", "orange")}
                            {SyncPairIcon("Rika_TL", "yellow")}
                            {SyncPairIcon("Siebold_H", "yellow")}
                            {SyncPairIcon("Helena", "yellow")}
                            {SyncPairIcon("Tate", "green")}
                            {SyncPairIcon("Mina", "green")}
                            {SyncPairIcon("Marnie_TL", "green")}
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            {SyncPairIcon("Sycamore_TL", "red")}
                            {SyncPairIcon("Korrina", "orange")}
                            {SyncPairIcon("Clair", "orange")}
                            {SyncPairIcon("Valerie", "orange")}
                            {SyncPairIcon("Karen_BP", "orange")}
                            {SyncPairIcon("May_TL", "yellow")}
                            {SyncPairIcon("Gardenia", "yellow")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Katherine", "red")}
                            {SyncPairIcon("Pryce", "orange")}
                            {SyncPairIcon("Hapu", "orange")}
                            {SyncPairIcon("Naomi", "yellow")}
                            {SyncPairIcon("Iris", "yellow")}
                            {SyncPairIcon("Flint", "yellow")}
                            {SyncPairIcon("Jessie", "green")}
                        </div>
                    </div>
                </div>
                <div className="hybrid">
                    <div className="header-row">
                        <h3>Hybrid</h3>
                    </div>
                    <div className="hybrid-grid">
                        <div className="uber-row tierlist-row">
                            <div className="tier-title">U</div>
                            {SyncPairIcon("Cynthia_Arc", "red")}
                            {SyncPairIcon("Red_SST", "orange")}
                            {SyncPairIcon("Leaf_NC", "orange")}
                            {SyncPairIcon("Brendan_NC", "orange")}
                            {SyncPairIcon("Elesa_SSA", "orange")}
                            {SyncPairIcon("Bianca_NC", "yellow")}
                            {SyncPairIcon("Lear_SS", "green")}
                            {SyncPairIcon("N_Arc", "green")}
                            {SyncPairIcon("Serena_NC", "green")}
                            {SyncPairIcon("Dahlia", "green")}
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            {SyncPairIcon("Oleana", "red")}
                            {SyncPairIcon("Roxie_SS", "red")}
                            {SyncPairIcon("Ethan_Var", "orange")}
                            {SyncPairIcon("Lillie_H", "orange")}
                            {SyncPairIcon("Wally_SS", "orange")}
                            {SyncPairIcon("Red_Mix", "yellow")}
                            {SyncPairIcon("Irida", "yellow")}
                            {SyncPairIcon("Adaman", "yellow")}
                            {SyncPairIcon("Lyra_SS", "yellow")}
                            {SyncPairIcon("Geeta", "green")}
                            {SyncPairIcon("Silver_NC", "green")}
                            {SyncPairIcon("Lucas_Mix", "green")}
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            {SyncPairIcon("Lillie_Ev", "red")}
                            {SyncPairIcon("Poppy_NY", "red")}
                            {SyncPairIcon("Dawn_Mix", "red")}
                            {SyncPairIcon("Iono_SS", "red")}
                            {SyncPairIcon("Diantha_SS", "orange")}
                            {SyncPairIcon("Leaf_Mix", "orange")}
                            {SyncPairIcon("Clavell", "orange")}
                            {SyncPairIcon("Hau_SS", "yellow")}
                            {SyncPairIcon("Benga", "yellow")}
                            {SyncPairIcon("Lacey", "yellow")}
                            {SyncPairIcon("Avery", "yellow")}
                            {SyncPairIcon("Hop_NC", "yellow")}
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            {SyncPairIcon("Ingo_SS", "red")}
                            {SyncPairIcon("Skyla_A", "red")}
                            {SyncPairIcon("Morty_Aca", "red")}
                            {SyncPairIcon("Nate_NC", "orange")}
                            {SyncPairIcon("Nemona_SS", "orange")}
                            {SyncPairIcon("Rei", "orange")}
                            {SyncPairIcon("Leon_Alt", "yellow")}
                            {SyncPairIcon("Marnie_Var", "yellow")}
                            {SyncPairIcon("Emmet_SS", "yellow")}
                            {SyncPairIcon("Bede_Var", "yellow")}
                            {SyncPairIcon("Hop_Var", "yellow")}
                            {SyncPairIcon("Gardenia_S", "green")}
                            {SyncPairIcon("Lana_SS", "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Rosa_Aca", "red")}
                            {SyncPairIcon("N_SS", "red")}
                            {SyncPairIcon("Roxanne_F", "red")}
                            {SyncPairIcon("Shauntal_F", "red")}
                            {SyncPairIcon("Silver_SS", "orange")}
                            {SyncPairIcon("May_SS", "orange")}
                            {SyncPairIcon("Larry", "orange")}
                            {SyncPairIcon("Cynthia_Var", "yellow")}
                            {SyncPairIcon("Blue_Mix", "yellow")}
                            {SyncPairIcon("Wallace_NY", "yellow")}
                            {SyncPairIcon("Selene_SC", "yellow")}
                            {SyncPairIcon("N_A", "yellow")}
                            {SyncPairIcon("Cynthia_SSR", "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Raihan_A", "red")}
                            {SyncPairIcon("Marley_Pal", "red")}
                            {SyncPairIcon("Cyrus_SS", "red")}
                            {SyncPairIcon("Zinnia_SC", "red")}
                            {SyncPairIcon("Gloria_Dojo", "orange")}
                            {SyncPairIcon("Elesa_Cl", "orange")}
                            {SyncPairIcon("Akari", "yellow")}
                            {SyncPairIcon("Lyra_Var", "yellow")}
                            {SyncPairIcon("May_A", "yellow")}
                            {SyncPairIcon("Elio_Var", "yellow")}
                            {SyncPairIcon("Calem_Var", "green")}
                            {SyncPairIcon("Marnie_Pal", "green")}
                            {SyncPairIcon("Hilda_Var", "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("Viola_H", "red")}
                            {SyncPairIcon("Hilbert_Var", "orange")}
                            {SyncPairIcon("Selene_Var", "orange")}
                            {SyncPairIcon("Lucas_Var",  "orange")}
							{SyncPairIcon("BrycenMan",  "orange")}
							{SyncPairIcon("Kris_Var",  "yellow")}
							{SyncPairIcon("Paulo",  "yellow")}
							{SyncPairIcon("Noland_Var",  "yellow")}
							{SyncPairIcon("Bede",  "green")}
							{SyncPairIcon("GrimsleyKimono_Var",  "green")}
							{SyncPairIcon("Marnie_Aca",  "green")}
							{SyncPairIcon("Greta",  "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
							{SyncPairIcon("Tate_S",  "red")}
							{SyncPairIcon("Thorton_Var",  "red")}
							{SyncPairIcon("Ariana",  "orange")}
							{SyncPairIcon("Leaf_SS",  "orange")}
							{SyncPairIcon("Steven_SS_Spe",  "orange")}
							{SyncPairIcon("Nemona",  "orange")}
							{SyncPairIcon("Lysandre",  "orange")}
							{SyncPairIcon("Bianca",  "yellow")}
							{SyncPairIcon("Steven_SS",  "yellow")}
							{SyncPairIcon("Lance_Var",  "yellow")}
							{SyncPairIcon("Colress",  "green")}
							{SyncPairIcon("Kiawe_Var",  "green")}
							{SyncPairIcon("Marnie",  "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
							{SyncPairIcon("Iris_Alt",  "red")}
							{SyncPairIcon("Gordie",  "red")}
							{SyncPairIcon("Dawn_NY",  "orange")}
							{SyncPairIcon("Serena",  "orange")}
							{SyncPairIcon("Bianca_DC",  "orange")}
							{SyncPairIcon("Plumeria_Var",  "orange")}
							{SyncPairIcon("Marnie_Ev",  "yellow")}
							{SyncPairIcon("Rosa_SC",  "yellow")}
							{SyncPairIcon("Bertha",  "yellow")}
							{SyncPairIcon("Lucian",  "yellow")}
							{SyncPairIcon("MaskedRoyal",  "yellow")}
							{SyncPairIcon("Whitney_H",  "green")}
							{SyncPairIcon("GrimsleyKimono",  "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
							{SyncPairIcon("Ghetsis",  "red")}
							{SyncPairIcon("Marnie_S",  "red")}
							{SyncPairIcon("Steven",  "red")}
							{SyncPairIcon("Tierno_DC",  "orange")}
							{SyncPairIcon("Nessa_H",  "orange")}
							{SyncPairIcon("Ilima",  "orange")}
							{SyncPairIcon("Ingo_SC",  "orange")}
							{SyncPairIcon("Courtney",  "orange")}
							{SyncPairIcon("Archer",  "yellow")}
							{SyncPairIcon("N_DC",  "yellow")}
							{SyncPairIcon("Serena_Pal",  "yellow")}
							{SyncPairIcon("Victor_Ev",  "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("Petrel",  "red")}
							{SyncPairIcon("Karen",  "red")}
							{SyncPairIcon("Serena_TL",  "red")}
							{SyncPairIcon("Shauna_TL",  "red")}
							{SyncPairIcon("Malva",  "orange")}
							{SyncPairIcon("Wally_DC",  "orange")}
							{SyncPairIcon("Blue_DC",  "orange")}
							{SyncPairIcon("Hugh_DC",  "orange")}
							{SyncPairIcon("N_TL",  "yellow")}
							{SyncPairIcon("Agatha",  "yellow")}
							{SyncPairIcon("Clemont",  "green")}
							{SyncPairIcon("Will",  "green")}
							{SyncPairIcon("Brendan_TL",  "green")}
                            </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Volkner",  "red")}
							{SyncPairIcon("Hop_DC",  "red")}
							{SyncPairIcon("Shauna_DC",  "red")}
							{SyncPairIcon("Darach",  "orange")}
							{SyncPairIcon("Kukui",  "orange")}
							{SyncPairIcon("Blossom",  "orange")}
							{SyncPairIcon("Plumeria",  "orange")}
							{SyncPairIcon("Skyla_H",  "orange")}
							{SyncPairIcon("Whitney",  "orange")}
							{SyncPairIcon("Gladion_DC",  "yellow")}
							{SyncPairIcon("Oak",  "green")}
							{SyncPairIcon("Lisia",  "green")}
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            {SyncPairIcon("Dawn",  "red")}
							{SyncPairIcon("Lacey_TL",  "red")}
							{SyncPairIcon("Cheren_DC",  "red")}
							{SyncPairIcon("Rose_BP",  "orange")}
							{SyncPairIcon("Wikstrom",  "orange")}
							{SyncPairIcon("Irida_TL",  "orange")}
							{SyncPairIcon("Rosa_TL",  "orange")}
							{SyncPairIcon("Cheren_TL",  "yellow")}
							{SyncPairIcon("Nanu",  "yellow")}
							{SyncPairIcon("Silver_TL",  "yellow")}
							{SyncPairIcon("Misty_SS",  "green")}
							{SyncPairIcon("Marnie_DC",  "green")}
							{SyncPairIcon("Silver_DC",  "green")}
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            {SyncPairIcon("Nemona_DC",  "red")}
							{SyncPairIcon("Eve",  "red")}
							{SyncPairIcon("May_Sp",  "orange")}
							{SyncPairIcon("Falkner_BP",  "orange")}
							{SyncPairIcon("Winona",  "orange")}
							{SyncPairIcon("Morty_F",  "yellow")}
							{SyncPairIcon("Acerola_F",  "yellow")}
							{SyncPairIcon("Will_BP",  "yellow")}
							{SyncPairIcon("Volkner_TL",  "yellow")}
							{SyncPairIcon("Barry_DC",  "green")}
							{SyncPairIcon("Brawly",  "green")}
							{SyncPairIcon("Marshal",  "green")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Grimsley",  "red")}
							{SyncPairIcon("Candice",  "red")}
							{SyncPairIcon("Blaine",  "red")}
							{SyncPairIcon("Lillie_TL",  "orange")}
							{SyncPairIcon("Janine",  "orange")}
							{SyncPairIcon("Lance_TL",  "orange")}
							{SyncPairIcon("Sophocles",  "orange")}
							{SyncPairIcon("Steven_TL",  "yellow")}
							{SyncPairIcon("Misty",  "yellow")}
							{SyncPairIcon("Brock",  "green")}
							{SyncPairIcon("Wallace",  "green")}
							{SyncPairIcon("CrasherWake",  "green")}
                        </div>
                        <div className="dminus-row tierlist-row">
                            <div className="tier-title">D-</div>
                            {SyncPairIcon("Erika",  "red")}
							{SyncPairIcon("Calem",  "red")}
							{SyncPairIcon("LtSurge",  "red")}
							{SyncPairIcon("Petey",  "red")}
							{SyncPairIcon("Lucy",  "orange")}
							{SyncPairIcon("Flannery",  "orange")}
							{SyncPairIcon("Grant",  "yellow")}
							{SyncPairIcon("Clay",  "yellow")}
							{SyncPairIcon("Molayne",  "yellow")}
							{SyncPairIcon("Brock_SS",  "yellow")}
							{SyncPairIcon("PlayerM_Pikachu",  "green")}
							{SyncPairIcon("Norman",  "green")}
							{SyncPairIcon("Lorelei",  "green")}
                        </div>
                    </div>
                </div>
                <div className="utility">
                    <div className="header-row">
                        <h3>Utility</h3>
                    </div>
                    <div className="utility-grid">
                        <div className="uber-row tierlist-row">
                            <div className="tier-title">U</div>
                            {SyncPairIcon("Steven_Arc",  "red")}
							{SyncPairIcon("Blue_NC",  "red")}
							{SyncPairIcon("Giovanni_SSA",  "orange")}
							{SyncPairIcon("Rosa_NC",  "orange")}
							{SyncPairIcon("Chase",  "yellow")}
							{SyncPairIcon("Mina_SS",  "yellow")}
							{SyncPairIcon("Morty_SS",  "green")}
							{SyncPairIcon("Cynthia_SSA",  "green")}
							{SyncPairIcon("Elaine",  "green")}
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            {SyncPairIcon("Penny",  "red")}
							{SyncPairIcon("Atticus",  "orange")}
							{SyncPairIcon("Eri",  "orange")}
							{SyncPairIcon("Florian_Aca",  "orange")}
							{SyncPairIcon("Kris_SS",  "orange")}
							{SyncPairIcon("Milo",  "orange")}
							{SyncPairIcon("Acerola_SS",  "orange")}
							{SyncPairIcon("Ortega",  "yellow")}
							{SyncPairIcon("Iono",  "yellow")}
							{SyncPairIcon("Grusha",  "yellow")}
							{SyncPairIcon("Bugsy_H",  "green")}
							{SyncPairIcon("Kabu",  "green")}
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            {SyncPairIcon("Acerola_S",  "red")}
							{SyncPairIcon("Red",  "red")}
							{SyncPairIcon("Rika",  "orange")}
							{SyncPairIcon("Dawn_SS",  "orange")}
							{SyncPairIcon("Argenta",  "orange")}
							{SyncPairIcon("Bede_NC",  "yellow")}
							{SyncPairIcon("Anabel",  "yellow")}
							{SyncPairIcon("Bellelba",  "yellow")}
							{SyncPairIcon("Calem_NC",  "yellow")}
							{SyncPairIcon("Raihan_NY",  "green")}
							{SyncPairIcon("Brendan_SS",  "green")}
							{SyncPairIcon("Elio_Alt",  "green")}
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            {SyncPairIcon("Mallow_Var",  "red")}
							{SyncPairIcon("Falkner_Var",  "orange")}
							{SyncPairIcon("Arven",  "orange")}
							{SyncPairIcon("Blue_SS",  "yellow")}
							{SyncPairIcon("Shauna_SC",  "yellow")}
							{SyncPairIcon("Volo",  "yellow")}
							{SyncPairIcon("Jasmine_H",  "yellow")}
							{SyncPairIcon("Sycamore",  "green")}
							{SyncPairIcon("Aaron",  "green")}
							{SyncPairIcon("Melony",  "green")}
							{SyncPairIcon("Elio",  "green")}
							{SyncPairIcon("Steven_SC",  "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Ingo",  "red")}
							{SyncPairIcon("Sonia",  "red")}
							{SyncPairIcon("Victor_Pal",  "orange")}
							{SyncPairIcon("Leaf",  "orange")}
							{SyncPairIcon("BallGuy",  "orange")}
							{SyncPairIcon("Sawyer_Var",  "yellow")}
							{SyncPairIcon("Lillie_SC",  "yellow")}
							{SyncPairIcon("Kabu_Gym",  "yellow")}
							{SyncPairIcon("Burgh_Sp",  "green")}
							{SyncPairIcon("Phoebe_F",  "green")}
							{SyncPairIcon("Grusha_Gym",  "green")}
							{SyncPairIcon("Whitney_Gym",  "green")}
							{SyncPairIcon("Winona_Gym",  "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Hop",  "red")}
							{SyncPairIcon("Mallow_Pal",  "red")}
							{SyncPairIcon("Brock_Gym",  "orange")}
							{SyncPairIcon("Clair_NY",  "orange")}
							{SyncPairIcon("Jasmine_SC",  "yellow")}
							{SyncPairIcon("Proton",  "yellow")}
							{SyncPairIcon("Tierno",  "yellow")}
							{SyncPairIcon("Oak_Ev",  "yellow")}
							{SyncPairIcon("Lorelei",  "yellow")}
							{SyncPairIcon("Bea_Pal",  "green")}
							{SyncPairIcon("Lyra_SC",  "green")}
							{SyncPairIcon("Allister_F",  "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("Guzma_Var",  "red")}
							{SyncPairIcon("Morgan",  "red")}
							{SyncPairIcon("Sycamore_H",  "orange")}
							{SyncPairIcon("Kiawe",  "orange")}
							{SyncPairIcon("Agatha_Var",  "orange")}
							{SyncPairIcon("Caitlin_F",  "yellow")}
							{SyncPairIcon("Korrina_Gym",  "yellow")}
							{SyncPairIcon("Bruno_Var",  "yellow")}
							{SyncPairIcon("Falkner",  "yellow")}
							{SyncPairIcon("Piers",  "green")}
							{SyncPairIcon("Shauna",  "green")}
							{SyncPairIcon("Iono_TL",  "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            {SyncPairIcon("Hilda_S",  "red")}
							{SyncPairIcon("Lana_TL",  "red")}
							{SyncPairIcon("Lyra",  "red")}
							{SyncPairIcon("Tina",  "orange")}
							{SyncPairIcon("Kabu_TL",  "orange")}
							{SyncPairIcon("Larry_TL",  "orange")}
							{SyncPairIcon("Blue_TL",  "orange")}
							{SyncPairIcon("Hilbert",  "yellow")}
							{SyncPairIcon("Steven_Ev",  "yellow")}
							{SyncPairIcon("Arven_TL",  "yellow")}
							{SyncPairIcon("PlayerM_Mesprit",  "green")}
							{SyncPairIcon("PlayerM_Cobalion",  "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            {SyncPairIcon("Gladion_TL",  "red")}
							{SyncPairIcon("Sabrina_NY",  "red")}
							{SyncPairIcon("Glacia",  "orange")}
							{SyncPairIcon("Steven_SS_Def",  "orange")}
							{SyncPairIcon("Morty_BP",  "orange")}
							{SyncPairIcon("Skyla",  "orange")}
							{SyncPairIcon("Barry_BP",  "yellow")}
							{SyncPairIcon("Lana",  "yellow")}
							{SyncPairIcon("Dawn_TL",  "yellow")}
							{SyncPairIcon("Clemont_BP",  "yellow")}
							{SyncPairIcon("Cheryl_BP",  "green")}
							{SyncPairIcon("Wally_TL",  "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            {SyncPairIcon("Dana",  "red")}
							{SyncPairIcon("Evelyn",  "red")}
							{SyncPairIcon("Rachel_Var",  "red")}
							{SyncPairIcon("Nita",  "orange")}
							{SyncPairIcon("Elesa_SS",  "orange")}
							{SyncPairIcon("PlayerM_Raikou",  "orange")}
							{SyncPairIcon("Sabrina",  "orange")}
							{SyncPairIcon("Sawyer",  "yellow")}
							{SyncPairIcon("Lenora",  "yellow")}
							{SyncPairIcon("Trevor",  "yellow")}
							{SyncPairIcon("Cheryl",  "yellow")}
							{SyncPairIcon("Olivia_BP",  "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("PlayerM_Alcremie",  "red")}
							{SyncPairIcon("Misty_Ev",  "red")}
							{SyncPairIcon("Jasmine",  "red")}
							{SyncPairIcon("Cynthia_TL",  "orange")}
							{SyncPairIcon("Elesa_TL",  "orange")}
							{SyncPairIcon("Lillie_NY",  "orange")}
							{SyncPairIcon("Teddy_Ev",  "orange")}
							{SyncPairIcon("Dawn_Pal",  "yellow")}
							{SyncPairIcon("PlayerM_Registeel",  "yellow")}
							{SyncPairIcon("LtSurge_BP",  "green")}
							{SyncPairIcon("Giovanni_TL",  "green")}
							{SyncPairIcon("Maylene",  "green")}
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Raihan_TL",  "red")}
							{SyncPairIcon("Giovanni_Ev",  "red")}
							{SyncPairIcon("Bugsy_Ev",  "red")}
							{SyncPairIcon("Morty_TL",  "orange")}
							{SyncPairIcon("Phoebe",  "orange")}
							{SyncPairIcon("Acerola_TL",  "orange")}
							{SyncPairIcon("Adaman_TL",  "yellow")}
							{SyncPairIcon("PlayerM_Regirock",  "yellow")}
							{SyncPairIcon("Leaf_TL",  "yellow")}
							{SyncPairIcon("Lillie",  "green")}
							{SyncPairIcon("Jasmine_TL",  "green")}
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            {SyncPairIcon("Roxanne",  "red")}
							{SyncPairIcon("Janine_BP",  "red")}
							{SyncPairIcon("Rachel",  "red")}
							{SyncPairIcon("Rosa_H",  "orange")}
							{SyncPairIcon("Marley",  "orange")}
							{SyncPairIcon("PlayerM_Torchic",  "orange")}
							{SyncPairIcon("Rosa",  "yellow")}
							{SyncPairIcon("Acerola",  "yellow")}
							{SyncPairIcon("Kali",  "green")}
							{SyncPairIcon("Cheren",  "green")}
							{SyncPairIcon("Erika_H",  "green")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Drake",  "red")}
							{SyncPairIcon("Ramos",  "red")}
							{SyncPairIcon("Liza",  "orange")}
							{SyncPairIcon("Thorton",  "orange")}
							{SyncPairIcon("Marlon",  "orange")}
							{SyncPairIcon("Viola",  "orange")}
							{SyncPairIcon("Erika_BP",  "yellow")}
							{SyncPairIcon("Wulfric",  "yellow")}
							{SyncPairIcon("Brycen",  "yellow")}
							{SyncPairIcon("James",  "green")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    //#endregion
};

export default TierListSpark;