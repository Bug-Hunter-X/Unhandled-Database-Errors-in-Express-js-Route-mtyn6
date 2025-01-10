const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ error: 'Failed to fetch user' }); // Send a proper error response
      return; // Stop further execution
    } else if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
    } else {
      res.json(user);
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));