import SyncPairIcon from './syncpair-icon';

const TierList = () => {
    return (
        <div className="tierlist-page">
            <div className="banner tierlist-banner">
                <h1>Tier List Companion</h1>
            </div>
            <h2>About the Tier List Companion</h2>
            <p>This companion is based on Spark's tier list. I am not involved with the placement of sync pairs on the tier list, but I am maintaining this resource as a way to look for specific sync pairs and understand some of the justification behind their ultimate placement. If I have created a showcase for a specific pair, I am also including that here.</p>
            <div className="not-ranked">
                <h3>The following sync pairs are not ranked on the tierlist at the moment, since they were added in the most recent update:</h3>
                <div className="tierlist-row not-included-row">
                    {SyncPairIcon("Atticus & Revavroom", "", "/images/0I_PALDEA/Atticus_0966.png", "black")}
                    {SyncPairIcon("Blossom & Kirlia", "", "/images/0F_KALOS/Blossom_0281.png", "black")}
                    {SyncPairIcon("Sygna Suit Giovanni (Alt.) & Guzzlord", "", "/images/0B_JOHTO/Giovanni_0799.png", "black")}
                    {SyncPairIcon("Hop & Pincurchin", "", "/images/0H_GALAR/Hop_0871.png", "black")}
                    {SyncPairIcon("Lana & Lanturn", "", "/images/0G_ALOLA/Lana_0171.png", "black")}
                    {SyncPairIcon("Lucas & Torterra", "", "/images/0D_SINNOH/Lucas_0389.png", "black")}
                    {SyncPairIcon("Mela & Armarouge", "", "/images/0I_PALDEA/Mela_0936.png", "black")}
                    {SyncPairIcon("Poppy (New Year's 2025) & Steelix", "", "/images/0I_PALDEA/Poppy_0208.png", "black")}
                    {SyncPairIcon("Raihan (New Year's 2025) & Sandaconda", "", "/images/0H_GALAR/Raihan_0844.png", "black")}
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
                            {SyncPairIcon("Arc Suit Leon & Charizard", "leon-trainer fire galar champion free-spirit multi exr-tech arc-suit", "/images/0H_GALAR/Leon_Arc_0006_5.png", "red")}
                            {SyncPairIcon("Cheren (Champion) & Tornadus Incarnate Forme", "cheren-trainer flying unova champion cape unova-adventurer tech exr-strike master-fair", "/images/0E_UNOVA/Cheren_Tornadus.png", "orange")}
                            {SyncPairIcon("Arc Suit Lance & Dragonite", "lance-trainer dragon kanto champion cape multi exr-tech arc-suit", "/images/0A_KANTO/LanceArc_Dragonite_5.png", "orange")}
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
                            {SyncPairIcon("Eusine & Suicune★", "eusine-trainer water johto cape passionate-spirit strike exr-tech pokefair", "/images/0B_JOHTO/0B_JOHTO_0E-01_Eusine.png", "green")}
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
                            {SyncPairIcon("Lisia (New Year's 2023) & Rapidash★", "lisia-trainer fairy hoenn seasonal-outfit artistic contest-lover strike", "/images/0Y_SEASONALS/0Z_0D_NY_2023_Lisia.png", "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Blue (Classic) & Aerodactyl", "", "/images/0A_KANTO/0A_KANTO_0A-02_Blueclassic.png", "red")}
                            {SyncPairIcon("Olympia & Sigilyph", "", "/images/0F_KALOS/0F_KALOS_0B-07_Olympia.png", "orange")}
                            {SyncPairIcon("Diantha (Special Costume) & Keldeo", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2021_Diantha.png", "orange")}
                            {SyncPairIcon("Sygna Suit Korrina & Marshadow", "", "/images/0F_KALOS/0F_KALOS_0B-03_SSKorrina.png", "orange")}
                            {SyncPairIcon("Maxie & Groudon", "", "/images/0C_HOENN/0C_HOENN_0D-01_Maxie.png", "orange")}
                            {SyncPairIcon("Gloria & Zacian", "", "/images/0H_GALAR/0H_GALAR_0A-02_Gloria.png", "yellow")}
                            {SyncPairIcon("Leon & Charizard", "", "/images/0H_GALAR/0H_GALAR_0C-01_Leon.png", "yellow")}
                            {SyncPairIcon("Victor & Rillaboom", "", "/images/0H_GALAR/0H_GALAR_0A-01_Victor.png", "yellow")}
                            {SyncPairIcon("N & Zekrom", "", "/images/0E_UNOVA/0E_UNOVA_0E-03_N.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Etha & Lugia", "", "/images/0B_JOHTO/0B_JOHTO_0A-01_SSEthan.png", "green")}
                            {SyncPairIcon("Raihan & Duraludon", "", "/images/0H_GALAR/0H_GALAR_0B-08_Raihan.png", "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Sygna Suit Leon & Eternatus", "", "/images/0H_GALAR/0H_GALAR_0C-01_SSLeon.png", "red")}
                            {SyncPairIcon("Sonia (Special Costume) & Tsareena★", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2022_Sonia.png", "red")}
                            {SyncPairIcon("Alder & Volcarona", "", "/images/0E_UNOVA/0E_UNOVA_0C-06_Alder.png", "orange")}
                            {SyncPairIcon("Emmet (Special Costume) & Escavalier", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2022_Emmet.png", "orange")}
                            {SyncPairIcon("Hugh & Bouffalant", "", "/images/0E_UNOVA/0E_UNOVA_0A-07_Hugh.png", "orange")}
                            {SyncPairIcon("N (Summer 2022) & Zoroark", "", "/images/0Y_SEASONALS/0Z_0B_SUM_2022_N.png", "yellow")}
                            {SyncPairIcon("Diantha & Gardevoir", "", "/images/0F_KALOS/0F_KALOS_0C-05_Diantha.png", "yellow")}
                            {SyncPairIcon("Archie & Kyogre", "", "/images/0C_HOENN/0C_HOENN_0D-02_Archie.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Erika & Leafeon", "", "/images/0A_KANTO/0A_KANTO_0B-04_SSErika.png", "yellow")}
                            {SyncPairIcon("Iris (Fall 2022) & Naganadel", "", "/images/0Y_SEASONALS/0Z_0C_FALL_2022_Iris.png", "green")}
                            {SyncPairIcon("Riley & Lucario", "", "/images/0D_SINNOH/Riley_Lucario.png", "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("Lillie (Anniversary 2021) & Lunala", "", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2021_Lillie.png", "red")}
                            {SyncPairIcon("Leon (Holiday 2021) & Calyrex Ice Rider", "", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2021_Leon.png", "red")}
                            {SyncPairIcon("Silver & Ho-Oh", "", "/images/0B_JOHTO/0B_JOHTO_0A-04_Silver.png", "orange")}
                            {SyncPairIcon("Steven (Anniversary 2021) & Rayquaza★", "", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2021_Steven.png", "orange")}
                            {SyncPairIcon("Hilda & Emboar", "", "/images/0E_UNOVA/0E_UNOVA_0A-02_Hilda.png", "orange")}
                            {SyncPairIcon("Elesa & Zebstrika", "", "/images/0E_UNOVA/0E_UNOVA_0B-04_Elesa.png", "yellow")}
                            {SyncPairIcon("Kris & Feraligatr", "", "/images/0B_JOHTO/0B_JOHTO_0A-03_Kris.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Grimsley & Sharpedo", "", "/images/0E_UNOVA/0E_UNOVA_0C-04_SSGrimsley.png", "yellow")}
                            {SyncPairIcon("Player & Solgaleo", "", "/images/00_PASIO/00_PASIO_0Cb_Solgaleo.png", "yellow")}
                            {SyncPairIcon("Chuck & Poliwrath", "", "/images/0B_JOHTO/Chuck_Poliwrath_5.png", "green")}
                            {SyncPairIcon("Volkner (New Year's 2022) & Electivire", "", "/images/0Y_SEASONALS/0Z_0D_NY_2022_Volkner.png", "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            {SyncPairIcon("Ryuki & Turtonator", "", "/images/0G_ALOLA/Ryuki_Turtonator.png", "red")}
                            {SyncPairIcon("Cyrus & Palkia", "", "/images/0D_SINNOH/0D_SINNOH_0D-01_Cyrus.png", "red")}
                            {SyncPairIcon("Bea & Sirfetch'd", "", "/images/0H_GALAR/0H_GALAR_0B-04_Bea.png", "orange")}
                            {SyncPairIcon("Hala & Crabominable", "", "/images/0G_ALOLA/0G_ALOLA_0C-01_Hala.png", "orange")}
                            {SyncPairIcon("Blue & Pidgeot", "", "/images/0A_KANTO/0A_KANTO_0A-02_Blue.png", "orange")}
                            {SyncPairIcon("Giovanni & Mewtwo", "", "/images/0A_KANTO/0A_KANTO_0D-01_Giovanni.png", "yellow")}
                            {SyncPairIcon("Caitlin & Reuniclus", "", "/images/0E_UNOVA/0E_UNOVA_0C-05_Caitlin.png", "yellow")}
                            {SyncPairIcon("Hilda (Special Costume) & Diancie", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2021_Hilda.png", "yellow")}
                            {SyncPairIcon("Brendan & Sceptile", "", "/images/0C_HOENN/0C_HOENN_0A-01_Brendan.png", "yellow")}
                            {SyncPairIcon("Lear & Krookodile", "", "/images/00_PASIO/Lear_0553.png", "green")}
                            {SyncPairIcon("Nessa & Drednaw", "", "/images/0H_GALAR/0H_GALAR_0B-02_Nessa.png", "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            {SyncPairIcon("Wally & Gallade", "", "/images/0C_HOENN/0C_HOENN_0A-03_Wally.png", "red")}
                            {SyncPairIcon("Skyla & Unfezant", "", "/images/0E_UNOVA/Skyla_Unfezant_4.png", "red")}
                            {SyncPairIcon("Hilbert (Fall 2020) & Mightyena", "", "/images/0Y_SEASONALS/0Z_0C_FALL_2020_Hilbert.png", "orange")}
                            {SyncPairIcon("Guzma & Golisopod", "", "/images/0G_ALOLA/0G_ALOLA_0D-03_Guzma.png", "orange")}
                            {SyncPairIcon("May & Swampert", "", "/images/0C_HOENN/0C_HOENN_0A-02_May.png", "orange")}
                            {SyncPairIcon("Guzma (Special Costume) & Buzzwole", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2021_Guzma.png", "yellow")}
                            {SyncPairIcon("Fantina & Mismagius", "", "/images/0D_SINNOH/0D_SINNOH_0B-05_Fantina.png", "yellow")}
                            {SyncPairIcon("Burgh & Leavanny", "", "/images/0E_UNOVA/0E_UNOVA_0B-03_Burgh.png", "yellow")}
                            {SyncPairIcon("Lusamine & Lilligant", "", "/images/0G_ALOLA/Lusamine_Lilligant_4.png", "yellow")}
                            {SyncPairIcon("Gladion & Silvally", "", "/images/0G_ALOLA/0G_ALOLA_0A-05_Gladion.png", "green")}
                            {SyncPairIcon("Zinnia & Rayquaza", "", "/images/0C_HOENN/0C_HOENN_0E-04_Zinnia.png", "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            {SyncPairIcon("Morty & Drifblim", "", "/images/0B_JOHTO/0B_JOHTO_0B-04_Morty.png", "red")}
                            {SyncPairIcon("Mallow & Tsareena", "", "/images/0G_ALOLA/0G_ALOLA_0B-04_Mallow.png", "red")}
                            {SyncPairIcon("Olivia & Lycanroc", "", "/images/0G_ALOLA/0G_ALOLA_0C-02_Olivia.png", "orange")}
                            {SyncPairIcon("Selene & Decidueye", "", "/images/0G_ALOLA/0G_ALOLA_0A-02_Selene.png", "orange")}
                            {SyncPairIcon("Valerie & Mawile", "", "/images/0F_KALOS/0F_KALOS_0B-06-BP_Valerie.png", "orange")}
                            {SyncPairIcon("Allister & Gengar", "", "/images/0H_GALAR/0H_GALAR_0B-04b_Allister.png", "yellow")}
                            {SyncPairIcon("Gloria (Summer 2021) & Inteleon", "", "/images/0Y_SEASONALS/0Z_0B_SUM_2021_Gloria.png", "yellow")}
                            {SyncPairIcon("Lusamine & Pheromosa", "", "/images/0G_ALOLA/0G_ALOLA_0D-01_Lusamine.png", "yellow")}
                            {SyncPairIcon("Blue & Arcanine", "", "/images/0A_KANTO/0A_KANTO_0A-02-EP_Blue.png", "yellow")}
                            {SyncPairIcon("Lance (New Year's 2021) & Gyarados", "", "/images/0Y_SEASONALS/0Z_0D_NY_2021_Lance.png", "green")}
                            {SyncPairIcon("Barry & Empoleon", "", "/images/0D_SINNOH/0D_SINNOH_0A-03_Barry.png", "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("Drasna & Dragalge", "", "/images/0F_KALOS/0F_KALOS_0C-04_Drasna.png", "red")}
                            {SyncPairIcon("Steven (Summer 2020) & Alolan Sandslash", "", "/images/0Y_SEASONALS/0Z_0B_SUM_2020_Steven.png", "orange")}
                            {SyncPairIcon("Volo & Gible", "", "/images/0D1_HISUI/Volo_Gible_4.png", "orange")}
                            {SyncPairIcon("Candice & Froslass", "", "/images/0D_SINNOH/0D_SINNOH_0B-07_BP_Candice.png", "orange")}
                            {SyncPairIcon("Shauntal & Chandelure", "", "/images/0E_UNOVA/0E_UNOVA_0C-02_Shauntal.png", "orange")}
                            {SyncPairIcon("Sophocles & Alolan Golem", "", "/images/0G_ALOLA/0G_ALOLA_0B-05_BP_Sophocles.png", "yellow")}
                            {SyncPairIcon("Gloria & Thwackey", "", "/images/0H_GALAR/0H_GALAR_0A-02_TL_Gloria.png", "yellow")}
                            {SyncPairIcon("Ethan & Typhlosion", "", "/images/0B_JOHTO/0B_JOHTO_0A-01_Ethan.png", "yellow")}
                            {SyncPairIcon("Hau & Alolan Raichu", "", "/images/0G_ALOLA/0G_ALOLA_0A-03_Hau.png", "yellow")}
                            {SyncPairIcon("Koga & Crobat", "", "/images/0A_KANTO/0A_KANTO_0B-05_Koga.png", "green")}
                            {SyncPairIcon("Roxie & Scolipede", "", "/images/0E_UNOVA/0E_UNOVA_0B-09_Roxie.png", "green")}
                            {SyncPairIcon("Looker & Croagunk", "", "/images/0D_SINNOH/0D_SINNOH_0E-05_Looker.png", "green")}
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Player & Gyarados (Strike)", "", "/images/0Z_EGGS/MALE/Egg_0130_01sa.png", "red")}
                            {SyncPairIcon("Zinnia & Salamence", "", "/images/0C_HOENN/0C_HOENN_0E-04-BP_Zinnia.png", "orange")}
                            {SyncPairIcon("Roark & Rampardos", "", "/images/0D_SINNOH/0D_SINNOH_0B-01_Roark.png", "orange")}
                            {SyncPairIcon("Siebold (Holiday 2019) & Octillery", "", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2019_Siebold.png", "orange")}
                            {SyncPairIcon("Professor Sycamore & Bulbasaur", "", "/images/0F_KALOS/0F_KALOS_0F-01_TL_ProfSycamore.png", "yellow")}
                            {SyncPairIcon("Elesa (Palentine's 2023) & Togetic", "", "/images/0Y_SEASONALS/0Z_0E_PAL_2023_Elesa.png", "yellow")}
                            {SyncPairIcon("Helena (Hex Maniac) & Haunter", "", "/images/0F_KALOS/0F_KALOS_0X-01_Helena.png", "yellow")}
                            {SyncPairIcon("Clair & Kingdra", "", "/images/0B_JOHTO/0B_JOHTO_0B-08_Clair.png", "yellow")}
                            {SyncPairIcon("Noland & Pinsir", "", "/images/0C_HOENN/Noland_Pinsir_4.png", "green")}
                            {SyncPairIcon("Bruno & Machamp", "", "/images/0A_KANTO/0A_KANTO_0C-02_Bruno.png", "green")}
                            {SyncPairIcon("Petey (Poké Kid) & Pikachu", "", "/images/0H_GALAR/Petey_Pikachu_3.png", "green")}
                            {SyncPairIcon("Volkner & Raichu", "", "/images/0D_SINNOH/Volkner_0026.png", "green")}
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            {SyncPairIcon("Rika & Whiscash", "", "/images/0I_PALDEA/Rika_Whiscash_4.png", "orange")}
                            {SyncPairIcon("Lyra (Summer 2020) & Jigglypuff", "", "/images/0Y_SEASONALS/0Z_0B_SUM_2020_Lyra.png", "orange")}
                            {SyncPairIcon("Calem & Fennekin", "", "/images/0F_KALOS/0F_KALOS_0A-01_TL_Calem.png", "orange")}
                            {SyncPairIcon("Siebold & Clawitzer", "", "/images/0F_KALOS/0F_KALOS_0C-02_Siebold.png", "yellow")}
                            {SyncPairIcon("Nate & Braviary", "", "/images/0E_UNOVA/0E_UNOVA_0A-05_Nate.png", "yellow")}
                            {SyncPairIcon("Iris & Haxorus", "", "/images/0E_UNOVA/0E_UNOVA_0C-01_Iris.png", "yellow")}
                            {SyncPairIcon("Tate & Solrock", "", "/images/0C_HOENN/0C_HOENN_0B-07-1_Tate.png", "yellow")}
                            {SyncPairIcon("Korrina & Lucario", "", "/images/0F_KALOS/0F_KALOS_0B-03_Korrina.png", "green")}
                            {SyncPairIcon("Mina & Granbull", "", "/images/0G_ALOLA/0G_ALOLA_0B-07_Mina.png", "green")}
                            {SyncPairIcon("Marnie & Toxicroak", "", "/images/0H_GALAR/0H_GALAR_0A-04_TL_Marnie.png", "green")}
                            {SyncPairIcon("Karen & Umbreon", "", "/images/0B_JOHTO/0B_JOHTO_0C-04-BP_Karen.png", "green")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Gardenia & Roserade", "", "/images/0D_SINNOH/0D_SINNOH_0B-02_Gardenia.png", "red")}
                            {SyncPairIcon("Molayne & Alolan Dugtrio", "", "/images/0G_ALOLA/0G_ALOLA_0C-05_Molayne.png", "orange")}
                            {SyncPairIcon("Naomi & Sandslash", "", "/images/0G_ALOLA/0G_ALOLA_0X-01_Naomi.png", "orange")}
                            {SyncPairIcon("Sygna Suit Brock & Tyranitar", "", "/images/0A_KANTO/0A_KANTO_0B-01_SSBrock.png", "orange")}
                            {SyncPairIcon("Pryce & Dewgong", "", "/images/0B_JOHTO/0B_JOHTO_0B-07_Pryce.png", "orange")}
                            {SyncPairIcon("May & Wailmer", "", "/images/0C_HOENN/0C_HOENN_0A-02_TL_May.png", "orange")}
                            {SyncPairIcon("Valerie & Sylveon", "", "/images/0F_KALOS/0F_KALOS_0B-06_Valerie.png", "yellow")}
                            {SyncPairIcon("Hapu & Mudsdale", "", "/images/0G_ALOLA/0G_ALOLA_0B-11_Hapu.png", "yellow")}
                            {SyncPairIcon("Bugsy & Beedrill", "", "/images/0B_JOHTO/Bugsy_Beedrill_3.png", "yellow")}
                            {SyncPairIcon("Flint & Infernape", "", "/images/0D_SINNOH/Flint_Infernape_4.png", "green")}
                            {SyncPairIcon("Katherine & Slurpuff", "", "/images/0F_KALOS/Katherine_0685.png", "green")}
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
                            {SyncPairIcon("Arc Suit Cynthia & Garchomp", "cynthia ground sinnoh champion researcher multi exr-strike arc-suit", "/images/0D_SINNOH/CynthiaArc_Garchomp_5.png", "red")}
                            {SyncPairIcon("Sygna Suit Red (Thunderbolt) & Pikachu", "red electric kanto main-character sygna-suit pallet-town tech exr-field master-fair", "/images/0A_KANTO/0A_KANTO_0A-01_SSTRed.png", "red")}
                            {SyncPairIcon("Sygna Suit Lear & Gholdengo", "", "/images/00_PASIO/Lear_Gholdengo_5.png", "orange")}
                            {SyncPairIcon("Leaf (Champion) & Moltres", "", "/images/0A_KANTO/0A_KANTO_0A-03_NCLeaf.png", "orange")}
                            {SyncPairIcon("Bianca (Champion) & Virizion", "", "/images/0E_UNOVA/Bianca_Virizion.png", "yellow")}
                            {SyncPairIcon("Serena (Champion) & Greninja", "", "/images/0F_KALOS/0F_KALOS_0A-02_ChampSerena.png", "yellow")}
                            {SyncPairIcon("Silver (Champion) & Tyranitar", "", "/images/0B_JOHTO/Silver_Tyranitar_5.png", "yellow")}
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            {SyncPairIcon("Oleana & Garbodor", "", "/images/0H_GALAR/0H_GALAR_0D-02_Oleana.png", "red")}
                            {SyncPairIcon("Adaman & Leafeon", "", "/images/0D1_HISUI/0I_HISUI_0B-01_Adaman.png", "red")}
                            {SyncPairIcon("Irida & Glaceon", "", "/images/0D1_HISUI/0I_HISUI_0B-02_Irida.png", "red")}
                            {SyncPairIcon("Geeta & Glimmora", "", "/images/0I_PALDEA/Geeta_Glimmora_5.png", "red")}
                            {SyncPairIcon("Sygna Suit Roxie & Toxtricity (Amped Forme)", "", "/images/0E_UNOVA/ssRoxie_Toxtricity.png", "orange")}
                            {SyncPairIcon("Red & Venusaur", "", "/images/0A_KANTO/Red_Venusaur.png", "orange")}
                            {SyncPairIcon("Dahlia & Ludicolo", "", "/images/0D_SINNOH/Dahlia_Ludicolo_5.png", "orange")}
                            {SyncPairIcon("Sygna Suit Lyra & Celebi", "", "/images/0B_JOHTO/0B_JOHTO_0A-02_ssLyra.png", "orange")}
                            {SyncPairIcon("Lillie (Holiday 2024) & Primarina", "", "/images/0G_ALOLA/Lillie_0730s_5.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Nemona & Scream Tail", "", "/images/0I_PALDEA/Nemona_Screamtail_5.png", "yellow")}
                            {SyncPairIcon("Nate (Champion) & Haxorus", "", "/images/0E_UNOVA/Nate_Haxorus.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Diantha & Diancie", "", "/images/0F_KALOS/0F_KALOS_0C-05_ssDiantha.png", "green")}
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            {SyncPairIcon("Lillie (Anniversary 2024) & Solgaleo", "", "/images/0G_ALOLA/Lillie_Solgaleo_5.png", "red")}
                            {SyncPairIcon("Sygna Suit Wally & Gardevoir", "", "/images/0C_HOENN/0C_HOENN_0A-03_ssWally.png", "red")}
                            {SyncPairIcon("Rei & Hisuian Decidueye", "", "/images/0D1_HISUI/Rei.png", "orange")}
                            {SyncPairIcon("Hop (Champion) & Galarian Zapdos", "", "/images/0H_GALAR/0H_GALAR_0A-03_NeoChampHop.png", "orange")}
                            {SyncPairIcon("Sygna Suit Hau & Tapu Koko", "", "/images/0G_ALOLA/0G_ALOLA_0A-03_ssHau.png", "orange")}
                            {SyncPairIcon("Clavell & Quaquaval", "", "/images/0I_PALDEA/Clavell_0914.png", "yellow")}
                            {SyncPairIcon("Leaf & Blastoise", "", "/images/0A_KANTO/Leaf_Blastoise_5.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Ingo & Chandelure", "", "/images/0E_UNOVA/Ingo_0609.png", "yellow")}
                            {SyncPairIcon("Gardenia (Summer 2024) & Dhelmise", "", "/images/0D_SINNOH/Gardenia_Dhelmise_5.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Lana & Tapu Lele", "", "/images/0G_ALOLA/0G_ALOLA_0B-02_ssLana.png", "green")}
                            {SyncPairIcon("Skyla (Anniversary 2022) & Tornadus (Therian Forme)", "", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2022_Skyla.png", "green")}
                            {SyncPairIcon("Leon (Alt.) & Dragapult", "", "/images/0H_GALAR/0H_GALAR_0C-01_TowerLeon.png", "green")}
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            {SyncPairIcon("Larry & Dudunsparce", "", "/images/0I_PALDEA/Larry_Dudunsparce.png", "red")}
                            {SyncPairIcon("Roxanne (Fall 2023) & Runerigus", "", "/images/0C_HOENN/Roxanne_Runerigus.png", "red")}
                            {SyncPairIcon("Sygna Suit Emmet & Eelektross", "", "/images/0E_UNOVA/Emmet_0604.png", "orange")}
                            {SyncPairIcon("Avery & Galarian Slowking", "", "/images/0H_GALAR/Avery_Slowking_5.png", "orange")}
                            {SyncPairIcon("Blue (Classic) & Charizard", "", "/images/0A_KANTO/Blue_Charizard.png", "yellow")}
                            {SyncPairIcon("Sygna Suit N & Black Kyurem", "n-trainer ice unova rival sygna-suit unova-adventurer tech exr-strike pokefair", "/images/0E_UNOVA/0E_UNOVA_0E-03_SSN.png", "yellow")}
                            {SyncPairIcon("Shauntal (Fall 2024) & Froslass", "", "/images/0E_UNOVA/Shauntal_0478.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Silver & Sneasel", "", "/images/0B_JOHTO/0B_JOHTO_0A-04_SSSilver.png", "yellow")}
                            {SyncPairIcon("Gloria (Alt. 2) & Cinderace", "", "/images/0H_GALAR/0H_GALAR_0A-02_GymGloria01.png", "yellow")}
                            {SyncPairIcon("Marnie & Cinderace", "", "/images/0H_GALAR/Marnie_0815_5.png", "green")}
                            {SyncPairIcon("Bede & Inteleon", "", "/images/0H_GALAR/Bede_0818_5.png", "green")}
                            {SyncPairIcon("Hop & Rillaboom", "", "/images/0H_GALAR/Hop_0812_5.png", "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Selene (Special Costume) & Scizor", "", "/images/0G_ALOLA/Selene_Scizor_5.png", "red")}
                            {SyncPairIcon("Wallace (New Year's 2024) & Blacephalon", "", "/images/0C_HOENN/Wallace_0806.png", "red")}
                            {SyncPairIcon("Sygna Suit Cynthia (Renegade) & Giratina Altered Forme", "", "/images/0D_SINNOH/0D_SINNOH_0C-05_SSRCynthia.png", "orange")}
                            {SyncPairIcon("Sygna Suit Hilbert & Genesect", "", "/images/0E_UNOVA/0E_UNOVA_0A-01_SSHilbert.png", "orange")}
                            {SyncPairIcon("Sygna Suit May & Blaziken", "", "/images/0C_HOENN/0C_HOENN_0A-02_SSMay.png", "orange")}
                            {SyncPairIcon("Paulo & Lycanroc Dusk", "paulo-trainer rock rival knowledgeable pasio sprint exr-support pokefair", "/images/00_PASIO/00_PASIO_0E-04_Paulo.png", "orange")}
                            {SyncPairIcon("Raihan (Anniversary 2022) & Flygon", "", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2022_Raihan.png", "orange")}
                            {SyncPairIcon("Akari & Hisuian Samurott", "", "/images/0D1_HISUI/Akari.png", "yellow")}
                            {SyncPairIcon("Zinnia (Special Costume) & Thievul", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2023_Zinnia.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Cyrus & Darkrai", "", "/images/0D_SINNOH/0D_SINNOH_0D-01_SSCyrus.png", "yellow")}
                            {SyncPairIcon("Gloria (Dojo Uniform) & Urshifu Rapid Strike", "", "/images/0H_GALAR/0H_GALAR_0A-02_GloriaDojo.png", "green")}
                            {SyncPairIcon("Elesa (Classic) & Emolga", "", "/images/0E_UNOVA/0E_UNOVA_0B-04_ElesaClassic.png", "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Lyra & Vaporeon", "", "/images/0B_JOHTO/0B_JOHTO_0A-02_VS_Lyra.png", "red")}
                            {SyncPairIcon("Elio & Espeon", "", "/images/0G_ALOLA/Elio_Espeon.png", "red")}
                            {SyncPairIcon("Calem & Sylveon", "", "/images/0F_KALOS/Calem_0700.png", "orange")}
                            {SyncPairIcon("Hilda & Leafeon", "", "/images/0E_UNOVA/Hilda_0470.png", "orange")}
                            {SyncPairIcon("Hilbert & Glaceon", "", "/images/0E_UNOVA/Hilbert_0471.png", "orange")}
                            {SyncPairIcon("Selene & Umbreon", "", "/images/0G_ALOLA/Selene_Umbreon.png", "orange")}
                            {SyncPairIcon("N (Anniversary 2021) & Reshiram", "", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2021_N.png", "yellow")}
                            {SyncPairIcon("Marnie (Palentine's 2022) & Mawile", "", "/images/0Y_SEASONALS/0Z_0E_PAL_2022_Marnie.png", "yellow")}
                            {SyncPairIcon("Lucas & Flareon", "", "/images/0D_SINNOH/0D_SINNOH_0A-01_VS_Lucas.png", "yellow")}
                            {SyncPairIcon("Viola (Holiday 2023) & Vivillon", "", "/images/0F_KALOS/Viola_Vivillon.png", "yellow")}
                            {SyncPairIcon("Brycen-Man & Zoroark", "", "/images/0E_UNOVA/Byrcen-Man_Zoroark.png", "green")}
                            {SyncPairIcon("Kris & Jolteon", "", "/images/0B_JOHTO/0B_JOHTO_0A-03_VS_Kris.png", "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("May (Anniversary 2022) & Latias", "", "/images/0Y_SEASONALS/0Z_0G_ANNIV_2022_May.png", "red")}
                            {SyncPairIcon("Giovanni & Rhydon", "", "/images/0A_KANTO/0A_KANTO_0D-01b_Giovanni (Pose 2).png", "red")}
                            {SyncPairIcon("Tate (Summer 2023) & Jirachi", "", "/images/0Y_SEASONALS/0Z_0B_SUM_2023_Tate.png", "orange")}
                            {SyncPairIcon("Lance & Dragonair", "", "/images/0A_KANTO/0A_KANTO_0C-04b_Lance.png", "orange")}
                            {SyncPairIcon("Thorton & Magnezone", "", "/images/0D_SINNOH/Thorton_Magnezone.png", "orange")}
                            {SyncPairIcon("Noland & Ninjask", "", "/images/0C_HOENN/Noland_Ninjask.png", "yellow")}
                            {SyncPairIcon("Greta & Breloom", "", "/images/0C_HOENN/Greta_Breloom_5.png", "yellow")}
                            {SyncPairIcon("Bede & Hatterene", "", "/images/0H_GALAR/0H_GALAR_0A-05_Bede.png", "yellow")}
                            {SyncPairIcon("Nemona & Pawmot", "", "/images/0I_PALDEA/0J_PALDEA_0A-03_Nemona.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Steven & Deoxys (Speed Forme)", "", "/images/0Z_OTHER-FORMES/0C_HOENN_0C-05_ssSteven_DSpeed_.png", "green")}
                            {SyncPairIcon("Ariana & Arbok", "", "/images/0B_JOHTO/0B_JOHTO_0D-02_Ariana.png", "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            {SyncPairIcon("Lysandre & Yveltal", "", "/images/0F_KALOS/0F_KALOS_0D-01_Lysandre.png", "red")}
                            {SyncPairIcon("Sygna Suit Leaf & Venusaur", "", "/images/0A_KANTO/0A_KANTO_0A-03_SSLeaf.png", "red")}
                            {SyncPairIcon("Bianca & Musharna", "", "/images/0E_UNOVA/0E_UNOVA_0A-04_Bianca.png", "orange")}
                            {SyncPairIcon("Sygna Suit Steven & Deoxys (Normal Forme)", "", "/images/0C_HOENN/0C_HOENN_0C-05_ssSteven_ANormal_.png", "orange")}
                            {SyncPairIcon("Dawn (New Year's 2023) & Oricorio", "", "/images/0Y_SEASONALS/0Z_0D_NY_2023_Dawn.png", "orange")}
                            {SyncPairIcon("Rosa (Special Costume) & Shaymin Sky Forme", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2022_Rosa.png", "yellow")}
                            {SyncPairIcon("Marnie & Morpeko", "", "/images/0H_GALAR/0H_GALAR_0A-04_Marnie.png", "yellow")}
                            {SyncPairIcon("Serena & Delphox", "", "/images/0F_KALOS/0F_KALOS_0A-02_Serena.png", "yellow")}
                            {SyncPairIcon("Kiawe & Arcanine", "", "/images/0G_ALOLA/0G_ALOLA_0B-03_Kiawe.png", "yellow")}
                            {SyncPairIcon("Gordie & Coalossal", "", "/images/0H_GALAR/0H_GALAR_0B-06_Gordie.png", "green")}
                            {SyncPairIcon("Colress & Klinklang", "", "/images/0E_UNOVA/0E_UNOVA_0D-02_Colress.png", "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            {SyncPairIcon("Iris (Alt.) & Hydreigon", "", "/images/0E_UNOVA/0E_UNOVA_0C-01-2_IrisChampion.png", "red")}
                            {SyncPairIcon("Whitney (Holiday 2022) & Sawsbuck", "", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2022_Whitney.png", "red")}
                            {SyncPairIcon("Plumeria & Gengar", "", "/images/0G_ALOLA/Plumeria_Gengar.png", "red")}
                            {SyncPairIcon("Bertha & Hippowdon", "", "/images/0D_SINNOH/0D_SINNOH_0C-02_Bertha.png", "orange")}
                            {SyncPairIcon("The Masked Royal & Incineroar", "", "/images/0G_ALOLA/0G_ALOLA_0E-02_MaskedRoyal.png", "orange")}
                            {SyncPairIcon("Lucian & Girafarig", "", "/images/0D_SINNOH/0D_SINNOH_0C-04_Lucian.png", "orange")}
                            {SyncPairIcon("Sygna Suit Grimsley (Kimono) & Bisharp", "", "/images/0E_UNOVA/0E_UNOVA_0C-04_GrimsleyKimono.png", "yellow")}
                            {SyncPairIcon("Courtney & Camerupt", "", "/images/0C_HOENN/0C_HOENN_0D-03_Courtney.png", "yellow")}
                            {SyncPairIcon("Ghetsis & Kyurem", "", "/images/0E_UNOVA/0E_UNOVA_0D-01_Ghetsis.png", "yellow")}
                            {SyncPairIcon("Marnie (Summer 2021) & Grimmsnarl", "", "/images/0Y_SEASONALS/0Z_0B_SUM_2021_Marnie.png", "green")}
                            {SyncPairIcon("Steven & Metagross", "", "/images/0C_HOENN/0C_HOENN_0C-05_Steven.png", "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            {SyncPairIcon("Tierno & Talonflame", "", "/images/0F_KALOS/Tierno_0663.png", "red")}
                            {SyncPairIcon("Nessa (Holiday 2021) & Eiscue", "", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2021_Nessa.png", "red")}
                            {SyncPairIcon("Serena (Palentine's 2021) & Whimsicott", "", "/images/0Y_SEASONALS/0Z_0E_PAL_2021_Serena.png", "orange")}
                            {SyncPairIcon("Ingo (Special Costume) & Accelgor", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2022_Ingo.png", "orange")}
                            {SyncPairIcon("Archer & Houndoom", "", "/images/0B_JOHTO/0B_JOHTO_0D-01_Archer.png", "orange")}
                            {SyncPairIcon("Petrel & Weezing", "", "/images/0B_JOHTO/0B_JOHTO_0D-03_Petrel.png", "yellow")}
                            {SyncPairIcon("Victor & Spectrier", "", "/images/0H_GALAR/0H_GALAR_0A-01_SpecialVictor.png", "yellow")}
                            {SyncPairIcon("Karen & Houndoom", "", "/images/0B_JOHTO/0B_JOHTO_0C-04_Karen.png", "yellow")}
                            {SyncPairIcon("Serena & Fletchling", "", "/images/0F_KALOS/0F_KALOS_0A-02_TL_Serena.png", "green")}
                            {SyncPairIcon("Shauna & Delcatty", "", "/images/0F_KALOS/Shauna_0301.png", "green")}
                            {SyncPairIcon("Malva & Talonflame", "", "/images/0F_KALOS/Malva_Talonflame_5.png", "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("Wally & Altaria", "", "/images/0C_HOENN/Wally_Altaria_5.png", "red")}
                            {SyncPairIcon("Hugh & Unfezant", "", "/images/0E_UNOVA/Hugh_Unfezant_5.png", "red")}
                            {SyncPairIcon("Sidney & Absol", "", "/images/0C_HOENN/0C_HOENN_0C-01_Sidney.png", "orange")}
                            {SyncPairIcon("Volkner & Luxray", "", "/images/0D_SINNOH/0D_SINNOH_0B-08_Volkner.png", "orange")}
                            {SyncPairIcon("N & Sigilyph", "", "/images/0E_UNOVA/0E_UNOVA_0E-03_TL_N.png", "yellow")}
                            {SyncPairIcon("Agatha & Gengar", "", "/images/0A_KANTO/Agatha_Gengar_4.png", "yellow")}
                            {SyncPairIcon("Clemont & Heliolisk", "", "/images/0F_KALOS/0F_KALOS_0B-05_Clemont.png", "yellow")}
                            {SyncPairIcon("Will & Xatu", "", "/images/0B_JOHTO/Will_0178_4.png", "yellow")}
                            {SyncPairIcon("Darach & Staraptor", "", "/images/0D_SINNOH/0D_SINNOH_0E-04_Darach.png", "green")}
                            {SyncPairIcon("Skyla (Holiday 2020) & Togekiss", "", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2020_Skyla.png", "green")}
                            {SyncPairIcon("Barry & Floatzel", "", "/images/0D_SINNOH/Barry_Floatzel_5.png", "green")}
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Rosa & Dewott", "", "/images/0E_UNOVA/0E_UNOVA_0A-06_TL_Rosa.png", "red")}
                            {SyncPairIcon("Silver & Feraligatr", "", "/images/0B_JOHTO/0B_JOHTO_0A-04_TL_Silver.png", "red")}
                            {SyncPairIcon("Irida & Flareon", "", "/images/0D1_HISUI/0I_HISUI_0B-02_TL_Irida.png", "orange")}
                            {SyncPairIcon("Dawn & Torterra", "", "/images/0D_SINNOH/0D_SINNOH_0A-02_Dawn.png", "orange")}
                            {SyncPairIcon("Gladion & Weavile", "", "/images/0G_ALOLA/Gladion_Weavile_5.png", "orange")}
                            {SyncPairIcon("Professor Oak & Mew", "", "/images/0A_KANTO/Oak_Mew_3.png", "yellow")}
                            {SyncPairIcon("Marnie & Screfty", "", "/images/0H_GALAR/Marnie_Scrafty_5.png", "yellow")}
                            {SyncPairIcon("Professor Kukui & Lycanroc Dawn", "", "/images/0G_ALOLA/0G_ALOLA_0E-01_Kukui.png", "yellow")}
                            {SyncPairIcon("Plumeria & Salazzle", "", "/images/0G_ALOLA/0G_ALOLA_0D-02_Plumeria.png", "green")}
                            {SyncPairIcon("Blue & Alakazam", "", "/images/0A_KANTO/Blue_Alakazam_5.png", "green")}
                            {SyncPairIcon("Cheren & Liepard", "", "/images/0E_UNOVA/Cheren_0510_5.png", "green")}
                        </div>
                        <div className="cminus-row tierlist-row">
                            <div className="tier-title">C-</div>
                            {SyncPairIcon("Rose & Perrserker", "", "/images/0H_GALAR/Rose_Perrserker_4.png", "red")}
                            {SyncPairIcon("Wikstrom & Aegislash", "", "/images/0F_KALOS/0F_KALOS_0C-03_Wikstrom.png", "red")}
                            {SyncPairIcon("Silver & Crobat", "", "/images/0B_JOHTO/Silver_Crobat_5.png", "red")}
                            {SyncPairIcon("Cheren & Purrloin", "", "/images/0E_UNOVA/Cheren_Purrlion_4.png", "orange")}
                            {SyncPairIcon("Nanu & Alolan Persian", "", "/images/0G_ALOLA/0G_ALOLA_0B-10_Nanu.png", "orange")}
                            {SyncPairIcon("Nemona & Lycanroc", "", "/images/0I_PALDEA/Nemona_Lycanroc_5.png", "orange")}
                            {SyncPairIcon("Eve (Poké Kid) & Eevee", "", "/images/0H_GALAR/Eve.png", "yellow")}
                            {SyncPairIcon("May (Spring 2021) & Lopunny", "", "/images/0Y_SEASONALS/0Z_0F_SPRING_2021_May.png", "yellow")}
                            {SyncPairIcon("Whitney & Miltank", "", "/images/0B_JOHTO/0B_JOHTO_0B-03_Whitney.png", "yellow")}
                            {SyncPairIcon("Lance & Kingdra", "", "/images/0A_KANTO/Lance_Kingdra_4.png", "green")}
                            {SyncPairIcon("Lisia & Altaria", "", "/images/0C_HOENN/0C_HOENN_0E-03_Lisia.png", "green")}
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            {SyncPairIcon("Winona & Pelipper", "", "/images/0C_HOENN/0C_HOENN_0B-06_Winona.png", "red")}
                            {SyncPairIcon("Player & Gyarados (Tech)", "", "/images/0Z_EGGS/MALE/Egg_0130_02sa.png", "red")}
                            {SyncPairIcon("Falkner & Pidgeot", "", "/images/0B_JOHTO/0B_JOHTO_0B-01-BP_Falkner.png", "red")}
                            {SyncPairIcon("Will & Slowbro", "", "/images/0B_JOHTO/Will_Slowbro_4.png", "orange")}
                            {SyncPairIcon("Brawly & Hariyama", "", "/images/0C_HOENN/0C_HOENN_0B-02_Brawly.png", "orange")}
                            {SyncPairIcon("Acerola (Fall 2020) & Mimikyu", "", "/images/0Y_SEASONALS/0Z_0C_FALL_2020_Acerola.png", "orange")}
                            {SyncPairIcon("Candice & Abomasnow", "", "/images/0D_SINNOH/0D_SINNOH_0B-07_Candice.png", "yellow")}
                            {SyncPairIcon("Blaine & Rapidash", "", "/images/0A_KANTO/0A_KANTO_0B-07_Blaine.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Misty & Vaporeon", "", "/images/0A_KANTO/0A_KANTO_0B-02_SSMisty.png", "green")}
                            {SyncPairIcon("Grimsley & Liepard", "", "/images/0E_UNOVA/0E_UNOVA_0C-04_Grimsley.png", "green")}
                            {SyncPairIcon("Lillie & Comfey", "", "/images/0G_ALOLA/0G_ALOLA_0A-04_TL_Lillie.png", "green")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Sophocles & Togedemaru", "", "/images/0G_ALOLA/Sophocles_Togedemaru_4.png", "red")}
                            {SyncPairIcon("Misty & Starmie", "", "/images/0A_KANTO/0A_KANTO_0B-02_Misty.png", "orange")}
                            {SyncPairIcon("Morty (Fall 2021) & Banette", "", "/images/0Y_SEASONALS/0Z_0C_FALL_2021_Morty.png", "orange")}
                            {SyncPairIcon("Steven & Cradily", "", "/images/0C_HOENN/0C_HOENN_0C-05-BP_Steven.png", "orange")}
                            {SyncPairIcon("Erika & Vileplume", "", "/images/0A_KANTO/0A_KANTO_0B-04a_Erika.png", "yellow")}
                            {SyncPairIcon("Janine & Ariados", "", "/images/0A_KANTO/Janine_Ariados_3.png", "yellow")}
                            {SyncPairIcon("Brock & Onix", "", "/images/0A_KANTO/0A_KANTO_0B-01_Brock.png", "yellow")}
                            {SyncPairIcon("Wallace & Milotic", "", "/images/0C_HOENN/0C_HOENN_0B-08_Wallace.png", "green")}
                            {SyncPairIcon("Crasher Wake & Floatzel", "", "/images/0D_SINNOH/0D_SINNOH_0B-04_CrasherWake.png", "green")}
                            {SyncPairIcon("Marshal & Conkeldurr", "", "/images/0E_UNOVA/0E_UNOVA_0C-03_Marshal.png", "green")}
                            {SyncPairIcon("Kahili & Toucannon", "", "/images/0G_ALOLA/0G_ALOLA_0C-04_Kahili.png", "green")}
                        </div>
                        <div className="dminus-row tierlist-row">
                            <div className="tier-title">D-</div>
                            {SyncPairIcon("Calem & Meowstic", "", "/images/0F_KALOS/0F_KALOS_0A-01_Calem.png", "red")}
                            {SyncPairIcon("Lt. Surge & Electrode", "", "/images/0A_KANTO/0A_KANTO_0B-03a_LtSurge.png", "red")}
                            {SyncPairIcon("Flannery & Torkoal", "", "/images/0C_HOENN/0C_HOENN_0B-04_Flannery.png", "orange")}
                            {SyncPairIcon("Lucy & Seviper", "", "/images/0C_HOENN/0C_HOENN_0E-02_Lucy.png", "orange")}
                            {SyncPairIcon("Player & Pikachu", "", "/images/00_PASIO/00_PASIO_0A-01b_Pikachu.png", "yellow")}
                            {SyncPairIcon("Norman & Slaking", "", "/images/0C_HOENN/0C_HOENN_0B-05_Norman.png", "yellow")}
                            {SyncPairIcon("Grant & Aurorus", "", "/images/0F_KALOS/0F_KALOS_0B-02_Grant.png", "green")}
                            {SyncPairIcon("Clay & Seismitoad", "", "/images/0E_UNOVA/0E_UNOVA_0B-05_Clay.png", "green")}
                            {SyncPairIcon("Lorelei & Lapras", "", "/images/0A_KANTO/0A_KANTO_0C-01_Lorelei.png", "green")}
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
                            {SyncPairIcon("Arc Suit Steven & Metagross", "", "/images/0C_HOENN/StevenArc_Metagross_5ex.png", "red")}
                            {SyncPairIcon("Blue (Champion) & Zapdos", "", "/images/0A_KANTO/0A_KANTO_0A-02_NCBlue.png", "red")}
                            {SyncPairIcon("Rosa (Champion) & Meloetta", "", "/images/0E_UNOVA/Rosa_Meloetta_Psy.png", "orange")}
                            {SyncPairIcon("Sygna Suit Mina & Tapu Fini", "", "/images/0G_ALOLA/0G_ALOLA_0B-07_ssMina.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Cynthia (Aura) & Lucario", "", "/images/0D_SINNOH/0D_SINNOH_0C-05_SSACynthia.png", "yellow")}
                            {SyncPairIcon("Chase & Pikachu", "", "/images/0A_KANTO/Chase_Pikachu.png", "green")}
                            {SyncPairIcon("Elaine & Eevee", "", "/images/0A_KANTO/Elaine.png", "green")}
                        </div>
                        <div className="splus-row tierlist-row">
                            <div className="tier-title">S+</div>
                            {SyncPairIcon("Sygna Suit Morty & Ho-Oh", "", "/images/0B_JOHTO/0B_JOHTO_0B-04_SSMorty.png", "red")}
                            {SyncPairIcon("Penny & Sylveon", "", "/images/0I_PALDEA/Penny_Sylveon.png", "orange")}
                            {SyncPairIcon("Sygna Suit Acerola & Tapu Bulu", "", "/images/0G_ALOLA/0G_ALOLA_0C-03_ssAcerola.png", "orange")}
                            {SyncPairIcon("Sygna Suit Kris & Suicune", "", "/images/0B_JOHTO/0B_JOHTO_0A-03_ssKris.png", "orange")}
                            {SyncPairIcon("Eri & Annihilape", "", "/images/0I_PALDEA/Eri_0979.png", "orange")}
                            {SyncPairIcon("Bugsy (Holiday 2024) & Kricketune", "", "/images/0B_JOHTO/Bugsy_0402_5.png", "yellow")}
                            {SyncPairIcon("Argenta & Skarmory", "", "/images/0D_SINNOH/0D_SINNOH_0E-07_Argenta.png", "yellow")}
                            {SyncPairIcon("Grusha & Cetitan", "", "/images/0I_PALDEA/Grusha_Cetitan.png", "yellow")}
                            {SyncPairIcon("Rika & Clodsire", "", "/images/0I_PALDEA/Rika_Clodsire.png", "yellow")}
                            {SyncPairIcon("Bede (Champion) & Galarian Articuno", "", "/images/0H_GALAR/0H_GALAR_0A-05_NeoChampBede.png", "green")}
                            {SyncPairIcon("Iono & Bellibolt", "", "/images/0I_PALDEA/Iono_0939.png", "green")}
                        </div>
                        <div className="s-row tierlist-row">
                            <div className="tier-title">S</div>
                            {SyncPairIcon("Calem (Champion) & Greninja", "", "/images/0F_KALOS/0F_KALOS_0A-01_ChampCalem.png", "red")}
                            {SyncPairIcon("Sygna Suit Dawn & Cresselia", "", "/images/0D_SINNOH/0D_SINNOH_0A-02_SSDawn.png", "red")}
                            {SyncPairIcon("Red & Snorlax", "", "/images/0A_KANTO/0A_KANTO_0A-01_Red.png", "red")}
                            {SyncPairIcon("Milo & Eldegoss", "", "/images/0H_GALAR/Milo_0830_5.png", "orange")}
                            {SyncPairIcon("Kabu & Centiskorch", "", "/images/0H_GALAR/Kabu_Centiskorch.png", "orange")}
                            {SyncPairIcon("Acerola (Summer 2024) & Jellicent", "", "/images/0G_ALOLA/Acerola_Jellicent_5.png", "yellow")}
                            {SyncPairIcon("Anabel & Snorlax", "", "/images/0G_ALOLA/0G_ALOLA_0E-03_Anabel.png", "yellow")}
                            {SyncPairIcon("Bellelba & Swoobat", "", "/images/0E_UNOVA/Bellelba_Swoobat.png", "yellow")}
                            {SyncPairIcon("Elio (Alt.) & Stakataka", "", "/images/0G_ALOLA/Elio_Stakataka_5.png", "yellow")}
                            {SyncPairIcon("Falkner & Noctowl", "", "/images/0B_JOHTO/Falkner_Noctowl.png", "green")}
                            {SyncPairIcon("Arven & Mabosstiff", "", "/images/0I_PALDEA/Arven_Mabosstiff_5.png", "green")}
                        </div>
                        <div className="sminus-row tierlist-row">
                            <div className="tier-title">S-</div>
                            {SyncPairIcon("Sygna Suit Brendan & Latios", "", "/images/0C_HOENN/0C_HOENN_0A-01_SSBrendan.png", "red")}
                            {SyncPairIcon("Mallow & Shiinotic", "", "/images/0G_ALOLA/0G_ALOLA_0B-04_vMallow.png", "red")}
                            {SyncPairIcon("Sygna Suit Blue & Blastoise", "", "/images/0A_KANTO/0A_KANTO_0A-02_SSBlue.png", "orange")}
                            {SyncPairIcon("Shauna (Special Costume) & Klefki", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2023_Shauna.png", "orange")}
                            {SyncPairIcon("Volo & Togepi", "", "/images/0D1_HISUI/Volo_Togepi_5.png", "orange")}
                            {SyncPairIcon("Jasmine (Holiday 2022) & Ampharos", "", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2022_Jasmine.png", "orange")}
                            {SyncPairIcon("Steven (Special Costume) & Stoutland", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2023_Steven.png", "yellow")}
                            {SyncPairIcon("Ingo & Excadrill", "", "/images/0E_UNOVA/0E_UNOVA_0E-01_Ingo.png", "yellow")}
                            {SyncPairIcon("Professor Sycamore & Xerneas", "", "/images/0F_KALOS/0F_KALOS_0F-01_ProfSycamore.png", "yellow")}
                            {SyncPairIcon("Sonia & Yamper", "", "/images/0H_GALAR/0H_GALAR_0F-01_Sonia.png", "green")}
                            {SyncPairIcon("Victor (Palentine's 2024) & Greedent", "", "/images/0H_GALAR/Victor_Greedent.png", "green")}
                        </div>
                        <div className="aplus-row tierlist-row">
                            <div className="tier-title">A+</div>
                            {SyncPairIcon("Leaf & Eevee", "", "/images/0A_KANTO/0A_KANTO_0A-03_Leaf.png", "red")}
                            {SyncPairIcon("Aaron & Vespiquen", "", "/images/0D_SINNOH/0D_SINNOH_0C-01_Aaron.png", "red")}
                            {SyncPairIcon("Ball Guy & Amoonguss", "", "/images/0H_GALAR/0H_GALAR_0F-01_BallGuy.png", "orange")}
                            {SyncPairIcon("Sawyer & Gimmighoul", "", "/images/00_PASIO/Sawyer_Gimmighoul_5.png", "orange")}
                            {SyncPairIcon("Lillie (Special Costume) & Polteageist", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2022_Lillie.png", "orange")}
                            {SyncPairIcon("Phoebe (Fall 2023) & Cofagrigus", "", "/images/0C_HOENN/Phoebe_Cofagrigus.png", "orange")}
                            {SyncPairIcon("Burgh (Spring 2021) & Togepi", "", "/images/0Y_SEASONALS/0Z_0F_SPRING_2021_Burgh.png", "yellow")}
                            {SyncPairIcon("Hop & Zamazenta", "", "/images/0H_GALAR/0H_GALAR_0A-03_Hop.png", "yellow")}
                            {SyncPairIcon("Melony & Lapras", "", "/images/0H_GALAR/0H_GALAR_0B-06b_Melony.png", "yellow")}
                            {SyncPairIcon("Elio & Primarina", "", "/images/0G_ALOLA/0G_ALOLA_0A-01_Elio.png", "green")}
                            {SyncPairIcon("Mallow (Palentine's 2023) & Appletun", "", "/images/0Y_SEASONALS/0Z_0E_PAL_2023_Mallow.png", "green")}
                        </div>
                        <div className="a-row tierlist-row">
                            <div className="tier-title">A</div>
                            {SyncPairIcon("Clair (New Year's 2024) & Drampa", "", "/images/0B_JOHTO/Clair_0780.png", "red")}
                            {SyncPairIcon("Jasmine (Special Costume) & Celesteela", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2021_Jasmine.png", "red")}
                            {SyncPairIcon("Proton & Golbat", "", "/images/0B_JOHTO/0B_JOHTO_0D-04_Proton.png", "orange")}
                            {SyncPairIcon("Tierno & Crawdaunt", "", "/images/0F_KALOS/Tierno_Crawdaunt_5.png", "orange")}
                            {SyncPairIcon("Lyra (Special Costume) & Phanpy", "", "/images/0Y_SEASONALS/0Z_0H_SPCostume_2023_Lyra.png", "orange")}
                            {SyncPairIcon("Allister (Fall 2022) & Gourgeist", "", "/images/0Y_SEASONALS/0Z_0C_FALL_2022_Allister.png", "orange")}
                            {SyncPairIcon("Bea (Palentine's 2022) & Vanilluxe", "", "/images/0Y_SEASONALS/0Z_0E_PAL_2022_Bea.png", "yellow")}
                            {SyncPairIcon("Lorelei & Cloyster", "", "/images/0A_KANTO/0A_KANTO_0C-01b_Lorelei.png", "yellow")}
                            {SyncPairIcon("Professor Oak & Nidorino", "", "/images/0A_KANTO/Oak_Nidorino_5.png", "yellow")}
                            {SyncPairIcon("Morgan & Virizion", "", "/images/0F_KALOS/Morgan_Virizion_5.png", "green")}
                            {SyncPairIcon("Professor Sycamore (Holiday 2023) & Gogoat", "", "/images/0F_KALOS/Sycamore_Gogoat.png", "green")}
                        </div>
                        <div className="aminus-row tierlist-row">
                            <div className="tier-title">A-</div>
                            {SyncPairIcon("Kiawe & Alolan Marowak", "", "/images/0G_ALOLA/0G_ALOLA_0B-03_Kiawe.png", "red")}
                            {SyncPairIcon("Guzma & Ariados", "", "/images/0G_ALOLA/Guzma_Ariados.png", "red")}
                            {SyncPairIcon("Agatha & Arbok", "", "/images/0A_KANTO/0A_KANTO_0C-03b_Agatha.png", "red")}
                            {SyncPairIcon("Bruno & Onix", "", "/images/0A_KANTO/0A_KANTO_0C-02b_Bruno.png", "orange")}
                            {SyncPairIcon("Falkner & Swellow", "", "/images/0B_JOHTO/0B_JOHTO_0B-01_Falkner.png", "orange")}
                            {SyncPairIcon("Shauna & Chesnaught", "", "/images/0F_KALOS/0F_KALOS_0A-03_Shauna.png", "orange")}
                            {SyncPairIcon("Lyra & Meganium", "", "/images/0B_JOHTO/0B_JOHTO_0A-02_Lyra.png", "yellow")}
                            {SyncPairIcon("Caitlin (Fall 2021) & Sableye", "", "/images/0Y_SEASONALS/0Z_0C_FALL_2021_Caitlin.png", "yellow")}
                            {SyncPairIcon("Iono & Wattrel", "", "/images/0I_PALDEA/Iono_Wattrel_4.png", "yellow")}
                            {SyncPairIcon("Tina & Flareon", "", "/images/00_PASIO/00_PASIO_0E-05_Tina.png", "green")}
                            {SyncPairIcon("Kabu & Torkoal", "", "/images/0H_GALAR/Kabu_Torkoal_4.png", "green")}
                        </div>
                        <div className="bplus-row tierlist-row">
                            <div className="tier-title">B+</div>
                            {SyncPairIcon("Hilda (Summer 2022) & Grapploct", "", "/images/0Y_SEASONALS/0Z_0B_SUM_2022_Hilda.png", "red")}
                            {SyncPairIcon("Blue & Exeggutor", "", "/images/0A_KANTO/0A_KANTO_0A-02_TL_Blue.png", "red")}
                            {SyncPairIcon("Hilbert & Samurott", "", "/images/0E_UNOVA/0E_UNOVA_0A-01_Hilbert.png", "red")}
                            {SyncPairIcon("Arven & Nacli", "", "/images/0I_PALDEA/Arven_0932_4.png", "orange")}
                            {SyncPairIcon("Player & Mesprit", "", "/images/00_PASIO/00_PASIO_0Db_Mesprit.png", "orange")}
                            {SyncPairIcon("Player & Cobalion", "", "/images/00_PASIO/00_PASIO_0Db_Cobalion.png", "orange")}
                            {SyncPairIcon("Gladion & Golbat", "", "/images/0G_ALOLA/Gladion_Golbat.png", "orange")}
                            {SyncPairIcon("Sabrina (New Year's 2022) & Chingling", "", "/images/0Y_SEASONALS/0Z_0D_NY_2022_Sabrina.png", "yellow")}
                            {SyncPairIcon("Glacia & Glalie", "", "/images/0C_HOENN/0C_HOENN_0C-03_Glacia.png", "yellow")}
                            {SyncPairIcon("Sygna Suit Steven & Deoxys (Defense Forme)", "", "/images/0Z_OTHER-FORMES/0C_HOENN_0C-05_ssSteven_CDefense_.png", "green")}
                            {SyncPairIcon("Rachel & Gimmighoul", "", "/images/00_PASIO/Rachel_Gimmighoul_5.png", "green")}
                        </div>
                        <div className="b-row tierlist-row">
                            <div className="tier-title">B</div>
                            {SyncPairIcon("Sygna Suit Elesa & Rotom", "", "/images/0E_UNOVA/0E_UNOVA_0B-04_SSElesa.png", "red")}
                            {SyncPairIcon("Morty & Mismagius", "", "/images/0B_JOHTO/0B_JOHTO_0B-04-BP_Morty.png", "red")}
                            {SyncPairIcon("Skyla & Swanna", "", "/images/0E_UNOVA/0E_UNOVA_0B-06_Skyla.png", "red")}
                            {SyncPairIcon("Barry & Roserade", "", "/images/0D_SINNOH/0D_SINNOH_0A-03-BP_Barry.png", "orange")}
                            {SyncPairIcon("Lana & Araquanid", "", "/images/0G_ALOLA/0G_ALOLA_0B-02_Lana.png", "orange")}
                            {SyncPairIcon("Dawn & Wormadam Plant Cloak", "", "/images/0D_SINNOH/0D_SINNOH_0A-02_TL_Dawn.png", "orange")}
                            {SyncPairIcon("Clemont & Magneton", "", "/images/0F_KALOS/0F_KALOS_0B-05_BP_Clemont.png", "orange")}
                            {SyncPairIcon("Cheryl & Wailord", "", "/images/0D_SINNOH/Cheryl_Wailord_4.png", "yellow")}
                            {SyncPairIcon("Wally & Delcatty", "", "/images/0C_HOENN/Wally_Delcatty_4.png", "yellow")}
                            {SyncPairIcon("Dana & Regice", "", "/images/0F_KALOS/Dana_Regice_5.png", "yellow")}
                            {SyncPairIcon("Evelyn & Entei", "", "/images/0F_KALOS/Evelyn_Entei_5.png", "green")}
                        </div>
                        <div className="bminus-row tierlist-row">
                            <div className="tier-title">B-</div>
                            {SyncPairIcon("Nita & Landorus", "", "/images/0F_KALOS/Nita_Landorus_5.png", "red")}
                            {SyncPairIcon("Player & Raikou", "", "/images/00_PASIO/PlayerM_Raikou_5.png", "red")}
                            {SyncPairIcon("Sabrina & Alakazam", "", "/images/0A_KANTO/0A_KANTO_0B-06_Sabrina.png", "red")}
                            {SyncPairIcon("Sawyer & Honchkrow", "", "/images/00_PASIO/Sawyer_Honchkrow_4.png", "orange")}
                            {SyncPairIcon("Lenora & Watchog", "", "/images/0E_UNOVA/Lenora_Watchdog.png", "orange")}
                            {SyncPairIcon("Trevor & Florges", "", "/images/0F_KALOS/Trevor_Florges_5.png", "orange")}
                            {SyncPairIcon("Cheryl & Blissey", "", "/images/0D_SINNOH/Cheryl_0242_3.png", "orange")}
                            {SyncPairIcon("Olivia & Carbink", "", "/images/0G_ALOLA/0G_ALOLA_0C-02-BP_Olivia.png", "yellow")}
                            {SyncPairIcon("Player & Alcremie", "", "/images/00_PASIO/Scottie_Alcreamie_4.png", "yellow")}
                            {SyncPairIcon("Cynthia & Gastrodon", "", "/images/0D_SINNOH/0D_SINNOH_0C-05_TL_Cynthia.png", "yellow")}
                            {SyncPairIcon("Misty (Swimsuit) & Psyduck", "", "/images/0A_KANTO/0A_KANTO_0B-02b_SwimsuitMisty.png", "green")}
                        </div>
                        <div className="cplus-row tierlist-row">
                            <div className="tier-title">C+</div>
                            {SyncPairIcon("Dawn (Palentine's 2021) & Alcremie", "", "/images/0Y_SEASONALS/0Z_0E_PAL_2021_Dawn.png", "red")}
                            {SyncPairIcon("Lt. Surge & Raichu", "", "/images/0A_KANTO/0A_KANTO_0B-03b_LtSurge.png", "red")}
                            {SyncPairIcon("Elesa & Joltik", "", "/images/0E_UNOVA/0E_UNOVA_0B-04_TL_Elesa.png", "red")}
                            {SyncPairIcon("Jasmine & Steelix", "", "/images/0B_JOHTO/0B_JOHTO_0B-06_Jasmine.png", "orange")}
                            {SyncPairIcon("Piers & Obstagoon", "", "/images/0H_GALAR/0H_GALAR_0B-07_Piers.png", "orange")}
                            {SyncPairIcon("Player & Registeel", "", "/images/00_PASIO/00_PASIO_0Db_Registeel.png", "orange")}
                            {SyncPairIcon("Maylene & Medicham", "", "/images/0D_SINNOH/0D_SINNOH_0B-03_Maylene.png", "orange")}
                            {SyncPairIcon("Lillie (New Year's 2021) & Ribombee", "", "/images/0Y_SEASONALS/0Z_0D_NY_2021_Lillie.png", "yellow")}
                            {SyncPairIcon("Giovanni & Nidorino", "", "/images/0A_KANTO/Giovanni.png", "yellow")}
                            {SyncPairIcon("Raihan & Gigalith", "", "/images/0H_GALAR/0H_GALAR_0B-08_TL_Raihan.png", "yellow")}
                            {SyncPairIcon("Giovanni & Persian", "", "/images/0A_KANTO/0A_KANTO_0D-01-EP_Giovanni.png", "green")}
                        </div>
                        <div className="c-row tierlist-row">
                            <div className="tier-title">C</div>
                            {SyncPairIcon("Bugsy & Scyther", "", "/images/0B_JOHTO/0B_JOHTO_0B-02-EP_Bugsy.png", "red")}
                            {SyncPairIcon("Morty & Gastly", "", "/images/0B_JOHTO/0B_JOHTO_0B-04_TL_Morty.png", "red")}
                            {SyncPairIcon("Phoebe & Dusknoir", "", "/images/0C_HOENN/0C_HOENN_0C-02_Phoebe.png", "red")}
                            {SyncPairIcon("Acerola & Banette", "", "/images/0G_ALOLA/0G_ALOLA_0C-03_TL_Acerola.png", "orange")}
                            {SyncPairIcon("Adaman & Vaporeon", "", "/images/0D1_HISUI/0I_HISUI_0B-01_TL_Adaman.png", "orange")}
                            {SyncPairIcon("Player & Regirock", "", "/images/00_PASIO/00_PASIO_0Db_Regirock.png", "orange")}
                            {SyncPairIcon("Leaf & Clefable", "", "/images/0A_KANTO/0A_KANTO_0A-03_TL_Leaf.png", "orange")}
                            {SyncPairIcon("Lillie & Clefairy", "", "/images/0G_ALOLA/0G_ALOLA_0A-04_Lillie.png", "yellow")}
                            {SyncPairIcon("Jasmine & Magnemite", "", "/images/0B_JOHTO/Jasmine_Magnemite.png", "green")}
                            {SyncPairIcon("Janine & Crobat", "", "/images/0A_KANTO/0A_KANTO_0B-05_BP_Janine.png", "green")}
                        </div>
                        <div className="dplus-row tierlist-row">
                            <div className="tier-title">D+</div>
                            {SyncPairIcon("Roxanne & Probopass", "", "/images/0C_HOENN/0C_HOENN_0B-01_Roxanne.png", "red")}
                            {SyncPairIcon("Rachel & Umbreon", "", "/images/00_PASIO/Rachel_Umbreon_4.png", "red")}
                            {SyncPairIcon("Rosa (Holiday 2019) & Delibird", "", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2019_Rosa.png", "orange")}
                            {SyncPairIcon("Marley & Arcanine", "", "/images/0D_SINNOH/0D_SINNOH_0E-03_Marley.png", "orange")}
                            {SyncPairIcon("Player & Torchic", "", "/images/00_PASIO/00_PASIO_0B-01b_Torchic.png", "orange")}
                            {SyncPairIcon("Rosa & Serperior", "", "/images/0E_UNOVA/0E_UNOVA_0A-06_Rosa.png", "yellow")}
                            {SyncPairIcon("Acerola & Palossand", "", "/images/0G_ALOLA/0G_ALOLA_0C-03_Acerola.png", "yellow")}
                            {SyncPairIcon("Kali & Azumarill", "", "/images/0F_KALOS/0F_KALOS_0X-02_Kali.png", "green")}
                            {SyncPairIcon("Erika (Holiday 2020) & Comfey", "", "/images/0Y_SEASONALS/0Z_0A_HOLIDAY_2020_Erika.png", "green")}
                            {SyncPairIcon("Cheren & Stoutland", "", "/images/0E_UNOVA/0E_UNOVA_0A-03_Cheren.png", "green")}
                        </div>
                        <div className="d-row tierlist-row">
                            <div className="tier-title">D</div>
                            {SyncPairIcon("Drake & Salamence", "", "/images/0C_HOENN/0C_HOENN_0C-04_Drake.png", "red")}
                            {SyncPairIcon("Ramos & Victreebel", "", "/images/0F_KALOS/0F_KALOS_0B-04_Ramos.png", "red")}
                            {SyncPairIcon("Liza & Lunatone", "", "/images/0C_HOENN/0C_HOENN_0B-07-2_Liza.png", "orange")}
                            {SyncPairIcon("Thorton & Bronzong", "", "/images/0D_SINNOH/0D_SINNOH_0E-01_Thorton.png", "orange")}
                            {SyncPairIcon("Viola & Masquerain", "", "/images/0F_KALOS/0F_KALOS_0B-01_Viola.png", "orange")}
                            {SyncPairIcon("Marlon & Carracosta", "", "/images/0E_UNOVA/0E_UNOVA_0B-10_Marlon.png", "orange")}
                            {SyncPairIcon("Erika & Tangela", "", "/images/0A_KANTO/0A_KANTO_0B-04b_Erika.png", "yellow")}
                            {SyncPairIcon("Wulfric & Avalugg", "", "/images/0F_KALOS/0F_KALOS_0B-08_Wulfric.png", "yellow")}
                            {SyncPairIcon("Brycen & Cryogonal", "", "/images/0E_UNOVA/0E_UNOVA_0B-07_Brycen.png", "green")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TierList;