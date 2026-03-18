# Frontend Component Guidelines: Shadcn UI

The frontend of this project uses the **shadcn/ui** component library.

Whenever you are asked to create, modify, or implement a UI component, you MUST adhere to the following workflow:

1. **Research First**: 
   Before writing any code or proposing a design, look up the component's documentation on the shadcn/ui website (e.g., `https://www.shadcn.com.cn/docs/components/[component-name]` or `https://ui.shadcn.com/docs/components/[component-name]`).

2. **Analyze the Shadcn Implementation**: 
   Understand the default API, props, standard variants, and underlying structure (which is usually based on Radix UI primitives) that shadcn uses for this component.

3. **Evaluate and Adapt**: 
   - Judge whether the component should strictly follow the standard shadcn implementation or if it needs to be heavily customized.
   - Analyze how to combine the user's specific design system requirements (e.g., custom sizes like "mini/small/medium/large", custom spacing, specific Figma tokens, custom colors) with the shadcn base API.
   - Do NOT blindly rebuild an accessible component from scratch if a shadcn equivalent exists. Instead, use the shadcn base and modify its variants and styling to fit the custom design system requirements requested by the user.

## Figma Variables Export Rules

When generating or modifying files intended for Figma Variables import, you MUST follow Figma's official Variables import format:

1. Use the Design Tokens Community Group (DTCG) JSON structure with explicit `$type` and `$value`.
2. For this project's Figma Variables export, only include token types that are clearly supported by Figma import for the intended collection. Do not mix in unsupported or risky values just because they exist in the broader token source.
3. For color variables, prefer the official DTCG color object format used in Figma's documentation, and use standard `{token.path}` alias syntax when a semantic token should reference another token.
4. When exporting multiple modes like Light and Dark, every token that should import into the same collection must exist in every mode file with the same normalized name and the same `$type`.
5. Keep Figma Variables export files separate from broader app token exports when necessary. A general token file may contain more data, but the Figma import files must stay conservative and import-safe.
6. After changing color tokens or semantic color mappings, regenerate the Figma Variables files with `npm run figma:variables`.

Reference:
- https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma
- https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables
