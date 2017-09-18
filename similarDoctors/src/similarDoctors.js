/***************************************************************************************************
  A site contains a listing of doctors. Users can browse for doctors given a specific specialty,
  area, review score etc. Write a function which when given a doctor, provides a list of similiar
  doctors, in a prioritized order. You define what similar means and the result ordering, but clearly
  document any assumptions in your code. You can assume the entire directory of doctors fits into
  memory, and write in JavaScript. Include unit tests.

  Aim to spend a maximum of 45 minutes on this coding challenge. If applicable, note down any remaing
  thoughts or things you would want to improve on with more time.
***************************************************************************************************/

// Define the Doctor class
class Doctor {
  constructor(name, specialty, area, rate) {
    this.name = name;
    this.specialty = specialty;
    this.area = area;
    this.rate = rate;
    this.next = null;
  }
}

// Define the DoctorList class, which is a Linek List
class DoctorList {
  constructor() {
    this.head = null;
  }

  add(doctor) {
    let head = this.head;
    let current = head;
    let prev;

    // if empty or the given doctor rate is higher than the head, unshift
    if (!head || doctor.rate >= this.head.rate) {
      doctor.next = head;
      this.head = doctor;
      return this;
    }

    while (current) {
      // insert into the LL, in order
      if (current.rate < doctor.rate) {
        doctor.next = current;
        prev.next = doctor;
        return this;
      }
      prev = current;
      current = current.next;
    }

    prev.next = doctor;
    return this;
  }

  // pass a callback in to get the list of similar doctors
  // all doctors have been sorted by review score(descending)
  sorted(cb) {
    let result = [];
    let curr = this.head;
    while (curr) {
      if (cb(curr)) {
        result.push(curr);
      }
      curr = curr.next;
    }

    return result;
  }

  findSimilar(doctor, option) {
    switch (option) {
      case 'S': // 'specialty' match only
        return this.sorted(ele => ele.specialty === doctor.specialty);
      case 'A': // 'area' match only
        return this.sorted(ele => ele.area === doctor.area);
      case 'S&A': // 'specialty & area' match
        return this.sorted(ele => ele.area === doctor.area && ele.specialty === doctor.specialty);
      default: // return all doctor in order(rate) as default
        return this.sorted(ele => ele);
    }
  }
}

let list = new DoctorList();
let ni = new Doctor('ni', 'hand', 'ca', 4);
let wo = new Doctor('wo', 'eye', 'ca', 5);
let ta = new Doctor('lala', 'foot', 'ca', 7);
let lala = new Doctor('shei', 'hand', 'ca', 2);
let shei = new Doctor('ta', 'foot', 'ca', 3);
list.add(ni);
list.add(wo)
list.add(ta)
list.add(lala);
list.add(shei)
console.log(list.findSimilar(ni));
