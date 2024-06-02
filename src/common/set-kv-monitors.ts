import { KVMonitors } from './get-kv-monitors';

export const setKVMonitors = async (env: Env, kvMonitors: KVMonitors) => {
	return await env.STATUS_PAGE.put('monitors', JSON.stringify(kvMonitors));
};
