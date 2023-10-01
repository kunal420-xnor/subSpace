const express = require('express');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = 3000;

app.use('/api', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
