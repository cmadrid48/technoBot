//Dependencies

const exphan = require("express-handlebars");
const express = require("express");
// const helpers = require("./utils/helpers");
const path = require("path");
const routes = require("./config/controllers");
// const sequelize = require("./utils/helpers");
// const SequelizeStore = require("./utils/helpers");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

//Create Session middleware & cookies
// cookie timeout = 1day
const sesh = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 86400,
  },
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sesh));

const hbs = exphan.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`\nServer runnig on ${PORT}.`));
});
