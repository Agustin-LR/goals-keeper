import Task from "./Task";

const TaskContainer = () => {
    return (
        <section className="max-w-3xl m-auto p-5 bg-orange-200 rounded-lg shadow-lg ">
            <h2 className="text-3xl font-bold opacity-75 font-mono">Task List</h2>
            <hr className="border border-slate-400 my-3" />
            <Task category="Ahorrar" goal="Ahorrar 1000usd" name="Transferir 200USD a PPI" deadline_at="30.03.2024" finished_at="30.03.2024" />
            <Task category="Viajar" goal="Conocer 4 ciudades nuevas" name="Viajar a montevideo" deadline_at="31.12.2024" />
            <Task name="Sacar la basura" deadline_at="05.03.2024" finished_at="05.03.2024" />
        </section>
    );
}

export default TaskContainer;