const formBtn = document.getElementById("create-employee");

const email = document.getElementById("floating_email");
const firstName = document.getElementById("floating_first_name");
const lastName = document.getElementById("floating_last_name");
const department = document.getElementById("department");

const fieldsToValidate = [email, firstName, lastName, department];

function checkInput(input) {
  let isvalid = false;
  var inputValue = input.value;
  if (inputValue.trim() === "") {
    alert(input.name + " is empty!");
    isvalid = false;
  } else {
    isvalid = true;
  }
  return isvalid;
}

fieldsToValidate.forEach((field) => {
  field.addEventListener("blur", () => {
    let valid = checkInput(field);
    validations.push(valid);
  });
});

function createEmployee() {
  try {
    let valid1 = checkInput(email);
    let valid2 = checkInput(firstName);
    let valid3 = checkInput(lastName);

    if (valid1 && valid2 && valid3) {
      const data = {
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        department: department.value,
      };

      fetch("http://localhost:3000/api/employees/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          getEmployees();
          alert(
            "POST request successful! Check updated table Response: " +
              JSON.stringify(data)
          );
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error occurred during POST request.");
        });
    }
  } catch (error) {
    console.log(error);
  }
}

function clearTable() {
  var table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";
}

function getEmployees() {
  try {
    fetch("http://localhost:3000/api/employees/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        clearTable();
        data.forEach((employee) => {
          const html = `
                <tr class="odd:bg-white even:bg-gray-50 border-b">
                    <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                    ${employee.firstName} ${employee.lastName}
                    </th>
                    <td class="px-6 py-4">${employee.email}</td>
                    <td class="px-6 py-4">${employee.department.name}</td>
                </tr>`;

          var tableBody = document
            .getElementById("myTable")
            .getElementsByTagName("tbody")[0];

          tableBody.insertAdjacentHTML("beforeend", html);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error occurred during GET request.");
      });
  } catch (error) {
    console.log(error);
  }
}

getEmployees();

formBtn.addEventListener("click", createEmployee);
