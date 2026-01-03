# Supabase Integration

Add a powerful backend to your Yomake projects with Supabase. Get PostgreSQL database, authentication, file storage, and real-time features—all managed through natural language.

---

## What is Supabase?

Supabase is an open-source Firebase alternative that provides:

**Database:**
- PostgreSQL (world's most advanced open-source database)
- Full SQL capabilities
- Row-level security
- Database functions and triggers

**Authentication:**
- Email/password login
- Social logins (Google, GitHub, etc.)
- Magic links
- JWT tokens
- Multi-factor authentication

**Storage:**
- File uploads and downloads
- Image transformations
- CDN delivery
- Access control

**Real-time:**
- Database change subscriptions
- Broadcast messages
- Presence tracking
- WebSocket connections

**All without managing servers!**

---

## Why Use Supabase with Yomake?

### Build Full-Stack Apps

**Frontend (Yomake) + Backend (Supabase) = Complete application**

```
Yomake → Beautiful UI
Supabase → Data, Auth, Storage
```

**What you can build:**
- User authentication systems
- Data-driven applications
- File upload/download features
- Real-time collaborative tools
- Social platforms
- SaaS products
- Admin dashboards

---

### AI Understands Supabase

**Tell Yomake's AI what you need:**

```
Add user authentication with email and password using Supabase
```

```
Create a database table for blog posts with title, content, and author
```

```
Add file upload for profile pictures using Supabase Storage
```

The AI knows how to:
- Set up Supabase client
- Create database tables
- Implement auth flows
- Handle file uploads
- Query data
- Manage security

---

### No Backend Code Required

**Everything through natural language:**
- No SQL to write (unless you want to)
- No authentication logic
- No storage configuration
- No API endpoints to build

Yomake's AI handles all backend integration.

---

## Requirements

**To connect Supabase:**
- ✅ Supabase account (free or paid)
- ✅ Yomake Creator plan or higher
- ✅ Email verified on both accounts

**Supabase account limits:**
- Free: 500 MB database, 1 GB storage, 50 MB file uploads
- Pro: Starting at $25/month
- Enterprise: Custom pricing

---

## Connecting Supabase

### First-Time Setup

**Step 1: Create Supabase Account**

If you don't have one:
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub or email
4. Verify your email

**Step 2: Connect in Yomake**

1. Go to Yomake Settings → Integrations
2. Find "Supabase" section
3. Click "Connect Supabase"
4. Redirected to Supabase
5. Authorize Yomake access
6. Select organization
7. Click "Authorize"

**Step 3: Link Project**

Choose how to link:

**Option A: Create New Supabase Project**
1. Yomake creates project for you
2. Named after your Yomake project
3. Automatically configured

**Option B: Use Existing Project**
1. Select from dropdown
2. Yomake connects to existing database
3. Uses your existing tables/data

**Step 4: Confirmation**
- Green checkmark on Supabase integration
- Project keys automatically added
- Ready to build!

**Total time:** 3-5 minutes

---

## What Gets Configured

### Automatic Setup

When you connect Supabase, Yomake automatically:

**1. Adds environment variables:**
```typescript
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**2. Installs Supabase client:**
```bash
npm install @supabase/supabase-js
```

**3. Creates Supabase client file:**
```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)
```

**4. Ready to use:**
- Import in any component
- Call Supabase functions
- Secure by default

---

## Building with Supabase

### Database Tables

**Ask AI to create tables:**

```
Create a "posts" table with columns: id, title, content, author, created_at
```

**AI will:**
1. Connect to your Supabase project
2. Run SQL migration
3. Create table with proper types
4. Set up Row Level Security (optional)
5. Show confirmation

**View in Supabase Dashboard:**
1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project
3. Click "Table Editor"
4. See your new table

---

### Authentication

**Implement user auth:**

```
Add user authentication with email/password signup and login
```

**AI will create:**
- Signup form component
- Login form component
- Auth context provider
- Protected routes
- Logout functionality

**Example components:**
```typescript
// SignUp.tsx
<AuthForm
  onSubmit={async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
  }}
/>
```

---

### Data Queries

**Fetch data from database:**

```
Display all blog posts from the posts table in a grid
```

**AI will:**
```typescript
const { data: posts, error } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })
```

**Insert data:**

```
Add a form to create new blog posts
```

**AI will:**
```typescript
const { data, error } = await supabase
  .from('posts')
  .insert([
    { title, content, author }
  ])
```

---

### File Storage

**Upload files:**

```
Add profile picture upload using Supabase Storage
```

**AI will:**
1. Create storage bucket
2. Build upload component
3. Handle file selection
4. Upload to Supabase
5. Display uploaded image

**Example:**
```typescript
const { data, error } = await supabase.storage
  .from('avatars')
  .upload(`${userId}/avatar.jpg`, file)
