const axios = require('axios');

const fetchBlogs = async (req, res, next) => {
  try {
    const response = await axios.get(
      'https://intent-kit-16.hasura.app/api/rest/blogs',
      {
        headers: {
          'x-hasura-admin-secret':
            '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
        },
      }
    );

    console.log('Status code from API:', response.status);
    console.log('Headers from API:', response.headers);
    console.log('Raw response data from API:', response.data);

    if (Array.isArray(response.data)) {
      req.blogs = response.data;
    } else if (response.data && Array.isArray(response.data.data)) {
      req.blogs = response.data.data;
    } else if (response.data && Array.isArray(response.data.blogs)) {
      req.blogs = response.data.blogs;
    } else {
      throw new Error('Unexpected data format from blog API.');
    }

    next();
  } catch (error) {
    console.error('Error while fetching blogs:', error.message);
    if (error.response) {
      console.error('Data from server:', error.response.data);
      console.error('HTTP status code:', error.response.status);
      console.error('HTTP headers:', error.response.headers);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    res.status(500).json({ error: 'Failed to retrieve blogs.' });
  }
};

module.exports = fetchBlogs;
