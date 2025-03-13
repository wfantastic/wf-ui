import { makeInstaller } from "@wf-ui/utils";
import components from "./components";
import '@wf-ui/theme/index.css'
const installer = makeInstaller(components);

export * from "@wf-ui/components";
export default installer;

//使用者在使用这个包的时候可以以Vue的Plugin的形式使用这个包，这样就可以直接使用这个包的组件了。
//这个包的组件是通过withInstall函数包装过的，所以可以直接使用Vue.use()来安装这个包。