// Task: List of Names.
// Description: Sort names alphabetically and print them
// as a numbered list.

function listOfNames(arr) {
    arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
// 1.Bob 2.Christina 3.Ema 4.John 