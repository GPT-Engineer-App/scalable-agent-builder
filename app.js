document.addEventListener('DOMContentLoaded', function() {
    const simulationArea = document.getElementById('agentSimulation');

    const agents = [
        { name: 'Query Agent', description: 'Handles user queries and fetches data.' },
        { name: 'Implementation Agent', description: 'Implements changes and manages code deployments.' },
        { name: 'Monitoring Agent', description: 'Monitors system performance and alerts for anomalies.' }
    ];

    agents.forEach(agent => {
        const agentCard = document.createElement('div');
        agentCard.className = 'p-4 bg-white rounded-lg shadow-md hover:bg-gray-50';
        agentCard.innerHTML = `
            <h2 class="text-xl font-semibold text-gray-800">${agent.name}</h2>
            <p class="text-gray-600">${agent.description}</p>
        `;
        simulationArea.appendChild(agentCard);
    });
});