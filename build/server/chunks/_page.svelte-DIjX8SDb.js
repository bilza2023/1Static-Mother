import { c as create_ssr_component, v as validate_component, b as escape, e as each, d as add_attribute } from './ssr-BKqIka7n.js';
import { t as toast } from './SvelteToast.svelte_svelte_type_style_lang-B7k2UuT-.js';
import './client-CQ5E_ugM.js';
import { H as HdgWithIcon } from './HdgWithIcon-BBNXdczv.js';
import { P as PageWrapper } from './PageWrapper-Qm25aaVx.js';
import { N as Nav } from './Nav-Cd2CQcnk.js';
import { det, transpose } from 'mathjs';
import './index-ClERLwKE.js';
import './exports-DuWZopOC.js';
import './Logo-0iBFVDuR.js';

const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${data.length > 0 ? `<div class="flex flex-col justify-center items-center m-1 p-1 rounded-md bg-blue-900">${each(data, (row, rowIndex) => {
    return `<div class="flex justify-center gap-1">${each(row, (cell, colIndex) => {
      return `<div class="flex flex-col justify-center items-center"><input class="bg-gray-900 text-white m-1 p-1 rounded-md w-8/12" type="text"${add_attribute("value", cell, 0)}> </div>`;
    })} </div>`;
  })}</div>` : ``}`;
});
const VerticalBtnsTbl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { addRow } = $$props;
  let { delRow } = $$props;
  let { addCol } = $$props;
  let { delCol } = $$props;
  if ($$props.addRow === void 0 && $$bindings.addRow && addRow !== void 0)
    $$bindings.addRow(addRow);
  if ($$props.delRow === void 0 && $$bindings.delRow && delRow !== void 0)
    $$bindings.delRow(delRow);
  if ($$props.addCol === void 0 && $$bindings.addCol && addCol !== void 0)
    $$bindings.addCol(addCol);
  if ($$props.delCol === void 0 && $$bindings.delCol && delCol !== void 0)
    $$bindings.delCol(delCol);
  return `<div class="flex flex-col bg-zinc-900 rounded-md p-2 text-white "><div class="flex justify-center"><div class="w-4/12 text-xs p-1 m-1 bg-gray-700" data-svelte-h="svelte-4pvqs4">Row</div> <button class="w-4/12 text-xs p-1 m-1 bg-gray-700" data-svelte-h="svelte-1jocfve">+</button> <button class="w-4/12 text-xs p-1 m-1 bg-red-900" data-svelte-h="svelte-1fd5aw0">-</button></div> <div class="flex justify-center"><div class="w-4/12 text-xs p-1 m-1 bg-gray-700" data-svelte-h="svelte-174glt6">Col</div> <button class="w-4/12 text-xs p-1 m-1 bg-gray-700" data-svelte-h="svelte-keqxo">+</button> <button class="w-4/12 text-xs p-1 m-1 bg-red-900" data-svelte-h="svelte-19v9vka">-</button></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [[4, 1], [3, 0]];
  let determinant = 0;
  const addRow = () => {
    if (data.length >= 3) {
      toast.push("No more than 3 by 3 matrix allowed");
      return;
    }
    const newRow = Array(data[0].length).fill("");
    data.push(newRow);
    data = data;
  };
  const addCol = () => {
    debugger;
    if (data[0].length >= 3) {
      toast.push("No more than 3 by 3 matrix allowed");
      return;
    }
    data.forEach((row) => row.push(""));
    data = data;
  };
  const delRow = () => {
    if (data.length > 0) {
      data.pop();
      data = data;
    }
  };
  const delCol = () => {
    if (data.length > 0 && data[0].length > 0) {
      data.forEach((row) => row.pop());
      data = data;
    }
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        try {
          determinant = det(data);
        } catch (e) {
          determinant = "May Not be a Square Matrix";
        }
      }
    }
    $$rendered = `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}  ${validate_component(PageWrapper, "PageWrapper").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="flex justify-center">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, {}, {}, {
          default: () => {
            return `Matrix Calculator`;
          }
        })}</div> <div class="flex justify-center items-center rounded-md bg-blue-300">${validate_component(Table, "Table").$$render(
          $$result,
          { data },
          {
            data: ($$value) => {
              data = $$value;
              $$settled = false;
            }
          },
          {}
        )} <div class="">${validate_component(VerticalBtnsTbl, "VerticalBtnsTbl").$$render($$result, { delRow, delCol, addRow, addCol }, {}, {})}</div></div> <div class="flex justify-center">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, {}, {}, {
          default: () => {
            return `Results`;
          }
        })}</div> ${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, { bgColor: "bg-green-900" }, {}, {
          default: () => {
            return `Determinant : ${escape(typeof determinant == "number" ? determinant : "Not a Square Matrix")}`;
          }
        })} ${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, { bgColor: "bg-green-900" }, {}, {
          default: () => {
            return `Transpose`;
          }
        })} <div class="flex justify-center "><div class="w-4/12">${validate_component(Table, "Table").$$render($$result, { data: transpose(data) }, {}, {})}</div></div>   <br> <br> <br> <br> <br>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DIjX8SDb.js.map
