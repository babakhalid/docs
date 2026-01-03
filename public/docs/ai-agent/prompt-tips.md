# Prompt Tips

Master the art of writing effective prompts to get exactly what you want from Yomake's AI agent. This guide shares proven techniques and real examples.

---

## The Fundamentals

### What Makes a Good Prompt?

A good prompt is:
- **Specific** - Clear about what you want
- **Actionable** - Describes the desired result
- **Complete** - Includes necessary details
- **Focused** - One task at a time

### What Makes a Bad Prompt?

Avoid prompts that are:
- **Vague** - "Make it better"
- **Too broad** - "Build me a website"
- **Ambiguous** - "Add some color"
- **Multi-tasking** - Trying to do too much at once

---

## Core Principles

### 1. Be Specific

The more details you provide, the better the result.

❌ **Too vague:**
```
Add a button
```

✅ **Specific:**
```
Add a blue "Get Started" button below the hero headline that's 120px wide
with rounded corners
```

❌ **Vague:**
```
Make a form
```

✅ **Specific:**
```
Create a contact form with fields for name (text), email (email validation),
phone (optional), and message (textarea). Add a "Send Message" submit button
```

### 2. Describe the Result, Not the Code

Focus on what you want to see, not how to implement it.

❌ **Too technical:**
```
Create a flexbox container with justify-content: space-between and
align-items: center
```

✅ **Result-focused:**
```
Create a horizontal navigation bar with menu items evenly spaced
and vertically centered
```

❌ **Too technical:**
```
Add a useState hook to track form inputs and update on onChange events
```

✅ **Result-focused:**
```
Make the form inputs update as I type so I can see my input in real-time
```

### 3. Provide Context

Reference existing elements when relevant.

❌ **No context:**
```
Add a section with three cards
```

✅ **With context:**
```
Add a features section below the hero with three cards showing
our main benefits. Use the same blue accent color from the navbar
```

❌ **No context:**
```
Change the button style
```

✅ **With context:**
```
Make the CTA button in the hero section match the style of the
buttons in the pricing section
```

### 4. Break Down Complex Requests

For large changes, work incrementally.

❌ **Too complex:**
```
Build a complete blog with article listings, individual article pages,
categories, tags, search functionality, comments section, author profiles,
related articles, and social sharing
```

✅ **Incremental approach:**

**Step 1:**
```
Create a blog listing page showing article cards in a grid with
title, excerpt, date, and featured image
```

**Step 2:**
```
Add an individual article page with full content, author info, and publish date
```

**Step 3:**
```
Add category filtering to the blog listing page
```

**Step 4:**
```
Add a related articles section at the bottom of each article
```

---

## Prompt Patterns

### Pattern 1: "Create [Component] with [Details]"

Use for building new elements.

**Examples:**

```
Create a hero section with a headline "Transform Your Business",
subtitle explaining our value proposition, and a green CTA button
```

```
Create a pricing table with three tiers (Starter $19/month,
Pro $49/month, Enterprise custom) showing 5 features each
```

```
Create a testimonial section with three customer quotes, including
their name, company, and profile photo
```

### Pattern 2: "Make [Element] [Change]"

Use for modifying existing elements.

**Examples:**

```
Make the hero headline bigger and bold
```

```
Make the navigation sticky so it stays at the top when scrolling
```

```
Make all buttons have rounded corners and a hover effect
```

### Pattern 3: "Add [Feature] to [Location]"

Use for adding to existing sections.

**Examples:**

```
Add a search bar to the navigation menu on the right side
```

```
Add a newsletter signup form to the footer with email input
and subscribe button
```

```
Add social media icons below the contact form (Twitter, LinkedIn, GitHub)
```

### Pattern 4: "Update [Element] to show [Content]"

Use for content changes.

**Examples:**

```
Update the hero section to showcase my SaaS product with the headline
"Automate Your Workflow" and describe time-saving benefits
```

```
Update the about page with information about my design agency,
our mission, and our team
```

```
Update the pricing tiers with my actual plans and features
```

### Pattern 5: "Style [Element] like [Reference]"

Use for consistent styling.

**Examples:**

```
Style the footer links to match the navigation menu styling
```

```
Style the pricing cards like the feature cards but with a border
```

```
Style all headings with the same font as the hero headline
```

---

## Examples by Use Case

### Building a Landing Page

**Start with structure:**
```
Create a landing page layout with header, hero section, features,
testimonials, and footer
```

**Add hero content:**
```
Update the hero section with headline "Launch Your Startup Faster",
subtitle about building MVPs quickly, and a "Start Building" CTA button
```

**Create features:**
```
Add a features section below the hero with three columns showing:
1. AI-Powered - description
2. No Code Required - description
3. Deploy Instantly - description
Use icons for each feature
```

**Add social proof:**
```
Add a testimonials section with three customer quotes, their names,
job titles, and company logos
```

**Finish with CTA:**
```
Add a final call-to-action section before the footer with headline
"Ready to Get Started?" and a signup button
```

### Styling and Design

**Color changes:**
```
Change the primary color scheme from blue to teal throughout the entire site
```

**Typography:**
```
Make all headings use the Poppins font and body text use Inter
```

**Spacing:**
```
Add more whitespace between sections to make the page feel less cramped
```

**Responsive:**
```
Make the three-column features section stack vertically on mobile devices
```

### Forms and Interactivity

**Basic form:**
```
Create a contact form with name, email, phone (optional), and message fields.
Add validation to ensure email format is correct
```

**Form styling:**
```
Style the form inputs with light gray background, rounded corners, and
focus state with blue border
```

**Submit functionality:**
```
When the form is submitted, show a success message saying "Thanks! We'll
be in touch soon" and clear the form
```

