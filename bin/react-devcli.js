#!/usr/bin/env node
"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var find=_interopDefault(require("find")),chalk=_interopDefault(require("chalk")),yargs=_interopDefault(require("yargs")),fs=_interopDefault(require("fs")),util=_interopDefault(require("util")),path=_interopDefault(require("path"));function __decorate(e,n,o,t){var r,s=arguments.length,a=s<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var c=e.length-1;0<=c;c--)(r=e[c])&&(a=(s<3?r(a):3<s?r(n,o,a):r(n,o))||a);return 3<s&&a&&Object.defineProperty(n,o,a),a}function __awaiter(s,a,c,i){return new(c||(c=Promise))(function(e,n){function o(e){try{r(i.next(e))}catch(e){n(e)}}function t(e){try{r(i.throw(e))}catch(e){n(e)}}function r(n){n.done?e(n.value):new c(function(e){e(n.value)}).then(o,t)}r((i=i.apply(s,a||[])).next())})}require("babel-polyfill");var CommandsEnum,MakeAliasesEnum,RemoveAliasesEnum,DocumentAliasesEnum,classCallCheck=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},createClass=function(){function t(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),inherits=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},possibleConstructorReturn=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},defaultConfiguration=function(){return{components:{path:process.cwd()+"/components",propTypes:!0,scssFile:!0,index:!1,exportFromIndex:!1},reducers:{path:process.cwd()+"/reducers",componentBased:!1},actions:{path:process.cwd()+"/actions",componentBased:!1,index:!1,separateActionTypes:!1},selectors:{path:process.cwd()+"/selectors",componentBased:!1},tests:{path:process.cwd()+"/__tests__",componentBased:!1},commands:{path:process.cwd()+"/react-devcli/commands"},templates:{path:process.cwd()+"/react-devcli/templates"},engines:{language:"js",testing:{},linting:{}}}},load=function(){return new Promise(function(o,t){find.file(/react\.config\.js$/,process.cwd(),function(e){if(e.length){var n=e[e.length-1];o(require(n)())}else o(defaultConfiguration());t("Could not load configuration file")})})},ACommand=function e(){classCallCheck(this,e)},Command=function(t,r,s){return function(o){return yargs.command(t,r,s),function(e){function n(){classCallCheck(this,n);var e=possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.name=t,e.description=r,e.flags=s,e}return inherits(n,o),n}()}},name="init",description="init description",flags={},Init=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(n),console.log(e)}},{key:"help",value:function(e){console.log(e)}}]),n}(),Init$1=Init=__decorate([Command(name,description,flags)],Init),InitCommand=new Init$1,name$1="new",description$1="new description",flags$1={},New=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(n),console.log(e)}},{key:"help",value:function(e){console.log(e)}}]),n}(),New$1=New=__decorate([Command(name$1,description$1,flags$1)],New),NewCommand=new New$1,name$2="router",description$2="router description",flags$2={},Router=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(n),console.log(e)}},{key:"help",value:function(e){console.log(e)}},{key:"remove",value:function(e){console.log(e)}},{key:"make",value:function(e){console.log(e)}},{key:"lint",value:function(e){console.log(e)}}]),n}(),Router$1=Router=__decorate([Command(name$2,description$2,flags$2)],Router),RouterCommand=new Router$1;!function(e){e.Make="make",e.Remove="remove",e.Document="document",e.Serve="serve",e.Test="test"}(CommandsEnum||(CommandsEnum={})),(MakeAliasesEnum||(MakeAliasesEnum={})).Mk="mk",(RemoveAliasesEnum||(RemoveAliasesEnum={})).Rm="rm",(DocumentAliasesEnum||(DocumentAliasesEnum={})).Doc="doc";var Dispatcher=function(){function e(){classCallCheck(this,e)}return createClass(e,null,[{key:"dispatch",value:function(e,n){switch(e._[1]){case MakeAliasesEnum.Mk:case CommandsEnum.Make:this.hasMake(n)?n.make(e):this.throwMemberInExistence(CommandsEnum.Make);break;case RemoveAliasesEnum.Rm:case CommandsEnum.Remove:this.hasRemove(n)?n.remove(e):this.throwMemberInExistence(CommandsEnum.Remove);break;case DocumentAliasesEnum.Doc:case CommandsEnum.Document:this.hasDocument(n)?n.document(e):this.throwMemberInExistence(CommandsEnum.Document);break;case CommandsEnum.Serve:this.hasServe(n)?n.serve(e):this.throwMemberInExistence(CommandsEnum.Serve);break;case CommandsEnum.Test:this.hasTest(n)?n.test(e):this.throwMemberInExistence(CommandsEnum.Test);break;default:n.help(e)}}},{key:"throwMemberInExistence",value:function(e){throw new Error(e+" does not exist on current command class")}},{key:"hasMake",value:function(e){return CommandsEnum.Make in e}},{key:"hasRemove",value:function(e){return CommandsEnum.Remove in e}},{key:"hasDocument",value:function(e){return CommandsEnum.Document in e}},{key:"hasServe",value:function(e){return CommandsEnum.Serve in e}},{key:"hasTest",value:function(e){return CommandsEnum.Test in e}}]),e}(),name$3="component",description$3="Component description",flags$3={},readFile=util.promisify(fs.readFile),writeFile=util.promisify(fs.writeFile),Component=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,o){var t=this;Dispatcher.dispatch(e,this);var r=e._[1];r?readFile(path.relative(__dirname,path.resolve(__dirname,"..","src","templates","components","Stateless.jsx"))).then(function(e){return Promise.resolve(e.toString().split("$NAME").join("SomeName"))}).then(function(n){return __awaiter(t,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return fs.existsSync(path.resolve(o.path))||fs.mkdirSync(path.resolve(o.path)),e.next=3,writeFile(path.resolve(o.path,r+".jsx"),n);case 3:case"end":return e.stop()}},e,this)}))}):console.log(chalk.red("Specify a component name!"))}},{key:"help",value:function(e){console.log(e)}},{key:"remove",value:function(e){console.log(e)}},{key:"test",value:function(e){console.log(e)}},{key:"make",value:function(e){console.log(e),console.log("making")}},{key:"serve",value:function(e){console.log(e)}},{key:"document",value:function(e){console.log(e)}},{key:"lint",value:function(e){console.log(e)}}]),n}(),Component$1=Component=__decorate([Command(name$3,description$3,flags$3)],Component),ComponentCommand=new Component$1,name$4="store",description$4="store description",flags$4={},Store=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(n),console.log(e)}},{key:"help",value:function(e){console.log(e)}},{key:"remove",value:function(e){console.log(e)}},{key:"make",value:function(e){console.log(e)}},{key:"lint",value:function(e){console.log(e)}}]),n}(),Store$1=Store=__decorate([Command(name$4,description$4,flags$4)],Store),StoreCommand=new Store$1,name$5="reducer",description$5="Reducer description",flags$5={},Reducer=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(e),console.log(n)}},{key:"help",value:function(e){console.log(e)}},{key:"remove",value:function(e){console.log(e)}},{key:"test",value:function(e){console.log(e)}},{key:"make",value:function(e){console.log(e)}},{key:"lint",value:function(e){console.log(e)}}]),n}(),Reducer$1=Reducer=__decorate([Command(name$5,description$5,flags$5)],Reducer),ReducerCommand=new Reducer$1,name$6="selector",description$6="Selector description",flags$6={},Selector=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(e),console.log(n)}},{key:"help",value:function(e){console.log(e)}},{key:"remove",value:function(e){console.log(e)}},{key:"test",value:function(e){console.log(e)}},{key:"make",value:function(e){console.log(e)}},{key:"lint",value:function(e){console.log(e)}}]),n}(),Selector$1=Selector=__decorate([Command(name$6,description$6,flags$6)],Selector),SelectorCommand=new Selector$1,name$7="action",description$7="Action description",flags$7={component:{alias:"c",demand:!1,describe:"Create component alongside action file"}},Action=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(e),console.log(n)}},{key:"help",value:function(e){console.log(e)}},{key:"remove",value:function(e){console.log(e)}},{key:"test",value:function(e){console.log(e)}},{key:"make",value:function(e){console.log(e)}},{key:"lint",value:function(e){console.log(e)}}]),n}(),Action$1=Action=__decorate([Command(name$7,description$7,flags$7)],Action),ActionCommand=new Action$1,name$8="context",description$8="context description",flags$8={},Context=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(e),console.log(n)}},{key:"help",value:function(e){console.log(e)}},{key:"remove",value:function(e){console.log(e)}},{key:"test",value:function(e){console.log(e)}},{key:"make",value:function(e){console.log(e)}},{key:"lint",value:function(e){console.log(e)}}]),n}(),Context$1=Context=__decorate([Command(name$8,description$8,flags$8)],Context),ContextCommand=new Context$1,name$9="command",description$9="Command description",flags$9={},CustomCommand=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(n),console.log(e)}},{key:"help",value:function(e){console.log(e)}},{key:"remove",value:function(e){console.log(e)}},{key:"make",value:function(e){console.log(e)}},{key:"lint",value:function(e){console.log(e)}}]),n}(),CustomCommand$1=CustomCommand=__decorate([Command(name$9,description$9,flags$9)],CustomCommand),CommandCommand=new CustomCommand$1,name$a="docs",description$a="docs description",flags$a={},Docs=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(n),console.log(e)}},{key:"help",value:function(e){console.log(e)}},{key:"remove",value:function(e){console.log(e)}},{key:"make",value:function(e){console.log(e)}}]),n}(),Docs$1=Docs=__decorate([Command(name$a,description$a,flags$a)],Docs),DocsCommand=new Docs$1,name$b="lint",description$b="lint description",flags$b={},Lint=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(n),console.log(e)}},{key:"help",value:function(e){console.log(e)}}]),n}(),Lint$1=Lint=__decorate([Command(name$b,description$b,flags$b)],Lint),LintCommand=new Lint$1,name$c="test",description$c="Test description",flags$c={},Test=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e,n){console.log(e),console.log(n)}},{key:"help",value:function(e){console.log(e)}},{key:"remove",value:function(e){console.log(e)}},{key:"make",value:function(e){console.log(e)}}]),n}(),Test$1=Test=__decorate([Command(name$c,description$c,flags$c)],Test),TestCommand=new Test$1,name$d="help",description$d="Help description",flags$d={},Help=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,ACommand),createClass(n,[{key:"run",value:function(e){console.log("Help options:"),console.log(e)}},{key:"help",value:function(e){console.log(e)}}]),n}(),Help$1=Help=__decorate([Command(name$d,description$d,flags$d)],Help),HelpCommand=new Help$1,Argv=yargs.help().argv,Init$2=InitCommand,New$2=NewCommand,Router$2=RouterCommand,Component$2=ComponentCommand,Store$2=StoreCommand,Reducer$2=ReducerCommand,Selector$2=SelectorCommand,Action$2=ActionCommand,Context$2=ContextCommand,Command$1=CommandCommand,Docs$2=DocsCommand,Lint$2=LintCommand,Test$2=TestCommand,Help$2=HelpCommand,_this=void 0;__awaiter(_this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,load();case 2:n=e.sent,e.t0=Argv._[0],e.next=e.t0===Init$2.name?6:e.t0===New$2.name?8:e.t0===Router$2.name?10:e.t0===Component$2.name?12:e.t0===Store$2.name?14:e.t0===Reducer$2.name?16:e.t0===Selector$2.name?18:e.t0===Action$2.name?20:e.t0===Context$2.name?22:e.t0===Command$1.name?24:e.t0===Docs$2.name?26:e.t0===Lint$2.name?28:e.t0===Test$2.name?30:32;break;case 6:return Init$2.run(Argv,n.components),e.abrupt("break",34);case 8:return New$2.run(Argv,n.components),e.abrupt("break",34);case 10:return Router$2.run(Argv,n.components),e.abrupt("break",34);case 12:return Component$2.run(Argv,n.components),e.abrupt("break",34);case 14:return Store$2.run(Argv,n.reducers),e.abrupt("break",34);case 16:return Reducer$2.run(Argv,n.reducers),e.abrupt("break",34);case 18:return Selector$2.run(Argv,n.selectors),e.abrupt("break",34);case 20:return Action$2.run(Argv,n.actions),e.abrupt("break",34);case 22:return Context$2.run(Argv,n.actions),e.abrupt("break",34);case 24:return Command$1.run(Argv,n.commands),e.abrupt("break",34);case 26:return Docs$2.run(Argv,n.tests),e.abrupt("break",34);case 28:return Lint$2.run(Argv,n.tests),e.abrupt("break",34);case 30:return Test$2.run(Argv,n.tests),e.abrupt("break",34);case 32:console.log("None"),Help$2.run(Argv);case 34:case"end":return e.stop()}},e,this)}));
