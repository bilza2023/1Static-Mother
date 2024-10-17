import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-BKqIka7n.js';
import { a as ajaxPost, F as FormElm, B as BtnWIconSm } from './FormElm-BH-gVKcm.js';
import { t as toast } from './SvelteToast.svelte_svelte_type_style_lang-B7k2UuT-.js';
import { g as goto } from './client-CQ5E_ugM.js';
import { I as Icons } from './Logo-0iBFVDuR.js';
import { H as HdgWithIcon } from './HdgWithIcon-BBNXdczv.js';
import { P as PageWrapper } from './PageWrapper-Qm25aaVx.js';
import { A as API_URL } from './config-C86t3E_A.js';
import { N as Nav } from './Nav-Cd2CQcnk.js';
import './index-ClERLwKE.js';
import './exports-DuWZopOC.js';

function validateString(str, min, max) {
  let errors = [];
  if (str.length < min) {
    errors.push(`The string length must be at least ${min} characters.`);
  }
  if (str.length > max) {
    errors.push(`The string length must be at most ${max} characters.`);
  }
  if (errors.length > 0) {
    return {
      status: "error",
      errors
    };
  }
  return {
    status: "ok"
  };
}
function validateEmail(email) {
  const errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Email address is invalid");
  }
  if (email.indexOf("@") === -1) {
    errors.push("Email address must contain @ symbol");
  }
  const domain = email.split("@")[1];
  if (!domain) {
    errors.push("Email address must contain domain name");
  }
  const domainRegex = /^[^\s@]+\.[^\s@]+$/;
  if (!domainRegex.test(domain)) {
    errors.push("Domain name is invalid");
  }
  if (errors.length > 0) {
    return { status: "error", errors };
  } else {
    return { status: "ok" };
  }
}
async function loginFn(email, password) {
  try {
    const emailError = validateEmail(email);
    if (emailError.status !== "ok") {
      toast.push("Not a valid email");
      return;
    }
    const passwordError = validateString(password, 6, 30);
    if (passwordError.status !== "ok") {
      toast.push("password must have 6 to 30 characters");
      return;
    }
    const response = await ajaxPost(`${API_URL}/login`, { email, password });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      goto("/");
    } else {
      const data = await response.json();
      if (data.errorcode == "AccountNotVerified") {
        goto("/verify");
      }
      toast.push(data.message);
    }
  } catch (err) {
    toast.push("failed to login");
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${validate_component(PageWrapper, "PageWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<br><br> <div class="flex justify-center w-full"><div class="w-10/12 ">${validate_component(FormElm, "FormElm").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="flex justify-center">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, { icon: Icons.KEY }, {}, {
            default: () => {
              return `Login`;
            }
          })}</div> <div class="flex justify-center pt-1 text-white" data-svelte-h="svelte-klynmt">Email</div> <div class="flex justify-center pt-1"><div class="w-6/12 text-center"><input type="email" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"${add_attribute("value", email, 0)}></div></div> <div class="flex justify-center pt-1 text-white" data-svelte-h="svelte-1by2qsq">Password</div> <div class="flex justify-center pt-1"><div class="w-6/12 text-center"><input type="password" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"${add_attribute("value", password, 0)}></div></div> <div class="flex justify-center" data-svelte-h="svelte-1h7bq5"><a href="/forgot_password" class="text-yellow-700 text-lg">forgot password</a></div> <div class="flex justify-center ">${validate_component(BtnWIconSm, "BtnWIconSm").$$render(
            $$result,
            {
              icons: Icons.SAVE,
              clk: () => loginFn(email, password)
            },
            {},
            {
              default: () => {
                return `Login`;
              }
            }
          )}</div>`;
        }
      })}</div></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BBpRqIOL.js.map
