// //1.Daxil olunan ədədin sadə yoxsa mürəkkəb olduğu tapın.
// let eded = +prompt("eded daxil edin: ");

// if (eded <= 1) {
//   console.log("nə mürekkəb nə sadədir");
// } else {
//   let murekkeb = false;
//   for (let i = 2; i < eded; i++) {
//     if (eded % i === 0) {
//       murekkeb = true;
//       break;
//     }
//   }
//   if (murekkeb) {
//     console.log("Mürəkkəb");
//   } else {
//     console.log("Sadə");
//   }
// }

// //2.Daxil olunan ədədin mükəmməl olub olmadığını tapın.

// let reqem = +prompt("ədəd daxil edin :");
// let sub = 0;
// for (i = 1; i < reqem; i++) {
//   if (reqem % i == 0) sub += i;
// }
// if (reqem === sub) {
//   console.log(`${reqem} mükəmməldir`);
// } else {
//   console.log(`${reqem} mükəmməl deyil`);
// }

// //3.Daxil olunan 2 ədəd arasındaki mükəmməl ədədləri göstərin.
// let baslangic = +prompt("eded daxil edin: ");
// let son = +prompt("eded daxil edin: ");

// console.log("Mükəmməl ədədlər: ");

// for (let eded = baslangic; eded < son; eded++) {
//   let sum = 0;
//   for (i = 1; i < eded; i++) {
//     if (eded % i == 0) sum += i;
//   }
//   if (eded === sum) {
//     console.log(`${eded6} mükəmməl ədəddir`);
//   } else {
//     console.log(`${eded6} mükəmməl ədəd deyil`);
//   }
// }

// //4.Daxil olunan 2 ədəd arasındaki sadə ədədləri göstərin.
// let baslangic1 = +prompt("eded daxil edin: ");
// let son1 = +prompt("eded daxil edin: ");

// console.log("Sadə ədədlər: ");

// for (let i = baslangic1; i < son1; i++) {
//   let saded = true;
//   if (i < 2) {
//     saded = false;
//   } else {
//     for (let j = 2; j <= eded; j++) {
//       if (i % j === 0) {
//         saded = false;
//         break;
//       }
//     }
//   }
//   if (saded) {
//     console.log(i);
//   }
// }

// //5.Daxil olunan 2 ədəd arasındaki sonu 7 ilə ədədləri göstərin.

// let baslangic3 = +prompt("eded daxil edin: ");
// let son3 = +prompt("eded daxil edin: ");

// console.log("Sonu 7 ilə bitən ədədlər: ");

// for (let i = baslangic3; i < son3; i++) {
//   if (i % 10 === 7) {
//     console.log(i);
//   }
// }
