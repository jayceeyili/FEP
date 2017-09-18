
describe("Find similar dorctors", function() {

  beforeEach(function() {
    doctor1 = new Doctor('Han', 'Dermatology', 'Milpitas', 4);
    doctor2 = new Doctor('Lisa', 'Serologists‎', 'SunnyVale', 2);
    doctor3 = new Doctor('Phil', 'Internists‎', 'Milpitas', 5);
    doctor4 = new Doctor('Dell', 'Dermatology', 'Gilroy', 4);
    doctor5 = new Doctor('Carla', 'Internists‎', 'Gilroy', 3);
    doctor6 = new Doctor('Cris', 'Internists‎', 'Milpitas', 2);
    doctor7 = new Doctor('Jaycee', 'Dermatology', 'SunnyVale', 5);
    doctor8 = new Doctor('Mina', 'Serologists‎', 'Milpitas', 1);
    doctor9 = new Doctor('Dan', 'Dermatology', 'SunnyVale', 2);
    doctor10 = new Doctor('Smith', 'Serologists‎', 'Gilroy', 3);
  });

  it("a doctor should have a name, a specialty, an area and a review rate", function() {
    expect(doctor1.name).toEqual('Han');
    expect(doctor2.specialty).toEqual('Serologists‎');
    expect(doctor9.area).toEqual('SunnyVale');
    expect(doctor3.rate).toEqual(5);
  });

  describe("when Doctor List has been created", function() {
    beforeEach(function() {
      list = new DoctorList();
      list.add(doctor1);
      list.add(doctor2);
      list.add(doctor3);
      list.add(doctor4);
      list.add(doctor5);
      list.add(doctor6);
      list.add(doctor7);
      list.add(doctor8);
      list.add(doctor9);
      list.add(doctor10);
    });

    it("should have a list Head", function() {
      expect(list.head.name).toEqual('Jaycee');
    });

    it("should contain all doctors that have been added into the list", function() {
      expect(list.sorted(ele => ele).length === 10).toBeTruthy();
    });
  });

  it("should be sorted base on the review rates", function() {
    const arr = list.sorted(ele => ele).map(ele => ele.rate).slice();

    expect(arr).toEqual(arr.sort());
  });

  it("should return a sorted list by matching the specialty with given Doctor", function() {
    const arrS = list.findSimilar(doctor6, 'S').map(ele => ele.name);

    expect(arrS).toEqual(['Phil', 'Carla', 'Cris']);
  });

  it("should return a sorted list by matching the area with given Doctor", function() {
    const arrA = list.findSimilar(doctor3, 'A').map(ele => ele.name);

    expect(arrA).toEqual(['Phil', 'Han', 'Cris', 'Mina']);
  });

  it("should return a sorted list by matching the specialty and area with given Doctor", function() {
    const arrSA = list.findSimilar(doctor1, 'S&A').map(ele => ele.name);

    expect(arrSA).toEqual(['Han']);
  });

  it("should return a sorted list wiout passing any argument in", function() {
    const arrAll = list.findSimilar(doctor9).map(ele => ele.name);
    
    expect(arrAll).toEqual(["Jaycee", "Phil", "Han", "Dell", "Carla", "Smith", "Lisa", "Cris", "Dan", "Mina"]);
  });
});
