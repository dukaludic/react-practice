const names = ["john", "bob", "mary", "joe"];

const user = { firstname: "John", lastname: "Doe" };

for (key in user) console.log(user[key]);

for (item of names) {
  console.log(item);
}
