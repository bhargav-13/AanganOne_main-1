# 📸 How to Add Images to Your Project

I've created two folders for you to store images:

## 📁 Folder Locations

1. **`public/images/`** - For static images accessed directly
2. **`src/assets/images/`** - For images imported in components

---

## 🖼️ Method 1: Using `public/images/` (Easiest)

**Steps:**
1. Copy your image file to `public/images/` folder
2. Use it directly in your components with a path starting with `/images/`

**Example:**
```jsx
// In any component
<img src="/images/my-photo.jpg" alt="My Photo" className="w-full" />
```

**Full Example:**
```jsx
function MyComponent() {
  return (
    <div>
      <img 
        src="/images/hero.jpg" 
        alt="Hero Image" 
        className="w-full h-64 object-cover rounded-lg"
      />
    </div>
  );
}
```

---

## 🖼️ Method 2: Using `src/assets/images/` (Recommended for components)

**Steps:**
1. Copy your image file to `src/assets/images/` folder
2. Import it at the top of your component
3. Use the imported variable

**Example:**
```jsx
// Import the image
import myImage from './assets/images/my-photo.jpg';

function MyComponent() {
  return (
    <div>
      <img 
        src={myImage} 
        alt="My Photo" 
        className="w-full h-64 object-cover rounded-lg"
      />
    </div>
  );
}
```

---

## 💡 Which Method Should I Use?

### Use `public/images/` when:
- ✅ Large images that don't change
- ✅ Images referenced in HTML
- ✅ Favicons, logos
- ✅ You want simple direct paths

### Use `src/assets/images/` when:
- ✅ Images used in React components
- ✅ You want Vite to optimize the images
- ✅ Better for bundling and performance
- ✅ Dynamic image loading

---

## 🎨 Example: Using Images in Cards

I've updated the `Card` component to support images. You can now use it like this:

```jsx
// Using public folder
<Card
  title="My Card"
  description="Card description"
  image="/images/card-image.jpg"
/>

// Or using assets folder
import cardImage from './assets/images/card-image.jpg';
<Card
  title="My Card"
  description="Card description"
  image={cardImage}
/>
```

---

## 📝 Quick Steps to Add Your Image

1. **Choose your method** (public or assets)
2. **Copy your image** to the appropriate folder:
   - `public/images/your-image.jpg` OR
   - `src/assets/images/your-image.jpg`
3. **Use it in your component** following the examples above

That's it! 🎉

