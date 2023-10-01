const express = require('express');
const fetchBlogsMiddleware = require('../middlewares/cURL_middlware');
const analyticsMiddleware = require('../middlewares/analyticsMiddleware');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get(
  '/blog-stats',
  fetchBlogsMiddleware,
  analyticsMiddleware,
  blogController.getBlogStats
);
router.get('/blog-search', fetchBlogsMiddleware, blogController.searchBlogs);

module.exports = router;
