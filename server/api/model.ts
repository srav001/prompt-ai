import { getModels } from '../open-ai';

export default defineEventHandler(async () => {
	const response = await getModels();
	return response;
});
