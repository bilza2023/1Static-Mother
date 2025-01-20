<script>
    //@ts-nocheck
    import SheetItemsDd from "./SheetItemsDD.svelte";
    export let extra;

    function handleSheetChange(event) {
        extra.sheet = event.target.value;
        if (extra.sheet === 'students') {
            extra.sheetItem = "student_w_tablet";
        }
        if (extra.sheet === 'figs') {
            extra.sheetItem = "flower1";
        }
        if (extra.sheet === 'alphabets') {
            extra.sheetItem = "A";
        }
        if (extra.sheet === 'people') {
            extra.sheetItem = "man_tblt_stndg";
        }
    }
</script>

<div class="flex flex-col w-full space-y-2">
    <div class="border-b border-gray-700">
        <div class="px-2 text-[10px] text-yellow-200 text-left">Sheet</div>
        <div class="border border-gray-700 px-2 py-1">
            <select
                class="bg-gray-900 text-yellow-200 text-[10px] rounded w-full focus:outline-none focus:ring focus:ring-yellow-400"
                on:change={handleSheetChange}
                value={extra.sheet}
            >
                <option value="students">Students</option>
                <option value="alphabets">Alphabets</option>
                <option value="figs">Figs</option>
                <option value="people">People</option>
            </select>
        </div>
    </div>

    <div class="border-b border-gray-700">
        <div class="px-2 text-[10px] text-yellow-200 text-left">S-Items</div>
        <div class="border border-gray-700 px-2 py-1">
            <select
                class="bg-gray-900 text-yellow-200 text-[10px] rounded w-full focus:outline-none focus:ring focus:ring-yellow-400"
                bind:value={extra.sheetItem}
            >
                <SheetItemsDd sheet={extra.sheet} sheetItem={extra.sheetItem} />
            </select>
        </div>
    </div>
</div>
