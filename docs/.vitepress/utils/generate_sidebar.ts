import {DefaultTheme} from "vitepress";
import {generateOther} from "./sidebar/generate_other";
import {generateSpringBoot4} from "./sidebar/generate_springboot4";
import {generateFlutter} from "./sidebar/generate_flutter";

/**
 * @description 生成侧边栏 文档地址 https://vitepress.dev/zh/reference/default-theme-config#sidebar
 * @author wen7.online
 */
export const generateSidebar = (): DefaultTheme.Sidebar => {
    return {
        // ...generateFlutter(),
        ...generateSpringBoot4(),
        ...generateOther(),
    }
}