export function getSubheading(numberOfTasks) {
  if (numberOfTasks === 1) {
    return `${numberOfTasks} task`;
  } else if (numberOfTasks === 0) {
    return `No tasks`;
  } else {
    return `${numberOfTasks} tasks`;
  }
}
