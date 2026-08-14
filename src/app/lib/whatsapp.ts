const WA_NUMBER = "51983552696";

export function waLink(product: string) {
  const msg = encodeURIComponent(
    `Hola YOUNGSHARK! 🦈 Quiero saber más sobre: *${product}*. ¿Tienen disponibilidad?`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}
