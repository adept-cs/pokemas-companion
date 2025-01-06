import SyncPairIcon from './syncpair-icon';
import $ from 'jquery';
import classNames from 'classnames';
import { useState } from 'react';

const TierList = () => {
    let filtersDictionary = {};
    
    function toggleFilter(sender) {
        //Remove "not found" from all sync pairs (temporary way of doing this, it works but could be faster)
        $('.not-found').removeClass('not-found');

        if (sender in filtersDictionary) {
            delete filtersDictionary[sender];
            $(`#${sender}-btn`).removeClass('selected');
        }
        else {
            filtersDictionary[sender] = 1;
            $(`#${sender}-btn`).addClass('selected');
        }

        for (const key in filtersDictionary) {
            $(`.sync-pair.${key}`).addClass('query-found');
        }
        if ($('.query-found').length > 0) {
            $(`.sync-pair:not(.query-found`).addClass('not-found');
            $('.query-found').removeClass('query-found');
        }
    }
    
    return (
        <div className="tierlist-page">
            <div className="banner tierlist-banner">
                <img src={`${process.env.PUBLIC_URL}/images/app-bg.png`} className="banner-img" alt="" />
                <h1 className="banner-title">Tier List Companion</h1>
            </div>
            <div className="tierlist-header">
                <h2>About the Tier List Companion</h2>
                <p>This companion is based on Spark's tier list. I am not involved with the placement of sync pairs on the tier list, but I am maintaining this resource as a way to look for specific sync pairs and understand some of the justification behind their ultimate placement. If I have created a showcase for a specific pair, I am also including that here.</p>
                <div className="not-ranked">
                    <h3>The following sync pairs are not ranked on the tierlist at the moment, since they were added in the most recent update:</h3>
                    <div className="tierlist-row not-included-row">
                        {SyncPairIcon("Atticus & Revavroom", "atticus-trainer poison paldea artistic free-spirit support exr-sprint pokefair filter-excluded", "/images/0I_PALDEA/Atticus_0966.png", "black")}
                        {SyncPairIcon("Blossom (Furisode Girl)", "blossom-trainer fairy kalos artistic tech exr-none event filter-excluded", "/images/0F_KALOS/Blossom_0281.png", "black")}
                        {SyncPairIcon("Sygna Suit Giovanni (Alt.) & Guzzlord", "giovanni-trainer dark johto villain sygna-suit sunglasses support exr-field master-fair filter-excluded", "/images/0B_JOHTO/Giovanni_0799.png", "black")}
                        {SyncPairIcon("Hop & Pincurchin", "hop-trainer electric galar rival galar-adventurer field exr-none training-ticket filter-excluded", "/images/0H_GALAR/Hop_0871.png", "black")}
                        {SyncPairIcon("Lana & Lanturn", "lana-trainer water alola trial-giver free-spirit nature-lover support exr-none lodge-pair filter-excluded", "/images/0G_ALOLA/Lana_0171.png", "black")}
                        {SyncPairIcon("Lucas & Torterra", "lucas-trainer ground sinnoh main-character scarf knowledgeable field exr-sprint mix-scout filter-excluded", "/images/0D_SINNOH/Lucas_0389.png", "black")}
                        {SyncPairIcon("Mela & Armarouge", "mela-trainer fire paldea passionate-spirit artistic sprint exr-strike pokefair filter-excluded", "/images/0I_PALDEA/Mela_0936.png", "black")}
                        {SyncPairIcon("Poppy (New Year's 2025) & Steelix★", "poppy-trainer steel paldea elite-four seasonal-outfit fancy-lady field exr-support shiny filter-excluded", "/images/0I_PALDEA/Poppy_0208.png", "black")}
                        {SyncPairIcon("Raihan (New Year's 2025) & Sandaconda", "raihan-trainer ground galar gym-leader seasonal-outfit scarf support exr-sprint filter-excluded", "/images/0H_GALAR/Raihan_0844.png", "black")}
                    </div>
                </div>
            </div>
            <div className="sync-pair-filters">
                <div className="type-filters">
                    <div className="normal-type">
                        <button type="button" id="normal-btn" onClick={() => toggleFilter("normal")}>
                            <img src={`${process.env.PUBLIC_URL}/images/normal.svg`} />
                        </button>
                    </div>
                    <div className="fire-type">
                        <button type="button" id="fire-btn" onClick={() => toggleFilter("fire")}>
                            <img src={`${process.env.PUBLIC_URL}/images/fire.svg`} />
                        </button>
                    </div>
                    <div className="water-type">
                        <button type="button" id="water-btn" onClick={() => toggleFilter("water")}>
                            <img src={`${process.env.PUBLIC_URL}/images/water.svg`} />
                        </button>
                    </div>
                    <div className="electric-type">
                        <button type="button" id="electric-btn" onClick={() => toggleFilter("electric")}>
                            <img src={`${process.env.PUBLIC_URL}/images/electric.svg`} />
                        </button>
                    </div>
                    <div className="grass-type">
                        <button type="button" id="grass-btn" onClick={() => toggleFilter("grass")}>
                            <img src={`${process.env.PUBLIC_URL}/images/grass.svg`} />
                        </button>
                    </div>
                    <div className="ice-type">
                        <button type="button" id="ice-btn" onClick={() => toggleFilter("ice")}>
                            <img src={`${process.env.PUBLIC_URL}/images/ice.svg`} />
                        </button>
                    </div>
                    <div className="fighting-type">
                        <button type="button" id="fighting-btn" onClick={() => toggleFilter("fighting")}>
                            <img src={`${process.env.PUBLIC_URL}/images/fighting.svg`} />
                        </button>
                    </div>
                    <div className="poison-type">
                        <button type="button" id="poison-btn" onClick={() => toggleFilter("poison")}>
                            <img src={`${process.env.PUBLIC_URL}/images/poison.svg`} />
                        </button>
                    </div>
                    <div className="ground-type">
                        <button type="button" id="ground-btn" onClick={() => toggleFilter("ground")}>
                            <img src={`${process.env.PUBLIC_URL}/images/ground.svg`} />
                        </button>
                    </div>
                    <div className="flying-type">
                        <button type="button" id="flying-btn" onClick={() => toggleFilter("flying")}>
                            <img src={`${process.env.PUBLIC_URL}/images/flying.svg`} />
                        </button>
                    </div>
                    <div className="psychic-type">
                        <button type="button" id="psychic-btn" onClick={() => toggleFilter("psychic")}>
                            <img src={`${process.env.PUBLIC_URL}/images/psychic.svg`} />
                        </button>
                    </div>
                    <div className="bug-type">
                        <button type="button" id="bug-btn" onClick={() => toggleFilter("bug")}>
                            <img src={`${process.env.PUBLIC_URL}/images/bug.svg`} />
                        </button>
                    </div>
                    <div className="rock-type">
                        <button type="button" id="rock-btn" onClick={() => toggleFilter("rock")}>
                            <img src={`${process.env.PUBLIC_URL}/images/rock.svg`} />
                        </button>
                    </div>
                    <div className="ghost-type">
                        <button type="button" id="ghost-btn" onClick={() => toggleFilter("ghost")}>
                            <img src={`${process.env.PUBLIC_URL}/images/ghost.svg`} />
                        </button>
                    </div>
                    <div className="dragon-type">
                        <button type="button" id="dragon-btn" onClick={() => toggleFilter("dragon")}>
                            <img src={`${process.env.PUBLIC_URL}/images/dragon.svg`} />
                        </button>
                    </div>
                    <div className="dark-type">
                        <button type="button" id="dark-btn" onClick={() => toggleFilter("dark")}>
                            <img src={`${process.env.PUBLIC_URL}/images/dark.svg`} />
                        </button>
                    </div>
                    <div className="steel-type">
                        <button type="button" id="steel-btn" onClick={() => toggleFilter("steel")}>
                            <img src={`${process.env.PUBLIC_URL}/images/steel.svg`} />
                        </button>
                    </div>
                    <div className="fairy-type">
                        <button type="button" id="fairy-btn" onClick={() => toggleFilter("fairy")}>
                            <img src={`${process.env.PUBLIC_URL}/images/fairy.svg`} />
                        </button>
                    </div>
                </div>
            </div>
            <input type="text" placeholder="Search for a sync pair..." ></input>
            <div className="tierlists">
                <div className="damage-dealer">
                    <div className="header-row">
                        <h3>Damage Dealer</h3>
                    </div>
                    <div className="damage-dealer-grid">
                        <div className="uber-row tierlist-row">
                            <div className="tier-title">U</div>
                            {SyncPairIcon("Red (Champion) & Articuno", "red-trainer ice kanto main-character champion pallet-town strike exr-tech master-fair", "/images/0A_KANTO/0A_KANTO_0A-01_NCRed.png", "red")}
                            {SyncPairIcon("Arc Suit Leon & Charizard", "leon-trainer fire galar champion free-spirit multi exr-tech arc-fair", "/images/0H_GALAR/Leon_Arc_0006_5.png", "red")}
                            {SyncPairIcon("Cheren (Champion) & Tornadus Incarnate Forme", "cheren-trainer flying unova champion cape unova-adventurer tech exr-strike master-fair", "/images/0E_UNOVA/Cheren_Tornadus.png", "orange")}
                            {SyncPairIcon("Arc Suit Lance & Dragonite", "lance-trainer dragon kanto champion cape multi exr-tech arc-fair", "/images/0A_KANTO/LanceArc_Dragonite_5.png", "orange")}
                            {SyncPairIcon("Ash & Pikachu", "ash-trainer electric kanto main-character pallet-town passionate-spirit strike exr-none master-fair collab", "/images/0A_KANTO/0A_KANTO_0E-02_Ash.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Gladion & Magearna", "gladion-trainer fairy alola rival sygna suit villain strike exr-sprint master-fair", "/images/0G_ALOLA/Gladion_Magearna.png", "green")}
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            {SyncPairIcon("Giacomo & Kingambit", "giacomo-trainer dark paldea strike exr-tech pokefair", "/images/0I_PALDEA/Giacomo_0983.png", "red")}
                            {SyncPairIcon("Marnie (Champion) & Galarian Moltres", "marnie-trainer dark galar champion pigtails galar-adventurer strike exr-support master-fair", "/images/0H_GALAR/0H_GALAR_0A-04_NeoChampMarnie.png", "red")}
                            {SyncPairIcon("Sygna Suit Serena & Zygarde (50% Forme)", "serena-trainer dragon kalos main-character sygna-suit strike exr-support master-fair", "/images/0F_KALOS/0F_KALOS_0A-02_SSSerena.png", "red")}
                            {SyncPairIcon("Sygna Suit Steven & Deoxys (Attack Forme)", "steven-trainer psychic hoenn champion sygna-suit space-cadet tech exr-support pokefair", "/images/0Z_OTHER-FORMES/0C_HOENN_0C-05_ssSteven_BAttack_.png", "red")}
                            {SyncPairIcon("Irida (Special Costume) & Hisuian Zoroark", "irida-trainer ghost sinnoh special-costume nature-lover artistic strike exr-tech", "/images/0D1_HISUI/Irida_Zoroark_5.png", "orange")}
                            {SyncPairIcon("Sygna Suit Lysandre & Volcanion", "lysandre-trainer water kalos villain sygna-suit researcher", "/images/0F_KALOS/0F_KALOS_0D-01_ssLysandre.png", "orange")}
                            {SyncPairIcon("Lear & Hoopa (Confined)", "lear-trainer psychic pasio rival sunglasses tech exr-strike pokefair has-lodge", "/images/00_PASIO/00_PASIO_0E-01_Lear.png", "orange")}
                            {SyncPairIcon("Klara & Galarian Slowbro", "klara-trainer poison galar gym-leader grown-woman artistic tech exr-strike pokefair", "/images/0H_GALAR/Klara_Slowbro_5.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Hilda & Victini", "hilda-trainer fire unova main-character sygna-suit unova-adventurer strike exr-support pokefair", "/images/0E_UNOVA/0E_UNOVA_0A-02_SSHilda.png", "yellow")}
                            {SyncPairIcon("Dexio & Espeon", "dexio-trainer psychic kalos battle-facility-foe knowledgeable tech exr-support pokefair", "/images/0F_KALOS/Dexio_0196.png", "green")}
                            {SyncPairIcon("Jacq & Farigiraf", "jacq-trainer psychic paldea knowledgeable gadgeteer free-spirit tech exr-support pokefair", "/images/0I_PALDEA/Jacq_Farigarif_5.png", "green")}
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            {SyncPairIcon("Adaman (Special Costume) & Ursaluna", "adaman-trainer ground sinnoh special-costume nature-lover artistic strike exr-support", "/images/0D1_HISUI/Adaman_Ursaluna_5.png", "red")}
                            {SyncPairIcon("Lance & Dragonite", "lance-trainer dragon kanto champion cape dragon-cousin strike exr-support pokefair has-lodge", "/images/0A_KANTO/0A_KANTO_0C-04_Lance.png", "red")}
                            {SyncPairIcon("Selene (Alt.) & Nihilego", "selene-trainer rock alola main-character pigtails alola-adventurer strike exr-tech pokefair", "/images/0G_ALOLA/Selene_Nihilego_5.png", "red")}
                            {SyncPairIcon("Poppy & Tinkaton", "poppy-trainer steel paldea elite-four fancy-lady free-spirit strike exr-sprint pokefair", "/images/0I_PALDEA/Poppy_Tinkaton.png", "orange")}
                            {SyncPairIcon("Rose & Copperajah", "rose-trainer steel galar villain passionate-spirit strike exr-tech pokefair", "/images/0H_GALAR/0H_GALAR_0D-01_Rose.png", "orange")}
                            {SyncPairIcon("Barry (Special Costume) & Heracross", "barry-trainer bug sinnoh rival special-costume passionate-spirit strike exr-tech", "/images/0D_SINNOH/Barry_Heracross_5.png", "yellow")}
                            {SyncPairIcon("Emma & Crobat", "emma-trainer poison kalos passionate-spirit strike exr-support pokefair", "/images/0F_KALOS/0F_KALOS_0F-02_Emma.png", "yellow")}
                            {SyncPairIcon("Palmer & Regigigas", "palmer-trainer normal sinnoh battle-facility-foe passionate-spirit veteran-trainer strike exr-tech pokefair", "/images/0D_SINNOH/0D_SINNOH_0E-06_Palmer.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Piers & Toxtricity (Low Key Form)", "piers-trainer electric galar gym-leader sygna-suit artistic strike exr-support pokefair", "/images/0H_GALAR/ssPiers_Toxtricity.png", "green")}
                            {SyncPairIcon("Eusine & Suicune★", "eusine-trainer water johto cape passionate-spirit strike exr-tech pokefair shiny", "/images/0B_JOHTO/0B_JOHTO_0E-01_Eusine.png", "green")}
                            {SyncPairIcon("Sina & Glaceon", "sina-trainer ice kalos-battle-facility-foe knowledgeable sprint exr-strike pokefair", "/images/0F_KALOS/Sina_0471.png", "green")}
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            {SyncPairIcon("Sygna Suit Lusamine & Dusk Mane Necrozma", "lusamine-trainer psychic alola villain sygna-suit grown-woman strike exr-support master-fair", "/images/0G_ALOLA/0G_ALOLA_0D-01_SSLusamine.png", "red")}
                            {SyncPairIcon("Lucas & Dialga", "lucas-trainer dragon sinnoh main-character scarf knowledgeable tech exr-support pokefair", "/images/0D_SINNOH/0D_SINNOH_0A-01_Lucas.png", "red")}
                            {SyncPairIcon("Candice (Palentine's 2024) & Galarian Darmanitan", "candice-trainer ice sinnoh gym-leader seasonal-outfit cook strike exr-tech", "/images/0D_SINNOH/Candice_Darmanitan.png", "orange")}
                            {SyncPairIcon("Sygna Suit Cynthia & Kommo-o", "cynthia-trainer dragon sinnoh battle-facility-foe sygna-suit researcher strike exr-sprint pokefair", "/images/0D_SINNOH/0D_SINNOH_0C-05_SSCynthia.png", "orange")}
                            {SyncPairIcon("Sygna Suit Red & Charizard", "red-trainer fire kanto main-character sygna-suit pallet-town strike exr-tech pokefair", "/images/0A_KANTO/0A_KANTO_0A-01_SSRed.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Giovanni & Nidoking", "giovanni-trainer ground johto sygna-suit villain strike exr-support pokefair", "/images/0B_JOHTO/0A_KANTO_0D-01_SSGiovanni.png", "yellow")}
                            {SyncPairIcon("Cynthia & Garchomp", "cynthia-trainer ground sinnoh champion undella-town researcher strike exr-tech pokefair has-lodge", "/images/0D_SINNOH/0D_SINNOH_0C-05_Cynthia.png", "yellow")}
                            {SyncPairIcon("Emmet & Archeops", "emmet-trainer rock unova battle-facility-foe battle-partner strike exr-support pokefair", "/images/0E_UNOVA/0E_UNOVA_0E-02_Emmet.png", "yellow")}
                            {SyncPairIcon("Iono (Fall 2024) & Flutter Mane", "iono-trainer ghost paldea gym-leader seasonal-outfit artistic", "/images/0I_PALDEA/Iono_0987.png", "green")}
                            {SyncPairIcon("Liza (Summer 2023) & Celesteela", "liza-trainer flying hoenn gym-leader seasonal-outfit space-cadet strike exr-none", "/images/0Y_SEASONALS/0Z_0B_SUM_2023_Liza.png", "green")}
                            {SyncPairIcon("Lisia (New Year's 2023) & Galarian Rapidash★", "lisia-trainer fairy hoenn seasonal-outfit artistic contest-lover strike shiny", "/images/0Y_SEASONALS/0Z_0D_NY_2023_Lisia.png", "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Blue (Classic) & Aerodactyl", "blue-trainer rock kanto rival pallet-town passionate-spirit strike exr-tech pokefair", "/images/0A_KANTO/0A_KANTO_0A-02_BlueClassic.png", "red")}
                            {SyncPairIcon("Olympia & Sigilyph", "olympia-trainer psychic kalos gym-leader supernatural cape tech exr-none spotlight ticket", "/images/0F_KALOS/0F_KALOS_0B-07_Olympia.png", "orange")}
                            {SyncPairIcon("Diantha (Special Costume) & Keldeo Resolute Form", "diantha-trainer fighting kalos artistic grown-woman special-costume tech exr-none", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2021_Diantha.png", "orange")}
                            {SyncPairIcon("Sygna Suit Korrina & Marshadow", "korrina-trainer ghost kalos sygna-suit passionate-spirit tech exr-support pokefair", "/images/0F_KALOS/0F_KALOS_0B-03_SSKorrina.png", "orange")}
                            {SyncPairIcon("Maxie & Groudon", "maxie-trainer ground hownn villain glasses researcher strike exr-tech master-fair", "/images/0C_HOENN/0C_HOENN_0D-01_Maxie.png", "orange")}
                            {SyncPairIcon("Gloria & Zacian", "gloria-trainer steel galar main-character cook galar-adventurer strike exr-none pokefair has-lodge", "/images/0H_GALAR/0H_GALAR_0A-02_Gloria.png", "yellow")}
                            {SyncPairIcon("Leon & Charizard", "leon-trainer fire galar champion battle-facility-foe free-spirit strike exr-support master-fair", "/images/0H_GALAR/0H_GALAR_0C-01_Leon.png", "yellow")}
                            {SyncPairIcon("Victor & Rillaboom", "victor-trainer grass galr main-character galar-adventurer strike exr-none pokefair", "/images/0H_GALAR/0H_GALAR_0A-01_Victor.png", "yellow")}
                            {SyncPairIcon("N & Zekrom", "n-trainer electric unova rival villain unova-adventurer strike exr-field pokefair has-lodge", "/images/0E_UNOVA/0E_UNOVA_0E-03_N.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Etha & Lugia", "ethan-trainer flying johto main-character sygna-suit scarf strike exr-field master-fair", "/images/0B_JOHTO/0B_JOHTO_0A-01_SSEthan.png", "green")}
                            {SyncPairIcon("Raihan & Duraludon", "raihan-trainer steel galar gym-leader gadgeteer passionate-spirit strike exr-tech pokefair has-lodge", "/images/0H_GALAR/0H_GALAR_0B-08_Raihan.png", "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Sygna Suit Leon & Eternatus", "leon-trainer dragon galar sygna-suit battle-facility-foe free-spirit strike exr-support pokefair", "/images/0H_GALAR/0H_GALAR_0C-01_SSLeon.png", "red")}
                            {SyncPairIcon("Sonia (Special Costume) & Tsareena★", "sonia-trainer grass galar special-costume knowledgeable grown-woman strike shiny", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2022_Sonia.png", "red")}
                            {SyncPairIcon("Alder & Volcarona", "alder-trainer bug unova champion cape veteran-trainer strike exr-none pokefair", "/images/0E_UNOVA/0E_UNOVA_0C-06_Alder.png", "orange")}
                            {SyncPairIcon("Emmet (Special Costume) & Escavalier", "emmet-trainer bug unova special-costume glasses battle-partner strike exr-none", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2022_Emmet.png", "orange")}
                            {SyncPairIcon("Hugh & Bouffalant", "hugh-trainer normal unova rival unova-adventurer passionate-spirit strike exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0A-07_Hugh.png", "orange")}
                            {SyncPairIcon("N (Summer 2022) & Zoroark", "n-trainer dark unova seasonal-outfit supernatural unova-adventurer strike exr-none", "/images/0Y_SEASONALS/0Z_0B_SUM_2022_N.png", "yellow")}
                            {SyncPairIcon("Diantha & Gardevoir", "diantha-trainer fairy kalos champion artistic grown-woman strike exr-tech pokefair", "/images/0F_KALOS/0F_KALOS_0C-05_Diantha.png", "yellow")}
                            {SyncPairIcon("Archie & Kyogre", "archie-trainer water hoenn villain body-builder nature-lover strike exr-tech master-fair", "/images/0C_HOENN/0C_HOENN_0D-02_Archie.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Erika & Leafeon", "erika-trainer grass kanto sygna-suit battle-facility-foe artistic tech exr-none spotlight ticket", "/images/0A_KANTO/0A_KANTO_0B-04_SSErika.png", "yellow")}
                            {SyncPairIcon("Iris (Fall 2022) & Naganadel", "iris-trainer poison unova seasonal-outfit pigtails undella-town tech exr-none", "/images/0Y_SEASONALS/0Z_0C_FALL_2022_Iris.png", "green")}
                            {SyncPairIcon("Riley & Lucario", "riley-trainer fighting sinnoh supernatural battle-partner battleground-foe sprint exr-strike event", "/images/0D_SINNOH/Riley_Lucario.png", "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("Lillie (Anniversary 2021) & Lunala", "lillie-trainer ghost alola seasonal-outfit pigtails alola-adventurer strike exr-tech master-fair", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2021_Lillie.png", "red")}
                            {SyncPairIcon("Leon (Holiday 2021) & Calyrex Ice Rider", "leon-trainer ice galar seasonal-outfit battle-facility-foe free-spirit strike exr-none", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2021_Leon.png", "red")}
                            {SyncPairIcon("Silver & Ho-Oh", "silver-trainer fire johto rival battle-partner complicated-family strike exr-none legendary-adventure has-lodge", "/images/0B_JOHTO/0B_JOHTO_0A-04_Silver.png", "orange")}
                            {SyncPairIcon("Steven (Anniversary 2021) & Rayquaza★", "steven-trainer flying hoenn seasonal-outfit battle-facility-foe rock-lover strike exr-none master-fair shiny", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2021_Steven.png", "orange")}
                            {SyncPairIcon("Hilda & Emboar", "hilda-trainer fire unova main-character unova-adventurer passionate-spirit strike exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0A-02_Hilda.png", "orange")}
                            {SyncPairIcon("Elesa & Zebstrika", "elesa-trainer unova gym-leader undella-town artistic strike exr-none spotlight ticket has-lodge", "/images/0E_UNOVA/0E_UNOVA_0B-04_Elesa.png", "yellow")}
                            {SyncPairIcon("Kris & Feraligatr", "kris-trainer water johto main-character pigtails knowledgeable strike exr-none spotlight ticket", "/images/0B_JOHTO/0B_JOHTO_0A-03_Kris.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Grimsley & Sharpedo", "grimsley-trainer water unova cape sygna-suit strike exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0C-04_SSGrimsley.png", "yellow")}
                            {SyncPairIcon("Player & Solgaleo", "player-trainer steel main-character pasio strike exr-none legendary-adventure", "/images/00_PASIO/00_PASIO_0Cb_Solgaleo.png", "yellow")}
                            {SyncPairIcon("Chuck & Poliwrath", "chuck-trainer fighting johto gym-leader body-builder sweet-tooth strike exr-sprint spotlight", "/images/0B_JOHTO/Chuck_Poliwrath_5.png", "green")}
                            {SyncPairIcon("Volkner (New Year's 2022) & Electivire", "volkner-trainer electric sinnoh seasonal-outfit gadgeteer passionate-spirit strike exr-none", "/images/0Y_SEASONALS/0Z_0D_NY_2022_Volkner.png", "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            {SyncPairIcon("Ryuki & Turtonator", "ryuki-trainer dragon alola artistic passionate-spirit tech exr-strike spotlight ticket", "/images/0G_ALOLA/Ryuki_Turtonator.png", "red")}
                            {SyncPairIcon("Cyrus & Palkia", "cyrus-traier dragon sinnoh villain gadgeteer strike exr-none legendary-adventure", "/images/0D_SINNOH/0D_SINNOH_0D-01_Cyrus.png", "red")}
                            {SyncPairIcon("Bea & Sirfetch'd", "bea-trainer fighting galar gym-leader body-builder sweet-tooth strike exr-none spotlight ticket", "/images/0H_GALAR/0H_GALAR_0B-04_Bea.png", "orange")}
                            {SyncPairIcon("Hala & Crabominable", "hala-trainer ice alola trial-giver passionate-spirit melemele-family strike exr-none spotlight ticket", "/images/0G_ALOLA/0G_ALOLA_0C-01_Hala.png", "orange")}
                            {SyncPairIcon("Blue & Pidgeot", "blue-trainer flying kanto champion rival pallet-town strike exr-none spotlight ticket has-lodge", "/images/0A_KANTO/0A_KANTO_0A-02_Blue.png", "orange")}
                            {SyncPairIcon("Giovanni & Mewtwo", "giovanni-trainer psychic kanto villain complicated-family strike exr-none legendary-adventure has-lodge", "/images/0A_KANTO/0A_KANTO_0D-01_Giovanni.png", "yellow")}
                            {SyncPairIcon("Caitlin & Reuniclus", "caitlin-trainer psychic unova elite-four fancy-lady undella-town strike exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0C-05_Caitlin.png", "yellow")}
                            {SyncPairIcon("Hilda (Special Costume) & Diancie", "hilda-trainer rock unova main-character passionate-spirit special-costume strike exr-none", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2021_Hilda.png", "yellow")}
                            {SyncPairIcon("Brendan & Sceptile", "brendan-trainer grass hoenn main-character hoenn-family space-cadet strike exr-none spotlight ticket", "/images/0C_HOENN/0C_HOENN_0A-01_Brendan.png", "yellow")}
                            {SyncPairIcon("Lear & Krookodile", "lear-trainer dark pasio rival sunglasses tech exr-none lodge-pair", "/images/00_PASIO/Lear_0553.png", "green")}
                            {SyncPairIcon("Nessa & Drednaw", "nessa-trainer water galar gym-leader artistic tech exr-none spotlight ticket", "/images/0H_GALAR/0H_GALAR_0B-02_Nessa.png", "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            {SyncPairIcon("Wally & Gallade", "wally-trainer fighting hoenn rival battle-facility-foe passionate-spirit strike exr-none spotlight ticket has-lodge", "/images/0C_HOENN/0C_HOENN_0A-03_Wally.png", "red")}
                            {SyncPairIcon("Skyla & Unfezant", "skyla-trainer flying unova gym-leader undella-town strike exr-none lodge-pair", "/images/0E_UNOVA/Skyla_Unfezant_4.png", "red")}
                            {SyncPairIcon("Hilbert (Fall 2020) & Mightyena", "hilbert-trainer dark unova seasonal-outfit sweet-tooth strike exr-none", "/images/0Y_SEASONALS/0Z_0C_FALL_2020_Hilbert.png", "orange")}
                            {SyncPairIcon("Guzma & Golisopod", "guzma-trainer bug alola villain sunglasses strike exr-none spotlight ticket", "/images/0G_ALOLA/0G_ALOLA_0D-03_Guzma.png", "orange")}
                            {SyncPairIcon("May & Swampert", "may-trainer water hoenn main-character space-cadet contest-lover tech exr-none spotlight ticket has-lodge", "/images/0C_HOENN/0C_HOENN_0A-02_May.png", "orange")}
                            {SyncPairIcon("Guzma (Special Costume) & Buzzwole", "guzma-trainer fighting alola villin passionate-spirit special-costume strike exr-none", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2021_Guzma.png", "yellow")}
                            {SyncPairIcon("Fantina & Mismagius", "fantina-trainer ghost sinnoh gym-leader artistic contest-lover strike exr-none spotlight ticket", "/images/0D_SINNOH/0D_SINNOH_0B-05_Fantina.png", "yellow")}
                            {SyncPairIcon("Burgh & Leavanny", "burgh-trainer bug unova gym-leader scarf artistic strike exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0B-03_Burgh.png", "yellow")}
                            {SyncPairIcon("Lusamine & Lilligant", "lusamine-trainer grass alola villain grown-woman alola-adventurer strike exr-none battle-point", "/images/0G_ALOLA/Lusamine_Lilligant_4.png", "yellow")}
                            {SyncPairIcon("Gladion & Silvally", "gladion-trainer normal alola rival villain alola-adventurer tech exr-none spotlight ticket has-lodge", "/images/0G_ALOLA/0G_ALOLA_0A-05_Gladion.png", "green")}
                            {SyncPairIcon("Zinnia & Rayquaza", "zinnia-trainer dragon hoenn cape space-cadet strike exr-none legendary-adventure", "/images/0C_HOENN/0C_HOENN_0E-04_Zinnia.png", "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            {SyncPairIcon("Morty & Drifblim", "morty-trainer ghost johto gym-leader scarf supernatural strike exr-none spotlight ticket has-lodge", "/images/0B_JOHTO/0B_JOHTO_0B-04_Morty.png", "red")}
                            {SyncPairIcon("Mallow & Tsareena", "mallow-trainer grass alola trial-giver cook tech exr-none spotlight ticket", "/images/0G_ALOLA/0G_ALOLA_0B-04_Mallow.png", "red")}
                            {SyncPairIcon("Olivia & Lycanroc", "olivia-trainer rock alol elite-four rock-lover trial-giver strike exr-none spotlight ticket", "/images/0G_ALOLA/0G_ALOLA_0C-02_Olivia.png", "orange")}
                            {SyncPairIcon("Selene & Decidueye", "selene-trainer grass alola main-character nature-lover alola-adventurer strike exr-none spotlight ticket", "/images/0G_ALOLA/0G_ALOLA_0A-02_Selene.png", "orange")}
                            {SyncPairIcon("Valerie & Mawile", "valerie-trainer fairy kalos gym-leader artistic free-spirit strike exr-none battle-point", "/images/0F_KALOS/0F_KALOS_0B-06-BP_Valerie.png", "orange")}
                            {SyncPairIcon("Allister & Gengar", "allister-trainer ghost galar gym-leader masked supernatural tech exr-none spotlight ticket", "/images/0H_GALAR/0H_GALAR_0B-04b_Allister.png", "yellow")}
                            {SyncPairIcon("Gloria (Summer 2021) & Inteleon", "gloria-trainer water galar main-character seasonal-outfit galar-adventurer strike exr-none", "/images/0Y_SEASONALS/0Z_0B_SUM_2021_Gloria.png", "yellow")}
                            {SyncPairIcon("Lusamine & Pheromosa", "lusamine-trainer bug alola villain grown-woman alola-adventurer strike exr-none spotlight ticket", "/images/0G_ALOLA/0G_ALOLA_0D-01_Lusamine.png", "yellow")}
                            {SyncPairIcon("Blue & Arcanine", "blue-trainer fire kanto champion rival pallet-town strike exr-none event", "/images/0A_KANTO/0A_KANTO_0A-02-EP_Blue.png", "yellow")}
                            {SyncPairIcon("Lance (New Year's 2021) & Gyarados", "lance-trainer flying kanto seasonal-outfit battle-partner strike exr-none", "/images/0Y_SEASONALS/0Z_0D_NY_2021_Lance.png", "green")}
                            {SyncPairIcon("Barry & Empoleon", "barry-trainer water sinnoh rival scarf passionate-spirit strike exr-none story", "/images/0D_SINNOH/0D_SINNOH_0A-03_Barry.png", "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("Drasna & Dragalge", "drasna-trainer dragon kalos elite-four free-spirit tech exr-none spotlight ticket", "/images/0F_KALOS/0F_KALOS_0C-04_Drasna.png", "red")}
                            {SyncPairIcon("Steven (Summer 2020) & Alolan Sandslash", "steven-trainer ice hoenn seasonal-outfit sunglasses rock-lover strike exr-none", "/images/0Y_SEASONALS/0Z_0B_SUM_2020_Steven.png", "orange")}
                            {SyncPairIcon("Volo & Gible", "volo-trainer ground sinnoh knowledgeable researcher strike exr-none lodge-pair", "/images/0D1_HISUI/Volo_Gible_4.png", "orange")}
                            {SyncPairIcon("Candice & Froslass", "candice-trainer ice sinnoh gym-leader pigtails battleground-foe strike exr-none battle-point", "/images/0D_SINNOH/0D_SINNOH_0B-07_BP_Candice.png", "orange")}
                            {SyncPairIcon("Shauntal & Chandelure", "shauntal-trainer ghost unova elite-four glasses undella-town strike exr-none genpool", "/images/0E_UNOVA/0E_UNOVA_0C-02_Shauntal.png", "orange")}
                            {SyncPairIcon("Sophocles & Alolan Golem", "sophocles-trainer electric alola trial-giver gadgeteer strike exr-none battle-point", "/images/0G_ALOLA/0G_ALOLA_0B-05_BP_Sophocles.png", "yellow")}
                            {SyncPairIcon("Gloria & Thwackey", "gloria-trainer grass galar main-character cook galar-adventurer strike exr-none lodge-pair", "/images/0H_GALAR/0H_GALAR_0A-02_TL_Gloria.png", "yellow")}
                            {SyncPairIcon("Ethan & Typhlosion", "ethan-trainer fire johto main-character pokeathlete strike exr-none spotlight ticket", "/images/0B_JOHTO/0B_JOHTO_0A-01_Ethan.png", "yellow")}
                            {SyncPairIcon("Hau & Alolan Raichu", "hau-trainer electric alola rival free-spirit melemele-family strike exr-none story", "/images/0G_ALOLA/0G_ALOLA_0A-03_Hau.png", "yellow")}
                            {SyncPairIcon("Koga & Crobat", "koga-trainer poison kanto elite-four scarf ninja-family tech exr-none story", "/images/0A_KANTO/0A_KANTO_0B-05_Koga.png", "green")}
                            {SyncPairIcon("Roxie & Scolipede", "roxie-trainer poison unova gym-leader artistic undella-town strike exr-none genpool", "/images/0E_UNOVA/0E_UNOVA_0B-09_Roxie.png", "green")}
                            {SyncPairIcon("Looker & Croagunk", "looker-trainer poison sinnoh veteran-trainer strike exr-none spotlight ticket", "/images/0D_SINNOH/0D_SINNOH_0E-05_Looker.png", "green")}
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Player & Gyarados (Strike)", "player-trainer water main-character pasio strike exr-none egg", "/images/0Z_EGGS/MALE/Egg_0130_01sa.png", "red")}
                            {SyncPairIcon("Zinnia & Salamence", "zinnia-trainer dragon hoenn cape space-cadet tech exr-none battle-point", "/images/0C_HOENN/0C_HOENN_0E-04-BP_Zinnia.png", "orange")}
                            {SyncPairIcon("Roark & Rampardos", "roark-trainer rock sinnoh gym-leader glasses rock-lover strike exr-none genpool", "/images/0D_SINNOH/0D_SINNOH_0B-01_Roark.png", "orange")}
                            {SyncPairIcon("Siebold (Holiday 2019) & Octillery", "siebold-trainer water kalos seasonal-outfit cook artistic tech exr-none", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2019_Siebold.png", "orange")}
                            {SyncPairIcon("Professor Sycamore & Bulbasaur", "sycamore-trainer grass kalos knowledgeable researcher strike exr-none lodge-pair", "/images/0F_KALOS/0F_KALOS_0F-01_TL_ProfSycamore.png", "yellow")}
                            {SyncPairIcon("Elesa (Palentine's 2023) & Togetic", "elesa-trainer flying unova seasonal-outfit scarf artistic strike exr-none", "/images/0Y_SEASONALS/0Z_0E_PAL_2023_Elesa.png", "yellow")}
                            {SyncPairIcon("Helena (Hex Maniac) & Haunter", "helena-trainer ghost kalos supernatural tech exr-none event", "/images/0F_KALOS/0F_KALOS_0X-01_Helena.png", "yellow")}
                            {SyncPairIcon("Clair & Kingdra", "clair-trainer dragon johto gym-leader cape dragon-cousin strike exr-none story", "/images/0B_JOHTO/0B_JOHTO_0B-08_Clair.png", "yellow")}
                            {SyncPairIcon("Noland & Pinsir", "noland-trainer bug hoenn battle-facility-foe knowledgeable strike exr-none genpool", "/images/0C_HOENN/Noland_Pinsir_4.png", "green")}
                            {SyncPairIcon("Bruno & Machamp", "bruno-trainer fighting kanto elite-four body-builder sweet-tooth strike exr-none genpool", "/images/0A_KANTO/0A_KANTO_0C-02_Bruno.png", "green")}
                            {SyncPairIcon("Petey (Poké Kid) & Pikachu", "petey-trainer electric galar tech exr-none event", "/images/0H_GALAR/Petey_Pikachu_3.png", "green")}
                            {SyncPairIcon("Volkner & Raichu", "volkner-trainer electric sinnoh gym-leader gadgeteer tech exr-none lodge-pair", "/images/0D_SINNOH/Volkner_0026.png", "green")}
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            {SyncPairIcon("Rika & Whiscash", "rika-trainer ground paldea elite-four knowledgeable grown-woman tech exr-none lodge-pair", "/images/0I_PALDEA/Rika_Whiscash_4.png", "orange")}
                            {SyncPairIcon("Lyra (Summer 2020) & Jigglypuff", "lyra-trainer fairy johto seasonal-outfit pokeathlete pigtails strike exr-none", "/images/0Y_SEASONALS/0Z_0B_SUM_2020_Lyra.png", "orange")}
                            {SyncPairIcon("Calem & Fennekin", "calem-trainer fire kalos main-character sunglasses strike exr-none lodge-pair", "/images/0F_KALOS/0F_KALOS_0A-01_TL_Calem.png", "orange")}
                            {SyncPairIcon("Siebold & Clawitzer", "siebold-trainer water kalos elite-four cook passionate-spirit strike exr-none genpool", "/images/0F_KALOS/0F_KALOS_0C-02_Siebold.png", "yellow")}
                            {SyncPairIcon("Nate & Braviary", "nate-trainer flying unova main-character unova-adventurer battle-partner strike exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0A-05_Nate.png", "yellow")}
                            {SyncPairIcon("Iris & Haxorus", "iris-trainer dragon unova gym-leader undella-town strike exr-none story", "/images/0E_UNOVA/0E_UNOVA_0C-01_Iris.png", "yellow")}
                            {SyncPairIcon("Tate & Solrock", "tate-trainer psychic hoenn gym-leader supernatural space-cadet strike exr-none genpool", "/images/0C_HOENN/0C_HOENN_0B-07-1_Tate.png", "yellow")}
                            {SyncPairIcon("Korrina & Lucario", "korrina-trainer fighting kalos gym-leader passionate-spirit strike exr-none story", "/images/0F_KALOS/0F_KALOS_0B-03_Korrina.png", "green")}
                            {SyncPairIcon("Mina & Granbull", "mina-trainer fairy alola trial-giver artistic free-spirit tech exr-none genpool", "/images/0G_ALOLA/0G_ALOLA_0B-07_Mina.png", "green")}
                            {SyncPairIcon("Marnie & Toxicroak", "marnie-trainer poison galar rival pigtails fancy-lady tech exr-none lodge-pair", "/images/0H_GALAR/0H_GALAR_0A-04_TL_Marnie.png", "green")}
                            {SyncPairIcon("Karen & Umbreon", "karen-trainer dark johto elite-four grown-woman strike exr-none battle-point", "/images/0B_JOHTO/0B_JOHTO_0C-04-BP_Karen.png", "green")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Gardenia & Roserade", "gardenia-trainer grass sinnoh gym-leader nature-lover battleground-foe strike exr-none genpool", "/images/0D_SINNOH/0D_SINNOH_0B-02_Gardenia.png", "red")}
                            {SyncPairIcon("Molayne & Alolan Dugtrio", "molayne-trainer steel alola elite-four glasses observatory-cousin strike exr-none genpool", "/images/0G_ALOLA/0G_ALOLA_0C-05_Molayne.png", "orange")}
                            {SyncPairIcon("Naomi & Sandslash", "naomi-trainer ground alola sunglasses strike exr-none event", "/images/0G_ALOLA/0G_ALOLA_0X-01_Naomi.png", "orange")}
                            {SyncPairIcon("Sygna Suit Brock & Tyranitar", "brock-trainer rock kanto sygna-suit rock-lover body-builder strike exr-none story", "/images/0A_KANTO/0A_KANTO_0B-01_SSBrock.png", "orange")}
                            {SyncPairIcon("Pryce & Dewgong", "pryce-trainer ice johto gym-leader scarf veteran-trainer strike exr-none story", "/images/0B_JOHTO/0B_JOHTO_0B-07_Pryce.png", "orange")}
                            {SyncPairIcon("May & Wailmer", "may-trainer water hoenn main-character space-cadet contest-lover strike exr-none lodge-pair", "/images/0C_HOENN/0C_HOENN_0A-02_TL_May.png", "orange")}
                            {SyncPairIcon("Valerie & Sylveon", "valerie-trainer fairy kalos gym-leader artistic free-spirit strike exr-none story", "/images/0F_KALOS/0F_KALOS_0B-06_Valerie.png", "yellow")}
                            {SyncPairIcon("Hapu & Mudsdale", "hapu-trainer ground alola trial-giver pigtails nature-lover strike exr-none story", "/images/0G_ALOLA/0G_ALOLA_0B-11_Hapu.png", "yellow")}
                            {SyncPairIcon("Bugsy & Beedrill", "bugsy-trainer bug johto gym-leader knowledgeable researcher strike exr-none genpool", "/images/0B_JOHTO/Bugsy_Beedrill_3.png", "yellow")}
                            {SyncPairIcon("Flint & Infernape", "flint-trainer fire sinnoh elite-four sinnoh-bros passionate-spirit strike exr-none story", "/images/0D_SINNOH/Flint_Infernape_4.png", "green")}
                            {SyncPairIcon("Katherine & Slurpuff", "katherine-trainer fairy kalos pigtails tech exr-none event", "/images/0F_KALOS/Katherine_0685.png", "green")}
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
                            {SyncPairIcon("Arc Suit Cynthia & Garchomp", "cynthia ground sinnoh champion researcher multi exr-strike arc-fair", "/images/0D_SINNOH/CynthiaArc_Garchomp_5.png", "red")}
                            {SyncPairIcon("Sygna Suit Red (Thunderbolt) & Pikachu", "red electric kanto main-character sygna-suit pallet-town tech exr-field master-fair", "/images/0A_KANTO/0A_KANTO_0A-01_SSTRed.png", "red")}
                            {SyncPairIcon("Sygna Suit Lear & Gholdengo", "lear-trainer steel pasio rival sygna-suit sunglasses sprint exr-strike master-fair", "/images/00_PASIO/Lear_Gholdengo_5.png", "orange")}
                            {SyncPairIcon("Leaf (Champion) & Moltres", "leaf-trainer fire kanto main-character champion pallet-town tech exr-support master-fair", "/images/0A_KANTO/0A_KANTO_0A-03_NCLeaf.png", "orange")}
                            {SyncPairIcon("Bianca (Champion) & Virizion", "bianca-trainer fighting unova champion glasses unova-adventurer strike exr-support master-fair", "/images/0E_UNOVA/Bianca_Virizion.png", "yellow")}
                            {SyncPairIcon("Serena (Champion) & Greninja", "serena-trainer water kalos main-character champion tech exr-support master-fair", "/images/0F_KALOS/0F_KALOS_0A-02_ChampSerena.png", "yellow")}
                            {SyncPairIcon("Silver (Champion) & Tyranitar★", "silver-trainer rock johto rival champion battle-partner strike exr-sprint master-fair shiny", "/images/0B_JOHTO/Silver_Tyranitar_5.png", "yellow")}
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            {SyncPairIcon("Oleana & Garbodor", "oleana-trainer poison galar villain researcher grown-woman tech exr-support pokefair", "/images/0H_GALAR/0H_GALAR_0D-02_Oleana.png", "red")}
                            {SyncPairIcon("Adaman & Leafeon", "adaman-trainer grass sinnoh nature-lover knowledgeable tech exr-sprint master-fair has-lodge", "/images/0D1_HISUI/0I_HISUI_0B-01_Adaman.png", "red")}
                            {SyncPairIcon("Irida & Glaceon", "irida-trainer ice sinnoh nature-lover artistic tech exr-support master-fair has-lodge", "/images/0D1_HISUI/0I_HISUI_0B-02_Irida.png", "red")}
                            {SyncPairIcon("Geeta & Glimmora", "geeta-traier poison paldea champion passionate-spirit veteran-trainer field exr-strike master-fair", "/images/0I_PALDEA/Geeta_Glimmora_5.png", "red")}
                            {SyncPairIcon("Sygna Suit Roxie & Toxtricity (Amped Forme)", "roxie-trainer poison unova gym-leader sygna-suit artistic tech exr-strike pokefair", "/images/0E_UNOVA/ssRoxie_Toxtricity.png", "orange")}
                            {SyncPairIcon("Red & Venusaur", "red-trainer grass kanto main-character pallet-town passionate-spirit field exr-strike mix-scout", "/images/0A_KANTO/Red_Venusaur.png", "orange")}
                            {SyncPairIcon("Dahlia & Ludicolo", "dahlia-trainer water sinnoh battle-facility-foe artistic grown-woman tech exr-strike pokefair", "/images/0D_SINNOH/Dahlia_Ludicolo_5.png", "orange")}
                            {SyncPairIcon("Sygna Suit Lyra & Celebi", "lyra-trainer grass johto main-character sygna-suit pigtails tech exr-field master-fair", "/images/0B_JOHTO/0B_JOHTO_0A-02_ssLyra.png", "orange")}
                            {SyncPairIcon("Lillie (Holiday 2024) & Primarina★", "lillie-trainer fairy alola seasonal-outfit fancy-lady artistic sprint exr-support", "/images/0G_ALOLA/Lillie_0730s_5.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Nemona & Scream Tail", "nemona-trainer fairy paldea rival sygna-suit champion strike exr-sprint master-fair", "/images/0I_PALDEA/Nemona_Screamtail_5.png", "yellow")}
                            {SyncPairIcon("Nate (Champion) & Haxorus★", "nate-trainer dragon unova main-character champion unova-adventurer strike exr-field master-fair", "/images/0E_UNOVA/Nate_Haxorus.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Diantha & Diancie★", "diantha-trainer rock kalos champion sygna-suit artistic tech exr-field pokefair", "/images/0F_KALOS/0F_KALOS_0C-05_ssDiantha.png", "green")}
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            {SyncPairIcon("Lillie (Anniversary 2024) & Solgaleo", "lillie-trainer steel alola seasonal-outfit pigtails alola-adventurer sprint exr-field event", "/images/0G_ALOLA/Lillie_Solgaleo_5.png", "red")}
                            {SyncPairIcon("Sygna Suit Wally & Gardevoir★", "wally-trainer fairy hoenn rival sygna-suit passionate-spirit tech exr-sprint pokefair shiny", "/images/0C_HOENN/0C_HOENN_0A-03_ssWally.png", "red")}
                            {SyncPairIcon("Rei & Hisuian Decidueye", "rei-trainer fighting sinnoh main-character scarf sprint exr-strike pokefair", "/images/0D1_HISUI/Rei.png", "orange")}
                            {SyncPairIcon("Hop (Champion) & Galarian Zapdos", "hop-trainer fighting galar champion cape galar adventurer tech exr-support master-fair", "/images/0H_GALAR/0H_GALAR_0A-03_NeoChampHop.png", "orange")}
                            {SyncPairIcon("Sygna Suit Hau & Tapu Koko", "hau-trainer electric alola sygna-suit free-spirit passionate-spirit tech exr-strike pokefair", "/images/0G_ALOLA/0G_ALOLA_0A-03_ssHau.png", "orange")}
                            {SyncPairIcon("Clavell & Quaquaval", "clavell-trainer water paldea glasses knowledgeable veteran-trainer sprint exr-field pokefair", "/images/0I_PALDEA/Clavell_0914.png", "yellow")}
                            {SyncPairIcon("Leaf & Blastoise", "leaf-trainer water kanto main-character pallet-town field exr-sprint mix-scout", "/images/0A_KANTO/Leaf_Blastoise_5.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Ingo & Chandelure", "ingo-trainer ghost unova battle-facility-foe sygna-suit battle-partner sprint exr-tech pokefair", "/images/0E_UNOVA/Ingo_0609.png", "yellow")}
                            {SyncPairIcon("Gardenia (Summer 2024) & Dhelmise", "gardenia-trainer ghost sinnoh gym-leader seasonal-outfit nature-lover field exr-support", "/images/0D_SINNOH/Gardenia_Dhelmise_5.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Lana & Tapu Lele", "lana-trainer psychic alola trial-giver sygna-suit free-spirit strike exr-sprint pokefair", "/images/0G_ALOLA/0G_ALOLA_0B-02_ssLana.png", "green")}
                            {SyncPairIcon("Skyla (Anniversary 2022) & Tornadus (Therian Forme)", "skyla-trainer flying unova seasonal-outfit undella-town tech exr-strike pokefair", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2022_Skyla.png", "green")}
                            {SyncPairIcon("Leon (Alt.) & Dragapult", "leon-trainer dragon galar champion battle-facility-foe passionate-spirit tech exr-sprint pokefair", "/images/0H_GALAR/0H_GALAR_0C-01_TowerLeon.png", "green")}
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            {SyncPairIcon("Larry & Dudunsparce", "larry-trainer normal paldea gym-leader elite-four free-spirit sprint exr-tech pokefair", "/images/0I_PALDEA/Larry_Dudunsparce.png", "red")}
                            {SyncPairIcon("Roxanne (Fall 2023) & Runerigus", "roxanne-trainer ground hoenn gym-leader seasonal-outfit rock-lover tech exr-strike", "/images/0C_HOENN/Roxanne_Runerigus.png", "red")}
                            {SyncPairIcon("Sygna Suit Emmet & Eelektross", "emmet-trainer electric unova battle-facility-foe sygna-suit battle-partner field exr-tech pokefair", "/images/0E_UNOVA/Emmet_0604.png", "orange")}
                            {SyncPairIcon("Avery & Galarian Slowking", "avery-trainer psychic galar gym-leader glasses supernatural field exr-tech pokefair", "/images/0H_GALAR/Avery_Slowking_5.png", "orange")}
                            {SyncPairIcon("Blue (Classic) & Charizard", "blue-trainer fire kanto rival pallet-town passionate-spirit field exr-strike mix-scout", "/images/0A_KANTO/Blue_Charizard.png", "yellow")}
                            {SyncPairIcon("Sygna Suit N & Black Kyurem", "n-trainer ice unova rival sygna-suit unova-adventurer tech exr-strike pokefair", "/images/0E_UNOVA/0E_UNOVA_0E-03_SSN.png", "yellow")}
                            {SyncPairIcon("Shauntal (Fall 2024) & Froslass", "shauntal-trainer ice unova elite-four seasonal-outfit glasses tech exr-sprint", "/images/0E_UNOVA/Shauntal_0478.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Silver & Sneasel", "silver-trainer ice johto rival sygna-suit battle-partner tech exr-support pokefair", "/images/0B_JOHTO/0B_JOHTO_0A-04_SSSilver.png", "yellow")}
                            {SyncPairIcon("Gloria (Alt. 2) & Cinderace", "gloria-trainer fire galar main-character passionate-spirit galar-adventurer tech exr-support pokefair", "/images/0H_GALAR/0H_GALAR_0A-02_GymGloria01.png", "yellow")}
                            {SyncPairIcon("Marnie & Cinderace", "marnie-trainer fire galar rival pigtails fancy-lady field exr-support variety", "/images/0H_GALAR/Marnie_0815_5.png", "green")}
                            {SyncPairIcon("Bede & Inteleon", "bede-trainer water galar rival galar-adventurer field exr-tech variety", "/images/0H_GALAR/Bede_0818_5.png", "green")}
                            {SyncPairIcon("Hop & Rillaboom", "hop-trainer grass galar rival galar-adventurer researcher field exr-srike variety", "/images/0H_GALAR/Hop_0812_5.png", "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Selene (Special Costume) & Scizor", "selene-trainer steel alola main-character special-costume passionate-spirit field exr-strike", "/images/0G_ALOLA/Selene_Scizor_5.png", "red")}
                            {SyncPairIcon("Wallace (New Year's 2024) & Blacephalon", "wallace-trainer fire hoenn gym-leader seasonal-outfit contest-lover field exr-strike", "/images/0C_HOENN/Wallace_0806.png", "red")}
                            {SyncPairIcon("Sygna Suit Cynthia (Renegade) & Giratina Altered Forme", "cynthia-trainer ghost sinnoh sygna-suit battle-facility-foe passionate-spirit tech exr-strike master-fair", "/images/0D_SINNOH/0D_SINNOH_0C-05_SSRCynthia.png", "orange")}
                            {SyncPairIcon("Sygna Suit Hilbert & Genesect", "hilbert-trainer bug unova main-character sygna-suit unova-adventurer tech exr-strike pokefair", "/images/0E_UNOVA/0E_UNOVA_0A-01_SSHilbert.png", "orange")}
                            {SyncPairIcon("Sygna Suit May & Blaziken", "may-trainer fire hoenn main-character sygna-suit pigtails tech exr-sprint", "/images/0C_HOENN/0C_HOENN_0A-02_SSMay.png", "orange")}
                            {SyncPairIcon("Paulo & Lycanroc Dusk", "paulo-trainer rock rival knowledgeable pasio sprint exr-support pokefair", "/images/00_PASIO/00_PASIO_0E-04_Paulo.png", "orange")}
                            {SyncPairIcon("Raihan (Anniversary 2022) & Flygon", "raihan-trainer dragon galar seasonal-outfit sunglasses gadgeteer", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2022_Raihan.png", "orange")}
                            {SyncPairIcon("Akari & Hisuian Samurott", "akari-trainer dark sinnoh main-character scarf field exr-strike pokefair", "/images/0D1_HISUI/Akari.png", "yellow")}
                            {SyncPairIcon("Zinnia (Special Costume) & Thievul", "zinnia-trainer dark hoenn special-costume cape space-cadet tech exr-none", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2023_Zinnia.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Cyrus & Darkrai", "cyrus-trainer dark sinnoh sygna-suit scarf villain tech exr-field pokefair", "/images/0D_SINNOH/0D_SINNOH_0D-01_SSCyrus.png", "yellow")}
                            {SyncPairIcon("Gloria (Dojo Uniform) & Urshifu Rapid Strike", "gloria-trainer water galar main-character passionate-spirit galar-adventurer tech exr-support pokefair", "/images/0H_GALAR/0H_GALAR_0A-02_GloriaDojo.png", "green")}
                            {SyncPairIcon("Elesa (Classic) & Emolga", "elesa-trainer electric unova gym-leader passionate-spirit artistic tech exr-sprint pokefair", "/images/0E_UNOVA/0E_UNOVA_0B-04_ElesaClassic.png", "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Lyra & Vaporeon", "lyra-trainer water johto main-character pigtails pokeathlete tech exr-none variety", "/images/0B_JOHTO/0B_JOHTO_0A-02_VS_Lyra.png", "red")}
                            {SyncPairIcon("Elio & Espeon", "elio-trainer psychic alola main-character nature-lover alola-adventurer tech exr-support variety", "/images/0G_ALOLA/Elio_Espeon.png", "red")}
                            {SyncPairIcon("Calem & Sylveon", "calem-trainer fairy kalos main-character sunglasses tech exr-support variety", "/images/0F_KALOS/Calem_0700.png", "orange")}
                            {SyncPairIcon("Hilda & Leafeon", "hilda-trainer grass unova main-character unova-adventurer passionate-spirit tech exr-support variety", "/images/0E_UNOVA/Hilda_0470.png", "orange")}
                            {SyncPairIcon("Hilbert & Glaceon", "hilbert-trainer ice unova main-character unova-adventurer tech exr-support variety", "/images/0E_UNOVA/Hilbert_0471.png", "orange")}
                            {SyncPairIcon("Selene & Umbreon", "selene-trainer dark alola main-character nature-lover alola-adventurer tech exr-support variety", "/images/0G_ALOLA/Selene_Umbreon.png", "orange")}
                            {SyncPairIcon("N (Anniversary 2021) & Reshiram", "n-trainer fire unova rival seasonal-outfir supernatural tech exr-strike master-fair", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2021_N.png", "yellow")}
                            {SyncPairIcon("Marnie (Palentine's 2022) & Mawile", "marnie-trainer steel galar seasonal-outfit pigtails cook tech exr-none", "/images/0Y_SEASONALS/0Z_0E_PAL_2022_Marnie.png", "yellow")}
                            {SyncPairIcon("Lucas & Flareon", "lucas-trainer fire sinnoh main-character scarf knowledgeable tech exr-none variety", "/images/0D_SINNOH/0D_SINNOH_0A-01_VS_Lucas.png", "yellow")}
                            {SyncPairIcon("Viola (Holiday 2023) & Vivillon", "viola-trainer bug kalos gym-leader seasonal-outfit artistic field exr-tech", "/images/0F_KALOS/Viola_Vivillon.png", "yellow")}
                            {SyncPairIcon("Brycen-Man & Zoroark", "brycen-trainer dark unova special-costume artistic masked tech exr-strike", "/images/0E_UNOVA/Byrcen-Man_Zoroark.png", "green")}
                            {SyncPairIcon("Kris & Jolteon", "kris-trainer electric johto main-character pigtails knowledgeable tech exr-none variety", "/images/0B_JOHTO/0B_JOHTO_0A-03_VS_Kris.png", "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("May (Anniversary 2022) & Latias", "may-trainer psychic hoenn seasonal-outfit free-spirit battle-partner tech exr-field pokefair", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2022_May.png", "red")}
                            {SyncPairIcon("Giovanni & Rhydon", "giovanni-trainer ground kanto villain field exr-strike variety", "/images/0A_KANTO/0A_KANTO_0D-01b_Giovanni (Pose 2).png", "red")}
                            {SyncPairIcon("Tate (Summer 2023) & Jirachi", "tate-trainer steel hoenn gym-leader seasonal-outfit space-cadet tech exr-none", "/images/0Y_SEASONALS/0Z_0B_SUM_2023_Tate.png", "orange")}
                            {SyncPairIcon("Lance & Dragonair", "lance-trainer dragon kanto champion cape tech exr-none variety", "/images/0A_KANTO/0A_KANTO_0C-04b_Lance.png", "orange")}
                            {SyncPairIcon("Thorton & Magnezone", "thorton-trainer steel sinnoh battle-facility-foe knowledgeable gadgeteer field exr-support variety", "/images/0D_SINNOH/Thorton_Magnezone.png", "orange")}
                            {SyncPairIcon("Noland & Ninjask", "noland-trainer bug hoenn battle-facility-foe knowledgeable sprint exr-strike variety", "/images/0C_HOENN/Noland_Ninjask.png", "yellow")}
                            {SyncPairIcon("Greta & Breloom", "greta-trainer grass hoenn battle-facility-foe body-builder passionate-spirit sprint exr-field pokefair", "/images/0C_HOENN/Greta_Breloom_5.png", "yellow")}
                            {SyncPairIcon("Bede & Hatterene", "bede-trainer fairy galar rival galar-adventurer tech exr-field pokefair", "/images/0H_GALAR/0H_GALAR_0A-05_Bede.png", "yellow")}
                            {SyncPairIcon("Nemona & Pawmot", "nemona-trainer electric paldea rival champion passionate-spirit sprint exr-none pokefair", "/images/0I_PALDEA/0J_PALDEA_0A-03_Nemona.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Steven & Deoxys (Speed Forme)", "steven-trainer psychic hoenn champion sygna-suit space-cadet tech exr-support pokefair", "/images/0Z_OTHER-FORMES/0C_HOENN_0C-05_ssSteven_DSpeed_.png", "green")}
                            {SyncPairIcon("Ariana & Arbok", "ariana-trainer poison johto villain tech exr-strike variety", "/images/0B_JOHTO/0B_JOHTO_0D-02_Ariana.png", "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            {SyncPairIcon("Lysandre & Yveltal", "lysandre-trainer flying kalos villain gadgeteer old-colleagues strike exr-sprint pokefair", "/images/0F_KALOS/0F_KALOS_0D-01_Lysandre.png", "red")}
                            {SyncPairIcon("Sygna Suit Leaf & Venusaur", "leaf-trainer grass kanto sygna-suit pallet-town tech exr-support pokefair", "/images/0A_KANTO/0A_KANTO_0A-03_SSLeaf.png", "red")}
                            {SyncPairIcon("Bianca & Musharna", "bianca-trainer psychic unova rival glasses unova-adventurer tech exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0A-04_Bianca.png", "orange")}
                            {SyncPairIcon("Sygna Suit Steven & Deoxys (Normal Forme)", "steven-trainer psychic hoenn champion sygna-suit space-cadet tech exr-support pokefair", "/images/0C_HOENN/0C_HOENN_0C-05_ssSteven_ANormal_.png", "orange")}
                            {SyncPairIcon("Dawn (New Year's 2023) & Oricorio", "dawn-trainer ghost sinnoh main-character seasonal-outfit contest-lover tech exr-none", "/images/0Y_SEASONALS/0Z_0D_NY_2023_Dawn.png", "orange")}
                            {SyncPairIcon("Rosa (Special Costume) & Shaymin Sky Forme", "rosa-trainer grass unova main-character special-costume tech exr-none", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2022_Rosa.png", "yellow")}
                            {SyncPairIcon("Marnie & Morpeko", "marnie-trainer electric galar rival pigtains fancy-lady tech exr-none pokefair has-lodge", "/images/0H_GALAR/0H_GALAR_0A-04_Marnie.png", "yellow")}
                            {SyncPairIcon("Serena & Delphox", "serena-trainer fire kalos main-character sunglasses kalos-neighbors tech exr-none spotlight ticket has-lodge", "/images/0F_KALOS/0F_KALOS_0A-02_Serena.png", "yellow")}
                            {SyncPairIcon("Kiawe & Arcanine", "kiawe-trainer fire alola trial-giver body-builder artistic tech exr-none variety", "/images/0G_ALOLA/0G_ALOLA_0B-03_Kiawe.png", "yellow")}
                            {SyncPairIcon("Gordie & Coalossal", "gordie-trainer rock galar gym-leader sunglasses tech exr-none spotlight ticket", "/images/0H_GALAR/0H_GALAR_0B-06_Gordie.png", "green")}
                            {SyncPairIcon("Colress & Klinklang", "colres-trainer steel unova villain glasses researcher tech exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0D-02_Colress.png", "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            {SyncPairIcon("Iris (Alt.) & Hydreigon", "iris-trainer dragon unova champion undella-town tech exr-sprint pokefair", "/images/0E_UNOVA/0E_UNOVA_0C-01-2_IrisChampion.png", "red")}
                            {SyncPairIcon("Whitney (Holiday 2022) & Sawsbuck", "whitney-trainer normal johto gym-leader seasonal-outfit pokeathlete tech exr-none", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2022_Whitney.png", "red")}
                            {SyncPairIcon("Plumeria & Gengar", "plumeria-trainer poison alola villain grown-woman sprint exr-tech variety", "/images/0G_ALOLA/Plumeria_Gengar.png", "red")}
                            {SyncPairIcon("Bertha & Hippowdon", "bertha-trainer ground sinnoh elite-four scarf veteran-trainer tech exr-none spotlight ticket", "/images/0D_SINNOH/0D_SINNOH_0C-02_Bertha.png", "orange")}
                            {SyncPairIcon("The Masked Royal & Incineroar", "kukui-trainer dark alola battle-facility-foe masked body-builder tech exr-none spotlight ticket", "/images/0G_ALOLA/0G_ALOLA_0E-02_MaskedRoyal.png", "orange")}
                            {SyncPairIcon("Lucian & Girafarig", "lucian-trainer psychic sinnoh elite-four glasses knowledgeable tech exr-none spotlight ticket", "/images/0D_SINNOH/0D_SINNOH_0C-04_Lucian.png", "orange")}
                            {SyncPairIcon("Sygna Suit Grimsley (Kimono) & Bisharp", "grimsley-trainer stel alola scarf free-spirit tech exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0C-04_GrimsleyKimono.png", "yellow")}
                            {SyncPairIcon("Courtney & Camerupt", "courtney-trainer ground hoenn villain battle-partner tech exr-none spotlight ticket", "/images/0C_HOENN/0C_HOENN_0D-03_Courtney.png", "yellow")}
                            {SyncPairIcon("Ghetsis & Kyurem", "ghetsis-trainer ice unova villain cape tech exr-none legendary-adventure", "/images/0E_UNOVA/0E_UNOVA_0D-01_Ghetsis.png", "yellow")}
                            {SyncPairIcon("Marnie (Summer 2021) & Grimmsnarl", "marnie-trainer fairy galar rival seasonal-outfit galar-adventurer tech exr-none", "/images/0Y_SEASONALS/0Z_0B_SUM_2021_Marnie.png", "green")}
                            {SyncPairIcon("Steven & Metagross", "steven-trainer steel hoenn champion rock-lover space-cadet strike exr-support pokefair has-lodge", "/images/0C_HOENN/0C_HOENN_0C-05_Steven.png", "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            {SyncPairIcon("Tierno & Talonflame", "tierno-trainer fire kalos rival artistic field exr-none training-ticket", "/images/0F_KALOS/Tierno_0663.png", "red")}
                            {SyncPairIcon("Nessa (Holiday 2021) & Eiscue", "nessa-trainer ice galar seasonal-outfit artistic grown-woman tech exr-none", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2021_Nessa.png", "red")}
                            {SyncPairIcon("Serena (Palentine's 2021) & Whimsicott", "serena-trainer fairy kalos seasonal-outfit sweet-tooth cook tech exr-none", "/images/0Y_SEASONALS/0Z_0E_PAL_2021_Serena.png", "orange")}
                            {SyncPairIcon("Ingo (Special Costume) & Accelgor", "ingo-trainer bug unova special-costume glasses battle-partner tech exr-none", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2022_Ingo.png", "orange")}
                            {SyncPairIcon("Archer & Houndoom", "archer-trainer dark johto villain sprint exr-tech variety", "/images/0B_JOHTO/0B_JOHTO_0D-01_Archer.png", "orange")}
                            {SyncPairIcon("Petrel & Weezing", "petrel-trainer poison johto villain strike exr-support variety", "/images/0B_JOHTO/0B_JOHTO_0D-03_Petrel.png", "yellow")}
                            {SyncPairIcon("Victor & Spectrier", "victor-trainer ghost galar main-character galar-adventurer field exr-none event", "/images/0H_GALAR/0H_GALAR_0A-01_SpecialVictor.png", "yellow")}
                            {SyncPairIcon("Karen & Houndoom", "karen-trainer dark johto elite-four grown-woman strike exr-none spotlight ticket", "/images/0B_JOHTO/0B_JOHTO_0C-04_Karen.png", "yellow")}
                            {SyncPairIcon("Serena & Fletchling", "serena-trainer flying kalos main-character sunglasses tech exr-none lodge-pair", "/images/0F_KALOS/0F_KALOS_0A-02_TL_Serena.png", "green")}
                            {SyncPairIcon("Shauna & Delcatty", "shauna-trainer normal kalos rival pigtails tech exr-none lodge-pair", "/images/0F_KALOS/Shauna_0301.png", "green")}
                            {SyncPairIcon("Malva & Talonflame", "malva-trainer fire kalos elite-four sunglasses grown-woman sprint exr-tech spotlight", "/images/0F_KALOS/Malva_Talonflame_5.png", "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("Wally & Altaria", "wally-trainer dragon hoenn rival battle-facility-foe passionate-spirit sprint exr-none training-ticket", "/images/0C_HOENN/Wally_Altaria_5.png", "red")}
                            {SyncPairIcon("Hugh & Unfezant", "hugh-trainer flying unova rival unova-adventurer passionate-spirit sprint exr-none training-ticket", "/images/0E_UNOVA/Hugh_Unfezant_5.png", "red")}
                            {SyncPairIcon("Sidney & Absol", "sidney-trainer dark hoenn elite-four passionate-spirit tech exr-none spotlight tech", "/images/0C_HOENN/0C_HOENN_0C-01_Sidney.png", "orange")}
                            {SyncPairIcon("Volkner & Luxray", "volkner-trainer electric sinnoh gym-leader sinnoh-bros gadgeteer tech exr-none spotlight ticket has-lodge", "/images/0D_SINNOH/0D_SINNOH_0B-08_Volkner.png", "orange")}
                            {SyncPairIcon("N & Sigilyph", "n-trainer psychic unova rival villain unova-adventurer tech exr-none lodge-pair", "/images/0E_UNOVA/0E_UNOVA_0E-03_TL_N.png", "yellow")}
                            {SyncPairIcon("Agatha & Gengar", "agatha-trainer ghost kanto elite-four veteran-trainer old-timer", "/images/0A_KANTO/Agatha_Gengar_4.png", "yellow")}
                            {SyncPairIcon("Clemont & Heliolisk", "clemont-trainer electric kalos gym-leader glasses gadgeteer tech exr-none spotlight ticket", "/images/0F_KALOS/0F_KALOS_0B-05_Clemont.png", "yellow")}
                            {SyncPairIcon("Will & Xatu", "will-trainer psychic johto elite-four masked tech exr-none genpool", "/images/0B_JOHTO/Will_0178_4.png", "yellow")}
                            {SyncPairIcon("Darach & Staraptor", "darach-trainer flying sinnoh battle-facility-foe glasses undella-town tech exr-none spotlight ticket", "/images/0D_SINNOH/0D_SINNOH_0E-04_Darach.png", "green")}
                            {SyncPairIcon("Skyla (Holiday 2020) & Togekiss", "skyla-trainer flying unova seasonal-outfit undella-town tech exr-none", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2020_Skyla.png", "green")}
                            {SyncPairIcon("Barry & Floatzel", "barry-trainer water sinnoh rival scarf passionate-spirit sprint exr-none training-ticket", "/images/0D_SINNOH/Barry_Floatzel_5.png", "green")}
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Rosa & Dewott", "rosa-trainer water unova main-character pigtails unova-adventurer tech exr-none lodge-pair", "/images/0E_UNOVA/0E_UNOVA_0A-06_TL_Rosa.png", "red")}
                            {SyncPairIcon("Silver & Feraligatr", "silver-trainer water johto rival battle-partner tech exr-none lodge-pair", "/images/0B_JOHTO/0B_JOHTO_0A-04_TL_Silver.png", "red")}
                            {SyncPairIcon("Irida & Flareon", "irida-trainer fire sinnoh nature-lover artistic tech exr-none lodge-pair", "/images/0D1_HISUI/0I_HISUI_0B-02_TL_Irida.png", "orange")}
                            {SyncPairIcon("Dawn & Torterra", "dawn-trainer grass sinnoh main-character scarf contest-lover support exr-none spotlight ticket has-lodge", "/images/0D_SINNOH/0D_SINNOH_0A-02_Dawn.png", "orange")}
                            {SyncPairIcon("Gladion & Weavile", "gladion-trainer ice alola rval villain alola-adventurer field exr-none training-ticket", "/images/0G_ALOLA/Gladion_Weavile_5.png", "orange")}
                            {SyncPairIcon("Professor Oak & Mew", "oak-trainer psychic kanto researcher old-timer tech exr-none story", "/images/0A_KANTO/Oak_Mew_3.png", "yellow")}
                            {SyncPairIcon("Marnie & Scrafty", "marnie-trainer dark galar rival pigtails fancy-lady field exr-none training-ticket", "/images/0H_GALAR/Marnie_Scrafty_5.png", "yellow")}
                            {SyncPairIcon("Professor Kukui & Lycanroc Dawn", "kukui-trainer rock alola sunglasses researcher knowledgeable tech exr-none spotlight ticket", "/images/0G_ALOLA/0G_ALOLA_0E-01_Kukui.png", "yellow")}
                            {SyncPairIcon("Plumeria & Salazzle", "plumeria-trainer poison alola villain grown-woman strike exr-none spotlight ticket", "/images/0G_ALOLA/0G_ALOLA_0D-02_Plumeria.png", "green")}
                            {SyncPairIcon("Blue & Alakazam", "blue-trainer psychic kanto champion rival pallet-town sprint exr-none training-ticket", "/images/0A_KANTO/Blue_Alakazam_5.png", "green")}
                            {SyncPairIcon("Cheren & Liepard", "cheren-trainer dark unova gym-leader rival unova-adventurer sprint exr-none training-ticket", "/images/0E_UNOVA/Cheren_0510_5.png", "green")}
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            {SyncPairIcon("Rose & Perrserker", "rose-trainer steel galar villain passionate-spirit tech exr-none battle-point", "/images/0H_GALAR/Rose_Perrserker_4.png", "red")}
                            {SyncPairIcon("Wikstrom & Aegislash", "wikstrom-trainer steel kalos elite-four body-builder passionate-spirit tech exr-none genpool", "/images/0F_KALOS/0F_KALOS_0C-03_Wikstrom.png", "red")}
                            {SyncPairIcon("Silver & Crobat", "silver-trainer flying johto rival battle-partner field exr-none training-ticket", "/images/0B_JOHTO/Silver_Crobat_5.png", "red")}
                            {SyncPairIcon("Cheren & Purrloin", "cheren-trainer dark unova gym-leader rival unova-adventurer tech exr-none lodge-pair", "/images/0E_UNOVA/Cheren_Purrlion_4.png", "orange")}
                            {SyncPairIcon("Nanu & Alolan Persian", "nanu-trainer dark alola trial-giver veteran-trainer tech exr-none story", "/images/0G_ALOLA/0G_ALOLA_0B-10_Nanu.png", "orange")}
                            {SyncPairIcon("Nemona & Lycanroc Midday", "nemona-trainer rock paldea rival champion passionate-spirit field exr-none training-ticket", "/images/0I_PALDEA/Nemona_Lycanroc_5.png", "orange")}
                            {SyncPairIcon("Eve (Poké Kid) & Eevee", "eve-trainer normal galar tech exr-none event", "/images/0H_GALAR/Eve.png", "yellow")}
                            {SyncPairIcon("May (Spring 2021) & Lopunny", "may-trainer normal hoenn seasonal-outfit researcher battle-partner", "/images/0Y_SEASONALS/0Z_0F_SPRING_2021_May.png", "yellow")}
                            {SyncPairIcon("Whitney & Miltank", "whitney-trainer normal johto gym-leader pigtails pokeathlete tech exr-none genpool", "/images/0B_JOHTO/0B_JOHTO_0B-03_Whitney.png", "yellow")}
                            {SyncPairIcon("Lance & Kingdra", "lance-trainer dragon kanto champion cape support exr-none lodge-pair", "/images/0A_KANTO/Lance_Kingdra_4.png", "green")}
                            {SyncPairIcon("Lisia & Altaria", "lisia-trainer dragon hoenn artistic contest-lover", "/images/0C_HOENN/0C_HOENN_0E-03_Lisia.png", "green")}
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            {SyncPairIcon("Winona & Pelipper", "winona-trainer flying hoenn gym-leader nature-lover free-spirit tech exr-none genpool", "/images/0C_HOENN/0C_HOENN_0B-06_Winona.png", "red")}
                            {SyncPairIcon("Player & Gyarados (Tech)", "player-trainer water main-character pasio tech exr-none egg", "/images/0Z_EGGS/MALE/Egg_0130_02sa.png", "red")}
                            {SyncPairIcon("Falkner & Pidgeot", "falkner-trainer flying johto gym-leader pokeathlete tech exr-none battle-point", "/images/0B_JOHTO/0B_JOHTO_0B-01-BP_Falkner.png", "red")}
                            {SyncPairIcon("Will & Slowbro", "will-trainer psychic johto elite-four masked tech exr-none battle-point", "/images/0B_JOHTO/Will_Slowbro_4.png", "orange")}
                            {SyncPairIcon("Brawly & Hariyama", "brawly-trainer fighting hoenn gym-leader body-builder nature-lover tech exr-none genpool", "/images/0C_HOENN/0C_HOENN_0B-02_Brawly.png", "orange")}
                            {SyncPairIcon("Acerola (Fall 2020) & Mimikyu", "acerola-trainer ghost alola trial-giver seasonal-outfit fancy-lady tech exr-none", "/images/0Y_SEASONALS/0Z_0C_FALL_2020_Acerola.png", "orange")}
                            {SyncPairIcon("Candice & Abomasnow", "candice-trainer ice sinnoh gym-leader pigtails battleground-foe tech exr-none genpool", "/images/0D_SINNOH/0D_SINNOH_0B-07_Candice.png", "yellow")}
                            {SyncPairIcon("Blaine & Rapidash", "blaine-trainer fire kanto gym-leader sunglasses researcher tech exr-none genpool", "/images/0A_KANTO/0A_KANTO_0B-07_Blaine.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Misty & Vaporeon", "misty-trainer water kanto sygna-suit battle-facility-foe passionate-spirit tech exr-none spotlight ticket", "/images/0A_KANTO/0A_KANTO_0B-02_SSMisty.png", "green")}
                            {SyncPairIcon("Grimsley & Liepard", "grimsley-trainer dark unova elite-four scarf tech exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0C-04_Grimsley.png", "green")}
                            {SyncPairIcon("Lillie & Comfey", "lillie-trainer fairy alola fancy-lady alola-adventurer battle-partner tech exr-none lodge-pair", "/images/0G_ALOLA/0G_ALOLA_0A-04_TL_Lillie.png", "green")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Sophocles & Togedemaru", "sophocles-trainer electric alola trial-giver gadgeteer observatory-cousin tech exr-none genpool", "/images/0G_ALOLA/Sophocles_Togedemaru_4.png", "red")}
                            {SyncPairIcon("Misty & Starmie", "misty-trainer water kanto gym-leader passionate-spirit support exr-none story", "/images/0A_KANTO/0A_KANTO_0B-02_Misty.png", "orange")}
                            {SyncPairIcon("Morty (Fall 2021) & Banette", "morty-trainer ghost johto seasonal-outfit cape supernatural tech exr-none", "/images/0Y_SEASONALS/0Z_0C_FALL_2021_Morty.png", "orange")}
                            {SyncPairIcon("Steven & Cradily", "steven-trainer rock hoenn champion rock-lover space-cadet tech exr-none lodge-pair", "/images/0C_HOENN/0C_HOENN_0C-05-BP_Steven.png", "orange")}
                            {SyncPairIcon("Erika & Vileplume", "erika-trainer grass kanto gym-leader nature-love fancy-lady tech exr-none story", "/images/0A_KANTO/0A_KANTO_0B-04a_Erika.png", "yellow")}
                            {SyncPairIcon("Janine & Ariados", "janine-trainer poison kanto gym-leader scarf ninja-family tech exr-none genpool", "/images/0A_KANTO/Janine_Ariados_3.png", "yellow")}
                            {SyncPairIcon("Brock & Onix", "brock-trainer rock kanto gym-leader rock-lover body-builder tech exr-none story", "/images/0A_KANTO/0A_KANTO_0B-01_Brock.png", "yellow")}
                            {SyncPairIcon("Wallace & Milotic", "wallace-trainer water hoenn gym-leader scarf contest-lover tech exr-none spotlight ticket", "/images/0C_HOENN/0C_HOENN_0B-08_Wallace.png", "green")}
                            {SyncPairIcon("Crasher Wake & Floatzel", "crasherwake-trainer water sinnoh gym-leader body-builder masked tech exr-none genpool", "/images/0D_SINNOH/0D_SINNOH_0B-04_CrasherWake.png", "green")}
                            {SyncPairIcon("Marshal & Conkeldurr", "marshal-trainer fighting unova elite-four body-builder passionate-spirit strike exr-none genpool", "/images/0E_UNOVA/0E_UNOVA_0C-03_Marshal.png", "green")}
                            {SyncPairIcon("Kahili & Toucannon", "kahili-trainer flying alola elite-four fancy-late grown-woman strike exr-none genpool", "/images/0G_ALOLA/0G_ALOLA_0C-04_Kahili.png", "green")}
                        </div>
                        <div className="dminus-row tierlist-row">
                            <div className="tier-title">D-</div>
                            {SyncPairIcon("Calem & Meowstic", "calem-trainer psychic kalos main-character sunglasses kalos-neighbors tech exr-none story has-lodge", "/images/0F_KALOS/0F_KALOS_0A-01_Calem.png", "red")}
                            {SyncPairIcon("Lt. Surge & Electrode", "ltsurge-trainer electric kanto gym-leader sunglasses body-builder tech exr-none genpool", "/images/0A_KANTO/0A_KANTO_0B-03a_LtSurge.png", "red")}
                            {SyncPairIcon("Flannery & Torkoal", "flannery-trainer fire hoenn gym-leader grown-woman passionate-spirit tech exr-none story", "/images/0C_HOENN/0C_HOENN_0B-04_Flannery.png", "orange")}
                            {SyncPairIcon("Lucy & Seviper", "lucy-trainer poison hoenn battle-facility-foe grown-woman passionate-spirit tech exr-none genpool", "/images/0C_HOENN/0C_HOENN_0E-02_Lucy.png", "orange")}
                            {SyncPairIcon("Player & Pikachu", "player-trainer electric main-character pasio strike exr-none story", "/images/00_PASIO/00_PASIO_0A-01b_Pikachu.png", "yellow")}
                            {SyncPairIcon("Norman & Slaking", "norman-trainer normal hoenn gym-leader hoenn-family passionate-spirit strike exr-none story", "/images/0C_HOENN/0C_HOENN_0B-05_Norman.png", "yellow")}
                            {SyncPairIcon("Grant & Aurorus", "grant-trainer rock kalos gym-leader sweet-tooth rock-lover tech exr-none genpool", "/images/0F_KALOS/0F_KALOS_0B-02_Grant.png", "green")}
                            {SyncPairIcon("Clay & Seismitoad", "clay-trainer ground unova gym-leader veteran-trainer rock-lover tech exr-none genpool", "/images/0E_UNOVA/0E_UNOVA_0B-05_Clay.png", "green")}
                            {SyncPairIcon("Lorelei & Lapras", "lorelei-trainer ice kanto elite-four glasses grown-woman tech exr-none genpool", "/images/0A_KANTO/0A_KANTO_0C-01_Lorelei.png", "green")}
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
                            {SyncPairIcon("Arc Suit Steven & Metagross", "steven-trainer steel hoenn champion rock-lover multi exr-support arc-fair", "/images/0C_HOENN/StevenArc_Metagross_5ex.png", "red")}
                            {SyncPairIcon("Blue (Champion) & Zapdos", "blue-trainer electric kanto rival champion pallet-town support exr-strike master-fair", "/images/0A_KANTO/0A_KANTO_0A-02_NCBlue.png", "red")}
                            {SyncPairIcon("Rosa (Champion) & Meloetta", "rosa-trainer psychic unova main-character champion unova-adventurer support exr-sprint master-fair", "/images/0E_UNOVA/Rosa_Meloetta_Psy.png", "orange")}
                            {SyncPairIcon("Sygna Suit Mina & Tapu Fini", "mina-trainer fairy alola trial-giver sygna-suit free-spirit support exr-sprint pokefair", "/images/0G_ALOLA/0G_ALOLA_0B-07_ssMina.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Cynthia (Aura) & Lucario", "cynthia-trainer fighting sinnoh champion sygna-suit passionate-spirit support exr-sprint master-fair", "/images/0D_SINNOH/0D_SINNOH_0C-05_SSACynthia.png", "yellow")}
                            {SyncPairIcon("Chase & Pikachu", "chase-trainer electric kanto main-character pallet-town support exr-sprint pokefair", "/images/0A_KANTO/Chase_Pikachu.png", "green")}
                            {SyncPairIcon("Elaine & Eevee", "elaine-trainer normal kanto main-character pallet-town support exr-tech pokefair", "/images/0A_KANTO/Elaine.png", "green")}
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            {SyncPairIcon("Sygna Suit Morty & Ho-Oh★", "morty-trainer fire johto gym-leader sygna-suit supernatural support exr-field pokefair shiny", "/images/0B_JOHTO/0B_JOHTO_0B-04_SSMorty.png", "red")}
                            {SyncPairIcon("Penny & Sylveon", "penny-trainer fairy paldea glasses gadgeteer support exr-strike pokefair", "/images/0I_PALDEA/Penny_Sylveon.png", "orange")}
                            {SyncPairIcon("Sygna Suit Acerola & Tapu Bulu", "acerola-trainer grass alola trial-giver sygna-suit free-spirit support exr-tech pokefair", "/images/0G_ALOLA/0G_ALOLA_0C-03_ssAcerola.png", "orange")}
                            {SyncPairIcon("Sygna Suit Kris & Suicune", "kris-trainer water johto main-character sygna-suit knowledgeable support exr-sprint master-fair", "/images/0B_JOHTO/0B_JOHTO_0A-03_ssKris.png", "orange")}
                            {SyncPairIcon("Eri & Annihilape", "eri-trainer fighting paldea body-builder passionate-spirit", "/images/0I_PALDEA/Eri_0979.png", "orange")}
                            {SyncPairIcon("Bugsy (Holiday 2024) & Kricketune", "bugsy-trainer bug johto gym-leader seasonal-outfit artistic support exr-field", "/images/0B_JOHTO/Bugsy_0402_5.png", "yellow")}
                            {SyncPairIcon("Argenta & Skarmory", "argenta-trainer steel sinnoh battle-facility-foe grown-woman artistic support exr-tech pokefair", "/images/0D_SINNOH/0D_SINNOH_0E-07_Argenta.png", "yellow")}
                            {SyncPairIcon("Grusha & Cetitan", "grusha-trainer ice paldea gym-leader scarf nature-lover support exr-tech pokefair", "/images/0I_PALDEA/Grusha_Cetitan.png", "yellow")}
                            {SyncPairIcon("Rika & Clodsire", "rika-trainer ground paldea elite-four knowledgeable grown-woman support exr-field pokefair has-lodge", "/images/0I_PALDEA/Rika_Clodsire.png", "yellow")}
                            {SyncPairIcon("Bede (Champion) & Galarian Articuno", "bed-trainer psychic galar champion scarf galar-adventurer support exr-sprint master-fair", "/images/0H_GALAR/0H_GALAR_0A-05_NeoChampBede.png", "green")}
                            {SyncPairIcon("Iono & Bellibolt", "iono-trainer electric paldea gym-leader artistic free-spirit support exr-strike pokefair has-lodge", "/images/0I_PALDEA/Iono_0939.png", "green")}
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            {SyncPairIcon("Calem (Champion) & Greninja★", "calem-trainer dark kalos main-character champion scarf support exr-tech master-fair shiny", "/images/0F_KALOS/0F_KALOS_0A-01_ChampCalem.png", "red")}
                            {SyncPairIcon("Sygna Suit Dawn & Cresselia", "dawn-trainer psychic sinnoh main-character sygna-suit support exr-sprint pokefair", "/images/0D_SINNOH/0D_SINNOH_0A-02_SSDawn.png", "red")}
                            {SyncPairIcon("Red & Snorlax", "red-trainer normal kanto main-character pallet-town passionate-spirit support exr-sprint pokefair", "/images/0A_KANTO/0A_KANTO_0A-01_Red.png", "red")}
                            {SyncPairIcon("Milo & Eldegoss", "milo-trainer grass galar gym-leader nature-lover body-builder support exr-sprint pokefair", "/images/0H_GALAR/Milo_0830_5.png", "orange")}
                            {SyncPairIcon("Kabu & Centiskorch", "kabu-trainer fire galar gym-leader passionate-spirit veteran-trainer support exr-strike pokefair has-lode", "/images/0H_GALAR/Kabu_Centiskorch.png", "orange")}
                            {SyncPairIcon("Acerola (Summer 2024) & Jellicent", "acerola-trainer ghost alola trial-giver seasonal-outfit free-spirit support exr-tech", "/images/0G_ALOLA/Acerola_Jellicent_5.png", "yellow")}
                            {SyncPairIcon("Anabel & Snorlax", "anabel-trainer normal alola grown-woman support exr-field pokefair", "/images/0G_ALOLA/0G_ALOLA_0E-03_Anabel.png", "yellow")}
                            {SyncPairIcon("Bellelba & Swoobat", "sabrina-traner psychic unova special-costume artistic grown-woman support exr-field", "/images/0E_UNOVA/Bellelba_Swoobat.png", "yellow")}
                            {SyncPairIcon("Elio (Alt.) & Stakataka", "elio-trainer rock alola main-character passionate-spirit alola-adventurer support exr-sprint pokefair", "/images/0G_ALOLA/Elio_Stakataka_5.png", "yellow")}
                            {SyncPairIcon("Falkner & Noctowl", "falkner-trainer flying johto gym-leader pokeathlete support exr-tech variety", "/images/0B_JOHTO/Falkner_Noctowl.png", "green")}
                            {SyncPairIcon("Arven & Mabosstiff", "arven-trainer dark paldea rival cook knowledgeable support exr-tech pokefair has-lodge", "/images/0I_PALDEA/Arven_Mabosstiff_5.png", "green")}
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            {SyncPairIcon("Sygna Suit Brendan & Latios", "brendan-trainer dragon hoenn main-character sygna-suit space-cadet support exr-sprint pokefair", "/images/0C_HOENN/0C_HOENN_0A-01_SSBrendan.png", "red")}
                            {SyncPairIcon("Mallow & Shiinotic", "mallow-trainer grass alola trial-giver cook support exr-none variety", "/images/0G_ALOLA/0G_ALOLA_0B-04_vMallow.png", "red")}
                            {SyncPairIcon("Sygna Suit Blue & Blastoise", "blue-trainer water kanto rival sygna-suit pallet-town support exr-sprint pokefair", "/images/0A_KANTO/0A_KANTO_0A-02_SSBlue.png", "orange")}
                            {SyncPairIcon("Shauna (Special Costume) & Klefki", "shauna-trainer steel kalos special-costume pigtails support exr-none", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2023_Shauna.png", "orange")}
                            {SyncPairIcon("Volo & Togepi", "volo-trainer fairy sinnoh knowledgeable researcher field exr-tech pokefair has-lodge", "/images/0D1_HISUI/Volo_Togepi_5.png", "orange")}
                            {SyncPairIcon("Jasmine (Holiday 2022) & Ampharos", "jasmine-trainer electric johto gym-leader seasonal-outfit pokeathlete support exr-none", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2022_Jasmine.png", "orange")}
                            {SyncPairIcon("Steven (Special Costume) & Stoutland★", "steven-trainer normal hoenn special-costume rock-lover space-cadet tech exr-none shiny", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2023_Steven.png", "yellow")}
                            {SyncPairIcon("Ingo & Excadrill", "ingo-trainer ground unova battle-facility-foe battle-partner support exr-tech pokefair", "/images/0E_UNOVA/0E_UNOVA_0E-01_Ingo.png", "yellow")}
                            {SyncPairIcon("Professor Sycamore & Xerneas", "sycamore-trainer fairy kalos knowledgeable researcher old-colleagues support exr-none legendary-adventure has-lodge", "/images/0F_KALOS/0F_KALOS_0F-01_ProfSycamore.png", "yellow")}
                            {SyncPairIcon("Sonia & Yamper", "sonia-trainer electric galar sunglasses researcher grown-woman support exr-none spotlight ticket", "/images/0H_GALAR/0H_GALAR_0F-01_Sonia.png", "green")}
                            {SyncPairIcon("Victor (Palentine's 2024) & Greedent", "victor-trainer normal galar main-character seasonal-outfit cook support exr-tech", "/images/0H_GALAR/Victor_Greedent.png", "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Leaf & Eevee", "leaf-trainer normal kanto main-character pallet-town support exr-none spotlight ticket has-lodge", "/images/0A_KANTO/0A_KANTO_0A-03_Leaf.png", "red")}
                            {SyncPairIcon("Aaron & Vespiquen", "aaron-trainer bug sinnoh elite-four nature-lover support exr-none spotlight ticket", "/images/0D_SINNOH/0D_SINNOH_0C-01_Aaron.png", "red")}
                            {SyncPairIcon("Ball Guy & Amoonguss", "ballguy-trainer poison galar support exr-none variety", "/images/0H_GALAR/0H_GALAR_0F-01_BallGuy.png", "orange")}
                            {SyncPairIcon("Sawyer & Gimmighoul", "sawyer-trainer ghost sunglasses body-builder pasio support exr-sprint variety", "/images/00_PASIO/Sawyer_Gimmighoul_5.png", "orange")}
                            {SyncPairIcon("Lillie (Special Costume) & Polteageist", "lillie-trainer ghost alola special-costume fancy-lady support exr-none", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2022_Lillie.png", "orange")}
                            {SyncPairIcon("Phoebe (Fall 2023) & Cofagrigus", "phoebe-trainer ghost hoenn elite-four seasonal-outfit supernatural support exr-tech", "/images/0C_HOENN/Phoebe_Cofagrigus.png", "orange")}
                            {SyncPairIcon("Burgh (Spring 2021) & Togepi", "burgh-trainer fairy unova seasonal-outfit artistic free-spirit support exr-none", "/images/0Y_SEASONALS/0Z_0F_SPRING_2021_Burgh.png", "yellow")}
                            {SyncPairIcon("Hop & Zamazenta", "hop-trainer galar rival galar-adventurer researcher support exr-none legendary-adventure", "/images/0H_GALAR/0H_GALAR_0A-03_Hop.png", "yellow")}
                            {SyncPairIcon("Melony & Lapras", "melony-trainer ice galar gym-leader veteran-trainer grown-woman support exr-none spotlight ticket", "/images/0H_GALAR/0H_GALAR_0B-06b_Melony.png", "yellow")}
                            {SyncPairIcon("Elio & Primarina", "elio-trainer water alola main-character nature-lover alola-adventurer support exr-none spotlight ticket", "/images/0G_ALOLA/0G_ALOLA_0A-01_Elio.png", "green")}
                            {SyncPairIcon("Mallow (Palentine's 2023) & Appletun", "mallow-trainer dragon alola seasonal-outfit pigtails cook support exr-none", "/images/0Y_SEASONALS/0Z_0E_PAL_2023_Mallow.png", "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Clair (New Year's 2024) & Drampa", "clair-trainer dragon johto gym-leader seasonal-outfit support exr-tech", "/images/0B_JOHTO/Clair_0780.png", "red")}
                            {SyncPairIcon("Jasmine (Special Costume) & Celesteela", "jasmine-trainer steel johto pokeathlete contest-lover special-costume support exr-none", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2021_Jasmine.png", "red")}
                            {SyncPairIcon("Proton & Golbat", "proton-trainer flying johto villain support exr-tech variety", "/images/0B_JOHTO/0B_JOHTO_0D-04_Proton.png", "orange")}
                            {SyncPairIcon("Tierno & Crawdaunt", "tierno-trainer dark kalos rival artistic support exr-tech spotlight ticket", "/images/0F_KALOS/Tierno_Crawdaunt_5.png", "orange")}
                            {SyncPairIcon("Lyra (Special Costume) & Phanpy", "lyra-trainer ground johto special-costume pigtaile pokeathlete support exr-none", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2023_Lyra.png", "orange")}
                            {SyncPairIcon("Allister (Fall 2022) & Gourgeist", "allister-trainer ghost galar seasonal-outfit masked cape support exr-none", "/images/0Y_SEASONALS/0Z_0C_FALL_2022_Allister.png", "orange")}
                            {SyncPairIcon("Bea (Palentine's 2022) & Vanilluxe", "bea-trainer ice galar seasonal-outfit scarf sweet-tooth support exr-none", "/images/0Y_SEASONALS/0Z_0E_PAL_2022_Bea.png", "yellow")}
                            {SyncPairIcon("Lorelei & Cloyster", "lorelei-trainer ice kanto elite-four glasse grown-woman support exr-none variety", "/images/0A_KANTO/0A_KANTO_0C-01b_Lorelei.png", "yellow")}
                            {SyncPairIcon("Professor Oak & Nidorino", "oak-trainer poison kanto researcher knowledgeable support exr-sprint event", "/images/0A_KANTO/Oak_Nidorino_5.png", "yellow")}
                            {SyncPairIcon("Morgan & Virizion", "morgan-trainer grass kalos battle-facility-foe battle-partner grown-woman support exr-none battle-point", "/images/0F_KALOS/Morgan_Virizion_5.png", "green")}
                            {SyncPairIcon("Professor Sycamore (Holiday 2023) & Gogoat", "sycamore-trainer grass kalos seasonal-outfit knowledgeable researcher support exr-strike", "/images/0F_KALOS/Sycamore_Gogoat.png", "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("Kiawe & Alolan Marowak", "kiawe-trainer fire alola trial-giver body-builder artistic support exr-none spotlight ticket", "/images/0G_ALOLA/0G_ALOLA_0B-03_Kiawe.png", "red")}
                            {SyncPairIcon("Guzma & Ariados", "guzma-trainer bug alola villain sunglasses support exr-tech variety", "/images/0G_ALOLA/Guzma_Ariados.png", "red")}
                            {SyncPairIcon("Agatha & Arbok", "agatha-trainer poison kanto elite-four veteran-trainer support exr-none variety", "/images/0A_KANTO/0A_KANTO_0C-03b_Agatha.png", "red")}
                            {SyncPairIcon("Bruno & Onix", "bruno-trainer rock kanto elite-four body-builder sweet-tooth support exr-none variety", "/images/0A_KANTO/0A_KANTO_0C-02b_Bruno.png", "orange")}
                            {SyncPairIcon("Falkner & Swellow", "falkner-trainer flying johto gym-leader pokeathlete support exr-none spotlight ticket", "/images/0B_JOHTO/0B_JOHTO_0B-01_Falkner.png", "orange")}
                            {SyncPairIcon("Shauna & Chesnaught", "shauna-trainer grass kalos rival pigtails support exr-none spotlight ticket has-lodge", "/images/0F_KALOS/0F_KALOS_0A-03_Shauna.png", "orange")}
                            {SyncPairIcon("Lyra & Meganium", "lyra-trainer grass johto main-character pigtails pokeathlete support exr-none spotlight ticket", "/images/0B_JOHTO/0B_JOHTO_0A-02_Lyra.png", "yellow")}
                            {SyncPairIcon("Caitlin (Fall 2021) & Sableye", "caitlin-trainer dark unova seasonal-outfit undella-town unova-adventurer support exr-none", "/images/0Y_SEASONALS/0Z_0C_FALL_2021_Caitlin.png", "yellow")}
                            {SyncPairIcon("Iono & Wattrel", "iono-trainer electric paldea gym-leader artistic free-spirit support exr-none lodge-pair", "/images/0I_PALDEA/Iono_Wattrel_4.png", "yellow")}
                            {SyncPairIcon("Tina & Flareon", "tina-trainer fire free-spirit passionate-spirit pasio support exr-none pokefair", "/images/00_PASIO/00_PASIO_0E-05_Tina.png", "green")}
                            {SyncPairIcon("Kabu & Torkoal", "kabu-trainer fire galar gym-leader passionate-spirit veteran-trainer support exr-none lodge-pair", "/images/0H_GALAR/Kabu_Torkoal_4.png", "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            {SyncPairIcon("Hilda (Summer 2022) & Grapploct★", "hilda-trainer fighting unova seasonal-oufit passionate-spirit unova-adventurer support exr-none shiny", "/images/0Y_SEASONALS/0Z_0B_SUM_2022_Hilda.png", "red")}
                            {SyncPairIcon("Blue & Exeggutor", "blue-trainer grass kanto champion rival pallet-town support exr-none lodge-pair", "/images/0A_KANTO/0A_KANTO_0A-02_TL_Blue.png", "red")}
                            {SyncPairIcon("Hilbert & Samurott", "hilbert-trainer water unova main-character unova-adventurer support exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0A-01_Hilbert.png", "red")}
                            {SyncPairIcon("Arven & Nacli", "arven-trainer rock paldea rival cook knowledgeable support exr-none lodge-pair", "/images/0I_PALDEA/Arven_0932_4.png", "orange")}
                            {SyncPairIcon("Player & Mesprit", "player-trainer psychic main-character pasio support exr-none battle-point", "/images/00_PASIO/00_PASIO_0Db_Mesprit.png", "orange")}
                            {SyncPairIcon("Player & Cobalion", "player-trainer fighting main-character pasio support exr-none battle-point", "/images/00_PASIO/00_PASIO_0Db_Cobalion.png", "orange")}
                            {SyncPairIcon("Gladion & Golbat", "gladion-trainer poison alola rival villain alola-adventurer support exr-none lodge-pair", "/images/0G_ALOLA/Gladion_Golbat.png", "orange")}
                            {SyncPairIcon("Sabrina (New Year's 2022) & Chingling", "sabrina-trainer psychic kanto seasonal-outfit supernatural support exr-none", "/images/0Y_SEASONALS/0Z_0D_NY_2022_Sabrina.png", "yellow")}
                            {SyncPairIcon("Glacia & Glalie", "glacia-trainer ice hoenn elite-four grown-woman support exr-none spotlight ticket", "/images/0C_HOENN/0C_HOENN_0C-03_Glacia.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Steven & Deoxys (Defense Forme)", "steven-trainer psychic hoenn champion sygna-suit space-cadet tech exr-support pokefair", "/images/0Z_OTHER-FORMES/0C_HOENN_0C-05_ssSteven_CDefense_.png", "green")}
                            {SyncPairIcon("Rachel & Gimmighoul", "rachel-trainer ghost pasio sunglasses free-spirit support exr-sprint variety", "/images/00_PASIO/Rachel_Gimmighoul_5.png", "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            {SyncPairIcon("Sygna Suit Elesa & Rotom", "elesa-trainer electric unova sygna-suit unova-gym-besties support exr-none spotlight ticket", "/images/0E_UNOVA/0E_UNOVA_0B-04_SSElesa.png", "red")}
                            {SyncPairIcon("Morty & Mismagius", "morty-trainer ghost johto gym-leader scarf supernatural support exr-none battle-point", "/images/0B_JOHTO/0B_JOHTO_0B-04-BP_Morty.png", "red")}
                            {SyncPairIcon("Skyla & Swanna", "skyla-trainer flying unova gym-leader undella-town unova-gym-besties support exr-none story", "/images/0E_UNOVA/0E_UNOVA_0B-06_Skyla.png", "red")}
                            {SyncPairIcon("Barry & Roserade", "barry-trainer grass sinnoh rival scarf passionate-spirit support exr-none battle-point", "/images/0D_SINNOH/0D_SINNOH_0A-03-BP_Barry.png", "orange")}
                            {SyncPairIcon("Lana & Araquanid", "lana-trainer water alola trial-giver free-spirit nature-lover support exr-none spotlight ticket has-lodge", "/images/0G_ALOLA/0G_ALOLA_0B-02_Lana.png", "orange")}
                            {SyncPairIcon("Dawn & Wormadam Plant Cloak", "dawn-trainer sinnoh main-character scarf contest-lover support exr-none lodge-pair", "/images/0D_SINNOH/0D_SINNOH_0A-02_TL_Dawn.png", "orange")}
                            {SyncPairIcon("Clemont & Magneton", "clemont-trainer electric kalos gym-leader glasses gadgeteer support exr-none battle-point", "/images/0F_KALOS/0F_KALOS_0B-05_BP_Clemont.png", "orange")}
                            {SyncPairIcon("Cheryl & Wailord", "cheryl-trainer water sinnoh grown-woman battle-partner battleground-foe support exr-none battle-point", "/images/0D_SINNOH/Cheryl_Wailord_4.png", "yellow")}
                            {SyncPairIcon("Wally & Delcatty", "wally-trainer normal hoenn rival battle-facility-foe passionate-spirit support exr-none lodge-pair", "/images/0C_HOENN/Wally_Delcatty_4.png", "yellow")}
                            {SyncPairIcon("Dana & Regice", "dana-trainer ice kalos battle-facility-foe battle-partner passionate-spirit support exr-none battle-point", "/images/0F_KALOS/Dana_Regice_5.png", "yellow")}
                            {SyncPairIcon("Evelyn & Entei", "evelyn-trainer fire kalos battle-facility-foe battle-partner fancy-lady support exr-none battle-point", "/images/0F_KALOS/Evelyn_Entei_5.png", "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            {SyncPairIcon("Nita & Landorus Incarnate Forme", "nita-trainer ground kalos battle-facility-foe battle-partner free-spirit support exr-none battle-point", "/images/0F_KALOS/Nita_Landorus_5.png", "red")}
                            {SyncPairIcon("Player & Raikou", "player-trainer electric main-character pasio support exr-none battle-point", "/images/00_PASIO/PlayerM_Raikou_5.png", "red")}
                            {SyncPairIcon("Sabrina & Alakazam", "sabrina-trainer psychic kanto gym-leader supernatural support exr-nont spotlight ticket", "/images/0A_KANTO/0A_KANTO_0B-06_Sabrina.png", "red")}
                            {SyncPairIcon("Sawyer & Honchkrow", "sawyer-trainer dark sunglasses body-builder pasio support exr-none pokefair", "/images/00_PASIO/Sawyer_Honchkrow_4.png", "orange")}
                            {SyncPairIcon("Lenora & Watchog", "lenora-trainer normal unova knowledgeable rock-lover support exr-tech spotlight ticket", "/images/0E_UNOVA/Lenora_Watchdog.png", "orange")}
                            {SyncPairIcon("Trevor & Florges", "trevor-trainer fairy kalos rival knowledgeable support exr-tech spotlight", "/images/0F_KALOS/Trevor_Florges_5.png", "orange")}
                            {SyncPairIcon("Cheryl & Blissey", "cheryl-trainer normal sinnoh grown-woman battle-partner battleground-foe support exr-none genpool", "/images/0D_SINNOH/Cheryl_0242_3.png", "orange")}
                            {SyncPairIcon("Olivia & Carbink", "olivia-trainer rock alola elite-four rock-lover trial-giver support exr-none battle-point", "/images/0G_ALOLA/0G_ALOLA_0C-02-BP_Olivia.png", "yellow")}
                            {SyncPairIcon("Player & Alcremie", "player-trainer fairy main-character pasio support exr-none event", "/images/00_PASIO/Scottie_Alcreamie_4.png", "yellow")}
                            {SyncPairIcon("Cynthia & Gastrodon", "cynthia-trainer ground sinnoh champion undella-town researcher support exr-none lodge-pair", "/images/0D_SINNOH/0D_SINNOH_0C-05_TL_Cynthia.png", "yellow")}
                            {SyncPairIcon("Misty (Swimsuit) & Psyduck", "misty-trainer water kanto gym-leader passionate-spirit support exr-none event", "/images/0A_KANTO/0A_KANTO_0B-02b_SwimsuitMisty.png", "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("Dawn (Palentine's 2021) & Alcremie", "dawn-trainer fairy sinnoh seasonal-outfir sweet-tooth cook tech exr-none", "/images/0Y_SEASONALS/0Z_0E_PAL_2021_Dawn.png", "red")}
                            {SyncPairIcon("Lt. Surge & Raichu", "ltsurge-trainer electric kanto gym-leader sunglasses body-builder support exr-none battle-point", "/images/0A_KANTO/0A_KANTO_0B-03b_LtSurge.png", "red")}
                            {SyncPairIcon("Elesa & Joltik", "elesa-trainer electric unova gym-leader undella-town artistic support exr-none lodge-pair", "/images/0E_UNOVA/0E_UNOVA_0B-04_TL_Elesa.png", "red")}
                            {SyncPairIcon("Jasmine & Steelix", "jasmine-trainer stel johto gym-leader pokeathlete contest-lover support exr-none spotlight ticket has-lodge", "/images/0B_JOHTO/0B_JOHTO_0B-06_Jasmine.png", "orange")}
                            {SyncPairIcon("Piers & Obstagoon", "piers-trainer dark galar gym-leader artistic support exr-none spotlight ticket", "/images/0H_GALAR/0H_GALAR_0B-07_Piers.png", "orange")}
                            {SyncPairIcon("Player & Registeel", "player-trainer steel main-character pasio support exr-none battle-point", "/images/00_PASIO/00_PASIO_0Db_Registeel.png", "orange")}
                            {SyncPairIcon("Maylene & Medicham", "maylene-trainer fighting sinnoh gym-leader pokeathlete battleground-foe support exr-none genpool", "/images/0D_SINNOH/0D_SINNOH_0B-03_Maylene.png", "orange")}
                            {SyncPairIcon("Lillie (New Year's 2021) & Ribombee", "lillie-trainer bug alola seasonal-outfit fancy-lady battle-partner support exr-none", "/images/0Y_SEASONALS/0Z_0D_NY_2021_Lillie.png", "yellow")}
                            {SyncPairIcon("Giovanni & Nidorino", "giovanni-trainer poison kanto villain support exr-none lodge-pair", "/images/0A_KANTO/Giovanni.png", "yellow")}
                            {SyncPairIcon("Raihan & Gigalith", "raihan-trainer rock galar gym-leader gadgeteer passionate-spirit support exr-none lodge-pair", "/images/0H_GALAR/0H_GALAR_0B-08_TL_Raihan.png", "yellow")}
                            {SyncPairIcon("Giovanni & Persian", "giovanni-trainer normal kanto villain support exr-none event", "/images/0A_KANTO/0A_KANTO_0D-01-EP_Giovanni.png", "green")}
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Bugsy & Scyther", "bugsy-trainer bug johto gym-leader knowledgeable researcher", "/images/0B_JOHTO/0B_JOHTO_0B-02-EP_Bugsy.png", "red")}
                            {SyncPairIcon("Morty & Gastly", "morty-trainer ghsot johto gym-leader scarf supernatural support exr-none lodge-pair", "/images/0B_JOHTO/0B_JOHTO_0B-04_TL_Morty.png", "red")}
                            {SyncPairIcon("Phoebe & Dusknoir", "phoebe-trainer hoenn elite-four supernatural free-spirit support exr-none spotlight ticket", "/images/0C_HOENN/0C_HOENN_0C-02_Phoebe.png", "red")}
                            {SyncPairIcon("Acerola & Banette", "acerola-trainer ghost alola elite-four trial-giver fancy-lady support exr-none lodge-pair", "/images/0G_ALOLA/0G_ALOLA_0C-03_TL_Acerola.png", "orange")}
                            {SyncPairIcon("Adaman & Vaporeon", "adaman-trainer water sinnoh nature-lover knowledgeable support exr-none lodge-pair", "/images/0D1_HISUI/0I_HISUI_0B-01_TL_Adaman.png", "orange")}
                            {SyncPairIcon("Player & Regirock", "player-trainer rock main-character pasio support exr-none battle-point", "/images/00_PASIO/00_PASIO_0Db_Regirock.png", "orange")}
                            {SyncPairIcon("Leaf & Clefable", "leaf-trainer fairy kanto main-character pallet-town support exr-none lodge-pair", "/images/0A_KANTO/0A_KANTO_0A-03_TL_Leaf.png", "orange")}
                            {SyncPairIcon("Lillie & Clefairy", "lillie-trainer fairy alola fancy-lady battle-partner alola-adventurer support exr-none spotlight ticket has-lodge", "/images/0G_ALOLA/0G_ALOLA_0A-04_Lillie.png", "yellow")}
                            {SyncPairIcon("Jasmine & Magnemite", "jasmine-trainer stel johto gym-leader pokeathlete contest-lover support exr-none lodge-pair", "/images/0B_JOHTO/Jasmine_Magnemite.png", "green")}
                            {SyncPairIcon("Janine & Crobat", "janine-trainer poison kanto gym-leader scarf support exr-none battle-point", "/images/0A_KANTO/0A_KANTO_0B-05_BP_Janine.png", "green")}
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            {SyncPairIcon("Roxanne & Probopass", "roxanne-trainer rock hoenn hym-leader pigtails rock-lover support exr-none genpool", "/images/0C_HOENN/0C_HOENN_0B-01_Roxanne.png", "red")}
                            {SyncPairIcon("Rachel & Umbreon", "rachel-trainer dark pasio sunglasses free-spirit support exr-none pokefair", "/images/00_PASIO/Rachel_Umbreon_4.png", "red")}
                            {SyncPairIcon("Rosa (Holiday 2019) & Delibird", "rosa-trainer flying unova cape seasonal-outfir cook support exr-none", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2019_Rosa.png", "orange")}
                            {SyncPairIcon("Marley & Arcanine", "marley-trainer fire sinnoh battle-partner battleground-foe support exr-none genpool", "/images/0D_SINNOH/0D_SINNOH_0E-03_Marley.png", "orange")}
                            {SyncPairIcon("Player & Torchic", "player-trainer fire main-character pasio support exr-none story", "/images/00_PASIO/00_PASIO_0B-01b_Torchic.png", "orange")}
                            {SyncPairIcon("Rosa & Serperior", "rosa-trainer grass unova main-character pigtails unova-adventurer support exr-none story has-lodge", "/images/0E_UNOVA/0E_UNOVA_0A-06_Rosa.png", "yellow")}
                            {SyncPairIcon("Acerola & Palossand", "acerola-trainer ghost alola elite-four trial-giver fancy-lady tech exr-none story has-lodge", "/images/0G_ALOLA/0G_ALOLA_0C-03_Acerola.png", "yellow")}
                            {SyncPairIcon("Kali & Azumarill", "kali-trainer fairy kalos pigtails support exr-none event", "/images/0F_KALOS/0F_KALOS_0X-02_Kali.png", "green")}
                            {SyncPairIcon("Erika (Holiday 2020) & Comfey", "erika-trainer fairy kanto seasonal-outfit free-spirit fancy-lady support exr-none", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2020_Erika.png", "green")}
                            {SyncPairIcon("Cheren & Stoutland", "cheren-trainer normal unova gym-leader rival unova-adventurer support exr-none story has-lodge", "/images/0E_UNOVA/0E_UNOVA_0A-03_Cheren.png", "green")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Drake & Salamence", "drake-trainer dragon hoenn elite-four veteran-trainer support exr-none genpool", "/images/0C_HOENN/0C_HOENN_0C-04_Drake.png", "red")}
                            {SyncPairIcon("Ramos & Victreebel", "ramos-trainer grass kalo gym-leader nature-lover veteran-trainer tech exr-none genpool", "/images/0F_KALOS/0F_KALOS_0B-04_Ramos.png", "red")}
                            {SyncPairIcon("Liza & Lunatone", "liza-trainer psychic hoenn gym-leader supernatural space-cadet support exr-none genpool", "/images/0C_HOENN/0C_HOENN_0B-07-2_Liza.png", "orange")}
                            {SyncPairIcon("Thorton & Bronzong", "thorton-trainer steel sinnoh battle-facility-foe knowledgeable gadgeteer tech exr-none genpool", "/images/0D_SINNOH/0D_SINNOH_0E-01_Thorton.png", "orange")}
                            {SyncPairIcon("Viola & Masquerain", "viola-trainer bug kalos gym-leader artistic tech exr-none story", "/images/0F_KALOS/0F_KALOS_0B-01_Viola.png", "orange")}
                            {SyncPairIcon("Marlon & Carracosta", "marlon-trainer water unova gym-leader nature-lover body-builder", "/images/0E_UNOVA/0E_UNOVA_0B-10_Marlon.png", "orange")}
                            {SyncPairIcon("Erika & Tangela", "erika-trainer grass kanto gym-leader nature-lover fancy-lady tech exr-none battle-point", "/images/0A_KANTO/0A_KANTO_0B-04b_Erika.png", "yellow")}
                            {SyncPairIcon("Wulfric & Avalugg", "wulfric-trainer ice kalos gym-leader veteran-trainer passionate-spirit strike exr-none genpool", "/images/0F_KALOS/0F_KALOS_0B-08_Wulfric.png", "yellow")}
                            {SyncPairIcon("Brycen & Cryogonal", "brycen-trainer ice unova gym-leader artistic masked tech exr-none genpool", "/images/0E_UNOVA/0E_UNOVA_0B-07_Brycen.png", "green")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TierList;