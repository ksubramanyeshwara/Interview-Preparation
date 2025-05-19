const obj = {
  fanme: "K",
  lname: "Subramanya",
  fullName: function () {
    return th`${this.fanme} ${this.lname}`;
  },
};

const obj2 = Object.create(obj);
console.log(obj);
console.log(obj2);
