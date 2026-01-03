---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

**🚨 MANDATORY FIRST STEP - READ THIS BEFORE ANY UI WORK:**

**CRITICAL: ALWAYS CHECK EXISTING DESIGN FIRST - NEVER CHANGE ENTIRE DESIGN FOR SMALL REQUESTS**

**MANDATORY WORKFLOW:**
1. **Read existing files FIRST**: Check CSS files, components, theme config for established:
   - Color schemes (CSS variables, Tailwind config, component styles)
   - Typography (font families, sizes, weights)
   - Design patterns (component structure, spacing, borders, shadows)
2. **Assess project state**: NEW project (no design) vs ESTABLISHED project (has design)?
3. **Match user request scope**: Small request = small change ONLY

**IF PROJECT HAS ESTABLISHED DESIGN:**
- ✅ **DO**: Make ONLY the specific change requested
- ✅ **DO**: Match existing colors, fonts, patterns
- ✅ **DO**: Complement existing design
- ❌ **NEVER**: Change color scheme for unrelated requests
- ❌ **NEVER**: Change fonts unless explicitly asked
- ❌ **NEVER**: Redesign entire pages for small fixes
- ❌ **NEVER**: Wholesale redesigns without explicit permission

**IF PROJECT IS BRAND NEW (NO EXISTING DESIGN):**
- ✅ **DO**: Pick one extreme aesthetic direction (minimal, maximal, brutalist, retro, luxury, etc.)
- ✅ **DO**: Create bold, distinctive design
- ✅ **DO**: Establish cohesive color palette from library below

