const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Untitled'
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'No content'
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    defaultValue: 'closed'
  },
});
Page.beforeCreate((pageInstance) => {
  this.slug = makeSlug(pageInstance.title);
})

function makeSlug(title) {
  let slug = ''
  if (title) {
    slug = title.replace(/\s/g, '_').replace(/\W/g, '');
  }
  if (slug === '' || slug === undefined) {
    slug = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  return slug;
}

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Anonymous'
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});


module.exports = { db, Page, User }
