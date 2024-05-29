import { FC } from 'react'
import { IPropsCalendar } from '../../../common/types/singlePage'
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const Calendar: FC<IPropsCalendar> = (props: IPropsCalendar): JSX.Element => {
    const {
        editableDateInputs = false,
        locale,
        onChange,
        ranges,
        scroll = false,
        showDateDisplay = false,
        showMonthAndYearPickers = true,
        showPreview = false
    } = props
    return (
        <DateRange
            {...props}
            locale={locale}
            ranges={ranges}
            onChange={onChange}
            editableDateInputs={editableDateInputs}
            scroll={{ enabled: scroll }}
            showDateDisplay={showDateDisplay}
            showMonthAndYearPickers={showMonthAndYearPickers}
            showPreview={showPreview}
        />
    )
}

export default Calendar