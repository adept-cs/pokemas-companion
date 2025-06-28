import SyncPairIcon from './syncpair-icon';
import Collapsible from './collapse-section';
import $ from 'jquery';
import Select from 'react-select';
import { useRef } from 'react';

const TierListWAG = () => {
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
                <p>This companion is based on the tierlist currently maintained by WAG. It is separated by roles for easier identification, including Multi pairs where dictated by their EX Role. An updated version of this list can always be found at <a href="https://docs.qq.com/sheet/DSWp2aXZHSUphT1lW?tab=n44aze" target="_blank">this link</a>.
                    WAG has two tiers which are reflected differently on their own resource: the "GOAT" tier (above Master Ball in the Strike chart) and the "The Twins" tier (above Master Ball in the Support chart). These are represented here with the shiny sparkle icon to remain concise.
                </p>
                <Collapsible header="What criteria does this tierlist use?">
                    <p>
                        This tierlist uses the following guidelines to standardize the ranking experience.
                        <ul>
                            <li>
                                This tierlist is context-agnostic, but does weight gamemodes non-uniformly. Rankings focus highly on performance in Ultimate Battles and Champion Stadium, with Legendary Gauntlet, Damage Challenge, and Battle Rally as secondary considerations in that order.
                            </li>
                            <li>
                                Sync pairs are judged somewhat based on the move levels required to function optimally. If a sync pair has a greater reliance on its 3/5, 4/5, or 5/5 sync grid tiles, it's demerited appropriately. Those with stronger kits with less reliance on move levels are the ones in the top rankings.
                            </li>
                            <li>
                                Ranking places a greater emphasis on a sync pair's individual performance before factoring in compositional aspects like partners and typing.
                            </li>
                            <li>
                                The Poké Ball system used to denote specific ranks allow for comparison across individual role lists.
                            </li>
                            <li>
                                This tierlist is updated frequently. WAG provides initial evaluations usually shortly after each update, but revises rankings based on discourse, consulting other resources, and practical results.
                            </li>
                        </ul>
                    </p>
                </Collapsible>
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
                                <input type="checkbox" id="new-ex-changes" onChange={() => toggleChangelog("border-red")}/>
                                <label htmlFor="new-ex-changes">New sync pairs or sync pairs receiving EX/EX Role since the last update</label>
                            </div>
                            <div className="filter-option">
                                <input type="checkbox" id="grid-changes" onChange={() => toggleChangelog("border-blue")}/>
                                <label htmlFor="grid-changes">Sync pairs receiving a grid expansion since the last update</label>
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
                <div className="strike">
                    <div className="header-row">
                        <h3>Strike</h3>
                        <div className="strike-grid">
                            <div className="shiny-row tierlist-row">
                                <img src={`${process.env.PUBLIC_URL}/images/misc/shiny.png`} alt="Shiny" className="tier-title"></img>
                                <div className="tier-content">
                                    {SyncPairIcon("Cynthia_Arc", "")}
                                </div>
                            </div>
                            <div className="masterball-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/master-ball.png`} alt="Master Ball"></img>
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Elio_NC", "")}
                                    {SyncPairIcon("Florian", "")}
                                </div>
                            </div>
                            <div className="ultra3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Red_NC", "")}
                                </div>
                            </div>
                            <div className="ultra2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Bianca_NC", "")}
                                </div>
                            </div>
                            <div className="ultra1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Ash", "")}
                                    {SyncPairIcon("Juliana", "")}
                                </div>
                            </div>
                            <div className="great3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Giacomo", "")}
                                    {SyncPairIcon("Gladion_SS", "")}
                                    {SyncPairIcon("Marnie_NC", "")}
                                    {SyncPairIcon("Silver_NC", "", "border-blue")}
                                    {SyncPairIcon("Nate_NC", "")}
                                </div>
                            </div>
                            <div className="great2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Selene_Alt", "")}
                                    {SyncPairIcon("Poppy", "")}
                                    {SyncPairIcon("Lysandre_SS", "")}
                                    {SyncPairIcon("Hilda_SS", "")}
                                    {SyncPairIcon("Irida_SC", "")}
                                    {SyncPairIcon("Piers_SS", "")}
                                    {SyncPairIcon("Lana_SS", "")}
                                    {SyncPairIcon("Nemona_SS", "")}
                                    {SyncPairIcon("Barry_SC", "")}
                                </div>
                            </div>
                            <div className="great1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Serena_SS", "")}
                                    {SyncPairIcon("Palmer", "")}
                                    {SyncPairIcon("Rose", "")}
                                    {SyncPairIcon("Gloria", "")}
                                    {SyncPairIcon("Emma", "")}
                                    {SyncPairIcon("Adaman_SC", "")}
                                    {SyncPairIcon("Iono_F", "")}
                                    {SyncPairIcon("Candice_Pal", "")}
                                    {SyncPairIcon("Red_SS", "")}
                                    {SyncPairIcon("Lusamine_SS", "")}
                                    {SyncPairIcon("Ethan_SS", "")}
                                </div>
                            </div>
                            <div className="poke3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Lance", "")}
                                    {SyncPairIcon("Cynthia_SS", "")}
                                    {SyncPairIcon("Eusine", "")}
                                    {SyncPairIcon("Giovanni_SS", "")}
                                    {SyncPairIcon("Cynthia", "")}
                                    {SyncPairIcon("Victor", "")}
                                    {SyncPairIcon("Liza_S", "")}
                                    {SyncPairIcon("Leon_SS", "")}
                                    {SyncPairIcon("Blue_Cl", "")}
                                    {SyncPairIcon("Emmet", "")}
                                    {SyncPairIcon("Hugh", "")}
                                </div>
                            </div>
                            <div className="poke2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Diantha", "")}
                                    {SyncPairIcon("Lillie_A", "")}
                                    {SyncPairIcon("Sonia_SC", "")}
                                    {SyncPairIcon("Emmet_SC", "")}
                                    {SyncPairIcon("N", "")}
                                    {SyncPairIcon("Grimsley_SS", "")}
                                    {SyncPairIcon("Blue", "")}
                                    {SyncPairIcon("Kris", "")}
                                    {SyncPairIcon("Leon", "")}
                                    {SyncPairIcon("Lysandre", "")}
                                    {SyncPairIcon("Lisia_NY", "")}
                                    {SyncPairIcon("PlayerM_Solgaleo", "")}
                                    {SyncPairIcon("Chuck", "")}
                                    {SyncPairIcon("Bea", "")}
                                    {SyncPairIcon("Hilda_SC", "")}
                                    {SyncPairIcon("Alder", "")}
                                    {SyncPairIcon("Raihan", "")}
                                </div>
                            </div>
                            <div className="poke1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("N_S", "")}
                                    {SyncPairIcon("Hala", "")}
                                    {SyncPairIcon("Archie", "")}
                                    {SyncPairIcon("Maxie", "")}
                                    {SyncPairIcon("Silver", "")}
                                    {SyncPairIcon("Skyla_TL", "")}
                                    {SyncPairIcon("Steven_A", "")}
                                    {SyncPairIcon("Leon_H", "")}
                                    {SyncPairIcon("Iono_Ev", "")}
                                    {SyncPairIcon("Karen", "")}
                                    {SyncPairIcon("Diantha_TL", "")}
                                    {SyncPairIcon("Guzma_SC", "")}
                                    {SyncPairIcon("Guzma", "")}
                                    {SyncPairIcon("Morty", "")}
                                    {SyncPairIcon("Hilda", "")}
                                    {SyncPairIcon("Elesa", "")}
                                    {SyncPairIcon("Steven", "")}
                                    {SyncPairIcon("Caitlin", "")}
                                    {SyncPairIcon("Brendan", "")}
                                    {SyncPairIcon("Fantina", "")}
                                    {SyncPairIcon("Petrel", "")}
                                    {SyncPairIcon("Volkner_NY", "")}
                                </div>
                            </div>
                            <div className="novice3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Wally", "")}
                                    {SyncPairIcon("Lusamine_BP", "")}
                                    {SyncPairIcon("Giovanni", "")}
                                    {SyncPairIcon("Olivia", "")}
                                    {SyncPairIcon("Hilbert_F", "")}
                                    {SyncPairIcon("Plumeria", "")}
                                    {SyncPairIcon("Valerie_BP", "")}
                                    {SyncPairIcon("Selene", "")}
                                    {SyncPairIcon("Gloria_TL", "")}
                                    {SyncPairIcon("Looker", "")}
                                    {SyncPairIcon("Elesa_Pal", "")}
                                    {SyncPairIcon("Cyrus", "")}
                                    {SyncPairIcon("Blue_Ev", "")}
                                    {SyncPairIcon("Gloria_S", "")}
                                    {SyncPairIcon("Lance_NY", "")}
                                    {SyncPairIcon("Zinnia", "")}
                                    {SyncPairIcon("Burgh", "")}
                                    {SyncPairIcon("Barry", "")}
                                </div>
                            </div>
                            <div className="novice2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Lusamine", "")}
                                    {SyncPairIcon("Steven_S", "")}
                                    {SyncPairIcon("Volo_TL", "")}
                                    {SyncPairIcon("Marshal", "")}
                                    {SyncPairIcon("May_Sp", "")}
                                    {SyncPairIcon("Brock_SS", "")}
                                    {SyncPairIcon("Molayne", "")}
                                    {SyncPairIcon("Tate", "")}
                                    {SyncPairIcon("Wulfric", "")}
                                    {SyncPairIcon("Candice_BP", "")}
                                    {SyncPairIcon("Nate", "", "border-blue")}
                                    {SyncPairIcon("Calem_TL", "")}
                                    {SyncPairIcon("Ethan", "")}
                                    {SyncPairIcon("Roxie", "")}
                                    {SyncPairIcon("Sophocles_BP", "")}
                                    {SyncPairIcon("Hau", "")}
                                    {SyncPairIcon("Shauntal", "")}
                                    {SyncPairIcon("May_TL", "")}
                                    {SyncPairIcon("Gardenia", "")}
                                    {SyncPairIcon("Noland", "")}
                                    {SyncPairIcon("Bugsy", "")}
                                    {SyncPairIcon("Siebold", "")}
                                    {SyncPairIcon("Kahili", "")}
                                    {SyncPairIcon("Sycamore_TL", "")}
                                    {SyncPairIcon("Bruno", "")}
                                    {SyncPairIcon("Hapu", "")}
                                    {SyncPairIcon("Roark", "")}
                                </div>
                            </div>
                            <div className="novice1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Karen_BP", "")}
                                    {SyncPairIcon("Lyra_S", "")}
                                    {SyncPairIcon("Korrina", "")}
                                    {SyncPairIcon("Naomi", "")}
                                    {SyncPairIcon("PlayerM_Pikachu", "")}
                                    {SyncPairIcon("Valerie", "")}
                                    {SyncPairIcon("Clair", "")}
                                    {SyncPairIcon("Iris", "")}
                                    {SyncPairIcon("Pryce", "")}
                                    {SyncPairIcon("Norman", "")}
                                    {SyncPairIcon("Flint", "")}
                                    {SyncPairIcon("Jessie", "")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <div className="header-row">
                        <h3>Tech</h3>
                        <div className="tech-grid">
                            <div className="masterball-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/master-ball.png`} alt="Master Ball"></img>
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Leon_Arc", "")}
                                    {SyncPairIcon("Red_SST", "")}
                                </div>
                            </div>
                            <div className="ultra3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Leaf_NC", "")}
                                    {SyncPairIcon("Dahlia", "")}
                                    {SyncPairIcon("Cheren_NC", "")}
                                </div>
                            </div>
                            <div className="ultra2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("N_Arc", "")}
                                    {SyncPairIcon("Lance_Arc", "")}
                                    {SyncPairIcon("Serena_NC", "")}
                                    {SyncPairIcon("Erika_Pal", "")}
                                </div>
                            </div>
                            <div className="ultra1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Roxie_SS", "")}
                                    {SyncPairIcon("Hau_SS", "")}
                                    {SyncPairIcon("Adaman", "")}
                                    {SyncPairIcon("Wally_SS", "")}
                                    {SyncPairIcon("Oleana", "")}
                                </div>
                            </div>
                            <div className="great3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Irida", "")}
                                    {SyncPairIcon("Diantha_SS", "")}
                                    {SyncPairIcon("Lyra_SS", "")}
                                    {SyncPairIcon("Morty_Aca", "")}
                                    {SyncPairIcon("Lear", "")}
                                    {SyncPairIcon("Skyla_A", "")}
                                    {SyncPairIcon("Roxanne_F", "")}
                                    {SyncPairIcon("Klara", "")}
                                    {SyncPairIcon("N_SS", "")}
                                    {SyncPairIcon("Gloria_Alt", "")}
                                    {SyncPairIcon("Cyrus_SS", "")}
                                    {SyncPairIcon("Hilbert_SS", "")}
                                    {SyncPairIcon("Hop_NC", "")}
                                </div>
                            </div>
                            <div className="great2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Jacq", "")}
                                    {SyncPairIcon("BrycenMan", "")}
                                    {SyncPairIcon("Cynthia_SSR", "")}
                                    {SyncPairIcon("Shauntal_F", "")}
                                    {SyncPairIcon("Leon_Alt", "")}
                                    {SyncPairIcon("Steven_SS", "")}
                                    {SyncPairIcon("Steven_SC", "")}
                                    {SyncPairIcon("Florian_Aca", "")}
                                    {SyncPairIcon("Zinnia_SC", "")}
                                    {SyncPairIcon("N_A", "")}
                                    {SyncPairIcon("Marnie_Pal", "")}
                                </div>
                            </div>
                            <div className="great1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("May_A", "")}
                                    {SyncPairIcon("Elesa_Cl", "")}
                                    {SyncPairIcon("Dexio", "")}
                                    {SyncPairIcon("May_SS", "")}
                                    {SyncPairIcon("Silver_SS", "")}
                                    {SyncPairIcon("Lucas", "")}
                                    {SyncPairIcon("Raihan_A", "")}
                                    {SyncPairIcon("Gloria_Dojo", "")}
                                </div>
                            </div>
                            <div className="poke3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Lyra_Var", "")}
                                    {SyncPairIcon("Elio_Var", "")}
                                    {SyncPairIcon("Selene_Var", "")}
                                    {SyncPairIcon("Hilbert_Var", "")}
                                    {SyncPairIcon("Calem_Var", "")}
                                    {SyncPairIcon("Kris_Var", "")}
                                    {SyncPairIcon("Hilda_Var", "")}
                                    {SyncPairIcon("Lucas_Var", "")}
                                    {SyncPairIcon("Clive", "")}
                                    {SyncPairIcon("Leaf_SS", "")}
                                    {SyncPairIcon("Bede", "")}
                                    {SyncPairIcon("Gordie", "")}
                                    {SyncPairIcon("Whitney_H", "")}
                                    {SyncPairIcon("Ingo_SC", "")}
                                    {SyncPairIcon("Bianca", "")}
                                    {SyncPairIcon("Tate_S", "")}
                                    {SyncPairIcon("Iris_Alt", "")}
                                    {SyncPairIcon("Gladion", "")}
                                    {SyncPairIcon("Colress", "")}
                                    {SyncPairIcon("Korrina_SS", "")}
                                    {SyncPairIcon("Ariana", "")}
                                    {SyncPairIcon("Diantha_SC", "")}
                                </div>
                            </div>
                            <div className="poke2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Courtney", "")}
                                    {SyncPairIcon("Iris_F", "")}
                                    {SyncPairIcon("Volkner", "")}
                                    {SyncPairIcon("Dawn_NY", "")}
                                    {SyncPairIcon("Rosa_SC", "")}
                                    {SyncPairIcon("Bertha", "")}
                                    {SyncPairIcon("May", "")}
                                    {SyncPairIcon("Kiawe_Var", "")}
                                    {SyncPairIcon("Brendan_TL", "")}
                                    {SyncPairIcon("Marnie_Ev", "")}
                                    {SyncPairIcon("Olympia", "")}
                                    {SyncPairIcon("Erika_SS", "")}
                                </div>
                            </div>
                            <div className="poke1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Serena_TL", "")}
                                    {SyncPairIcon("Shauna_TL", "")}
                                    {SyncPairIcon("Lance_Var", "")}
                                    {SyncPairIcon("Lucian", "")}
                                    {SyncPairIcon("MaskedRoyal", "")}
                                    {SyncPairIcon("Marnie", "")}
                                    {SyncPairIcon("Dawn_Pal", "")}
                                    {SyncPairIcon("Serena_Pal", "")}
                                    {SyncPairIcon("Clemont", "")}
                                    {SyncPairIcon("Ghetsis", "")}
                                    {SyncPairIcon("Serena", "")}
                                    {SyncPairIcon("Sidney", "")}
                                    {SyncPairIcon("N_TL", "")}
                                    {SyncPairIcon("Will", "")}
                                    {SyncPairIcon("Grimsley_Kimono", "")}
                                    {SyncPairIcon("Ryuki", "")}
                                    {SyncPairIcon("Marnie_S", "")}
                                    {SyncPairIcon("Lisia", "")}
                                    {SyncPairIcon("Lear_TL", "")}
                                    {SyncPairIcon("Nessa", "")}
                                    {SyncPairIcon("Mallow", "")}
                                </div>
                            </div>
                            <div className="novice3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Misty_SS", "")}
                                    {SyncPairIcon("Nessa_H", "")}
                                    {SyncPairIcon("Agatha", "")}
                                    {SyncPairIcon("Blossom", "")}
                                    {SyncPairIcon("Ramos", "")}
                                    {SyncPairIcon("Winona", "")}
                                    {SyncPairIcon("Acerola", "")}
                                    {SyncPairIcon("Blaine", "", "border-red")}
                                    {SyncPairIcon("Eve", "")}
                                    {SyncPairIcon("Irida_TL", "")}
                                    {SyncPairIcon("Darach", "")}
                                    {SyncPairIcon("Kukui", "")}
                                    {SyncPairIcon("Rose_BP", "")}
                                    {SyncPairIcon("Steven_TL", "")}
                                    {SyncPairIcon("Lillie_TL", "")}
                                    {SyncPairIcon("Skyla_H", "")}
                                    {SyncPairIcon("Allister", "")}
                                    {SyncPairIcon("Drasna", "")}
                                    {SyncPairIcon("Sophocles", "")}
                                    {SyncPairIcon("Thorton", "")}
                                    {SyncPairIcon("Whitney", "")}
                                    {SyncPairIcon("CrasherWake", "")}
                                    {SyncPairIcon("Will_BP", "")}
                                    {SyncPairIcon("Janine", "")}
                                    {SyncPairIcon("Candice", "")}
                                    {SyncPairIcon("Falkner_BP", "")}
                                </div>
                            </div>
                            <div className="novice2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Lucy", "")}
                                    {SyncPairIcon("Erika_BP", "")}
                                    {SyncPairIcon("Brawly", "")}
                                    {SyncPairIcon("Nanu", "")}
                                    {SyncPairIcon("Oak", "")}
                                    {SyncPairIcon("Rika_TL", "")}
                                    {SyncPairIcon("Volkner_TL", "")}
                                    {SyncPairIcon("Cheren_TL", "")}
                                    {SyncPairIcon("Grimsley", "")}
                                    {SyncPairIcon("Wikstrom", "")}
                                    {SyncPairIcon("Zinnia_BP", "")}
                                    {SyncPairIcon("Koga", "")}
                                    {SyncPairIcon("Silver_TL", "")}
                                    {SyncPairIcon("Siebold_H", "")}
                                    {SyncPairIcon("Wallace", "")}
                                    {SyncPairIcon("Marnie_TL", "")}
                                    {SyncPairIcon("Rosa_TL", "")}
                                    {SyncPairIcon("Erika", "")}
                                    {SyncPairIcon("Petey", "")}
                                    {SyncPairIcon("Grant", "")}
                                    {SyncPairIcon("Mina", "")}
                                    {SyncPairIcon("Viola", "")}
                                </div>
                            </div>
                            <div className="novice1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("LtSurge", "")}
                                    {SyncPairIcon("Calem", "")}
                                    {SyncPairIcon("Brock", "")}
                                    {SyncPairIcon("Morty_F", "")}
                                    {SyncPairIcon("Acerola_F", "")}
                                    {SyncPairIcon("Brycen", "")}
                                    {SyncPairIcon("Helena", "")}
                                    {SyncPairIcon("Katherine", "")}
                                    {SyncPairIcon("Flannery", "")}
                                    {SyncPairIcon("James", "")}
                                    {SyncPairIcon("Clay", "")}
                                    {SyncPairIcon("Lorelei", "")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="support">
                    <div className="header-row">
                        <h3>Support</h3>
                        <div className="support-grid">
                            <div className="shiny-row tierlist-row">
                                <img src={`${process.env.PUBLIC_URL}/images/misc/shiny.png`} alt="Shiny" className="tier-title"></img>
                                <div className="tier-content">
                                    {SyncPairIcon("Steven_Arc", "")}
                                    {SyncPairIcon("Blue_NC", "")}
                                </div>
                            </div>
                            <div className="masterball-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/master-ball.png`} alt="Master Ball"></img>
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Giovanni_SSA", "")}
                                    {SyncPairIcon("Rosa_NC", "")}
                                </div>
                            </div>
                            <div className="ultra3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Mina_SS", "")}
                                    {SyncPairIcon("Silver_Arc", "", "border-red")}
                                    {SyncPairIcon("Chase", "")}
                                </div>
                            </div>
                            <div className="ultra2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Larry_SC", "")}
                                    {SyncPairIcon("Atticus", "")}
                                    {SyncPairIcon("Cynthia_S", "", "border-red")}
                                    {SyncPairIcon("Morty_SS", "")}
                                </div>
                            </div>
                            <div className="ultra1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Cynthia_SSA", "")}
                                    {SyncPairIcon("Melony_Var", "")}
                                    {SyncPairIcon("Bugsy_H", "")}
                                    {SyncPairIcon("Kris_SS", "")}
                                    {SyncPairIcon("Eri", "")}
                                </div>
                            </div>
                            <div className="great3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Penny", "")}
                                    {SyncPairIcon("Acerola_SS", "")}
                                    {SyncPairIcon("Rika", "")}
                                    {SyncPairIcon("Milo", "")}
                                    {SyncPairIcon("Elio_Alt", "")}
                                    {SyncPairIcon("Grusha", "")}
                                    {SyncPairIcon("Elaine", "")}
                                    {SyncPairIcon("Ortega", "")}
                                </div>
                            </div>
                            <div className="great2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Red", "")}
                                    {SyncPairIcon("Bede_NC", "")}
                                    {SyncPairIcon("Iono", "")}
                                    {SyncPairIcon("Sycamore", "")}
                                    {SyncPairIcon("Raihan_NY", "")}
                                    {SyncPairIcon("Jasmine_H", "")}
                                    {SyncPairIcon("Bellelba", "")}
                                    {SyncPairIcon("Falkner_Var", "")}
                                    {SyncPairIcon("Acerola_S", "")}
                                    {SyncPairIcon("Calem_NC", "")}
                                    {SyncPairIcon("Arven", "")}
                                    {SyncPairIcon("Melony", "")}
                                    {SyncPairIcon("Lana", "")}
                                    {SyncPairIcon("Grusha_Gym", "")}
                                    {SyncPairIcon("Brendan_SS", "")}
                                    {SyncPairIcon("Winona_Gym", "")}
                                    {SyncPairIcon("Mallow_Var", "")}
                                    {SyncPairIcon("Kabu", "")}
                                    {SyncPairIcon("BallGuy", "")}
                                    {SyncPairIcon("Bea_Pal", "")}
                                </div>
                            </div>
                            <div className="great1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Victor_Pal", "")}
                                    {SyncPairIcon("Anabel", "")}
                                    {SyncPairIcon("Leaf", "")}
                                    {SyncPairIcon("Dawn_SS", "")}
                                    {SyncPairIcon("Argenta", "")}
                                    {SyncPairIcon("Sonia", "")}
                                    {SyncPairIcon("Oak_Ev", "")}
                                    {SyncPairIcon("Whitney_Gym", "")}
                                    {SyncPairIcon("Elio", "")}
                                    {SyncPairIcon("Kabu_Gym", "")}
                                    {SyncPairIcon("Sycamore_H", "")}
                                    {SyncPairIcon("Lillie_SC", "")}
                                    {SyncPairIcon("Shauna_SC", "")}
                                    {SyncPairIcon("Ingo", "")}
                                    {SyncPairIcon("Phoebe_F", "")}
                                    {SyncPairIcon("Burgh_Sp", "")}
                                    {SyncPairIcon("Gordie_Var", "")}
                                    {SyncPairIcon("Brock_Gym", "")}
                                    {SyncPairIcon("Sawyer_Var", "")}
                                    {SyncPairIcon("Blue_SS", "")}
                                    {SyncPairIcon("SamsonOak", "")}
                                    {SyncPairIcon("Lyra_SC", "")}
                                    {SyncPairIcon("Allister_F", "")}
                                    {SyncPairIcon("Korrina_Gym", "")}
                                    {SyncPairIcon("Tierno", "")}
                                    {SyncPairIcon("Shauna", "")}
                                </div>
                            </div>
                            <div className="poke3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Morgan", "")}
                                    {SyncPairIcon("Guzma_Var", "")}
                                    {SyncPairIcon("Lorelei_Var", "")}
                                    {SyncPairIcon("Proton", "")}
                                    {SyncPairIcon("Mallow_Pal", "")}
                                    {SyncPairIcon("Hop", "")}
                                    {SyncPairIcon("Jasmine_SC", "")}
                                    {SyncPairIcon("Trevor", "")}
                                    {SyncPairIcon("Aaron", "")}
                                    {SyncPairIcon("Gladion_TL", "")}
                                    {SyncPairIcon("Dana", "")}
                                    {SyncPairIcon("Barry_BP", "")}
                                    {SyncPairIcon("Wally_TL", "")}
                                    {SyncPairIcon("Lana_TL", "")}
                                    {SyncPairIcon("Kiawe", "")}
                                    {SyncPairIcon("Lenora", "")}
                                </div>
                            </div>
                            <div className="poke2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Nita", "")}
                                    {SyncPairIcon("Clair_NY", "")}
                                    {SyncPairIcon("Agatha_Var", "")}
                                    {SyncPairIcon("Leon_TL", "", "border-red")}
                                    {SyncPairIcon("Caitlin_F", "")}
                                    {SyncPairIcon("Morty_BP", "")}
                                    {SyncPairIcon("Bruno_Var", "")}
                                    {SyncPairIcon("Falkner", "")}
                                    {SyncPairIcon("Piers", "")}
                                    {SyncPairIcon("Dawn_TL", "")}
                                    {SyncPairIcon("Cheryl_BP", "")}
                                    {SyncPairIcon("Rachel_Var", "")}
                                    {SyncPairIcon("PlayerM_Alcremie", "")}
                                    {SyncPairIcon("Iris_TL", "")}
                                    {SyncPairIcon("Blue_TL", "")}
                                    {SyncPairIcon("Hilda_S", "")}
                                    {SyncPairIcon("Kabu_TL", "")}
                                    {SyncPairIcon("Iono_TL", "")}
                                    {SyncPairIcon("Tina", "")}
                                    {SyncPairIcon("Steven_Ev", "")}
                                    {SyncPairIcon("Lillie_NY", "")}
                                    {SyncPairIcon("Lyra", "")}
                                </div>
                            </div>
                            <div className="poke1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Skyla", "")}
                                    {SyncPairIcon("Misty_Ev", "")}
                                    {SyncPairIcon("Phoebe", "")}
                                    {SyncPairIcon("Arven_TL", "")}
                                    {SyncPairIcon("Olivia_BP", "")}
                                    {SyncPairIcon("Hilbert", "")}
                                    {SyncPairIcon("Lillie", "")}
                                    {SyncPairIcon("Sabrina_NY", "")}
                                    {SyncPairIcon("Evelyn", "")}
                                    {SyncPairIcon("Jasmine", "")}
                                    {SyncPairIcon("Clemont_BP", "")}
                                    {SyncPairIcon("Larry_TL", "")}
                                    {SyncPairIcon("Sabrina", "")}
                                    {SyncPairIcon("PlayerM_Registeel", "")}
                                    {SyncPairIcon("Roxanne", "")}
                                    {SyncPairIcon("Janine_BP", "")}
                                </div>
                            </div>
                            <div className="novice3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Glacia", "")}
                                    {SyncPairIcon("Teddy", "")}
                                    {SyncPairIcon("Elesa_TL", "")}
                                    {SyncPairIcon("PlayerM_Raikou", "")}
                                    {SyncPairIcon("Dawn", "")}
                                    {SyncPairIcon("Lance_TL", "")}
                                    {SyncPairIcon("PlayerM_Mesprit", "")}
                                    {SyncPairIcon("Marley", "")}
                                    {SyncPairIcon("Elesa_SS", "")}
                                    {SyncPairIcon("PlayerM_Cobalion", "")}
                                    {SyncPairIcon("Jasmine_TL", "")}
                                    {SyncPairIcon("Cheryl", "")}
                                    {SyncPairIcon("Giovanni_TL", "")}
                                    {SyncPairIcon("PlayerM_Regirock", "")}
                                    {SyncPairIcon("LtSurge_BP", "")}
                                    {SyncPairIcon("Morty_TL", "")}
                                </div>
                            </div>
                            <div className="novice2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Maylene", "")}
                                    {SyncPairIcon("Erika_H", "")}
                                    {SyncPairIcon("Acerola_TL", "")}
                                    {SyncPairIcon("Rosa_H", "")}
                                    {SyncPairIcon("Leaf_TL", "")}
                                    {SyncPairIcon("Sawyer", "")}
                                    {SyncPairIcon("Bugsy_Ev", "")}
                                    {SyncPairIcon("Adaman_TL", "")}
                                    {SyncPairIcon("Giovanni_Ev", "")}
                                    {SyncPairIcon("Drake", "")}
                                    {SyncPairIcon("Rachel", "")}
                                    {SyncPairIcon("Rosa", "")}
                                    {SyncPairIcon("Cheren", "")}
                                    {SyncPairIcon("Cynthia_TL", "")}
                                    {SyncPairIcon("Raihan_TL", "")}
                                    {SyncPairIcon("PlayerM_Torchic", "")}
                                    {SyncPairIcon("Misty", "")}
                                </div>
                            </div>
                            <div className="novice1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Kali", "")}
                                    {SyncPairIcon("Liza", "")}
                                    {SyncPairIcon("Marlon", "")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sprint">
                    <div className="header-row">
                        <h3>Sprint</h3>
                        <div className="sprint-grid">
                            <div className="masterball-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/master-ball.png`} alt="Master Ball"></img>
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Alder_Arc", "")}
                                    {SyncPairIcon("Selene_NC", "")}
                                </div>
                            </div>
                            <div className="ultra3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Lear_SS", "")}
                                </div>
                            </div>
                            <div className="ultra2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Ethan_Var", "")}
                                </div>
                            </div>
                            <div className="ultra1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Lillie_H", "")}
                                    {SyncPairIcon("Cynthia_Var", "")}
                                    {SyncPairIcon("Hop_Var2", "")}
                                </div>
                            </div>
                            <div className="great3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Lillie_Ev", "")}
                                    {SyncPairIcon("Ingo_SS", "")}
                                    {SyncPairIcon("Rei", "")}
                                </div>
                            </div>
                            <div className="great2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Marley_Pal", "")}
                                    {SyncPairIcon("Clavell", "")}
                                    {SyncPairIcon("Larry", "")}
                                    {SyncPairIcon("Mela", "")}
                                    {SyncPairIcon("Skyla_S", "", "border-red")}
                                    {SyncPairIcon("Bede_SS", "")}
                                    {SyncPairIcon("Rei_Aca", "")}
                                </div>
                            </div>
                            <div className="great1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Sina", "")}
                                    {SyncPairIcon("Greta", "")}
                                    {SyncPairIcon("Grimsley_Kimono_Var", "")}
                                    {SyncPairIcon("Marnie_Aca", "")}
                                </div>
                            </div>
                            <div className="poke3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Noland_Var", "")}
                                    {SyncPairIcon("Paulo", "")}
                                    {SyncPairIcon("Nemona", "")}
                                </div>
                            </div>
                            <div className="poke2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Plumeria_Var", "")}
                                    {SyncPairIcon("Riley", "")}
                                    {SyncPairIcon("Bianca_DC", "")}
                                    {SyncPairIcon("N_DC", "")}
                                    {SyncPairIcon("Archer", "")}
                                    {SyncPairIcon("Cheren_DC", "")}
                                </div>
                            </div>
                            <div className="poke1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Clavell_Ev", "")}
                                    {SyncPairIcon("Malva", "")}
                                    {SyncPairIcon("Wally_DC", "")}
                                    {SyncPairIcon("Lacey_TL", "")}
                                    {SyncPairIcon("Shauna_DC", "")}
                                </div>
                            </div>
                            <div className="novice3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Blue_DC", "")}
                                    {SyncPairIcon("Hugh_DC", "")}
                                </div>
                            </div>
                            <div className="novice2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Barry_DC", "")}
                                    {SyncPairIcon("Hau_DC", "")}
                                </div>
                            </div>
                            <div className="novice1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="header-row">
                        <h3>Field</h3>
                        <div className="field-grid">
                            <div className="masterball-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/master-ball.png`} alt="Master Ball"></img>
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Ethan_Arc", "", "border-red")}
                                    {SyncPairIcon("May_NC", "")}
                                    {SyncPairIcon("Brendan_NC", "")}
                                    {SyncPairIcon("Elesa_SSA", "")}
                                </div>
                            </div>
                            <div className="ultra3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                </div>
                            </div>
                            <div className="ultra2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                </div>
                            </div>
                            <div className="ultra1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/ultra-ball.png`} alt="Ultra Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Iono_SS", "")}
                                    {SyncPairIcon("Geeta", "")}
                                </div>
                            </div>
                            <div className="great3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Benga", "")}
                                    {SyncPairIcon("Lacey", "")}
                                    {SyncPairIcon("Lucas_Mix", "")}
                                    {SyncPairIcon("Poppy_NY", "")}
                                    {SyncPairIcon("Marnie_Var", "")}
                                    {SyncPairIcon("Gardenia_S", "")}
                                    {SyncPairIcon("Red_Mix", "")}
                                </div>
                            </div>
                            <div className="great2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Avery", "")}
                                    {SyncPairIcon("Bede_Var", "")}
                                    {SyncPairIcon("Leaf_Mix", "")}
                                    {SyncPairIcon("Hop_Var", "")}
                                    {SyncPairIcon("Emmet_SS", "")}
                                    {SyncPairIcon("Dawn_Mix", "")}
                                    {SyncPairIcon("Selene_SC", "")}
                                </div>
                            </div>
                            <div className="great1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/great-ball.png`} alt="Great Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Akari", "")}
                                    {SyncPairIcon("Blue_Mix", "")}
                                    {SyncPairIcon("Rosa_Aca", "")}
                                    {SyncPairIcon("Wallace_NY", "")}
                                    {SyncPairIcon("Ilima", "")}
                                </div>
                            </div>
                            <div className="poke3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Volo", "")}
                                    {SyncPairIcon("Giovanni_Var", "")}
                                </div>
                            </div>
                            <div className="poke2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Viola_H", "")}
                                    {SyncPairIcon("Tierno_DC", "")}
                                    {SyncPairIcon("Thorton_Var", "")}
                                </div>
                            </div>
                            <div className="poke1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/poke-ball.png`} alt="Poké Ball"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Hop_DC", "")}
                                    {SyncPairIcon("Gladion_DC", "")}
                                    {SyncPairIcon("Silver_DC", "")}
                                    {SyncPairIcon("Victor_Ev", "")}
                                    {SyncPairIcon("Bede_DC", "")}
                                </div>
                            </div>
                            <div className="novice3-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    3
                                </div>
                                <div className="tier-content">
                                    {SyncPairIcon("Nemona_DC", "")}
                                    {SyncPairIcon("Marnie_DC", "")}
                                </div>
                            </div>
                            <div className="novice2-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    2
                                </div>
                                <div className="tier-content">
                                </div>
                            </div>
                            <div className="novice1-row tierlist-row">
                                <div className="tier-title">
                                    <img src={`${process.env.PUBLIC_URL}/images/misc/feather.png`} alt="Pretty Feather"></img>
                                    1
                                </div>
                                <div className="tier-content">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    //#endregion
};

export default TierListWAG;