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
  constructor(name, specialty, area, review) {
    this.name = name;
    this.specialty = specialty;
    this.area = area;
    this.review = review;
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
    return !this.head.S;
  }

  add(name, specialty, area, review) {
    let node = new Doctor(name, specialty, area, review);
    if (this.isEmpty()) {
      this.head.S = this.head.A = this.head.R = this.head.SA = node;
    } else {
      // let foundS = false;
      // let foundA = false;
      // let foundR = false;
      // let foundSA = false;
      //
      let currS = this.head.S;
      let currA = this.head.A;
      let currR = this.head.R;
      let currSA = this.head.SA;

      while (currR.R) {
        if (currS.S === node.S && (currR.R < node.R && (!currR.next.R || currR.next.R >= node.R))) {
          node.next.S = currS.next.S;
          currS.next.S = node;
        }

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
list.add('li', 'handsome', 'ca', 5);
list.add('han', 'handsome', 'ca', 6)
console.log(list.sorted('R'));
