const clients = require("../data/clients.json");

// Home page
exports.getHome = (req, res) => {
  res.render("pages/home", { title: "NorthStar Portal" });
};

// Client list
exports.getClients = (req, res) => {
  res.render("pages/clients", {
    title: "Client Directory",
    clients: clients
  });
};

// Client details
exports.getClientById = (req, res) => {
  const id = parseInt(req.params.id);
  const client = clients.find(c => c.id === id);

  res.render("pages/clientDetails", {
    title: "Client Profile",
    client: client
  });
};
