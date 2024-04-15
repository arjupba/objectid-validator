"use strict";
const config = require("conventional-changelog-conventionalcommits");

module.exports = config({
  types: [
    { type: "build", hidden: true }, // hidden
    { type: "release", hidden: true }, // hidden
    { type: "deprecate", section: "Deprecated" }, // minor
    { type: "ci", hidden: true }, // hidden
    { type: "chore", hidden: true }, // hidden
    { type: "docs", hidden: true }, // hidden
    { type: "feat", section: "Added" }, // minor
    { type: "fix", section: "Fixed" }, // patch
    { type: "perf", section: "Performance" }, // patch
    { type: "refactor", hidden: true }, // hidden
    { type: "remove", section: "Removed" }, // minor
    { type: "revert", section: "Reverted" }, // minor
    { type: "security", section: "Security" }, // patch
    { type: "style", hidden: true }, // hidden
    { type: "test", hidden: true }, // hidden
  ],
});
