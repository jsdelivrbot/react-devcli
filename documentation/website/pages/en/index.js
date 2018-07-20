const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
/* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
    return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
    return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
    return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
    render() {
        return (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={this.props.href} target={this.props.target}>
                    {this.props.children}
                </a>
            </div>
        );
    }
}

Button.defaultProps = {
    target: '_self',
};

const SplashContainer = props => (
    <div className="homeContainer">
        <div className="homeSplashFade">
            <div className="wrapper homeWrapper">{props.children}</div>
        </div>
    </div>
);

const Logo = props => (
    <div className="projectLogo">
        <img src={props.img_src}/>
    </div>
);

const ProjectTitle = props => (
    <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
    </h2>
);

const PromoSection = props => (
    <div className="section promoSection">
        <div className="promoRow">
            <div className="pluginRowBlock">{props.children}</div>
        </div>
    </div>
);

class HomeSplash extends React.Component {
    render() {
        let language = this.props.language || '';
        return (
            <SplashContainer>
                <Logo img_src={imgUrl('logo-long.svg')}/>
                <div className="inner">
                    <ProjectTitle/>
                    <PromoSection>
                        <Button href="#try">TRY OUT</Button>
                        <Button href={docUrl('getting-started/installation.html', language)}>GET STARTED</Button>
                        <Button href={docUrl('getting-started/introduction.html', language)}>LEARN MORE</Button>
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

const Block = props => (
    <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock align="center" contents={props.children} layout={props.layout}/>
    </Container>
);

const Features = props => (
    <Block layout="fourColumn">
        {[
            {
                content: 'Generate boilerplate code for React apps and do not waste your time copy pasting any more',
                image: imgUrl('boilerplate.svg'),
                imageAlign: 'top',
                title: 'Boilerplate generation',
            },
            {
                content: 'Test React components in isolation and serve them individually right inside the browser',
                image: imgUrl('test.svg'),
                imageAlign: 'top',
                title: 'Testing in isolation',
            },
            {
                content: 'Document components as you develop and let other developers how to use your components',
                image: imgUrl('document.svg'),
                imageAlign: 'top',
                title: 'Component documentation',
            },
            {
                content: 'Share your local components across the web without too much effort',
                image: imgUrl('share.svg'),
                imageAlign: 'top',
                title: 'Component sharing',
            },
        ]}
    </Block>
);

const FeatureCallout = props => (
    <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Zero configuration development CLI</h2>
        <MarkdownBlock>
            Create, develop, test, document and share your React component across the web
            with react-dev-cli with absolutely no configuration
        </MarkdownBlock>
    </div>
);

const LearnHow = props => (
    <div>
        <Block background="light">
            {[
                {
                    content: 'Start using the react dev cli without any configuration',
                    image: imgUrl('learn-how/zero-config.png'),
                    imageAlign: 'right',
                    title: 'Zero 1 Configuration',
                },
            ]}
        </Block>

        <Block background="light">
            {[
                {
                    content: 'Start using the react dev cli without any configuration',
                    image: imgUrl('learn-how/zero-config.png'),
                    imageAlign: 'left',
                    title: 'Zero 1 Configuration',
                },
            ]}
        </Block>

        <Block background="light">
            {[
                {
                    content: 'Start using the react dev cli without any configuration',
                    image: imgUrl('learn-how/zero-config.png'),
                    imageAlign: 'right',
                    title: 'Zero 1 Configuration',
                },
            ]}
        </Block>
    </div>

);

const TryOut = props => (
    <Block id="try" background='dark'>
        {[
            {
                content: 'Just `yarn global react-devcli` ' +
                'and start playing around. No more copy pasting, ' +
                'crazy developers trying to understand your code because of lack of docs ' +
                'or unexpected features when component tested in isolation',
                image: imgUrl('demo.gif'),
                imageAlign: 'left',
                title: 'Try it out 🚀',
            },
        ]}
    </Block>
);

const Description = props => (
    <div>
        <Block background="light">
            {[
                {
                    content: 'Copy pasting has always been cumbersome and time consuming, especially ' +
                    'when projects require lots of configuration. Stop copy pasting code around and make ' +
                    'use of automated code generation, which speeds up development time and lets you focus ' +
                    ' on pure business logic. ✅',
                    image: imgUrl('learn-how/zero-config.png'),
                    imageAlign: 'right',
                    title: 'Boilerplate generation',
                },
            ]}
        </Block>

        <Block background="light">
            {[
                {
                    content: 'Test your components in your favorite testing framework in isolation ' +
                    'and make sure they work in any' +
                    ' environment and also take advantage of a nice local sandbox designed to test' +
                    ' your components right from CLI. This will allow more maintainable and 🌟' +
                    ' less breakable components. ✅',
                    image: imgUrl('learn-how/zero-config.png'),
                    imageAlign: 'left',
                    title: 'Test in isolation',
                },
            ]}
        </Block>

        <Block background="light">
            {[
                {
                    content: 'Do not waste your time anymore, trying to understand what a component does ' +
                    'or how to use it properly. Make your life and other developers happier by documenting ' +
                    'your components out of the box. Document your React components using ' +
                    '[Docz](https://www.docz.site/) documentation tool ✅',
                    image: imgUrl('docz.svg'),
                    imageAlign: 'right',
                    title: 'Document components',
                },
            ]}
        </Block>

        <Block background="light">
            {[
                {
                    content: 'Allow other developers to see your work and use it eventually. ' +
                    'There\'s, nothing better than reusing components without reinventing the wheel.' +
                    ' You get what you give. ✅',
                    image: imgUrl('learn-how/zero-config.png'),
                    imageAlign: 'left',
                    title: 'Share components',
                },
            ]}
        </Block>
    </div>
);

const Showcase = props => {
    if ((siteConfig.users || []).length === 0) {
        return null;
    }
    const showcase = siteConfig.users
        .filter(user => {
            return user.pinned;
        })
        .map((user, i) => {
            return (
                <a href={user.infoLink} key={i}>
                    <img src={user.image} alt={user.caption} title={user.caption}/>
                </a>
            );
        });

    return (
        <div className="productShowcaseSection paddingBottom">
            <h2>{'Who\'s Using This?'}</h2>
            <p>This project is used by all these people</p>
            <div className="logos">{showcase}</div>
            <div className="more-users">
                <a className="button" href={pageUrl('users.html', props.language)}>
                    More {siteConfig.title} Users
                </a>
            </div>
        </div>
    );
};

class Index extends React.Component {
    render() {
        let language = this.props.language || '';

        return (
            <div>
                <HomeSplash language={language}/>
                <div className="mainContainer">
                    <Features/>
                    <FeatureCallout/>
                    <LearnHow/>
                    <TryOut/>
                    <Description/>
                    <Showcase language={language}/>
                </div>
            </div>
        );
    }
}

module.exports = Index;