**Execution**: Production-grade, context-appropriate, cohesive, meticulously refined

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Two-Color Branding Strategy**: **REFERENCE LIBRARY** - Use these palettes as INSPIRATION and REFERENCES for color harmony. For NEW projects, select one palette as a starting point or create custom colors. For EXISTING projects, maintain current colors. You are NOT restricted to these exact colors!

  **Available Color Palettes** (each palette has 4 colors - pick any 2 from the same palette):

  **Natural & Organic:**
  - **Green juice**: #3BD327, #60B24F, #3D6A34, #274623
  - **Olive grove**: #8A8A2B, #57A63D, #26A652, #E6E6D6
  - **Tropical rainforest**: #00B56B, #57A63D, #6E8A5D, #2A6A2A
  - **Pistachio dream**: #90E6B0, #A7F7B5, #D6E6A5, #40CA7A
  - **Minty fresh**: #A6F7E0, #A5E8D0, #87C6A7, #5DA687
  - **Emerald odyssey**: #006F52, #26D7A6, #6AE8C8, #003D30
  - **Coastal morning**: #A5D69A, #D6E6C6, #F7F5D6, #8DB6D6
  - **Eucalyptus grove**: #A6A68A, #D6D6C0, #F7F7E0, #6B8A6A

  **Warm & Earthy:**
  - **Chocolate truffle**: #8C5510, #CDAA5D, #FFF7D6, #3D2600
  - **Burnt sienna**: #D25B35, #E5CE97, #F4D4A3, #B66232
  - **Golden taupe**: #C4A157, #E8E0A6, #F5F3DB, #CC8340
  - **Tuscan sunset**: #E35D58, #F7CBA4, #E8D8B6, #892B0C
  - **Spiced chai**: #FFF6D6, #D67A2E, #A6531C, #8D562C
  - **Cappuccino**: #D6A76A, #C6B08A, #A6906E, #6A4E2B
  - **Breakfast tea**: #F7D5B0, #D6A68A, #A68A6A, #3D260D
  - **Cozy campfire**: #8D4E26, #A67A3D, #A68A3D, #6A0D0D
  - **Spiced mocha**: #B56A42, #A6532B, #F7F0D6, #6A4028
  - **Pumpkin spice season**: #B65A26, #8C4A1C, #6A3D19, #2A1A0D
  - **Autumn leaves**: #F7B55A, #D69A3D, #A6782B, #6A4A26
  - **Desert mirage**: #B68A5D, #D6A658, #8AA65D, #26326B
  - **Siltstone**: #B6A685, #D6C89F, #F7D59E, #C6A55A

  **Fiery & Bold:**
  - **Chili spice**: #CC3524, #FF7A79, #F7926A, #8D0000
  - **Guava**: #F79A86, #F78E6A, #F56E67, #F05278
  - **Blooming romance**: #6D0038, #A7136A, #A4D141, #05530A
  - **Fireworks**: #FF5320, #B82520, #87226A, #FF20E3
  - **Urban graffiti**: #FF3D00, #26FF56, #00E8FF, #5A5A5A
  - **Watermelon splash**: #F05683, #FF79A4, #4A4A4A, #A4E8A2

  **Sunny & Bright:**
  - **Zesty lemon**: #FFF856, #F7E26B, #D6C858, #B3A547
  - **Freshly squeezed**: #F7B500, #F7E16B, #F7C74B, #FF7800
  - **Mango popsicle**: #DFA258, #F7CF57, #FFD86B, #FF8A26
  - **Honeycomb**: #F7C528, #F7E7A6, #F7F0C6, #8A5526
  - **Golden hour**: #F7D548, #FCE7A6, #E8D0FF, #C6C59D
  - **Fresh peach**: #F7D5B0, #F2B894, #E7A47B, #D8A158
  - **Sunny day**: #F7B500, #B59A6B, #0048FF, #0026B5
  - **Spring energy**: #F2F25B, #FFF26D, #A6F05A, #00D95A
  - **Island oasis**: #C6FF5B, #F2F0A6, #A6F26A, #FFA63D
  - **Wildflower meadow**: #FFF7E7, #F2B53D, #A6D86A, #00F05A
  - **Summer breeze**: #F7B26B, #F7E78A, #A6D8E8, #E6D0A6

  **Vibrant & Electric:**
  - **Electric kiwi**: #C6FF00, #B7FF00, #A7FF00, #000000
  - **Alchemical reaction**: #9D00FF, #E36A19, #60A73A, #6D803D
  - **Electropop**: #A7FF00, #FF7800, #8733FF, #2600FF
  - **Cool revival**: #26CFFF, #26A7FF, #26CFA7, #00D96A
  - **Neon jungle**: #A5F25B, #26FF80, #D726A7, #8733FF
  - **Electric fusion**: #00E8FF, #26BFFF, #A7FF00, #FF6600
  - **Pop art**: #00E0FF, #FF26A3, #FFF700, #FF5A26
  - **Technicolor dream**: #FF00FF, #00E8FF, #D6FF00, #1926D6
  - **Glowing horizon**: #F7A35F, #26CFFF, #26A7FF, #FF784A
  - **Retro sunset**: #B55A26, #F7CF57, #00A78A, #B54626

  **Cool & Aquatic:**
  - **California beaches**: #F7A35F, #A5E8FF, #6BC4FF, #5079A4
  - **Ocean tide**: #00B5A3, #26CFFF, #0A87B8, #005D6C
  - **Charming seaside**: #A6E8FF, #A6D8E8, #A6F0E8, #C0F7F2
  - **Calm blue**: #60C6FF, #73A8FF, #6B87A7, #5D6D80
  - **Cobalt sky**: #0047B3, #00309D, #62C5FF, #606D80
  - **Yacht club**: #D6D6D0, #A5C6D6, #2A8ACC, #003D59
  - **Mountain mist**: #606D80, #A6C6D6, #57B7D9, #5A5A5A
  - **Morning dew**: #A5E8FF, #A6D8D6, #C6E6D0, #D6D6D6
  - **Frozen lake**: #606D80, #A6C6D6, #A7E7FA, #003D80
  - **Lavender lullaby**: #B7C6FF, #A5E6FF, #A6D8F2, #C69CF2
  - **Soft spring**: #6A87D9, #A6E6F2, #A6F7D9, #60D6A6
  - **Winter chill**: #A6C6D6, #7DA6B6, #607A80, #0A3336
  - **Beachfront views**: #B7B68B, #D2BCD9, #E6D2F2, #A8B6D6

  **Purple & Pink:**
  - **Wisteria bloom**: #C5C7F9, #876FDB, #CF90DE, #E28CE0
  - **Desert dusk**: #A25E57, #BD8087, #CFA6AC, #9D509A
  - **Lavender fields**: #FFFDC6, #E5E1A8, #BCB87F, #B57DF6
  - **Hydrangea**: #F7B2BA, #F7D2DA, #E8C0F0, #AC66DA
  - **Iris garden**: #A57AD8, #7B52B7, #6E8A75, #8A866F
  - **Cotton candy skies**: #D7B7F7, #A7E8F7, #F7CFF7, #F7A3E3
  - **Bubblegum pop**: #F7A3E3, #26CFFF, #26BFD4, #A3E8FF
  - **Space berries**: #F779A3, #26A7FF, #26CFA7, #26004A
  - **Under the moonlight**: #C6C0FF, #A39AC6, #6A5C8A, #2D2D6B
  - **Evening rose**: #D96F6F, #B57A91, #965C99, #4A4A4A
  - **Neon noir**: #000000, #26FF56, #D726FF, #262626
  - **Autumn orchard**: #9D5BAE, #8A8A2B, #57A63D, #6B0039
  - **Harvest moon**: #8D0040, #F7C64A, #A6D8D6, #B54619
  - **Winter berry**: #8D264D, #A6D8DA, #6A85A6, #0F2F3F

  **Floral & Garden:**
  - **Cactus flower**: #E7A3AC, #F7C7D3, #A2E6A9, #60B57F
  - **Wildflowers**: #A2D6B9, #7FBF8F, #BAA4A9, #B98EB8
  - **Country garden**: #FFF6C5, #D6D69F, #A4A45C, #7D3E96
  - **Lotus garden**: #A7E8AE, #F9C7C8, #D49E85, #804E3D
  - **Cherry blossom**: #F7D7D7, #E2F7E1, #C8E8D9, #F7B5C6
  - **Pastel garden**: #DF9F9E, #C7D4BA, #A38F85, #6D4C45
  - **Tropical punch**: #FF8243, #F7C0C8, #F7D96B, #00A5A4

  **Neutral & Sophisticated:**
  - **Ink wash**: #4A4A4A, #BDBDBD, #FFFFF2, #8D98A6
  - **Salt and pepper**: #F7F7F7, #D6D6D6, #A6A6A6, #262626
  - **Quite clear**: #C8C8C8, #D2DFD2, #1A5939, #6A1317
  - **Gothic noir**: #000000, #D2D2D0, #BDA8A8, #6C4E4E
  - **Quiet luxury**: #F7F2DA, #E8D8A6, #D6C6A6, #BDAA96
  - **Night sands**: #B8B08A, #D8CBA6, #F7E7B6, #7D6A42
  - **Harbor haze**: #8AA6BC, #D6D6D0, #A6A6A0, #7D7D6A
  - **Old photograph**: #FFFBD6, #E8E2B0, #D6D2A6, #8A8A5D
  - **Stone path**: #A69A87, #A6A68A, #969678, #E8E2D7
  - **Urban loft**: #D6C6B0, #A6A698, #7D7D6A, #262626
  - **Sharp edge**: #969696, #B6B6B6, #E36A6A, #26F7CF
  - **Retro calm**: #60E0D6, #A6C67A, #F7D59E, #A68AE6
  - **Peach skyline**: #F7D5B0, #F7F0C8, #A6F7F5, #6A869D

  **Jewel Tones:**
  - **Jewel box**: #60C68B, #0F52BA, #8733FF, #C6B258

  **Implementation Guidelines**:
  1. **Check existing project**: Read CSS files to identify established color schemes
  2. **For new projects**: Select ONE palette as inspiration, or create custom colors based on these principles
  3. **For existing projects**: Maintain current colors; use palettes for complementary additions only
  4. Set chosen colors as CSS variables (--primary and --secondary)
  5. Color roles: Dominant (backgrounds, surfaces) + Contrast (text, buttons, accents)
  6. **Flexibility encouraged**: Adjust shades, create variations, combine ideas from multiple palettes
  7. Consistency within each project creates brand identity

- **Color & Theme**: Commit to a cohesive aesthetic using your chosen brand color pair. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
