import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-BKqIka7n.js';
import './SvelteToast.svelte_svelte_type_style_lang-B7k2UuT-.js';
import './client-CQ5E_ugM.js';
import { H as HdgWithIcon } from './HdgWithIcon-BBNXdczv.js';
import './index-ClERLwKE.js';
import './exports-DuWZopOC.js';

const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgColor = "bg-gray-800" } = $$props;
  let { textColor = "text-white" } = $$props;
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  return `<div${add_attribute("class", `${bgColor} ${textColor} text-lg p-1 m-1 mb-2 mx-4`, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-gray-800 p-2 text-white min-h-screen w-full">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, {}, {}, {
    default: () => {
      return `Dockers Basics`;
    }
  })} ${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Docker is a containerization platform that simplifies the process of developing, deploying, and running applications. It allows developers to package their applications and all their dependencies into a standardized unit called a container. These containers are isolated from each other and from the underlying infrastructure, making them portable and consistent across different environments. Docker uses container technology to virtualize the operating system, enabling applications to run in a lightweight and efficient manner.`;
    }
  })} ${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `One of Docker&#39;s key benefits is its ability to streamline the development and deployment workflows. Developers can create containers that include everything their application needs to run, such as libraries, dependencies, and configuration settings. These containers can then be easily shared with team members or deployed to production environments, ensuring consistency and reducing compatibility issues. Docker also provides tools for managing and orchestrating containers at scale, making it a popular choice for building and deploying modern, cloud-native applications.`;
    }
  })} ${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, {}, {}, {
    default: () => {
      return `Here is a typical Docker File`;
    }
  })} <pre class="flex justify-center p-2 m-2" data-svelte-h="svelte-18285na"><code class="bg-gray-100 text-gray-800 text-lg rounded-md inline-block w-full">

        FROM node:21.6.2 AS build
        WORKDIR /app
        COPY package.json .
        COPY package-lock.json ./
        RUN npm install 
        COPY . ./
        RUN npm run build 
        EXPOSE 3000
        CMD [&quot;node&quot;, &quot;./build/index.js&quot;]

</code>
</pre> ${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, {}, {}, {
    default: () => {
      return `Docker Build Command`;
    }
  })} <p data-svelte-h="svelte-1dxmsgd">The dot at the end is important.</p> <code class="bg-gray-100 text-gray-800 px-2 py-1 rounded-md inline-block" data-svelte-h="svelte-1pdnlwz">sudo docker build -t docker_username/image_name:tag .</code> ${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, {}, {}, {
    default: () => {
      return `Docker Push`;
    }
  })} <p data-svelte-h="svelte-gbems7"><code class="bg-gray-100 text-gray-800 px-2 py-1 rounded-md inline-block">sudo docker push docker_username/image_name:tag</code></p> ${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, {}, {}, {
    default: () => {
      return `Docker Pull`;
    }
  })} <p data-svelte-h="svelte-c86496"><code class="bg-gray-100 text-gray-800 px-2 py-1 rounded-md inline-block">sudo docker pull docker_username/image_name:tag</code></p> ${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, {}, {}, {
    default: () => {
      return `Docker Pull`;
    }
  })} <p data-svelte-h="svelte-85tite"><code class="bg-gray-100 text-gray-800 px-2 py-1 rounded-md inline-block">sudo docker run -d -p 8080:80 --name container_name image_name:tag</code></p> <br> <br> <br> <br> <br> <br> <br> <br> <br></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BfCfHDbi.js.map
