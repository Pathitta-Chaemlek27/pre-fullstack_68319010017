/// array อาเรย์ และ ออบเจต

// Array
const students = ["Earth", "Tho", "Silapakorn", "Ood", "Matus"];

console.log(`ก. ทั้งหมด ${students}`);
console.log(`ข. คนแรก ${students[0]}`);
students.push("Mang");
console.log(`ค. หลังเพิ่มข้อมูลใหม่ให้ทำการแสดงผลลัพธ์ที่อัพเดต ${students} จำนวนรายชื่อ ${students.length}คน`);

//object
const student = {
    id: 101,
    name:"Ice",
    age: 18,
    major: "Information Technology",
};
console.log(`Name ${students.name}`);
console.log(`Major ${students.major}`);

// array & Object
const studentlist =[
    {id: 101, name: "Ice", age:20, major: "IT"},
    {id: 102, name: "Ball", age:19, major: "IT Roblox"},
    {id: 103, name: "Korn", age:40, major: "IT PubG"},
];

// map : แปลงทุกตัว ให้ได้  array ใหม่ในการแสดงผล
const names = studentlist.map((s) => `รหัส ${s.id} ชื่อ ${s.name} อายุ ${s.age} สาขา ${s.major}`);
console.log(`ข้อมูลที่ใช้การ map : ${names}`);
//

