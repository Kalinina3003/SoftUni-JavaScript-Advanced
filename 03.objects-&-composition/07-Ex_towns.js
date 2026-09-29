// Task: Create a JSON array from a text table.
// Description: Parse table rows, create objects with town, latitude, and longitude,
// round coordinates to two decimal places, and print the result as JSON.

function townsToJson(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let data = arr[i]
            .split('|')
            .map(x => x.trim())
            .filter(x => x !== '');

        let town = data[0];
        let latitude = Number(data[1]).toFixed(2);
        let longitude = Number(data[2]).toFixed(2);

        let townObject = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        };

        result.push(townObject);
    }

    console.log(JSON.stringify(result));
}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
// [{"Town":"Sofia",
//   "Latitude":42.7,
//   "Longitude":23.32
// },
// {"Town":"Beijing", 
//  "Latitude":39.91, 
//  "Longitude":116.36
// }];

townsToJson(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);
// [{"Town":"Veliko Turnovo",
//   "Latitude":43.08,
//   "Longitude":25.62
// },
// {"Town":"Monatevideo",
//  "Latitude":34.5,
//  "Longitude":56.11
// }];