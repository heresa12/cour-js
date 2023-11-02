"use strict";

const Slider = {
	btns: [],
	dots: [],
	items: [],

	create(imgs,captions) {
		const container = document.createElement("div");
		container.classList.add("slider-container");
		const dots = document.createElement("div");
		dots.classList.add("dots");
		imgs.forEach((img, i) => {
			const div = document.createElement("div");
			div.classList.add("items", "fade");
			const image = document.createElement("img");
			image.src = img;

			const caption = document.createElement("div");
			caption.classList.add("caption");
			caption.textContent = captions[i];
			div.append(image, caption);

			const dot = document.createElement("span");
			dot.classList.add("dot");
			dot.dataset.id = i;
			dots.append(dot);
			container.append(div);
			this.dots.push(dot);
			this.items.push(div);
		})
		container.append(dots);
		const next = document.createElement("a");
		next.classList.add("next");
		next.innerHTML = "&#10095;";
		this.btns.push(next);
		const prev = document.createElement("a");
		prev.classList.add("prev");
		prev.innerHTML = "&#10094;";
		this.btns.push(prev);
		container.append(next, prev);
		this.init()
		return container;
	},

	showItems(n) {
		this.index = n > this.items.length - 1 ? 0 : n < 0 ? this.items.length - 1 : n;
		this.items.forEach((item, i) => {
			item.style.display = "none";
			this.dots[i].classList.remove("active");
		})
		this.items[this.index].style.display = "block";
		this.dots[this.index].classList.add("active");
	},

	currentItem(e) {
		let n = parseInt(e.target.dataset.id);
		this.showItems(n);
	},

	changeItem(e) {
		if (e.target.classList.contains("next")) {
			this.showItems(++this.index);
		} else {
			this.showItems(--this.index);
		}
	},

	init(style) {
		this.showItems(0);
		this.dots.forEach(dot => dot.addEventListener("pointerdown", this.currentItem.bind(this)));
		this.btns.forEach(btn => btn.addEventListener("pointerdown", this.changeItem.bind(this)));
		if (style) this.style();
	},

	style() {
		const style = document.createElement("style");
		style.textContent =

			document.head.append(style);
	}
}
export default Slider;