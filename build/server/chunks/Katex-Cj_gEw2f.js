import { c as create_ssr_component, d as add_attribute } from './ssr-DE9ggXra.js';
import './katex-DO6cVBGF.js';

const Katex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { displayMode = false } = $$props;
  let output;
  let latex;
  if ($$props.displayMode === void 0 && $$bindings.displayMode && displayMode !== void 0)
    $$bindings.displayMode(displayMode);
  return ` <span style="display: none;"${add_attribute("this", latex, 0)}>${slots.default ? slots.default({}) : ``}</span>  <span${add_attribute("this", output, 0)}></span>`;
});

export { Katex as K };
//# sourceMappingURL=Katex-Cj_gEw2f.js.map
