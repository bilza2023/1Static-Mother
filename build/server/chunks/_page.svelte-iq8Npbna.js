import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-fIbI7xQ0.js';
import { a as ajaxPost, F as FormElm, B as BtnWIconSm, A as API_URL } from './FormElm-5N7tdxtk.js';
import { t as toast } from './SvelteToast.svelte_svelte_type_style_lang-ppxS5-uB.js';
import './client-3PNagXEF.js';
import { I as Icons } from './Logo-d4OkAfYa.js';
import { H as HdgWithIcon } from './HdgWithIcon-I1Wo2LR4.js';
import { P as PageWrapper } from './PageWrapper-a8Acya-U.js';
import { N as Nav } from './Nav-Xe1zUpHz.js';
import './index-4LUj-XhK.js';
import './exports-mq_1S73-.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  async function forgot_passwordFn() {
    const resp = await ajaxPost(`${API_URL}/auth/forgot_password`, { email });
    if (resp.ok) {
      toast.push("link has been send to your email");
    } else {
      const data = await resp.json();
      toast.push(data.message);
    }
  }
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${validate_component(PageWrapper, "PageWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<br><br> <div class="flex justify-center w-full"><div class="w-10/12 ">${validate_component(FormElm, "FormElm").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="flex justify-center">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, { icon: Icons.KEY }, {}, {
            default: () => {
              return `Forgot Password`;
            }
          })}</div> <div class="flex justify-center pt-1 text-white" data-svelte-h="svelte-klynmt">Email</div> <div class="flex justify-center pt-1"><div class="w-6/12 text-center"><input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" autocomplete="email" required${add_attribute("value", email, 0)}></div></div> <div class="flex justify-center text-gray-600" data-svelte-h="svelte-ec6b56"><h4>A link will be send to this email</h4></div> <div class="flex justify-center ">${validate_component(BtnWIconSm, "BtnWIconSm").$$render(
            $$result,
            {
              icons: Icons.SAVE,
              clk: forgot_passwordFn
            },
            {},
            {
              default: () => {
                return `Send Link`;
              }
            }
          )}</div>`;
        }
      })}</div></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-iq8Npbna.js.map
