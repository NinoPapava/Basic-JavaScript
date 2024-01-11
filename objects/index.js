// object
const user = {
  firstName: 'Nino',
  lastName: 'Papava',
  age: 26,
  job: 'freelance'
};

// dot notation
console.log(user.lastName);

// bracket notation, used for information provided dynamically
const userAskedFor = 'firstName';
console.log(user[userAskedFor]);  // Nino

// Add/change information in the object
user.age = 25;
user.car = 'Mercedes G-class';

console.log(user.age);
console.log(user.car);

/////////////////////////////////
console.log(`------------------------------------------ `);

// A simple example of an object
const siteSettings = {
  welcomeMessage: 'Hello, I wish you a peaceful day!',
  defaultTheme: 'dark',
  isOnline: true,
  logoURL: 'https://google.com/logo.png'
};

console.log(siteSettings);

// Add/change information in the object
siteSettings.defaultLanguage = 'English';
siteSettings.defaultTheme = 'Light';

console.log(siteSettings);


//////////////////////////////////
console.log(`------------------------------------------ `);


// nested arrays and objects
const author = ['Nino', 'Papava', 26, 'freelance', ['Mercedes G-class', 'Jeep Wrangler'], true];

console.log(author[3]); // freelance
console.log(author[4]); // ['Mercedes G-class', 'Jeep Wrangler']

// fetch from internal array
console.log(author[4][0]); // Mercedes G-class


/////////////////////////////////
console.log(`------------------------------------------ `);

// array in the object
const myUser = {
  firstName: 'Nino',
  lastName: 'Papava',
  age: 26,
  job: 'freelance',
  dreamCars: ['Mercedes G-class', 'Jeep Wrangler']
};

console.log(myUser.age); // 26
console.log(myUser.dreamCars); // ['Mercedes G-class', 'Jeep Wrangler']
console.log(myUser.dreamCars[1]); // Jeep Wrangler


/////////////////////////////////
console.log(`------------------------------------------ `);

// object in the array
const pageAdmins = [
  {
    firstName: 'Nino',
    lastName: 'Papava'
  },
  {
    firstName: 'Gvantsa',
    lastName: 'Papava'
  }
];

console.log(pageAdmins.length); // 2
console.log(pageAdmins[0]); // { firstName: 'Nino', lastName: 'Papava' }

const admin = pageAdmins[0];
console.log(`${admin.firstName} ${admin.lastName}`); // Nino Papava


/////////////////////////////////
console.log(`------------------------------------------ `);

// object in object
const pageUser = {
  firstName: 'Nino',
  lastName: 'Papava',
  age: 26,
  job: 'freelance',
  contacts: {
    phone: '5900000000',
    skype: 'skype',
    facebook: 'facebook',
    tiktok: '@tiktok'
  }
};

console.log(pageUser.firstName); // Nino
console.log(pageUser.contacts.tiktok); // @tiktok


//////////////////////////////////
console.log(`------------------------------------------ `);

// in the object in the array an object
const infoUsers = {
  firstName: 'Nino',
  lastName: 'Papava',
  age: 26,
  job: 'freelance',
  friends: [
    {
      firstName: 'Gvantsa',
      lastName: 'Papava'
    },
    {
      firstName: 'Nutsa',
      lastName: 'Paghava'
    }
  ]
};

console.log(infoUsers.firstName); // Nino
console.log(infoUsers.friends[0].firstName); // Gvantsa

// Let's print the names and surnames of friends
for (let i = 0; i < infoUsers.friends.length; i++) {
  const infos = infoUsers.friends[i];
  console.log(`${infos.firstName} ${infos.lastName}`);
}