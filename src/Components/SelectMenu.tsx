import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import './selectStyles.css';

export const currencyValues = ["AUD: Australian Dollar", "BRL: Brazilian Real", "BTC: Bitcoin", "CAD: Canadian Dollar",
        "EUR: Euro", "GBP: British Pound Sterling", "INR: Indian Rupee", "JPY: Japanese Yen", "RUB: Russian Ruble", "USD: United States Dollar",
        "ZAR: South African Rand"]

interface Props {
    placeHolder?: string
    selectedValue: string
    onSelect: (value: string) => void
}
const SelectMenu = (props: Props) => {
    return <Select.Root>
    <Select.Trigger className="SelectTrigger" aria-label="Currency">
      <Select.Value placeholder={props.placeHolder} />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.Viewport className="SelectViewport">
            {currencyValues.map(value => {
                return <Select.Item className={classnames('SelectItem')} value={value} onClick={() => props.onSelect(value)}>
                <Select.ItemText>{value}</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                    <CheckIcon />
                </Select.ItemIndicator>
            </Select.Item>
            })}
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
}

export default SelectMenu;