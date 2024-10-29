const fs = require('fs');
const path = require('path');

const count = Number(process.argv[2]) || 10; // Możesz zmienić domyślną wartość na 10
let people = [];

fs.readFile('./src/data/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    // Przetwarzanie danych z pliku
    const lines = data.split("\n").map(line => line.trim()).filter(line => line.length > 0);
    
    for (let i = 0; i < count; i++) {
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        const [name, birthDate, nationality] = randomLine.split(', ');

        const person = {
            id: i + 1,
            name,
            birthDate,
            nationality
        };
        
        people.push(person);
    }

    const content = `export const data = ${JSON.stringify(people, null, 2)};`;

    fs.writeFile(path.join(__dirname, './module-data.js'), content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("module-data.js generated successfully");
        }
    });
});
