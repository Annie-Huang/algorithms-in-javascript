// tyler -> henry, john, aimee,
// henry -> peggy, deli,
// john -> keli
// aimee -> ...

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
        let person = searchQueue.shift();
        if(!searched.find(n => n.id === person.id)) {
            if(person.dog) return `${person.id} has a dog`;
            else {
                searchQueue = searchQueue.concat(graph[person.id]);
                searched.push(person);
            }
        } // If the person.id is already in the searched list, skip it, do nothing...
    }
    return "There are no friends";
}

console.log(search('tyler'));
