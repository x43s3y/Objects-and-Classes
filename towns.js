function towns(listTowns) {
    town = {
        town: '',
        latitude: 0,
        longitude: 0
    };

    listTowns.forEach(townDetails => {
        let details = townDetails.split(' | ');
        let name = details[0];
        let latitude = Number(details[1]).toFixed(2);
        let longitude = Number(details[2]).toFixed(2);
        town.town = name;
        town.latitude = latitude;
        town.longitude = longitude;
        console.log(town);
    });
}

towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])