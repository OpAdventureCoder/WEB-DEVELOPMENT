// this : This Keyword are use for get their object property
const student = {
  maths: 98,
  hindi: 100,
  physics: 100,
  getvalue() {
    let avg = (this.hindi + this.maths + this.physics) / 3;
    console.log(avg);
  },
};

console.log(student.getvalue());
