class ComponentCommand {
    run(argv) {
        console.log(argv);
        console.log('running');
    }
}

module.exports = new ComponentCommand();
