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
