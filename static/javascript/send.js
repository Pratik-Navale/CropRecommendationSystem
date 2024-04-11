

// document.getElementById('form').addEventListener('submit',(e)=>{
//     e.preventDefault();
//         const formData = new FormData(document.forms[0]);
//         console.log(formData)
//         const data=JSON.stringify(Object.fromEntries(formData))
//         console.log(data)
//         // const data={"N":"12","P":"56","K":"32","temperature":"32","humidity":"23","ph":"123","rainfall":"100"};
//         fetch("http://127.0.0.1:5500/predict", {
//             mode: "no-cors",
//             method: "POST",
//             // body: JSON.stringify(Object.fromEntries(formData)),
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response =>{ 
//             if (!response.ok) {
//                 console.log(response)
//                 throw new Error('Network response was not ok');
//               }
//               return response.json();
//         })
//         .then(data => {
//             // document.getElementById('crop-output').textContent = JSON.stringify(data);
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// })