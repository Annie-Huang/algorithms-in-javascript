// Is there a path between point A and point B? As well as, what is the shortest path from point A to point B.

// tyler -> henry, john, aimee,     << tyler (I), have 3 friends
// henry -> peggy, deli,
// john -> keli
// aimee -> ...                     << aimee has no friends

// peggy -> ...
// keli -> claire

const graph = {};
graph.tyler = [{id: 'henry', dog: false}, {id: 'john', dog: false}, {id: 'aimee', dog: false}];
graph.henry = [{id: 'peggy', dog: false}, {id: 'keli', dog: false}];
graph.john = [{id: 'keli', dog: false}];
graph.aimee = [];
graph.peggy = [];
graph.keli = [{id: 'claire', dog: true}];
graph.claire = [];

// We will use queues, which is first in, first out.
// where as recursion, which is first in, last out.

function search(name) {
    let searchQueue = [].concat(graph[name]);
    let searched = [];
    while(searchQueue.length) {
        // The shift() method removes the first element from an array and returns that removed element.
        let person = searchQueue.shift();

        if(!searched.find(n => n.id === person.id)) {
            if(person.dog) return `${person.id} has a dog`;
            else {
                searchQueue = searchQueue.concat(graph[person.id]); // Add this person's list into the searchQueue list.
                searched.push(person);
            }
        } // If the person.id is already in the searched list, skip it, do nothing...
    }
    return "There are no friends";
}

console.log(search('tyler'));
