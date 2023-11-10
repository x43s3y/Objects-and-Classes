function piccolo(commands) {
    let command, carNumb;
    let cars = [];
    commands.forEach(rawCommand => {
        [command, carNumb] = rawCommand.split(', ');
        if (command === "IN" && !cars.includes(carNumb)) {
            cars.push(carNumb);
        }else if (command === "OUT" && cars.includes(carNumb)) {
            cars.splice(cars.indexOf(carNumb), 1);
        }
    });

    if (cars.length === 0) {
        console.log("Parking Lot is Empty");
    }else{
        cars = cars.sort((a, b) => a.localeCompare(b));
        cars.forEach(car => {
            console.log(car);
        })
    }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])