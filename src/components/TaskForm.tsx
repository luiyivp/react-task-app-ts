import React, { Component } from 'react';

import { ITask } from './Task';

export default class TaskForm extends Component<ITaskFormProps, any> {
    constructor(props: ITaskFormProps) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
    }

    private getTimestamp(): number {
        return new Date().getTime();
    }

    public handleNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTask: ITask = {
            id: this.getTimestamp(),
            title: this.state.title,
            description: this.state.description,
            completed: false
        };
        this.props.addTask(newTask);
    }

    public handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="card card-body">
                <form onSubmit={e => this.handleNewTask(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Add A Task"
                            name="title"
                            onChange={e => this.handleInputChange(e)}
                            value={this.state.title}
                            className="form-control"
                            autoFocus
                            //ref={this.titleInput}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            onChange={e => this.handleInputChange(e)}
                            name="description"
                            className="form-control"
                            value={this.state.description}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

interface ITaskFormProps {
    addTask: (task: ITask) => void;
}

interface ITaskFormState {
    title: string;
    description: string;
}
