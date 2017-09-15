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
    this.prev = {
      S: null,
      A: null,
      R: null,
      SA: null
    };
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
    this.tail = {
      S: null,
      A: null,
      R: null,
      SA: null
    }
  }

  isEmpty() {
    return !this.head.S && !this.tail.S;
  }

  add(name, specialty, area, review) {
    let doctor = new Doctor(name, specialty, area, review);

  }
}

let list = new DoctorList();
console.log(list.isEmpty());
