classes = ["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper", "Spy"];

images = [
            "images/icon_scout.jpg","images/icon_soldier.jpg","images/icon_pyro.jpg",
            "images/icon_demoman.jpg","images/icon_heavy.jpg","images/icon_engineer.jpg",
            "images/icon_medic.jpg","images/icon_sniper.jpg","images/icon_spy.jpg"
        ]

weapons = [
            ["Scattergun", "Peppergun", "Pistol", "Bat"],
            ["Rocket Launcher", "Shotgun", "Shovel", "Pickaxe", "Sword"],
            ["Flame Thrower", "Shotgun", "Flaregun", "Fireaxe"],
            ["Grenade Launcher", "Stickybomb Launcher", "Bottle", "Stick Bomb", "Sword"],
            ["Minigun", "Shotgun", "Fists", "Boxing Gloves"],
            ["Shotgun", "Pistol", "Wrench", "Robot Arm"],
            ["Syringe Gun", "Crossbow", "Bonesaw"],
            ["Sniper Rifle", "SMG", "Kukri"],
            ["Revolver", "Knife"]
        ];

prefixes = [ 
            "Jimmy's", "Tuna-can", "Conscientious", "Mann", "Burger", "Donatello", "Evil",
            "Nefarious", "Clarinet", "Red", "Yellow", "Green", "White", "Blue", "Black",
            "Pink", "Purple", "Hobo", "Spazzed", "Gnarly", "Soda", "Merc's", "Mann's",
            "Surfin'", "Big Shot", "Hot", "Bot", "Rot", "Pine", "Fruit", "Metal", "Punk",
            "Premeditated", "Skyshock", "Mothballin'", "Ace", "Stormy", "Apple", "Boston",
            "Kansas", "Ullapool", "Scot's", "Gun", "Wacky", "Silly", "Burnt", "Seared",
            "Choppa", "Buggy", "Offensive", "Defensive", "Cracked", "Barnacle", "Bunsen",
            "Eyeball", "Surgeon's", "Renegade", "Frying", "Stinky", "Dank", "Dark", "Freaky",
            "Killer", "Royal", "Regal", "American", "German", "Scottish", "Russian", "Australian",
            "Greaser", "1000-yard", "Jackrifleman", "Fatal", "Recycled", "Cardboard", "Eyelash",
            "Uncle", "Elongated", "Epic", "Nerd", "Christmas", "Merry", "Rodney", "Randal",
            "Gromky", "Razrez", "Toe", "Wife", "Spouse", "Husband", "Tempered", "Experimental",
            "Mental", "Kid", "Boy", "Salty", "Gregorian", "Hindenburg", "Prime", "Glizzy", "Eidolon",
            "Mississippi", "Fort", "Night", "Battle", "Raw", "Milk", "Giga", "Explosive", "Boom", "Midnight",
            ""
        ];

names = [
            "Dogger", "Boomstick", "Blaster", "Shooter", "Slicer", "Dicer", "Cannon", "Bulleter",
            "Doohickey", "Thingamabob", "Event", "End", "Box", "Meat", "Chop", "Popper", "Choppa",
            "Wednesday", "Protest", "Tabletop", "Kid" , "Tub", "Bug", "Razor", "Shoe", "Pantleg", "T-shirt",
            "Offensive", "Defensive", "Spark", "Crack", "Sash", "Barrel", "Barnacle", "Battler",
            "Urchin", "Urchineer" , "Bat", "Saw", "Shotgun", "Launcher", "Glass", "Engine", "Burner", "Experiment", "Balisong",
            "Knife", "Fist", "Caber", "Claymore", "Chopshop", "Jaundice", "Ball", "Eye", "Pan",
            "Janitor", "Cleaner", "Mama", "Papa" , "Rainmaker", "Peeler", "Butcher", "Death", "Killer",
            "Basher", "Maul", "Murder", "Stare", "Jackrifleman", "Maker", "Rifle", "Attractor", "Fatality",
            "Sucker", "Catastrophe", "Shaft", "Disaster", "Rod", "Jimmy", "Lyuda", "Goofball", "Stabber",
            "Shank", "Jabber", "Shot", "Cleaver", "Splitter", "Mangler", "Massacre", "Incident", "Prime", "Crime",
            "Master", "Gobbler", "Disciple", "Mile", "Ally", "King", "Queen", "Night", "Pass", "Barnacle", "Maid",
            "Boy", "Chad", "Bender", "Player", "Bomb", "Special", "Christmas"
];



