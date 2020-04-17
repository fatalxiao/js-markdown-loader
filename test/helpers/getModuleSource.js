export default (id, stats) => {
    const {modules} = stats.toJson({source: true});
    const module = modules.find(m => m.name === id);
    let {source} = module;
    return source;
};