```

---

### Real-Time Features

**Subscribe to changes:**

```
Show real-time updates when new posts are added
```

**AI will:**
```typescript
supabase
  .channel('posts')
  .on('postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'posts' },
    (payload) => {
      // Add new post to UI
    }
  )
  .subscribe()
```

**Use cases:**
- Live chat applications
- Collaborative editing
- Notifications
- Activity feeds
- Real-time dashboards

---

## Common Use Cases

### User Authentication System

**Complete auth setup:**

**1. Ask AI:**
```
Create a complete authentication system with Supabase:
- Email/password signup
- Login page
- Password reset
- Protected dashboard
- Logout functionality
```

**2. AI builds:**
- Auth forms with validation
- Protected route wrapper
- User context provider
- Session management
- Error handling

**3. You get:**
- Working authentication
- Secure routes
- User session persistence
- Production-ready code

---

### Blog or CMS

**Content management:**

**1. Database structure:**
```
Create a blog system with these tables:
- posts: title, content, author, published_at
- authors: name, bio, avatar_url
- categories: name, slug
```

**2. Features:**
```
Add a post editor with rich text and image uploads
```

```
Show blog posts filtered by category
```

```
Display author information with each post
```

**3. Result:**
- Full blogging platform
- Admin interface
- Public blog display
- Category system

---

### SaaS Application

**Multi-tenant app:**

**1. User management:**
```
Set up Supabase authentication with email verification
```

**2. Data structure:**
```
Create tables for:
- users: profile data
- organizations: company info
- projects: user projects
- memberships: link users to orgs
```

**3. Security:**
```
Set up Row Level Security so users only see their own data
```

**4. Billing:**
```
Add a subscription status field and check it before allowing access
```

---

### File Upload Application

**Handle files:**

**1. Storage setup:**
```
Create a file upload system using Supabase Storage for PDFs and images
```

**2. Upload interface:**
```
Add drag-and-drop file upload with progress bar
```

**3. File management:**
```
Show uploaded files in a list with download and delete options
```

**4. Security:**
```
Make files private so only the uploader can access them
```

---

## Supabase Dashboard

### What You Can Do

Access your Supabase Dashboard at [supabase.com/dashboard](https://supabase.com/dashboard):

**Table Editor:**
- View all data
- Add/edit/delete rows
- Create tables manually
- Set up relationships

**SQL Editor:**
- Write custom queries
- Create functions
- Set up triggers
- Run migrations

**Authentication:**
- View all users
- Manage auth settings
- Configure providers
- Set up email templates

**Storage:**
- Browse uploaded files
- Create buckets
- Set access policies
- View storage usage

**Database:**
- View schema
- Manage extensions
- Configure backups
- Connection pooling

**Logs:**
- Query logs
- Auth logs
- Storage logs
- Debug issues

---

## Row Level Security (RLS)

### What is RLS?

Row Level Security ensures users can only access data they're allowed to see.

**Example:**
- Users see only their own posts
- Admins see all posts
- Public can see published posts only

---

### Setting Up RLS

**Ask AI to configure:**

```
Set up Row Level Security on the posts table so users can only
edit their own posts but everyone can view published posts
```

**AI will create policies:**

```sql
-- Users can view published posts
CREATE POLICY "Public posts are viewable by everyone"
  ON posts FOR SELECT
  USING (published = true);

-- Users can insert their own posts
CREATE POLICY "Users can create posts"
  ON posts FOR INSERT
  WITH CHECK (auth.uid() = author_id);

-- Users can update their own posts
CREATE POLICY "Users can update own posts"
  ON posts FOR UPDATE
  USING (auth.uid() = author_id);
```

---

### Common RLS Patterns

**Public read, authenticated write:**
```
Anyone can view posts, only logged-in users can create them
```

**Owner-only access:**
```
Users can only see and edit their own data
```

**Role-based access:**
```
Admins can edit everything, users can edit their own data only
```

**Organization-based:**
```
Users in same organization can see each other's data
```

---

## Environment Variables

### Supabase Keys

**Two types of keys:**

**1. Anon Key (Public)**
- Safe to use in client-side code
- Respects RLS policies
- Used for most operations
- Already configured: `VITE_SUPABASE_ANON_KEY`

**2. Service Role Key (Private)**
- Bypass RLS policies
- Full admin access
- Never expose to client
- Use only in server functions

**Security note:** Anon key is safe to commit to GitHub because it respects your RLS policies.

---

### Adding Variables

**Automatic:**
- Supabase URL and Anon Key added automatically
- Available in all components
- Updated when you reconnect

**Manual (advanced):**
1. Supabase Dashboard → Settings → API
2. Copy keys
3. Add to Yomake Project Settings → Environment Variables
4. Use in code: `import.meta.env.VITE_SUPABASE_URL`

---

## Advanced Features

### Database Functions

**Server-side logic:**

**Ask AI:**
```
Create a Supabase function to count posts by user
```

**AI creates:**
```sql
CREATE FUNCTION get_post_count(user_id UUID)
RETURNS INTEGER AS $$
  SELECT COUNT(*) FROM posts WHERE author_id = user_id;
