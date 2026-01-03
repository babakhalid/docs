# Token System

Understand how Yomake's token system works, track your usage, and learn how to optimize your token consumption.

---

## What Are Tokens?

Tokens are credits used to power Yomake's AI agent. Every time you chat with the AI, tokens are consumed to:

- Process your request (input tokens)
- Generate code and responses (output tokens)
- Maintain conversation context
- Execute AI operations

Think of tokens like fuel for the AI engine—they enable the intelligent code generation that makes Yomake work.

---

## How Tokens Work

### Input vs Output Tokens

**Input tokens** (your prompts):
- Every word you type
- Conversation history
- Project context
- Code being analyzed

**Output tokens** (AI responses):
- Code being generated
- Explanations
- File modifications
- Terminal commands

Both types consume tokens, with output typically using more due to code generation.

---

## Token Usage

### What Consumes Tokens?

Each AI interaction uses tokens:

**Simple requests** (50-200 tokens):
```
Change the button color to blue
```
- Small code change
- Minimal context needed
- Quick modification

**Medium requests** (200-1,000 tokens):
```
Add a contact form with name, email, and message fields
```
- Creating new component
- Multiple file operations
- Moderate complexity

**Complex requests** (1,000-5,000+ tokens):
```
Build a complete authentication system with login, signup,
password reset, and email verification using Supabase
```
- Large feature implementation
- Multiple components
- Database integration
- Extensive code generation

### Per-Message Cost

After sending a message, you'll see:
> Used 347 tokens

This shows the exact consumption for that interaction.

**Factors affecting cost:**
- Prompt length and complexity
- Amount of code generated
- Conversation history size
- Files being modified
- Context from previous messages

---

## Viewing Your Token Balance

### Header Display

Your current token balance is always visible in the app header (top-right):

```
🪙 12,450 tokens
```

Click to view detailed breakdown.

### Billing Page

For complete usage information, go to [Billing](/settings/billing):

**Current Balance:**
- Total tokens remaining
- Included with plan
- Purchased tokens
- Bonus tokens (referrals)

**Usage Statistics:**
- Today's usage
- This week's usage
- This month's usage
- All-time usage

**Per-Project Breakdown:**
- Tokens used per project
- Most active projects
- Usage trends

---

## Token Allocation by Plan

Different plans include different token amounts:

### Free Plan
- **5,000 tokens/month** (included)
- Resets monthly
- Purchase additional packs as needed
- Perfect for trying Yomake

### Creator Plan
- **50,000 tokens/month** (included)
- Resets monthly
- Purchase additional packs
- Enough for 2-3 medium projects monthly

### Builder Plan
- **150,000 tokens/month** (included)
- Resets monthly
- Purchase additional packs
- Supports 5-10 active projects

### Enterprise Plan
- **Custom token allocation**
- Tailored to your needs
- Volume discounts available
- [Contact sales](mailto:sales@yomake.ai)

**Monthly reset:**
- Plan tokens reset on your billing date
- Unused tokens don't roll over
- Purchased tokens never expire

---

## When Tokens Run Low

### Low Balance Warning

When you have < 1,000 tokens remaining:
- Warning banner appears in app
- Email notification sent
- Suggestion to purchase more

### Zero Balance

When you run out of tokens:
- Cannot send messages to AI agent
- Can still view projects
- Can still deploy existing projects
- Preview continues to work
- Can purchase tokens immediately to resume

**What to do:**
1. [Purchase token packs](/docs/billing/purchasing-tokens)
2. Or [upgrade your plan](/docs/billing/plans-and-pricing) for more monthly tokens

---

## Optimizing Token Usage

### Write Efficient Prompts

**Be clear and concise:**

❌ Token-heavy:
```
I want you to create a button, and I want it to be blue, and I want
it to say "Click Me" on it, and I want it to be in the center of the
page, and I want it to be big, and I want it to have rounded corners,
and when you hover over it, it should change color to dark blue
```

✅ Token-efficient:
```
Create a large centered blue button with rounded corners that says
"Click Me" and darkens on hover
```

### Build Incrementally

Instead of one massive request:

❌ Token-heavy:
```
Build a complete e-commerce site with product listings, shopping cart,
checkout, user accounts, order history, admin panel, and payment integration
```

✅ Token-efficient (spread across multiple prompts):
```
1. Create a product listing page with grid layout
2. Add a shopping cart component
3. Build a checkout form
4. [etc., one feature at a time]
```

### Avoid Repetition

The AI remembers context, so don't repeat information:

❌ Wasteful:
```
You previously created a blue button for me. I want to modify that blue
button you created to be bigger. The blue button should be 20px bigger.
```

✅ Efficient:
```
Make the button 20px bigger
```

### Use Specific References

Reference existing elements clearly:

✅ Token-efficient:
```
Use the same styling as the header
```

Better than describing the styling all over again.

### Break Complex Tasks

Large features use fewer total tokens when broken down:

