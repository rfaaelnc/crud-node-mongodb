exports.test = function(req, res) {
  res.send('Olá! Teste ao Controller');
};

// TODO: list points from the BD
exports.details = function (req, res) {
  res.send({type: 'GET'});
};

// TODO: add new point of interest
exports.add = function (req, res) {
  console.log('You made a POST request: ', req.body);
  res.send(
    {
      type: 'POST',
      name: req.body.name,
      rank: req.body.rank,
    }
  );
};

// TODO: update of point interest
exports.update = function (req, res) {
  res.send({type: 'PUT'});
};

// TODO: delete of point interest
exports.delete = function (req, res) {
  res.send({type: 'DELETE'});
};