<template>
    <div class="bg-white px-3 py-6 lg:p-6 rounded-lg shadow-[0px_2px_20px_0px_#0000000D]">
        <div class="flex flex-wrap justify-between w-full gap-2 md:gap-5">
            <CommonCustomChartHeading iconUrl="/assets/Icons/Item.svg" heading="Findings Report" />
            <div class="inline-block">
                <div class="border border-1 border-iron pb-[6px] pt-1 px-2 sm:py-[6px] sm:px-3 rounded">
                    <!-- Custom dropdown component -->
                    <CommonCustomDropdown dropdownPosition="right-[-15px]" :hiddenIcon="true" dropdownText="Diary"
                        textChart="Diary" />
                </div>
            </div>
        </div>
        <FindingsReportLineGraph />
        <div>
            <CommonCustomChartProgressBar />
        </div>
    </div>
</template>
