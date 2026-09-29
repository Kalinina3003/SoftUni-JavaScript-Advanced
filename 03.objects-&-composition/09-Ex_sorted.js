// Task: Create a sorted collection object with add, remove, get, and size functionality.
// Description: Keep numbers sorted in ascending order, allow adding, removing,
// and retrieving elements by index, and provide the collection size as a property.

function createSortedList() {
    let data = [];

    let list = {
        add(element) {
            data.push(element);
            data.sort((a, b) => a - b);
        },

        remove(index) {
            if (index >= 0 && index < data.length) {
                data.splice(index, 1);
            }
        },

        get(index) {
            if (index >= 0 && index < data.length) {
                return data[index];
            }
        },

        get size() {
            return data.length;
        }
    };

    return list;
}
let list = createSortedList();

list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
// 6 7; (\n)