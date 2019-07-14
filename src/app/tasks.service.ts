export class TasksService {
  tasks = [
    { name: 'Update Pendo Calendar', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates minima ea recusandae veritatis.' 
    },
    { name: 'Do ActiTime', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates minima ea recusandae veritatis.' 
    },
    { name: 'Product Stand-Up', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates minima ea recusandae veritatis.' 
    },
  ];

  completedTasks = [];

  addTask(name: string, description: string) {
    this.tasks.push({name: name, description: description});
  }

  removeTask(id) {
    var completed = this.tasks.splice(id, 1);
    this.completedTasks.push(completed[0]);
  }
}