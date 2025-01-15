<script>
//@ts-nocheck
import {NavBtn2} from 'sveltetools_bils/src/cmp';
import {Icons} from '../../../util';
export let addRow;
export let addCol;
export let delRow;
export let delCol;
export let setshowShowAt;
export let setBdr;
</script>

<div class='flex justify-center   border-2 border-white p-1 text-xs w-4/12 bg-gray-700 '>
  <NavBtn2 title='Add Row' icon={Icons.BULB} clk={addRow} />
  <NavBtn2 title='Add Col' icon={Icons.BULB}  clk={addCol} />
  <NavBtn2 title='Del Row' icon={Icons.DEL} clk={delRow} />
  <NavBtn2 title='Del Col' icon={Icons.DEL} clk={delCol} />
  <NavBtn2 title='Show Borders' icon={Icons.HIDE} clk={setBdr} />
  <NavBtn2 title='Show ShowAt' icon={Icons.TV} clk={setshowShowAt} />

</div>
