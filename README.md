# Welcome to Mock Interview Prep

If you are getting ready for a Software Engineer II interview this is for you. 

## What to Expect

1. **JavaScript fundamentals** (Map, Set, basic concepts)
2. **Problem-solving skills** (algorithms, thinking through problems)
3. **Experience chat** (past projects, how you work)
4. **Coding challenge** (React app - this was fun!)
5. **System design** (architecture thinking)
6. **Debugging scenarios** (real-world problem solving)

---

## JavaScript Basics 

### Map vs Object - Why does this matter?

Explain Maps and when you'd use them over regular objects. 

**Maps are great because:**
- Keys can be anything (objects, functions, primitives)
- They maintain insertion order
- Easy to get the size with `.size`
- Better for frequent additions/deletions

**Quick example:**
```javascript
// Remove duplicates from [1, 2, 2, 3, 4, 4, 5]
const unique = [...new Set([1, 2, 2, 3, 4, 4, 5])]; // [1, 2, 3, 4, 5]

// Count how many times each number appears
const counts = new Map();
[1, 2, 2, 3, 4, 4, 5].forEach(num => {
    counts.set(num, (counts.get(num) || 0) + 1);
});
// Map { 1 => 1, 2 => 2, 3 => 1, 4 => 2, 5 => 1 }
```

### The Classic JavaScript Q&A

**Variable scoping** - they love this one:
```javascript
// This prints "3" three times - why?
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// Fix it with let (block scope)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

**== vs ===** - always use === unless you specifically need type coercion
**Hoisting** - declarations get moved to the top, but not assignments

---

## The Coding Challenge - Product Catalog

Build a React e-commerce catalog. 

### What it does:
- Shows products in a nice grid
- Search through product names and descriptions  
- Filter by category, brand, price range
- Sort by different criteria
- Pagination (because we do not want infinite scroll )
- Product detail modal when you click "View Details"

### Files:
```
src/
├── App.js
├── hooks/useProductCatalog.js     # All the business logic
├── components/
│   ├── ProductCatalog.jsx         # Main component
│   ├── SearchAndFilters.jsx       # Search bar and filters
│   ├── ProductGrid.jsx            # Grid of products
│   ├── ProductCard.jsx            # Individual product cards
│   ├── Pagination.jsx             # Page navigation
│   └── ProductModal.jsx           # Product detail popup
└── data/products.js               # Sample data (12 products)
```

### Key things they wanted to see:

**Performance optimization:**
```javascript
// Memoize expensive calculations
const filteredProducts = useMemo(() => {
  // Filter logic here
}, [searchTerm, filters]);

// Prevent unnecessary re-renders
const handleSearch = useCallback((term) => {
  setSearchTerm(term);
}, []);
```

**State management:** Used hooks instead of Redux (for smaller apps)

**Component composition:** Each component has a single responsibility

### To run it:
```bash
npm install
npm start
```

The sample data includes electronics, clothing, home stuff - gives you something to search and filter with.

---

## System Design Question

Design a merchant dashboard for payment analytics. Go through:

- **Database:** Separate read/write DBs, payment events table
- **API:** REST endpoints with proper pagination
- **Real-time updates:** WebSocket connections for live data
- **Caching:** Redis for frequently accessed data
- **Security:** JWT tokens, rate limiting, data encryption

Main thing is to think out loud and ask clarifying questions.

---

## Production Debugging Scenario

**"Payments are going to the wrong merchant - how do you debug this?"**

One approach:
1. **Don't panic** - gather information first
2. **Check logs** - payment processing, merchant ID mapping
3. **Look at recent deployments** - did anything change?
4. **Data integrity** - are merchant IDs getting corrupted somewhere?
5. **Communication** - keep stakeholders updated, be transparent

Systematic thinking, not just technical skills.

---


## React vs React Native 

They might ask about this:
- **React:** Web apps, renders to DOM
- **React Native:** Mobile apps, renders to native components
- Both use similar patterns: components, state, lifecycle methods

---

## Random Tips

- Practice coding challenges on a whiteboard or shared screen
- Be ready to talk about your past projects in detail
- Know your fundamentals (closures, prototypes, async/await)
- Understand modern React patterns (hooks, context, suspense)
- Have questions ready about the role and company

---

## Interview Instructions

### Getting Started
1. Clone and run the project:
   ```bash
   git clone [repository-url]
   cd Lightspeed
   npm install
   npm start
   ```

2. The app will display 8 products but **none of the filters work yet!**

### What's Working
- ✅ Basic React app structure
- ✅ Product grid displays 8 sample products
- ✅ All components render without errors
- ✅ Clean, professional UI design
- ✅ Form inputs and buttons are connected

### What Needs Implementation (TODOs)
The core business logic is missing! This is what we'll build together:

#### Priority 1: Basic Filtering
- **Search functionality** - Filter products by name, description, tags
- **Category filter** - Filter by Electronics, Clothing, etc.
- **Price range filter** - Min/max price filtering

#### Priority 2: Sorting & Pagination
- **Sorting** - Name, price, rating, reviews (ascending/descending)
- **Pagination** - Calculate pages, navigation controls
- **Results count** - Show filtered results count

#### Priority 3: Enhanced Features
- **Stock filtering** - Show/hide out of stock items
- **Filter summary** - Display active filters
- **Performance** - useMemo/useCallback optimization

### Interview Focus Areas
- **React Hooks** - Custom hooks, state management, memoization
- **Algorithm Design** - Filtering, sorting, pagination logic
- **Performance** - When and how to optimize re-renders
- **Component Architecture** - Props, composition, separation of concerns
- **User Experience** - Loading states, error handling, responsive design

### Approach
1. **Start Simple** - Get basic search working first
2. **Build Incrementally** - Add one filter at a time  
3. **Think Out Loud** - Explain your reasoning and trade-offs
4. **Ask Questions** - Clarify requirements and edge cases
5. **Test As You Go** - Verify functionality works as expected

The codebase is designed to let you focus on the algorithms and React patterns without getting bogged down in setup or styling.

---
