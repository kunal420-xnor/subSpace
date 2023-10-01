exports.getBlogStats = (req, res) => {
  res.json(req.stats);
};

exports.searchBlogs = (req, res) => {
  const query = req.query.query?.toLowerCase();
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is missing.' });
  }

  const filteredBlogs = req.blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query)
  );

  res.json(filteredBlogs);
};