attributes = [
        [
            "+$PER% damage bonus", "+$PER% clip size", "+$PER% faster firing speed", "On Hit: Gain $STATUS for $INT seconds",
            "On Hit: Gain up to +$PER health", "+$PER max health on wearer", "On Kill: Gain $STATUS for $INT seconds",
            "On Hit: Ignites target for $INT seconds", "On Hit: Bleeds target for $INT seconds", "$PER% faster move speed on wearer",
            "On Kill: +$PER% damage bonus for $INT seconds", "+$PER% more accurate", "Mini-crits airborne targets",
            "Damage increases as the user becomes injured", "Damage removes Sappers", "Imbued with an ancient power",
            "The wearer cannot be killed by headshots", "Crits whenever it would normally mini-crit", "$PER% faster weapon switch speed",
            "100% mini-crits vs burning players", "Wearer never takes falling damage", "Does not require ammo", "Projectile penetrates enemy targets",
            "+$PER health gained per second on wearer", "On Hit: damage dealt is returned as ammo", "+$PER% max ammo on wearer",
            "+$PER% greater jump height on wearer"
        ],
        [
            "-$PER% damage penalty", "-$PER% clip size", "-$PER max health on wearer", "On Damage: Become $STATUS for $INT seconds",
            "On Damage: Instantly die", "On Miss: Hit yourself. Idiot.", "No random critical hits", "On Miss: Lose -$PER health",
            "On Miss: Instantly die", "$PER% slower move speed on wearer", "-$PER% less accurate", "Damage decreases as the user becomes injured",
            "-$PER health drained per second on wearer", "$PER% slower weapon switch speed", "Fires tracer rounds", "-$PER% max ammo on wearer",
            "On Miss: Become $STATUS for $INT seconds"
        ]

]

statuses = [
        [
            "100% critical chance", "speed bonus", "mini-crits", "invulnerability"
        ],
        [
            "slowed", "marked for death", "ignited", "doused in Mad Milk", "doused in Jarate"
        ]
]

function preloadImages(imgArr) {
    _img = [];
    for (i = 0; i < imgArr.length; i++) {
        _img[i] = (new Image).src = images[i];
    }
}

function irandom(x) {
    return Math.floor(Math.random() * x);
};

function irandom_range(x, y) {
    return Math.floor(Math.random() * y + x, + 1);
};

function modifyDOM(name, lvl, pos, neg, cls) {
    document.getElementById("weapon-name").innerHTML = name;
    document.getElementById("weapon-level").innerHTML = lvl;
    document.getElementById("attributes-pos").innerHTML = pos;
    document.getElementById("attributes-neg").innerHTML = neg;
    document.getElementById("class-icon").src = "images/icon_" + cls.toLowerCase() + ".jpg";
}

function generateWeapon() 
{
    _class = irandom(classes.length);
    _class_name = classes[_class];
    _wep = weapons[_class][irandom(weapons[_class].length)];
    _prefix = prefixes[irandom(prefixes.length)];
    _name = names[irandom(names.length)];
    _fname = "The " + _prefix + " " + _name;
    _lvlInt = Math.floor((irandom(99)))+1//+1)/5) * 5;
    _lvl = "Level " + _lvlInt.toString() + " " + _wep;
    _pos = attributeAddPos();
    _neg = attributeAddNeg();

    modifyDOM(_fname,_lvl,_pos,_neg,_class_name);
    
};

function getAttribute(neg) {
    _att = attributes[neg][irandom(attributes[neg].length)];
    _percent = Math.floor((((irandom(99)))+5)/5) * 5;
    //console.log(_percent.toString());
    _att = _att.replace("$PER", _percent.toString());
    _att = _att.replace("$STATUS", statuses[neg][irandom(statuses[neg].length)]);
    _int = Math.floor((((irandom(29)))+5)/5) * 5;
    _att = _att.replace("$INT", _int.toString());

    return _att;
}

function attributeAddPos() {
    _cnt = irandom(2)+1;
    _att = "";
    for (i = 0; i < _cnt; i++) {
        _att += getAttribute(0);
        if (i < _cnt-1) {
            _att += "<br>";
        }
    }
    return _att;
}

function attributeAddNeg() {
    _cnt = irandom(2)+1;
    _att = "";
    for (i = 0; i < _cnt; i++) {
        _att += getAttribute(1);
        if (i < _cnt-1) {
            _att += "<br>";
        }
    }
    return _att;
}