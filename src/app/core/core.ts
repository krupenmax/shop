export const composeParams = <T extends Record<string, any>>(payload: T): Partial<T> => {
	const result: Partial<T> = {};
	for (const key in payload) {
		if (Object.prototype.hasOwnProperty.call(payload, key)) {
			const element = payload[key];
			if (element !== undefined) {
				result[key] = element;
			}
		}
	}
	return result;
};