**Building authentication:**
1. "Create a login form"
2. "Add signup form"
3. "Connect to Supabase auth"
4. "Add password reset"

vs one massive prompt for all of it.

---

## Token Usage Tracking

### Real-Time Tracking

See token consumption immediately:
- Per-message token cost displayed
- Running total in chat
- Balance updates instantly

### Historical Data

View past usage in Billing:
- Daily consumption graphs
- Weekly trends
- Monthly totals
- Project-by-project breakdown

### Usage Insights

Identify patterns:
- Which projects use most tokens
- Average tokens per message
- Peak usage times
- Optimization opportunities

---

## Purchasing Additional Tokens

When you need more tokens:

1. Go to [Billing](/settings/billing)
2. Click "Purchase Tokens"
3. Select a token pack
4. Complete checkout
5. Tokens added instantly

**Token Packs:**
- 10K tokens - $10
- 35K tokens - $30 (save 14%)
- 100K tokens - $75 (save 25%)
- 250K tokens - $150 (save 40%)

[Learn more: Purchasing Tokens](/docs/billing/purchasing-tokens)

---

## Earning Free Tokens

### Referral Program

Earn tokens by referring friends:

**How it works:**
1. Get your unique referral link from Billing
2. Share with friends
3. They sign up using your link
4. You both get bonus tokens!

**Rewards:**
- 2,500 tokens per successful referral
- Your friend gets 1,000 bonus tokens
- No limit on referrals
- Tokens never expire

[Learn more: Referral Program](/docs/billing/referral-program)

### Promotions

Watch for special promotions:
- Seasonal bonuses
- Launch discounts
- Community events
- Social media campaigns

Follow Yomake on social media for announcements.

---

## Token Expiration

**Plan tokens:**
- Reset monthly on billing date
- Unused tokens don't roll over
- Use them or lose them

**Purchased tokens:**
- Never expire
- Available permanently
- Used after plan tokens

**Bonus tokens:**
- From referrals
- Never expire
- Used after plan and purchased tokens

**Usage order:**
1. Plan tokens (expiring soonest)
2. Purchased tokens (oldest first)
3. Bonus tokens (unlimited shelf life)

---

## Understanding Token Costs

### Why Do Tokens Cost?

Tokens represent actual compute costs:
- AI model inference (Claude 4.5)
- Code generation processing
- Context window management
- Infrastructure hosting
- API usage fees

Yomake's pricing is designed to be transparent and fair, passing savings from bulk API usage to users.

### Token vs Plan Costs

**Monthly plan** = Predictable base tokens
**Token packs** = On-demand for extra usage

Most users find their plan tokens sufficient. Purchase packs only when needed for:
- Large projects
- Intensive development periods
- Multiple concurrent projects
- Experimentation and learning

---

## FAQs

**Q: How many tokens do I need?**
A: Most users use 10,000-30,000 tokens/month. A simple landing page might use 2,000-5,000 tokens total.

**Q: Can I see token usage before sending?**
A: Not yet, but we're working on token estimation before you send prompts.

**Q: Do tokens expire?**
A: Plan tokens reset monthly. Purchased and bonus tokens never expire.

**Q: What happens if I run out mid-conversation?**
A: Your last message completes, but you can't send more until you purchase tokens.

**Q: Can I get a refund on unused tokens?**
A: Purchased tokens are non-refundable, but they never expire so you can use them anytime.

**Q: Do collaborators use my tokens?**
A: Yes, when they chat with the AI in your project, it consumes your token balance.

**Q: Does viewing the preview use tokens?**
A: No, only AI chat interactions consume tokens. Previewing, deploying, and managing projects are free.

---

## Best Practices

✅ **Plan your requests** - Think before you prompt
✅ **Build incrementally** - One feature at a time
✅ **Be specific** - Clear prompts use fewer tokens
✅ **Monitor usage** - Check balance regularly
✅ **Purchase in bulk** - Larger packs save money
✅ **Use referrals** - Earn free tokens
✅ **Track projects** - Identify token-heavy projects
✅ **Optimize prompts** - Review what works efficiently

---

## Need More Tokens?

Running low? Here are your options:

1. **[Purchase token packs](/docs/billing/purchasing-tokens)** - Instant top-up
2. **[Upgrade your plan](/docs/billing/plans-and-pricing)** - More monthly tokens
3. **[Refer friends](/docs/billing/referral-program)** - Earn bonus tokens
4. **[Contact sales](mailto:sales@yomake.ai)** - Enterprise custom allocation

---

## Next Steps

- [Purchasing Tokens](/docs/billing/purchasing-tokens) - Buy token packs
- [Plans and Pricing](/docs/billing/plans-and-pricing) - Compare subscription options
- [Referral Program](/docs/billing/referral-program) - Earn free tokens
- [Prompt Tips](/docs/ai-agent/prompt-tips) - Use tokens efficiently

---

**Build smarter, not harder!** Optimize your token usage and get the most out of Yomake.
