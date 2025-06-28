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
            delete selectedChangelogFilters[key]
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

    function filterSearch() {
        $('.not-found').removeClass('not-found');

        let foundAnyPairs = false;
        const iterableLists = [selectedTypes, selectedTrainers, selectedRegions, selectedThemes, selectedAcquisitionMethods, selectedChangelogFilters, selectedRoles, selectedEXRs];
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
                        {SyncPairIcon("Cynthia_S", "black", "filter-excluded")}
                        {SyncPairIcon("Leon_TL", "black", "filter-excluded")}
                        {SyncPairIcon("Skyla_S", "black", "filter-excluded")}
                        {SyncPairIcon("Silver_Arc", "black", "filter-excluded")}
                        {SyncPairIcon("Ethan_Arc", "black", "filter-excluded")}
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
                        <div className="other-section">
                            <div className="filter-option">
                                <input type="checkbox" id="new-ex-changes" onChange={() => toggleChangelog("border-blue")}/>
                                <label htmlFor="new-ex-changes">New sync pairs since the last update:</label>
                            </div>
                            <div className="filter-option">
                                <input type="checkbox" id="grid-changes" onChange={() => toggleChangelog("border-purple")}/>
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
                                {SyncPairIcon("Elio_NC", "red", "border-blue")}
                                {SyncPairIcon("Selene_NC", "orange", "border-blue")}
                                {SyncPairIcon("Florian", "orange")}
                                {SyncPairIcon("Leon_Arc", "orange")}
                                {SyncPairIcon("Alder_Arc", "orange")}
                                {SyncPairIcon("Red_NC", "yellow")}
                                {SyncPairIcon("Cheren_NC", "yellow")}
                                {SyncPairIcon("Erika_Pal", "green")}
                            </div>
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Lance_Arc", "red")}
                                {SyncPairIcon("Marnie_NC", "red")}
                                {SyncPairIcon("Giacomo", "red")}
                                {SyncPairIcon("Ash", "orange")}
                                {SyncPairIcon("Gladion_SS", "orange")}
                                {SyncPairIcon("Hop_Var2", "orange")}
                                {SyncPairIcon("Juliana", "yellow")}
                                {SyncPairIcon("Bede_SS", "yellow")}
                                {SyncPairIcon("Mela", "yellow")}
                                {SyncPairIcon("Hilda_SS", "yellow")}
                                {SyncPairIcon("Lysandre_SS", "yellow")}
                                {SyncPairIcon("Steven_SS_Att", "green")}
                                {SyncPairIcon("Lear", "green")}
                            </div>
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            <div className="tier-content">
                                {SyncPairIcon("Klara", "red")}
                                {SyncPairIcon("Selene_Alt", "red")}
                                {SyncPairIcon("Irida_SC", "red")}
                                {SyncPairIcon("Serena_SS", "red")}
                                {SyncPairIcon("Dexio", "orange")}
                                {SyncPairIcon("Jacq", "orange")}
                                {SyncPairIcon("Piers_SS", "yellow")}
                                {SyncPairIcon("Poppy", "yellow")}
                                {SyncPairIcon("Rose", "yellow")}
                                {SyncPairIcon("Barry_SC", "green")}
                                {SyncPairIcon("Adaman_SC", "green")}
                                {SyncPairIcon("Cynthia", "green")}
                            </div>
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Gloria_Alt", "red")}
                                {SyncPairIcon("Hilbert_SS", "red")}
                                {SyncPairIcon("Palmer", "red")}
                                {SyncPairIcon("Emma", "orange")}
                                {SyncPairIcon("Sina", "orange")}
                                {SyncPairIcon("Eusine", "orange")}
                                {SyncPairIcon("Red_SS", "orange")}
                                {SyncPairIcon("Lucas", "yellow")}
                                {SyncPairIcon("Lusamine_SS", "yellow")}
                                {SyncPairIcon("Alder", "yellow")}
                                {SyncPairIcon("Rei_Aca", "green")}
                                {SyncPairIcon("Lance", "green")}
                            </div>
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Archie", "red")}
                                {SyncPairIcon("Gladion", "red")}
                                {SyncPairIcon("Candice_Pal", "red")}
                                {SyncPairIcon("Giovanni_Var", "orange")}
                                {SyncPairIcon("Maxie", "orange")}
                                {SyncPairIcon("Cynthia_SS", "orange")}
                                {SyncPairIcon("Blue_Cl", "orange")}
                                {SyncPairIcon("Emmet", "orange")}
                                {SyncPairIcon("Olympia", "yellow")}
                                {SyncPairIcon("Diantha_SC", "yellow")}
                                {SyncPairIcon("Korrina_SS", "green")}
                                {SyncPairIcon("Gloria", "green")}
                            </div>
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            <div className="tier-content">
                                {SyncPairIcon("Iono_F", "red")}
                                {SyncPairIcon("Liza_S", "red")}
                                {SyncPairIcon("Lillie_A", "red")}
                                {SyncPairIcon("Leon", "orange")}
                                {SyncPairIcon("Steven_A", "orange")}
                                {SyncPairIcon("Giovanni_SS", "yellow")}
                                {SyncPairIcon("Lisia_NY", "yellow")}
                                {SyncPairIcon("Victor", "yellow")}
                                {SyncPairIcon("N", "yellow")}
                                {SyncPairIcon("Diantha", "yellow")}
                                {SyncPairIcon("Ethan_SS", "green")}
                                {SyncPairIcon("Raihan", "green")}
                            </div>
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Leon_SS", "red")}
                                {SyncPairIcon("Sonia_SC", "red")}
                                {SyncPairIcon("N_S", "red")}
                                {SyncPairIcon("Emmet_SC", "orange")}
                                {SyncPairIcon("Hugh", "orange")}
                                {SyncPairIcon("Erika_SS", "orange")}
                                {SyncPairIcon("Silver", "orange")}
                                {SyncPairIcon("Riley", "yellow")}
                                {SyncPairIcon("Hilda", "yellow")}
                                {SyncPairIcon("Grimsley_SS", "yellow")}
                                {SyncPairIcon("Kris", "green")}
                                {SyncPairIcon("Elesa", "green")}
                            </div>
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Blue", "red")}
                                {SyncPairIcon("Hilda_SC", "red")}
                                {SyncPairIcon("Iris_F", "red")}
                                {SyncPairIcon("May", "orange")}
                                {SyncPairIcon("Leon_H", "orange")}
                                {SyncPairIcon("Volkner_NY", "orange")}
                                {SyncPairIcon("PlayerM_Solgaleo", "orange")}
                                {SyncPairIcon("Chuck", "orange")}
                                {SyncPairIcon("Bea", "yellow")}
                                {SyncPairIcon("Hala", "yellow")}
                                {SyncPairIcon("Ryuki", "green")}
                                {SyncPairIcon("Cyrus", "green")}
                            </div>
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            <div className="tier-content">
                                {SyncPairIcon("Caitlin", "red")}
                                {SyncPairIcon("Giovanni", "red")}
                                {SyncPairIcon("Brendan", "red")}
                                {SyncPairIcon("Wally", "orange")}
                                {SyncPairIcon("Allister", "orange")}
                                {SyncPairIcon("Clavell_Ev", "yellow")}
                                {SyncPairIcon("Lear_TL", "yellow")}
                                {SyncPairIcon("Nessa", "yellow")}
                                {SyncPairIcon("Sidney", "green")}
                                {SyncPairIcon("Guzma", "green")}
                                {SyncPairIcon("Mallow", "green", "border-purple")}
                                {SyncPairIcon("Skyla_TL", "green")}
                            </div>
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Burgh", "red")}
                                {SyncPairIcon("Morty", "red")}
                                {SyncPairIcon("Fantina", "red")}
                                {SyncPairIcon("Hilbert_F", "orange")}
                                {SyncPairIcon("Guzma_SC", "orange")}
                                {SyncPairIcon("Lusamine_BP", "orange")}
                                {SyncPairIcon("Zinnia", "orange")}
                                {SyncPairIcon("Olivia", "yellow")}
                                {SyncPairIcon("Valerie_BP", "yellow")}
                                {SyncPairIcon("Lusamine", "yellow")}
                                {SyncPairIcon("Selene", "green")}
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
                                {SyncPairIcon("Zinnia_BP", "yellow")}
                                {SyncPairIcon("Ethan", "yellow")}
                                {SyncPairIcon("Volo_TL", "green")}
                                {SyncPairIcon("Steven_S", "green")}
                            </div>
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            <div className="tier-content">
                                {SyncPairIcon("Hau_DC", "red")}
                                {SyncPairIcon("Candice_BP", "red")}
                                {SyncPairIcon("Koga", "red")}
                                {SyncPairIcon("Elesa_Pal", "orange")}
                                {SyncPairIcon("Kahili", "orange")}
                                {SyncPairIcon("Sophocles_BP", "orange")}
                                {SyncPairIcon("Gloria_S", "yellow")}
                                {SyncPairIcon("Siebold", "yellow")}
                                {SyncPairIcon("Bugsy", "yellow")}
                                {SyncPairIcon("Nate", "yellow")}
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
                                {SyncPairIcon("Sycamore_TL", "red")}
                                {SyncPairIcon("Korrina", "orange")}
                                {SyncPairIcon("Clair", "orange")}
                                {SyncPairIcon("Valerie", "orange")}
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
                                {SyncPairIcon("Red_SST", "orange")}
                                {SyncPairIcon("Leaf_NC", "orange")}
                                {SyncPairIcon("Brendan_NC", "orange")}
                                {SyncPairIcon("Elesa_SSA", "orange")}
                                {SyncPairIcon("Bianca_NC", "yellow")}
                                {SyncPairIcon("Lear_SS", "yellow")}
                                {SyncPairIcon("N_Arc", "green")}
                                {SyncPairIcon("Dahlia", "green")}
                            </div>
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Ethan_Var", "red")}
                                {SyncPairIcon("Serena_NC", "red")}
                                {SyncPairIcon("Oleana", "red")}
                                {SyncPairIcon("Roxie_SS", "red")}
                                {SyncPairIcon("Lillie_H", "orange")}
                                {SyncPairIcon("Wally_SS", "orange")}
                                {SyncPairIcon("Red_Mix", "yellow")}
                                {SyncPairIcon("Irida", "yellow")}
                                {SyncPairIcon("Adaman", "yellow")}
                                {SyncPairIcon("Geeta", "green", "border-purple")}
                                {SyncPairIcon("Lyra_SS", "green")}
                                {SyncPairIcon("Silver_NC", "green")}
                                {SyncPairIcon("Lillie_Ev", "green")}
                            </div>
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            <div className="tier-content">
                                {SyncPairIcon("Lucas_Mix", "red")}
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
                                {SyncPairIcon("Hop_NC", "green")}
                            </div>
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Ingo_SS", "red")}
                                {SyncPairIcon("Morty_Aca", "red")}
                                {SyncPairIcon("Skyla_A", "red")}
                                {SyncPairIcon("Nate_NC", "orange")}
                                {SyncPairIcon("Nemona_SS", "orange")}
                                {SyncPairIcon("Leon_Alt", "yellow")}
                                {SyncPairIcon("Marnie_Var", "yellow")}
                                {SyncPairIcon("Bede_Var", "yellow")}
                                {SyncPairIcon("Emmet_SS", "yellow")}
                                {SyncPairIcon("Rei", "yellow")}
                                {SyncPairIcon("Gardenia_S", "green")}
                                {SyncPairIcon("Hop_Var", "green")}
                                {SyncPairIcon("Lana_SS", "green")}
                            </div>
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            <div className="tier-content">
                                {SyncPairIcon("N_SS", "red")}
                                {SyncPairIcon("Roxanne_F", "red")}
                                {SyncPairIcon("Shauntal_F", "red")}
                                {SyncPairIcon("Rosa_Aca", "red")}
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
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            <div className="tier-content">
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
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Viola_H", "red")}
                                {SyncPairIcon("Hilbert_Var", "orange")}
                                {SyncPairIcon("Selene_Var", "orange")}
                                {SyncPairIcon("Lucas_Var", "orange")}
                                {SyncPairIcon("BrycenMan", "orange")}
                                {SyncPairIcon("Kris_Var", "yellow")}
                                {SyncPairIcon("Noland_Var", "yellow")}
                                {SyncPairIcon("Bede", "yellow")}
                                {SyncPairIcon("Clive", "yellow", "border-blue")}
                                {SyncPairIcon("Marnie_Aca", "green")}
                                {SyncPairIcon("Greta", "green")}
                                {SyncPairIcon("Tate_S", "green")}
                            </div>
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Thorton_Var", "red")}
                                {SyncPairIcon("Ariana", "red")}
                                {SyncPairIcon("Leaf_SS", "orange")}
                                {SyncPairIcon("Steven_SS_Spe", "orange")}
                                {SyncPairIcon("Paulo", "orange")}
                                {SyncPairIcon("Nemona", "orange")}
                                {SyncPairIcon("Lysandre", "orange")}
                                {SyncPairIcon("Bianca", "yellow")}
                                {SyncPairIcon("Steven_SS", "yellow")}
                                {SyncPairIcon("Colress", "yellow")}
                                {SyncPairIcon("Lance_Var", "green")}
                                {SyncPairIcon("Kiawe_Var", "green")}
                                {SyncPairIcon("Marnie", "green")}
                            </div>
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            <div className="tier-content">
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
                                {SyncPairIcon("Grimsley_Kimono", "green")}
                            </div>
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            <div className="tier-content">
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
                                {SyncPairIcon("Bede_DC", "orange", "border-blue")}
                                {SyncPairIcon("Darach", "orange")}
                                {SyncPairIcon("Kukui", "orange", "border-purple")}
                                {SyncPairIcon("Blossom", "orange")}
                                {SyncPairIcon("Plumeria", "yellow")}
                                {SyncPairIcon("Skyla_H", "yellow")}
                                {SyncPairIcon("Whitney", "yellow")}
                                {SyncPairIcon("Gladion_DC", "yellow")}
                                {SyncPairIcon("Oak", "green", "border-purple")}
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
                                {SyncPairIcon("Candice", "red")}
                                {SyncPairIcon("Blaine", "red")}
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
                                {SyncPairIcon("Erika", "red")}
                                {SyncPairIcon("Calem", "red")}
                                {SyncPairIcon("Lucy", "red")}
                                {SyncPairIcon("LtSurge", "orange")}
                                {SyncPairIcon("Petey", "orange")}
                                {SyncPairIcon("Flannery", "orange")}
                                {SyncPairIcon("Grant", "yellow")}
                                {SyncPairIcon("Clay", "yellow")}
                                {SyncPairIcon("Molayne", "yellow")}
                                {SyncPairIcon("Brock_SS", "yellow")}
                                {SyncPairIcon("PlayerM_Pikachu", "green")}
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
                                {SyncPairIcon("Blue_NC", "red")}
                                {SyncPairIcon("Giovanni_SSA", "orange")}
                                {SyncPairIcon("Rosa_NC", "orange")}
                                {SyncPairIcon("Chase", "yellow")}
                                {SyncPairIcon("Mina_SS", "green")}
                            </div>
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Larry_SC", "red")}
                                {SyncPairIcon("Melony_Var", "red")}
                                {SyncPairIcon("Morty_SS", "red")}
                                {SyncPairIcon("Atticus", "red")}
                                {SyncPairIcon("Elaine", "orange")}
                                {SyncPairIcon("Cynthia_SSA", "orange")}
                                {SyncPairIcon("Penny", "orange")}
                                {SyncPairIcon("Eri", "yellow")}
                                {SyncPairIcon("Florian_Aca", "yellow")}
                                {SyncPairIcon("Kris_SS", "green")}
                                {SyncPairIcon("Milo", "green")}
                                {SyncPairIcon("Acerola_SS", "green")}
                                {SyncPairIcon("Ortega", "green")}
                            </div>
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            <div className="tier-content">
                                {SyncPairIcon("Iono", "red")}
                                {SyncPairIcon("Grusha", "red")}
                                {SyncPairIcon("Bugsy_H", "red")}
                                {SyncPairIcon("Kabu", "orange")}
                                {SyncPairIcon("Acerola_S", "orange")}
                                {SyncPairIcon("Red", "yellow")}
                                {SyncPairIcon("Rika", "yellow")}
                                {SyncPairIcon("Dawn_SS", "yellow")}
                                {SyncPairIcon("Argenta", "yellow")}
                                {SyncPairIcon("Bede_NC", "green")}
                                {SyncPairIcon("Anabel", "green")}
                                {SyncPairIcon("Bellelba", "green")}
                                {SyncPairIcon("Calem_NC", "green")}
                            </div>
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Raihan_NY", "red")}
                                {SyncPairIcon("Brendan_SS", "red")}
                                {SyncPairIcon("SamsonOak", "red", "border-blue")}
                                {SyncPairIcon("Elio_Alt", "orange")}
                                {SyncPairIcon("Mallow_Var", "orange")}
                                {SyncPairIcon("Falkner_Var", "orange")}
                                {SyncPairIcon("Arven", "orange")}
                                {SyncPairIcon("Blue_SS", "yellow")}
                                {SyncPairIcon("Shauna_SC", "yellow")}
                                {SyncPairIcon("Volo", "yellow")}
                                {SyncPairIcon("Jasmine_H", "yellow")}
                                {SyncPairIcon("Sycamore", "green")}
                                {SyncPairIcon("Aaron", "green")}
                            </div>
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Melony", "red")}
                                {SyncPairIcon("Elio", "red")}
                                {SyncPairIcon("Steven_SC", "red")}
                                {SyncPairIcon("Ingo", "orange")}
                                {SyncPairIcon("Sonia", "orange")}
                                {SyncPairIcon("Victor_Pal", "orange")}
                                {SyncPairIcon("Leaf", "orange")}
                                {SyncPairIcon("BallGuy", "orange")}
                                {SyncPairIcon("Sawyer_Var", "yellow")}
                                {SyncPairIcon("Lillie_SC", "yellow")}
                                {SyncPairIcon("Kabu_Gym", "yellow")}
                                {SyncPairIcon("Burgh_Sp", "green")}
                                {SyncPairIcon("Phoebe_F", "green")}
                            </div>
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            <div className="tier-content">
                                {SyncPairIcon("Gordie_Var", "red", "border-blue")}
                                {SyncPairIcon("Grusha_Gym", "red")}
                                {SyncPairIcon("Whitney_Gym", "red")}
                                {SyncPairIcon("Winona_Gym", "orange")}
                                {SyncPairIcon("Hop", "orange")}
                                {SyncPairIcon("Mallow_Pal", "orange")}
                                {SyncPairIcon("Brock_Gym", "yellow")}
                                {SyncPairIcon("Clair_NY", "yellow")}
                                {SyncPairIcon("Tierno", "yellow")}
                                {SyncPairIcon("Jasmine_SC", "yellow")}
                                {SyncPairIcon("Proton", "yellow")}
                                {SyncPairIcon("Oak_Ev", "green")}
                                {SyncPairIcon("Lorelei_Var", "green")}
                            </div>
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Bea_Pal", "red")}
                                {SyncPairIcon("Lyra_SC", "red")}
                                {SyncPairIcon("Allister_F", "red")}
                                {SyncPairIcon("Guzma_Var", "orange")}
                                {SyncPairIcon("Morgan", "orange")}
                                {SyncPairIcon("Sycamore_H", "orange")}
                                {SyncPairIcon("Caitlin_F", "orange")}
                                {SyncPairIcon("Kiawe", "yellow")}
                                {SyncPairIcon("Agatha_Var", "yellow")}
                                {SyncPairIcon("Korrina_Gym", "green")}
                                {SyncPairIcon("Bruno_Var", "green")}
                                {SyncPairIcon("Iris_TL", "green")}
                                {SyncPairIcon("Falkner", "green")}
                            </div>
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Piers", "red")}
                                {SyncPairIcon("Shauna", "red")}
                                {SyncPairIcon("Iono_TL", "red")}
                                {SyncPairIcon("Hilda_S", "orange")}
                                {SyncPairIcon("Lana_TL", "orange")}
                                {SyncPairIcon("Lyra", "orange")}
                                {SyncPairIcon("Tina", "yellow")}
                                {SyncPairIcon("Kabu_TL", "yellow")}
                                {SyncPairIcon("Larry_TL", "yellow")}
                                {SyncPairIcon("Blue_TL", "yellow")}
                                {SyncPairIcon("Hilbert", "green")}
                                {SyncPairIcon("Steven_Ev", "green")}
                                {SyncPairIcon("Arven_TL", "green")}
                            </div>
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            <div className="tier-content">
                                {SyncPairIcon("PlayerM_Mesprit", "red")}
                                {SyncPairIcon("PlayerM_Cobalion", "red")}
                                {SyncPairIcon("Gladion_TL", "red")}
                                {SyncPairIcon("Sabrina_NY", "orange")}
                                {SyncPairIcon("Glacia", "orange")}
                                {SyncPairIcon("Steven_SS_Def", "orange")}
                                {SyncPairIcon("Morty_BP", "orange")}
                                {SyncPairIcon("Skyla", "orange")}
                                {SyncPairIcon("Barry_BP", "yellow")}
                                {SyncPairIcon("Lana", "yellow")}
                                {SyncPairIcon("Dawn_TL", "green")}
                                {SyncPairIcon("Clemont_BP", "yellow")}
                                {SyncPairIcon("Cheryl_BP", "green")}
                            </div>
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            <div className="tier-content">
                                {SyncPairIcon("Wally_TL", "red")}
                                {SyncPairIcon("Dana", "red")}
                                {SyncPairIcon("Evelyn", "red")}
                                {SyncPairIcon("Rachel_Var", "orange")}
                                {SyncPairIcon("Nita", "orange")}
                                {SyncPairIcon("Sabrina", "orange")}
                                {SyncPairIcon("PlayerM_Raikou", "orange")}
                                {SyncPairIcon("Elesa_SS", "orange")}
                                {SyncPairIcon("Sawyer", "yellow")}
                                {SyncPairIcon("Lenora", "yellow")}
                                {SyncPairIcon("Trevor", "green")}
                                {SyncPairIcon("Cheryl", "green")}
                                {SyncPairIcon("Olivia_BP", "green")}
                            </div>
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            <div className="tier-content">
                                {SyncPairIcon("PlayerM_Alcremie", "red")}
                                {SyncPairIcon("Misty_Ev", "red")}
                                {SyncPairIcon("Jasmine", "red")}
                                {SyncPairIcon("Cynthia_TL", "orange")}
                                {SyncPairIcon("Elesa_TL", "orange")}
                                {SyncPairIcon("Lillie_NY", "orange")}
                                {SyncPairIcon("Teddy", "orange")}
                                {SyncPairIcon("Dawn_Pal", "yellow")}
                                {SyncPairIcon("PlayerM_Registeel", "yellow")}
                                {SyncPairIcon("LtSurge_BP", "green")}
                                {SyncPairIcon("Giovanni_TL", "green")}
                                {SyncPairIcon("Maylene", "green")}
                            </div>
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            <div className="tier-content">
                                {SyncPairIcon("Raihan_TL", "red")}
                                {SyncPairIcon("Giovanni_Ev", "red")}
                                {SyncPairIcon("Bugsy_Ev", "red")}
                                {SyncPairIcon("Morty_TL", "orange")}
                                {SyncPairIcon("Phoebe", "orange")}
                                {SyncPairIcon("Acerola_TL", "orange")}
                                {SyncPairIcon("Adaman_TL", "yellow")}
                                {SyncPairIcon("PlayerM_Regirock", "yellow")}
                                {SyncPairIcon("Leaf_TL", "yellow")}
                                {SyncPairIcon("Lillie", "green")}
                                {SyncPairIcon("Jasmine_TL", "green")}
                            </div>
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            <div className="tier-content">
                                {SyncPairIcon("Roxanne", "red")}
                                {SyncPairIcon("Janine_BP", "red")}
                                {SyncPairIcon("Rachel", "red")}
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