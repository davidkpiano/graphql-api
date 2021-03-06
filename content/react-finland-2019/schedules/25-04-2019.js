module.exports = {
  day: "2019-04-25",
  description: "Presentation day",
  intervals: [
    {
      begin: "09:00",
      end: "18:00",
      sessions: [
        require("../sessions/andrey-okonetchnikov"),
        require("../sessions/artem-sapegin"),
        require("../sessions/carolyn-stransky"),
        require("../sessions/glenn-reyes"),
        require("../sessions/mike-berman"),
        require("../sessions/monica-lent"),
        require("../sessions/tejas-kumar"),
        require("../sessions/tomas-konrady"),
        require("../sessions/tero-parviainen"),
      ],
    },
  ],
};
