declare namespace _default {
    const title: string;
    const display: string;
    const type: string;
    const name: string;
    const components: ({
        hideLabel: boolean;
        clearOnHide: boolean;
        conditional: {
            eq: string;
            when: null;
            show: string;
        };
        theme: string;
        key: string;
        input: boolean;
        components: ({
            hideLabel: boolean;
            type: string;
            conditional: {
                eq: string;
                when: null;
                show: string;
            };
            validate: {
                customPrivate: boolean;
                custom: string;
                pattern: string;
                maxLength: string;
                minLength: string;
                required: boolean;
                multiple?: undefined;
                integer?: undefined;
                step?: undefined;
                max?: undefined;
                min?: undefined;
            };
            persistent: boolean;
            unique: boolean;
            protected: boolean;
            defaultValue: string;
            multiple: boolean;
            suffix: string;
            prefix: string;
            placeholder: string;
            key: string;
            label: string;
            inputMask: string;
            inputType: string;
            tableView: boolean;
            input: boolean;
            hidden: boolean;
            clearOnHide: boolean;
            autofocus: boolean;
            spellcheck: boolean;
            labelPosition?: undefined;
            tags?: undefined;
            properties?: undefined;
        } | {
            hideLabel: boolean;
            conditional: {
                eq: string;
                when: null;
                show: string;
            };
            type: string;
            validate: {
                custom: string;
                multiple: string;
                integer: string;
                step: string;
                max: string;
                min: string;
                required: boolean;
                customPrivate?: undefined;
                pattern?: undefined;
                maxLength?: undefined;
                minLength?: undefined;
            };
            persistent: boolean;
            protected: boolean;
            defaultValue: number;
            suffix: string;
            prefix: string;
            placeholder: string;
            key: string;
            label: string;
            inputType: string;
            tableView: boolean;
            input: boolean;
            hidden: boolean;
            clearOnHide: boolean;
            autofocus: boolean;
            labelPosition: string;
            tags: never[];
            properties: {};
            unique?: undefined;
            multiple?: undefined;
            inputMask?: undefined;
            spellcheck?: undefined;
        })[];
        title: string;
        type: string;
        tableView: boolean;
        properties?: undefined;
        tags?: undefined;
        breadcrumb?: undefined;
        disableOnInvalid?: undefined;
        action?: undefined;
        block?: undefined;
        rightIcon?: undefined;
        leftIcon?: undefined;
        size?: undefined;
        label?: undefined;
    } | {
        hideLabel: boolean;
        tableView: boolean;
        clearOnHide: boolean;
        theme: string;
        key: string;
        input: boolean;
        components: ({
            hideLabel: boolean;
            clearOnHide: boolean;
            hidden: boolean;
            type: string;
            conditional: {
                eq: string;
                when: null;
                show: string;
            };
            validate: {
                customPrivate: boolean;
                custom: string;
                pattern: string;
                maxLength: string;
                minLength: string;
                required: boolean;
            };
            persistent: boolean;
            unique: boolean;
            protected: boolean;
            defaultValue: string;
            multiple: boolean;
            suffix: string;
            prefix: string;
            placeholder: string;
            key: string;
            label: string;
            inputMask: string;
            inputType: string;
            tableView: boolean;
            input: boolean;
            autofocus: boolean;
            spellcheck: boolean;
            labelPosition: string;
            inputFormat: string;
            tags: never[];
            properties: {};
            data?: undefined;
            dataSrc?: undefined;
            valueProperty?: undefined;
            refreshOn?: undefined;
            filter?: undefined;
            authenticate?: undefined;
            template?: undefined;
            lazyLoad?: undefined;
            widget?: undefined;
            searchField?: undefined;
            components?: undefined;
            legend?: undefined;
        } | {
            input: boolean;
            tableView: boolean;
            label: string;
            key: string;
            placeholder: string;
            data: {
                values: {
                    value: string;
                    label: string;
                }[];
                json: string;
                url: string;
                resource: string;
                custom: string;
                headers: {
                    value: string;
                    key: string;
                }[];
            };
            dataSrc: string;
            valueProperty: string;
            defaultValue: string;
            refreshOn: string;
            filter: string;
            authenticate: boolean;
            template: string;
            multiple: boolean;
            protected: boolean;
            unique: boolean;
            persistent: boolean;
            hidden: boolean;
            clearOnHide: boolean;
            validate: {
                required: boolean;
                customPrivate?: undefined;
                pattern?: undefined;
                maxLength?: undefined;
                minLength?: undefined;
            };
            type: string;
            lazyLoad: boolean;
            widget: string;
            hideLabel: boolean;
            labelPosition: string;
            tags: never[];
            conditional: {
                show: string;
                when: null;
                eq: string;
            };
            properties: {};
            searchField: string;
            autofocus: boolean;
            suffix?: undefined;
            prefix?: undefined;
            inputMask?: undefined;
            inputType?: undefined;
            spellcheck?: undefined;
            inputFormat?: undefined;
            components?: undefined;
            legend?: undefined;
        } | {
            hideLabel: boolean;
            clearOnHide: boolean;
            conditional: {
                eq: string;
                when: null;
                show: string;
            };
            type: string;
            components: {
                hideLabel: boolean;
                clearOnHide: boolean;
                hidden: boolean;
                type: string;
                conditional: {
                    eq: string;
                    when: null;
                    show: string;
                };
                validate: {
                    customPrivate: boolean;
                    custom: string;
                    pattern: string;
                    maxLength: string;
                    minLength: string;
                    required: boolean;
                };
                persistent: boolean;
                unique: boolean;
                protected: boolean;
                defaultValue: string;
                multiple: boolean;
                suffix: string;
                prefix: string;
                placeholder: string;
                key: string;
                label: string;
                inputMask: string;
                inputType: string;
                tableView: boolean;
                input: boolean;
                autofocus: boolean;
                spellcheck: boolean;
            }[];
            legend: string;
            tableView: boolean;
            input: boolean;
            hidden?: undefined;
            validate?: undefined;
            persistent?: undefined;
            unique?: undefined;
            protected?: undefined;
            defaultValue?: undefined;
            multiple?: undefined;
            suffix?: undefined;
            prefix?: undefined;
            placeholder?: undefined;
            key?: undefined;
            label?: undefined;
            inputMask?: undefined;
            inputType?: undefined;
            autofocus?: undefined;
            spellcheck?: undefined;
            labelPosition?: undefined;
            inputFormat?: undefined;
            tags?: undefined;
            properties?: undefined;
            data?: undefined;
            dataSrc?: undefined;
            valueProperty?: undefined;
            refreshOn?: undefined;
            filter?: undefined;
            authenticate?: undefined;
            template?: undefined;
            lazyLoad?: undefined;
            widget?: undefined;
            searchField?: undefined;
        })[];
        title: string;
        type: string;
        conditional?: undefined;
        properties?: undefined;
        tags?: undefined;
        breadcrumb?: undefined;
        disableOnInvalid?: undefined;
        action?: undefined;
        block?: undefined;
        rightIcon?: undefined;
        leftIcon?: undefined;
        size?: undefined;
        label?: undefined;
    } | {
        properties: {
            '': string;
        };
        conditional: {
            eq: string;
            when: null;
            show: string;
        };
        tags: never[];
        hideLabel: boolean;
        breadcrumb: string;
        type: string;
        components: ({
            autofocus: boolean;
            input: boolean;
            tableView: boolean;
            inputType: string;
            inputMask: string;
            label: string;
            key: string;
            placeholder: string;
            prefix: string;
            suffix: string;
            multiple: boolean;
            defaultValue: string;
            protected: boolean;
            unique: boolean;
            persistent: boolean;
            hidden: boolean;
            clearOnHide: boolean;
            spellcheck: boolean;
            validate: {
                required: boolean;
                minLength: string;
                maxLength: string;
                pattern: string;
                custom: string;
                customPrivate: boolean;
            };
            conditional: {
                show: string;
                when: null;
                eq: string;
            };
            type: string;
            labelPosition: string;
            inputFormat: string;
            tags: never[];
            properties: {
                ''?: undefined;
            };
            hideLabel?: undefined;
            components?: undefined;
            tree?: undefined;
            data?: undefined;
            widget?: undefined;
            dataSrc?: undefined;
            valueProperty?: undefined;
            refreshOn?: undefined;
            filter?: undefined;
            authenticate?: undefined;
            template?: undefined;
        } | {
            properties: {
                '': string;
            };
            conditional: {
                eq: string;
                when: null;
                show: string;
            };
            tags: never[];
            hideLabel: boolean;
            type: string;
            clearOnHide: boolean;
            hidden: boolean;
            persistent: boolean;
            protected: boolean;
            key: string;
            label: string;
            tableView: boolean;
            components: {
                properties: {
                    '': string;
                };
                tags: never[];
                labelPosition: string;
                hideLabel: boolean;
                type: string;
                conditional: {
                    eq: string;
                    when: null;
                    show: string;
                };
                validate: {
                    customPrivate: boolean;
                    custom: string;
                    pattern: string;
                    maxLength: string;
                    minLength: string;
                    required: boolean;
                };
                clearOnHide: boolean;
                hidden: boolean;
                persistent: boolean;
                unique: boolean;
                protected: boolean;
                defaultValue: string;
                multiple: boolean;
                suffix: string;
                prefix: string;
                placeholder: string;
                key: string;
                label: string;
                inputMask: string;
                inputType: string;
                tableView: boolean;
                input: boolean;
                autofocus: boolean;
                spellcheck: boolean;
                inDataGrid: boolean;
            }[];
            tree: boolean;
            input: boolean;
            autofocus: boolean;
            inputType?: undefined;
            inputMask?: undefined;
            placeholder?: undefined;
            prefix?: undefined;
            suffix?: undefined;
            multiple?: undefined;
            defaultValue?: undefined;
            unique?: undefined;
            spellcheck?: undefined;
            validate?: undefined;
            labelPosition?: undefined;
            inputFormat?: undefined;
            data?: undefined;
            widget?: undefined;
            dataSrc?: undefined;
            valueProperty?: undefined;
            refreshOn?: undefined;
            filter?: undefined;
            authenticate?: undefined;
            template?: undefined;
        } | {
            autofocus: boolean;
            input: boolean;
            tableView: boolean;
            label: string;
            key: string;
            placeholder: string;
            data: {
                values: {
                    value: string;
                    label: string;
                }[];
                json: string;
                url: string;
                resource: string;
                custom: string;
            };
            widget: string;
            dataSrc: string;
            valueProperty: string;
            defaultValue: string;
            refreshOn: string;
            filter: string;
            authenticate: boolean;
            template: string;
            multiple: boolean;
            protected: boolean;
            unique: boolean;
            persistent: boolean;
            hidden: boolean;
            clearOnHide: boolean;
            validate: {
                required: boolean;
                minLength?: undefined;
                maxLength?: undefined;
                pattern?: undefined;
                customPrivate?: undefined;
            };
            type: string;
            labelPosition: string;
            tags: never[];
            conditional: {
                show: string;
                when: null;
                eq: string;
            };
            properties: {
                ''?: undefined;
            };
            inputType?: undefined;
            inputMask?: undefined;
            prefix?: undefined;
            suffix?: undefined;
            spellcheck?: undefined;
            inputFormat?: undefined;
            hideLabel?: undefined;
            components?: undefined;
            tree?: undefined;
        })[];
        tableView: boolean;
        theme: string;
        title: string;
        input: boolean;
        key: string;
        clearOnHide: boolean;
        disableOnInvalid?: undefined;
        action?: undefined;
        block?: undefined;
        rightIcon?: undefined;
        leftIcon?: undefined;
        size?: undefined;
        label?: undefined;
    } | {
        hideLabel: boolean;
        clearOnHide: boolean;
        conditional: {
            eq: string;
            when: null;
            show: string;
        };
        theme: string;
        key: string;
        input: boolean;
        components: ({
            hideLabel: boolean;
            type: string;
            conditional: {
                eq: string;
                when: null;
                show: string;
            };
            validate: {
                customPrivate: boolean;
                custom: string;
                pattern: string;
                maxLength: string;
                minLength: string;
                required: boolean;
            };
            persistent: boolean;
            unique: boolean;
            protected: boolean;
            defaultValue: string;
            multiple: boolean;
            suffix: string;
            prefix: string;
            placeholder: string;
            key: string;
            label: string;
            inputMask: string;
            inputType: string;
            tableView: boolean;
            input: boolean;
            hidden: boolean;
            clearOnHide: boolean;
            autofocus: boolean;
            spellcheck: boolean;
            dataGridLabel?: undefined;
            name?: undefined;
            value?: undefined;
            labelPosition?: undefined;
            tags?: undefined;
            properties?: undefined;
            footer?: undefined;
            width?: undefined;
            height?: undefined;
            penColor?: undefined;
            backgroundColor?: undefined;
            minWidth?: undefined;
            maxWidth?: undefined;
            lockKey?: undefined;
        } | {
            autofocus: boolean;
            input: boolean;
            inputType: string;
            tableView: boolean;
            label: string;
            dataGridLabel: boolean;
            key: string;
            defaultValue: boolean;
            protected: boolean;
            persistent: boolean;
            hidden: boolean;
            name: string;
            value: string;
            clearOnHide: boolean;
            validate: {
                required: boolean;
                customPrivate?: undefined;
                pattern?: undefined;
                maxLength?: undefined;
                minLength?: undefined;
            };
            type: string;
            labelPosition: string;
            hideLabel: boolean;
            tags: never[];
            conditional: {
                show: string;
                when: null;
                eq: string;
            };
            properties: {
                ''?: undefined;
            };
            unique?: undefined;
            multiple?: undefined;
            suffix?: undefined;
            prefix?: undefined;
            placeholder?: undefined;
            inputMask?: undefined;
            spellcheck?: undefined;
            footer?: undefined;
            width?: undefined;
            height?: undefined;
            penColor?: undefined;
            backgroundColor?: undefined;
            minWidth?: undefined;
            maxWidth?: undefined;
            lockKey?: undefined;
        } | {
            input: boolean;
            tableView: boolean;
            label: string;
            key: string;
            placeholder: string;
            footer: string;
            width: string;
            height: string;
            penColor: string;
            backgroundColor: string;
            minWidth: string;
            maxWidth: string;
            protected: boolean;
            persistent: boolean;
            hidden: boolean;
            clearOnHide: boolean;
            validate: {
                required: boolean;
                customPrivate?: undefined;
                pattern?: undefined;
                maxLength?: undefined;
                minLength?: undefined;
            };
            type: string;
            hideLabel: boolean;
            tags: never[];
            conditional: {
                show: string;
                when: null;
                eq: string;
            };
            properties: {
                '': string;
            };
            lockKey: boolean;
            unique?: undefined;
            defaultValue?: undefined;
            multiple?: undefined;
            suffix?: undefined;
            prefix?: undefined;
            inputMask?: undefined;
            inputType?: undefined;
            autofocus?: undefined;
            spellcheck?: undefined;
            dataGridLabel?: undefined;
            name?: undefined;
            value?: undefined;
            labelPosition?: undefined;
        })[];
        title: string;
        type: string;
        tableView: boolean;
        properties?: undefined;
        tags?: undefined;
        breadcrumb?: undefined;
        disableOnInvalid?: undefined;
        action?: undefined;
        block?: undefined;
        rightIcon?: undefined;
        leftIcon?: undefined;
        size?: undefined;
        label?: undefined;
    } | {
        hideLabel: boolean;
        type: string;
        theme: string;
        disableOnInvalid: boolean;
        action: string;
        block: boolean;
        rightIcon: string;
        leftIcon: string;
        size: string;
        key: string;
        tableView: boolean;
        label: string;
        input: boolean;
        clearOnHide?: undefined;
        conditional?: undefined;
        components?: undefined;
        title?: undefined;
        properties?: undefined;
        tags?: undefined;
        breadcrumb?: undefined;
    })[];
}
export default _default;
