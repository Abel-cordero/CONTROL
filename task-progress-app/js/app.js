document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
    });

    function addTask() {
        const responsible = document.getElementById('responsible').value;
        const activity = document.getElementById('activity').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const duration = document.getElementById('duration').value;
        const progress = document.getElementById('progress').value;
        const planned = document.getElementById('planned').value;
        const status = calculateStatus(progress, planned);
        const observations = document.getElementById('observations').value;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <strong>Responsable:</strong> ${responsible} <br>
            <strong>Actividad:</strong> ${activity} <br>
            <strong>Inicio:</strong> ${startDate} <br>
            <strong>Fin:</strong> ${endDate} <br>
            <strong>Duración:</strong> ${duration} <br>
            <strong>% Avance:</strong> ${progress} <br>
            <strong>% Planificado:</strong> ${planned} <br>
            <strong>Estado:</strong> ${status} <br>
            <strong>Observaciones:</strong> ${observations} <br>
            <hr>
        `;

        taskList.appendChild(taskItem);
        taskForm.reset();
    }

    function calculateStatus(progress, planned) {
        if (progress < planned) {
            return 'Atrasado';
        } else {
            return 'Normal';
        }
    }
});