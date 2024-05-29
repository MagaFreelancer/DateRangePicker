import { DateRangeProps, RangeKeyDict, Range } from 'react-date-range';

export type IPropsCalendar = {
    editableDateInputs?: boolean;
    locale?: Locale;
    onChange?: ((rangesByKey: RangeKeyDict) => void) | undefined;
    ranges?: Range[] | undefined
    scroll?: boolean;
    showDateDisplay?: boolean;
    showMonthAndYearPickers?: boolean
    showPreview?: boolean
} & DateRangeProps