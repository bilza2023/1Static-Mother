import { c as create_ssr_component, d as add_attribute, b as escape } from './ssr-BKqIka7n.js';

const HdgWithIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "📜" } = $$props;
  let { bgColor = "bg-blue-800" } = $$props;
  let { size = 2 } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div${add_attribute("class", `inline-flex  justify-center ${bgColor} text-white rounded-md p-2  px-8 m-2`, 0)}><span${add_attribute("class", `text-${size}xl`, 0)}>${escape(icon)}</span> 
    <span${add_attribute("class", `text-${size}xl`, 0)}>${slots.default ? slots.default({}) : ``}</span></div>`;
});

export { HdgWithIcon as H };
//# sourceMappingURL=HdgWithIcon-BBNXdczv.js.map
