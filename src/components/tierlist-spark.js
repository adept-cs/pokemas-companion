import SyncPairIcon from './syncpair-icon';
import Collapsible from './collapse-section';
import $ from 'jquery';
import Select from 'react-select';
import { useRef } from 'react';

const TierListSpark = () => {
    //#region Type Filtering
    let selectedTypes = {};
    const typeSelector = useRef();

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
    const trainerSelector = useRef();
    
    // Each line is a letter of the alphabet. If a new trainer is added, just find where they would fit alphabetically and add them.
    let trainerOptions = [
        {value: 'aaron-trainer', label: 'Aaron'},{value: 'acerola-trainer', label: 'Acerola'},{value: 'adaman-trainer', label: 'Adaman'},{value: 'agatha-trainer', label: 'Agatha'},{value: 'akari-trainer', label: 'Akari'},{value: 'alder-trainer', label: 'Alder'},{value: 'allister-trainer', label: 'Allister'},{value: 'anabel-trainer', label: 'Anabel'},{value: 'archer-trainer', label: 'Archer'},{value: 'archie-trainer', label: 'Archie'},{value: 'argenta-trainer', label: 'Argenta'},{value: 'ariana-trainer', label: 'Ariana'},{value: 'arven-trainer', label: 'Arven'},{value: 'ash-trainer', label: 'Ash'},{value: 'atticus-trainer', label: 'Atticus'},{value: 'avery-trainer', label: 'Avery'},
        {value: 'ball-guy-trainer', label: 'Ball Guy'},{value: 'barry-trainer', label: 'Barry'},{value: 'bea-trainer', label: 'Bea'},{value: 'bede-trainer', label: 'Bede'},{value: 'benga-trainer', label: 'Benga'},{value: 'bertha-trainer', label: 'Bertha'},{value: 'bianca-trainer', label: 'Bianca'},{value: 'blaine-trainer', label: 'Blaine'},{value: 'blossom-trainer', label: 'Blossom'},{value: 'blue-trainer', label: 'Blue'},{value: 'brawly-trainer', label: 'Brawly'},{value: 'brendan-trainer', label: 'Brendan'},{value: 'brock-trainer', label: 'Brock'},{value: 'bruno-trainer', label: 'Bruno'},{value: 'brycen-trainer', label: 'Brycen'},{value: 'bugsy-trainer', label: 'Bugsy'},{value: 'burgh-trainer', label: 'Burgh'},
        {value: 'caitlin-trainer', label: 'Caitlin'},{value: 'calem-trainer', label: 'Calem'},{value: 'candice-trainer', label: 'Candice'},{value: 'carmine-trainer', label: 'Carmine'},{value: 'chase-trainer', label: 'Chase'},{value: 'cheren-trainer', label: 'Cheren'},{value: 'cheryl-trainer', label: 'Cheryl'},{value: 'chuck-trainer', label: 'Chuck'},{value: 'clair-trainer', label: 'Clair'},{value: 'clavell-trainer', label: 'Clavell'},{value: 'clay-trainer', label: 'Clay'},{value: 'clemont-trainer', label: 'Clemont'},{value: 'colress-trainer', label: 'Colress'},{value: 'courtney-trainer', label: 'Courtney'},{value: 'crasher-wake-trainer', label: 'Crasher-Wake'},{value: 'cynthia-trainer', label: 'Cynthia'},{value: 'cyrus-trainer', label: 'Cyrus'},
        {value: 'dahlia-trainer', label: 'Dahlia'},{value: 'dana-trainer', label: 'Dana'},{value: 'darach-trainer', label: 'Darach'},{value: 'dawn-trainer', label: 'Dawn'},{value: 'dexio-trainer', label: 'Dexio'},{value: 'diantha-trainer', label: 'Diantha'},{value: 'drake-trainer', label: 'Drake'},{value: 'drasna-trainer', label: 'Drasna'},
        {value: 'elaine-trainer', label: 'Elaine'},{value: 'elesa-trainer', label: 'Elesa'},{value: 'elio-trainer', label: 'Elio'},{value: 'emma-trainer', label: 'Emma'},{value: 'emmet-trainer', label: 'Emmet'},{value: 'eri-trainer', label: 'Eri'},{value: 'erika-trainer', label: 'Erika'},{value: 'ethan-trainer', label: 'Ethan'},{value: 'eusine-trainer', label: 'Eusine'},{value: 'eve-trainer', label: 'Eve'},{value: 'evelyn-trainer', label: 'Evelyn'},
        {value: 'falkner-trainer', label: 'Falkner'},{value: 'fantina-trainer', label: 'Fantina'},{value: 'flannery-trainer', label: 'Flannery'},{value: 'flint-trainer', label: 'Flint'},{value: 'florian-trainer', label: 'Florian'},
        {value: 'gardenia-trainer', label: 'Gardenia'},{value: 'geeta-trainer', label: 'Geeta'},{value: 'ghetsis-trainer', label: 'Ghetsis'},{value: 'giacomo-trainer', label: 'Giacomo'},{value: 'giovanni-trainer', label: 'Giovanni'},{value: 'glacia-trainer', label: 'Glacia'},{value: 'gladion-trainer', label: 'Gladion'},{value: 'gloria-trainer', label: 'Gloria'},{value: 'gordie-trainer', label: 'Gordie'},{value: 'grant-trainer', label: 'Grant'},{value: 'greta-trainer', label: 'Greta'},{value: 'grimsley-trainer', label: 'Grimsley'},{value: 'grusha-trainer', label: 'Grusha'},{value: 'guzma-trainer', label: 'Guzma'},
        {value: 'hala-trainer', label: 'Hala'},{value: 'hapu-trainer', label: 'Hapu'},{value: 'hau-trainer', label: 'Hau'},{value: 'helena-trainer', label: 'Helena'},{value: 'hilbert-trainer', label: 'Hilbert'},{value: 'hilda-trainer', label: 'Hilda'},{value: 'hop-trainer', label: 'Hop'},{value: 'hugh-trainer', label: 'Hugh'},
        {value: 'ilima-trainer', label: 'Ilima'},{value: 'ingo-trainer', label: 'Ingo'},{value: 'iono-trainer', label: 'Iono'},{value: 'irida-trainer', label: 'Irida'},{value: 'iris-trainer', label: 'Iris'},
        {value: 'jacq-trainer', label: 'Jacq'},{value: 'james-trainer', label: 'James'},{value: 'janine-trainer', label: 'Janine'},{value: 'jasmine-trainer', label: 'Jasmine'},{value: 'jessie-trainer', label: 'Jessie'},{value: 'juliana-trainer', label: 'Juliana'},
        {value: 'kabu-trainer', label: 'Kabu'},{value: 'kahili-trainer', label: 'Kahili'},{value: 'kali-trainer', label: 'Kali'},{value: 'karen-trainer', label: 'Karen'},{value: 'katherine-trainer', label: 'Katherine'},{value: 'kiawe-trainer', label: 'Kiawe'},{value: 'kieran-trainer', label: 'Kieran'},{value: 'klara-trainer', label: 'Klara'},{value: 'koga-trainer', label: 'Koga'},{value: 'korrina-trainer', label: 'Korrina'},{value: 'kris-trainer', label: 'Kris'},{value: 'kukui-trainer', label: 'Professor Kukui'},
        {value: 'lacey-trainer', label: 'Lacey'},{value: 'lana-trainer', label: 'Lana'},{value: 'lance-trainer', label: 'Lance'},{value: 'larry-trainer', label: 'Larry'},{value: 'leaf-trainer', label: 'Leaf'},{value: 'lear-trainer', label: 'Lear'},{value: 'lenora-trainer', label: 'Lenora'},{value: 'leon-trainer', label: 'Leon'},{value: 'lillie-trainer', label: 'Lillie'},{value: 'lisia-trainer', label: 'Lisia'},{value: 'liza-trainer', label: 'Liza'},{value: 'looker-trainer', label: 'Looker'},{value: 'lorelei-trainer', label: 'Lorelei'},{value: 'ltsurge-trainer', label: 'Lt. Surge'},{value: 'lucas-trainer', label: 'Lucas'},{value: 'lucian-trainer', label: 'Lucian'},{value: 'lucy-trainer', label: 'Lucy'},{value: 'lusamine-trainer', label: 'Lusamine'},{value: 'lyra-trainer', label: 'Lyra'},{value: 'lysandre-trainer', label: 'Lysandre'},
        {value: 'mallow-trainer', label: 'Mallow'},{value: 'malva-trainer', label: 'Malva'},{value: 'marley-trainer', label: 'Marley'},{value: 'marlon-trainer', label: 'Marlon'},{value: 'marnie-trainer', label: 'Marnie'},{value: 'marshal-trainer', label: 'Marshal'},{value: 'maxie-trainer', label: 'Maxie'},{value: 'may-trainer', label: 'May'},{value: 'maylene-trainer', label: 'Maylene'},{value: 'mela-trainer', label: 'Mela'},{value: 'melony-trainer', label: 'Melony'},{value: 'milo-trainer', label: 'Milo'},{value: 'mina-trainer', label: 'Mina'},{value: 'misty-trainer', label: 'Misty'},{value: 'molayne-trainer', label: 'Molayne'},{value: 'morgan-trainer', label: 'Morgan'},{value: 'morty-trainer', label: 'Morty'},
        {value: 'n-trainer', label: 'N'},{value: 'nanu-trainer', label: 'Nanu'},{value: 'naomi-trainer', label: 'Naomi'},{value: 'nate-trainer', label: 'Nate'},{value: 'nemona-trainer', label: 'Nemona'},{value: 'nessa-trainer', label: 'Nessa'},{value: 'nita-trainer', label: 'Nita'},{value: 'noland-trainer', label: 'Noland'},{value: 'norman-trainer', label: 'Norman'},
        {value: 'oak-trainer', label: 'Professor Oak'},{value: 'oleana-trainer', label: 'Oleana'},{value: 'olivia-trainer', label: 'Olivia'},{value: 'olympia-trainer', label: 'Olympia'},{value: 'ortega-trainer', label: 'Ortega'},
        {value: 'palmer-trainer', label: 'Palmer'},{value: 'paulo-trainer', label: 'Paulo'},{value: 'penny-trainer', label: 'Penny'},{value: 'petey-trainer', label: 'Petey'},{value: 'petrel-trainer', label: 'Petrel'},{value: 'phoebe-trainer', label: 'Phoebe'},{value: 'piers-trainer', label: 'Piers'},{value: 'player-trainer', label: 'Player'},{value: 'plumeria-trainer', label: 'Plumeria'},{value: 'poppy-trainer', label: 'Poppy'},{value: 'proton-trainer', label: 'Proton'},{value: 'pryce-trainer', label: 'Pryce'},
        
        {value: 'rachel-trainer', label: 'Rachel'},{value: 'raihan-trainer', label: 'Raihan'},{value: 'ramos-trainer', label: 'Ramos'},{value: 'red-trainer', label: 'Red'},{value: 'rei-trainer', label: 'Rei'},{value: 'rika-trainer', label: 'Rika'},{value: 'riley-trainer', label: 'Riley'},{value: 'roark-trainer', label: 'Roark'},{value: 'rosa-trainer', label: 'Rosa'},{value: 'rose-trainer', label: 'Rose'},{value: 'roxanne-trainer', label: 'Roxanne'},{value: 'roxie-trainer', label: 'Roxie'},{value: 'ryuki-trainer', label: 'Ryuki'},
        {value: 'sabrina-trainer', label: 'Sabrina'},{value: 'samsonoak-trainer', label: 'Samson Oak'},{value: 'sawyer-trainer', label: 'Sawyer'},{value: 'selene-trainer', label: 'Selene'},{value: 'serena-trainer', label: 'Serena'},{value: 'shauna-trainer', label: 'Shauna'},{value: 'shauntal-trainer', label: 'Shauntal'},{value: 'sidney-trainer', label: 'Sidney'},{value: 'siebold-trainer', label: 'Siebold'},{value: 'silver-trainer', label: 'Silver'},{value: 'sina-trainer', label: 'Sina'},{value: 'skyla-trainer', label: 'Skyla'},{value: 'sonia-trainer', label: 'Sonia'},{value: 'sophocles-trainer', label: 'Sophocles'},{value: 'steven-trainer', label: 'Steven'},{value: 'sycamore-trainer', label: 'Professor Sycamore'},
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
    const regionSelector = useRef();

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
    const themeSelector = useRef();
    
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
    
    //#region Changelog Filtering
    let selectedChangelogFilters = {};

    function toggleChangelog(key) {
        if (key in selectedChangelogFilters) {
            delete selectedChangelogFilters[key];
        }
        else {
            selectedChangelogFilters[key] = 1;
        }
    }

    //#endregion
    
    //#region Role/EXR Filtering
    let selectedRoles = {};
    const roleSelector = useRef();
    let selectedEXRs = {};
    const exrSelector = useRef();

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

    //#region Damage Type Filtering
    let selectedDamageTypes = {};

    function toggleDamageType(type) {
        if (type in selectedDamageTypes) {
            delete selectedDamageTypes[type];
        }
        else {
            selectedDamageTypes[type] = 1;
        }
    }

    //#endregion

    function filterSearch() {
        $('.not-found').removeClass('not-found');

        let foundAnyPairs = false;
        const iterableLists = [selectedTypes, selectedTrainers, selectedRegions, selectedThemes, selectedAcquisitionMethods, selectedChangelogFilters, selectedRoles, selectedEXRs, selectedDamageTypes];
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
        typeSelector.current.clearValue();
        themeSelector.current.clearValue();
        regionSelector.current.clearValue();
        trainerSelector.current.clearValue();
        roleSelector.current.clearValue();
        exrSelector.current.clearValue();
        $('input').prop('checked', false);

        selectedAcquisitionMethods = {};
        selectedChangelogFilters = {};
        selectedDamageTypes = {};

        $('.not-found').removeClass('not-found');
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
                <p>
                    This page is maintained by me in my free time, and as such it could be out of sync with any updates that just happened as of when you read this. I try to stay on top of these updates, but in case I'm behind the most recent batch of updates can be found in the <a href="https://discord.com/channels/583120259708616715/1008010844547842079">Tier List</a> channel in the r/PokemonMasters Discord server.
                </p>
                <Collapsible header="What criteria does this tierlist use?">
                    <p>
                        This tierlist makes several assumptions to standardize the ranking experience:
                        <ul>
                            <li>
                                This tierlist is context-agnostic. If you're looking for information with a specific mode or modes in mind, the resources maintained specific to that gamemode will be more insightful than this resource for holistic evaluation.
                                Examples include the designated evaluations for gamemodes like Legendary Gauntlet, Damage Challenge, and the Ultimate Battle sheet. All of these resources can be found in their respective channels in the r/PokemonMasters Discord server.
                                <ul>
                                    <li>This philosophy makes this tierlist one of the only resources which tries to account for all different forms of content in the game, while the introduction of additional gamemodes has caused a divide in specialization which makes it impossible to maintain a strong sense of an "as a whole" evaluation for each sync pair.</li>
                                    <li>The tierlist maintainers use Ultimate Battles, Extreme Battle Events, Legendary Gauntlet, and Champion Stadium as "permanent" game modes, while High Score Event, Damage Challenge, and Battle Rally are "fluctuating" game modes with a lesser overall impact on a sync pair's staying value.</li>
                                </ul>
                            </li>
                            <li>
                                All sync pairs are judged by a uniform <b>maximum investment capacity</b>. This accounts for sync pairs at 5/5 with their EX and EX Role unlocked, as well as an identical investment on each of their optimal teammates. For Poké Fairs, superawakening is <i>not</i> considered in this "maximum capacity" discussion due to the far more limited access of Superawakening Candies. When the list including superawakening investments is released, that will be maintained on a separate page on this site.
                            </li>
                            <li>
                                Sync pairs are assigned to one of the three subclasses - Damage Dealer, Hybrid, or Utility - based on role primacy, that is the role it adopts most often in its team compositions.
                                Role capacity, an adjacent concept referring to the ultimate potential of a sync pair regardless of how obscure some facets of that may be, is more easily inferred by looking at a kit.
                                <ul>
                                    <li>
                                        <b>Damage Dealer</b> - A sync pair who primarily adds offensive pressure to the team they are being used on.
                                    </li>
                                    <li>
                                        <b>Utility</b> - A sync pair primarily known for supportive and utility capacities such as buffs and defensive pressure, etc. While they may have capacity for offensive pressure, their primarily functional or expected role will take precedent.
                                    </li>
                                    <li>
                                        <b>Hybrid</b> - A sync pair whose traits encompasses a consistent, functional mix of both offensive and utility measures as opposed to a more singular focus. Their role primacy often defined a compression of these mixtures (regardless of inclination). Units within this tier tend to be the most diverse by design, but often come under a mold of a facilitative role with complementary offensive pressure.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Tiers within these individual categories are representative of a unit-relative ranking and therefore are <i>not</i> designed to be comparable to each other. Because Hybrid has the most competition due to the sheer depth of that pool, it has higher competition to be in the top tiers. Each role primacy list is designed to have balance within its own tiers to avoid overcrowding in one particular tier.
                            </li>
                            <li>
                                Sync pairs are evaluated on the following criteria, with brief definitions of each. <br />
                                <b>TLDR:</b> The best units do something well, and if they do something with minimal cost or requirements, even better. Should these units fulfill the above requirements, they can often be expected to translate these traits to be applicable across the different content modes in the game, making them more valuable. The best units can also be divided into units who thrive through their ability to do a particular thing very well, or by their ability to cover lots of things at an ideal proficiency, with the latter taking precedent in a head-to-head.
                                <ul>
                                    <li>
                                        Primary evaluaton criteria:
                                        <ul>
                                            <li>
                                                <b>Strength/Consistency/Power/Novelty</b>: A unit's quality in performing a particular task or multiple given tasks, which forms the fundamental basis of tiering. The highest-ranking units tend to perform in particular ways in such a manner (provided the role is significant) that they are considered the best at performing particular offensive, utility or miscellaneous conditions that are sensitive to multiple forms of content.
                                            </li>
                                            <li>
                                                <b>Cost/Sufficiency</b>: A unit's ability to cover its own fundamentals or address their required conditions for optimal performance or strength. A unit who either adequately covers their conditions or has a broader access to those conditions will be superior to those without, provided that the expected strength yield is met. This is all sensitive to other factors and there is no strictly superior choice between a unit with low cost and low yield and one with high cost and high yield.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Secondary evaluation criteria:
                                        <ul>
                                            <li>
                                                <b>Content Coverage</b>: A unit's ability to excel in multiple forms of content and be sensitive to their demands, following the aforementioned precedents of the strength-based content tiering. Units who boast a more uniform consistency across content opposed to more specialized content performances will be considered better, while units with different content sufficiencies will often be weighted with other mode comparisons, before expectations of the primary mode.
                                            </li>
                                            <li>
                                                <b>Compression/Trait Diversity/Check Capacity</b>: A unit's ability to provide multiple traits that pass the aforementioned strength check that make them more valued in their ability to handle different forms of content roadblocks, or be flexible enough to perform different roles either concurrently or in isolation.
                                            </li>
                                            <li>
                                                <b>Centralization/Specialization</b>: A subcategory of strength that describes a unit's perceived dominance or significance from a compositional standpoint, typically when involving archetypes such as WTZ facilitators, abusers, or other similar niches. This is mainly a cover to two different times of unit performance, whereby a unit can cover a role of significance despite being a worse overall unit (such as Benga & Volcarona) over a unit who is more uniform and appreciable standalone but with lesser justifications.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        If you want to learn more, please take a look at the (slightly outdated) <a href="https://docs.google.com/document/d/1TW6J-BJOg6IxDJYGy7g8vVhT0wo--g9ssN9RrHyPiyo/edit?tab=t.0" target="_blank">criteria doc</a> provided by the resource managers. A massive thank you to Rion who helped me summarize these criteria to list here.
                    </p>
                </Collapsible>
                <div className="not-ranked">
                    <h3>The following sync pairs are not ranked on the tierlist at the moment, since they were added in the most recent update:</h3>
                    <div className="tierlist-row not-included-row">
                        {SyncPairIcon("Red_A", "black", "filter-excluded")}
                        {SyncPairIcon("Flint_BP", "black", "filter-excluded")}
                        {SyncPairIcon("Brycen_BP", "black", "filter-excluded")}
                        {SyncPairIcon("Phoebe_BP", "black", "filter-excluded")}
                        {SyncPairIcon("Bea_BP", "black", "filter-excluded")}
                        {SyncPairIcon("Thorton_BP", "black", "filter-excluded")}
                        {SyncPairIcon("PlayerM_Buzzwole", "black", "filter-excluded")}
                        {SyncPairIcon("Juliana_Ev", "black", "filter-excluded")}
                        {SyncPairIcon("Florian_Ev", "black", "filter-excluded")}
                        {SyncPairIcon("Nemona_Ev", "black", "filter-excluded")}
                        {SyncPairIcon("Irida_A", "black", "filter-excluded")}
                        {SyncPairIcon("Barry_Mix", "black", "filter-excluded")}
                        {SyncPairIcon("Gloria_A", "black", "filter-excluded")}
                        {SyncPairIcon("Carmine_TL", "black", "filter-excluded")}
                        {SyncPairIcon("Hilda_Var2", "black", "filter-excluded")}
                        {SyncPairIcon("Hilbert_Var2", "black", "filter-excluded")}
                        {SyncPairIcon("N_Var", "black", "filter-excluded")}
                        {SyncPairIcon("Volo_Alt", "black", "filter-excluded")}
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
                            <Select placeholder="You may select types to filter by." closeMenuOnSelect={false} isMulti options={typeOptions} onChange={changeSelectedTypes} ref={typeSelector}
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
                            <Select placeholder="You may select Trainers to filter by." closeMenuOnSelect={false} isMulti options={trainerOptions} onChange={changeSelectedTrainers} ref={trainerSelector}
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
                            <Select placeholder="Select regions" closeMenuOnSelect={false} isMulti options={regionOptions} onChange={changeSelectedRegions} ref={regionSelector} />
                        </div>
                        <div className="theme-filter">
                            <h4 className="section-header">
                                <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/skillsphere.png`} alt="Skill Sphere" />
                                Other Theme Skills
                                <img className="header-img" src={`${process.env.PUBLIC_URL}/images/misc/skillsphere.png`} alt="Skill Sphere" />
                            </h4>
                            <Select placeholder="Select other theme skills" closeMenuOnSelect={false} isMulti options={themeOptions} onChange={changeSelectedThemes} ref={themeSelector} />
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
                                    <Select placeholder="Select base roles" closeMenuOnSelect={false} isMulti isSearchable={false} options={roleOptions} onChange={changeRoles} ref={roleSelector}
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
                                    <Select placeholder="Select EX roles" closeMenuOnSelect={false} isMulti isSearchable={false} options={exrOptions} onChange={changeEXRs} ref={exrSelector}
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
                                    <input type="checkbox" id="exmf-acquisition" onChange={() => toggleAcquisitions("ex-master-fair")}/>
                                    <label htmlFor="exmf-acquisition">EX Master Fair</label>
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
                        <br />
                        <div className="tower-section">
                            <div className="filter-option">
                                <input type="checkbox" id="physical-attackers" onChange={() => toggleDamageType("physical")}/>
                                <label htmlFor="physical-attackers">Sync pairs that can deal physical damage</label>
                            </div>
                            <div className="filter-option">
                                <input type="checkbox" id="special-attackers" onChange={() => toggleDamageType("special")}/>
                                <label htmlFor="special-attackers">Sync pairs that can deal special damage</label>
                            </div>
                        </div>
                        <br />
                        <div className="other-section">
                            <div className="filter-option">
                                <input type="checkbox" id="new-ex-changes" onChange={() => toggleChangelog("new-pair")}/>
                                <label htmlFor="new-ex-changes">New sync pairs since the last update:</label>
                            </div>
                            <div className="filter-option">
                                <input type="checkbox" id="grid-changes" onChange={() => toggleChangelog("buffed-pair")}/>
                                <label htmlFor="grid-changes">Sync pairs receiving a buff since the last update:</label>
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
                            <div className="tier-content">
                                {SyncPairIcon("May_NC", "red")}
                                {SyncPairIcon("Elio_NC", "red")}
                                {SyncPairIcon("Selene_NC", "red")}
                                {SyncPairIcon("Florian", "orange")}
                                {SyncPairIcon("Alder_Arc", "orange")}
                                {SyncPairIcon("Leon_Arc", "orange")}
                                {SyncPairIcon("Cheren_NC", "yellow")}
                                {SyncPairIcon("Red_NC", "green")}
                                {SyncPairIcon("Erika_Pal", "green")}
                            </div>
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Lance_Arc", "red")}
                                {SyncPairIcon("Marnie_NC", "orange")}
                                {SyncPairIcon("Ash", "orange")}
                                {SyncPairIcon("Hilda_SS", "orange")}
                                {SyncPairIcon("Mela", "orange")}
                                {SyncPairIcon("Gladion_SS", "yellow")}
                                {SyncPairIcon("Bede_SS", "yellow")}
                                {SyncPairIcon("Juliana", "yellow")}
                                {SyncPairIcon("Giacomo", "yellow")}
                                {SyncPairIcon("Lysandre_SS", "green")}
                                {SyncPairIcon("Klara", "green")}
                                {SyncPairIcon("Hop_Var2", "green")}
                            </div>
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            <div className="tier-content">
                                {SyncPairIcon("Steven_SS_Att", "red")}
                                {SyncPairIcon("Lear", "red")}
                                {SyncPairIcon("Gladion_Aca", "red", "new-pair")}
                                {SyncPairIcon("Irida_SC", "orange")}
                                {SyncPairIcon("Selene_Alt", "orange")}
                                {SyncPairIcon("Skyla_S", "orange")}
                                {SyncPairIcon("Serena_SS", "orange")}
                                {SyncPairIcon("Gloria_Alt", "yellow")}
                                {SyncPairIcon("Red_SS", "yellow")}
                                {SyncPairIcon("Dexio", "yellow")}
                                {SyncPairIcon("Piers_SS", "green")}
                                {SyncPairIcon("Poppy", "green")}
                                {SyncPairIcon("Rose", "green")}
                            </div>
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Jacq", "red")}
                                {SyncPairIcon("Palmer", "red")}
                                {SyncPairIcon("Adaman_SC", "orange")}
                                {SyncPairIcon("Cynthia", "orange")}
                                {SyncPairIcon("Barry_SC", "orange")}
                                {SyncPairIcon("Hilbert_SS", "orange")}
                                {SyncPairIcon("Steven_A", "orange")}
                                {SyncPairIcon("Liza_S", "orange")}
                                {SyncPairIcon("Emma", "yellow")}
                                {SyncPairIcon("Sina", "yellow")}
                                {SyncPairIcon("Eusine", "yellow")}
                                {SyncPairIcon("Lucas", "green")}
                                {SyncPairIcon("Rei_Aca", "green")}
                            </div>
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Lusamine_SS", "red")}
                                {SyncPairIcon("Alder", "red")}
                                {SyncPairIcon("Lance", "red")}
                                {SyncPairIcon("Gladion", "orange")}
                                {SyncPairIcon("Ethan_SS", "orange")}
                                {SyncPairIcon("Archie", "orange")}
                                {SyncPairIcon("Candice_Pal", "orange")}
                                {SyncPairIcon("Giovanni_Var", "yellow")}
                                {SyncPairIcon("Maxie", "yellow")}
                                {SyncPairIcon("Cynthia_SS", "yellow")}
                                {SyncPairIcon("Blue_Cl", "yellow")}
                                {SyncPairIcon("Olympia", "green")}
                                {SyncPairIcon("Diantha_SC", "green")}
                            </div>
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            <div className="tier-content">
                                {SyncPairIcon("Lillie_A", "red")}
                                {SyncPairIcon("Leon", "red")}
                                {SyncPairIcon("Korrina_SS", "orange")}
                                {SyncPairIcon("Emmet", "orange")}
                                {SyncPairIcon("Gloria", "orange")}
                                {SyncPairIcon("Giovanni_SS", "yellow")}
                                {SyncPairIcon("Iono_F", "yellow")}
                                {SyncPairIcon("Lisia_NY", "yellow")}
                                {SyncPairIcon("Diantha", "yellow")}
                                {SyncPairIcon("N", "green")}
                                {SyncPairIcon("Victor", "green")}
                                {SyncPairIcon("Raihan", "green")}
                            </div>
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Hugh", "red")}
                                {SyncPairIcon("Erika_SS", "red")}
                                {SyncPairIcon("Silver", "red")}
                                {SyncPairIcon("Leon_SS", "orange")}
                                {SyncPairIcon("N_S", "orange")}
                                {SyncPairIcon("Hilda", "orange")}
                                {SyncPairIcon("Grimsley_SS", "yellow")}
                                {SyncPairIcon("Kris", "yellow")}
                                {SyncPairIcon("Elesa", "yellow")}
                                {SyncPairIcon("Blue", "green")}
                                {SyncPairIcon("Riley", "green")}
                                {SyncPairIcon("Emmet_SC", "green")}
                            </div>
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Hilda_SC", "red")}
                                {SyncPairIcon("Iris_F", "red")}
                                {SyncPairIcon("Brendan", "orange")}
                                {SyncPairIcon("Sonia_SC", "orange")}
                                {SyncPairIcon("May", "orange")}
                                {SyncPairIcon("Leon_H", "yellow")}
                                {SyncPairIcon("Volkner_NY", "yellow")}
                                {SyncPairIcon("PlayerM_Solgaleo", "yellow")}
                                {SyncPairIcon("Chuck", "yellow")}
                                {SyncPairIcon("Bea", "yellow")}
                                {SyncPairIcon("Ryuki", "green")}
                                {SyncPairIcon("Cyrus", "green")}
                            </div>
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            <div className="tier-content">
                                {SyncPairIcon("Caitlin", "red")}
                                {SyncPairIcon("Hala", "red")}
                                {SyncPairIcon("Giovanni", "red")}
                                {SyncPairIcon("Allister", "orange")}
                                {SyncPairIcon("Wally", "orange")}
                                {SyncPairIcon("Clavell_Ev", "yellow")}
                                {SyncPairIcon("Lear_TL", "yellow")}
                                {SyncPairIcon("Nessa", "yellow")}
                                {SyncPairIcon("Sidney", "green")}
                                {SyncPairIcon("Guzma", "green")}
                                {SyncPairIcon("Mallow", "green")}
                                {SyncPairIcon("Skyla_TL", "green")}
                            </div>
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Burgh", "red")}
                                {SyncPairIcon("Morty", "red")}
                                {SyncPairIcon("Fantina", "red")}
                                {SyncPairIcon("Selene", "orange", "buffed-pair")}
                                {SyncPairIcon("Lusamine_BP", "orange")}
                                {SyncPairIcon("Hilbert_F", "orange")}
                                {SyncPairIcon("Guzma_SC", "orange")}
                                {SyncPairIcon("Zinnia", "yellow")}
                                {SyncPairIcon("Olivia", "yellow")}
                                {SyncPairIcon("Valerie_BP", "green")}
                                {SyncPairIcon("Lusamine", "green")}
                                {SyncPairIcon("Iono_Ev", "green")}
                            </div>
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Roark", "red")}
                                {SyncPairIcon("Diantha_TL", "red")}
                                {SyncPairIcon("Shauntal", "red")}
                                {SyncPairIcon("Drasna", "orange")}
                                {SyncPairIcon("Barry", "orange")}
                                {SyncPairIcon("Noland", "orange")}
                                {SyncPairIcon("Lance_NY", "yellow")}
                                {SyncPairIcon("Blue_Ev", "yellow")}
                                {SyncPairIcon("Ethan", "yellow")}
                                {SyncPairIcon("Zinnia_BP", "yellow")}
                                {SyncPairIcon("Volo_TL", "green")}
                                {SyncPairIcon("Steven_S", "green")}
                            </div>
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            <div className="tier-content">
                                {SyncPairIcon("Candice_BP", "red")}
                                {SyncPairIcon("Koga", "red")}
                                {SyncPairIcon("Elesa_Pal", "orange")}
                                {SyncPairIcon("Nate", "orange")}
                                {SyncPairIcon("Kahili", "orange")}
                                {SyncPairIcon("Hau_DC", "orange")}
                                {SyncPairIcon("Sophocles_BP", "orange")}
                                {SyncPairIcon("Gloria_S", "yellow")}
                                {SyncPairIcon("Siebold", "yellow")}
                                {SyncPairIcon("Bugsy", "yellow")}
                                {SyncPairIcon("Roxie", "green")}
                                {SyncPairIcon("Looker", "green")}
                            </div>
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Gloria_TL", "red")}
                                {SyncPairIcon("Bruno", "red")}
                                {SyncPairIcon("Lyra_S", "red")}
                                {SyncPairIcon("Molayne", "orange", "buffed-pair")}
                                {SyncPairIcon("Hau", "orange")}
                                {SyncPairIcon("Calem_TL", "orange")}
                                {SyncPairIcon("Rika_TL", "yellow")}
                                {SyncPairIcon("Siebold_H", "yellow")}
                                {SyncPairIcon("Helena", "yellow")}
                                {SyncPairIcon("Tate", "green")}
                                {SyncPairIcon("Mina", "green")}
                                {SyncPairIcon("Marnie_TL", "green")}
                            </div>
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Valerie", "red")}
                                {SyncPairIcon("Sycamore_TL", "red")}
                                {SyncPairIcon("Korrina", "orange")}
                                {SyncPairIcon("Clair", "orange")}
                                {SyncPairIcon("Karen_BP", "orange")}
                                {SyncPairIcon("May_TL", "yellow")}
                                {SyncPairIcon("Gardenia", "yellow")}
                            </div>
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            <div className="tier-content">
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
                </div>
                <div className="hybrid">
                    <div className="header-row">
                        <h3>Hybrid</h3>
                    </div>
                    <div className="hybrid-grid">
                        <div className="uber-row tierlist-row">
                            <div className="tier-title">U</div>
                            <div className="tier-content">
                                {SyncPairIcon("Cynthia_Arc", "red")}
                                {SyncPairIcon("Kieran", "orange", "new-pair")}
                                {SyncPairIcon("Red_SST", "orange")}
                                {SyncPairIcon("Leaf_NC", "orange")}
                                {SyncPairIcon("Ethan_Arc", "orange")}
                                {SyncPairIcon("Elesa_SSA", "orange")}
                                {SyncPairIcon("Brendan_NC", "yellow")}
                                {SyncPairIcon("Bianca_NC", "green")}
                                {SyncPairIcon("Ethan_Var", "green")}
                                {SyncPairIcon("Lear_SS", "green")}
                            </div>
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            <div className="tier-content">
                                {SyncPairIcon("N_Arc", "red")}
                                {SyncPairIcon("Dahlia", "red")}
                                {SyncPairIcon("Brendan_Aca", "orange", "new-pair")}
                                {SyncPairIcon("Serena_NC", "orange")}
                                {SyncPairIcon("Oleana", "orange")}
                                {SyncPairIcon("Lillie_H", "yellow")}
                                {SyncPairIcon("Wally_SS", "yellow")}
                                {SyncPairIcon("Roxie_SS", "yellow")}
                                {SyncPairIcon("Irida", "yellow")}
                                {SyncPairIcon("Red_Mix", "yellow")}
                                {SyncPairIcon("Adaman", "yellow")}
                                {SyncPairIcon("Silver_NC", "green")}
                                {SyncPairIcon("Geeta", "green")}
                            </div>
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            <div className="tier-content">
                                {SyncPairIcon("Lyra_SS", "red")}
                                {SyncPairIcon("Skyla_A", "red")}
                                {SyncPairIcon("Lillie_Ev", "red")}
                                {SyncPairIcon("Poppy_NY", "orange")}
                                {SyncPairIcon("Dawn_Mix", "orange")}
                                {SyncPairIcon("Lucas_Mix", "orange")}
                                {SyncPairIcon("Iono_SS", "orange")}
                                {SyncPairIcon("Leaf_Mix", "yellow")}
                                {SyncPairIcon("Clavell", "yellow")}
                                {SyncPairIcon("Hau_SS", "yellow")}
                                {SyncPairIcon("Avery", "green")}
                                {SyncPairIcon("Ingo_SS", "green")}
                                {SyncPairIcon("Morty_Aca", "green")}
                            </div>
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Marnie_Var", "red")}
                                {SyncPairIcon("Diantha_SS", "red")}
                                {SyncPairIcon("Benga", "red")}
                                {SyncPairIcon("Lacey", "red")}
                                {SyncPairIcon("Hop_NC", "orange")}
                                {SyncPairIcon("Nate_NC", "orange")}
                                {SyncPairIcon("N_A", "orange")}
                                {SyncPairIcon("Leon_Alt", "yellow")}
                                {SyncPairIcon("Bede_Var", "yellow")}
                                {SyncPairIcon("Nemona_SS", "yellow")}
                                {SyncPairIcon("Emmet_SS", "yellow")}
                                {SyncPairIcon("Rei", "yellow")}
                                {SyncPairIcon("Hop_Var", "green")}
                            </div>
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Lana_SS", "red")}
                                {SyncPairIcon("May_SS", "red")}
                                {SyncPairIcon("N_SS", "red")}
                                {SyncPairIcon("Shauntal_F", "orange")}
                                {SyncPairIcon("Roxanne_F", "orange")}
                                {SyncPairIcon("Rosa_Aca", "orange")}
                                {SyncPairIcon("Silver_SS", "orange")}
                                {SyncPairIcon("Cynthia_Var", "yellow")}
                                {SyncPairIcon("Marley_Pal", "yellow")}
                                {SyncPairIcon("Gardenia_S", "yellow")}
                                {SyncPairIcon("Blue_Mix", "green")}
                                {SyncPairIcon("Wallace_NY", "green")}
                                {SyncPairIcon("Larry", "green")}
                            </div>
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            <div className="tier-content">
                                {SyncPairIcon("Selene_SC", "red")}
                                {SyncPairIcon("Cynthia_SSR", "red")}
                                {SyncPairIcon("Raihan_A", "red")}
                                {SyncPairIcon("Cyrus_SS", "orange")}
                                {SyncPairIcon("Zinnia_SC", "orange")}
                                {SyncPairIcon("Gloria_Dojo", "orange")}
                                {SyncPairIcon("Elesa_Cl", "orange")}
                                {SyncPairIcon("Akari", "yellow")}
                                {SyncPairIcon("Lyra_Var", "yellow")}
                                {SyncPairIcon("May_A", "yellow")}
                                {SyncPairIcon("Elio_Var", "yellow")}
                                {SyncPairIcon("Calem_Var", "green")}
                                {SyncPairIcon("Marnie_Pal", "green")}
                            </div>
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Hilda_Var", "red")}
                                {SyncPairIcon("Hilbert_Var", "red")}
                                {SyncPairIcon("Selene_Var", "red")}
                                {SyncPairIcon("Viola_H", "orange")}
                                {SyncPairIcon("Lucas_Var", "orange")}
                                {SyncPairIcon("BrycenMan", "orange")}
                                {SyncPairIcon("Kris_Var", "yellow")}
                                {SyncPairIcon("Noland_Var", "yellow")}
                                {SyncPairIcon("Bede", "yellow")}
                                {SyncPairIcon("Grimsley_Kimono_Var", "yellow")}
                                {SyncPairIcon("Clive", "yellow")}
                                {SyncPairIcon("Marnie_Aca", "green")}
                                {SyncPairIcon("Greta", "green")}
                            </div>
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Tate_S", "red")}
                                {SyncPairIcon("Thorton_Var", "red")}
                                {SyncPairIcon("Ariana", "red")}
                                {SyncPairIcon("Leaf_SS", "orange")}
                                {SyncPairIcon("Steven_SS_Spe", "orange")}
                                {SyncPairIcon("Lysandre", "orange")}
                                {SyncPairIcon("Nemona", "orange")}
                                {SyncPairIcon("Paulo", "orange")}
                                {SyncPairIcon("Bianca", "yellow")}
                                {SyncPairIcon("Steven_SS", "yellow")}
                                {SyncPairIcon("Colress", "yellow")}
                                {SyncPairIcon("Lance_Var", "green")}
                                {SyncPairIcon("Kiawe_Var", "green")}
                            </div>
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            <div className="tier-content">
                                {SyncPairIcon("Marnie", "red")}
                                {SyncPairIcon("Iris_Alt", "red")}
                                {SyncPairIcon("Gordie", "red")}
                                {SyncPairIcon("Dawn_NY", "orange")}
                                {SyncPairIcon("Serena", "orange")}
                                {SyncPairIcon("Bianca_DC", "orange")}
                                {SyncPairIcon("Plumeria_Var", "orange")}
                                {SyncPairIcon("Marnie_Ev", "yellow")}
                                {SyncPairIcon("Rosa_SC", "yellow")}
                                {SyncPairIcon("Bertha", "yellow")}
                                {SyncPairIcon("Lucian", "yellow")}
                                {SyncPairIcon("MaskedRoyal", "yellow")}
                                {SyncPairIcon("Steven", "green")}
                            </div>
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Grimsley_Kimono", "red")}
                                {SyncPairIcon("Whitney_H", "red")}
                                {SyncPairIcon("Ghetsis", "red")}
                                {SyncPairIcon("Marnie_S", "red")}
                                {SyncPairIcon("Tierno_DC", "orange")}
                                {SyncPairIcon("Nessa_H", "orange")}
                                {SyncPairIcon("Ilima", "orange")}
                                {SyncPairIcon("Ingo_SC", "orange")}
                                {SyncPairIcon("Courtney", "orange")}
                                {SyncPairIcon("Archer", "yellow")}
                                {SyncPairIcon("N_DC", "yellow")}
                                {SyncPairIcon("Serena_Pal", "yellow")}
                                {SyncPairIcon("Victor_Ev", "green")}
                            </div>
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Petrel", "red")}
                                {SyncPairIcon("Karen", "red")}
                                {SyncPairIcon("Serena_TL", "red")}
                                {SyncPairIcon("Shauna_TL", "orange")}
                                {SyncPairIcon("Malva", "orange")}
                                {SyncPairIcon("Wally_DC", "orange")}
                                {SyncPairIcon("Blue_DC", "orange")}
                                {SyncPairIcon("Hugh_DC", "orange")}
                                {SyncPairIcon("N_TL", "yellow")}
                                {SyncPairIcon("Agatha", "yellow")}
                                {SyncPairIcon("Clemont", "green")}
                                {SyncPairIcon("Will", "green")}
                                {SyncPairIcon("Brendan_TL", "green")}
                            </div>
                            </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            <div className="tier-content">
                                {SyncPairIcon("Volkner", "red")}
                                {SyncPairIcon("Hop_DC", "red")}
                                {SyncPairIcon("Shauna_DC", "red")}
                                {SyncPairIcon("Bede_DC", "orange")}
                                {SyncPairIcon("Darach", "orange")}
                                {SyncPairIcon("Kukui", "orange")}
                                {SyncPairIcon("Blossom", "orange")}
                                {SyncPairIcon("Plumeria", "yellow")}
                                {SyncPairIcon("Skyla_H", "yellow")}
                                {SyncPairIcon("Whitney", "yellow")}
                                {SyncPairIcon("Gladion_DC", "yellow")}
                                {SyncPairIcon("Oak", "green")}
                                {SyncPairIcon("Lisia", "green")}
                            </div>
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Dawn", "red")}
                                {SyncPairIcon("Lacey_TL", "red")}
                                {SyncPairIcon("Cheren_DC", "red")}
                                {SyncPairIcon("Rose_BP", "orange")}
                                {SyncPairIcon("Wikstrom", "orange")}
                                {SyncPairIcon("Irida_TL", "orange")}
                                {SyncPairIcon("Rosa_TL", "orange")}
                                {SyncPairIcon("Cheren_TL", "yellow")}
                                {SyncPairIcon("Nanu", "yellow")}
                                {SyncPairIcon("Silver_TL", "yellow")}
                                {SyncPairIcon("Misty_SS", "green")}
                                {SyncPairIcon("Marnie_DC", "green")}
                                {SyncPairIcon("Silver_DC", "green")}
                            </div>
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Nemona_DC", "red")}
                                {SyncPairIcon("Eve", "red")}
                                {SyncPairIcon("May_Sp", "orange")}
                                {SyncPairIcon("Falkner_BP", "orange")}
                                {SyncPairIcon("Winona", "orange")}
                                {SyncPairIcon("Morty_F", "yellow")}
                                {SyncPairIcon("Acerola_F", "yellow")}
                                {SyncPairIcon("Will_BP", "yellow")}
                                {SyncPairIcon("Volkner_TL", "yellow")}
                                {SyncPairIcon("Barry_DC", "green")}
                                {SyncPairIcon("Brawly", "green")}
                                {SyncPairIcon("Marshal", "green")}
                            </div>
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            <div className="tier-content">
                                {SyncPairIcon("Grimsley", "red")}
                                {SyncPairIcon("Blaine", "red")}
                                {SyncPairIcon("Candice", "red")}
                                {SyncPairIcon("Lillie_TL", "orange")}
                                {SyncPairIcon("Janine", "orange")}
                                {SyncPairIcon("Lance_TL", "orange")}
                                {SyncPairIcon("Sophocles", "orange")}
                                {SyncPairIcon("Steven_TL", "yellow")}
                                {SyncPairIcon("Misty", "yellow")}
                                {SyncPairIcon("Brock", "green")}
                                {SyncPairIcon("Wallace", "green")}
                                {SyncPairIcon("CrasherWake", "green")}
                            </div>
                        </div>
                        <div className="dminus-row tierlist-row">
                            <div className="tier-title">D-</div>
                            <div className="tier-content">
                                {SyncPairIcon("PlayerM_Pikachu", "red", "buffed-pair")}
                                {SyncPairIcon("Erika", "red")}
                                {SyncPairIcon("Calem", "red")}
                                {SyncPairIcon("Lucy", "orange")}
                                {SyncPairIcon("LtSurge", "orange")}
                                {SyncPairIcon("Petey", "orange")}
                                {SyncPairIcon("Flannery", "orange")}
                                {SyncPairIcon("Grant", "yellow")}
                                {SyncPairIcon("Clay", "yellow")}
                                {SyncPairIcon("Brock_SS", "yellow")}
                                {SyncPairIcon("Norman", "green")}
                                {SyncPairIcon("Lorelei", "green")}
                            </div>
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
                            <div className="tier-content">
                                {SyncPairIcon("Steven_Arc", "red")}
                                {SyncPairIcon("Silver_Arc", "red")}
                                {SyncPairIcon("Blue_NC", "orange")}
                                {SyncPairIcon("Giovanni_SSA", "yellow")}
                                {SyncPairIcon("Carmine", "green", "new-pair")}
                                {SyncPairIcon("Rosa_NC", "green")}
                                {SyncPairIcon("Chase", "green")}
                                {SyncPairIcon("Mina_SS", "green")}
                            </div>
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Larry_SC", "red")}
                                {SyncPairIcon("Melony_Var", "red")}
                                {SyncPairIcon("Morty_SS", "orange")}
                                {SyncPairIcon("Atticus", "orange")}
                                {SyncPairIcon("Elaine", "orange")}
                                {SyncPairIcon("Cynthia_S", "orange")}
                                {SyncPairIcon("Cynthia_SSA", "orange")}
                                {SyncPairIcon("Penny", "yellow")}
                                {SyncPairIcon("Eri", "yellow")}
                                {SyncPairIcon("Florian_Aca", "yellow")}
                                {SyncPairIcon("Kris_SS", "green")}
                                {SyncPairIcon("Ortega", "green")}
                                {SyncPairIcon("Iono", "green")}
                            </div>
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            <div className="tier-content">
                                {SyncPairIcon("Acerola_S", "red")}
                                {SyncPairIcon("Milo", "orange")}
                                {SyncPairIcon("Acerola_SS", "orange")}
                                {SyncPairIcon("Bugsy_H", "orange")}
                                {SyncPairIcon("Kabu", "orange")}
                                {SyncPairIcon("Grusha", "orange")}
                                {SyncPairIcon("Red", "yellow")}
                                {SyncPairIcon("Anabel", "yellow")}
                                {SyncPairIcon("Rika", "yellow")}
                                {SyncPairIcon("Dawn_SS", "yellow")}
                                {SyncPairIcon("Iris_Aca", "yellow", "new-pair")}
                                {SyncPairIcon("Bede_NC", "green")}
                                {SyncPairIcon("Argenta", "green")}
                            </div>
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Bellelba", "red")}
                                {SyncPairIcon("Calem_NC", "orange")}
                                {SyncPairIcon("Raihan_NY", "orange")}
                                {SyncPairIcon("Brendan_SS", "orange")}
                                {SyncPairIcon("SamsonOak", "orange")}
                                {SyncPairIcon("Mallow_Var", "yellow")}
                                {SyncPairIcon("Elio_Alt", "yellow")}
                                {SyncPairIcon("Falkner_Var", "yellow")}
                                {SyncPairIcon("Arven", "yellow")}
                                {SyncPairIcon("Blue_SS", "yellow")}
                                {SyncPairIcon("Shauna_SC", "green")}
                                {SyncPairIcon("Volo", "green")}
                                {SyncPairIcon("Jasmine_H", "green")}
                            </div>
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Melony", "red")}
                                {SyncPairIcon("Elio", "red")}
                                {SyncPairIcon("Sycamore", "red")}
                                {SyncPairIcon("Aaron", "orange")}
                                {SyncPairIcon("Victor_Pal", "orange")}
                                {SyncPairIcon("Ingo", "orange")}
                                {SyncPairIcon("Sonia", "orange")}
                                {SyncPairIcon("Fantina_Gym", "yellow", "new-pair")}
                                {SyncPairIcon("Leaf", "yellow")}
                                {SyncPairIcon("BallGuy", "yellow")}
                                {SyncPairIcon("Sawyer_Var", "green")}
                                {SyncPairIcon("Lillie_SC", "green")}
                                {SyncPairIcon("Roxie_Gym", "green", "new-pair")}
                                {SyncPairIcon("Kabu_Gym", "green")}
                            </div>
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            <div className="tier-content">
                                {SyncPairIcon("Burgh_Sp", "red")}
                                {SyncPairIcon("Phoebe_F", "red")}
                                {SyncPairIcon("Steven_SC", "orange")}
                                {SyncPairIcon("Gordie_Var", "red")}
                                {SyncPairIcon("Grusha_Gym", "orange")}
                                {SyncPairIcon("Whitney_Gym", "orange")}
                                {SyncPairIcon("Winona_Gym", "orange")}
                                {SyncPairIcon("Hop", "orange")}
                                {SyncPairIcon("Mallow_Pal", "orange")}
                                {SyncPairIcon("Brock_Gym", "yellow")}
                                {SyncPairIcon("Clair_NY", "yellow")}
                                {SyncPairIcon("Tierno", "yellow")}
                                {SyncPairIcon("Jasmine_SC", "green")}
                                {SyncPairIcon("Proton", "green")}
                            </div>
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Oak_Ev", "red")}
                                {SyncPairIcon("Lorelei_Var", "red")}
                                {SyncPairIcon("Bea_Pal", "red")}
                                {SyncPairIcon("Guzma_Var", "orange")}
                                {SyncPairIcon("Morgan", "orange")}
                                {SyncPairIcon("Lyra_SC", "orange")}
                                {SyncPairIcon("Allister_F", "orange")}
                                {SyncPairIcon("Sycamore_H", "orange")}
                                {SyncPairIcon("Caitlin_F", "yellow")}
                                {SyncPairIcon("Kiawe", "yellow")}
                                {SyncPairIcon("Iris_TL", "green")}
                                {SyncPairIcon("Agatha_Var", "green")}
                                {SyncPairIcon("Korrina_Gym", "green")}
                                {SyncPairIcon("Lana_Gym", "green", "new-pair")}
                            </div>
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Falkner", "red")}
                                {SyncPairIcon("Bruno_Var", "red")}
                                {SyncPairIcon("Piers", "orange")}
                                {SyncPairIcon("Shauna", "orange")}
                                {SyncPairIcon("Iono_TL", "orange")}
                                {SyncPairIcon("Leon_TL", "orange")}
                                {SyncPairIcon("Hilda_S", "yellow")}
                                {SyncPairIcon("Lyra", "yellow")}
                                {SyncPairIcon("Lana_TL", "yellow")}
                                {SyncPairIcon("Tina", "green")}
                                {SyncPairIcon("Kabu_TL", "green")}
                                {SyncPairIcon("Larry_TL", "green")}
                                {SyncPairIcon("Blue_TL", "green")}
                            </div>
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            <div className="tier-content">
                                {SyncPairIcon("Steven_Ev", "red")}
                                {SyncPairIcon("Hilbert", "red")}
                                {SyncPairIcon("Arven_TL", "orange")}
                                {SyncPairIcon("PlayerM_Mesprit", "orange")}
                                {SyncPairIcon("PlayerM_Cobalion", "orange")}
                                {SyncPairIcon("Gladion_TL", "orange")}
                                {SyncPairIcon("Sabrina_NY", "orange")}
                                {SyncPairIcon("Glacia", "yellow")}
                                {SyncPairIcon("Steven_SS_Def", "yellow")}
                                {SyncPairIcon("Morty_BP", "yellow")}
                                {SyncPairIcon("Skyla", "green")}
                                {SyncPairIcon("Barry_BP", "green")}
                                {SyncPairIcon("Lana", "green")}
                            </div>
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Dawn_TL", "red")}
                                {SyncPairIcon("Clemont_BP", "red")}
                                {SyncPairIcon("Cheryl_BP", "orange")}
                                {SyncPairIcon("Wally_TL", "orange")}
                                {SyncPairIcon("Dana", "orange")}
                                {SyncPairIcon("Evelyn", "orange")}
                                {SyncPairIcon("Rachel_Var", "yellow")}
                                {SyncPairIcon("Nita", "yellow")}
                                {SyncPairIcon("Sabrina", "yellow")}
                                {SyncPairIcon("PlayerM_Raikou", "yellow")}
                                {SyncPairIcon("Elesa_SS", "green")}
                                {SyncPairIcon("Sawyer", "green")}
                                {SyncPairIcon("Lenora", "green")}
                            </div>
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Trevor", "red")}
                                {SyncPairIcon("Cheryl", "red")}
                                {SyncPairIcon("Olivia_BP", "red")}
                                {SyncPairIcon("PlayerM_Alcremie", "orange")}
                                {SyncPairIcon("Misty_Ev", "orange")}
                                {SyncPairIcon("Jasmine", "yellow")}
                                {SyncPairIcon("Cynthia_TL", "yellow")}
                                {SyncPairIcon("Elesa_TL", "yellow")}
                                {SyncPairIcon("Lillie_NY", "yellow")}
                                {SyncPairIcon("Teddy", "yellow")}
                                {SyncPairIcon("Lusamine_TL", "yellow", "new-pair")}
                                {SyncPairIcon("Dawn_Pal", "green")}
                                {SyncPairIcon("PlayerM_Registeel", "green")}
                            </div>
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            <div className="tier-content">
                                {SyncPairIcon("LtSurge_BP", "red")}
                                {SyncPairIcon("Giovanni_TL", "red")}
                                {SyncPairIcon("Maylene", "red")}
                                {SyncPairIcon("Raihan_TL", "orange")}
                                {SyncPairIcon("Giovanni_Ev", "orange")}
                                {SyncPairIcon("Bugsy_Ev", "orange")}
                                {SyncPairIcon("Morty_TL", "yellow")}
                                {SyncPairIcon("Phoebe", "yellow")}
                                {SyncPairIcon("Acerola_TL", "yellow")}
                                {SyncPairIcon("Adaman_TL", "yellow")}
                                {SyncPairIcon("PlayerM_Regirock", "yellow")}
                                {SyncPairIcon("Leaf_TL", "green")}
                                {SyncPairIcon("Lillie", "green")}
                            </div>
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Jasmine_TL", "red")}
                                {SyncPairIcon("Roxanne", "red")}
                                {SyncPairIcon("Janine_BP", "red")}
                                {SyncPairIcon("Rachel", "orange")}
                                {SyncPairIcon("Rosa_H", "orange")}
                                {SyncPairIcon("Marley", "orange")}
                                {SyncPairIcon("PlayerM_Torchic", "orange")}
                                {SyncPairIcon("Rosa", "yellow")}
                                {SyncPairIcon("Acerola", "yellow")}
                                {SyncPairIcon("Kali", "green")}
                                {SyncPairIcon("Cheren", "green")}
                                {SyncPairIcon("Erika_H", "green")}
                            </div>
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            <div className="tier-content">
                                {SyncPairIcon("Drake", "red")}
                                {SyncPairIcon("Ramos", "red")}
                                {SyncPairIcon("Liza", "orange")}
                                {SyncPairIcon("Thorton", "orange")}
                                {SyncPairIcon("Marlon", "orange")}
                                {SyncPairIcon("Viola", "orange")}
                                {SyncPairIcon("Erika_BP", "yellow")}
                                {SyncPairIcon("Wulfric", "yellow")}
                                {SyncPairIcon("Brycen", "yellow")}
                                {SyncPairIcon("James", "green")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    //#endregion
};

export default TierListSpark;