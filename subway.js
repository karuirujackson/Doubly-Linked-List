/////////////////////////////////////////////////////////
//Model a (fictional) subway line that will travel from Central Park to the Brooklyn Bridge.
const DoublyLinkedList = require('./DoublyLinkedList'); 

//////////////////////////////////////////////////////
//Create a new class instance of DoublyLinkedList
const subway = new DoublyLinkedList();

//The subway starts at Central Park and winds its way downtown
//Add to Head.
subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
subway.printList();

//The subway continues from Times Square down to the Brooklyn Bridge. 
//Add to Tail
subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');
subway.printList();

//There’s construction happening on the subway line: the Central Park and Brooklyn Bridge stops will temporarily be closed.
// Remove them from your list without iterating through the entire list.
subway.removeHead();
subway.removeTail();
subway.printList();

//It turns out that the Times Square station is under construction as well. Remove it from the list.
subway.removeByData('TimesSquare');
subway.printList();