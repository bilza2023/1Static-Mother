import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-BKqIka7n.js';
import './SvelteToast.svelte_svelte_type_style_lang-B7k2UuT-.js';
import './client-CQ5E_ugM.js';
import { I as Icons } from './Logo-0iBFVDuR.js';
import { C as Centre } from './Centre-DWPd9PDr.js';
import { H as HdgWithIcon } from './HdgWithIcon-BBNXdczv.js';
import { P as PageWrapper } from './PageWrapper-Qm25aaVx.js';
import { N as Nav } from './Nav-Cd2CQcnk.js';
import './index-ClERLwKE.js';
import './exports-DuWZopOC.js';

const PaymentOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex justify-center gap-1"><button${add_attribute(
    "class",
    `flex  justify-center border-2 border-white rounded-md p-2 m-2 w-4/12 text-center hover:bg-gray-600 
            ${"bg-green-900 text-white text-lg"}`,
    0
  )} style="">Easy Paisa</button> <button${add_attribute(
    "class",
    `flex  justify-center border-2 border-white rounded-md p-2 m-2 w-4/12 text-center hover:bg-gray-600 
            ${"text-gray-400"}`,
    0
  )}>Askari Bank</button></div> <br> <br> <div class="flex gap-4 mx-auto w-full ">${`<div class="flex flex-col justify-center items-center border-2 border-white rounded-lg p-2 m-2 w-4/12 bg-green-900 gap-4" data-svelte-h="svelte-5ln03g"><h2 class="bg-green-950 border-2 border-white rounded-md p-2">Deposit Funds in</h2> <h2>Easy Paisa Account Number</h2> <h2>03339724440</h2></div>`} ${``} <div class="flex flex-col justify-center items-center border-2 border-white rounded-lg p-2 m-2 w-4/12 bg-green-900 text-center gap-4" data-svelte-h="svelte-1uzv46q"><h2 class="bg-green-950 border-2 border-white rounded-md p-2">WhatsApp Us at 03339724440</h2> <p>1: Your registered  email</p> <p>2: Course Code for which payment was made <span class="text-xs">for example fbise9math,fbise10math</span></p> <h3>3: Screen shot of Payment Reciept</h3></div> <div class="flex flex-col justify-center items-center border-2 border-white rounded-lg p-2 m-2 w-4/12 bg-green-900 gap-4" data-svelte-h="svelte-15o65tf"><h2 class="bg-green-950 border-2 border-white rounded-md p-2">Your Account will be updated</h2> <h2>in</h2> <h2>6 to 8</h2> <h2>Working hours</h2></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${validate_component(PageWrapper, "PageWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Centre, "Centre").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(HdgWithIcon, "HdgWithIcon").$$render(
            $$result,
            {
              bgColor: "bg-stone-600",
              icon: Icons.BOOKS
            },
            {},
            {
              default: () => {
                return `Payment`;
              }
            }
          )}`;
        }
      })} ${validate_component(PaymentOptions, "PaymentOptions").$$render($$result, {}, {}, {})} <br> <br> <br> <br> <br> <br> <br> <br>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Dm6QUl_L.js.map
