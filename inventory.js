function heroes(heroesDetails) {
    let heroes = [];
    let heroName, heroLevel, heroItems;
    heroesDetails.forEach(detail => {
        detail = detail.split(' / ');
        heroName = detail[0];
        heroLevel = Number(detail[1]);
        heroItems = detail[2];
        heroes.push({
            hero: heroName,
            level: heroLevel,
            items: heroItems    
        });
    });
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.hero}\nlevel => ${hero.level}\nitems => ${hero.items}`)
    });
}

heroes([

'Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'

])