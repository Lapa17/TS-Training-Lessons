export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
    type: typeof ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE
    payload:{   amountOfBYN: string
                amountOfCurrency: string
            }
};

export const setCurrencyAmount = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => ({type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, payload:{amountOfBYN, amountOfCurrency}
} );

export type ChangeAction = {
    type: typeof ACTIONS_TYPE.CHANGE_CHANGE_ACTION
    payload:{isBuying: boolean}
};

export const setAction = (isBuying: boolean): ChangeAction => ({type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION, payload:{isBuying}
});

export type ChangeCurrentCurrencyType = {
    type:typeof ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
    payload:{currentCurrency: string}
};

export const changeCurrency = (currentCurrency: string): ChangeCurrentCurrencyType => ({type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY, payload:{currentCurrency}
});

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;