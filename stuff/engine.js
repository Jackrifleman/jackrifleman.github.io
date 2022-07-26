classes = ["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper", "Spy"];
weapons = [
            ["Scattergun", "Peppergun", "Lunch Box", "Cleaver", "Bat"],
            ["Rocket Launcher", "Shotgun", "Battle Banner", "Shovel", "Pickaxe", "Sword"],
            ["Flame Thrower", "Shotgun", "Flaregun", "Fireaxe", "Rake"],
            ["Grenade Launcher", "Stickybomb Launcher", "Bottle", "Stick Bomb", "Sword"],
            ["Minigun", "Shotgun", "Lunch Box", "Fists", "Boxing Gloves"],
            ["Shotgun", "Pistol", "Wrench", "Robot Arm", "PDA"],
            ["Syringe Gun", "Crossbow", "Medigun", "Bonesaw"],
            ["Sniper Rifle", "SMG", "Kukri"],
            ["Revolver", "Sapper", "Knife"]
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
            "Mental", "Kid"
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
            "Shank"
];

function irandom(x) {
    return Math.floor(Math.random() * x);
};

function irandom_range(x, y) {
    return Math.floor(Math.random() * y + x, + 1);
};

function modifyDOM(name, lvl, pos, neg) {
    document.getElementById("weapon-name").innerHTML = name;
    document.getElementById("weapon-level").innerHTML = lvl;
    document.getElementById("attributes-pos").innerHTML = pos;
    document.getElementById("attributes-neg").innerHTML = neg;
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
    _pos = "";
    _neg = "";

    modifyDOM(_fname,_lvl,_pos,_neg);
    
};