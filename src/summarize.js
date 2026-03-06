function summarizeTasks(tasks) {
  const byStatus = {};
  const byOwner = {};

  let totalPoints = 0;
  let topTask = null;

  for (const task of tasks) {
    const status = task.status;
    const owner = task.owner;
    const points = Number(task.points || 0);

    byStatus[status] = (byStatus[status] || 0) + 1;

    if (!byOwner[owner]) {
      byOwner[owner] = { tasks: 0, points: 0 };
    }
    byOwner[owner].tasks += 1;
    byOwner[owner].points += points;

    totalPoints += points;

    if (!topTask || points > topTask.points) {
      topTask = {
        id: task.id,
        title: task.title,
        points,
        owner
      };
    }
  }

  return {
    totalTasks: tasks.length,
    totalPoints,
    byStatus,
    byOwner,
    topTaskByPoints: topTask
  };
}

module.exports = {
  summarizeTasks
};
