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
        {value: 'aaron-trainer', label: 'Aaron'},{value: 'acerola-trainer', label: 'Acerola'},{value: 'adaman-trainer', label: 'Adaman'},{value: 'agatha-trainer', label: 'Agatha'},{value: 'akari-trainer', label: 'Akari'},{value: 'alder-trainer', label: 'Alder'},{value: 'allister-trainer', label: 'Allister'},{value: 'anabel-trainer', label: 'Anabel'},{value: 'archer-trainer', label: 'Archer'},{value: 'archie-trainer', label: 'Archie'},{value: 'arezu-trainer', label: 'Arezu'},{value: 'argenta-trainer', label: 'Argenta'},{value: 'ariana-trainer', label: 'Ariana'},{value: 'arven-trainer', label: 'Arven'},{value: 'ash-trainer', label: 'Ash'},{value: 'atticus-trainer', label: 'Atticus'},{value: 'avery-trainer', label: 'Avery'},
        {value: 'ball-guy-trainer', label: 'Ball Guy'},{value: 'barry-trainer', label: 'Barry'},{value: 'bea-trainer', label: 'Bea'},{value: 'bede-trainer', label: 'Bede'},{value: 'benga-trainer', label: 'Benga'},{value: 'bertha-trainer', label: 'Bertha'},{value: 'bianca-trainer', label: 'Bianca'},{value: 'blaine-trainer', label: 'Blaine'},{value: 'blossom-trainer', label: 'Blossom'},{value: 'blue-trainer', label: 'Blue'},{value: 'brassius-trainer', label: 'Brassius'},{value: 'brawly-trainer', label: 'Brawly'},{value: 'brendan-trainer', label: 'Brendan'},{value: 'brock-trainer', label: 'Brock'},{value: 'bruno-trainer', label: 'Bruno'},{value: 'brycen-trainer', label: 'Brycen'},{value: 'bugsy-trainer', label: 'Bugsy'},{value: 'burgh-trainer', label: 'Burgh'},
        {value: 'caitlin-trainer', label: 'Caitlin'},{value: 'calem-trainer', label: 'Calem'},{value: 'candice-trainer', label: 'Candice'},{value: 'carmine-trainer', label: 'Carmine'},{value: 'chase-trainer', label: 'Chase'},{value: 'cheren-trainer', label: 'Cheren'},{value: 'cheryl-trainer', label: 'Cheryl'},{value: 'chili-trainer', label: 'Chili'},{value: 'chuck-trainer', label: 'Chuck'},{value: 'cilan-trainer', label: 'Cilan'},{value: 'clair-trainer', label: 'Clair'},{value: 'clavell-trainer', label: 'Clavell'},{value: 'clay-trainer', label: 'Clay'},{value: 'clemont-trainer', label: 'Clemont'},{value: 'colress-trainer', label: 'Colress'},{value: 'courtney-trainer', label: 'Courtney'},{value: 'crasher-wake-trainer', label: 'Crasher-Wake'},{value: 'cress-trainer', label: 'Cress'},{value: 'cynthia-trainer', label: 'Cynthia'},{value: 'cyrus-trainer', label: 'Cyrus'},
        {value: 'dahlia-trainer', label: 'Dahlia'},{value: 'dana-trainer', label: 'Dana'},{value: 'darach-trainer', label: 'Darach'},{value: 'dawn-trainer', label: 'Dawn'},{value: 'dexio-trainer', label: 'Dexio'},{value: 'diantha-trainer', label: 'Diantha'},{value: 'drake-trainer', label: 'Drake'},{value: 'drasna-trainer', label: 'Drasna'},{value: 'drayton-trainer', label: 'Drayton'},
        {value: 'elaine-trainer', label: 'Elaine'},{value: 'elesa-trainer', label: 'Elesa'},{value: 'elio-trainer', label: 'Elio'},{value: 'emma-trainer', label: 'Emma'},{value: 'emmet-trainer', label: 'Emmet'},{value: 'eri-trainer', label: 'Eri'},{value: 'erika-trainer', label: 'Erika'},{value: 'ethan-trainer', label: 'Ethan'},{value: 'eusine-trainer', label: 'Eusine'},{value: 'eve-trainer', label: 'Eve'},{value: 'evelyn-trainer', label: 'Evelyn'},
        {value: 'falkner-trainer', label: 'Falkner'},{value: 'fantina-trainer', label: 'Fantina'},{value: 'flannery-trainer', label: 'Flannery'},{value: 'flint-trainer', label: 'Flint'},{value: 'florian-trainer', label: 'Florian'},
        {value: 'gardenia-trainer', label: 'Gardenia'},{value: 'geeta-trainer', label: 'Geeta'},{value: 'ghetsis-trainer', label: 'Ghetsis'},{value: 'giacomo-trainer', label: 'Giacomo'},{value: 'giovanni-trainer', label: 'Giovanni'},{value: 'glacia-trainer', label: 'Glacia'},{value: 'gladion-trainer', label: 'Gladion'},{value: 'gloria-trainer', label: 'Gloria'},{value: 'gordie-trainer', label: 'Gordie'},{value: 'grant-trainer', label: 'Grant'},{value: 'greta-trainer', label: 'Greta'},{value: 'grimsley-trainer', label: 'Grimsley'},{value: 'grusha-trainer', label: 'Grusha'},{value: 'guzma-trainer', label: 'Guzma'},
        {value: 'hala-trainer', label: 'Hala'},{value: 'hapu-trainer', label: 'Hapu'},{value: 'hassel-trainer', label: 'Hassel'},{value: 'hau-trainer', label: 'Hau'},{value: 'helena-trainer', label: 'Helena'},{value: 'hilbert-trainer', label: 'Hilbert'},{value: 'hilda-trainer', label: 'Hilda'},{value: 'hop-trainer', label: 'Hop'},{value: 'hugh-trainer', label: 'Hugh'},
        {value: 'ilima-trainer', label: 'Ilima'},{value: 'ingo-trainer', label: 'Ingo'},{value: 'iono-trainer', label: 'Iono'},{value: 'irida-trainer', label: 'Irida'},{value: 'iris-trainer', label: 'Iris'},
        {value: 'jacq-trainer', label: 'Jacq'},{value: 'james-trainer', label: 'James'},{value: 'janine-trainer', label: 'Janine'},{value: 'jasmine-trainer', label: 'Jasmine'},{value: 'jessie-trainer', label: 'Jessie'},{value: 'juliana-trainer', label: 'Juliana'},
        {value: 'kabu-trainer', label: 'Kabu'},{value: 'kahili-trainer', label: 'Kahili'},{value: 'kali-trainer', label: 'Kali'},{value: 'karen-trainer', label: 'Karen'},{value: 'katherine-trainer', label: 'Katherine'},{value: 'kiawe-trainer', label: 'Kiawe'},{value: 'kieran-trainer', label: 'Kieran'},{value: 'klara-trainer', label: 'Klara'},{value: 'koga-trainer', label: 'Koga'},{value: 'korrina-trainer', label: 'Korrina'},{value: 'kris-trainer', label: 'Kris'},{value: 'kukui-trainer', label: 'Professor Kukui'},
        {value: 'lacey-trainer', label: 'Lacey'},{value: 'lana-trainer', label: 'Lana'},{value: 'lance-trainer', label: 'Lance'},{value: 'larry-trainer', label: 'Larry'},{value: 'leaf-trainer', label: 'Leaf'},{value: 'lear-trainer', label: 'Lear'},{value: 'lenora-trainer', label: 'Lenora'},{value: 'leon-trainer', label: 'Leon'},{value: 'lillie-trainer', label: 'Lillie'},{value: 'linnea-trainer', label: 'Linnea'},{value: 'lisia-trainer', label: 'Lisia'},{value: 'liza-trainer', label: 'Liza'},{value: 'looker-trainer', label: 'Looker'},{value: 'lorelei-trainer', label: 'Lorelei'},{value: 'ltsurge-trainer', label: 'Lt. Surge'},{value: 'lucas-trainer', label: 'Lucas'},{value: 'lucian-trainer', label: 'Lucian'},{value: 'lucy-trainer', label: 'Lucy'},{value: 'lusamine-trainer', label: 'Lusamine'},{value: 'lyra-trainer', label: 'Lyra'},{value: 'lysandre-trainer', label: 'Lysandre'},
        {value: 'mai-trainer', label: 'Mai'},{value: 'mallow-trainer', label: 'Mallow'},{value: 'malva-trainer', label: 'Malva'},{value: 'marley-trainer', label: 'Marley'},{value: 'marlon-trainer', label: 'Marlon'},{value: 'marnie-trainer', label: 'Marnie'},{value: 'marshal-trainer', label: 'Marshal'},{value: 'maxie-trainer', label: 'Maxie'},{value: 'may-trainer', label: 'May'},{value: 'maylene-trainer', label: 'Maylene'},{value: 'mela-trainer', label: 'Mela'},{value: 'melony-trainer', label: 'Melony'},{value: 'milo-trainer', label: 'Milo'},{value: 'mina-trainer', label: 'Mina'},{value: 'miriam-trainer', label: 'Miriam'},{value: 'misty-trainer', label: 'Misty'},{value: 'molayne-trainer', label: 'Molayne'},{value: 'morgan-trainer', label: 'Morgan'},{value: 'morty-trainer', label: 'Morty'},
        {value: 'n-trainer', label: 'N'},{value: 'nanu-trainer', label: 'Nanu'},{value: 'naomi-trainer', label: 'Naomi'},{value: 'nate-trainer', label: 'Nate'},{value: 'nemona-trainer', label: 'Nemona'},{value: 'nessa-trainer', label: 'Nessa'},{value: 'nita-trainer', label: 'Nita'},{value: 'noland-trainer', label: 'Noland'},{value: 'norman-trainer', label: 'Norman'},
        {value: 'oak-trainer', label: 'Professor Oak'},{value: 'oleana-trainer', label: 'Oleana'},{value: 'olivia-trainer', label: 'Olivia'},{value: 'olympia-trainer', label: 'Olympia'},{value: 'ortega-trainer', label: 'Ortega'},
        {value: 'palmer-trainer', label: 'Palmer'},{value: 'paulo-trainer', label: 'Paulo'},{value: 'penny-trainer', label: 'Penny'},{value: 'perrin-trainer', label: 'Perrin'},{value: 'petey-trainer', label: 'Petey'},{value: 'petrel-trainer', label: 'Petrel'},{value: 'phoebe-trainer', label: 'Phoebe'},{value: 'piers-trainer', label: 'Piers'},{value: 'player-trainer', label: 'Player'},{value: 'plumeria-trainer', label: 'Plumeria'},{value: 'poppy-trainer', label: 'Poppy'},{value: 'proton-trainer', label: 'Proton'},{value: 'pryce-trainer', label: 'Pryce'},
        
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
        {value: 'free-spirit', label: 'Free Spirit'},{value: 'gadgeteer', label: 'Gadgeteer'},{value: 'galar-adventurer', label: 'Galar Adventurer'},{value: 'grown-woman', label: 'Grown Woman'},{value: 'hisui-adventurer', label: 'Hisui Adventurer'},{value: 'hoenn-family', label: 'Hoenn Family'},
        {value: 'kalos-neighbors', label: 'Kalos Neighbors'},{value: 'knowledgeable', label: 'Knowledgeable'},{value: 'melemele-family', label: 'Melemele Family'},{value: 'nature-lover', label: 'Nature Lover'},{value: 'ninja-family', label: 'Ninja Family'},
        {value: 'observatory-cousin', label: 'Observatory Cousin'},{value: 'old-colleagues', label: 'Old Colleagues'},{value: 'old-timer', label: 'Old-Timer'},{value: 'pallet-town', label: 'Pallet Town'},{value: 'pasio-academy', label: 'Pasio Academy'},{value: 'passionate-spirit', label: 'Passionate Spirit'},
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
                        {SyncPairIcon("Drayton", 0, "filter-excluded")}
                        {SyncPairIcon("Kieran_SS", 0, "filter-excluded")}
                        {SyncPairIcon("Hau_Mix", 0, "filter-excluded")}
                        {SyncPairIcon("Emmet_TL", 0, "filter-excluded")}
                        {SyncPairIcon("Rika_Var", 0, "filter-excluded")}
                        {SyncPairIcon("Poppy_Var", 0, "filter-excluded")}
                        {SyncPairIcon("Larry_SC2", 0, "filter-excluded")}
                        {SyncPairIcon("Flannery_SC", 0, "filter-excluded")}                     
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
                                    <input type="checkbox" id="expf-acquisition" onChange={() => toggleAcquisitions("ex-fair")}/>
                                    <label htmlFor="expf-acquisition">EX Fair</label>
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
                                {SyncPairIcon("Red_A", 1)}
                                {SyncPairIcon("Misty_Arc", 2)}
                                {SyncPairIcon("Brock_Arc", 2)}
                                {SyncPairIcon("Florian_A", 2)}
                                {SyncPairIcon("Hilda_NC", 2)}
                                {SyncPairIcon("Selene_NC", 3)}
                                {SyncPairIcon("Cynthia_Arc", 3)}
                                {SyncPairIcon("Carmine_SS", 3)}
                                {SyncPairIcon("May_NC", 3)}
                                {SyncPairIcon("Blue_Arc", 4)}
                                {SyncPairIcon("Alder_Arc", 4)}
                                {SyncPairIcon("Red_NC", 5)}
                            </div>
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Florian", 1)}
                                {SyncPairIcon("Elio_NC", 1)}
                                {SyncPairIcon("Leon_Arc", 1)}
                                {SyncPairIcon("Marnie_NC", 1, "buffed-pair")}
                                {SyncPairIcon("Roxie_SS", 2)}
                                {SyncPairIcon("Cheren_NC", 3)}
                                {SyncPairIcon("Erika_Pal", 3)}
                                {SyncPairIcon("Arezu", 3)}
                                {SyncPairIcon("Bede_SS", 3)}
                                {SyncPairIcon("Juliana", 3)}
                                {SyncPairIcon("Rika_Pal", 3)}
                                {SyncPairIcon("Adaman_Pal", 4)}
                                {SyncPairIcon("Lance_Var2", 4)}
                                {SyncPairIcon("Ash", 4)}
                            </div>
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            <div className="tier-content">
                                {SyncPairIcon("Mela", 1)}
                                {SyncPairIcon("Hilda_SS", 1)}
                                {SyncPairIcon("Klara", 1)}
                                {SyncPairIcon("Giacomo", 2)}
                                {SyncPairIcon("Gladion_Aca", 2)}
                                {SyncPairIcon("Gladion_SS", 2)}
                                {SyncPairIcon("Kabu_Aca", 3)}
                                {SyncPairIcon("Irida_SC", 3)}
                                {SyncPairIcon("Lear", 3)}
                                {SyncPairIcon("Steven_SS_Att", 3)}
                                {SyncPairIcon("Hop_Var2", 4)}
                                {SyncPairIcon("Lysandre_SS", 4)}
                                {SyncPairIcon("Rei", 4)}
                                {SyncPairIcon("Red_SS", 4)}
                                {SyncPairIcon("Chili", 4)}
                            </div>
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Barry_SC", 1)}
                                {SyncPairIcon("Serena_SS", 1)}
                                {SyncPairIcon("Gloria_Alt", 1)}
                                {SyncPairIcon("Gloria_Dojo", 1)}
                                {SyncPairIcon("Arven_Aca", 2, "new-pair")}
                                {SyncPairIcon("Arven_H", 2)}
                                {SyncPairIcon("Selene_Alt", 2)}
                                {SyncPairIcon("Skyla_S", 2)}
                                {SyncPairIcon("Rose", 3)}
                                {SyncPairIcon("Poppy", 3)}
                                {SyncPairIcon("Emma", 3)}
                                {SyncPairIcon("Lance", 3)}
                                {SyncPairIcon("Sina", 4)}
                                {SyncPairIcon("Dexio", 4)}
                            </div>
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Adaman_SC", 1)}
                                {SyncPairIcon("Cynthia", 1)}
                                {SyncPairIcon("Piers_SS", 1)}
                                {SyncPairIcon("Palmer", 1)}
                                {SyncPairIcon("Hilbert_SS", 1)}
                                {SyncPairIcon("Steven_A", 2)}
                                {SyncPairIcon("Rei_Aca", 2)}
                                {SyncPairIcon("Lillie_A", 2)}
                                {SyncPairIcon("Jacq", 2)}
                                {SyncPairIcon("Korrina_SS", 2)}
                                {SyncPairIcon("Lusamine_SS", 2)}
                                {SyncPairIcon("Liza_S", 3)}
                                {SyncPairIcon("Eusine", 3)}
                                {SyncPairIcon("Alder", 4)}
                                {SyncPairIcon("Diantha", 4)}
                            </div>
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            <div className="tier-content">
                                {SyncPairIcon("Cynthia_SS", 1)}
                                {SyncPairIcon("Gladion", 1)}
                                {SyncPairIcon("Ethan_SS", 2)}
                                {SyncPairIcon("Archie", 2)}
                                {SyncPairIcon("Maxie", 2)}
                                {SyncPairIcon("Nemona_Ev", 2)}
                                {SyncPairIcon("Blue_Cl", 3)}
                                {SyncPairIcon("Gloria", 3, "buffed-pair")}
                                {SyncPairIcon("Olympia", 3)}
                                {SyncPairIcon("Diantha_SC", 3)}
                                {SyncPairIcon("Leon", 4)}
                                {SyncPairIcon("Giovanni_Var", 4)}
                                {SyncPairIcon("Candice_Pal", 4)}
                                {SyncPairIcon("Iono_F", 4)}
                                {SyncPairIcon("Victor", 4)}
                            </div>
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Emmet", 1)}
                                {SyncPairIcon("PlayerM_Solgaleo", 1)}
                                {SyncPairIcon("Erika_SS", 2)}
                                {SyncPairIcon("Giovanni_SS", 2)}
                                {SyncPairIcon("Lisia_NY", 2)}
                                {SyncPairIcon("N", 2)}
                                {SyncPairIcon("Leon_SS", 3)}
                                {SyncPairIcon("Silver", 3)}
                                {SyncPairIcon("Raihan", 3)}
                                {SyncPairIcon("Grimsley_SS", 4)}
                                {SyncPairIcon("Hilda", 4)}
                                {SyncPairIcon("Kris", 4)}
                                {SyncPairIcon("Elesa", 4)}
                                {SyncPairIcon("Blue", 5)}
                                {SyncPairIcon("Karen", 5)}
                            </div>
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Hilda_SC", 1)}
                                {SyncPairIcon("Riley", 1)}
                                {SyncPairIcon("Giovanni", 1)}
                                {SyncPairIcon("N_S", 2)}
                                {SyncPairIcon("Penny_TL", 2)}
                                {SyncPairIcon("Hugh", 2)}
                                {SyncPairIcon("Bea", 2, "buffed-pair")}
                                {SyncPairIcon("May", 2)}
                                {SyncPairIcon("Brendan", 2)}
                                {SyncPairIcon("Chuck", 3)}
                                {SyncPairIcon("Emmet_SC", 3)}
                                {SyncPairIcon("Wally", 3)}
                                {SyncPairIcon("Sonia_SC", 3)}
                                {SyncPairIcon("Skyla_TL", 4)}
                                {SyncPairIcon("Iono_Ev", 4)}
                            </div>
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            <div className="tier-content">
                                {SyncPairIcon("Bea_BP", 1)}
                                {SyncPairIcon("Volkner_NY", 1)}
                                {SyncPairIcon("Caitlin", 2)}
                                {SyncPairIcon("Ryuki", 2)}
                                {SyncPairIcon("Cyrus", 2)}
                                {SyncPairIcon("Diantha_TL", 3)}
                                {SyncPairIcon("Leon_H", 3)}
                                {SyncPairIcon("Nessa", 4)}
                                {SyncPairIcon("Allister", 4)}
                                {SyncPairIcon("Clavell_Ev", 4)}
                                {SyncPairIcon("Lear_TL", 4)}
                                {SyncPairIcon("Sidney", 5)}
                                {SyncPairIcon("Morty", 5)}
                                {SyncPairIcon("Guzma", 5)}
                            </div>
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Mallow", 1)}
                                {SyncPairIcon("Hala", 1)}
                                {SyncPairIcon("Fantina", 1)}
                                {SyncPairIcon("Burgh", 2)}
                                {SyncPairIcon("Selene", 2)}
                                {SyncPairIcon("Olivia", 2)}
                                {SyncPairIcon("Zinnia", 3)}
                                {SyncPairIcon("Grimsley_TL", 3)}
                                {SyncPairIcon("Lusamine_BP", 3)}
                                {SyncPairIcon("Guzma_SC", 3)}
                                {SyncPairIcon("Roark", 3)}
                                {SyncPairIcon("Lusamine", 4)}
                                {SyncPairIcon("Valerie_BP", 4)}
                            </div>
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Hilbert_F", 1)}
                                {SyncPairIcon("Shauntal", 1)}
                                {SyncPairIcon("Drasna", 2)}
                                {SyncPairIcon("Barry", 2)}
                                {SyncPairIcon("Noland", 2)}
                                {SyncPairIcon("Lance_NY", 3)}
                                {SyncPairIcon("Blue_Ev", 3)}
                                {SyncPairIcon("Ethan", 3)}
                                {SyncPairIcon("Zinnia_BP", 3)}
                                {SyncPairIcon("Volo_TL", 4)}
                                {SyncPairIcon("Steven_S", 4)}
                            </div>
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            <div className="tier-content">
                                {SyncPairIcon("Koga", 1)}
                                {SyncPairIcon("Elesa_Pal", 2)}
                                {SyncPairIcon("Nate", 2)}
                                {SyncPairIcon("Kahili", 2)}
                                {SyncPairIcon("Candice_BP", 3)}
                                {SyncPairIcon("Hau_DC", 3)}
                                {SyncPairIcon("Sophocles_BP", 3)}
                                {SyncPairIcon("Roxie", 4)}
                                {SyncPairIcon("Looker", 4)}
                                {SyncPairIcon("Gloria_S", 5)}
                                {SyncPairIcon("Siebold", 5)}
                                {SyncPairIcon("Bugsy", 5)}
                            </div>
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Gloria_TL", 1)}
                                {SyncPairIcon("Bruno", 1)}
                                {SyncPairIcon("Lyra_S", 1)}
                                {SyncPairIcon("Molayne", 2)}
                                {SyncPairIcon("Tate", 2)}
                                {SyncPairIcon("Hau", 2)}
                                {SyncPairIcon("Rika_TL", 3)}
                                {SyncPairIcon("Siebold_H", 3)}
                                {SyncPairIcon("Helena", 3)}
                                {SyncPairIcon("Mina", 4)}
                                {SyncPairIcon("Marnie_TL", 4)}
                                {SyncPairIcon("Calem_TL", 4)}
                            </div>
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Valerie", 1)}
                                {SyncPairIcon("Sycamore_TL", 2)}
                                {SyncPairIcon("Korrina", 3)}
                                {SyncPairIcon("Clair", 3)}
                                {SyncPairIcon("May_TL", 4)}
                                {SyncPairIcon("Gardenia", 4)}
                                {SyncPairIcon("Karen_BP", 5)}
                            </div>
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            <div className="tier-content">
                                {SyncPairIcon("Katherine", 1)}
                                {SyncPairIcon("Pryce", 2)}
                                {SyncPairIcon("Hapu", 2)}
                                {SyncPairIcon("Naomi", 3)}
                                {SyncPairIcon("Iris", 3)}
                                {SyncPairIcon("Flint", 3)}
                                {SyncPairIcon("Jessie", 4)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hybrid">
                    <div className="header-row">
                        <h3>Hybrid</h3>
                    </div>
                    <div className="hybrid-grid">
                        <div className="uberplus-row tierlist-row">
                            <img src={`${process.env.PUBLIC_URL}/images/misc/shiny.png`} alt="Shiny" className="tier-title"></img>
                            <div className="tier-content">
                                {SyncPairIcon("Red_1996", 1)}
                            </div>
                        </div>
                        <div className="uber-row tierlist-row">
                            <div className="tier-title">U</div>
                            <div className="tier-content">
                                {SyncPairIcon("Sabrina_Arc", 1, "new-pair")}
                                {SyncPairIcon("Irida_A", 1)}
                                {SyncPairIcon("Juliana_A", 1)}
                                {SyncPairIcon("Volo_Alt", 1)}
                                {SyncPairIcon("Ethan_Arc", 2)}
                                {SyncPairIcon("Hilbert_NC", 2)}
                                {SyncPairIcon("Marnie_Alt", 3)}
                                {SyncPairIcon("Perrin", 3)}
                                {SyncPairIcon("Kieran", 4)}
                                {SyncPairIcon("Elesa_SSA", 4)}
                                {SyncPairIcon("Red_SST", 4)}
                                {SyncPairIcon("Lear_SS", 5)}
                                {SyncPairIcon("Bianca_NC", 5, "buffed-pair")}
                            </div>
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Brendan_NC", 1)}
                                {SyncPairIcon("BallGuy_SS", 2)}
                                {SyncPairIcon("Leaf_NC", 2)}
                                {SyncPairIcon("Brassius", 2)}
                                {SyncPairIcon("N_Arc", 2)}
                                {SyncPairIcon("Serena_NC", 2)}
                                {SyncPairIcon("Hilbert_Var2", 2)}
                                {SyncPairIcon("Silver_NC", 3)}
                                {SyncPairIcon("Adaman", 3)}
                                {SyncPairIcon("Lance_Arc", 3)}
                                {SyncPairIcon("Dahlia", 4)}
                                {SyncPairIcon("Brendan_Aca", 4)}
                                {SyncPairIcon("Hugh_Aca", 4)}
                                {SyncPairIcon("Irida", 5)}
                                {SyncPairIcon("Hassel", 5)}
                            </div>
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            <div className="tier-content">
                                {SyncPairIcon("N_Var", 1)}
                                {SyncPairIcon("Hilda_Var2", 1)}
                                {SyncPairIcon("Lillie_H", 1)}
                                {SyncPairIcon("Wally_SS", 1)}
                                {SyncPairIcon("Oleana", 2)}
                                {SyncPairIcon("Marley_Pal", 3)}
                                {SyncPairIcon("Avery", 3)}
                                {SyncPairIcon("Geeta", 4)}
                                {SyncPairIcon("Iono_SS", 4)}
                                {SyncPairIcon("Ethan_Var", 4)}
                                {SyncPairIcon("Ingo_SS", 4)}
                                {SyncPairIcon("Leon_Alt", 4)}
                                {SyncPairIcon("Benga", 5)}
                                {SyncPairIcon("Lacey", 5)}
                            </div>
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Lyra_SS", 1, "buffed-pair")}
                                {SyncPairIcon("N_A", 2)}
                                {SyncPairIcon("Skyla_A", 2)}
                                {SyncPairIcon("Red_Mix", 2)}
                                {SyncPairIcon("Nemona_SS", 2)}
                                {SyncPairIcon("Diantha_SS", 2)}
                                {SyncPairIcon("Cynthia_Var", 3)}
                                {SyncPairIcon("Cynthia_SSR", 3)}
                                {SyncPairIcon("Lillie_Ev", 4)}
                                {SyncPairIcon("Poppy_NY", 4)}
                                {SyncPairIcon("Lucas_Mix", 4)}
                                {SyncPairIcon("Dawn_Mix", 4)}
                                {SyncPairIcon("Hau_SS", 5)}
                                {SyncPairIcon("Cress", 5)}
                                {SyncPairIcon("Marnie_Var", 5)}
                            </div>
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Hop_NC", 1)}
                                {SyncPairIcon("Lyra_Var", 1)}
                                {SyncPairIcon("Bede_Var", 1)}
                                {SyncPairIcon("Hop_Var", 1)}
                                {SyncPairIcon("Lana_SS", 2)}
                                {SyncPairIcon("Shauntal_F", 2)}
                                {SyncPairIcon("Barry_Mix", 2)}
                                {SyncPairIcon("Nate_NC", 2)}
                                {SyncPairIcon("Elio_Mix", 3)}
                                {SyncPairIcon("Leaf_Mix", 3)}
                                {SyncPairIcon("Clavell", 3)}
                                {SyncPairIcon("Morty_Aca", 3)}
                                {SyncPairIcon("Emmet_SS", 3)}
                                {SyncPairIcon("N_SS", 4)}
                            </div>
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            <div className="tier-content">
                                {SyncPairIcon("Roxanne_F", 1)}
                                {SyncPairIcon("Elio_Var", 2)}
                                {SyncPairIcon("Hilbert_Var", 2)}
                                {SyncPairIcon("Kris_Var", 2)}
                                {SyncPairIcon("Gardenia_S", 2)}
                                {SyncPairIcon("Lucas_Var", 2)}
                                {SyncPairIcon("Chase_Var", 2)}
                                {SyncPairIcon("Raihan_A", 2)}
                                {SyncPairIcon("Cyrus_SS", 3)}
                                {SyncPairIcon("Rosa_Aca", 3)}
                                {SyncPairIcon("Larry", 3)}
                                {SyncPairIcon("Perrin_Aca", 3, "new-pair")}
                                {SyncPairIcon("May_SS", 3)}
                                {SyncPairIcon("Silver_SS", 3)}
                                {SyncPairIcon("Blue_Mix", 4)}
                            </div>
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Selene_SC", 1)}
                                {SyncPairIcon("Calem_Var", 2)}
                                {SyncPairIcon("Hilda_Var", 2)}
                                {SyncPairIcon("Selene_Var", 2)}
                                {SyncPairIcon("Elesa_Cl", 3)}
                                {SyncPairIcon("Akari", 3)}
                                {SyncPairIcon("Zinnia_SC", 3)}
                                {SyncPairIcon("May_A", 3)}
                                {SyncPairIcon("Lucas", 3)}
                                {SyncPairIcon("Wallace_NY", 3)}
                                {SyncPairIcon("Florian_Ev", 3)}
                                {SyncPairIcon("Marnie_Pal", 4)}
                                {SyncPairIcon("Leaf_SS", 5)}
                                {SyncPairIcon("Viola_H", 5)}
                            </div>
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Paulo", 1)}
                                {SyncPairIcon("Grimsley_Kimono_Var", 1)}
                                {SyncPairIcon("Marnie_Aca", 1)}
                                {SyncPairIcon("Noland_Var", 2)}
                                {SyncPairIcon("Thorton_Var", 2)}
                                {SyncPairIcon("Greta", 2)}
                                {SyncPairIcon("Clive", 2)}
                                {SyncPairIcon("Bede", 2)}
                                {SyncPairIcon("Ariana", 3)}
                                {SyncPairIcon("BrycenMan", 3)}
                                {SyncPairIcon("Tate_S", 3)}
                                {SyncPairIcon("Colress", 3)}
                                {SyncPairIcon("Steven_SS_Spe", 4)}
                                {SyncPairIcon("Steven_SS", 4)}
                                {SyncPairIcon("Bianca", 4)}
                            </div>
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            <div className="tier-content">
                                {SyncPairIcon("Nemona", 1)}
                                {SyncPairIcon("Lysandre", 1)}
                                {SyncPairIcon("Courtney", 1, "buffed-pair")}
                                {SyncPairIcon("Kiawe_Var", 2)}
                                {SyncPairIcon("Iris_Alt", 2)}
                                {SyncPairIcon("Bertha", 2)}
                                {SyncPairIcon("Lance_Var", 2)}
                                {SyncPairIcon("Whitney_H", 2)}
                                {SyncPairIcon("Marnie", 2)}
                                {SyncPairIcon("Dawn_NY", 2)}
                                {SyncPairIcon("Plumeria_Var", 2)}
                                {SyncPairIcon("MaskedRoyal", 3)}
                                {SyncPairIcon("Ghetsis", 3)}
                                {SyncPairIcon("Gordie", 4)}
                                {SyncPairIcon("Marnie_Ev", 4)}
                            </div>
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Lucian", 1)}
                                {SyncPairIcon("Rosa_SC", 1)}
                                {SyncPairIcon("Bianca_DC", 2)}
                                {SyncPairIcon("Steven", 2)}
                                {SyncPairIcon("Grimsley_Kimono", 2)}
                                {SyncPairIcon("Marnie_S", 2)}
                                {SyncPairIcon("Iris_F", 3)}
                                {SyncPairIcon("Tierno_DC", 3)}
                                {SyncPairIcon("Ilima", 3)}
                                {SyncPairIcon("Volkner", 3)}
                                {SyncPairIcon("Nessa_H", 3)}
                                {SyncPairIcon("Archer", 4)}
                                {SyncPairIcon("Petrel", 4)}
                                {SyncPairIcon("Ingo_SC", 4)}
                            </div>
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Serena_TL", 1)}
                                {SyncPairIcon("N_DC", 1)}
                                {SyncPairIcon("Blue_DC", 2)}
                                {SyncPairIcon("Victor_Ev", 2)}
                                {SyncPairIcon("Serena_Pal", 2)}
                                {SyncPairIcon("Malva", 2)}
                                {SyncPairIcon("Misty_TL", 2)}
                                {SyncPairIcon("Shauna_TL", 3)}
                                {SyncPairIcon("N_TL", 3)}
                                {SyncPairIcon("Clemont", 3)}
                                {SyncPairIcon("Will", 4)}
                                {SyncPairIcon("Whitney", 4)}
                                {SyncPairIcon("Wally_DC", 4)}
                                {SyncPairIcon("Hugh_DC", 4)}
                                {SyncPairIcon("Brendan_TL", 4)}
                            </div>
                            </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            <div className="tier-content">
                                {SyncPairIcon("BallGuy_TL", 1)}
                                {SyncPairIcon("Hop_DC", 1)}
                                {SyncPairIcon("Serena", 2)}
                                {SyncPairIcon("Agatha", 2)}
                                {SyncPairIcon("Blossom", 3)}
                                {SyncPairIcon("Shauna_DC", 3)}
                                {SyncPairIcon("Bede_DC", 3)}
                                {SyncPairIcon("Darach", 4)}
                                {SyncPairIcon("Plumeria", 4)}
                                {SyncPairIcon("Gladion_DC", 4)}
                                {SyncPairIcon("Phoebe_BP", 4)}
                                {SyncPairIcon("Oak", 5)}
                                {SyncPairIcon("Lisia", 5)}
                                {SyncPairIcon("Skyla_H", 5)}
                            </div>
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Cheren_DC", 1)}
                                {SyncPairIcon("Dawn", 1)}
                                {SyncPairIcon("Lacey_TL", 1)}
                                {SyncPairIcon("Rose_BP", 2)}
                                {SyncPairIcon("Brycen_BP", 2)}
                                {SyncPairIcon("Wikstrom", 2)}
                                {SyncPairIcon("Irida_TL", 2)}
                                {SyncPairIcon("Kukui", 2)}
                                {SyncPairIcon("Nanu", 2)}
                                {SyncPairIcon("Cheren_TL", 3)}
                                {SyncPairIcon("Rosa_TL", 4)}
                                {SyncPairIcon("Silver_TL", 4)}
                                {SyncPairIcon("Misty_SS", 4)}
                            </div>
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Eve", 1)}
                                {SyncPairIcon("Grimsley", 1)}
                                {SyncPairIcon("Winona", 2)}
                                {SyncPairIcon("Silver_DC", 2)}
                                {SyncPairIcon("Linnea", 2)}
                                {SyncPairIcon("Nemona_DC", 2)}
                                {SyncPairIcon("May_Sp", 2)}
                                {SyncPairIcon("Falkner_BP", 2)}
                                {SyncPairIcon("Marnie_DC", 3)}
                                {SyncPairIcon("Morty_F", 3)}
                                {SyncPairIcon("Volkner_TL", 3)}
                                {SyncPairIcon("Barry_DC", 3)}
                                {SyncPairIcon("Will_BP", 3)}
                                {SyncPairIcon("Acerola_F", 4)}
                            </div>
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            <div className="tier-content">
                                {SyncPairIcon("Brawly", 1)}
                                {SyncPairIcon("Marshal", 1)}
                                {SyncPairIcon("Wallace", 1)}
                                {SyncPairIcon("Blaine", 2)}
                                {SyncPairIcon("Candice", 2)}
                                {SyncPairIcon("Lillie_TL", 3)}
                                {SyncPairIcon("Janine", 3)}
                                {SyncPairIcon("Misty", 3)}
                                {SyncPairIcon("Lance_TL", 3)}
                                {SyncPairIcon("Sophocles", 4)}
                                {SyncPairIcon("Steven_TL", 4)}
                                {SyncPairIcon("Brock", 4)}
                                {SyncPairIcon("Calem", 4)}
                                {SyncPairIcon("CrasherWake", 5)}
                            </div>
                        </div>
                        <div className="dminus-row tierlist-row">
                            <div className="tier-title">D-</div>
                            <div className="tier-content">
                                {SyncPairIcon("PlayerM_Pikachu", 1)}
                                {SyncPairIcon("Erika", 1)}
                                {SyncPairIcon("Lucy", 2)}
                                {SyncPairIcon("LtSurge", 2)}
                                {SyncPairIcon("Petey", 2)}
                                {SyncPairIcon("Grant", 3)}
                                {SyncPairIcon("Clay", 3)}
                                {SyncPairIcon("Brock_SS", 3)}
                                {SyncPairIcon("Norman", 4)}
                                {SyncPairIcon("Flannery", 4)}
                                {SyncPairIcon("Lorelei", 4)}
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
                                {SyncPairIcon("Gloria_A", 1)}
                                {SyncPairIcon("Korrina_Arc", 2, "new-pair")}
                                {SyncPairIcon("Silver_Arc", 3)}
                                {SyncPairIcon("Blue_NC", 4)}
                                {SyncPairIcon("Steven_Arc", 5)}
                            </div>
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Giovanni_SSA", 1)}
                                {SyncPairIcon("Rosa_NC", 1)}
                                {SyncPairIcon("Carmine", 1)}
                                {SyncPairIcon("Bede_Alt", 1, "buffed-pair")}
                                {SyncPairIcon("Larry_SC", 2)}
                                {SyncPairIcon("Atticus", 2)}
                                {SyncPairIcon("Lana_NY", 2)}
                                {SyncPairIcon("Mai", 2)}
                                {SyncPairIcon("Sonia_Aca", 2, "new-pair")}
                                {SyncPairIcon("Kris_Aca", 1)}
                                {SyncPairIcon("Chase", 3)}
                                {SyncPairIcon("Jasmine_Aca", 4)}
                                {SyncPairIcon("Mina_SS", 4)}
                                {SyncPairIcon("Cynthia_SSA", 4)}
                                {SyncPairIcon("Bede_NC", 4)}
                            </div>
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            <div className="tier-content">
                                {SyncPairIcon("Eri", 1)}
                                {SyncPairIcon("Penny", 1)}
                                {SyncPairIcon("Lacey_F", 1)}
                                {SyncPairIcon("Morty_SS", 1)}
                                {SyncPairIcon("Kris_SS", 2)}
                                {SyncPairIcon("Melony_Var", 2)}
                                {SyncPairIcon("Florian_Aca", 2)}
                                {SyncPairIcon("Elaine", 2)}
                                {SyncPairIcon("Iris_Aca", 3)}
                                {SyncPairIcon("Cynthia_S", 3)}
                                {SyncPairIcon("Bugsy_H", 3)}
                                {SyncPairIcon("Milo", 3)}
                                {SyncPairIcon("Acerola_S", 4)}
                                {SyncPairIcon("Iono", 4)}
                                {SyncPairIcon("Ortega", 4)}
                            </div>
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Rika", 1)}
                                {SyncPairIcon("Acerola_SS", 1)}
                                {SyncPairIcon("Kabu", 2)}
                                {SyncPairIcon("Grusha", 2)}
                                {SyncPairIcon("Miriam", 2)}
                                {SyncPairIcon("Calem_NC", 3)}
                                {SyncPairIcon("Mallow_Var", 3)}
                                {SyncPairIcon("Anabel", 4)}
                                {SyncPairIcon("Red", 4)}
                                {SyncPairIcon("Bellelba", 4)}
                                {SyncPairIcon("Brendan_SS", 5)}
                                {SyncPairIcon("Fantina_Gym", 5)}
                                {SyncPairIcon("Raihan_NY", 5)}
                                {SyncPairIcon("Arven", 5, "buffed-pair")}
                                {SyncPairIcon("SamsonOak", 5)}
                            </div>
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Elio_Alt", 1)}
                                {SyncPairIcon("Dawn_SS", 1)}
                                {SyncPairIcon("Roxie_Gym", 1)}
                                {SyncPairIcon("Grusha_Gym", 2)}
                                {SyncPairIcon("Cilan", 2)}
                                {SyncPairIcon("Falkner_Var", 2)}
                                {SyncPairIcon("Argenta", 2)}
                                {SyncPairIcon("Blue_SS", 3)}
                                {SyncPairIcon("Shauna_SC", 3)}
                                {SyncPairIcon("Jasmine_H", 3)}
                                {SyncPairIcon("Melony", 4)}
                                {SyncPairIcon("Elio", 4)}
                                {SyncPairIcon("Sycamore", 4)}
                                {SyncPairIcon("Falkner", 4)}
                                {SyncPairIcon("Leaf", 4)}
                            </div>
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            <div className="tier-content">
                                {SyncPairIcon("Steven_SC", 1)}
                                {SyncPairIcon("Volo", 1)}
                                {SyncPairIcon("Aaron", 1)}
                                {SyncPairIcon("Victor_Pal", 1)}
                                {SyncPairIcon("Sawyer_Var", 2)}
                                {SyncPairIcon("Sonia", 2)}
                                {SyncPairIcon("Lillie_SC", 2)}
                                {SyncPairIcon("Winona_Gym", 2)}
                                {SyncPairIcon("Whitney_Gym", 3)}
                                {SyncPairIcon("Kabu_Gym", 3)}
                                {SyncPairIcon("Ingo", 3)}
                                {SyncPairIcon("BallGuy", 4)}
                                {SyncPairIcon("Burgh_Sp", 4)}
                                {SyncPairIcon("Phoebe_F", 4)}
                                {SyncPairIcon("Gordie_Var", 4)}
                            </div>
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Juliana_Ev", 1)}
                                {SyncPairIcon("Hop", 1, "buffed-pair")}
                                {SyncPairIcon("Mallow_Pal", 1)}
                                {SyncPairIcon("PlayerM_Buzzwole", 1)}
                                {SyncPairIcon("Tierno", 2)}
                                {SyncPairIcon("Oak_Ev", 3)}
                                {SyncPairIcon("Lorelei_Var", 3)}
                                {SyncPairIcon("Clair_NY", 3)}
                                {SyncPairIcon("Jasmine_SC", 4)}
                                {SyncPairIcon("Morgan", 4)}
                                {SyncPairIcon("Guzma_Var", 4)}
                                {SyncPairIcon("Proton", 5)}
                                {SyncPairIcon("Bea_Pal", 5)}
                            </div>
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Brock_Gym", 1)}
                                {SyncPairIcon("Lyra_SC", 1)}
                                {SyncPairIcon("Sycamore_H", 1)}
                                {SyncPairIcon("Allister_F", 2)}
                                {SyncPairIcon("Caitlin_F", 2)}
                                {SyncPairIcon("Iris_TL", 2)}
                                {SyncPairIcon("Kiawe", 2)}
                                {SyncPairIcon("Bruno_Var", 2)}
                                {SyncPairIcon("Korrina_Gym", 3)}
                                {SyncPairIcon("Lana_Gym", 3)}
                                {SyncPairIcon("Hilda_TL", 4)}
                                {SyncPairIcon("Piers", 4)}
                                {SyncPairIcon("Shauna", 4)}
                                {SyncPairIcon("Hilbert", 4)}
                            </div>
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            <div className="tier-content">
                                {SyncPairIcon("Thorton_BP", 1)}
                                {SyncPairIcon("Agatha_Var", 1)}
                                {SyncPairIcon("Hilda_S", 1)}
                                {SyncPairIcon("Carmine_TL", 2)}
                                {SyncPairIcon("Iono_TL", 2)}
                                {SyncPairIcon("Leon_TL", 2)}
                                {SyncPairIcon("Lyra", 3)}
                                {SyncPairIcon("Tina", 3)}
                                {SyncPairIcon("Kabu_TL", 3)}
                                {SyncPairIcon("Larry_TL", 4)}
                                {SyncPairIcon("Blue_TL", 4)}
                                {SyncPairIcon("Steven_Ev", 4)}
                                {SyncPairIcon("Arven_TL", 4)}
                            </div>
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Lana_TL", 1)}
                                {SyncPairIcon("PlayerM_Mesprit", 1)}
                                {SyncPairIcon("PlayerM_Cobalion", 1)}
                                {SyncPairIcon("Sabrina_NY", 2)}
                                {SyncPairIcon("Steven_SS_Def", 2)}
                                {SyncPairIcon("Barry_BP", 3)}
                                {SyncPairIcon("Dawn_TL", 3)}
                                {SyncPairIcon("Gladion_TL", 3)}
                                {SyncPairIcon("Morty_BP", 3)}
                                {SyncPairIcon("Skyla", 3)}
                                {SyncPairIcon("Lana", 4)}
                                {SyncPairIcon("Clemont_BP", 5)}
                                {SyncPairIcon("Cheryl_BP", 5)}
                            </div>
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Glacia", 1)}
                                {SyncPairIcon("Evelyn", 1)}
                                {SyncPairIcon("Dana", 1)}
                                {SyncPairIcon("Wally_TL", 2)}
                                {SyncPairIcon("Olivia_BP", 2)}
                                {SyncPairIcon("Ingo_TL", 2, "new-pair")}
                                {SyncPairIcon("Rachel_Var", 2)}
                                {SyncPairIcon("Sabrina", 2)}
                                {SyncPairIcon("Misty_Ev", 2)}
                                {SyncPairIcon("Lenora", 3)}
                                {SyncPairIcon("Piers_TL", 3)}
                                {SyncPairIcon("Trevor", 3)}
                                {SyncPairIcon("Nita", 4)}
                                {SyncPairIcon("Elesa_SS", 4)}
                            </div>
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            <div className="tier-content">
                                {SyncPairIcon("Sawyer", 1)}
                                {SyncPairIcon("Cheryl", 2)}
                                {SyncPairIcon("PlayerM_Raikou", 2)}
                                {SyncPairIcon("PlayerM_Alcremie", 2)}
                                {SyncPairIcon("Maylene", 3)}
                                {SyncPairIcon("Jasmine", 3)}
                                {SyncPairIcon("Cynthia_TL", 3)}
                                {SyncPairIcon("Elesa_TL", 3)}
                                {SyncPairIcon("Flint_BP", 4)}
                                {SyncPairIcon("Lillie_NY", 4)}
                                {SyncPairIcon("Teddy", 4)}
                                {SyncPairIcon("Lusamine_TL", 5)}
                            </div>
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Dawn_Pal", 1)}
                                {SyncPairIcon("PlayerM_Registeel", 1)}
                                {SyncPairIcon("LtSurge_BP", 2)}
                                {SyncPairIcon("Giovanni_TL", 2)}
                                {SyncPairIcon("Raihan_TL", 2)}
                                {SyncPairIcon("Giovanni_Ev", 3)}
                                {SyncPairIcon("Morty_TL", 3)}
                                {SyncPairIcon("Bugsy_Ev", 3)}
                                {SyncPairIcon("Phoebe", 4)}
                                {SyncPairIcon("Acerola_TL", 4)}
                                {SyncPairIcon("Adaman_TL", 4)}
                                {SyncPairIcon("PlayerM_Regirock", 4)}
                            </div>
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Leaf_TL", 1)}
                                {SyncPairIcon("Lillie", 1)}
                                {SyncPairIcon("Jasmine_TL", 2)}
                                {SyncPairIcon("Roxanne", 2)}
                                {SyncPairIcon("Rachel", 3)}
                                {SyncPairIcon("Liza", 3)}
                                {SyncPairIcon("Rosa", 3)}
                                {SyncPairIcon("Janine_BP", 3)}
                                {SyncPairIcon("Cheren", 3)}
                                {SyncPairIcon("Erika_H", 3)}
                                {SyncPairIcon("Rosa_H", 4)}
                                {SyncPairIcon("Marley", 4)}
                                {SyncPairIcon("PlayerM_Torchic", 4)}
                            </div>
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            <div className="tier-content">
                                {SyncPairIcon("Acerola", 1)}
                                {SyncPairIcon("Kali", 1)}
                                {SyncPairIcon("Drake", 2)}
                                {SyncPairIcon("Marlon", 2)}
                                {SyncPairIcon("Ramos", 3)}
                                {SyncPairIcon("Thorton", 3)}
                                {SyncPairIcon("Viola", 3)}
                                {SyncPairIcon("Erika_BP", 4)}
                                {SyncPairIcon("Wulfric", 5)}
                                {SyncPairIcon("Brycen", 5)}
                                {SyncPairIcon("James", 5)}
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