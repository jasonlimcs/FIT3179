# FIT3179

## Emphasis theme (takeaways and stats)

This project includes small, reusable CSS utilities to highlight main takeaways and statistics consistently across the page (defined in `index.html`).

- `.takeaway` - bold colored pill for key insights.
- `.stat` - bold numbers; combine with a variant:
	- `.stat--accent` - accent colored number
	- `.stat--up` - positive/"up" (green)
	- `.stat--down` - negative/"down" (red)
- `.hl` - concise inline highlight for terms/entities.

Example usage:

```html
<p>
	<span class="takeaway">Lower ratios correlate with higher retention</span>.
	In 2024, inner regional areas had the <span class="stat stat--down">lowest</span> ARR,
	while very remote areas recorded the <span class="stat stat--up">highest</span>.
	ACT and SA show consistently strong performance (<span class="stat stat--accent">80%+</span>).
	Compare states by hovering the chart.
  
	Ratios around <span class="stat stat--accent">9&ndash;11</span> students often align with
	<span class="stat stat--up">80&ndash;100%</span> retention.
	Independent schools usually have lower ratios than <span class="hl">Government</span>
	and <span class="hl">Catholic</span>.
  
	Use `&ndash;` for ranges to avoid Unicode issues in HTML.
</p>
```
