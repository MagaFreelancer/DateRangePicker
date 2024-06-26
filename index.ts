import { addDays, format, subDays } from "date-fns";
import { enUS } from "date-fns/locale";
import { useCallback, useState } from "react";
import type { FC } from "react";
import type { RangeKeyDict } from "react-date-range";
import type { Range } from "react-date-range";
import { DateRangePicker } from "uikit";
import type { TCalendarValue } from "uikit";

export const DatePickerPage: FC = () => {
  // Calendar
  const [valueCalendar, setValueCalendar] = useState<TCalendarValue>(new Date());
  const formattedValueCalendar =
    valueCalendar && !Array.isArray(valueCalendar)
      ? format(valueCalendar, "dd.MM.yyyy", { locale: enUS })
      : "";

  // DatePicker
  const [valueDatePicker, setValueDatePicker] = useState<Date | undefined>(new Date());
  const formattedValueDatePicker = valueDatePicker
    ? format(valueDatePicker, "dd.MM.yyyy", { locale: enUS })
    : "";

  // DatePicker range
  const [valueDateRangePicker, setValueDateRangePicker] = useState<Range[] | undefined>([
    {
      startDate: subDays(new Date(), 7),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);
  const formattedValueDateRangePickerStartDate = valueDateRangePicker?.[0].startDate
    ? format(valueDateRangePicker[0].startDate, "dd.MM.yyyy", { locale: enUS })
    : "";
  const formattedValueDateRangePickerEndDate = valueDateRangePicker?.[0].endDate
    ? format(valueDateRangePicker[0].endDate, "dd.MM.yyyy", { locale: enUS })
    : "";

  const handleChangeValueDateRangePicker = useCallback((ranges: RangeKeyDict) => {
    const { selection } = ranges;
    setValueDateRangePicker([selection]);
  }, []);

  return (
    <section>
      <DateRangePicker
        editableDateInputs={true}
        locale={enUS}
        minDate={addDays(new Date(), -7)}
        maxDate={addDays(new Date(), 0)}
        onChange={handleChangeValueDateRangePicker}
        ranges={valueDateRangePicker}
        showDateDisplay={true}
        showPreview={true}
      />
      <pre>{JSON.stringify(formattedValueDateRangePickerStartDate, null, 2)}</pre>-{" "}
      <pre>{JSON.stringify(formattedValueDateRangePickerEndDate, null, 2)}</pre>
    </section>
  );
};