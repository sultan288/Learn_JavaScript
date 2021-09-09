// Callback Fn control
// =====================================================

// const takeOrder = (customer,callback) => {
//     console.log(`take order for ${customer}`);
//     callback(customer);
// };

// const processOrder = (customer, callback) => {
//     console.log(`processing order for ${customer}`);

//     setTimeout(() => {
//         console.log(`cooking completed`);
//         console.log(`order processed for ${customer}`);
//         callback(customer);
//     }, 3000);
// };

// const completeOrder = (customer) => {
//     console.log(`completed order for ${customer}`);
// };

// takeOrder("customer 1", (customer) => {
//     processOrder(customer, (customer) => {
//         completeOrder(customer);
//     });
// });

// console.log(`Hello`);


// Promise 
// =================================================

// const hasMeeting = false;

// const meeting = new Promise((resolve, reject) => {
//     if(!hasMeeting) {
//         const meetingDetails = {
//             name: "Technical Meeting",
//             location: "Google Meet",
//             time: "10.00pm",
//         };
//         resolve(meetingDetails);
//     } else {
//         reject(new Error("meeting already scheduled!"));
//     }
// });

// const addToCalender = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//         resolve(calender);
//     });
// }

// OR the below solution

// const addToCalender = (meetingDetails) => {  
//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     return Promise.resolve(calender);
// }


// meeting
//     .then(addToCalender)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

//     console.log(`Hello`);

// Example 2
// ===============================================

// const promise1 = Promise.resolve(`Promise 1 resolve`);

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`Promise 2 resolved`);
//     }, 2000);
// });

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

// To get the two promise result at a time

// Promise.all([promise1, promise2]).then((res) => {
//     console.log(res);
// });

// To get the above two result with Promise.race

// Promise.race([promise1, promise2]).then((res) => {
//     console.log(res);
// });

// async-await block
//=======================================================

// async function friendlyFunction(){
//     return `hello`;
//     // or return Promise.resolve(`hello`);
// }
// console.log(friendlyFunction());

// Example of async-await
// ===================================================
// await will wait untill the async is finished

// const hasMeeting = false;

// const meeting = new Promise((resolve, reject) => {
//     if(!hasMeeting) {
//         const meetingDetails = {
//             name: "Technical Meeting",
//             location: "Google Meet",
//             time: "10.00pm",
//         };
//         resolve(meetingDetails);
//     } else {
//         reject(new Error("meeting already scheduled!"));
//     }
// });

// const addToCalender = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//         resolve(calender);
//     });
// }

// OR the below solution

// const addToCalender = (meetingDetails) => {  
//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     return Promise.resolve(calender);
// }

// async function myMeeting() {
//     const meetingDetails = await meeting;
//     const calender = await addToCalender(meetingDetails);
//     console.log(calender);
// }

// myMeeting();
// console.log(`Hello`);

// Error handling in async-await
// =====================================================

const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10.00pm",
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("meeting already scheduled!"));
    }
});

const addToCalender = (meetingDetails) => {  
    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calender);
}

async function myMeeting() {
    try {
        const meetingDetails = await meeting;
    const calender = await addToCalender(meetingDetails);
    console.log(calender);
} catch {
    console.log(`Something wrong happened`);
   }
}

myMeeting();
console.log(`Hello`);