$$ LANGUAGE SQL;
```

**Call from code:**
```typescript
const { data, error } = await supabase.rpc('get_post_count', {
  user_id: userId
})
```

---

### Database Triggers

**Automatic actions:**

**Example:**
```
Set up a trigger to update the updated_at timestamp automatically
```

**AI creates:**
```sql
CREATE TRIGGER update_timestamp
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

---

### Edge Functions

**Serverless API endpoints:**

Supabase supports Deno-based edge functions for:
- Payment processing
- Email sending
- Third-party API calls
- Complex business logic

**Deploy manually via Supabase CLI** (coming to Yomake)

---

## Troubleshooting

### Connection Errors

**"Invalid API key"**

**Fix:**
1. Check environment variables are set
2. Verify keys in Supabase Dashboard
3. Reconnect Supabase integration
4. Redeploy project

---

### RLS Policy Errors

**"Row-level security policy violation"**

**Common causes:**
- RLS enabled but no policies set
- Policy doesn't match your use case
- Not authenticated when required

**Fix:**
```
Help me debug this RLS error: [error message]
```

AI will:
- Check existing policies
- Suggest corrections
- Update policies as needed

---

### Authentication Issues

**"User not authenticated"**

**Check:**
1. User actually logged in
2. Session hasn't expired
3. Email verified (if required)
4. Correct auth flow used

**Debug:**
```typescript
const { data: { session } } = await supabase.auth.getSession()
console.log('Current session:', session)
```

---

### Storage Upload Fails

**"Storage upload failed"**

**Common causes:**
- Bucket doesn't exist
- File too large
- Wrong permissions
- Invalid file type

**Fix:**
1. Check bucket exists in Supabase Dashboard
2. Verify storage policies
3. Check file size limits
4. Ask AI: `Fix the storage upload issue`

---

## Pricing

### Supabase Plans

**Free:**
- 500 MB database
- 1 GB storage
- 50 MB file upload limit
- 50,000 monthly active users
- 2 GB bandwidth

**Pro ($25/month):**
- 8 GB database
- 100 GB storage
- 5 GB file upload limit
- 100,000 monthly active users
- 250 GB bandwidth
- Daily backups
- Email support

**Enterprise (Custom):**
- Custom everything
- SLA guarantee
- Dedicated support
- On-premise options

**Yomake costs:**
- Supabase integration: Included in Creator plan+
- No additional Yomake fees
- Pay Supabase directly for usage

---

## Best Practices

### Security

**Enable RLS on all tables:**
```
Enable Row Level Security on the posts table
```

**Never expose Service Role key:**
- Keep it server-side only
- Use Edge Functions for admin operations
- Anon key for client operations

**Validate user input:**
- Check data before inserting
- Use TypeScript types
- Handle errors gracefully

---

### Performance

**Index frequently queried columns:**
```
Add an index on the author_id column in posts table
```

**Use select to limit data:**
```typescript
// ❌ Don't fetch everything
.select('*')

// ✅ Fetch only what you need
.select('id, title, created_at')
```

**Paginate large results:**
```typescript
.select('*')
.range(0, 9) // First 10 items
```

---

### Data Modeling

**Normalize your data:**
- Separate tables for related data
- Use foreign keys
- Avoid duplication

**Use UUID for primary keys:**
- More secure than incrementing integers
- Avoid enumeration attacks

**Add timestamps:**
```
created_at TIMESTAMP DEFAULT NOW()
updated_at TIMESTAMP DEFAULT NOW()
```

---

## FAQs

**Q: Do I need to know SQL?**
A: No! Yomake's AI handles all database operations. But knowing SQL helps for advanced use cases.

**Q: Can I use my existing Supabase project?**
A: Yes, just select it when connecting.

**Q: Is my data secure?**
A: Yes, with RLS policies. Always enable RLS and create proper policies.

**Q: Can I export my data?**
A: Yes, use Supabase Dashboard to export as SQL or CSV.

**Q: What happens if I disconnect Supabase?**
A: Your data remains in Supabase. The connection is removed from Yomake.

**Q: Can I use Supabase with Vercel?**
A: Absolutely! Environment variables work on Vercel deployments.

**Q: How do I back up my database?**
A: Pro plan includes daily backups. Free plan: export manually.

**Q: Can I use Supabase for a production app?**
A: Yes! Many production apps run on Supabase.

---

## Next Steps

Now that you've connected Supabase:

- Build an auth system
- Create database tables
- Add file uploads
- Implement real-time features

**Need help?** Just ask the AI:
```
Build a user authentication system with Supabase
```

---

**Build full-stack apps!** Supabase + Yomake = Complete application in hours.
