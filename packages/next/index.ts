import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "@miminaltech/eslint-react";

export const configs = [...reactPlugin, nextPlugin.configs.recommended];
