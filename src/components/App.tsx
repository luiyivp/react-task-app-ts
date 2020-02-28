import React, { Component } from 'react';

import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { ITask } from './Task';

export default class App extends Component<IProps, IState> {
    constructor(props: ITask) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    public addTask(task: ITask) {
        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }

    public deleteTask(id: number): void {
        const tasks: ITask[] = this.state.tasks.filter((task: ITask) => task.id !== id);
        this.setState({ tasks });
    }

    public render(): JSX.Element {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        {this.props.title}
                    </a>
                </nav>

                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <TaskForm addTask={this.addTask.bind(this)} />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <TaskList
                                    tasks={this.state.tasks}
                                    deleteTask={this.deleteTask.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

interface IProps {
    title: string;
}

interface IState {
    tasks: ITask[];
}
