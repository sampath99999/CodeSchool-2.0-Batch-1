<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.1/font/bootstrap-icons.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <title>Employee Details</title>
</head>

<body>
  <div class="container">
    <div class="py-4">
      <a href="../create_emp.html" class="btn btn-secondary">
        <i class="bi bi-plus-circle-fill"></i> Add Employee
      </a>
    </div>

    <table class="table table-bordered table-striped align-middle">
      <thead>
        <tr>
          <th>#</th>
          <th>Employee_id</th>
          <th>Employee_details_id</th>
          <th>Name</th>
          <th>Cader</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Status</th>
          <th>ScaleType</th>
        </tr>
      </thead>
      <tbody>
        <?php
        # Include connection
        require_once "./dbconfig.php";
        
        try {
          $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=pixelvidehrms;user=postgres;password=postgres");
          $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

          # Prepare and execute select query
          $query = "SELECT E.employee_id AS id, E.employee_details_id AS EmployeeDetailsId, ED.name AS EmployeeName,E.cader AS Cader, D.department_name AS Department, E.employee_designation AS Designation, E.status AS Status, E.scale_type AS ScaleType
            FROM Employees E
            JOIN EmployeeDetails ED ON E.employee_details_id = ED.employee_details_id
            JOIN Departments D ON E.employee_department_id = D.department_id";
          $stmt = $pdo->query($query);

          if ($stmt->rowCount() > 0) {
            $count = 1;
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) { ?>
              <tr>
                <td><?= $count++; ?></td>
                <td><?= $row["id"]; ?></td>
                <td><?= $row["employee_details_id"]; ?></td>
                <td><?= $row["name"]; ?></td>
                <td><?= $row["cader"]; ?></td>
                <td><?= $row["department_name"]; ?></td>
                <td><?= $row["employee_designation"]; ?></td>
                <td><?= $row["status"]; ?></td>
                <td><?= $row["scale_type"]; ?></td>
                <td class="d-flex">
                  <a href="../update.html" class="btn btn-primary btn-sm">
                    <i class="bi bi-pencil-square"></i>
                  </a>&nbsp;
                  <a href="./delete.php" class="btn btn-danger btn-sm">
                    <i class="bi bi-trash-fill"></i>
                  </a>
                </td>
              </tr>
            <?php
            }
          } else { ?>
            <tr>
              <td class="text-center text-danger fw-bold" colspan="9">** No records were found **</td>
            </tr>
          <?php
          }
        } catch (PDOException $e) {
          echo "Error: " . $e->getMessage();
        }

        $pdo = null;
        ?>
      </tbody>
    </table>
  </div>

  <script>
    const delBtnEl = document.querySelectorAll(".btn-danger");
    delBtnEl.forEach(function(delBtn) {
      delBtn.addEventListener("click", function(e) {
        const message = confirm("Are you sure you want to delete this record?");
        if (message == false) {
          e.preventDefault();
        }
      });
    });
  </script>
</body>

</html>
