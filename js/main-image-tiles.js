/// -----------------------------------------------------------------------------------
/// edit this list to add or remove portfolio images
/// -----------------------------------------------------------------------------------
const images = [
  "AniMali-image1-500.png",
  "AniMali-image2-500.png",
  "AniMali-image3-500-01.png",
  "AniMali-image4-500.png",
  "Busybee-image1-500.png",
  "busybee-image2-500.png",
  "Busybee-image3-500.png",
  "Busybee-image4-500.png",
  "cattree-image1-500.png",
  "cattree-image2-500.png",
  "cattree-image3-500.png",
  "ONS-image1-500.png",
  "ONS-image2-500.png",
  "ONS-image3-500.png",
  "ONS-image4-500.png",
  "Overprint-image1-500.png",
  "Overprint-image2-500.png",
  "Overprint-image3-500.png",
  "Overprint-image4-500.png",
  "saluda-image1-500.png",
  "saluda-image2-500.png",
  "saluda-image3-500.png",
  "saluda-image4-500.png",
  "scoop-image1-500.png",
  "scoop-image2-500.png",
  "scoop-image3-500.png",
  "zoo-image1-500.png",
  "zoo-image2-500.png"
]





/**
 * The following section of code 
 * 
 */
const row = document.getElementById("generator");
const m = new Masonry(row, {
  itemSelector: ".grid-item",
});

function loadImage() {
  m.layout();
}

for (let image of images) {
  const template = `
						<div class="col-sm-6 col-lg-4 mb-4 grid-item">
							<div class="card hover-card">
								<img loading="lazy" onload="loadImage()" class="img-fluid" id="4" src="/images/portfolio/${image}" alt="portfolio image" />
							</div>
						</div>
						`;

  const placeholder = document.createElement("div");
  placeholder.insertAdjacentHTML("afterbegin", template);
  const node = placeholder.firstElementChild;

  row.appendChild(node);
  m.appended(node);
}
