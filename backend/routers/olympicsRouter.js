import express from "express";

const olympicsRouter = express.Router();

const data = {
  comingEvents: [
    { game: "basketball", teams: "China vs USA", time: "11:50" },
    { game: "basketball", teams: "China vs AUS", time: "18:50" },
  ],
  currentEvents: [
    { game: "basketball", teams: "UK vs USA" },
    { game: "basketball", teams: "NZ vs USA" },
  ],
  results: [
    {
      game: "basketball",
      teams: "China vs USA",
      finished_time: "11:50",
      result: "110:85",
    },
    {
      game: "basketball",
      teams: "AUS vs USA",
      finished_time: "10:50",
      result: "100:65",
    },
  ],
};
olympicsRouter.get("/coming", function (req, res) {
  res.status(201).json(data.comingEvents);
});

olympicsRouter.get("/current", function (req, res) {
  res.status(201).json(data.currentEvents);
});

olympicsRouter.get("/results", function (req, res) {
  res.status(201).json(data.results);
});

export default olympicsRouter;
