import CheckBoxIcon from "./CheckBoxIcon";

const Task = ({ category, goal, name, deadline_at, finished_at }) => {

    return (
        <div className="border border-">
            <h4>{category}</h4>
            <h3>{goal}</h3>
            <h2>{name}</h2>
            <date>{deadline_at}</date>
            <button className="">
                <CheckBoxIcon checked={!!finished_at} />
            </button>
        </div>
    )
}

export default Task;