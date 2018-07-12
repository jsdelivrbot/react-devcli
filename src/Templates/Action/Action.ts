import {findAndReplace} from '../../Utils/Template/Template';
import {IActionOptions} from '../../Commands/Action/IActionOptions';

export const js = (actionsConfig: IActionOptions): string => {
    const {actions, name, separateActionTypes} = actionsConfig;
    const actionTypeFileName = `${name[0].toUpperCase() + name.split('').slice(1).join('')}Actions`;
    const actionTypesConstants = actions.map((a): string => a.toUpperCase());
    const actionTypesImports = `import {${actionTypesConstants.join(', ')}} from './${actionTypeFileName}';`;
    const actionTypesExports = actionTypesConstants
        .map((actionType): string => `export const ${actionType} = '${actionType}';`)
        .join('\n');

    const actionExport = [
        '',
        'export const REACT_ACTION_NAME = () => ({',
        '    type: REACT_ACTION_TYPE',
        '});',
        ''
    ].join('\n');

    const actionExports = actions
        .map((a): string => {
            return findAndReplace(actionExport,
                {
                    REACT_ACTION_NAME: a,
                    REACT_ACTION_TYPE: a.toUpperCase()
                }
            );
        })
        .join('');

    return [
        separateActionTypes && actionTypesImports,
        !separateActionTypes && actionTypesExports,
        actionExports,
        ''
    ].filter((e): any => e).join('\n');
};

export const ts = (): string => {
    return '';
};
