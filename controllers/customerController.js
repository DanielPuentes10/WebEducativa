const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM materia', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO materia set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { IdMateria } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM materia WHERE IdMateria = ?", [IdMateria], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { IdMateria } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE materia set ? where IdMateria = ?', [newCustomer, IdMateria], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { IdMateria } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM materia WHERE IdMateria = ?', [IdMateria], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
