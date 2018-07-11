interface IProps {
    [index: string]: string;
}

export const findAndReplace = (template: string, props: IProps): string => {
    for (const p in props) {
        template = template
            .split(new RegExp(p.toLowerCase(), 'gi'))
            .join(props[p]);
    }

    return template;
};
