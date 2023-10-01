const _ = require('lodash');

const analytics = (req, res, next) => {
  const blogs = req.blogs;

  req.stats = {
    totalBlogs: blogs.length,
    longestTitle: _.maxBy(blogs, (blog) => blog.title.length)?.title,
    privacyBlogsCount: _.filter(
      blogs,
      (blog) => blog.title && blog.title.toLowerCase().includes('privacy')
    ).length,

    uniqueBlogTitles: _.uniqBy(blogs, 'title').map((blog) => blog.title),
  };

  next();
};

module.exports = analytics;
