const mysql = require("mysql2");

const database = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "NewSkt9182661287@",
    database: "loja",
  })
  .promise();

const getAllCustomers = async () => {
  try {
    const results = await database.query(`SELECT * FROM clientes`);
    return results[0];
  } catch (error) {
    console.log(error);
  }
};

const createCustomer = async (nome, tel, descServ, valServ) => {
  try {
    const customer = await database.query(
      `INSERT INTO clientes VALUES(?, ?, ?, ?)`,
      [nome, tel, descServ, valServ]
    );
    return customer;
  } catch (error) {
    console.log(error);
  }
};

const updateName = async (nome, id) => {
  const newName = database.query("UPDATE clientes SET nome = ? WHERE ID = ?", [
    nome,
    id,
  ]);
  return newName;
};

const deleteCustomer = async (id) => {
  const deleteCustomer = database.query("DELETE FROM clientes WHERE ID = ?", [
    id,
  ]);
};

module.exports = {
  getAllCustomers,
  createCustomer,
  updateName,
  deleteCustomer,
};
