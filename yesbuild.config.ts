import yesbuild, { useTask, useEsBuild, useDevServer, useTaskDir, useCopy } from 'yesbuild-core';

yesbuild.defineTask('default', function* () {
	return useEsBuild({
		entryPoints: ['src/index.tsx'],
		bundle: true,
		platform: 'browser'
	});
});

yesbuild.defineTask('assets', function*() {
  const taskDir = useTaskDir();
  yield useCopy('./assets/*', taskDir, {
    relative: './assets/'
  });
});

yesbuild.defineTask('serve', function* () {
	const assets = yield useTask('assets');
	const defaultResult = yield useTask('default');
	return useDevServer({
		mapTasks: [assets, defaultResult],
	});
});
