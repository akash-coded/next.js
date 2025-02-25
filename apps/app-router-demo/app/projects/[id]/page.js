async function getProjectData(id) {
    return { id, name: id === '101' ? 'AI Chatbot' : 'Banking App' };
}

export default async function Project({ params }) {
    const project = await getProjectData(params.id);

    return <h1>Project: {project.name} (ID: {project.id})</h1>;
}
