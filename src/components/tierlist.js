import SyncPairIcon from './syncpair-icon';
import $ from 'jquery';
import Select from 'react-select';

const TierList = () => {
    //#region Type Filtering
    let selectedTypes = {};

    let typeOptions = [
        {value: 'normal', label: 'Normal', img: `${process.env.PUBLIC_URL}/images/type/normal.svg`},
        {value: 'fire', label: 'Fire', img: `${process.env.PUBLIC_URL}/images/type/fire.svg`},
        {value: 'water', label: 'Water', img: `${process.env.PUBLIC_URL}/images/type/water.svg`},
        {value: 'electric', label: 'Electric', img: `${process.env.PUBLIC_URL}/images/type/electric.svg`},
        {value: 'grass', label: 'Grass', img: `${process.env.PUBLIC_URL}/images/type/grass.svg`},
        {value: 'ice', label: 'Ice', img: `${process.env.PUBLIC_URL}/images/type/ice.svg`},
        {value: 'fighting', label: 'Fighting', img: `${process.env.PUBLIC_URL}/images/type/fighting.svg`},
        {value: 'poison', label: 'Poison', img: `${process.env.PUBLIC_URL}/images/type/poison.svg`},
        {value: 'ground', label: 'Ground', img: `${process.env.PUBLIC_URL}/images/type/ground.svg`},
        {value: 'flying', label: 'Flying', img: `${process.env.PUBLIC_URL}/images/type/flying.svg`},
        {value: 'psychic', label: 'Psychic', img: `${process.env.PUBLIC_URL}/images/type/psychic.svg`},
        {value: 'bug', label: 'Bug', img: `${process.env.PUBLIC_URL}/images/type/bug.svg`},
        {value: 'rock', label: 'Rock', img: `${process.env.PUBLIC_URL}/images/type/rock.svg`},
        {value: 'ghost', label: 'Ghost', img: `${process.env.PUBLIC_URL}/images/type/ghost.svg`},
        {value: 'dragon', label: 'Dragon', img: `${process.env.PUBLIC_URL}/images/type/dragon.svg`},
        {value: 'dark', label: 'Dark', img: `${process.env.PUBLIC_URL}/images/type/dark.svg`},
        {value: 'steel', label: 'Steel', img: `${process.env.PUBLIC_URL}/images/type/steel.svg`},
        {value: 'fairy', label: 'Fairy', img: `${process.env.PUBLIC_URL}/images/type/fairy.svg`}
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
        {value: 'ball-guy-trainer', label: 'Ball Guy'},{value: 'barry-trainer', label: 'Barry'},{value: 'bea-trainer', label: 'Bea'},{value: 'bede-trainer', label: 'Bede'},{value: 'bertha-trainer', label: 'Bertha'},{value: 'bianca-trainer', label: 'Bianca'},{value: 'blaine-trainer', label: 'Blaine'},{value: 'blossom-trainer', label: 'Blossom'},{value: 'blue-trainer', label: 'Blue'},{value: 'brawly-trainer', label: 'Brawly'},{value: 'brendan-trainer', label: 'Brendan'},{value: 'brock-trainer', label: 'Brock'},{value: 'bruno-trainer', label: 'Bruno'},{value: 'brycen-trainer', label: 'Brycen'},{value: 'bugsy-trainer', label: 'Bugsy'},{value: 'burgh-trainer', label: 'Burgh'},
        {value: 'caitlin-trainer', label: 'Caitlin'},{value: 'calem-trainer', label: 'Calem'},{value: 'candice-trainer', label: 'Candice'},{value: 'chase-trainer', label: 'Chase'},{value: 'cheren-trainer', label: 'Cheren'},{value: 'cheryl-trainer', label: 'Cheryl'},{value: 'chuck-trainer', label: 'Chuck'},{value: 'clair-trainer', label: 'Clair'},{value: 'clavell-trainer', label: 'Clavell'},{value: 'clay-trainer', label: 'Clay'},{value: 'clemont-trainer', label: 'Clemont'},{value: 'colress-trainer', label: 'Colress'},{value: 'courtney-trainer', label: 'Courtney'},{value: 'crasher-wake-trainer', label: 'Crasher-Wake'},{value: 'cynthia-trainer', label: 'Cynthia'},{value: 'cyrus-trainer', label: 'Cyrus'},
        {value: 'dahlia-trainer', label: 'Dahlia'},{value: 'dana-trainer', label: 'Dana'},{value: 'darach-trainer', label: 'Darach'},{value: 'dawn-trainer', label: 'Dawn'},{value: 'dexio-trainer', label: 'Dexio'},{value: 'diantha-trainer', label: 'Diantha'},{value: 'drake-trainer', label: 'Drake'},{value: 'drasna-trainer', label: 'Drasna'},
        {value: 'elaine-trainer', label: 'Elaine'},{value: 'elesa-trainer', label: 'Elesa'},{value: 'elio-trainer', label: 'Elio'},{value: 'emma-trainer', label: 'Emma'},{value: 'emmet-trainer', label: 'Emmet'},{value: 'eri-trainer', label: 'Eri'},{value: 'erika-trainer', label: 'Erika'},{value: 'ethan-trainer', label: 'Ethan'},{value: 'eusine-trainer', label: 'Eusine'},{value: 'eve-trainer', label: 'Eve'},{value: 'evelyn-trainer', label: 'Evelyn'},
        {value: 'falkner-trainer', label: 'Falkner'},{value: 'fantina-trainer', label: 'Fantina'},{value: 'flannery-trainer', label: 'Flannery'},{value: 'flint-trainer', label: 'Flint'},
        {value: 'gardenia-trainer', label: 'Gardenia'},{value: 'geeta-trainer', label: 'Geeta'},{value: 'ghetsis-trainer', label: 'Ghetsis'},{value: 'giacomo-trainer', label: 'Giacomo'},{value: 'giovanni-trainer', label: 'Giovanni'},{value: 'glacia-trainer', label: 'Glacia'},{value: 'gladion-trainer', label: 'Gladion'},{value: 'gloria-trainer', label: 'Gloria'},{value: 'gordie-trainer', label: 'Gordie'},{value: 'grant-trainer', label: 'Grant'},{value: 'greta-trainer', label: 'Greta'},{value: 'grimsley-trainer', label: 'Grimsley'},{value: 'grusha-trainer', label: 'Grusha'},{value: 'guzma-trainer', label: 'Guzma'},
        {value: 'hala-trainer', label: 'Hala'},{value: 'hapu-trainer', label: 'Hapu'},{value: 'hau-trainer', label: 'Hau'},{value: 'helena-trainer', label: 'Helena'},{value: 'hilbert-trainer', label: 'Hilbert'},{value: 'hilda-trainer', label: 'Hilda'},{value: 'hop-trainer', label: 'Hop'},{value: 'hugh-trainer', label: 'Hugh'},
        {value: 'ingo-trainer', label: 'Ingo'},{value: 'iono-trainer', label: 'Iono'},{value: 'irida-trainer', label: 'Irida'},{value: 'iris-trainer', label: 'Iris'},
        {value: 'jacq-trainer', label: 'Jacq'},{value: 'james-trainer', label: 'James'},{value: 'janine-trainer', label: 'Janine'},{value: 'jasmine-trainer', label: 'Jasmine'},{value: 'jessie-trainer', label: 'Jessie'},
        {value: 'kabu-trainer', label: 'Kabu'},{value: 'kahili-trainer', label: 'Kahili'},{value: 'kali-trainer', label: 'Kali'},{value: 'karen-trainer', label: 'Karen'},{value: 'katherine-trainer', label: 'Katherine'},{value: 'kiawe-trainer', label: 'Kiawe'},{value: 'klara-trainer', label: 'Klara'},{value: 'koga-trainer', label: 'Koga'},{value: 'korrina-trainer', label: 'Korrina'},{value: 'kris-trainer', label: 'Kris'},{value: 'kukui-trainer', label: 'Professor Kukui'},
        {value: 'lana-trainer', label: 'Lana'},{value: 'lance-trainer', label: 'Lance'},{value: 'larry-trainer', label: 'Larry'},{value: 'leaf-trainer', label: 'Leaf'},{value: 'lear-trainer', label: 'Lear'},{value: 'lenora-trainer', label: 'Lenora'},{value: 'leon-trainer', label: 'Leon'},{value: 'lillie-trainer', label: 'Lillie'},{value: 'lisia-trainer', label: 'Lisia'},{value: 'liza-trainer', label: 'Liza'},{value: 'looker-trainer', label: 'Looker'},{value: 'lorelei-trainer', label: 'Lorelei'},{value: 'ltsurge-trainer', label: 'Lt. Surge'},{value: 'lucas-trainer', label: 'Lucas'},{value: 'lucian-trainer', label: 'Lucian'},{value: 'lucy-trainer', label: 'Lucy'},{value: 'lusamine-trainer', label: 'Lusamine'},{value: 'lyra-trainer', label: 'Lyra'},{value: 'lysandre-trainer', label: 'Lysandre'},
        {value: 'mallow-trainer', label: 'Mallow'},{value: 'malva-trainer', label: 'Malva'},{value: 'marley-trainer', label: 'Marley'},{value: 'marlon-trainer', label: 'Marlon'},{value: 'marnie-trainer', label: 'Marnie'},{value: 'marshal-trainer', label: 'Marshal'},{value: 'maxie-trainer', label: 'Maxie'},{value: 'may-trainer', label: 'May'},{value: 'maylene-trainer', label: 'Maylene'},{value: 'mela-trainer', label: 'Mela'},{value: 'melony-trainer', label: 'Melony'},{value: 'milo-trainer', label: 'Milo'},{value: 'mina-trainer', label: 'Mina'},{value: 'misty-trainer', label: 'Misty'},{value: 'molayne-trainer', label: 'Molayne'},{value: 'morgan-trainer', label: 'Morgan'},{value: 'morty-trainer', label: 'Morty'},
        {value: 'n-trainer', label: 'N'},{value: 'nanu-trainer', label: 'Nanu'},{value: 'naomi-trainer', label: 'Naomi'},{value: 'nate-trainer', label: 'Nate'},{value: 'nemona-trainer', label: 'Nemona'},{value: 'nessa-trainer', label: 'Nessa'},{value: 'nita-trainer', label: 'Nita'},{value: 'noland-trainer', label: 'Noland'},{value: 'norman-trainer', label: 'Norman'},{value: 'oak-trainer', label: 'Professor Oak'},{value: 'oleana-trainer', label: 'Oleana'},{value: 'olivia-trainer', label: 'Olivia'},{value: 'olympia-trainer', label: 'Olympia'},
        {value: 'palmer-trainer', label: 'Palmer'},{value: 'paulo-trainer', label: 'Paulo'},{value: 'penny-trainer', label: 'Penny'},{value: 'petey-trainer', label: 'Petey'},{value: 'petrel-trainer', label: 'Petrel'},{value: 'phoebe-trainer', label: 'Phoebe'},{value: 'piers-trainer', label: 'Piers'},{value: 'player-trainer', label: 'Player'},{value: 'plumeria-trainer', label: 'Plumeria'},{value: 'poppy-trainer', label: 'Poppy'},{value: 'proton-trainer', label: 'Proton'},{value: 'pryce-trainer', label: 'Pryce'},
        
        {value: 'rachel-trainer', label: 'Rachel'},{value: 'raihan-trainer', label: 'Raihan'},{value: 'ramos-trainer', label: 'Ramos'},{value: 'red-trainer', label: 'Red'},{value: 'rei-trainer', label: 'Rei'},{value: 'rika-trainer', label: 'Rika'},{value: 'riley-trainer', label: 'Riley'},{value: 'roark-trainer', label: 'Roark'},{value: 'rosa-trainer', label: 'Rosa'},{value: 'rose-trainer', label: 'Rose'},{value: 'roxanne-trainer', label: 'Roxanne'},{value: 'roxie-trainer', label: 'Roxie'},{value: 'ryuki-trainer', label: 'Ryuki'},
        {value: 'sabrina-trainer', label: 'Sabrina'},{value: 'sawyer-trainer', label: 'Sawyer'},{value: 'selene-trainer', label: 'Selene'},{value: 'serena-trainer', label: 'Serena'},{value: 'shauna-trainer', label: 'Shauna'},{value: 'shauntal-trainer', label: 'Shauntal'},{value: 'sidney-trainer', label: 'Sidney'},{value: 'siebold-trainer', label: 'Siebold'},{value: 'silver-trainer', label: 'Silver'},{value: 'sina-trainer', label: 'Sina'},{value: 'skyla-trainer', label: 'Skyla'},{value: 'sonia-trainer', label: 'Sonia'},{value: 'sophocles-trainer', label: 'Sophocles'},{value: 'steven-trainer', label: 'Steven'},{value: 'sycamore-trainer', label: 'Professor Sycamore'},
        {value: 'tate-trainer', label: 'Tate'},{value: 'thorton-trainer', label: 'Thorton'},{value: 'tierno-trainer', label: 'Tierno'},{value: 'tina-trainer', label: 'Tina'},{value: 'trevor-trainer', label: 'Trevor'},
        
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
        
        {value: 'cape', label: 'Cape'},{value: 'glasses', label: 'Glasses'},{value: 'masked', label: 'Masked'},{value: 'pigtails', label: 'Pigtails'},{value: 'scarf', label: 'Scarf'},
        {value: 'seasonal-outfit', label: 'Seasonal Outfit'},{value: 'special-costume', label: 'Special Costume'},{value: 'Sunglasses', label: 'Sunglasses'},{value: 'sygna-suit', label: 'Sygna Suit'},
        
        {value: 'alola-adventurer', label: 'Alola Adventurer'},{value: 'artistic', label: 'Artistic'},{value: 'battle-partner', label: 'Battle Partner'},{value: 'battleground-foe', label: 'Battleground Foe'},{value: 'body-builder', label: 'Body Builder'},
        {value: 'complicated-family', label: 'Complicated Family'},{value: 'contest-lover', label: 'Contest Lover'},{value: 'cook', label: 'Cook'},{value: 'dragon-cousin', label: 'Dragon Cousin'},{value: 'fancy-lady', label: 'Fancy Lady'},
        {value: 'free-spirit', label: 'Free Spirit'},{value: 'gadgeteer', label: 'Gadgeteer'},{value: 'galar-adventurer', label: 'Galar Adventurer'},{value: 'grown-woman', label: 'Grown Woman'},{value: 'hoenn-family', label: 'Hoenn Family'},
        {value: 'kalos-neighbors', label: 'Kalos Neighbors'},{value: 'knowledgeable', label: 'Knowledgeable'},{value: 'melemele-family', label: 'Melemele Family'},{value: 'nature-lover', label: 'Nature Lover'},{value: 'ninja-family', label: 'Ninja Family'},
        {value: 'observatory-cousin', label: 'Observatory Cousin'},{value: 'old-colleagues', label: 'Old Colleagues'},{value: 'old-timer', label: 'Old-Timer'},{value: 'pallet-town', label: 'Pallet Town'},{value: 'passionate-spirit', label: 'Passionate Spirit'},
        {value: 'pokeathlete', label: 'Pokeathlete'},{value: 'researcher', label: 'Researcher'},{value: 'rock-lover', label: 'Rock Lover'},{value: 'sinnoh-bros', label: 'Sinnoh Bros'},{value: 'space-cadet', label: 'Space Cadet'},
        {value: 'supernatural', label: 'Supernatural'},{value: 'sweet-tooth', label: 'Sweet Tooth'},{value: 'team-rocket-forever', label: 'Team Rocket Forever'},{value: 'undella-town', label: 'Undella Town'},{value: 'unova-adventurer', label: 'Unova Adventurer'},
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
        exrs.forEach((exr) => selectedEXRs[exr] = 1);
    }

    //#endregion

    function filterSearch() {
        $('.not-found').removeClass('not-found');

        let foundAnyPairs = false;
        const iterableLists = [selectedTypes, selectedTrainers, selectedRegions, selectedThemes, selectedAcquisitionMethods, selectedRoles];
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
    
    return (
        <div className="tierlist-page">
            <div className="banner tierlist-banner">
                <img src={`${process.env.PUBLIC_URL}/images/app-bg.png`} className="banner-img" alt="" />
                <h1 className="banner-title">Tier List Companion</h1>
            </div>
            <div className="tierlist-header">
                <h1>Why does this UI suck?</h1>
                <p>I'm working on building this tool at the moment. No UI is finalized and I'm hoping to add in more ways to make parsing through this tierlist more accessible to all, regardless of accessibility needs or language barriers.</p>
                
                <h2>About the Tier List Companion</h2>
                <p>This companion is based on Spark's tier list. I am not involved with the placement of sync pairs on the tier list, but I am maintaining this resource as a way to look for specific sync pairs and understand some of the justification behind their ultimate placement.
                    If something is out of place or if long enough goes by after a tierlist update and this page still isn't updated to reflect that, please ping me @adeptcs in the r/PokemonMasters Discord server.
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
                                    <label for="story-acquisition">Story</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="la-acquisition" onChange={() => toggleAcquisitions("legendary-adventure")}/>
                                    <label for="la-acquisition">Legendary Adventure</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="event-acquisition" onChange={() => toggleAcquisitions("event")}/>
                                    <label for="event-acquisition">Event</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="ticket-acquisition" onChange={() => toggleAcquisitions("ticket")}/>
                                    <label for="ticket-acquisition">Ticket Scout</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="genpool-acquisition" onChange={() => toggleAcquisitions("genpool")}/>
                                    <label for="genpool-acquisition">Summonable 3 and 4 Stars</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="egg-acquisition" onChange={() => toggleAcquisitions("egg")}/>
                                    <label for="egg-acquisition">Eggmons</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="bp-acquisition" onChange={() => toggleAcquisitions("battle-point")}/>
                                    <label for="bp-acquisition">BP Vouchers</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="dc-acquisition" onChange={() => toggleAcquisitions("training-ticket")}/>
                                    <label for="dc-acquisition">Training Ticket Pairs</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="f2plodge-acquisition" onChange={() => toggleAcquisitions("lodge-free")}/>
                                    <label for="f2plodge-acquisition">F2P Lodge Pairs</label>
                                </div>
                            </div>
                            <div className="limited-section">
                                <h4 className="section-header">Limited</h4>
                                <div className="filter-option">
                                    <input type="checkbox" id="pf-acquisition" onChange={() => toggleAcquisitions("pokefair")}/>
                                    <label for="pf-acquisition">Poké Fair</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="mf-acquisition" onChange={() => toggleAcquisitions("master-fair")}/>
                                    <label for="mf-acquisition">Master Fair</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="af-acquisition" onChange={() => toggleAcquisitions("arc-fair")}/>
                                    <label for="af-acquisition">Arc Fair</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="variety-acquisition" onChange={() => toggleAcquisitions("variety")}/>
                                    <label for="variety-acquisition">Variety Scout</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="sc-acquisition" onChange={() => toggleAcquisitions("special-costume")}/>
                                    <label for="sc-acquisition">Special Costume Pairs</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="seasonal-acquisition" onChange={() => toggleAcquisitions("seasonal-outfit")}/>
                                    <label for="seasonal-acquisition">Seasonal Pairs</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="mix-acquisition" onChange={() => toggleAcquisitions("mix-scout")}/>
                                    <label for="mix-acquisition">Mix Scout Exclusive</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="noticket-acquisition" onChange={() => toggleAcquisitions("no-ticket")}/>
                                    <label for="noticket-acquisition">General Pool, non-Ticket Scout</label>
                                </div>
                                <div className="filter-option">
                                    <input type="checkbox" id="limlodge-acquisition" onChange={() => toggleAcquisitions("lodge-gacha")}/>
                                    <label for="limlodge-acquisition">Limited Lodge Pairs</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="submit-btn">
                <button type="button" onClick={() => filterSearch()}>Search</button>
            </div>
            <div className="tierlists">
                <div className="damage-dealer">
                    <div className="header-row">
                        <h3>Damage Dealer</h3>
                    </div>
                    <div className="damage-dealer-grid">
                        <div className="uber-row tierlist-row">
                            <div className="tier-title">U</div>
                            {SyncPairIcon("Arc Suit Leon & Charizard", "leon-trainer fire galar champion free-spirit multi exr-tech arc-fair", "/images/pair/0H_GALAR/Leon_Arc_0006_5.png", "red")}
                            {SyncPairIcon("Red (Champion) & Articuno", "red-trainer ice kanto main-character champion pallet-town strike exr-tech master-fair", "/images/pair/0A_KANTO/0A_KANTO_0A-01_NCRed.png", "red")}
                            {SyncPairIcon("Cheren (Champion) & Tornadus Incarnate Forme", "cheren-trainer flying unova champion cape unova-adventurer tech exr-strike master-fair", "/images/pair/0E_UNOVA/Cheren_Tornadus.png", "orange")}
                            {SyncPairIcon("Arc Suit Lance & Dragonite", "lance-trainer dragon kanto champion cape multi exr-tech arc-fair", "/images/pair/0A_KANTO/LanceArc_Dragonite_5.png", "orange")}
                            {SyncPairIcon("Ash & Pikachu", "ash-trainer electric kanto main-character pallet-town passionate-spirit strike exr-none master-fair collab", "/images/pair/0A_KANTO/0A_KANTO_0E-02_Ash.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Gladion & Magearna", "gladion-trainer fairy alola rival sygna suit villain strike exr-sprint master-fair", "/images/pair/0G_ALOLA/Gladion_Magearna.png", "yellow")}
                            {SyncPairIcon("Giacomo & Kingambit", "giacomo-trainer dark paldea strike exr-tech pokefair", "/images/pair/0I_PALDEA/Giacomo_0983.png", "green")}
                            {SyncPairIcon("Marnie (Champion) & Galarian Moltres", "marnie-trainer dark galar champion pigtails galar-adventurer strike exr-support master-fair", "/images/pair/0H_GALAR/0H_GALAR_0A-04_NeoChampMarnie.png", "green")}
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            {SyncPairIcon("Sygna Suit Steven & Deoxys (Attack Forme)", "steven-trainer psychic hoenn champion sygna-suit space-cadet tech exr-support pokefair", "/images/pair/0Z_OTHER-FORMES/0C_HOENN_0C-05_ssSteven_BAttack_.png", "red")}
                            {SyncPairIcon("Sygna Suit Serena & Zygarde (50% Forme)", "serena-trainer dragon kalos main-character sygna-suit strike exr-support master-fair", "/images/pair/0F_KALOS/0F_KALOS_0A-02_SSSerena.png", "red")}
                            {SyncPairIcon("Irida (Special Costume) & Hisuian Zoroark", "irida-trainer ghost sinnoh special-costume nature-lover artistic strike exr-tech", "/images/pair/0D1_HISUI/Irida_Zoroark_5.png", "orange")}
                            {SyncPairIcon("Mela & Armarouge", "mela-trainer fire paldea passionate-spirit artistic sprint exr-strike pokefair", "/images/pair/0I_PALDEA/Mela_0936.png", "orange")}
                            {SyncPairIcon("Lear & Hoopa (Confined)", "lear-trainer psychic pasio rival sunglasses tech exr-strike pokefair has-lodge", "/images/pair/pasio/Lear.png", "orange")}
                            {SyncPairIcon("Klara & Galarian Slowbro", "klara-trainer poison galar gym-leader grown-woman artistic tech exr-strike pokefair", "/images/pair/0H_GALAR/Klara_Slowbro_5.png", "orange")}
                            {SyncPairIcon("Sygna Suit Hilda & Victini", "hilda-trainer fire unova main-character sygna-suit unova-adventurer strike exr-support pokefair", "/images/pair/0E_UNOVA/0E_UNOVA_0A-02_SSHilda.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Lysandre & Volcanion", "lysandre-trainer water kalos villain sygna-suit researcher strike exr-tech pokefair", "/images/pair/0F_KALOS/0F_KALOS_0D-01_ssLysandre.png", "yellow")}
                            {SyncPairIcon("Dexio & Espeon", "dexio-trainer psychic kalos battle-facility-foe knowledgeable tech exr-support pokefair", "/images/pair/0F_KALOS/Dexio_0196.png", "green")}
                            {SyncPairIcon("Jacq & Farigiraf", "jacq-trainer psychic paldea knowledgeable gadgeteer free-spirit tech exr-support pokefair", "/images/pair/0I_PALDEA/Jacq_Farigarif_5.png", "green")}
                            {SyncPairIcon("Adaman (Special Costume) & Ursaluna", "adaman-trainer ground sinnoh special-costume nature-lover artistic strike exr-support", "/images/pair/0D1_HISUI/Adaman_Ursaluna_5.png", "green")}
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            {SyncPairIcon("Lance & Dragonite", "lance-trainer dragon kanto champion cape dragon-cousin strike exr-support pokefair has-lodge", "/images/pair/0A_KANTO/0A_KANTO_0C-04_Lance.png", "red")}
                            {SyncPairIcon("Selene (Alt.) & Nihilego", "selene-trainer rock alola main-character pigtails alola-adventurer strike exr-tech pokefair", "/images/pair/0G_ALOLA/Selene_Nihilego_5.png", "red")}
                            {SyncPairIcon("Poppy & Tinkaton", "poppy-trainer steel paldea elite-four fancy-lady free-spirit strike exr-sprint pokefair", "/images/pair/0I_PALDEA/Poppy_Tinkaton.png", "orange")}
                            {SyncPairIcon("Rose & Copperajah", "rose-trainer steel galar villain passionate-spirit strike exr-tech pokefair", "/images/pair/0H_GALAR/0H_GALAR_0D-01_Rose.png", "orange")}
                            {SyncPairIcon("Emma & Crobat", "emma-trainer poison kalos passionate-spirit strike exr-support pokefair", "/images/pair/0F_KALOS/0F_KALOS_0F-02_Emma.png", "yellow")}
                            {SyncPairIcon("Palmer & Regigigas", "palmer-trainer normal sinnoh battle-facility-foe passionate-spirit veteran-trainer strike exr-tech pokefair", "/images/pair/0D_SINNOH/0D_SINNOH_0E-06_Palmer.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Hilbert & Genesect", "hilbert-trainer bug unova main-character sygna-suit unova-adventurer tech exr-strike pokefair", "/images/pair/0E_UNOVA/0E_UNOVA_0A-01_SSHilbert.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Piers & Toxtricity (Low Key Form)", "piers-trainer electric galar gym-leader sygna-suit artistic strike exr-support pokefair", "/images/pair/0H_GALAR/ssPiers_Toxtricity.png", "green")}
                            {SyncPairIcon("Sina & Glaceon", "sina-trainer ice kalos-battle-facility-foe knowledgeable sprint exr-strike pokefair", "/images/pair/0F_KALOS/Sina_0471.png", "green")}
                            {SyncPairIcon("Eusine & Suicune★", "eusine-trainer water johto cape passionate-spirit strike exr-tech pokefair shiny", "/images/pair/0B_JOHTO/0B_JOHTO_0E-01_Eusine.png", "green")}
                            {SyncPairIcon("Barry (Special Costume) & Heracross", "barry-trainer bug sinnoh rival special-costume passionate-spirit strike exr-tech", "/images/pair/0D_SINNOH/Barry_Heracross_5.png", "green")}
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            {SyncPairIcon("Sygna Suit Lusamine & Dusk Mane Necrozma", "lusamine-trainer psychic alola villain sygna-suit grown-woman strike exr-support master-fair", "/images/pair/0G_ALOLA/0G_ALOLA_0D-01_SSLusamine.png", "red")}
                            {SyncPairIcon("Lucas & Dialga", "lucas-trainer dragon sinnoh main-character scarf knowledgeable tech exr-support pokefair", "/images/pair/0D_SINNOH/0D_SINNOH_0A-01_Lucas.png", "red")}
                            {SyncPairIcon("Candice (Palentine's 2024) & Galarian Darmanitan", "candice-trainer ice sinnoh gym-leader seasonal-outfit cook strike exr-tech", "/images/pair/0D_SINNOH/Candice_Darmanitan.png", "orange")}
                            {SyncPairIcon("Sygna Suit Cynthia & Kommo-o", "cynthia-trainer dragon sinnoh battle-facility-foe sygna-suit researcher strike exr-sprint pokefair", "/images/pair/0D_SINNOH/0D_SINNOH_0C-05_SSCynthia.png", "orange")}
                            {SyncPairIcon("Sygna Suit Red & Charizard", "red-trainer fire kanto main-character sygna-suit pallet-town strike exr-tech pokefair", "/images/pair/0A_KANTO/0A_KANTO_0A-01_SSRed.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Giovanni & Nidoking", "giovanni-trainer ground johto sygna-suit villain strike exr-support pokefair", "/images/pair/0B_JOHTO/0A_KANTO_0D-01_SSGiovanni.png", "yellow")}
                            {SyncPairIcon("Cynthia & Garchomp", "cynthia-trainer ground sinnoh champion undella-town researcher strike exr-tech pokefair has-lodge", "/images/pair/0D_SINNOH/0D_SINNOH_0C-05_Cynthia.png", "yellow")}
                            {SyncPairIcon("Emmet & Archeops", "emmet-trainer rock unova battle-facility-foe battle-partner strike exr-support pokefair", "/images/pair/0E_UNOVA/0E_UNOVA_0E-02_Emmet.png", "yellow")}
                            {SyncPairIcon("Iono (Fall 2024) & Flutter Mane", "iono-trainer ghost paldea gym-leader seasonal-outfit artistic strike exr-support", "/images/pair/0I_PALDEA/Iono_0987.png", "green")}
                            {SyncPairIcon("Liza (Summer 2023) & Celesteela", "liza-trainer flying hoenn gym-leader seasonal-outfit space-cadet strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0B_SUM_2023_Liza.png", "green")}
                            {SyncPairIcon("Lisia (New Year's 2023) & Galarian Rapidash★", "lisia-trainer fairy hoenn seasonal-outfit artistic contest-lover strike exr-none shiny", "/images/pair/0Y_SEASONALS/0Z_0D_NY_2023_Lisia.png", "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Blue (Classic) & Aerodactyl", "blue-trainer rock kanto rival pallet-town passionate-spirit strike exr-tech pokefair", "/images/pair/0A_KANTO/0A_KANTO_0A-02_BlueClassic.png", "red")}
                            {SyncPairIcon("Olympia & Sigilyph", "olympia-trainer psychic kalos gym-leader supernatural cape tech exr-none spotlight ticket", "/images/pair/0F_KALOS/0F_KALOS_0B-07_Olympia.png", "orange")}
                            {SyncPairIcon("Diantha (Special Costume) & Keldeo Resolute Form", "diantha-trainer fighting kalos artistic grown-woman special-costume tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2021_Diantha.png", "orange")}
                            {SyncPairIcon("Sygna Suit Korrina & Marshadow", "korrina-trainer ghost kalos sygna-suit passionate-spirit tech exr-support pokefair", "/images/pair/0F_KALOS/0F_KALOS_0B-03_SSKorrina.png", "orange")}
                            {SyncPairIcon("Maxie & Groudon", "maxie-trainer ground hownn villain glasses researcher strike exr-tech master-fair", "/images/pair/0C_HOENN/0C_HOENN_0D-01_Maxie.png", "orange")}
                            {SyncPairIcon("Gloria & Zacian", "gloria-trainer steel galar main-character cook galar-adventurer strike exr-none pokefair has-lodge", "/images/pair/0H_GALAR/0H_GALAR_0A-02_Gloria.png", "yellow")}
                            {SyncPairIcon("Leon & Charizard", "leon-trainer fire galar champion battle-facility-foe free-spirit strike exr-support master-fair", "/images/pair/0H_GALAR/0H_GALAR_0C-01_Leon.png", "yellow")}
                            {SyncPairIcon("Victor & Rillaboom", "victor-trainer grass galr main-character galar-adventurer strike exr-none pokefair", "/images/pair/0H_GALAR/0H_GALAR_0A-01_Victor.png", "yellow")}
                            {SyncPairIcon("N & Zekrom", "n-trainer electric unova rival villain unova-adventurer strike exr-field pokefair has-lodge", "/images/pair/0E_UNOVA/0E_UNOVA_0E-03_N.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Etha & Lugia", "ethan-trainer flying johto main-character sygna-suit scarf strike exr-field master-fair", "/images/pair/0B_JOHTO/0B_JOHTO_0A-01_SSEthan.png", "green")}
                            {SyncPairIcon("Raihan & Duraludon", "raihan-trainer steel galar gym-leader gadgeteer passionate-spirit strike exr-tech pokefair has-lodge", "/images/pair/0H_GALAR/0H_GALAR_0B-08_Raihan.png", "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Sygna Suit Leon & Eternatus", "leon-trainer dragon galar sygna-suit battle-facility-foe free-spirit strike exr-support pokefair", "/images/pair/0H_GALAR/0H_GALAR_0C-01_SSLeon.png", "red")}
                            {SyncPairIcon("Sonia (Special Costume) & Tsareena★", "sonia-trainer grass galar special-costume knowledgeable grown-woman strike exr-none shiny", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2022_Sonia.png", "red")}
                            {SyncPairIcon("Alder & Volcarona", "alder-trainer bug unova champion cape veteran-trainer strike exr-none pokefair", "/images/pair/0E_UNOVA/0E_UNOVA_0C-06_Alder.png", "orange")}
                            {SyncPairIcon("Emmet (Special Costume) & Escavalier", "emmet-trainer bug unova special-costume glasses battle-partner strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2022_Emmet.png", "orange")}
                            {SyncPairIcon("Hugh & Bouffalant", "hugh-trainer normal unova rival unova-adventurer passionate-spirit strike exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0A-07_Hugh.png", "orange")}
                            {SyncPairIcon("N (Summer 2022) & Zoroark", "n-trainer dark unova seasonal-outfit supernatural unova-adventurer strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0B_SUM_2022_N.png", "yellow")}
                            {SyncPairIcon("Diantha & Gardevoir", "diantha-trainer fairy kalos champion artistic grown-woman strike exr-tech pokefair", "/images/pair/0F_KALOS/0F_KALOS_0C-05_Diantha.png", "yellow")}
                            {SyncPairIcon("Archie & Kyogre", "archie-trainer water hoenn villain body-builder nature-lover strike exr-tech master-fair", "/images/pair/0C_HOENN/0C_HOENN_0D-02_Archie.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Erika & Leafeon", "erika-trainer grass kanto sygna-suit battle-facility-foe artistic tech exr-none spotlight ticket", "/images/pair/0A_KANTO/0A_KANTO_0B-04_SSErika.png", "yellow")}
                            {SyncPairIcon("Iris (Fall 2022) & Naganadel", "iris-trainer poison unova seasonal-outfit pigtails undella-town tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0C_FALL_2022_Iris.png", "green")}
                            {SyncPairIcon("Riley & Lucario", "riley-trainer fighting sinnoh supernatural battle-partner battleground-foe sprint exr-strike event", "/images/pair/0D_SINNOH/Riley_Lucario.png", "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("Lillie (Anniversary 2021) & Lunala", "lillie-trainer ghost alola seasonal-outfit pigtails alola-adventurer strike exr-tech master-fair", "/images/pair/0Y_SEASONALS/0Z_0G_ANNIV_2021_Lillie.png", "red")}
                            {SyncPairIcon("Leon (Holiday 2021) & Calyrex Ice Rider", "leon-trainer ice galar seasonal-outfit battle-facility-foe free-spirit strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0A_HOLIDAY_2021_Leon.png", "red")}
                            {SyncPairIcon("Silver & Ho-Oh", "silver-trainer fire johto rival battle-partner complicated-family strike exr-none legendary-adventure has-lodge", "/images/pair/0B_JOHTO/0B_JOHTO_0A-04_Silver.png", "orange")}
                            {SyncPairIcon("Steven (Anniversary 2021) & Rayquaza★", "steven-trainer flying hoenn seasonal-outfit battle-facility-foe rock-lover strike exr-none master-fair shiny", "/images/pair/0Y_SEASONALS/0Z_0G_ANNIV_2021_Steven.png", "orange")}
                            {SyncPairIcon("Hilda & Emboar", "hilda-trainer fire unova main-character unova-adventurer passionate-spirit strike exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0A-02_Hilda.png", "orange")}
                            {SyncPairIcon("Elesa & Zebstrika", "elesa-trainer unova gym-leader undella-town artistic strike exr-none spotlight ticket has-lodge", "/images/pair/0E_UNOVA/0E_UNOVA_0B-04_Elesa.png", "yellow")}
                            {SyncPairIcon("Kris & Feraligatr", "kris-trainer water johto main-character pigtails knowledgeable strike exr-none spotlight ticket", "/images/pair/0B_JOHTO/0B_JOHTO_0A-03_Kris.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Grimsley & Sharpedo", "grimsley-trainer water unova cape sygna-suit strike exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0C-04_SSGrimsley.png", "yellow")}
                            {SyncPairIcon("Player & Solgaleo", "player-trainer steel main-character pasio strike exr-none legendary-adventure", "/images/pair/pasio/PlayerM_Solgaleo.png", "yellow")}
                            {SyncPairIcon("Chuck & Poliwrath", "chuck-trainer fighting johto gym-leader body-builder sweet-tooth strike exr-sprint spotlight no-ticket", "/images/pair/0B_JOHTO/Chuck_Poliwrath_5.png", "green")}
                            {SyncPairIcon("Volkner (New Year's 2022) & Electivire", "volkner-trainer electric sinnoh seasonal-outfit gadgeteer passionate-spirit strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0D_NY_2022_Volkner.png", "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            {SyncPairIcon("Ryuki & Turtonator", "ryuki-trainer dragon alola artistic passionate-spirit tech exr-strike spotlight ticket", "/images/pair/0G_ALOLA/Ryuki_Turtonator.png", "red")}
                            {SyncPairIcon("Cyrus & Palkia", "cyrus-traier dragon sinnoh villain gadgeteer strike exr-none legendary-adventure", "/images/pair/0D_SINNOH/0D_SINNOH_0D-01_Cyrus.png", "red")}
                            {SyncPairIcon("Bea & Sirfetch'd", "bea-trainer fighting galar gym-leader body-builder sweet-tooth strike exr-none spotlight ticket", "/images/pair/0H_GALAR/0H_GALAR_0B-04_Bea.png", "orange")}
                            {SyncPairIcon("Hala & Crabominable", "hala-trainer ice alola trial-giver passionate-spirit melemele-family strike exr-none spotlight ticket", "/images/pair/0G_ALOLA/0G_ALOLA_0C-01_Hala.png", "orange")}
                            {SyncPairIcon("Blue & Pidgeot", "blue-trainer flying kanto champion rival pallet-town strike exr-none spotlight ticket has-lodge", "/images/pair/0A_KANTO/0A_KANTO_0A-02_Blue.png", "orange")}
                            {SyncPairIcon("Giovanni & Mewtwo", "giovanni-trainer psychic kanto villain complicated-family strike exr-none legendary-adventure has-lodge", "/images/pair/0A_KANTO/0A_KANTO_0D-01_Giovanni.png", "yellow")}
                            {SyncPairIcon("Caitlin & Reuniclus", "caitlin-trainer psychic unova elite-four fancy-lady undella-town strike exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0C-05_Caitlin.png", "yellow")}
                            {SyncPairIcon("Hilda (Special Costume) & Diancie", "hilda-trainer rock unova main-character passionate-spirit special-costume strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2021_Hilda.png", "yellow")}
                            {SyncPairIcon("Brendan & Sceptile", "brendan-trainer grass hoenn main-character hoenn-family space-cadet strike exr-none spotlight ticket", "/images/pair/0C_HOENN/0C_HOENN_0A-01_Brendan.png", "yellow")}
                            {SyncPairIcon("Lear & Krookodile", "lear-trainer dark pasio rival sunglasses tech exr-none lodge-pair lodge-gacha", "/images/pair/pasio/TL_Lear.png", "green")}
                            {SyncPairIcon("Nessa & Drednaw", "nessa-trainer water galar gym-leader artistic tech exr-none spotlight ticket", "/images/pair/0H_GALAR/0H_GALAR_0B-02_Nessa.png", "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            {SyncPairIcon("Wally & Gallade", "wally-trainer fighting hoenn rival battle-facility-foe passionate-spirit strike exr-none spotlight ticket has-lodge", "/images/pair/0C_HOENN/0C_HOENN_0A-03_Wally.png", "red")}
                            {SyncPairIcon("Skyla & Unfezant", "skyla-trainer flying unova gym-leader undella-town strike exr-none lodge-pair lodge-free", "/images/pair/0E_UNOVA/Skyla_Unfezant_4.png", "red")}
                            {SyncPairIcon("Hilbert (Fall 2020) & Mightyena", "hilbert-trainer dark unova seasonal-outfit sweet-tooth strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0C_FALL_2020_Hilbert.png", "orange")}
                            {SyncPairIcon("Guzma & Golisopod", "guzma-trainer bug alola villain sunglasses strike exr-none spotlight ticket", "/images/pair/0G_ALOLA/0G_ALOLA_0D-03_Guzma.png", "orange")}
                            {SyncPairIcon("May & Swampert", "may-trainer water hoenn main-character space-cadet contest-lover tech exr-none spotlight ticket has-lodge", "/images/pair/0C_HOENN/0C_HOENN_0A-02_May.png", "orange")}
                            {SyncPairIcon("Guzma (Special Costume) & Buzzwole", "guzma-trainer fighting alola villin passionate-spirit special-costume strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2021_Guzma.png", "yellow")}
                            {SyncPairIcon("Fantina & Mismagius", "fantina-trainer ghost sinnoh gym-leader artistic contest-lover strike exr-none spotlight ticket", "/images/pair/0D_SINNOH/0D_SINNOH_0B-05_Fantina.png", "yellow")}
                            {SyncPairIcon("Burgh & Leavanny", "burgh-trainer bug unova gym-leader scarf artistic strike exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0B-03_Burgh.png", "yellow")}
                            {SyncPairIcon("Lusamine & Lilligant", "lusamine-trainer grass alola villain grown-woman alola-adventurer strike exr-none battle-point", "/images/pair/0G_ALOLA/Lusamine_Lilligant_4.png", "yellow")}
                            {SyncPairIcon("Gladion & Silvally", "gladion-trainer normal alola rival villain alola-adventurer tech exr-none spotlight ticket has-lodge", "/images/pair/0G_ALOLA/0G_ALOLA_0A-05_Gladion.png", "green")}
                            {SyncPairIcon("Zinnia & Rayquaza", "zinnia-trainer dragon hoenn cape space-cadet strike exr-none legendary-adventure", "/images/pair/0C_HOENN/0C_HOENN_0E-04_Zinnia.png", "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            {SyncPairIcon("Morty & Drifblim", "morty-trainer ghost johto gym-leader scarf supernatural strike exr-none spotlight ticket has-lodge", "/images/pair/0B_JOHTO/0B_JOHTO_0B-04_Morty.png", "red")}
                            {SyncPairIcon("Mallow & Tsareena", "mallow-trainer grass alola trial-giver cook tech exr-none spotlight ticket", "/images/pair/0G_ALOLA/0G_ALOLA_0B-04_Mallow.png", "red")}
                            {SyncPairIcon("Olivia & Lycanroc", "olivia-trainer rock alol elite-four rock-lover trial-giver strike exr-none spotlight ticket", "/images/pair/0G_ALOLA/0G_ALOLA_0C-02_Olivia.png", "orange")}
                            {SyncPairIcon("Selene & Decidueye", "selene-trainer grass alola main-character nature-lover alola-adventurer strike exr-none spotlight ticket", "/images/pair/0G_ALOLA/0G_ALOLA_0A-02_Selene.png", "orange")}
                            {SyncPairIcon("Valerie & Mawile", "valerie-trainer fairy kalos gym-leader artistic free-spirit strike exr-none battle-point", "/images/pair/0F_KALOS/0F_KALOS_0B-06-BP_Valerie.png", "orange")}
                            {SyncPairIcon("Allister & Gengar", "allister-trainer ghost galar gym-leader masked supernatural tech exr-none spotlight ticket", "/images/pair/0H_GALAR/0H_GALAR_0B-04b_Allister.png", "yellow")}
                            {SyncPairIcon("Gloria (Summer 2021) & Inteleon", "gloria-trainer water galar main-character seasonal-outfit galar-adventurer strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0B_SUM_2021_Gloria.png", "yellow")}
                            {SyncPairIcon("Lusamine & Pheromosa", "lusamine-trainer bug alola villain grown-woman alola-adventurer strike exr-none spotlight ticket", "/images/pair/0G_ALOLA/0G_ALOLA_0D-01_Lusamine.png", "yellow")}
                            {SyncPairIcon("Blue & Arcanine", "blue-trainer fire kanto champion rival pallet-town strike exr-none event", "/images/pair/0A_KANTO/0A_KANTO_0A-02-EP_Blue.png", "yellow")}
                            {SyncPairIcon("Lance (New Year's 2021) & Gyarados", "lance-trainer flying kanto seasonal-outfit battle-partner strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0D_NY_2021_Lance.png", "green")}
                            {SyncPairIcon("Barry & Empoleon", "barry-trainer water sinnoh rival scarf passionate-spirit strike exr-none story", "/images/pair/0D_SINNOH/0D_SINNOH_0A-03_Barry.png", "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("Drasna & Dragalge", "drasna-trainer dragon kalos elite-four free-spirit tech exr-none spotlight ticket", "/images/pair/0F_KALOS/0F_KALOS_0C-04_Drasna.png", "red")}
                            {SyncPairIcon("Steven (Summer 2020) & Alolan Sandslash", "steven-trainer ice hoenn seasonal-outfit sunglasses rock-lover strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0B_SUM_2020_Steven.png", "orange")}
                            {SyncPairIcon("Volo & Gible", "volo-trainer ground sinnoh knowledgeable researcher strike exr-none lodge-pair lodge-gacha", "/images/pair/0D1_HISUI/Volo_Gible_4.png", "orange")}
                            {SyncPairIcon("Candice & Froslass", "candice-trainer ice sinnoh gym-leader pigtails battleground-foe strike exr-none battle-point", "/images/pair/0D_SINNOH/0D_SINNOH_0B-07_BP_Candice.png", "orange")}
                            {SyncPairIcon("Shauntal & Chandelure", "shauntal-trainer ghost unova elite-four glasses undella-town strike exr-none genpool ", "/images/pair/0E_UNOVA/0E_UNOVA_0C-02_Shauntal.png", "orange")}
                            {SyncPairIcon("Sophocles & Alolan Golem", "sophocles-trainer electric alola trial-giver gadgeteer strike exr-none battle-point", "/images/pair/0G_ALOLA/0G_ALOLA_0B-05_BP_Sophocles.png", "yellow")}
                            {SyncPairIcon("Gloria & Thwackey", "gloria-trainer grass galar main-character cook galar-adventurer strike exr-none lodge-pair lodge-gacha", "/images/pair/0H_GALAR/0H_GALAR_0A-02_TL_Gloria.png", "yellow")}
                            {SyncPairIcon("Ethan & Typhlosion", "ethan-trainer fire johto main-character pokeathlete strike exr-none spotlight ticket", "/images/pair/0B_JOHTO/0B_JOHTO_0A-01_Ethan.png", "yellow")}
                            {SyncPairIcon("Hau & Alolan Raichu", "hau-trainer electric alola rival free-spirit melemele-family strike exr-none story", "/images/pair/0G_ALOLA/0G_ALOLA_0A-03_Hau.png", "yellow")}
                            {SyncPairIcon("Koga & Crobat", "koga-trainer poison kanto elite-four scarf ninja-family tech exr-none story", "/images/pair/0A_KANTO/0A_KANTO_0B-05_Koga.png", "green")}
                            {SyncPairIcon("Roxie & Scolipede", "roxie-trainer poison unova gym-leader artistic undella-town strike exr-none genpool ", "/images/pair/0E_UNOVA/0E_UNOVA_0B-09_Roxie.png", "green")}
                            {SyncPairIcon("Looker & Croagunk", "looker-trainer poison sinnoh veteran-trainer strike exr-none spotlight ticket", "/images/pair/0D_SINNOH/0D_SINNOH_0E-05_Looker.png", "green")}
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Player & Gyarados (Strike)", "player-trainer water main-character pasio strike exr-none egg", "/images/pair/0Z_EGGS/MALE/Egg_0130_01sa.png", "red")}
                            {SyncPairIcon("Zinnia & Salamence", "zinnia-trainer dragon hoenn cape space-cadet tech exr-none battle-point", "/images/pair/0C_HOENN/0C_HOENN_0E-04-BP_Zinnia.png", "orange")}
                            {SyncPairIcon("Roark & Rampardos", "roark-trainer rock sinnoh gym-leader glasses rock-lover strike exr-none genpool ", "/images/pair/0D_SINNOH/0D_SINNOH_0B-01_Roark.png", "orange")}
                            {SyncPairIcon("Siebold (Holiday 2019) & Octillery", "siebold-trainer water kalos seasonal-outfit cook artistic tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0A_HOLIDAY_2019_Siebold.png", "orange")}
                            {SyncPairIcon("Professor Sycamore & Bulbasaur", "sycamore-trainer grass kalos knowledgeable researcher strike exr-none lodge-pair lodge-free", "/images/pair/0F_KALOS/0F_KALOS_0F-01_TL_ProfSycamore.png", "yellow")}
                            {SyncPairIcon("Elesa (Palentine's 2023) & Togetic", "elesa-trainer flying unova seasonal-outfit scarf artistic strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0E_PAL_2023_Elesa.png", "yellow")}
                            {SyncPairIcon("Helena (Hex Maniac) & Haunter", "helena-trainer ghost kalos supernatural tech exr-none event", "/images/pair/0F_KALOS/0F_KALOS_0X-01_Helena.png", "yellow")}
                            {SyncPairIcon("Clair & Kingdra", "clair-trainer dragon johto gym-leader cape dragon-cousin strike exr-none story", "/images/pair/0B_JOHTO/0B_JOHTO_0B-08_Clair.png", "yellow")}
                            {SyncPairIcon("Noland & Pinsir", "noland-trainer bug hoenn battle-facility-foe knowledgeable strike exr-none genpool ", "/images/pair/0C_HOENN/Noland_Pinsir_4.png", "green")}
                            {SyncPairIcon("Bruno & Machamp", "bruno-trainer fighting kanto elite-four body-builder sweet-tooth strike exr-none genpool ", "/images/pair/0A_KANTO/0A_KANTO_0C-02_Bruno.png", "green")}
                            {SyncPairIcon("Petey (Poké Kid) & Pikachu", "petey-trainer electric galar tech exr-none event", "/images/pair/0H_GALAR/Petey_Pikachu_3.png", "green")}
                            {SyncPairIcon("Volkner & Raichu", "volkner-trainer electric sinnoh gym-leader gadgeteer tech exr-none lodge-pair lodge-free", "/images/pair/0D_SINNOH/Volkner_0026.png", "green")}
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            {SyncPairIcon("Rika & Whiscash", "rika-trainer ground paldea elite-four knowledgeable grown-woman tech exr-none lodge-pair lodge-gacha", "/images/pair/0I_PALDEA/Rika_Whiscash_4.png", "red")}
                            {SyncPairIcon("Lyra (Summer 2020) & Jigglypuff", "lyra-trainer fairy johto seasonal-outfit pokeathlete pigtails strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0B_SUM_2020_Lyra.png", "red")}
                            {SyncPairIcon("Calem & Fennekin", "calem-trainer fire kalos main-character sunglasses strike exr-none lodge-pair lodge-free", "/images/pair/0F_KALOS/0F_KALOS_0A-01_TL_Calem.png", "red")}
                            {SyncPairIcon("Siebold & Clawitzer", "siebold-trainer water kalos elite-four cook passionate-spirit strike exr-none genpool ", "/images/pair/0F_KALOS/0F_KALOS_0C-02_Siebold.png", "orange")}
                            {SyncPairIcon("Nate & Braviary", "nate-trainer flying unova main-character unova-adventurer battle-partner strike exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0A-05_Nate.png", "orange")}
                            {SyncPairIcon("Tate & Solrock", "tate-trainer psychic hoenn gym-leader supernatural space-cadet strike exr-none genpool ", "/images/pair/0C_HOENN/0C_HOENN_0B-07-1_Tate.png", "yellow")}
                            {SyncPairIcon("Mina & Granbull", "mina-trainer fairy alola trial-giver artistic free-spirit tech exr-none genpool", "/images/pair/0G_ALOLA/0G_ALOLA_0B-07_Mina.png", "yellow")}
                            {SyncPairIcon("Marnie & Toxicroak", "marnie-trainer poison galar rival pigtails fancy-lady tech exr-none lodge-pair lodge-gacha", "/images/pair/0H_GALAR/0H_GALAR_0A-04_TL_Marnie.png", "yellow")}
                            {SyncPairIcon("Iris & Haxorus", "iris-trainer dragon unova gym-leader undella-town strike exr-none story", "/images/pair/0E_UNOVA/0E_UNOVA_0C-01_Iris.png", "green")}
                            {SyncPairIcon("Korrina & Lucario", "korrina-trainer fighting kalos gym-leader passionate-spirit strike exr-none story", "/images/pair/0F_KALOS/0F_KALOS_0B-03_Korrina.png", "green")}
                            {SyncPairIcon("Karen & Umbreon", "karen-trainer dark johto elite-four grown-woman strike exr-none battle-point", "/images/pair/0B_JOHTO/0B_JOHTO_0C-04-BP_Karen.png", "green")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Gardenia & Roserade", "gardenia-trainer grass sinnoh gym-leader nature-lover battleground-foe strike exr-none genpool ", "/images/pair/0D_SINNOH/0D_SINNOH_0B-02_Gardenia.png", "red")}
                            {SyncPairIcon("Molayne & Alolan Dugtrio", "molayne-trainer steel alola elite-four glasses observatory-cousin strike exr-none genpool ", "/images/pair/0G_ALOLA/0G_ALOLA_0C-05_Molayne.png", "red")}
                            {SyncPairIcon("Naomi & Sandslash", "naomi-trainer ground alola sunglasses strike exr-none event", "/images/pair/0G_ALOLA/0G_ALOLA_0X-01_Naomi.png", "red")}
                            {SyncPairIcon("Sygna Suit Brock & Tyranitar", "brock-trainer rock kanto sygna-suit rock-lover body-builder strike exr-none story", "/images/pair/0A_KANTO/0A_KANTO_0B-01_SSBrock.png", "orange")}
                            {SyncPairIcon("Valerie & Sylveon", "valerie-trainer fairy kalos gym-leader artistic free-spirit strike exr-none story", "/images/pair/0F_KALOS/0F_KALOS_0B-06_Valerie.png", "orange")}
                            {SyncPairIcon("Pryce & Dewgong", "pryce-trainer ice johto gym-leader scarf veteran-trainer strike exr-none story", "/images/pair/0B_JOHTO/0B_JOHTO_0B-07_Pryce.png", "orange")}
                            {SyncPairIcon("May & Wailmer", "may-trainer water hoenn main-character space-cadet contest-lover strike exr-none lodge-pair lodge-free", "/images/pair/0C_HOENN/0C_HOENN_0A-02_TL_May.png", "orange")}
                            {SyncPairIcon("Hapu & Mudsdale", "hapu-trainer ground alola trial-giver pigtails nature-lover strike exr-none story", "/images/pair/0G_ALOLA/0G_ALOLA_0B-11_Hapu.png", "yellow")}
                            {SyncPairIcon("Bugsy & Beedrill", "bugsy-trainer bug johto gym-leader knowledgeable researcher strike exr-none genpool ", "/images/pair/0B_JOHTO/Bugsy_Beedrill_3.png", "yellow")}
                            {SyncPairIcon("Flint & Infernape", "flint-trainer fire sinnoh elite-four sinnoh-bros passionate-spirit strike exr-none story", "/images/pair/0D_SINNOH/Flint_Infernape_4.png", "yellow")}
                            {SyncPairIcon("Katherine & Slurpuff", "katherine-trainer fairy kalos pigtails tech exr-none event", "/images/pair/0F_KALOS/Katherine_0685.png", "yellow")}
                            {SyncPairIcon("Jessie & Arbok", "jessie-trainer poison kanto villain team-rocket-forever strike exr-none event", "/images/pair/0A_Kanto/0A_Kanto_0D-02_Jessie.png", "green")}
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
                            {SyncPairIcon("Arc Suit Cynthia & Garchomp", "cynthia-trainer ground sinnoh champion researcher multi exr-strike arc-fair", "/images/pair/0D_SINNOH/CynthiaArc_Garchomp_5.png", "red")}
                            {SyncPairIcon("Sygna Suit Red (Thunderbolt) & Pikachu", "red-trainer electric kanto main-character sygna-suit pallet-town tech exr-field master-fair", "/images/pair/0A_KANTO/0A_KANTO_0A-01_SSTRed.png", "orange")}
                            {SyncPairIcon("Leaf (Champion) & Moltres", "leaf-trainer fire kanto main-character champion pallet-town tech exr-support master-fair", "/images/pair/0A_KANTO/0A_KANTO_0A-03_NCLeaf.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Lear & Gholdengo", "lear-trainer steel pasio rival sygna-suit sunglasses sprint exr-strike master-fair", "/images/pair/pasio/SS_Lear.png", "yellow")}
                            {SyncPairIcon("Bianca (Champion) & Virizion", "bianca-trainer fighting unova champion glasses unova-adventurer strike exr-support master-fair", "/images/pair/0E_UNOVA/Bianca_Virizion.png", "green")}
                            {SyncPairIcon("Serena (Champion) & Greninja", "serena-trainer water kalos main-character champion tech exr-support master-fair", "/images/pair/0F_KALOS/0F_KALOS_0A-02_ChampSerena.png", "green")}
                            {SyncPairIcon("Silver (Champion) & Tyranitar★", "silver-trainer rock johto rival champion battle-partner strike exr-sprint master-fair shiny", "/images/pair/0B_JOHTO/Silver_Tyranitar_5.png", "green")}
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            {SyncPairIcon("Oleana & Garbodor", "oleana-trainer poison galar villain researcher grown-woman tech exr-support pokefair", "/images/pair/0H_GALAR/0H_GALAR_0D-02_Oleana.png", "red")}
                            {SyncPairIcon("Geeta & Glimmora", "geeta-traier poison paldea champion passionate-spirit veteran-trainer field exr-strike master-fair", "/images/pair/0I_PALDEA/Geeta_Glimmora_5.png", "red")}
                            {SyncPairIcon("Sygna Suit Roxie & Toxtricity (Amped Forme)", "roxie-trainer poison unova gym-leader sygna-suit artistic tech exr-strike pokefair", "/images/pair/0E_UNOVA/ssRoxie_Toxtricity.png", "red")}
                            {SyncPairIcon("Adaman & Leafeon", "adaman-trainer grass sinnoh nature-lover knowledgeable tech exr-sprint master-fair has-lodge", "/images/pair/0D1_HISUI/0I_HISUI_0B-01_Adaman.png", "orange")}
                            {SyncPairIcon("Irida & Glaceon", "irida-trainer ice sinnoh nature-lover artistic tech exr-support master-fair has-lodge", "/images/pair/0D1_HISUI/0I_HISUI_0B-02_Irida.png", "orange")}
                            {SyncPairIcon("Red & Venusaur", "red-trainer grass kanto main-character pallet-town passionate-spirit field exr-strike mix-scout", "/images/pair/0A_KANTO/Red_Venusaur.png", "yellow")}
                            {SyncPairIcon("Dahlia & Ludicolo", "dahlia-trainer water sinnoh battle-facility-foe artistic grown-woman tech exr-strike pokefair", "/images/pair/0D_SINNOH/Dahlia_Ludicolo_5.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Lyra & Celebi", "lyra-trainer grass johto main-character sygna-suit pigtails tech exr-field master-fair", "/images/pair/0B_JOHTO/0B_JOHTO_0A-02_ssLyra.png", "yellow")}
                            {SyncPairIcon("Lillie (Holiday 2024) & Primarina★", "lillie-trainer fairy alola seasonal-outfit fancy-lady artistic sprint exr-support", "/images/pair/0G_ALOLA/Lillie_0730s_5.png", "yellow")}
                            {SyncPairIcon("Lillie (Anniversary 2024) & Solgaleo", "lillie-trainer steel alola seasonal-outfit pigtails alola-adventurer sprint exr-field event", "/images/pair/0G_ALOLA/Lillie_Solgaleo_5.png", "green")}
                            {SyncPairIcon("Sygna Suit Wally & Gardevoir★", "wally-trainer fairy hoenn rival sygna-suit passionate-spirit tech exr-sprint pokefair shiny", "/images/pair/0C_HOENN/0C_HOENN_0A-03_ssWally.png", "green")}
                            {SyncPairIcon("Poppy (New Year's 2025) & Steelix★", "poppy-trainer steel paldea elite-four seasonal-outfit fancy-lady field exr-support shiny", "/images/pair/0I_PALDEA/Poppy_0208.png", "green")}
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            {SyncPairIcon("Sygna Suit Diantha & Diancie★", "diantha-trainer rock kalos champion sygna-suit artistic tech exr-field pokefair", "/images/pair/0F_KALOS/0F_KALOS_0C-05_ssDiantha.png", "red")}
                            {SyncPairIcon("Sygna Suit Nemona & Scream Tail", "nemona-trainer fairy paldea rival sygna-suit champion strike exr-sprint master-fair", "/images/pair/0I_PALDEA/Nemona_Screamtail_5.png", "red")}
                            {SyncPairIcon("Nate (Champion) & Haxorus★", "nate-trainer dragon unova main-character champion unova-adventurer strike exr-field master-fair", "/images/pair/0E_UNOVA/Nate_Haxorus.png", "red")}
                            {SyncPairIcon("Rei & Hisuian Decidueye", "rei-trainer fighting sinnoh main-character scarf sprint exr-strike pokefair", "/images/pair/0D1_HISUI/Rei.png", "orange")}
                            {SyncPairIcon("Hop (Champion) & Galarian Zapdos", "hop-trainer fighting galar champion cape galar adventurer tech exr-support master-fair", "/images/pair/0H_GALAR/0H_GALAR_0A-03_NeoChampHop.png", "orange")}
                            {SyncPairIcon("Sygna Suit Hau & Tapu Koko", "hau-trainer electric alola sygna-suit free-spirit passionate-spirit tech exr-strike pokefair", "/images/pair/0G_ALOLA/0G_ALOLA_0A-03_ssHau.png", "orange")}
                            {SyncPairIcon("Clavell & Quaquaval", "clavell-trainer water paldea glasses knowledgeable veteran-trainer sprint exr-field pokefair", "/images/pair/0I_PALDEA/Clavell_0914.png", "yellow")}
                            {SyncPairIcon("Leaf & Blastoise", "leaf-trainer water kanto main-character pallet-town field exr-sprint mix-scout", "/images/pair/0A_KANTO/Leaf_Blastoise_5.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Ingo & Chandelure", "ingo-trainer ghost unova battle-facility-foe sygna-suit battle-partner sprint exr-tech pokefair", "/images/pair/0E_UNOVA/Ingo_0609.png", "yellow")}
                            {SyncPairIcon("Lucas & Torterra", "lucas-trainer ground sinnoh main-character scarf knowledgeable field exr-sprint mix-scout", "/images/pair/0D_SINNOH/Lucas_0389.png", "yellow")}
                            {SyncPairIcon("Gardenia (Summer 2024) & Dhelmise", "gardenia-trainer ghost sinnoh gym-leader seasonal-outfit nature-lover field exr-support", "/images/pair/0D_SINNOH/Gardenia_Dhelmise_5.png", "green")}
                            {SyncPairIcon("Skyla (Anniversary 2022) & Tornadus (Therian Forme)", "skyla-trainer flying unova seasonal-outfit undella-town tech exr-strike pokefair", "/images/pair/0Y_SEASONALS/0Z_0G_ANNIV_2022_Skyla.png", "green")}
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            {SyncPairIcon("Sygna Suit Lana & Tapu Lele", "lana-trainer psychic alola trial-giver sygna-suit free-spirit strike exr-sprint pokefair", "/images/pair/0G_ALOLA/0G_ALOLA_0B-02_ssLana.png", "red")}
                            {SyncPairIcon("Leon (Alt.) & Dragapult", "leon-trainer dragon galar champion battle-facility-foe passionate-spirit tech exr-sprint pokefair", "/images/pair/0H_GALAR/0H_GALAR_0C-01_TowerLeon.png", "red")}
                            {SyncPairIcon("Larry & Dudunsparce", "larry-trainer normal paldea gym-leader elite-four free-spirit sprint exr-tech pokefair", "/images/pair/0I_PALDEA/Larry_Dudunsparce.png", "red")}
                            {SyncPairIcon("Avery & Galarian Slowking", "avery-trainer psychic galar gym-leader glasses supernatural field exr-tech pokefair", "/images/pair/0H_GALAR/Avery_Slowking_5.png", "orange")}
                            {SyncPairIcon("Sygna Suit Emmet & Eelektross", "emmet-trainer electric unova battle-facility-foe sygna-suit battle-partner field exr-tech pokefair", "/images/pair/0E_UNOVA/Emmet_0604.png", "orange")}
                            {SyncPairIcon("Roxanne (Fall 2023) & Runerigus", "roxanne-trainer ground hoenn gym-leader seasonal-outfit rock-lover tech exr-strike", "/images/pair/0C_HOENN/Roxanne_Runerigus.png", "orange")}
                            {SyncPairIcon("Blue (Classic) & Charizard", "blue-trainer fire kanto rival pallet-town passionate-spirit field exr-strike mix-scout", "/images/pair/0A_KANTO/Blue_Charizard.png", "yellow")}
                            {SyncPairIcon("Sygna Suit N & Black Kyurem", "n-trainer ice unova rival sygna-suit unova-adventurer tech exr-strike pokefair", "/images/pair/0E_UNOVA/0E_UNOVA_0E-03_SSN.png", "yellow")}
                            {SyncPairIcon("Shauntal (Fall 2024) & Froslass", "shauntal-trainer ice unova elite-four seasonal-outfit glasses tech exr-sprint", "/images/pair/0E_UNOVA/Shauntal_0478.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Silver & Sneasel", "silver-trainer ice johto rival sygna-suit battle-partner tech exr-support pokefair", "/images/pair/0B_JOHTO/0B_JOHTO_0A-04_SSSilver.png", "yellow")}
                            {SyncPairIcon("Gloria (Alt. 2) & Cinderace", "gloria-trainer fire galar main-character passionate-spirit galar-adventurer tech exr-support pokefair", "/images/pair/0H_GALAR/0H_GALAR_0A-02_GymGloria01.png", "yellow")}
                            {SyncPairIcon("Marnie & Cinderace", "marnie-trainer fire galar rival pigtails fancy-lady field exr-support variety", "/images/pair/0H_GALAR/Marnie_0815_5.png", "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Bede & Inteleon", "bede-trainer water galar rival galar-adventurer field exr-tech variety", "/images/pair/0H_GALAR/Bede_0818_5.png", "red")}
                            {SyncPairIcon("Hop & Rillaboom", "hop-trainer grass galar rival galar-adventurer researcher field exr-strike variety", "/images/pair/0H_GALAR/Hop_0812_5.png", "red")}
                            {SyncPairIcon("Selene (Special Costume) & Scizor", "selene-trainer steel alola main-character special-costume passionate-spirit field exr-strike", "/images/pair/0G_ALOLA/Selene_Scizor_5.png", "red")}
                            {SyncPairIcon("Wallace (New Year's 2024) & Blacephalon", "wallace-trainer fire hoenn gym-leader seasonal-outfit contest-lover field exr-strike", "/images/pair/0C_HOENN/Wallace_0806.png", "orange")}
                            {SyncPairIcon("Sygna Suit Cynthia (Renegade) & Giratina Altered Forme", "cynthia-trainer ghost sinnoh sygna-suit battle-facility-foe passionate-spirit tech exr-strike master-fair", "/images/pair/0D_SINNOH/0D_SINNOH_0C-05_SSRCynthia.png", "orange")}
                            {SyncPairIcon("N (Anniversary 2021) & Reshiram", "n-trainer fire unova rival seasonal-outfir supernatural tech exr-strike master-fair", "/images/pair/0Y_SEASONALS/0Z_0G_ANNIV_2021_N.png", "orange")}
                            {SyncPairIcon("Sygna Suit May & Blaziken", "may-trainer fire hoenn main-character sygna-suit pigtails tech exr-sprint pokefair", "/images/pair/0C_HOENN/0C_HOENN_0A-02_SSMay.png", "yellow")}
                            {SyncPairIcon("Paulo & Lycanroc Dusk", "paulo-trainer rock rival knowledgeable pasio sprint exr-support pokefair", "/images/pair/pasio/Paulo.png", "yellow")}
                            {SyncPairIcon("Raihan (Anniversary 2022) & Flygon", "raihan-trainer dragon galar seasonal-outfit sunglasses gadgeteer tech exr-support pokefair", "/images/pair/0Y_SEASONALS/0Z_0G_ANNIV_2022_Raihan.png", "yellow")}
                            {SyncPairIcon("Akari & Hisuian Samurott", "akari-trainer dark sinnoh main-character scarf field exr-strike pokefair", "/images/pair/0D1_HISUI/Akari.png", "green")}
                            {SyncPairIcon("Zinnia (Special Costume) & Thievul", "zinnia-trainer dark hoenn special-costume cape space-cadet tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2023_Zinnia.png", "green")}
                            {SyncPairIcon("Sygna Suit Cyrus & Darkrai", "cyrus-trainer dark sinnoh sygna-suit scarf villain tech exr-field pokefair", "/images/pair/0D_SINNOH/0D_SINNOH_0D-01_SSCyrus.png", "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Gloria (Dojo Uniform) & Urshifu Rapid Strike", "gloria-trainer water galar main-character passionate-spirit galar-adventurer tech exr-support pokefair", "/images/pair/0H_GALAR/0H_GALAR_0A-02_GloriaDojo.png", "red")}
                            {SyncPairIcon("Elesa (Classic) & Emolga", "elesa-trainer electric unova gym-leader passionate-spirit artistic tech exr-sprint pokefair", "/images/pair/0E_UNOVA/0E_UNOVA_0B-04_ElesaClassic.png", "red")}
                            {SyncPairIcon("Lyra & Vaporeon", "lyra-trainer water johto main-character pigtails pokeathlete tech exr-none variety", "/images/pair/0B_JOHTO/0B_JOHTO_0A-02_VS_Lyra.png", "orange")}
                            {SyncPairIcon("Elio & Espeon", "elio-trainer psychic alola main-character nature-lover alola-adventurer tech exr-support variety", "/images/pair/0G_ALOLA/Elio_Espeon.png", "orange")}
                            {SyncPairIcon("Calem & Sylveon", "calem-trainer fairy kalos main-character sunglasses tech exr-support variety", "/images/pair/0F_KALOS/Calem_0700.png", "yellow")}
                            {SyncPairIcon("Hilda & Leafeon", "hilda-trainer grass unova main-character unova-adventurer passionate-spirit tech exr-support variety", "/images/pair/0E_UNOVA/Hilda_0470.png", "yellow")}
                            {SyncPairIcon("Hilbert & Glaceon", "hilbert-trainer ice unova main-character unova-adventurer tech exr-support variety", "/images/pair/0E_UNOVA/Hilbert_0471.png", "yellow")}
                            {SyncPairIcon("Selene & Umbreon", "selene-trainer dark alola main-character nature-lover alola-adventurer tech exr-support variety", "/images/pair/0G_ALOLA/Selene_Umbreon.png", "yellow")}
                            {SyncPairIcon("Marnie (Palentine's 2022) & Mawile", "marnie-trainer steel galar seasonal-outfit pigtails cook tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0E_PAL_2022_Marnie.png", "green")}
                            {SyncPairIcon("Lucas & Flareon", "lucas-trainer fire sinnoh main-character scarf knowledgeable tech exr-none variety", "/images/pair/0D_SINNOH/0D_SINNOH_0A-01_VS_Lucas.png", "green")}
                            {SyncPairIcon("Viola (Holiday 2023) & Vivillon", "viola-trainer bug kalos gym-leader seasonal-outfit artistic field exr-tech", "/images/pair/0F_KALOS/Viola_Vivillon.png", "green")}
                            {SyncPairIcon("Brycen-Man & Zoroark", "brycen-trainer dark unova special-costume artistic masked tech exr-strike", "/images/pair/0E_UNOVA/Byrcen-Man_Zoroark.png", "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("Kris & Jolteon", "kris-trainer electric johto main-character pigtails knowledgeable tech exr-none variety", "/images/pair/0B_JOHTO/0B_JOHTO_0A-03_VS_Kris.png", "red")}
                            {SyncPairIcon("May (Anniversary 2022) & Latias", "may-trainer psychic hoenn seasonal-outfit free-spirit battle-partner tech exr-field pokefair", "/images/pair/0Y_SEASONALS/0Z_0G_ANNIV_2022_May.png", "red")}
                            {SyncPairIcon("Giovanni & Rhydon", "giovanni-trainer ground kanto villain field exr-strike variety", "/images/pair/0A_KANTO/0A_KANTO_0D-01b_Giovanni (Pose 2).png", "red")}
                            {SyncPairIcon("Tate (Summer 2023) & Jirachi", "tate-trainer steel hoenn gym-leader seasonal-outfit space-cadet tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0B_SUM_2023_Tate.png", "orange")}
                            {SyncPairIcon("Lance & Dragonair", "lance-trainer dragon kanto champion cape tech exr-none variety", "/images/pair/0A_KANTO/0A_KANTO_0C-04b_Lance.png", "orange")}
                            {SyncPairIcon("Thorton & Magnezone", "thorton-trainer steel sinnoh battle-facility-foe knowledgeable gadgeteer field exr-support variety", "/images/pair/0D_SINNOH/Thorton_Magnezone.png", "orange")}
                            {SyncPairIcon("Noland & Ninjask", "noland-trainer bug hoenn battle-facility-foe knowledgeable sprint exr-strike variety", "/images/pair/0C_HOENN/Noland_Ninjask.png", "yellow")}
                            {SyncPairIcon("Greta & Breloom", "greta-trainer grass hoenn battle-facility-foe body-builder passionate-spirit sprint exr-field pokefair", "/images/pair/0C_HOENN/Greta_Breloom_5.png", "yellow")}
                            {SyncPairIcon("Bede & Hatterene", "bede-trainer fairy galar rival galar-adventurer tech exr-field pokefair", "/images/pair/0H_GALAR/0H_GALAR_0A-05_Bede.png", "yellow")}
                            {SyncPairIcon("Nemona & Pawmot", "nemona-trainer electric paldea rival champion passionate-spirit sprint exr-none pokefair", "/images/pair/0I_PALDEA/0J_PALDEA_0A-03_Nemona.png", "green")}
                            {SyncPairIcon("Sygna Suit Steven & Deoxys (Speed Forme)", "steven-trainer psychic hoenn champion sygna-suit space-cadet tech exr-support pokefair", "/images/pair/0Z_OTHER-FORMES/0C_HOENN_0C-05_ssSteven_DSpeed_.png", "green")}
                            {SyncPairIcon("Ariana & Arbok", "ariana-trainer poison johto villain tech exr-strike variety", "/images/pair/0B_JOHTO/0B_JOHTO_0D-02_Ariana.png", "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            {SyncPairIcon("Lysandre & Yveltal", "lysandre-trainer flying kalos villain gadgeteer old-colleagues strike exr-sprint pokefair", "/images/pair/0F_KALOS/0F_KALOS_0D-01_Lysandre.png", "red")}
                            {SyncPairIcon("Sygna Suit Leaf & Venusaur", "leaf-trainer grass kanto sygna-suit pallet-town tech exr-support pokefair", "/images/pair/0A_KANTO/0A_KANTO_0A-03_SSLeaf.png", "red")}
                            {SyncPairIcon("Bianca & Musharna", "bianca-trainer psychic unova rival glasses unova-adventurer tech exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0A-04_Bianca.png", "orange")}
                            {SyncPairIcon("Sygna Suit Steven & Deoxys (Normal Forme)", "steven-trainer psychic hoenn champion sygna-suit space-cadet tech exr-support pokefair", "/images/pair/0C_HOENN/0C_HOENN_0C-05_ssSteven_ANormal_.png", "orange")}
                            {SyncPairIcon("Dawn (New Year's 2023) & Oricorio", "dawn-trainer ghost sinnoh main-character seasonal-outfit contest-lover tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0D_NY_2023_Dawn.png", "orange")}
                            {SyncPairIcon("Rosa (Special Costume) & Shaymin Sky Forme", "rosa-trainer grass unova main-character special-costume tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2022_Rosa.png", "yellow")}
                            {SyncPairIcon("Marnie & Morpeko", "marnie-trainer electric galar rival pigtains fancy-lady tech exr-none pokefair has-lodge", "/images/pair/0H_GALAR/0H_GALAR_0A-04_Marnie.png", "yellow")}
                            {SyncPairIcon("Serena & Delphox", "serena-trainer fire kalos main-character sunglasses kalos-neighbors tech exr-none spotlight ticket has-lodge", "/images/pair/0F_KALOS/0F_KALOS_0A-02_Serena.png", "yellow")}
                            {SyncPairIcon("Kiawe & Arcanine", "kiawe-trainer fire alola trial-giver body-builder artistic tech exr-none variety", "/images/pair/0G_ALOLA/0G_ALOLA_0B-03_Kiawe.png", "yellow")}
                            {SyncPairIcon("Gordie & Coalossal", "gordie-trainer rock galar gym-leader sunglasses tech exr-none spotlight ticket", "/images/pair/0H_GALAR/0H_GALAR_0B-06_Gordie.png", "green")}
                            {SyncPairIcon("Colress & Klinklang", "colres-trainer steel unova villain glasses researcher tech exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0D-02_Colress.png", "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            {SyncPairIcon("Iris (Alt.) & Hydreigon", "iris-trainer dragon unova champion undella-town tech exr-sprint pokefair", "/images/pair/0E_UNOVA/0E_UNOVA_0C-01-2_IrisChampion.png", "red")}
                            {SyncPairIcon("Whitney (Holiday 2022) & Sawsbuck", "whitney-trainer normal johto gym-leader seasonal-outfit pokeathlete tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0A_HOLIDAY_2022_Whitney.png", "red")}
                            {SyncPairIcon("Plumeria & Gengar", "plumeria-trainer poison alola villain grown-woman sprint exr-tech variety", "/images/pair/0G_ALOLA/Plumeria_Gengar.png", "red")}
                            {SyncPairIcon("Bertha & Hippowdon", "bertha-trainer ground sinnoh elite-four scarf veteran-trainer tech exr-none spotlight ticket", "/images/pair/0D_SINNOH/0D_SINNOH_0C-02_Bertha.png", "orange")}
                            {SyncPairIcon("The Masked Royal & Incineroar", "kukui-trainer dark alola battle-facility-foe masked body-builder tech exr-none spotlight ticket", "/images/pair/0G_ALOLA/0G_ALOLA_0E-02_MaskedRoyal.png", "orange")}
                            {SyncPairIcon("Lucian & Girafarig", "lucian-trainer psychic sinnoh elite-four glasses knowledgeable tech exr-none spotlight ticket", "/images/pair/0D_SINNOH/0D_SINNOH_0C-04_Lucian.png", "orange")}
                            {SyncPairIcon("Sygna Suit Grimsley (Kimono) & Bisharp", "grimsley-trainer stel alola scarf free-spirit tech exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0C-04_GrimsleyKimono.png", "yellow")}
                            {SyncPairIcon("Courtney & Camerupt", "courtney-trainer ground hoenn villain battle-partner tech exr-none spotlight ticket", "/images/pair/0C_HOENN/0C_HOENN_0D-03_Courtney.png", "yellow")}
                            {SyncPairIcon("Ghetsis & Kyurem", "ghetsis-trainer ice unova villain cape tech exr-none legendary-adventure", "/images/pair/0E_UNOVA/0E_UNOVA_0D-01_Ghetsis.png", "yellow")}
                            {SyncPairIcon("Marnie (Summer 2021) & Grimmsnarl", "marnie-trainer fairy galar rival seasonal-outfit galar-adventurer tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0B_SUM_2021_Marnie.png", "green")}
                            {SyncPairIcon("Steven & Metagross", "steven-trainer steel hoenn champion rock-lover space-cadet strike exr-support pokefair has-lodge", "/images/pair/0C_HOENN/0C_HOENN_0C-05_Steven.png", "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            {SyncPairIcon("Tierno & Talonflame", "tierno-trainer fire kalos rival artistic field exr-none training-ticket", "/images/pair/0F_KALOS/Tierno_0663.png", "red")}
                            {SyncPairIcon("Nessa (Holiday 2021) & Eiscue", "nessa-trainer ice galar seasonal-outfit artistic grown-woman tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0A_HOLIDAY_2021_Nessa.png", "red")}
                            {SyncPairIcon("Serena (Palentine's 2021) & Whimsicott", "serena-trainer fairy kalos seasonal-outfit sweet-tooth cook tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0E_PAL_2021_Serena.png", "orange")}
                            {SyncPairIcon("Ingo (Special Costume) & Accelgor", "ingo-trainer bug unova special-costume glasses battle-partner tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2022_Ingo.png", "orange")}
                            {SyncPairIcon("Archer & Houndoom", "archer-trainer dark johto villain sprint exr-tech variety", "/images/pair/0B_JOHTO/0B_JOHTO_0D-01_Archer.png", "orange")}
                            {SyncPairIcon("Petrel & Weezing", "petrel-trainer poison johto villain strike exr-support variety", "/images/pair/0B_JOHTO/0B_JOHTO_0D-03_Petrel.png", "yellow")}
                            {SyncPairIcon("Victor & Spectrier", "victor-trainer ghost galar main-character galar-adventurer field exr-none event", "/images/pair/0H_GALAR/0H_GALAR_0A-01_SpecialVictor.png", "yellow")}
                            {SyncPairIcon("Karen & Houndoom", "karen-trainer dark johto elite-four grown-woman strike exr-none spotlight ticket", "/images/pair/0B_JOHTO/0B_JOHTO_0C-04_Karen.png", "yellow")}
                            {SyncPairIcon("Serena & Fletchling", "serena-trainer flying kalos main-character sunglasses tech exr-none lodge-pair lodge-free", "/images/pair/0F_KALOS/0F_KALOS_0A-02_TL_Serena.png", "green")}
                            {SyncPairIcon("Shauna & Delcatty", "shauna-trainer normal kalos rival pigtails tech exr-none lodge-pair lodge-free", "/images/pair/0F_KALOS/Shauna_0301.png", "green")}
                            {SyncPairIcon("Malva & Talonflame", "malva-trainer fire kalos elite-four sunglasses grown-woman sprint exr-tech spotlight no-ticket", "/images/pair/0F_KALOS/Malva_Talonflame_5.png", "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("Wally & Altaria", "wally-trainer dragon hoenn rival battle-facility-foe passionate-spirit sprint exr-none training-ticket", "/images/pair/0C_HOENN/Wally_Altaria_5.png", "red")}
                            {SyncPairIcon("Hugh & Unfezant", "hugh-trainer flying unova rival unova-adventurer passionate-spirit sprint exr-none training-ticket", "/images/pair/0E_UNOVA/Hugh_Unfezant_5.png", "red")}
                            {SyncPairIcon("Sidney & Absol", "sidney-trainer dark hoenn elite-four passionate-spirit tech exr-none spotlight ticket", "/images/pair/0C_HOENN/0C_HOENN_0C-01_Sidney.png", "orange")}
                            {SyncPairIcon("Volkner & Luxray", "volkner-trainer electric sinnoh gym-leader sinnoh-bros gadgeteer tech exr-none spotlight ticket has-lodge", "/images/pair/0D_SINNOH/0D_SINNOH_0B-08_Volkner.png", "orange")}
                            {SyncPairIcon("N & Sigilyph", "n-trainer psychic unova rival villain unova-adventurer tech exr-none lodge-pair lodge-gacha", "/images/pair/0E_UNOVA/0E_UNOVA_0E-03_TL_N.png", "yellow")}
                            {SyncPairIcon("Agatha & Gengar", "agatha-trainer ghost kanto elite-four veteran-trainer old-timer genpool tech exr-none", "/images/pair/0A_KANTO/Agatha_Gengar_4.png", "yellow")}
                            {SyncPairIcon("Clemont & Heliolisk", "clemont-trainer electric kalos gym-leader glasses gadgeteer tech exr-none spotlight ticket", "/images/pair/0F_KALOS/0F_KALOS_0B-05_Clemont.png", "yellow")}
                            {SyncPairIcon("Will & Xatu", "will-trainer psychic johto elite-four masked tech exr-none genpool", "/images/pair/0B_JOHTO/Will_0178_4.png", "yellow")}
                            {SyncPairIcon("Hop & Pincurchin", "hop-trainer electric galar rival galar-adventurer field exr-none training-ticket", "/images/pair/0H_GALAR/Hop_0871.png", "green")}
                            {SyncPairIcon("Darach & Staraptor", "darach-trainer flying sinnoh battle-facility-foe glasses undella-town tech exr-none spotlight ticket", "/images/pair/0D_SINNOH/0D_SINNOH_0E-04_Darach.png", "green")}
                            {SyncPairIcon("Skyla (Holiday 2020) & Togekiss", "skyla-trainer flying unova seasonal-outfit undella-town tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0A_HOLIDAY_2020_Skyla.png", "green")}
                            {SyncPairIcon("Dawn & Torterra", "dawn-trainer grass sinnoh main-character scarf contest-lover support exr-none spotlight ticket has-lodge", "/images/pair/0D_SINNOH/0D_SINNOH_0A-02_Dawn.png", "green")}
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Gladion & Weavile", "gladion-trainer ice alola rval villain alola-adventurer field exr-none training-ticket", "/images/pair/0G_ALOLA/Gladion_Weavile_5.png", "red")}
                            {SyncPairIcon("Professor Oak & Mew", "oak-trainer psychic kanto researcher old-timer tech exr-none story", "/images/pair/0A_KANTO/Oak_Mew_3.png", "red")}
                            {SyncPairIcon("Marnie & Scrafty", "marnie-trainer dark galar rival pigtails fancy-lady field exr-none training-ticket", "/images/pair/0H_GALAR/Marnie_Scrafty_5.png", "red")}
                            {SyncPairIcon("Professor Kukui & Lycanroc Dawn", "kukui-trainer rock alola sunglasses researcher knowledgeable tech exr-none spotlight ticket", "/images/pair/0G_ALOLA/0G_ALOLA_0E-01_Kukui.png", "orange")}
                            {SyncPairIcon("Plumeria & Salazzle", "plumeria-trainer poison alola villain grown-woman strike exr-none spotlight ticket", "/images/pair/0G_ALOLA/0G_ALOLA_0D-02_Plumeria.png", "orange")}
                            {SyncPairIcon("Blue & Alakazam", "blue-trainer psychic kanto champion rival pallet-town sprint exr-none training-ticket", "/images/pair/0A_KANTO/Blue_Alakazam_5.png", "orange")}
                            {SyncPairIcon("Blossom (Furisode Girl)", "blossom-trainer fairy kalos artistic tech exr-none event", "/images/pair/0F_KALOS/Blossom_0281.png", "orange")}
                            {SyncPairIcon("Cheren & Liepard", "cheren-trainer dark unova gym-leader rival unova-adventurer sprint exr-none training-ticket", "/images/pair/0E_UNOVA/Cheren_0510_5.png", "yellow")}
                            {SyncPairIcon("Lisia & Altaria", "lisia-trainer dragon hoenn artistic contest-lover tech exr-none spotlight ticket", "/images/pair/0C_HOENN/0C_HOENN_0E-03_Lisia.png", "yellow")}
                            {SyncPairIcon("Rose & Perrserker", "rose-trainer steel galar villain passionate-spirit tech exr-none battle-point", "/images/pair/0H_GALAR/Rose_Perrserker_4.png", "yellow")}
                            {SyncPairIcon("Rosa & Dewott", "rosa-trainer water unova main-character pigtails unova-adventurer tech exr-none lodge-pair lodge-free", "/images/pair/0E_UNOVA/0E_UNOVA_0A-06_TL_Rosa.png", "green")}
                            {SyncPairIcon("Silver & Feraligatr", "silver-trainer water johto rival battle-partner tech exr-none lodge-pair lodge-free", "/images/pair/0B_JOHTO/0B_JOHTO_0A-04_TL_Silver.png", "green")}
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            {SyncPairIcon("Irida & Flareon", "irida-trainer fire sinnoh nature-lover artistic tech exr-none lodge-pair lodge-gacha", "/images/pair/0D1_HISUI/0I_HISUI_0B-02_TL_Irida.png", "red")}
                            {SyncPairIcon("Wikstrom & Aegislash", "wikstrom-trainer steel kalos elite-four body-builder passionate-spirit tech exr-none genpool", "/images/pair/0F_KALOS/0F_KALOS_0C-03_Wikstrom.png", "red")}
                            {SyncPairIcon("Whitney & Miltank", "whitney-trainer normal johto gym-leader pigtails pokeathlete tech exr-none genpool", "/images/pair/0B_JOHTO/0B_JOHTO_0B-03_Whitney.png", "orange")}
                            {SyncPairIcon("Barry & Floatzel", "barry-trainer water sinnoh rival scarf passionate-spirit sprint exr-none training-ticket", "/images/pair/0D_SINNOH/Barry_Floatzel_5.png", "orange")}
                            {SyncPairIcon("Cheren & Purrloin", "cheren-trainer dark unova gym-leader rival unova-adventurer tech exr-none lodge-pair lodge-free", "/images/pair/0E_UNOVA/Cheren_Purrlion_4.png", "orange")}
                            {SyncPairIcon("Nanu & Alolan Persian", "nanu-trainer dark alola trial-giver veteran-trainer tech exr-none story", "/images/pair/0G_ALOLA/0G_ALOLA_0B-10_Nanu.png", "orange")}
                            {SyncPairIcon("Silver & Crobat", "silver-trainer flying johto rival battle-partner field exr-none training-ticket", "/images/pair/0B_JOHTO/Silver_Crobat_5.png", "yellow")}
                            {SyncPairIcon("Nemona & Lycanroc Midday", "nemona-trainer rock paldea rival champion passionate-spirit field exr-none training-ticket", "/images/pair/0I_PALDEA/Nemona_Lycanroc_5.png", "yellow")}
                            {SyncPairIcon("Eve (Poké Kid) & Eevee", "eve-trainer normal galar tech exr-none event", "/images/pair/0H_GALAR/Eve.png", "yellow")}
                            {SyncPairIcon("May (Spring 2021) & Lopunny", "may-trainer normal hoenn seasonal-outfit researcher battle-partner strike exr-none", "/images/pair/0Y_SEASONALS/0Z_0F_SPRING_2021_May.png", "yellow")}
                            {SyncPairIcon("Falkner & Pidgeot", "falkner-trainer flying johto gym-leader pokeathlete tech exr-none battle-point", "/images/pair/0B_JOHTO/0B_JOHTO_0B-01-BP_Falkner.png", "green")}
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            {SyncPairIcon("Winona & Pelipper", "winona-trainer flying hoenn gym-leader nature-lover free-spirit tech exr-none genpool", "/images/pair/0C_HOENN/0C_HOENN_0B-06_Winona.png", "red")}
                            {SyncPairIcon("Player & Gyarados (Tech)", "player-trainer water main-character pasio tech exr-none egg", "/images/pair/0Z_EGGS/MALE/Egg_0130_02sa.png", "red")}
                            {SyncPairIcon("Acerola (Fall 2020) & Mimikyu", "acerola-trainer ghost alola trial-giver seasonal-outfit fancy-lady tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0C_FALL_2020_Acerola.png", "orange")}
                            {SyncPairIcon("Will & Slowbro", "will-trainer psychic johto elite-four masked tech exr-none battle-point", "/images/pair/0B_JOHTO/Will_Slowbro_4.png", "orange")}
                            {SyncPairIcon("Brawly & Hariyama", "brawly-trainer fighting hoenn gym-leader body-builder nature-lover tech exr-none genpool", "/images/pair/0C_HOENN/0C_HOENN_0B-02_Brawly.png", "orange")}
                            {SyncPairIcon("Marshal & Conkeldurr", "marshal-trainer fighting unova elite-four body-builder passionate-spirit strike exr-none genpool", "/images/pair/0E_UNOVA/0E_UNOVA_0C-03_Marshal.png", "orange")}
                            {SyncPairIcon("Candice & Abomasnow", "candice-trainer ice sinnoh gym-leader pigtails battleground-foe tech exr-none genpool", "/images/pair/0D_SINNOH/0D_SINNOH_0B-07_Candice.png", "yellow")}
                            {SyncPairIcon("Blaine & Rapidash", "blaine-trainer fire kanto gym-leader sunglasses researcher tech exr-none genpool", "/images/pair/0A_KANTO/0A_KANTO_0B-07_Blaine.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Misty & Vaporeon", "misty-trainer water kanto sygna-suit battle-facility-foe passionate-spirit tech exr-none spotlight ticket", "/images/pair/0A_KANTO/0A_KANTO_0B-02_SSMisty.png", "green")}
                            {SyncPairIcon("Grimsley & Liepard", "grimsley-trainer dark unova elite-four scarf tech exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0C-04_Grimsley.png", "green")}
                            {SyncPairIcon("Lillie & Comfey", "lillie-trainer fairy alola fancy-lady alola-adventurer battle-partner tech exr-none lodge-pair lodge-free", "/images/pair/0G_ALOLA/0G_ALOLA_0A-04_TL_Lillie.png", "green")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Lance & Kingdra", "lance-trainer dragon kanto champion cape support exr-none lodge-pair lodge-gacha", "/images/pair/0A_KANTO/Lance_Kingdra_4.png", "red")}
                            {SyncPairIcon("Sophocles & Togedemaru", "sophocles-trainer electric alola trial-giver gadgeteer observatory-cousin tech exr-none genpool", "/images/pair/0G_ALOLA/Sophocles_Togedemaru_4.png", "red")}
                            {SyncPairIcon("Misty & Starmie", "misty-trainer water kanto gym-leader passionate-spirit support exr-none story", "/images/pair/0A_KANTO/0A_KANTO_0B-02_Misty.png", "orange")}
                            {SyncPairIcon("Morty (Fall 2021) & Banette", "morty-trainer ghost johto seasonal-outfit cape supernatural tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0C_FALL_2021_Morty.png", "orange")}
                            {SyncPairIcon("Steven & Cradily", "steven-trainer rock hoenn champion rock-lover space-cadet tech exr-none lodge-pair lodge-gacha", "/images/pair/0C_HOENN/0C_HOENN_0C-05-BP_Steven.png", "orange")}
                            {SyncPairIcon("Erika & Vileplume", "erika-trainer grass kanto gym-leader nature-love fancy-lady tech exr-none story", "/images/pair/0A_KANTO/0A_KANTO_0B-04a_Erika.png", "yellow")}
                            {SyncPairIcon("Janine & Ariados", "janine-trainer poison kanto gym-leader scarf ninja-family tech exr-none genpool", "/images/pair/0A_KANTO/Janine_Ariados_3.png", "yellow")}
                            {SyncPairIcon("Brock & Onix", "brock-trainer rock kanto gym-leader rock-lover body-builder tech exr-none story", "/images/pair/0A_KANTO/0A_KANTO_0B-01_Brock.png", "yellow")}
                            {SyncPairIcon("Wallace & Milotic", "wallace-trainer water hoenn gym-leader scarf contest-lover tech exr-none spotlight ticket", "/images/pair/0C_HOENN/0C_HOENN_0B-08_Wallace.png", "green")}
                            {SyncPairIcon("Crasher Wake & Floatzel", "crasherwake-trainer water sinnoh gym-leader body-builder masked tech exr-none genpool", "/images/pair/0D_SINNOH/0D_SINNOH_0B-04_CrasherWake.png", "green")}
                            {SyncPairIcon("Kahili & Toucannon", "kahili-trainer flying alola elite-four fancy-late grown-woman strike exr-none genpool", "/images/pair/0G_ALOLA/0G_ALOLA_0C-04_Kahili.png", "green")}
                        </div>
                        <div className="dminus-row tierlist-row">
                            <div className="tier-title">D-</div>
                            {SyncPairIcon("Calem & Meowstic", "calem-trainer psychic kalos main-character sunglasses kalos-neighbors tech exr-none story has-lodge", "/images/pair/0F_KALOS/0F_KALOS_0A-01_Calem.png", "red")}
                            {SyncPairIcon("Lt. Surge & Electrode", "ltsurge-trainer electric kanto gym-leader sunglasses body-builder tech exr-none genpool", "/images/pair/0A_KANTO/0A_KANTO_0B-03a_LtSurge.png", "red")}
                            {SyncPairIcon("Flannery & Torkoal", "flannery-trainer fire hoenn gym-leader grown-woman passionate-spirit tech exr-none story", "/images/pair/0C_HOENN/0C_HOENN_0B-04_Flannery.png", "orange")}
                            {SyncPairIcon("Lucy & Seviper", "lucy-trainer poison hoenn battle-facility-foe grown-woman passionate-spirit tech exr-none genpool", "/images/pair/0C_HOENN/0C_HOENN_0E-02_Lucy.png", "orange")}
                            {SyncPairIcon("Player & Pikachu", "player-trainer electric main-character pasio strike exr-none story", "/images/pair/pasio/PlayerM_Pikachu.png", "yellow")}
                            {SyncPairIcon("Norman & Slaking", "norman-trainer normal hoenn gym-leader hoenn-family passionate-spirit strike exr-none story", "/images/pair/0C_HOENN/0C_HOENN_0B-05_Norman.png", "yellow")}
                            {SyncPairIcon("Grant & Aurorus", "grant-trainer rock kalos gym-leader sweet-tooth rock-lover tech exr-none genpool", "/images/pair/0F_KALOS/0F_KALOS_0B-02_Grant.png", "green")}
                            {SyncPairIcon("Clay & Seismitoad", "clay-trainer ground unova gym-leader veteran-trainer rock-lover tech exr-none genpool", "/images/pair/0E_UNOVA/0E_UNOVA_0B-05_Clay.png", "green")}
                            {SyncPairIcon("Lorelei & Lapras", "lorelei-trainer ice kanto elite-four glasses grown-woman tech exr-none genpool", "/images/pair/0A_KANTO/0A_KANTO_0C-01_Lorelei.png", "green")}
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
                            {SyncPairIcon("Arc Suit Steven & Metagross", "steven-trainer steel hoenn champion rock-lover multi exr-support arc-fair", "/images/pair/0C_HOENN/StevenArc_Metagross_5ex.png", "red")}
                            {SyncPairIcon("Blue (Champion) & Zapdos", "blue-trainer electric kanto rival champion pallet-town support exr-strike master-fair", "/images/pair/0A_KANTO/0A_KANTO_0A-02_NCBlue.png", "orange")}
                            {SyncPairIcon("Sygna Suit Giovanni (Alt.) & Guzzlord", "giovanni-trainer dark johto villain sygna-suit sunglasses support exr-field master-fair", "/images/pair/0B_JOHTO/Giovanni_0799.png", "orange")}
                            {SyncPairIcon("Rosa (Champion) & Meloetta", "rosa-trainer psychic unova main-character champion unova-adventurer support exr-sprint master-fair", "/images/pair/0E_UNOVA/Rosa_Meloetta_Psy.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Mina & Tapu Fini", "mina-trainer fairy alola trial-giver sygna-suit free-spirit support exr-sprint pokefair", "/images/pair/0G_ALOLA/0G_ALOLA_0B-07_ssMina.png", "yellow")}
                            {SyncPairIcon("Chase & Pikachu", "chase-trainer electric kanto main-character pallet-town support exr-sprint pokefair", "/images/pair/0A_KANTO/Chase_Pikachu.png", "green")}
                            {SyncPairIcon("Sygna Suit Cynthia (Aura) & Lucario", "cynthia-trainer fighting sinnoh champion sygna-suit passionate-spirit support exr-sprint master-fair", "/images/pair/0D_SINNOH/0D_SINNOH_0C-05_SSACynthia.png", "green")}
                            {SyncPairIcon("Elaine & Eevee", "elaine-trainer normal kanto main-character pallet-town support exr-tech pokefair", "/images/pair/0A_KANTO/Elaine.png", "green")}
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            {SyncPairIcon("Sygna Suit Morty & Ho-Oh★", "morty-trainer fire johto gym-leader sygna-suit supernatural support exr-field pokefair shiny", "/images/pair/0B_JOHTO/0B_JOHTO_0B-04_SSMorty.png", "red")}
                            {SyncPairIcon("Penny & Sylveon", "penny-trainer fairy paldea glasses gadgeteer support exr-strike pokefair", "/images/pair/0I_PALDEA/Penny_Sylveon.png", "red")}
                            {SyncPairIcon("Atticus & Revavroom", "atticus-trainer poison paldea artistic free-spirit support exr-sprint pokefair", "/images/pair/0I_PALDEA/Atticus_0966.png", "red")}
                            {SyncPairIcon("Eri & Annihilape", "eri-trainer fighting paldea body-builder passionate-spirit support exr-tech pokefair", "/images/pair/0I_PALDEA/Eri_0979.png", "orange")}
                            {SyncPairIcon("Sygna Suit Acerola & Tapu Bulu", "acerola-trainer grass alola trial-giver sygna-suit free-spirit support exr-tech pokefair", "/images/pair/0G_ALOLA/0G_ALOLA_0C-03_ssAcerola.png", "orange")}
                            {SyncPairIcon("Sygna Suit Kris & Suicune", "kris-trainer water johto main-character sygna-suit knowledgeable support exr-sprint master-fair", "/images/pair/0B_JOHTO/0B_JOHTO_0A-03_ssKris.png", "orange")}
                            {SyncPairIcon("Bugsy (Holiday 2024) & Kricketune", "bugsy-trainer bug johto gym-leader seasonal-outfit artistic support exr-field", "/images/pair/0B_JOHTO/Bugsy_0402_5.png", "yellow")}
                            {SyncPairIcon("Grusha & Cetitan", "grusha-trainer ice paldea gym-leader scarf nature-lover support exr-tech pokefair", "/images/pair/0I_PALDEA/Grusha_Cetitan.png", "yellow")}
                            {SyncPairIcon("Iono & Bellibolt", "iono-trainer electric paldea gym-leader artistic free-spirit support exr-strike pokefair has-lodge", "/images/pair/0I_PALDEA/Iono_0939.png", "green")}
                            {SyncPairIcon("Milo & Eldegoss", "milo-trainer grass galar gym-leader nature-lover body-builder support exr-sprint pokefair", "/images/pair/0H_GALAR/Milo_0830_5.png", "green")}
                            {SyncPairIcon("Rika & Clodsire", "rika-trainer ground paldea elite-four knowledgeable grown-woman support exr-field pokefair has-lodge", "/images/pair/0I_PALDEA/Rika_Clodsire.png", "green")}
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            {SyncPairIcon("Argenta & Skarmory", "argenta-trainer steel sinnoh battle-facility-foe grown-woman artistic support exr-tech pokefair", "/images/pair/0D_SINNOH/0D_SINNOH_0E-07_Argenta.png", "red")}
                            {SyncPairIcon("Bede (Champion) & Galarian Articuno", "bed-trainer psychic galar champion scarf galar-adventurer support exr-sprint master-fair", "/images/pair/0H_GALAR/0H_GALAR_0A-05_NeoChampBede.png", "red")}
                            {SyncPairIcon("Red & Snorlax", "red-trainer normal kanto main-character pallet-town passionate-spirit support exr-sprint pokefair", "/images/pair/0A_KANTO/0A_KANTO_0A-01_Red.png", "red")}
                            {SyncPairIcon("Kabu & Centiskorch", "kabu-trainer fire galar gym-leader passionate-spirit veteran-trainer support exr-strike pokefair has-lode", "/images/pair/0H_GALAR/Kabu_Centiskorch.png", "orange")}
                            {SyncPairIcon("Sygna Suit Dawn & Cresselia", "dawn-trainer psychic sinnoh main-character sygna-suit support exr-sprint pokefair", "/images/pair/0D_SINNOH/0D_SINNOH_0A-02_SSDawn.png", "orange")}
                            {SyncPairIcon("Acerola (Summer 2024) & Jellicent", "acerola-trainer ghost alola trial-giver seasonal-outfit free-spirit support exr-tech", "/images/pair/0G_ALOLA/Acerola_Jellicent_5.png", "yellow")}
                            {SyncPairIcon("Anabel & Snorlax", "anabel-trainer normal alola grown-woman support exr-field pokefair", "/images/pair/0G_ALOLA/0G_ALOLA_0E-03_Anabel.png", "yellow")}
                            {SyncPairIcon("Bellelba & Swoobat", "sabrina-traner psychic unova special-costume artistic grown-woman support exr-field", "/images/pair/0E_UNOVA/Bellelba_Swoobat.png", "yellow")}
                            {SyncPairIcon("Calem (Champion) & Greninja★", "calem-trainer dark kalos main-character champion scarf support exr-tech master-fair shiny", "/images/pair/0F_KALOS/0F_KALOS_0A-01_ChampCalem.png", "green")}
                            {SyncPairIcon("Raihan (New Year's 2025) & Sandaconda", "raihan-trainer ground galar gym-leader seasonal-outfit scarf support exr-sprint", "/images/pair/0H_GALAR/Raihan_0844.png", "green")}
                            {SyncPairIcon("Elio (Alt.) & Stakataka", "elio-trainer rock alola main-character passionate-spirit alola-adventurer support exr-sprint pokefair", "/images/pair/0G_ALOLA/Elio_Stakataka_5.png", "green")}
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            {SyncPairIcon("Falkner & Noctowl", "falkner-trainer flying johto gym-leader pokeathlete support exr-tech variety", "/images/pair/0B_JOHTO/Falkner_Noctowl.png", "red")}
                            {SyncPairIcon("Arven & Mabosstiff", "arven-trainer dark paldea rival cook knowledgeable support exr-tech pokefair has-lodge", "/images/pair/0I_PALDEA/Arven_Mabosstiff_5.png", "red")}
                            {SyncPairIcon("Sygna Suit Brendan & Latios", "brendan-trainer dragon hoenn main-character sygna-suit space-cadet support exr-sprint pokefair", "/images/pair/0C_HOENN/0C_HOENN_0A-01_SSBrendan.png", "orange")}
                            {SyncPairIcon("Mallow & Shiinotic", "mallow-trainer grass alola trial-giver cook support exr-none variety", "/images/pair/0G_ALOLA/0G_ALOLA_0B-04_vMallow.png", "orange")}
                            {SyncPairIcon("Sygna Suit Blue & Blastoise", "blue-trainer water kanto rival sygna-suit pallet-town support exr-sprint pokefair", "/images/pair/0A_KANTO/0A_KANTO_0A-02_SSBlue.png", "yellow")}
                            {SyncPairIcon("Shauna (Special Costume) & Klefki", "shauna-trainer steel kalos special-costume pigtails support exr-none", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2023_Shauna.png", "yellow")}
                            {SyncPairIcon("Volo & Togepi", "volo-trainer fairy sinnoh knowledgeable researcher field exr-tech pokefair has-lodge", "/images/pair/0D1_HISUI/Volo_Togepi_5.png", "yellow")}
                            {SyncPairIcon("Jasmine (Holiday 2022) & Ampharos", "jasmine-trainer electric johto gym-leader seasonal-outfit pokeathlete support exr-none", "/images/pair/0Y_SEASONALS/0Z_0A_HOLIDAY_2022_Jasmine.png", "yellow")}
                            {SyncPairIcon("Steven (Special Costume) & Stoutland★", "steven-trainer normal hoenn special-costume rock-lover space-cadet tech exr-none shiny", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2023_Steven.png", "green")}
                            {SyncPairIcon("Ingo & Excadrill", "ingo-trainer ground unova battle-facility-foe battle-partner support exr-tech pokefair", "/images/pair/0E_UNOVA/0E_UNOVA_0E-01_Ingo.png", "green")}
                            {SyncPairIcon("Professor Sycamore & Xerneas", "sycamore-trainer fairy kalos knowledgeable researcher old-colleagues support exr-none legendary-adventure has-lodge", "/images/pair/0F_KALOS/0F_KALOS_0F-01_ProfSycamore.png", "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Sonia & Yamper", "sonia-trainer electric galar sunglasses researcher grown-woman support exr-none spotlight ticket", "/images/pair/0H_GALAR/0H_GALAR_0F-01_Sonia.png", "red")}
                            {SyncPairIcon("Victor (Palentine's 2024) & Greedent", "victor-trainer normal galar main-character seasonal-outfit cook support exr-tech", "/images/pair/0H_GALAR/Victor_Greedent.png", "red")}
                            {SyncPairIcon("Leaf & Eevee", "leaf-trainer normal kanto main-character pallet-town support exr-none spotlight ticket has-lodge", "/images/pair/0A_KANTO/0A_KANTO_0A-03_Leaf.png", "orange")}
                            {SyncPairIcon("Aaron & Vespiquen", "aaron-trainer bug sinnoh elite-four nature-lover support exr-none spotlight ticket", "/images/pair/0D_SINNOH/0D_SINNOH_0C-01_Aaron.png", "orange")}
                            {SyncPairIcon("Ball Guy & Amoonguss", "ballguy-trainer poison galar support exr-none variety", "/images/pair/0H_GALAR/0H_GALAR_0F-01_BallGuy.png", "yellow")}
                            {SyncPairIcon("Sawyer & Gimmighoul", "sawyer-trainer ghost sunglasses body-builder pasio support exr-sprint variety", "/images/pair/pasio/Var_Sawyer.png", "yellow")}
                            {SyncPairIcon("Lillie (Special Costume) & Polteageist", "lillie-trainer ghost alola special-costume fancy-lady support exr-none", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2022_Lillie.png", "yellow")}
                            {SyncPairIcon("Phoebe (Fall 2023) & Cofagrigus", "phoebe-trainer ghost hoenn elite-four seasonal-outfit supernatural support exr-tech", "/images/pair/0C_HOENN/Phoebe_Cofagrigus.png", "yellow")}
                            {SyncPairIcon("Burgh (Spring 2021) & Togepi", "burgh-trainer fairy unova seasonal-outfit artistic free-spirit support exr-none", "/images/pair/0Y_SEASONALS/0Z_0F_SPRING_2021_Burgh.png", "green")}
                            {SyncPairIcon("Hop & Zamazenta", "hop-trainer galar rival galar-adventurer researcher support exr-none legendary-adventure", "/images/pair/0H_GALAR/0H_GALAR_0A-03_Hop.png", "green")}
                            {SyncPairIcon("Melony & Lapras", "melony-trainer ice galar gym-leader veteran-trainer grown-woman support exr-none spotlight ticket", "/images/pair/0H_GALAR/0H_GALAR_0B-06b_Melony.png", "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Elio & Primarina", "elio-trainer water alola main-character nature-lover alola-adventurer support exr-none spotlight ticket", "/images/pair/0G_ALOLA/0G_ALOLA_0A-01_Elio.png", "red")}
                            {SyncPairIcon("Mallow (Palentine's 2023) & Appletun", "mallow-trainer dragon alola seasonal-outfit pigtails cook support exr-none", "/images/pair/0Y_SEASONALS/0Z_0E_PAL_2023_Mallow.png", "red")}
                            {SyncPairIcon("Clair (New Year's 2024) & Drampa", "clair-trainer dragon johto gym-leader seasonal-outfit support exr-tech", "/images/pair/0B_JOHTO/Clair_0780.png", "orange")}
                            {SyncPairIcon("Jasmine (Special Costume) & Celesteela", "jasmine-trainer steel johto pokeathlete contest-lover special-costume support exr-none", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2021_Jasmine.png", "orange")}
                            {SyncPairIcon("Proton & Golbat", "proton-trainer flying johto villain support exr-tech variety", "/images/pair/0B_JOHTO/0B_JOHTO_0D-04_Proton.png", "yellow")}
                            {SyncPairIcon("Tierno & Crawdaunt", "tierno-trainer dark kalos rival artistic support exr-tech spotlight ticket", "/images/pair/0F_KALOS/Tierno_Crawdaunt_5.png", "yellow")}
                            {SyncPairIcon("Lyra (Special Costume) & Phanpy", "lyra-trainer ground johto special-costume pigtaile pokeathlete support exr-none", "/images/pair/0Y_SEASONALS/0Z_0H_SPCostume_2023_Lyra.png", "yellow")}
                            {SyncPairIcon("Allister (Fall 2022) & Gourgeist", "allister-trainer ghost galar seasonal-outfit masked cape support exr-none", "/images/pair/0Y_SEASONALS/0Z_0C_FALL_2022_Allister.png", "yellow")}
                            {SyncPairIcon("Bea (Palentine's 2022) & Vanilluxe", "bea-trainer ice galar seasonal-outfit scarf sweet-tooth support exr-none", "/images/pair/0Y_SEASONALS/0Z_0E_PAL_2022_Bea.png", "yellow")}
                            {SyncPairIcon("Lorelei & Cloyster", "lorelei-trainer ice kanto elite-four glasse grown-woman support exr-none variety", "/images/pair/0A_KANTO/0A_KANTO_0C-01b_Lorelei.png", "green")}
                            {SyncPairIcon("Professor Oak & Nidorino", "oak-trainer poison kanto researcher knowledgeable support exr-sprint event", "/images/pair/0A_KANTO/Oak_Nidorino_5.png", "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("Guzma & Ariados", "guzma-trainer bug alola villain sunglasses support exr-tech variety", "/images/pair/0G_ALOLA/Guzma_Ariados.png", "red")}
                            {SyncPairIcon("Morgan & Virizion", "morgan-trainer grass kalos battle-facility-foe battle-partner grown-woman support exr-none battle-point", "/images/pair/0F_KALOS/Morgan_Virizion_5.png", "red")}
                            {SyncPairIcon("Professor Sycamore (Holiday 2023) & Gogoat", "sycamore-trainer grass kalos seasonal-outfit knowledgeable researcher support exr-strike", "/images/pair/0F_KALOS/Sycamore_Gogoat.png", "red")}
                            {SyncPairIcon("Kiawe & Alolan Marowak", "kiawe-trainer fire alola trial-giver body-builder artistic support exr-none spotlight ticket", "/images/pair/0G_ALOLA/0G_ALOLA_0B-03_Kiawe(1).png", "orange")}
                            {SyncPairIcon("Agatha & Arbok", "agatha-trainer poison kanto elite-four veteran-trainer support exr-none variety", "/images/pair/0A_KANTO/0A_KANTO_0C-03b_Agatha.png", "orange")}
                            {SyncPairIcon("Bruno & Onix", "bruno-trainer rock kanto elite-four body-builder sweet-tooth support exr-none variety", "/images/pair/0A_KANTO/0A_KANTO_0C-02b_Bruno.png", "yellow")}
                            {SyncPairIcon("Falkner & Swellow", "falkner-trainer flying johto gym-leader pokeathlete support exr-none spotlight ticket", "/images/pair/0B_JOHTO/0B_JOHTO_0B-01_Falkner.png", "yellow")}
                            {SyncPairIcon("Shauna & Chesnaught", "shauna-trainer grass kalos rival pigtails support exr-none spotlight ticket has-lodge", "/images/pair/0F_KALOS/0F_KALOS_0A-03_Shauna.png", "yellow")}
                            {SyncPairIcon("Caitlin (Fall 2021) & Sableye", "caitlin-trainer dark unova seasonal-outfit undella-town unova-adventurer support exr-none", "/images/pair/0Y_SEASONALS/0Z_0C_FALL_2021_Caitlin.png", "yellow")}
                            {SyncPairIcon("Iono & Wattrel", "iono-trainer electric paldea gym-leader artistic free-spirit support exr-none lodge-pair lodge-gacha", "/images/pair/0I_PALDEA/Iono_Wattrel_4.png", "green")}
                            {SyncPairIcon("Lana & Lanturn", "lana-trainer water alola trial-giver free-spirit nature-lover support exr-none lodge-pair lodge-free green", "/images/pair/0G_ALOLA/Lana_0171.png", "green")}
                            {SyncPairIcon("Lyra & Meganium", "lyra-trainer grass johto main-character pigtails pokeathlete support exr-none spotlight ticket", "/images/pair/0B_JOHTO/0B_JOHTO_0A-02_Lyra.png", "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            {SyncPairIcon("Tina & Flareon", "tina-trainer fire free-spirit passionate-spirit pasio support exr-none pokefair", "/images/pair/pasio/Tina.png", "red")}
                            {SyncPairIcon("Kabu & Torkoal", "kabu-trainer fire galar gym-leader passionate-spirit veteran-trainer support exr-none lodge-pair lodge-gacha", "/images/pair/0H_GALAR/Kabu_Torkoal_4.png", "red")}
                            {SyncPairIcon("Hilda (Summer 2022) & Grapploct★", "hilda-trainer fighting unova seasonal-outfit passionate-spirit unova-adventurer support exr-none shiny", "/images/pair/0Y_SEASONALS/0Z_0B_SUM_2022_Hilda.png", "orange")}
                            {SyncPairIcon("Blue & Exeggutor", "blue-trainer grass kanto champion rival pallet-town support exr-none lodge-pair lodge-free", "/images/pair/0A_KANTO/0A_KANTO_0A-02_TL_Blue.png", "orange")}
                            {SyncPairIcon("Hilbert & Samurott", "hilbert-trainer water unova main-character unova-adventurer support exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0A-01_Hilbert.png", "orange")}
                            {SyncPairIcon("Arven & Nacli", "arven-trainer rock paldea rival cook knowledgeable support exr-none lodge-pair lodge-gacha", "/images/pair/0I_PALDEA/Arven_0932_4.png", "yellow")}
                            {SyncPairIcon("Player & Mesprit", "player-trainer psychic main-character pasio support exr-none battle-point", "/images/pair/pasio/PlayerM_Mesprit.png", "yellow")}
                            {SyncPairIcon("Player & Cobalion", "player-trainer fighting main-character pasio support exr-none battle-point", "/images/pair/pasio/PlayerM_Cobalion.png", "yellow")}
                            {SyncPairIcon("Gladion & Golbat", "gladion-trainer poison alola rival villain alola-adventurer support exr-none lodge-pair lodge-free", "/images/pair/0G_ALOLA/Gladion_Golbat.png", "yellow")}
                            {SyncPairIcon("Sabrina (New Year's 2022) & Chingling", "sabrina-trainer psychic kanto seasonal-outfit supernatural support exr-none", "/images/pair/0Y_SEASONALS/0Z_0D_NY_2022_Sabrina.png", "green")}
                            {SyncPairIcon("Glacia & Glalie", "glacia-trainer ice hoenn elite-four grown-woman support exr-none spotlight ticket", "/images/pair/0C_HOENN/0C_HOENN_0C-03_Glacia.png", "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            {SyncPairIcon("Sygna Suit Steven & Deoxys (Defense Forme)", "steven-trainer psychic hoenn champion sygna-suit space-cadet tech exr-support pokefair", "/images/pair/0Z_OTHER-FORMES/0C_HOENN_0C-05_ssSteven_CDefense_.png", "red")}
                            {SyncPairIcon("Rachel & Gimmighoul", "rachel-trainer ghost pasio sunglasses free-spirit support exr-sprint variety", "/images/pair/pasio/Var_Rachel.png", "red")}
                            {SyncPairIcon("Sygna Suit Elesa & Rotom", "elesa-trainer electric unova sygna-suit unova-gym-besties support exr-none spotlight ticket", "/images/pair/0E_UNOVA/0E_UNOVA_0B-04_SSElesa.png", "orange")}
                            {SyncPairIcon("Morty & Mismagius", "morty-trainer ghost johto gym-leader scarf supernatural support exr-none battle-point", "/images/pair/0B_JOHTO/0B_JOHTO_0B-04-BP_Morty.png", "orange")}
                            {SyncPairIcon("Skyla & Swanna", "skyla-trainer flying unova gym-leader undella-town unova-gym-besties support exr-none story", "/images/pair/0E_UNOVA/0E_UNOVA_0B-06_Skyla.png", "orange")}
                            {SyncPairIcon("Barry & Roserade", "barry-trainer grass sinnoh rival scarf passionate-spirit support exr-none battle-point", "/images/pair/0D_SINNOH/0D_SINNOH_0A-03-BP_Barry.png", "yellow")}
                            {SyncPairIcon("Lana & Araquanid", "lana-trainer water alola trial-giver free-spirit nature-lover support exr-none spotlight ticket has-lodge", "/images/pair/0G_ALOLA/0G_ALOLA_0B-02_Lana.png", "yellow")}
                            {SyncPairIcon("Dawn & Wormadam Plant Cloak", "dawn-trainer sinnoh main-character scarf contest-lover support exr-none lodge-pair lodge-free", "/images/pair/0D_SINNOH/0D_SINNOH_0A-02_TL_Dawn.png", "yellow")}
                            {SyncPairIcon("Clemont & Magneton", "clemont-trainer electric kalos gym-leader glasses gadgeteer support exr-none battle-point", "/images/pair/0F_KALOS/0F_KALOS_0B-05_BP_Clemont.png", "yellow")}
                            {SyncPairIcon("Cheryl & Wailord", "cheryl-trainer water sinnoh grown-woman battle-partner battleground-foe support exr-none battle-point", "/images/pair/0D_SINNOH/Cheryl_Wailord_4.png", "green")}
                            {SyncPairIcon("Wally & Delcatty", "wally-trainer normal hoenn rival battle-facility-foe passionate-spirit support exr-none lodge-pair lodge-free", "/images/pair/0C_HOENN/Wally_Delcatty_4.png", "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            {SyncPairIcon("Dana & Regice", "dana-trainer ice kalos battle-facility-foe battle-partner passionate-spirit support exr-none battle-point", "/images/pair/0F_KALOS/Dana_Regice_5.png", "red")}
                            {SyncPairIcon("Evelyn & Entei", "evelyn-trainer fire kalos battle-facility-foe battle-partner fancy-lady support exr-none battle-point", "/images/pair/0F_KALOS/Evelyn_Entei_5.png", "red")}
                            {SyncPairIcon("Nita & Landorus Incarnate Forme", "nita-trainer ground kalos battle-facility-foe battle-partner free-spirit support exr-none battle-point", "/images/pair/0F_KALOS/Nita_Landorus_5.png", "orange")}
                            {SyncPairIcon("Player & Raikou", "player-trainer electric main-character pasio support exr-none battle-point", "/images/pair/pasio/PlayerM_Raikou.png", "orange")}
                            {SyncPairIcon("Sabrina & Alakazam", "sabrina-trainer psychic kanto gym-leader supernatural support exr-none spotlight ticket", "/images/pair/0A_KANTO/0A_KANTO_0B-06_Sabrina.png", "orange")}
                            {SyncPairIcon("Sawyer & Honchkrow", "sawyer-trainer dark sunglasses body-builder pasio support exr-none pokefair", "/images/pair/pasio/Sawyer_4.png", "yellow")}
                            {SyncPairIcon("Lenora & Watchog", "lenora-trainer normal unova knowledgeable rock-lover support exr-tech spotlight ticket", "/images/pair/0E_UNOVA/Lenora_Watchdog.png", "yellow")}
                            {SyncPairIcon("Trevor & Florges", "trevor-trainer fairy kalos rival knowledgeable support exr-tech spotlight no-ticket", "/images/pair/0F_KALOS/Trevor_Florges_5.png", "yellow")}
                            {SyncPairIcon("Cheryl & Blissey", "cheryl-trainer normal sinnoh grown-woman battle-partner battleground-foe support exr-none genpool", "/images/pair/0D_SINNOH/Cheryl_0242_3.png", "yellow")}
                            {SyncPairIcon("Olivia & Carbink", "olivia-trainer rock alola elite-four rock-lover trial-giver support exr-none battle-point", "/images/pair/0G_ALOLA/0G_ALOLA_0C-02-BP_Olivia.png", "green")}
                            {SyncPairIcon("Player & Alcremie", "player-trainer fairy main-character pasio support exr-none event", "/images/pair/pasio/PlayerM_Alcremie_4.png", "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("Cynthia & Gastrodon", "cynthia-trainer ground sinnoh champion undella-town researcher support exr-none lodge-pair lodge-gacha", "/images/pair/0D_SINNOH/0D_SINNOH_0C-05_TL_Cynthia.png", "red")}
                            {SyncPairIcon("Misty (Swimsuit) & Psyduck", "misty-trainer water kanto gym-leader passionate-spirit support exr-none event", "/images/pair/0A_KANTO/0A_KANTO_0B-02b_SwimsuitMisty.png", "red")}
                            {SyncPairIcon("Dawn (Palentine's 2021) & Alcremie", "dawn-trainer fairy sinnoh seasonal-outfit sweet-tooth cook tech exr-none", "/images/pair/0Y_SEASONALS/0Z_0E_PAL_2021_Dawn.png", "orange")}
                            {SyncPairIcon("Lt. Surge & Raichu", "ltsurge-trainer electric kanto gym-leader sunglasses body-builder support exr-none battle-point", "/images/pair/0A_KANTO/0A_KANTO_0B-03b_LtSurge.png", "orange")}
                            {SyncPairIcon("Elesa & Joltik", "elesa-trainer electric unova gym-leader undella-town artistic support exr-none lodge-pair lodge-free", "/images/pair/0E_UNOVA/0E_UNOVA_0B-04_TL_Elesa.png", "orange")}
                            {SyncPairIcon("Jasmine & Steelix", "jasmine-trainer stel johto gym-leader pokeathlete contest-lover support exr-none spotlight ticket has-lodge", "/images/pair/0B_JOHTO/0B_JOHTO_0B-06_Jasmine.png", "yellow")}
                            {SyncPairIcon("Piers & Obstagoon", "piers-trainer dark galar gym-leader artistic support exr-none spotlight ticket", "/images/pair/0H_GALAR/0H_GALAR_0B-07_Piers.png", "yellow")}
                            {SyncPairIcon("Player & Registeel", "player-trainer steel main-character pasio support exr-none battle-point", "/images/pair/pasio/PlayerM_Registeel.png", "yellow")}
                            {SyncPairIcon("Maylene & Medicham", "maylene-trainer fighting sinnoh gym-leader pokeathlete battleground-foe support exr-none genpool", "/images/pair/0D_SINNOH/0D_SINNOH_0B-03_Maylene.png", "yellow")}
                            {SyncPairIcon("Lillie (New Year's 2021) & Ribombee", "lillie-trainer bug alola seasonal-outfit fancy-lady battle-partner support exr-none", "/images/pair/0Y_SEASONALS/0Z_0D_NY_2021_Lillie.png", "green")}
                            {SyncPairIcon("Giovanni & Nidorino", "giovanni-trainer poison kanto villain support exr-none lodge-pair lodge-free", "/images/pair/0A_KANTO/Giovanni.png", "green")}
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Raihan & Gigalith", "raihan-trainer rock galar gym-leader gadgeteer passionate-spirit support exr-none lodge-pair lodge-gacha", "/images/pair/0H_GALAR/0H_GALAR_0B-08_TL_Raihan.png", "red")}
                            {SyncPairIcon("Giovanni & Persian", "giovanni-trainer normal kanto villain support exr-none event", "/images/pair/0A_KANTO/0A_KANTO_0D-01-EP_Giovanni.png", "red")}
                            {SyncPairIcon("Bugsy & Scyther", "bugsy-trainer bug johto gym-leader knowledgeable researcher support exr-none event", "/images/pair/0B_JOHTO/0B_JOHTO_0B-02-EP_Bugsy.png", "red")}
                            {SyncPairIcon("Morty & Gastly", "morty-trainer ghsot johto gym-leader scarf supernatural support exr-none lodge-pair lodge-free", "/images/pair/0B_JOHTO/0B_JOHTO_0B-04_TL_Morty.png", "orange")}
                            {SyncPairIcon("Phoebe & Dusknoir", "phoebe-trainer hoenn elite-four supernatural free-spirit support exr-none spotlight ticket", "/images/pair/0C_HOENN/0C_HOENN_0C-02_Phoebe.png", "orange")}
                            {SyncPairIcon("Acerola & Banette", "acerola-trainer ghost alola elite-four trial-giver fancy-lady support exr-none lodge-pair lodge-free", "/images/pair/0G_ALOLA/0G_ALOLA_0C-03_TL_Acerola.png", "orange")}
                            {SyncPairIcon("Adaman & Vaporeon", "adaman-trainer water sinnoh nature-lover knowledgeable support exr-none lodge-pair lodge-gacha", "/images/pair/0D1_HISUI/0I_HISUI_0B-01_TL_Adaman.png", "yellow")}
                            {SyncPairIcon("Player & Regirock", "player-trainer rock main-character pasio support exr-none battle-point", "/images/pair/pasio/PlayerM_Regirock.png", "yellow")}
                            {SyncPairIcon("Leaf & Clefable", "leaf-trainer fairy kanto main-character pallet-town support exr-none lodge-pair lodge-free", "/images/pair/0A_KANTO/0A_KANTO_0A-03_TL_Leaf.png", "yellow")}
                            {SyncPairIcon("Lillie & Clefairy", "lillie-trainer fairy alola fancy-lady battle-partner alola-adventurer support exr-none spotlight ticket has-lodge", "/images/pair/0G_ALOLA/0G_ALOLA_0A-04_Lillie.png", "green")}
                            {SyncPairIcon("Jasmine & Magnemite", "jasmine-trainer stel johto gym-leader pokeathlete contest-lover support exr-none lodge-pair lodge-free", "/images/pair/0B_JOHTO/Jasmine_Magnemite.png", "green")}
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            {SyncPairIcon("Janine & Crobat", "janine-trainer poison kanto gym-leader scarf support exr-none battle-point", "/images/pair/0A_KANTO/0A_KANTO_0B-05_BP_Janine.png", "red")}
                            {SyncPairIcon("Roxanne & Probopass", "roxanne-trainer rock hoenn hym-leader pigtails rock-lover support exr-none genpool", "/images/pair/0C_HOENN/0C_HOENN_0B-01_Roxanne.png", "red")}
                            {SyncPairIcon("Rachel & Umbreon", "rachel-trainer dark pasio sunglasses free-spirit support exr-none pokefair", "/images/pair/pasio/Rachel_4.png", "red")}
                            {SyncPairIcon("Rosa (Holiday 2019) & Delibird", "rosa-trainer flying unova cape seasonal-outfit cook support exr-none", "/images/pair/0Y_SEASONALS/0Z_0A_HOLIDAY_2019_Rosa.png", "orange")}
                            {SyncPairIcon("Marley & Arcanine", "marley-trainer fire sinnoh battle-partner battleground-foe support exr-none genpool", "/images/pair/0D_SINNOH/0D_SINNOH_0E-03_Marley.png", "orange")}
                            {SyncPairIcon("Player & Torchic", "player-trainer fire main-character pasio support exr-none story", "/images/pair/pasio/PlayerM_Torchic.png", "orange")}
                            {SyncPairIcon("Rosa & Serperior", "rosa-trainer grass unova main-character pigtails unova-adventurer support exr-none story has-lodge", "/images/pair/0E_UNOVA/0E_UNOVA_0A-06_Rosa.png", "yellow")}
                            {SyncPairIcon("Acerola & Palossand", "acerola-trainer ghost alola elite-four trial-giver fancy-lady tech exr-none story has-lodge", "/images/pair/0G_ALOLA/0G_ALOLA_0C-03_Acerola.png", "yellow")}
                            {SyncPairIcon("Kali & Azumarill", "kali-trainer fairy kalos pigtails support exr-none event", "/images/pair/0F_KALOS/0F_KALOS_0X-02_Kali.png", "green")}
                            {SyncPairIcon("Erika (Holiday 2020) & Comfey", "erika-trainer fairy kanto seasonal-outfit free-spirit fancy-lady support exr-none", "/images/pair/0Y_SEASONALS/0Z_0A_HOLIDAY_2020_Erika.png", "green")}
                            {SyncPairIcon("Cheren & Stoutland", "cheren-trainer normal unova gym-leader rival unova-adventurer support exr-none story has-lodge", "/images/pair/0E_UNOVA/0E_UNOVA_0A-03_Cheren.png", "green")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Drake & Salamence", "drake-trainer dragon hoenn elite-four veteran-trainer support exr-none genpool", "/images/pair/0C_HOENN/0C_HOENN_0C-04_Drake.png", "red")}
                            {SyncPairIcon("Ramos & Victreebel", "ramos-trainer grass kalo gym-leader nature-lover veteran-trainer tech exr-none genpool", "/images/pair/0F_KALOS/0F_KALOS_0B-04_Ramos.png", "red")}
                            {SyncPairIcon("Liza & Lunatone", "liza-trainer psychic hoenn gym-leader supernatural space-cadet support exr-none genpool", "/images/pair/0C_HOENN/0C_HOENN_0B-07-2_Liza.png", "orange")}
                            {SyncPairIcon("Thorton & Bronzong", "thorton-trainer steel sinnoh battle-facility-foe knowledgeable gadgeteer tech exr-none genpool", "/images/pair/0D_SINNOH/0D_SINNOH_0E-01_Thorton.png", "orange")}
                            {SyncPairIcon("Viola & Masquerain", "viola-trainer bug kalos gym-leader artistic tech exr-none story", "/images/pair/0F_KALOS/0F_KALOS_0B-01_Viola.png", "orange")}
                            {SyncPairIcon("Marlon & Carracosta", "marlon-trainer water unova gym-leader nature-lover body-builder support exr-none genpool", "/images/pair/0E_UNOVA/0E_UNOVA_0B-10_Marlon.png", "orange")}
                            {SyncPairIcon("Erika & Tangela", "erika-trainer grass kanto gym-leader nature-lover fancy-lady tech exr-none battle-point", "/images/pair/0A_KANTO/0A_KANTO_0B-04b_Erika.png", "yellow")}
                            {SyncPairIcon("Wulfric & Avalugg", "wulfric-trainer ice kalos gym-leader veteran-trainer passionate-spirit strike exr-none genpool", "/images/pair/0F_KALOS/0F_KALOS_0B-08_Wulfric.png", "yellow")}
                            {SyncPairIcon("Brycen & Cryogonal", "brycen-trainer ice unova gym-leader artistic masked tech exr-none genpool", "/images/pair/0E_UNOVA/0E_UNOVA_0B-07_Brycen.png", "yellow")}
                            {SyncPairIcon("James & Weezing", "james-trainer poison kanto villain team-rocket-forever tech exr-none event", "/images/pair/0A_KANTO/0A_KANTO_0D-03_James.png", "green")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TierList;