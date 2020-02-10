/*
Pick only one planet at a time and send all ships to attack it.
*/

class SampleBot { // You must pick a new custom name
  name = "SampleBot";

  action(your_state, world_state, helper) {
    var actions = new Set();
    var other_planets = helper.getOtherPlayer(your_state, "Planets");

    // Do nothing
    if (other_planets.size == 0) return actions;

    var targetId = Array.from(other_planets)[0];

    your_state.get("Planets").forEach((item, id) => {
      if (item.get("Health") > 0) {
        let action = new Map();
        action.set("Health", item.get("Health"));
        action.set("Type", "Attack");
        action.set("Source ID", id);
        action.set("Source Type", "Planet");
        action.set("Target", targetId);

        actions.add(action);
      }
    });

    return actions;
  }
}