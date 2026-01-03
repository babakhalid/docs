# Chatting with the AI Agent

Learn how to effectively communicate with Yomake's AI agent to build exactly what you envision. This guide covers everything from basic interactions to advanced techniques.

---

## How It Works

Yomake's AI agent is your personal web developer. You describe what you want in plain English, and it:

1. **Understands your request** - Interprets your natural language description
2. **Plans the implementation** - Decides which files to create or modify
3. **Writes the code** - Generates React, TypeScript, and CSS
4. **Updates the preview** - Shows you the result in real-time
5. **Explains the changes** - Tells you what it did and why

Every project has its own dedicated AI conversation with full context awareness.

---

## Starting a Conversation

When you open a project, the chat panel appears on the left side. Simply type your request in the input box at the bottom and press Enter.

### First Message

Your first message sets the direction. Be clear about your goal:

**Good first messages:**

```
Create a landing page for a fitness app with a hero section showcasing
the app screenshot and a call-to-action button
```

```
Build a pricing page with three subscription tiers, each showing
features and a "Choose Plan" button
```

```
Add a responsive navigation bar with logo, menu items, and a sign-in button
```

The AI will acknowledge your request and start building immediately.

---

## What the AI Can Do

### Create Components

Ask the AI to build any UI component:

```
Add a testimonial section with three customer reviews
```

```
Create a footer with social media links and copyright
```

```
Build a FAQ accordion with 5 common questions
```

### Edit Existing Code

Modify what's already there:

```
Make the hero headline bigger and change the color to blue
```

```
Move the contact form to the left side of the page
```

```
Add rounded corners to all the buttons
```

### Fix Bugs

Report issues and get fixes:

```
The navigation menu isn't working on mobile
```

```
The form submit button doesn't do anything when clicked
```

```
There's a spacing issue between the header and the hero section
```

### Add Features

Request new functionality:

```
Add a dark mode toggle button in the header
```

```
Make the navbar sticky so it stays visible when scrolling
```

```
Add form validation to ensure email format is correct
```

### Style and Design

Refine the visual appearance:

```
Update all headings to use the Poppins font
```

```
Change the color scheme to use teal and orange
```

```
Add subtle animations when elements come into view
```

### Set Up Integrations

Configure external services:

```
Set up Supabase authentication with email and password
```

```
Create a database table for storing blog posts
```

```
Add an OpenAI chatbot that answers customer questions
```

---

## How to Ask

### Be Specific

The more details you provide, the better the result.

❌ **Vague:**
```
Add a button
```

✅ **Specific:**
```
Add a blue "Get Started" button below the hero headline that links to the signup page
```

---

### Describe the Result

Focus on what you want to see, not how to code it.

❌ **Too technical:**
```
Create a flex container with justify-content space-between
```

✅ **Result-focused:**
```
Space out the navigation menu items so they're evenly distributed
```

---

### Include Context

Reference existing elements when relevant:

```
Add a features section below the hero section with three columns
```

```
Make the pricing cards match the style of the hero section
```

```
Use the same blue color from the navbar in all call-to-action buttons
```

---

### Break Down Complex Requests

For large changes, work incrementally:

Instead of:
```
Build a complete e-commerce product page with image gallery,
reviews, related products, and add-to-cart functionality
```

Try:
```
Create a product detail page with title, price, and description
```

Then follow up with:
```
Add an image gallery to the product page
```

---

## Understanding Responses

### Text Explanations

The AI will confirm what it's doing:

> "I'll create a hero section with a headline, subtitle, and call-to-action button. I'll use Tailwind CSS for styling and make it responsive."

### Code Changes

You'll see which files are being modified:

> "Creating components/Hero.tsx..."
> "Updating app/page.tsx..."

Expand these sections to see the actual code changes.

### Thinking Process

The AI shows its reasoning (collapsible):

> "I need to create a new component for the pricing cards, style them with Tailwind, and import them into the main page."

This helps you understand how the AI approaches your request.

### Terminal Output

When the AI runs commands, you'll see output:

> "Running: npm install lucide-react..."
> "✓ Package installed successfully"

### Preview Updates

After changes, the preview panel automatically refreshes to show the result.

---

## Conversation Flow

The AI remembers your entire conversation, building context over time.

**Example conversation:**

**You:** Create a hero section with a headline and subtitle

**AI:** *Creates hero section*

**You:** Make the headline bigger and bold

**AI:** *Updates the headline styling*

**You:** Add a call-to-action button below it

**AI:** *Adds button to the existing hero section*

