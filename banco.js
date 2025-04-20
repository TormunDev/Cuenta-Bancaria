const listaClientes = [
    {
      numeroCuenta: 5486273622,
      tipoCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte"
    },
    {
      numeroCuenta: 1183971869,
      tipoCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell"
    },
    {
      numeroCuenta: 9582019689,
      tipoCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente"
    },
    {
      numeroCuenta: 1761924656,
      tipoCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley"
    },
    {
      numeroCuenta: 7401971607,
      tipoCuenta: "Caja de Ahorro",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer"
    }
  ];
  
  const banco = {
    clientes: listaClientes,
  
    consultarCliente: function (nombre) {
      return this.clientes.find(cliente => cliente.titularCuenta === nombre);
    },
  
    deposito: function (nombre, monto) {
      let cliente = this.consultarCliente(nombre);
      if (cliente) {
        cliente.saldoEnPesos += monto;
        console.log(`Depósito realizado, su nuevo saldo es: ${cliente.saldoEnPesos}`);
      } else {
        console.log("Cliente no encontrado.");
      }
    },
  
    extraccion: function (nombre, monto) {
      let cliente = this.consultarCliente(nombre);
      if (cliente) {
        if (cliente.saldoEnPesos >= monto) {
          cliente.saldoEnPesos -= monto;
          console.log(`Extracción realizada correctamente, su nuevo saldo es: ${cliente.saldoEnPesos}`);
        } else {
          console.log("Fondos insuficientes");
        }
      } else {
        console.log("Cliente no encontrado.");
      }
    }
  };
  
  // 🔽 Probando el banco:
  banco.deposito("Abigael Natte", 2000);
  banco.extraccion("Ramon Connell", 10000);
  banco.consultarCliente("Jarret Lafuente");
  