async function getModels() {
	return await useFetch('/api/model');
}

async function getAnswer() {
	return await useFetch('/api/prompt');
}

export function usePrompter() {
	return {
		getModels,
		getAnswer
	};
}
