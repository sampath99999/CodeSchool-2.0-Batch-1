$(document).ready(function () {
  const role = parseInt(localStorage.getItem("role"));
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.replace("./login.html");
  }
  if (role === 1) {
    $("#admin-dashboard-id").removeClass("d-none");
    $("#user-dashboard-id").addClass("d-none");
  } else {
    $("#admin-dashboard-id").addClass("d-none");
    $("#user-dashboard-id").removeClass("d-none");
  }

  $("#dasboard-logout-id").click(function () {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    window.location.replace("./login.html");
  });

  //
  $("#task-name-id").on("keypress", function (event) {
    const keyValue = event.key;
    if (!/^[a-zA-z]*$/.test(keyValue) && keyValue !== "enter") {
      event.preventDefault();
    }
  });

  function taskNameValidation(event) {
    const taskName = $("#task-name-id").val();
    if (taskName.length < 3 || taskName.length > 20) {
      $("#task-form-error").text("*Minimum length between 2 and 21 characters");
      return false;
    } else if (taskName[0] !== taskName[0].toUpperCase()) {
      $("#task-form-error").text("*First letter should be capital");
      return false;
    } else {
      $("#task-form-error").text("");
      return taskName;
    }
  }

  $("#task-name-id").on("input", taskNameValidation);

  function userSelectValidation() {
    const userId = $("#user-select-task-id").val();
    if (userId) {
      $("#task-form-error").text("");
      return userId;
    } else {
      $("#task-form-error").text("*Please select user");
    }
  }

  $("#user-select-task-id").on("change", userSelectValidation);

  //
  function getUserAndTaskDetails() {
    $.ajax({
      method: "GET",
      url: "./../api/dashboard.php",
      data: {
        token,
        role,
      },
      success: function (data) {
        const response = JSON.parse(data);
        if (!response.status) {
          $("#login-form-error").text(response.message);
        } else {
          $("#dashboard-user-id span").text(response.data);
          if (role === 2) {
            $("#assigned-tasks").text(response[assigned]);
            $("#started-tasks").text(response[started]);
            $("#completed-tasks").text(response[completed]);
          }
        }
      },
      error: function (error) {
        $("#login-form-error").text(error.responseText);
      },
    });
  }

  getUserAndTaskDetails();

  function getUserAndTaskDetails() {
    $.ajax({
      method: "GET",
      url: "./../api/dashboard.php",
      data: {
        token,
        role,
      },
      success: function (data) {
        const response = JSON.parse(data);
        if (!response.status) {
          $("#login-form-error").text(response.message);
        } else {
          $("#dashboard-user-id span").text(response.data);
          if (role === 1) {
            console.log(response);
            $("#assigned-tasks").text(response.tasks[0].no_of_tasks);
            $("#started-tasks").text(response.tasks[1].no_of_tasks);
            $("#completed-tasks").text(response.tasks[2].no_of_tasks);
          }
        }
      },
      error: function (error) {
        $("#login-form-error").text(error.responseText);
      },
    });
  }

  //
  //

  function getUsers() {
    $.ajax({
      method: "GET",
      url: "./../api/getUsers.php",
      data: {
        role,
      },
      success: function (data) {
        const response = JSON.parse(data);
        if (!response.status) {
          $("#login-form-error").text(response.message);
        } else {
          const { data } = response;
          let element = `<option value="">Select</option>`;
          for (let i = 0; i < data.length; i++) {
            const { id, name } = data[i];
            element += `<option value=${id}>${name}</option>`;
          }
          $("#user-select-task-id").html(element);
        }
      },
      error: function (error) {
        $("#login-form-error").text(error.responseText);
      },
    });
  }
  if (role === 1) {
    getUsers();
  }
  //
  function addTask(taskName, userNameId) {
    $.ajax({
      method: "POST",
      url: "./../api/addTask.php",
      data: {
        taskName,
        userNameId,
      },
      success: function (data) {
        const response = JSON.parse(data);
        if (!response.status) {
          $("#login-form-error").text(response.message);
        } else {
          const { data } = response;
          console.log(data);
          // let element = `<option value="">Select</option>`;
          // for (let i = 0; i < data.length; i++) {
          //   const { id, name } = data[i];
          //   element += `<option value=${id}>${name}</option>`;
          // }
          // $("#user-select-task-id").html(element);
        }
      },
      error: function (error) {
        $("#login-form-error").text(error.responseText);
      },
    });
  }
  //

  $("#task-form-id").submit(function (event) {
    event.preventDefault();
    console.log("entered");
    const taskName = taskNameValidation();
    const userNameId = userSelectValidation();
    if (taskName && userNameId) {
      $("#task-form-error").text("");
      addTask(taskName, userNameId);
    } else {
      $("#task-form-error").text("*Please fill the required details");
    }
  });

  function getAdminTasksData(taskData) {
    const $tbody = $("#admin-data-table tbody");
    $tbody.empty();
    taskData.forEach(function (each) {
      const $row = $("<tr>");
      $row.append(`<td>${each.taskid}</td>`);
      $row.append(`<td>${each.name}</td>`);
      $row.append(`<td>${each.email}</td>`);
      $row.append(`<td>${each.phone}</td>`);
      $row.append(`<td>${each.task}</td>`);
      $row.append(`<td>${each.description}</td>`);
      if (each.status_id == 1) {
        $row.append(`<td>${null}</td>`);
      } else if (each.status_id == 2) {
        $row.append(`<td><button>Complete</button></td>`);
      }
      $tbody.append($row);
    });
  }

  function getUserTasksData(taskData) {
    const $tbody = $("#data-table tbody");
    $tbody.empty();
    taskData.forEach(function (each) {
      const $row = $("<tr>");
      $row.append(`<td>${each.id}</td>`);
      $row.append(`<td>${each.name}</td>`);
      $row.append(`<td>${each.email}</td>`);
      $row.append(`<td>${each.phone}</td>`);
      $row.append(`<td>${each.task}</td>`);
      $row.append(`<td>${each.description}</td>`);
      $row.append(`<td>${null}</td>`);
      $tbody.append($row);
    });
  }

  function getTasks() {
    $.ajax({
      method: "GET",
      url: "./../api/getTasks.php",
      data: {
        role,
        token,
      },
      success: function (data) {
        const response = JSON.parse(data);
        if (!response.status) {
          $("#login-form-error").text(response.message);
        } else {
          const { data } = response;
          console.log(data);
          role === 1 ? getAdminTasksData(data) : getUserTasksData(data);
        }
      },
      error: function (error) {
        $("#login-form-error").text(error.responseText);
      },
    });
  }

  getTasks();
});
