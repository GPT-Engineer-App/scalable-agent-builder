class DataProcessorAgent {
    cleanseData(data) {
        // Remove null or undefined values
        return data.filter(item => item != null);
    }

    transformData(data) {
        // Example transformation: Convert all strings to lowercase
        return data.map(item => typeof item === 'string' ? item.toLowerCase() : item);
    }

    analyzeData(data) {
        // Basic statistical analysis: Calculate mean of numerical data
        const numericalData = data.filter(item => typeof item === 'number');
        const sum = numericalData.reduce((acc, curr) => acc + curr, 0);
        const mean = sum / numericalData.length;
        return { mean };
    }
}

export default new DataProcessorAgent();