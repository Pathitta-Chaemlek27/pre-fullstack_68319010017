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

// Filler :  คัดกรองเฉพาะตัวที่เลือกและตรงเงื่อนไข
const isStudents = studentlist.filter((s) => s.major === "IT");
console.log(`กรองข้อมูล ${isStudents.length}`);

//  Find : หาตัวแรก (ตัวอักษร) ที่ตรงเงื่อนไข
const Found = studentlist.find((s) => s.id === 103);
console.log("ผลการค้นหา" , Found);
console.log(`ผลการค้นหา ${Found.name}`);

//ค้นหาจากชื่อ ไม่สนพิมพ์เล็กพิมพ์ใหญ่
const keyword = "Ba";
const searchResult = studentlist.filter((s) => s.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
console.log(`ผลการค้นหา : ${keyword}` , searchResult.map((s) => s.name));

/// ที่นี้ นศ ปรับให้ลองค้นชื่อมา และให้แสดงข้อมูลทั้งหมดที่ตรงกับการพิมพชื่อสาขาแค่บางอักขระ (Keword : i)
const keywordmajor = "i";
const searchResultmajor = studentlist.filter((s) => s.major.toLocaleLowerCase().includes(keywordmajor.toLocaleLowerCase()));
console.log(`ผลการค้นหา : ${keywordmajor}` , searchResultmajor.map((s) => s.major));