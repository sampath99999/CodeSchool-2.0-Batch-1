// function validateForm() {
//     // e.preventDefault();
//     var firstname = document.getElementById("fname").value;
//     var lastname = document.getElementById("lname").value;
//     // Reset error messages
//     console.log(firstname);
//     console.log("abd");

    
//     console.log(lastname);
//     document.getElementById("fname-error").innerHTML = "";
//     document.getElementById("lname-error").innerHTML = "";

//     // Check if password and confirm password match
//     if (firstname.length<5) {
//         document.getElementById("fname-error").innerHTML = "Passwords do not match. Please re-enter.";
        
//         return false; // Prevent form submission
//       }
//       return true; // Allow form submission

// }





function validateForm() {
  const firstNameInput = document.getElementById('fname');
  const lastNameInput = document.getElementById('lname');
  const emailInput = document.getElementById('email')


  const fname = firstNameInput.value.trim();
  const lname = lastNameInput.value.trim();
  const email = emailInput.value.trim();


  document.getElementById("fname-error").innerHTML = "";

  //   document.getElementById("lname-error").innerHTML = " ";

  // Regular expression pattern to match only letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z'-\s]+$/;
  const titleCaseRegex = /^[A-Z][a-z]*$/;


  if (!nameRegex.test(fname)) {
    alert("Please enter a valid first name.");
    document.getElementById("fname-error").innerHTML = "*Alphabet only"
    firstNameInput.focus();
    return false;
    
  }

  if (!titleCaseRegex.test(fname)) {
   alert("Please enter a valid first name.");
    document.getElementById("fname-error").innerHTML = "*Title case only"
    firstNameInput.focus();
    return false;
    
  }


  if (fname.length<2 || fname.length>50 ) {
    // alert("Please enter a valid first name.");
    document.getElementById("fname-error").innerHTML = "*min 2 and and max 50 characters"
    firstNameInput.focus();
    return false;
    
  }

  if (!nameRegex.test(lname)) {
   // alert("Please enter a valid last name.");
    document.getElementById("lname-error").innerHTML = "*Alphabet only"
    lastNameInput.focus();
    return false;
    
  }

  if (!titleCaseRegex.test(lname)) {
    // alert("Please enter a valid first name.");
    document.getElementById("lname-error").innerHTML = "*Title case only"
    lastNameInput.focus();
    return false;
    
  }
  
  
  if (lname.length<2 || lname.length>50) {
    // alert("Please enter a valid last name.");
    document.getElementById("lname-error").innerHTML = "please enter the last name."
    lastNameInput.focus();
    return false;
  }
  
  if (email.length<15 || email.length>50 ) {
    // alert("Please enter a valid first name.");
    document.getElementById("emailerror").innerHTML = "*min 2 and and max 50 characters"
    emailInput.focus();
    return false;
    
  }


  return true;
}



console.log("abdullah");
console.log("abdullah");

function fetchCountryList() {
  const url = "https://restcountries.com/v3.1/all";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const countrySelect = document.getElementById("country");
      
      data.forEach(country => {
        const option = document.createElement("option");
        option.value = country.name.common;
        option.textContent = country.name.common;
        countrySelect.appendChild(option);
      });
    } else if (xhr.readyState === 4) {
      console.error("Error fetching country data.");
    }
  };

  xhr.send();
}

// Call the function to populate the select input when the page loads
window.onload = function() {
  fetchCountryList();
};



function fetchphonecode() {
  const url = "https://restcountries.com/v3.1/all";

  const xhr1 = new XMLHttpRequest();
  xhr1.open("GET", url, true);

  xhr1.onreadystatechange = function() {
    if (xhr1.readyState === 4 && xhr1.status === 200) {
      const data1 = JSON.parse(xhr1.responseText);
      const phonecodeselect = document.getElementById("phonecode");
      
      data1.forEach(phonecode => {
        const option1 = document.createElement("option");
        option1.value = phonecode.idd.root;
        option1.textContent = phonecode.idd.root;
        phonecodeselect.appendChild(option1);
      });
    } else if (xhr1.readyState === 4) {
      console.error("Error fetching country data.");
    }
  };

  xhr1.send();
}

// Call the function to populate the select input when the page loads
window.onload = function() {
  fetchphonecode();
};




// Example: Image carousel that changes images every 30 seconds
const images = [
  "https://png.pngtree.com/background/20220722/original/pngtree-planes-flying-over-buildings-picture-image_1714859.jpg",
  "https://media.istockphoto.com/id/1440711628/photo/copenhagen-denmark.webp?b=1&s=612x612&w=0&k=20&c=1evENE9IbiTW5tGs6gfqr0megCa3ix5Tih8B9Djj0Tk=",
  "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_640.jpg",
  "https://cdn.pixabay.com/photo/2017/06/30/19/52/apocalypse-2459465_640.jpg",
  "https://cdn.pixabay.com/photo/2017/07/02/16/33/church-2464899_640.jpg",
  "https://cdn.pixabay.com/photo/2018/11/22/23/57/london-3833039_640.jpg",
  "https://cdn.pixabay.com/photo/2018/02/04/21/13/monastery-3130879_640.jpg",
  "https://cdn.pixabay.com/photo/2015/07/10/15/13/building-839362_640.jpg",
  "https://cdn.pixabay.com/photo/2016/08/16/17/20/elevators-1598431_640.jpg"

  // Add more image URLs here
];
let currentIndex = 0;
const imagePlaceholder = document.getElementById("imagePlaceholder");

function changeImage() {
  imagePlaceholder.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeImage, 30000);



// calling API for phone code


// function fetchphonecode() {
//   const url1 = "https://restcountries.com/v3.1/all";

//   const xhr1 = new XMLHttpRequest();
//   xhr1.open("GET", url1, true);

//   xhr1.onreadystatechange = function() {
//     if (xhr1.readyState === 4 && xhr1.status === 200) {
//       const data1 = JSON.parse(xhr1.responseText);
//       const phonecode = document.getElementById("phonecode");
      
//       data1.forEach(phonecode => {
//         const option1 = document.createElement("option");
//         option1.value = phonecode.name.common;
//         option1.textContent = phonecode.name.common;
//         phonecode.appendChild(option1);
//       });
//     } else if (xhr1.readyState === 4) {
//       console.error("Error fetching country data.");
//     }
//   };

//   xhr1.send();
// }

// // Call the function to populate the select input when the page loads
// window.onload = function() {
//   fetchphonecode();
// };



