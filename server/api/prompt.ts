import { getAnswer } from '../open-ai';

export default defineEventHandler(async event => {
	const response = await getAnswer();
	console.log(response);
	return response;
});
