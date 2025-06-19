document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
    });

    function addTask() {
        const responsible = document.getElementById('responsable').value;
        const activity = document.getElementById('actividad').value;
        const startDate = document.getElementById('inicio').value;
        const endDate = document.getElementById('fin').value;
        const duration = document.getElementById('duracion').value;
        const progress = document.getElementById('avance').value;
        const planned = document.getElementById('planificado').value;
        const status = calculateStatus(progress, planned);
        const observations = document.getElementById('observaciones').value;

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
            <button type="button" class="delete-btn">Eliminar</button>
            <hr>
        `;

        taskItem.querySelector('.delete-btn').addEventListener('click', () => {
            taskItem.remove();
        });

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