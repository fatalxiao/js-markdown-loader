import path from 'path';

export default (asset, compiler, stats) => {

    const usedFs = compiler.outputFileSystem,
        outputPath = stats.compilation.outputOptions.path;

    let data = '',
        targetFile = asset;

    const queryStringIdx = targetFile.indexOf('?');

    if (queryStringIdx >= 0) {
        targetFile = targetFile.substr(0, queryStringIdx);
    }

    try {
        data = usedFs.readFileSync(path.join(outputPath, targetFile)).toString();
    } catch (error) {
        data = error.toString();
    }

    return data;

};
