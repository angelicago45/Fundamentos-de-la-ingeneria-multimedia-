<script>
  const track = document.getElementById("slideTrack");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  let index = 0;
  const slideWidth = 220; // ancho total de imagen + margen

  next.addEventListener("click", () => {
    if (index < track.children.length - 1) {
      index++;
      track.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  });

  prev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  });
</script>