**You:** Change the button color to green

**AI:** *Modifies the button that was just added*

Notice how each request builds on previous ones. The AI understands:
- "the headline" refers to the one it just created
- "it" refers to the hero section
- "the button" refers to the CTA it just added

---

## Token Usage

Each message you send consumes tokens from your balance.

**What affects token cost:**
- Length and complexity of your request
- Size of code being generated
- Context from previous conversation

**See your token usage:**
- Current balance shown in header
- Per-message cost displayed in chat
- Detailed breakdown in [Billing](/docs/billing/token-system)

**Tips to optimize tokens:**
- Be clear and concise
- Make one request at a time
- Avoid asking the AI to repeat information

---

## Advanced Techniques

### Asking for Alternatives

Get multiple options:

```
Show me three different color schemes for this landing page
```

```
Give me two layout options for the pricing section
```

### Requesting Explanations

Understand what the AI built:

```
Explain how the authentication system works
```

```
Walk me through the form validation logic
```

### Undoing Changes

Revert mistakes:

```
Undo the last change
```

```
Go back to the previous version of the navbar
```

### Copying from Examples

Reference external designs:

```
Create a hero section similar to Stripe's homepage
```

```
Make a pricing page like Notion's pricing structure
```

---

## Conversation Management

### Viewing History

- Scroll up to see previous messages
- All conversation is saved automatically
- Access history even after closing the project

### Continuing Later

When you return to a project:
- Full conversation context is preserved
- The AI remembers everything discussed
- Continue right where you left off

### Starting Fresh

To reset context on a specific topic:

```
Let's start working on a new feature. Create a blog section.
```

This signals a topic shift while maintaining overall project awareness.

---

## Common Patterns

### Building a Page Step-by-Step

1. Start with structure: "Create a landing page layout with header, hero, features, and footer sections"
2. Fill in content: "Add content to the hero section with headline and CTA"
3. Refine styling: "Update the color scheme to use blue and white"
4. Add interactions: "Make the CTA button animate on hover"
5. Test responsiveness: "Ensure everything looks good on mobile"

### Fixing Issues

1. Describe the problem: "The mobile menu isn't closing when I click a link"
2. Provide context: "This happens on the About page navigation"
3. Let AI fix: AI will debug and resolve
4. Verify: Check the preview to confirm it's fixed

### Iterative Refinement

1. Build feature: "Add a contact form"
2. Test it: Preview and interact
3. Adjust: "Add a success message after submission"
4. Polish: "Style the form inputs to match the site design"

---

## Best Practices

**One feature at a time**
- Focus on completing each element before moving on
- Test in the preview after each change
- Verify it works as expected

**Use clear language**
- Avoid ambiguous terms
- Be explicit about positions, colors, sizes
- Reference existing elements by name

**Provide feedback**
- If something isn't right, tell the AI specifically what to fix
- Use precise descriptions: "The button is too small" vs "The button is bad"

**Leverage context**
- The AI knows your entire project
- Reference earlier work: "Use the same style as the pricing cards"
- Build incrementally on previous changes

**Ask questions**
- Not sure how something works? Ask!
- "How does this authentication flow work?"
- "What's the best way to add a database to this project?"

---

## When Things Go Wrong

### Preview Not Updating

```
Refresh the preview
```

### Unexpected Result

```
That's not quite right. I wanted the button centered below the headline,
not to the right of it
```

### Error Messages

If you see errors in the terminal output:

```
I'm seeing an error about [error message]. Can you fix it?
```

### Starting Over

If things get too messy:

```
Remove everything from the current page and let's start fresh
```

---

## Tips for Success

1. **Start with templates** - Use a template close to your vision
2. **Be conversational** - Talk naturally, like you would to a developer
3. **Test frequently** - Check the preview after each change
4. **Build incrementally** - Add one feature at a time
5. **Give feedback** - Let the AI know what's working and what isn't
6. **Use examples** - Reference designs or apps you like
7. **Be patient** - Complex features may take a few back-and-forth messages

---

## Next Steps

Now that you understand how to chat with the AI:

- [Prompt Tips](/docs/ai-agent/prompt-tips) - Master the art of effective prompts
- [What Can I Build](/docs/ai-agent/what-can-i-build) - Get inspired with possibilities
- [Understanding Responses](/docs/ai-agent/understanding-responses) - Interpret AI output
- [Using the Preview](/docs/live-preview/using-the-preview) - Test your app as it builds

---

**Ready to build?** Open your project and start chatting with the AI!
