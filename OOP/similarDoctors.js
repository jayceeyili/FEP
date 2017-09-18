/***************************************************************************************************
  A site contains a listing of doctors. Users can browse for doctors given a specific specialty,
  area, review score etc. Write a function which when given a doctor, provides a list of similiar
  doctors, in a prioritized order. You define what similar means and the result ordering, but clearly
  document any assumptions in your code. You can assume the entire directory of doctors fits into
  memory, and write in JavaScript. Include unit tests.

  Aim to spend a maximum of 45 minutes on this coding challenge. If applicable, note down any remaing
  thoughts or things you would want to improve on with more time.
***************************************************************************************************/

// Probably, a multi-handle doubly linked list is a good choice
// Define the Doctor class first
class Doctor {
  constructor(name, specialty, area, rate) {
    this.name = name;
    this.specialty = specialty;
    this.area = area;
    this.rate = rate;
    this.next = {
      S: null,
      A: null,
      R: null,
      SA: null
    }
  }
}

// Define the DoctorList class
class DoctorList {
  constructor() {
    this.head = {
      S: null,
      A: null,
      R: null,
      SA: null
    };
  }

  isEmpty() {
    return !this.head.R;
  }

  add(name, specialty, area, rate) {
    let node = new Doctor(name, specialty, area, rate);

    if (this.isEmpty()) {
      this.head.S = node;
      this.head.A = node;
      this.head.R = node;
      this.head.SA = node;
    } else {

      if (this.head.S.specialty === node.specialty && node.rate >= this.head.S.rate) {
        node.next.S = this.head.S;
        this.head.S = node;
      }

      let currS = this.head.S;
      let currA = this.head.A;
      let currR = this.head.R;
      let currSA = this.head.SA;


      while (currR) {
        // if (currS.specialty === node.specialty && currS.rate > node.rate) {
        //   node.next.S = currS.next.S;
        //   currS.next.S = node;
        // }
        if (currS.specialty === node.specialty) {
          if (currS.rate > node.rate) {
            // if (currS.next.S) {
            // if (!currS.next.S || currS.next.S.rate <= node.rate) {
              // node.next.S = currS.next.S;
              // currS.next.S = node;
              console.log('this is current S: ' + currS.name);
            // }
          }
        }

        // if (currR.rate > node.rate && (!currR.next.rate || currR.next.rate <= node.rate)) {
        //   node.next.R = currR.next.R;
        //   currR.next.R = node;
        // }

        currS = currS.next.S;
        currA = currA.next.A;
        currR = currR.next.R;
        currSA = currSA.next.SA;
      }
    }
  }

  sorted(arg) {
    let result = [];
    let curr = this.head[arg];
    while (curr) {
      result.push(curr);
      curr = curr.next[arg];
    }

    return result;
  }
}

let list = new DoctorList();
list.add('ni', 'handsome', 'ca', 4);
list.add('wo', 'handsome', 'ca', 5)
list.add('ta', 'handsome', 'ca', 3)
console.log(list.sorted('S'));
