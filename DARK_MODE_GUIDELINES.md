# Dark Mode Guidelines for FynCom Website

## The Problem
The website frequently has dark mode styling issues where text becomes invisible or has poor contrast when users switch to dark mode. This happens because new CSS is often written without considering dark mode support.

## The Solution: Always Use CSS Variables

### 1. Available CSS Variables (from layout.css)

**Text Colors:**
- `var(--color-text)` - Main text color (auto-switches: #333 light, #eaeaea dark)
- `var(--color-background)` - Background color (auto-switches: #fff light, #121212 dark)

**Brand Colors:**
- `var(--fyncom-blue)` - #4a90e2
- `var(--fyncom-red)` - #ff5a5f  
- `var(--fyncom-cyan)` - #408a97
- `var(--fyncom-dark-cyan)` - #206076
- `var(--fyncom-darkest-cyan)` - #003554
- `var(--karmacall-green)` - #008080

**Interactive Elements:**
- `var(--button-learn-more)` - Button background
- `var(--button-learn-more-hover)` - Button hover state

### 2. Mandatory CSS Pattern

**ALWAYS write CSS in this pattern:**

```css
/* Base styles using CSS variables */
.my-component {
  background: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-bar);
}

.my-component h3 {
  color: var(--color-text);
}

.my-component p {
  color: var(--color-text);
  opacity: 0.8; /* Use opacity for lighter text instead of hardcoded colors */
}

/* Dark mode overrides (if needed) */
@media (prefers-color-scheme: dark) {
  .my-component {
    background: var(--fyncom-darkest-cyan); /* Only if different from --color-background */
  }
}

/* Manual dark mode support */
:root[data-theme="dark"] .my-component {
  background: var(--fyncom-darkest-cyan);
}
```

### 3. What NOT to Do

❌ **NEVER hardcode colors:**
```css
.bad-example {
  background: #f8f9fa;  /* Will be invisible in dark mode */
  color: #333;          /* Will be invisible in dark mode */
}
```

❌ **NEVER use only light mode colors:**
```css
.bad-example {
  color: #2c3e50;       /* Dark text invisible on dark background */
}
```

### 4. Testing Checklist

Before committing CSS changes:

1. **Test in light mode** - Does it look good?
2. **Test in dark mode** - Switch your browser/OS to dark mode
3. **Check contrast** - Can you read all text clearly?
4. **Test both modes** - Use both `prefers-color-scheme` and manual `data-theme="dark"`

### 5. Quick Fix for Existing Issues

If you find dark mode issues in existing CSS:

1. Replace hardcoded colors with CSS variables
2. Add dark mode overrides if needed
3. Test both light and dark modes

### 6. Browser Testing

**Chrome/Edge:** DevTools > Rendering > Emulate CSS prefers-color-scheme: dark
**Firefox:** DevTools > Settings > Simulate prefers-color-scheme: dark
**Safari:** Develop > Experimental Features > Dark Mode CSS Support

### 7. Common Patterns

**Cards/Sections:**
```css
.card {
  background: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-bar);
}
```

**Success/Error Messages:**
```css
.success-message {
  background: var(--fyncom-darkest-cyan);
  color: var(--color-text);
  border: 2px solid var(--karmacall-green);
}
```

**Buttons:**
```css
.button {
  background: var(--button-learn-more);
  color: var(--color-text);
}

.button:hover {
  background: var(--button-learn-more-hover);
}
```

## Implementation for AI Agents

When creating new CSS:

1. **Always start with CSS variables** from the list above
2. **Always add dark mode support** using both `@media (prefers-color-scheme: dark)` and `:root[data-theme="dark"]`
3. **Test the output** by asking the developer to check both light and dark modes
4. **Use opacity for text variations** instead of hardcoded lighter colors

This systematic approach will eliminate the persistent dark mode issues across the website.
