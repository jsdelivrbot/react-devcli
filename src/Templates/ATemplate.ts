import {TemplatesConfig} from 'react-devcli';

abstract class ATemplate {
    public config: TemplatesConfig;

    public constructor(config: TemplatesConfig) {
        this.config = config;
    }

    public abstract build(): string;
}

export default ATemplate;
