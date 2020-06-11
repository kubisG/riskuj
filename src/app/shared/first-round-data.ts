const text1 = 'Kdy jsi byla poprvé u moře - kde a kolik ti bylo let?';
const text2 = 'S kolika z nás na této rozlučce jsi byla na společné dovolené? (Počítej vše, kdes byla přes noc.)';
const text3 = 'Kolik cizích zemí jsi s Pavlem navštívila?';
const text4 = 'Kolik fotek z dovolené v Kanadě jsi postla na svůj FB a na kolika z nich je vidět tvůj zásnubní prsten?';
const text5 = 'Jak se jmenuje nejvyšší hora Arménie a kolik lajků na FB má vaše fotka z ní?';
const questions1 = [
    { id: 1, value: 1000, text: text1, categoryId: 1, answered: false, correct: false },
    { id: 2, value: 2000, text: text2, categoryId: 1, answered: false, correct: false },
    { id: 3, value: 3000, text: text3, categoryId: 1, answered: false, correct: false },
    { id: 4, value: 4000, text: text4, categoryId: 1, answered: false, correct: false },
    { id: 5, value: 5000, text: text5, categoryId: 1, answered: false, correct: false },
];

const text6 = 'Jaký je Pavlův nejoblíbenější film?';
const text7 = 'Jak se jmenuje Pavlova první dětská láska?';
const text8 = 'Co má na tobě Pavel nejradši?';
const text9 = 'Bronzová cihlička';
const text10 = 'Kdy přesně se Pavel narodil? Rok, měsíc, den, hodina!';
const questions2 = [
    { id: 6, value: 1000, text: text6, categoryId: 2, answered: false, correct: false },
    { id: 7, value: 2000, text: text7, categoryId: 2, answered: false, correct: false },
    { id: 8, value: 3000, text: text8, categoryId: 2, answered: false, correct: false },
    { id: 9, value: 4000, text: text9, categoryId: 2, answered: false, correct: false, brick: 'bronze'},
    { id: 10, value: 5000, text: text10, categoryId: 2, answered: false, correct: false },
];

const text11 = 'Jak se přezdívá panu Pavlu Poulíčkovi, který moderoval Kolotoč?';
const text12 = 'Jak Nikol Štíbrová přezdívá svému synovi a jak se ve skutečnosti jmenuje?';
const text13 = 'S kým má po divokém rozvodu s Lucií Vondráčkovou dítě tvůj oblíbený Tomáš Pleky Plekanec?';
const text14 = 'Kdo vyhrál Stardance v roce 2013? Jednalo se o šestou řadu. Pár se po/při soutěži stal párem i v soukromí.';
const text15 = 'Kolik sledujících má na Instagramu k dnešmínu dni Leoš Mareš? Tolerance je +- 1000 lidí.';
const questions3 = [
    { id: 11, value: 1000, text: text11, categoryId: 3, answered: false, correct: false },
    { id: 12, value: 2000, text: text12, categoryId: 3, answered: false, correct: false },
    { id: 13, value: 3000, text: text13, categoryId: 3, answered: false, correct: false },
    { id: 14, value: 4000, text: text14, categoryId: 3, answered: false, correct: false },
    { id: 15, value: 5000, text: text15, categoryId: 3, answered: false, correct: false },
];

const text16 = 'Kdo z kolegů z práce tě vyprovázel uprostřed noci z akcí domů?';
const text17 = 'Poznej kolegu z KPMG podle indícií: 1. Neumí řídit 2. Do všeho kecá 3. Zapšklá stará panna';
const text18 = 'Vyjmenuj alespoň 5 párů, kteří se dali dohromady v kejpí. Kdo z nich se podle tebe vezme?';
const text19 = 'Jak se jmenují zakladatemé KPMG, podle kterých vznikl název firmy?';
const text20 = 'Kolik budeš testovat vzorků na IPE, když je počet poboček v PBC 182?';
const questions4 = [
    { id: 16, value: 1000, text: text16, categoryId: 4, answered: false, correct: false },
    { id: 17, value: 2000, text: text17, categoryId: 4, answered: false, correct: false },
    { id: 18, value: 3000, text: text18, categoryId: 4, answered: false, correct: false },
    { id: 19, value: 4000, text: text19, categoryId: 4, answered: false, correct: false },
    { id: 20, value: 5000, text: text20, categoryId: 4, answered: false, correct: false },
];

