# AI Providers

Connect different AI providers to Yomake and customize your AI development experience.

---

## Overview

Yomake supports multiple AI providers, giving you flexibility in model selection, performance, and cost. Choose from OpenAI, Anthropic Claude, and other leading AI services.

**Supported Providers:**
- OpenAI (GPT-4, GPT-3.5)
- Anthropic (Claude 3)
- Google (Gemini)
- Bring Your Own Key (BYOK)

---

## Default AI Provider

### What's Included

**Free Plan:**
- Yomake-provided AI access
- Claude Sonnet 3.5 (default)
- Token limits apply
- No API key needed

**Paid Plans:**
- Higher token limits
- Priority access
- Faster responses
- Advanced models

---

## Connecting AI Providers

### OpenAI Integration

**Setup OpenAI:**
1. Get API key from [OpenAI Platform](https://platform.openai.com)
2. Go to **Settings > Integrations > AI Providers**
3. Click **"Connect OpenAI"**
4. Enter API key
5. Select default model
6. Click **"Save"**

**Available Models:**
- GPT-4 Turbo - Most capable
- GPT-4 - Balanced performance
- GPT-3.5 Turbo - Fast and efficient

### Anthropic Claude

**Setup Claude:**
1. Get API key from [Anthropic Console](https://console.anthropic.com)
2. Go to **Settings > Integrations > AI Providers**
3. Click **"Connect Anthropic"**
4. Enter API key
5. Choose Claude model
6. Click **"Save"**

**Available Models:**
- Claude 3 Opus - Highest capability
- Claude 3 Sonnet - Balanced (default)
- Claude 3 Haiku - Fastest

### Google Gemini

**Setup Gemini:**
1. Get API key from [Google AI Studio](https://makersuite.google.com)
2. Go to **Settings > Integrations > AI Providers**
3. Click **"Connect Google"**
4. Enter API key
5. Select Gemini model
6. Click **"Save"**

---

## Bring Your Own Key (BYOK)

### Why Use BYOK?

**Benefits:**
- Lower costs at scale
- Direct billing from provider
- Higher rate limits
- Full control
- No token restrictions

**Best For:**
- Heavy users
- Enterprise needs
- Cost optimization
- Specific model requirements

### Setting Up BYOK

**Steps:**
1. Create account with AI provider
2. Generate API key
3. Add payment method to provider
4. Connect key in Yomake
5. Usage billed directly by provider

**Important:**
- Monitor your provider billing
- Set spending limits
- Track API usage
- Keep keys secure

---

## Model Selection

### Choosing the Right Model

**For Complex Tasks:**
- GPT-4 or Claude Opus
- Better reasoning
- More accurate
- Higher cost

**For Standard Development:**
- Claude Sonnet or GPT-3.5
- Good balance
- Fast responses
- Cost effective

**For Quick Tasks:**
- Claude Haiku or GPT-3.5 Turbo
- Fastest
- Simple requests
- Lowest cost

### Per-Project Model Selection

**Different Models Per Project:**
1. Open project
2. Go to **Settings > AI Configuration**
3. Select preferred model
4. Override default
5. Save settings

---

## API Key Management

### Securing API Keys

**Best Practices:**
✅ Never share API keys
✅ Rotate keys regularly
✅ Set spending limits
✅ Use environment-specific keys
✅ Revoke unused keys

❌ Don't commit keys to Git
❌ Don't share in screenshots
❌ Don't use same key everywhere

### Setting Spending Limits

**At Provider Level:**
1. Log in to provider dashboard
2. Go to billing/usage
3. Set monthly spending limit
4. Configure alert thresholds
5. Save settings

**Recommended Limits:**
- Development: $20-50/month
- Production: $100-500/month
- Enterprise: Custom

---

## Usage and Billing

### Token Tracking

**Monitor Usage:**
1. Go to **Settings > Usage**
2. View token consumption
3. See breakdown by project
4. Export usage reports

**Understanding Tokens:**
- Vary by provider
- ~4 characters = 1 token
- Both input and output counted
- Different models have different costs

### Cost Comparison

**Approximate Costs (per 1M tokens):**

| Model | Input | Output |
|-------|-------|--------|
| GPT-4 Turbo | $10 | $30 |
| GPT-3.5 Turbo | $0.50 | $1.50 |
| Claude Opus | $15 | $75 |
| Claude Sonnet | $3 | $15 |
| Claude Haiku | $0.25 | $1.25 |

*Prices approximate, check provider for current rates*

---

## Advanced Configuration

### Custom Endpoints

**Use Custom API Endpoints:**
1. Go to **Settings > AI Providers > Advanced**
2. Enable **"Custom Endpoint"**
3. Enter endpoint URL
4. Configure authentication
5. Test connection

**Use Cases:**
- Self-hosted models
- Enterprise proxies
- Regional endpoints
- Custom deployments

### Model Parameters

**Fine-Tune Behavior:**
- **Temperature:** Creativity level (0-2)
- **Max Tokens:** Response length limit
- **Top P:** Sampling threshold
- **Frequency Penalty:** Repetition reduction

**Access Parameters:**
1. Go to **Settings > AI Configuration**
2. Click **"Advanced Parameters"**
3. Adjust sliders
4. Test with prompts
5. Save configuration

---

## Provider-Specific Features

### OpenAI Features

**Function Calling:**
- Structured outputs
- Tool integration
- API interactions

**Vision (GPT-4V):**
- Image understanding
- Screenshot analysis
- Design feedback

### Claude Features

**Extended Context:**
- 100K+ token context
- Long document processing
- Complex conversations

**Constitutional AI:**
- Safer outputs
- Ethical guidelines
- Reduced harmful content

### Gemini Features

**Multimodal:**
- Text and images
- Video understanding
- Audio processing

**Grounding:**
- Google Search integration
- Up-to-date information
- Fact checking

---

## Troubleshooting

### API Key Not Working

**Problem:** "Invalid API key" error

**Solutions:**
1. Verify key copied correctly
2. Check key is active in provider dashboard
3. Ensure billing enabled at provider
4. Regenerate key if needed
5. Test key directly with provider API

### Rate Limit Errors

**Problem:** "Rate limit exceeded"

**Solutions:**
1. Wait and retry
2. Upgrade provider plan
3. Implement request throttling
4. Use lower-tier model
5. Contact provider support

### High Costs

**Problem:** Unexpected bills

**Solutions:**
1. Review usage analytics
2. Check for runaway loops
3. Optimize prompts (shorter = cheaper)
4. Use more efficient models
5. Set spending limits

### Connection Failures

**Problem:** Can't connect to provider

**Solutions:**
1. Check internet connection
2. Verify provider status page
3. Test API key separately
4. Check firewall settings
5. Try different provider

---

## Best Practices

### Development vs Production

**Use Different Keys:**
```
Development: Lower-cost model (GPT-3.5, Haiku)
Testing: Mid-tier model (Claude Sonnet)
Production: Best model for task (GPT-4, Opus)
```

### Prompt Optimization

**Reduce Costs:**
- Be concise and specific
- Avoid unnecessary context
- Use system messages effectively
- Cache common prompts
- Batch similar requests

### Security

**Protect Your Keys:**
- Store in environment variables
- Never in source code
- Rotate regularly (every 90 days)
- Use separate keys per environment
- Monitor for unusual activity

---

## Need Help?

**AI Provider Questions:**
- [Chatting with the Agent](/docs/ai-agent/chatting-with-the-agent)
- [Prompt Tips](/docs/ai-agent/prompt-tips)
- [Integrations Overview](/docs/integrations/integrations-overview)
- [FAQ](/docs/support/faq)
- [Contact Support](/docs/support/contact-support)

**Provider Documentation:**
- [OpenAI Docs](https://platform.openai.com/docs)
- [Anthropic Docs](https://docs.anthropic.com)
- [Google AI Docs](https://ai.google.dev)

---

**Choose the right AI provider for your needs!** Flexibility and control for optimal development experience.
