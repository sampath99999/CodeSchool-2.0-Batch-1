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
          <th>Name</th>
          <th>Father Name</th>
          <th>Gender</th>
          <th>Marital Status</th>
          <th>DOB</th>
          <th>Aadhaar no.</th>
          <th>Address</th>
          <th>Pan no.</th>
          <th>Email Id</th>
          <th>Phone no</th>
          <th>Action</th>
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
          $query = "SELECT * FROM employeedetails";
          $stmt = $pdo->query($query);

          if ($stmt->rowCount() > 0) {
            $count = 1;
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) { ?>
              <tr>
                <td><?= $count++; ?></td>
                <td><?= $row["name"]; ?></td>
                <td><?= $row["fathers_name"]; ?></td>
                <td><?= $row["gender"]; ?></td>
                <td><?= $row["marital_status"]; ?></td>
                <td><?= $row["date_of_birth"]; ?></td>
                <td><?= $row["aadhaar_no"]; ?></td>
                <td><?= $row["address"]; ?></td>
                <td><?= $row["pan_no"]; ?></td>
                <td><?= $row["email_id"]; ?></td>
                <td><?= $row["phone_no"]; ?></td>
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
