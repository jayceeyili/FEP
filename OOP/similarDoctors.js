/***************************************************************************************************
  A site contains a listing of doctors. Users can browse for doctors given a specific specialty,
  area, review score etc. Write a function which when given a doctor, provides a list of similiar
  doctors, in a prioritized order. You define what similar means and the result ordering, but clearly
  document any assumptions in your code. You can assume the entire directory of doctors fits into
  memory, and write in JavaScript. Include unit tests.

  Aim to spend a maximum of 45 minutes on this coding challenge. If applicable, note down any remaing
  thoughts or things you would want to improve on with more time.
***************************************************************************************************/

// Probably, a linked list is a good choice
// Define the Doctor class first
class Doctor {
  constructor(name, specialty, area, rate) {
    this.name = name;
    this.specialty = specialty;
    this.area = area;
    this.rate = rate;
    this.next = null;
  }
}

// Define the DoctorList class
class DoctorList {
  constructor() {
    this.head = null;
  }

  add(name, specialty, area, rate) {
    let node = new Doctor(name, specialty, area, rate);

    let head = this.head;
    let current = head;
    let prev;

    if (!head || rate >= this.head.rate) {
      node.next = head;
      this.head = node;
      return this;
    }

    while (current) {
      if (current.rate < rate) {
        node.next = current;
        prev.next = node;
        return this;
      }
      prev = current;
      current = current.next;
    }

    prev.next = node;
    return this;
  }

  sorted(arg) {
    let result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.rate);
      curr = curr.next;
    }

    return result;
  }
}

let list = new DoctorList();
list.add('ni', 'hand', 'ca', 4);
list.add('wo', 'eye', 'ca', 5)
list.add('lala', 'foot', 'ca', 7)
list.add('shei', 'hand', 'ca', 2);
list.add('ta', 'foot', 'ca', 3)
console.log(list.sorted('S'));
