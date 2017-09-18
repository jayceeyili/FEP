function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;
    }
    else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

LinkedList.prototype.log = function(){
  let result = [];
  let current = this.head;
  while(current){
    result.push(current.value)
    current = current.next;
  }
  return result;
}

function pushSorted(sll, val){
  // if (!sll.head) {
  //   sll.head = {value: null, next: null};
  // }
   var head = sll.head,
       current = head,
       previous;
   //value lower than head value
   if(!head || val < sll.head.value){
      sll.head = {value: val, next: head};
      return sll;
   }

   while(current){
      if(current.value > val){
         previous.next = {value: val, next: current};
         return sll;
      }
      previous = current;
      current = current.next;
   }
   //value higher than the last node value
   previous.next = {value:val, next: null};
   return sll;
}

var sll = new LinkedList();
// sll.push(5);
// sll.push(7);
// sll.push(10);
// sll.push(14);

pushSorted(sll, 14);
pushSorted(sll, 10);
pushSorted(sll, 9);
pushSorted(sll, 7);
pushSorted(sll, 1);


console.log(sll.log());
