# Loading Animation Project

## 📝 Project Description
This project demonstrates a **custom loading animation** using HTML and CSS. The animation consists of four bouncing dots that shrink and grow in size continuously, creating a visually appealing loader effect. It can be used as a **preloader** for websites or web applications to enhance user experience while content is loading.


---

## 🚀 Features
- Simple and clean **HTML structure**.
- Fully **CSS-based animation** with smooth transitions.
- **Responsive** design — centers perfectly on all screen sizes.
- Uses **keyframes animation** to create a bouncing effect for multiple dots.
- Easy to customize **colors**, **size**, and **animation speed**.

---

## 📂 File Structure
/project-root
│
├── index.html # Main HTML file containing the loader structure
├── styles.css # CSS file with styling and animations

## 💡 How It Works
1. The HTML file contains a wrapper section that centers the loader.
2. Inside the loader, there are four div elements representing the bouncing dots.
3. CSS styles:
   - `.wrapper` uses Flexbox to center the loader vertically and horizontally.
   - `.loader .loading` defines the size, color, shape, and animation.
   - `@keyframes load` controls the animation by changing the width and height of each dot to create a bouncing/shrinking effect.
4. Animation delays (`animation-delay`) are applied to each dot for a staggered effect, giving the illusion of sequential movement.


## 🎨 Customization
- **Colors:** Change `background-color` in `.loader .loading` to any desired color.
- **Dot size:** Adjust `width` and `height` in `.loader .loading` and keyframes.
- **Animation speed:** Modify the `animation` duration (currently `0.8s`) in `.loader .loading`.



## 🛠 Technology Used
- HTML5
- CSS3 (Flexbox, Keyframes Animation)
