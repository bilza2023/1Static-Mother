import { c as create_ssr_component, d as add_attribute, b as escape } from './ssr-BKqIka7n.js';

const BtnWIconSm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "" } = $$props;
  let { bgColor = "bg-blue-800" } = $$props;
  let { clk = () => {
  } } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.clk === void 0 && $$bindings.clk && clk !== void 0)
    $$bindings.clk(clk);
  return `<button${add_attribute("class", `${bgColor} p-2 m-2 rounded-md px-8 hover:bg-gray-500 active:bg-gray-200`, 0)}>${escape(icon)} 
${slots.default ? slots.default({}) : ``}</button>`;
});
async function ajaxPost(url, payload) {
  try {
    const token = localStorage.getItem("token");
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });
    return resp;
  } catch (error) {
    return error;
  }
}
const FormElm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { borderColor = "border-white" } = $$props;
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  return `<div${add_attribute("class", `w-full border-2 ${borderColor} rounded-md`, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});

export { BtnWIconSm as B, FormElm as F, ajaxPost as a };
//# sourceMappingURL=FormElm-BH-gVKcm.js.map
