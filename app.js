document.addEventListener('DOMContentLoaded', function() {
    const agents = [
        { type: 'AI', description: 'Handles AI functionalities.' },
        { type: 'Database', description: 'Manages database operations.' },
        { type: 'Network', description: 'Controls network interactions.' }
    ];

    const agentsContainer = document.getElementById('agents');
    agents.forEach(agent => {
        const agentDiv = document.createElement('div');
        agentDiv.className = 'p-4 bg-white rounded shadow';
        agentDiv.innerHTML = `
            <h2 class="text-lg font-semibold">${agent.type} Agent</h2>
            <p>${agent.description}</p>
            <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Simulate</button>
        `;
        agentsContainer.appendChild(agentDiv);
    });
});