const text21 = 'Co řekne Marion v seriálu Chalupáři (díl Náhradník), že mají Bohuš Císař (Josef Kemr) a Tonda Balabán (Ilja Prachař) uschováno v šatně?';
const text22 = 'Kde se ve filmu Světáci stala chyba , že se jeden z okradených mužů (Menšík) vrátil do bytu Trčkové, kde ho Božka (Bohdalka) předtím obrala?';
const text23 = 'Kolik let bylo herci L. Peškovi v době, kdy hrál studenta gymnázia ve filmu Škola základ života?';
const text24 = 'Doplň následující hlášku z filmu Anděl na horách: Anděl: "Co lezeš na lyže, když to neumíš?" Puleček: "Já že to neumím? Víš kolik let už jezdím na hory? Nemysli si....?"';
const text25 = 'Proč Josef Kemr alias Plha chodil na natáčení filmu Marečku, podejte mi pero o půl deváté, tedy o půl hodinu později než ostatní herci?';
const questions5 = [ 
    { id: 21, value: 1000, text: text21, categoryId: 5, answered: false, correct: false },
    { id: 22, value: 2000, text: text22, categoryId: 5, answered: false, correct: false },
    { id: 23, value: 3000, text: text23, categoryId: 5, answered: false, correct: false },
    { id: 24, value: 4000, text: text24, categoryId: 5, answered: false, correct: false },
    { id: 25, value: 5000, text: text25, categoryId: 5, answered: false, correct: false },
];

const text26 = 'Kdo a kde říká následující text: "Znáte to, vstanete do šedivého rána, vyčistíte si zuby, stihnete přesně jeden lok kávy, strávíte den v práci, poklidíte dům, dojíte snídani, vyčistíte si zuby a jdete spát."?';
const text27 = 'V kterém roce měl premiéru tvůj nejoblíbenější taneční muzikál Lightning?';
const text28 = 'Jaký byl slogan Perly Music Hall?';
const text29 = 'Jak se jmenuje dítě Jardy Petříka - též zvaného Peca a Verči Konečné?';
const text30 = 'Jaké jméno dostal strašidelný zajíc, který byl již druhým rokem v Zábřeze na Nám. Osvobození a s nímž máme společnou fotku z oslavy tvých narozenin?';
const questions6 = [
    { id: 26, value: 1000, text: text26, categoryId: 6, answered: false, correct: false },
    { id: 27, value: 2000, text: text27, categoryId: 6, answered: false, correct: false },
    { id: 28, value: 3000, text: text28, categoryId: 6, answered: false, correct: false },
    { id: 29, value: 4000, text: text29, categoryId: 6, answered: false, correct: false },
    { id: 30, value: 5000, text: text30, categoryId: 6, answered: false, correct: false },
];

const textCategory1 = 'Která z vašich dovolených se nejvíc líbila Pavlovi a proč?';
const textCategory2 = 'Co mi Pavel řekl, když jsme se bavili o zásnubách a vybírali prsten?';
const textCategory3 = 'O které sportovkyni všichni lidi na světě, kromě tebe říkají, že vážně není hezká a ty bys to konečně měla taky přiznat?';
const textCategory4 = 'Vyjmenuj nejlepší lidi, který ti dalo KPMG?';
const textCategory5 = 'Který český film, který ty máš ráda nemá rád Pavel?';
const textCategory6 = 'Jak Milan Žváček objednával klukům v Retru absintha a posléze Pavel Colu?';
export const categories = [
    { id: 1, name: 'Letem světem', questions: questions1, answered: false, correct: false, locked: true, text: textCategory1 },
    { id: 2, name: 'Co na to Pavel', questions: questions2, answered: false, correct: false, locked: true, text: textCategory2 },
    { id: 3, name: 'Ve světle ramp', questions: questions3, answered: false, correct: false, locked: true, text: textCategory3 },
    { id: 4, name: 'Od rána do večera', questions: questions4, answered: false, correct: false, locked: true, text: textCategory4 },
    { id: 5, name: 'Na co se koukáš', questions: questions5, answered: false, correct: false, locked: true, text: textCategory5 },
    { id: 6, name: 'Na rodné hroudě', questions: questions6, answered: false, correct: false, locked: true, text: textCategory6 },
];
