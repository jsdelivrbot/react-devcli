const React = require('react');

class Footer extends React.Component {
    docUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
    }

    pageUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + (language ? language + '/' : '') + doc;
    }

    render() {
        const currentYear = new Date().getFullYear();
        return (
            <footer className="nav-footer" id="footer">
                <section className="sitemap">
                    <a href={this.props.config.baseUrl} className="nav-home">
                        {this.props.config.footerIcon && (
                            <img
                                src={this.props.config.baseUrl + this.props.config.footerIcon}
                                alt={this.props.config.title}
                                width="66"
                                height="58"
                            />
                        )}
                    </a>
                    <div>
                        <h5>Docs</h5>
                        <a href={this.docUrl('getting-started/installation.html', this.props.language)}>
                            Get Started
                        </a>
                        <a href={this.docUrl('components/components.html', this.props.language)}>
                            Boilerplate
                        </a>
                        <a href={this.docUrl('miscellaneous/test.html', this.props.language)}>
                            Testing
                        </a>
                        <a href={this.docUrl('getting-started/introduction.html', this.props.language)}>
                            Documentation
                        </a>
                        <a href={this.docUrl('miscellaneous/publishing.html', this.props.language)}>
                            Sharing
                        </a>
                    </div>
                    <div>
                        <h5>Community</h5>
                        <a href={this.pageUrl('users.html', this.props.language)}>
                            User Showcase
                        </a>
                        <a
                            href="http://stackoverflow.com/questions/tagged/react-devcli"
                            target="_blank"
                            rel="noreferrer noopener">
                            Stack Overflow
                        </a>
                        <a href="https://discord.gg/dTEs2Ny">Project Chat</a>
                    </div>
                    <div>
                        <h5>More</h5>
                        <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
                        <a href="https://github.com/steevehook/react-devcli">GitHub</a>
                        <a
                            className="github-button"
                            href={this.props.config.repoUrl}
                            data-icon="octicon-star"
                            data-count-href="/facebook/docusaurus/stargazers"
                            data-show-count={true}
                            data-count-aria-label="# stargazers on GitHub"
                            aria-label="Star this project on GitHub">
                            Star
                        </a>
                    </div>
                </section>
                <section className="copyright">{this.props.config.copyright}</section>
            </footer>
        );
    }
}

module.exports = Footer;
