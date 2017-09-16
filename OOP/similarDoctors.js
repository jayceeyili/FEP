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
    // this.prev = {
    //   S: null,
    //   A: null,
    //   R: null,
    //   SA: null
    // };
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
    // this.tail = {
    //   S: null,
    //   A: null,
    //   R: null,
    //   SA: null
    // }
  }

  isEmpty() {
    // return !this.head.S && !this.tail.S;
    return !this.head.S;
  }

  add(name, specialty, area, review) {
    let node = new Doctor(name, specialty, area, review);
    if (this.isEmpty()) {
      this.head.S = this.head.A = this.head.R = this.head.SA = node;
      this.tail.S = this.tail.A = this.tail.R = this.tail.SA = node;
    } else {
      let foundS = false;
      let foundA = false;
      let foundR = false;
      let foundSA = false;

      let curr
    }
  }
}

let list = new DoctorList();
console.log(list.isEmpty());
