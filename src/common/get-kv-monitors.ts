import { locations } from '@/locations';

export type KVMonitor = {
	firstCheck: string;
	lastCheck: {
		operational: boolean;
		status: number;
		statusText: string;
	};
	checks: {
		[key: string]: {
			fails: number;
			res: {
				[x: string]: {
					n: number;
					ms: number;
					a: number;
				};
			};
		};
	};
};

export type KVMonitors = {
	monitors: {
		[key: string]: KVMonitor;
	};
	lastUpdate: {
		allOperational?: boolean;
		lastUpdate?: string;
		time?: number;
		loc?: keyof typeof locations;
	};
};

export const getKVMonitors = async (env: Env) => {
	const kv = env.STATUS_PAGE;
	return await kv.get<KVMonitors>('monitors', 'json');
};
