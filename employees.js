function employees(listEmployees) {
    employee = {
        name: '',
        pesonalNumb: 0
    };
    listEmployees.forEach(employeeName => {
        employee.name = employeeName;
        employee.pesonalNumb = employeeName.length;
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.pesonalNumb}`);
    });
}

employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])