**Interactive elements:**
```
Add a FAQ section with accordion-style questions that expand when clicked
```

### Navigation

**Basic nav:**
```
Create a navigation bar with logo on the left and menu items
(Home, About, Services, Contact) on the right
```

**Sticky nav:**
```
Make the navigation bar stick to the top of the page when scrolling down
```

**Mobile menu:**
```
Add a hamburger menu for mobile that slides in from the right when clicked
```

**Active states:**
```
Highlight the current page in the navigation menu
```

### E-commerce

**Product display:**
```
Create a product page with image gallery, product name, price,
description, and "Add to Cart" button
```

**Cart functionality:**
```
Add a shopping cart icon in the header showing number of items.
When clicked, open a slide-out cart panel
```

**Pricing:**
```
Display the price as $29.99 with a crossed-out original price of $49.99
to show the discount
```

---

## Advanced Techniques

### Asking for Options

Get the AI to show you alternatives:

```
Show me three different color scheme options for this landing page
```

```
Give me two layout variations for the pricing section - one with
cards and one with a comparison table
```

### Referencing External Examples

Use well-known sites as inspiration:

```
Create a hero section similar to Stripe's homepage with a gradient
background and floating UI elements
```

```
Make the pricing layout like Notion's pricing page with toggle between
monthly and annual billing
```

```
Design a dashboard similar to Vercel's analytics page with charts
and metrics cards
```

### Requesting Explanations

Understand what was built:

```
Explain how the form validation works
```

```
Walk me through the authentication flow you just created
```

```
What components did you use for the dashboard layout?
```

### Undoing and Reverting

Fix mistakes:

```
Undo the last change to the navbar
```

```
Go back to the previous version of the hero section
```

```
Remove the testimonials section you just added
```

---

## Common Scenarios

### When Preview Doesn't Match Expectations

**Be specific about the issue:**

❌ Vague:
```
This doesn't look right
```

✅ Specific:
```
The button is left-aligned but I wanted it centered below the headline
```

❌ Vague:
```
The colors are wrong
```

✅ Specific:
```
The background should be light gray (#F5F5F5) not white, and the
button should be bright blue (#0066FF) not navy
```

### When You Need to Fix Spacing

**Be precise with measurements:**

```
Add 40px of space between the hero section and the features section
```

```
Reduce the padding inside the pricing cards from 32px to 20px
```

```
Make the headline have 8px of space below it before the subtitle
```

### When Building Multi-Step Features

**One step at a time:**

**Building authentication:**

```
Step 1: Create a login form with email and password fields
```
*Wait for completion, test in preview*

```
Step 2: Add a "Forgot Password?" link below the form
```
*Wait for completion, test in preview*

```
Step 3: Connect the login form to Supabase authentication
```
*Wait for completion, test in preview*

```
Step 4: Redirect to dashboard after successful login
```

---

## Optimization Tips

### Save Tokens

Make prompts efficient without sacrificing clarity:

❌ Token-heavy:
```
I would like for you to please create a button for me, and this button
should be blue in color, and when I hover over it with my mouse it should
change to a darker blue, and the text inside should say "Click Here" and
it should be in the center of the page
```

✅ Token-efficient:
```
Create a centered blue button that says "Click Here" and darkens on hover
```

### Avoid Repetition

The AI remembers context:

❌ Repetitive:
```
I previously asked you to create a pricing section. That pricing section
you created has three cards. I want those three cards in the pricing section
to have shadows
```

✅ Contextual:
```
Add shadows to the pricing cards
```

### Chain Related Requests

Batch similar changes:

❌ Separate:
```
Make the headline bigger
```
```
Make the headline bold
```
```
Make the headline dark gray
```

✅ Combined:
```
Make the headline bigger, bold, and dark gray
```

---

## Troubleshooting Prompts

### When Things Go Wrong

**Syntax errors:**
```
I'm seeing a syntax error in the console. Can you fix it?
```

**TypeScript errors:**
```
There's a TypeScript error saying "Property 'x' does not exist". Fix this.
```

**Layout issues:**
```
The mobile layout is broken - items are overflowing off the screen
```

**Functionality issues:**
```
The form submit button doesn't do anything when clicked
```

### Getting Back on Track

**Start fresh:**
```
Remove everything from the current page and let's start over
```

**Simplify:**
```
Simplify the hero section to just a headline and button
```

**Focus on one thing:**
```
Let's just focus on getting the navigation working first
```

---

## Best Practices Summary

✅ **DO:**
- Be specific and clear
- Describe the result you want
- Reference existing elements
- Build incrementally
- Test after each change
- Use examples and references
- Provide context

❌ **DON'T:**
- Be vague or ambiguous
- Describe implementation details
- Try to do too much at once
- Assume the AI knows unstated preferences
- Skip testing between changes
- Forget to provide necessary details

---

## Practice Prompts

Try these to improve your prompting:

**Beginner:**
```
Create a hero section with headline, subtitle, and CTA button
```

**Intermediate:**
```
Add a features grid below the hero with four items, each with an icon,
title, and description. Use a light background for the section
```

**Advanced:**
```
Build a pricing comparison table with three tiers. Include a feature
comparison showing checkmarks for included features and dashes for
excluded ones. Add a highlight effect to the middle "popular" tier
```

---

## Next Steps

Master your prompts and:

- [Chatting with the AI Agent](/docs/ai-agent/chatting-with-the-agent) - Apply these tips
- [What Can I Build](/docs/ai-agent/what-can-i-build) - Get inspired
- [Understanding Responses](/docs/ai-agent/understanding-responses) - Interpret AI output
- [Using the Preview](/docs/live-preview/using-the-preview) - Test your results

---

**Write better prompts, get better results!** Practice these techniques and watch your productivity soar.
